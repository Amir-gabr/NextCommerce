//
//
//
"use client";
//
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Products, StateProps } from "../../type";
import FormattedPrice from "./FormattedPrice";
import { loadStripe } from "@stripe/stripe-js";
import { useSession } from "next-auth/react";
import { resetCart, saveOrder } from "@/redux/shoppingSlice";

const PaymentForm = () => {
  const dispatch = useDispatch();
  const { productData, userInfo } = useSelector(
    (state: StateProps) => state.Shopping
  );
  const [totalAmt, setTotalAmt] = useState(0);

  useEffect(() => {
    let amt = 0;
    productData?.map((item: Products) => {
      amt += item?.price * item?.quantity;
      return;
    });
    setTotalAmt(amt);
  }, [productData]);
  //================   stripe payment start here =================
  const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
  );
  const { data: session } = useSession();
  const handleCheckout = async () => {
    const stripe = await stripePromise;
    const response = await fetch("http://localhost:3000/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        items: productData,
        email: session?.user?.email,
      }),
    });
    const data = await response.json();

    if (response.ok) {
      await dispatch(saveOrder({ order: productData, id: data.id }));
      stripe?.redirectToCheckout({ sessionId: data.id });
      dispatch(resetCart());
    } else {
      throw new Error("Failed to create Stripe Payment");
    }
  };
  //================   stripe payment end here ===================
  return (
    <div className="w-full bg-white p-5">
      <h2 className="uppercase text-xl font-semibold">Cart Totals</h2>
      <div className="py-1.5 border-b-[2px] border-slate-300 ">
        <div className="max-w-lg flex items-center justify-between">
          <p className="uppercase">Subtotal</p>
          <div className="">
            <FormattedPrice amount={totalAmt} />
          </div>
        </div>
      </div>
      <div className="py-1.5 border-b-[2px] border-slate-300 ">
        <div className="max-w-lg flex items-center justify-between">
          <p className="uppercase">shipping</p>
          <div className="">
            <FormattedPrice amount={20} />
          </div>
        </div>
      </div>
      <div className="py-1.5 mb-5">
        <div className="max-w-lg flex items-center justify-between">
          <p className="uppercase">total price</p>
          <div className="">
            <FormattedPrice amount={totalAmt + 20} />
          </div>
        </div>
      </div>
      {userInfo ? (
        <button
          onClick={handleCheckout}
          className="py-2 px-5 bg-gray-900 text-white font-semibold hover:bg-gray-700"
        >
          Proceed to checkout
        </button>
      ) : (
        <div className="">
          <button className="cursor-not-allowed py-2 px-5 bg-gray-600 text-white font-semibold">
            Proceed to checkout
          </button>
          <p className="mt-4 text-xl text-red-600 font-semibold animate-bounce">
            Please login to continue checkout
          </p>
        </div>
      )}
    </div>
  );
};
export default PaymentForm;
