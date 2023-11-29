//
//
"use client";
//
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Container from "./Container";
import { IoSearch } from "react-icons/io5";
import { FaUserAlt } from "react-icons/fa";
import { MdShoppingCart } from "react-icons/md";
import { BsBookmarks } from "react-icons/bs";
import { useSession, signIn, signOut } from "next-auth/react";
import { FiLogOut } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { Products, StateProps } from "../../type";
import FormattedPrice from "./FormattedPrice";
import { addUser, deleteUser } from "@/redux/shoppingSlice";

const Navbar = () => {
  const { data: session } = useSession();

  const dispatch = useDispatch();

  const { productData, orderData } = useSelector(
    (state: StateProps) => state.Shopping
  );
  useEffect(() => {
    if (session) {
      dispatch(
        addUser({
          name: session?.user?.name,
          email: session?.user?.email,
          image: session?.user?.image,
        })
      );
    } else {
      dispatch(deleteUser());
    }
  }, [session, dispatch]);

  const [totalAmt, setTotalAmt] = useState(0);
  useEffect(() => {
    let amt = 0;
    productData.map((item: Products) => {
      amt += item.price * item.quantity;
      return;
    });
    setTotalAmt(amt);
  }, [productData]);
  return (
    <div className="bg-bodyColor h-20 z-50 sticky top-0 shadow-md">
      <Container className="h-full flex items-center justify-between">
        <div className="text-2xl md:text-4xl font-semibold">
          <Link href="/">
            Next
            <span className="font-bold text-orange-500">Commerce</span>
          </Link>
        </div>
        <div className="flex items-center justify-center gap-x-5">
          {/* login / register  button */}
          {!session && (
            <div
              onClick={() => signIn()}
              className="flex items-center justify-center gap-2 bg-darkText text-white 
                      rounded-full py-1 px-1.5 md:py-1.5 md:px-2 border-[2px] cursor-pointer
                      hover:bg-gray-900 duration-200"
            >
              <FaUserAlt className="text-sm md:text-lg" />
              <span className="text-xs md:text-sm font-semibold">
                Login/Register
              </span>
            </div>
          )}
          {/* user image */}
          {session && (
            <div className="overflow-hidden w-10 h-10 border-[2px] border-orange-600 rounded-full md:w-14 md:h-14 ">
              <Image
                src={session?.user?.image as string}
                alt="user image"
                className="w-full h-full"
                width={60}
                height={60}
              />
            </div>
          )}
          {/* logout  button */}
          {session && (
            <div
              onClick={() => signOut()}
              className="flex items-center justify-center gap-2 bg-darkText text-white 
                      rounded-full py-1 px-1.5 md:py-1.5 md:px-2 border-[2px] cursor-pointer
                      hover:bg-gray-900 duration-200"
            >
              <FiLogOut className="text-sm md:text-lg" />
              <span className="text-xs md:text-sm font-semibold">Logout</span>
            </div>
          )}
          {/* order button */}
          <Link href="/order">
            {orderData?.order?.length > 0 && session && (
              <div
                className="hidden md:flex items-center justify-center gap-2 
                          bg-darkText text-white rounded-full py-1.5 px-2"
              >
                <BsBookmarks className="text-lg" />
                <p className="text-sm font-semibold">Orders</p>
              </div>
            )}
          </Link>
          {/* cart button */}
          <Link href="/cart">
            <div
              className="relative flex items-center justify-center gap-2
                    bg-darkText text-white rounded-full py-1 px-2"
            >
              <MdShoppingCart className="text-xl" />
              <span className="hidden md:block">
                <FormattedPrice amount={totalAmt ? totalAmt : 0.0} />
              </span>
              {productData?.length === 0 ? (
                <span
                  className="absolute flex items-center justify-center 
                      -top-1.5 -right-1 md:-top-3 md:-right-2 rounded-full font-semibold
                      bg-orange-500 text-sm md:text-lg w-4 h-4 md:w-6 md:h-6 shadow-lg shadow-black"
                >
                  {productData ? productData?.length : 0}
                </span>
              ) : (
                <span className="absolute -top-1.5 -right-1 md:-top-3 md:-right-2 flex w-4 h-4 md:w-6 md:h-6">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75"></span>
                  <span className="absolute inline-flex items-center justify-center text-sm md:text-lg w-4 h-4 md:w-6 md:h-6 rounded-full font-semibold bg-orange-500 shadow-lg shadow-black">
                    {productData ? productData?.length : 0}
                  </span>
                </span>
              )}
            </div>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
