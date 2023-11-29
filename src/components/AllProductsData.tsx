//
//
//
"use client";
//
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { itemProps } from "../../type";
import { calculatePercentage } from "@/helper";
import FormattedPrice from "./FormattedPrice";
import { IoIosStar } from "react-icons/io";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/shoppingSlice";
import toast, { Toaster } from "react-hot-toast";
const AllProductsData = ({ item }: itemProps) => {
  const dispatch = useDispatch();

  const stars = Array.from({ length: item?.rating }, (_, index) => (
    <span key={index} className="text-yellow-400">
      <IoIosStar />
    </span>
  ));
  return (
    <div className="w-full rounded-lg overflow-hidden bg-white">
      <div className="">
        <div className="relative w-full h-96 group overflow-hidden ">
          <Link
            href={{ pathname: "/singleProduct", query: { _id: item?._id } }}
          >
            <Image
              src={item?.image}
              alt="photo Product"
              width={500}
              height={500}
              className="w-full h-full object-cover group-hover:scale-110 duration-200 "
            />
          </Link>
          {item?.isNew && (
            <span
              className="absolute top-2 right-2 text-sm font-semibold 
                  py-1 px-1.5  rounded-full bg-white group-hover:bg-orange-500
                  group-hover:text-white"
            >
              New Arrival
            </span>
          )}
        </div>
        <div className="py-3 px-4">
          <div className="">
            <span className="text-lg font-bold">{item?.title}</span>
          </div>
          <div className=" flex items-center justify-between mt-2">
            <div className="border-[2px] border-orange-600 py-0.5 px-1.5 rounded-xl">
              <span className="">
                {calculatePercentage(item?.price, item?.oldPrice)}% off
              </span>
            </div>
            <div className=" flex items-center gap-x-3">
              <span className="line-through text-gray-500 text-sm font-bold">
                <FormattedPrice amount={item?.oldPrice} />
              </span>
              <span className="font-bold text-lg">
                <FormattedPrice amount={item?.price} />
              </span>
            </div>
          </div>
          <div className="mt-3 flex justify-between items-center">
            <button
              onClick={() =>
                dispatch(addToCart(item)) &&
                toast.success(
                  `${item?.title.substring(0, 15)} Added successfully`
                )
              }
              className="bg-orange-500 text-sm text-white font-semibold py-1 px-3 rounded-full hover:bg-orange-700 duration-200"
            >
              ADD TO CART
            </button>
            <span className="flex">{stars}</span>
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default AllProductsData;
