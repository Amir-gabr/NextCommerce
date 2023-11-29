//
//
//
"use client";
//
import React from "react";
import Image from "next/image";
import FormattedPrice from "./FormattedPrice";
import { calculatePercentage } from "@/helper";
import { IoMdCart } from "react-icons/io";
import { MdFavoriteBorder } from "react-icons/md";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/shoppingSlice";
import toast, { Toaster } from "react-hot-toast";



const SingleProductData = ({ product }: any) => {
  const dispatch = useDispatch();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 bg-white p-10">
      <div className="max-h-[500px]">
        <Image
          src={product?.image}
          alt="image"
          width={500}
          height={500}
          className="w-full h-full rounded-lg"
        />
      </div>
      <div className="flex flex-col justify-between">
        <div className="">
          <span className="text-3xl font-bold text-darkText">
            {product?.title}
          </span>
        </div>
        <div className="mt-3 text-lg font-semibold text-gray-600">
          Description :{" "}
          <span className="text-base text-orange-500">
            {product?.description}
          </span>
        </div>
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center gap-x-2">
            <span className="flex flex-row font-semibold text-lg text-gray-600">
              Price :{" "}
              <span className="text-orange-500">
                <FormattedPrice amount={product?.price} />
              </span>
            </span>
            /
            <span className="li line-through text-gray-500 text-sm font-bold">
              <FormattedPrice amount={product?.oldPrice} />
            </span>
          </div>
          <div className="border-[2px] border-orange-600 py-0.5 px-1.5 rounded-xl">
            <span className="">
              {calculatePercentage(product?.price, product?.oldPrice)}% off
            </span>
          </div>
        </div>
        <div className="mt-2 text-lg font-semibold text-gray-600">
          SKU : <span className="text-orange-500">{product?._id}</span>
        </div>
        <div className="mt-2 text-lg font-semibold text-gray-600">
          Category :{" "}
          <span className="text-orange-500">{product?.category}</span>
        </div>
        <div
          className="mt-3 flex"
          onClick={() =>
            dispatch(addToCart(product)) &&
            toast.success(
              `${product?.title.substring(0, 15)} Added successfully`
            )
          }
        >
          <button className="border-white border-r-2 bg-orange-500 text-sm text-white font-semibold py-2 px-3 hover:bg-orange-700 duration-200">
            ADD TO CART
          </button>
          <span className="flex items-center justify-center text-xl py-2 px-3 bg-darkText text-white">
            <IoMdCart />
          </span>
        </div>
        <div className="flex text-lg gap-x-3 mt-3 p-2">
          <span className="flex items-center justify-center">
            <MdFavoriteBorder />
          </span>
          <button className="">Add to wish</button>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default SingleProductData;
