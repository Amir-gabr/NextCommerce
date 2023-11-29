//
//
//
//
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Products, StateProps } from "../../type";
import { GrClose } from "react-icons/gr";
import Image from "next/image";
import FormattedPrice from "./FormattedPrice";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import {
  decreaseQuantity,
  deleteFromCart,
  increaseQuantity,
} from "@/redux/shoppingSlice";

const CartData = () => {
  const { productData } = useSelector((state: StateProps) => state?.Shopping);

  const dispatch = useDispatch();

  return (
    <div className="">
      <div className="flex flex-col gap-y-4">
        {/* All products Cart */}
        <div className="flex flex-col gap-y-2">
          {productData?.map((item: Products) => (
            <div
              className="flex flex-col gap-y-4 items-center justify-between bg-white py-3 px-5 md:flex-row "
              key={item?._id}
            >
              {/* img product */}
              <div className="w-full flex items-center gap-x-4 md:w-1/3">
                <span
                  onClick={() => dispatch(deleteFromCart(item?._id))}
                  className="p-1.5 font-extrabold cursor-pointer rounded-full bg-orange-500 text-white hover:bg-orange-700 duration-200"
                >
                  <GrClose />
                </span>
                <Image
                  src={item?.image}
                  alt="Product image"
                  width={500}
                  height={500}
                  className="w-20 h-20 object-cover"
                />
                <span className="text-lg font-semibold ">{item?.title}</span>
              </div>
              {/* quantity*/}
              <div className="w-auto flex items-center gap-x-4 font-semibold text-lg border-[1px] border-slate-700 px-4 py-2">
                <p className="">Quantity</p>
                <span className="flex items-center gap-x-2">
                  <span
                    className="cursor-pointer"
                    onClick={() => dispatch(decreaseQuantity(item))}
                  >
                    <FiChevronLeft />
                  </span>
                  <span className="font-bold text-xl">{item?.quantity}</span>
                  <span
                    className="cursor-pointer"
                    onClick={() => dispatch(increaseQuantity(item))}
                  >
                    <FiChevronRight />
                  </span>
                </span>
              </div>
              {/* price */}
              <div className="w-full flex items-end justify-start font-semibold text-lg md:w-1/3 md:justify-end">
                <FormattedPrice amount={item?.price * item?.quantity} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CartData;
