//
//
//
"use client";
import Container from "@/components/Container";
//
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { StateProps } from "../../../type";
import CartData from "@/components/CartData";
import { resetCart } from "@/redux/shoppingSlice";
import PaymentForm from "@/components/PaymentForm";
import emptyCart from "../../images/empty-cart2.png";

const CartPage = () => {
  const { productData } = useSelector((state: StateProps) => state?.Shopping);
  const dispatch = useDispatch();
  return (
    <div className="bg-slate-100">
      <Container className="">
        <h2 className="text-3xl font-semibold text-darkText mb-5">Cart</h2>
        <div className="hidden lg:flex items-center justify-between py-1 px-3 mb-4 bg-white text-xl text-orange-500 font-semibold ">
          <span className="">Product</span>
          <span className="">Quantity</span>
          <span className="">Subtotal</span>
        </div>
        {productData?.length > 0 ? (
          <div className="flex flex-col gap-y-4">
            <div className="">
              <CartData />
            </div>
            <div className="w-full flex justify-end">
              <button
                onClick={() => dispatch(resetCart())}
                className="text-lg font-semibold py-2 px-5 text-white bg-red-500 hover:bg-red-700 duration-300"
              >
                reset cart
              </button>
            </div>
            <div className="">
              <PaymentForm />
            </div>
          </div>
        ) : (
          <div className="w-full h-96 flex items-center justify-center">
              <div className="flex flex-col items-center gap-y-6 font-semibold">
              <div className="">
                <Image src={emptyCart} alt="photo" width={400} height={400}/>
              </div>
              <Link href="/" >
                <span className="px-5 py-2 text-white bg-orange-700 hover:bg-orange-500 duration-200">
                  Return to shop
                </span>
              </Link>
            </div>
          </div>
        )}
      </Container>
    </div>
  );
};

export default CartPage;
