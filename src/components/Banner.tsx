//
//
"use client";

import Image from "next/image";
import Slider from "react-slick";
import bannerone from "@/images/bannerone.jpg";
import bannertwo from "@/images/bannertwo.jpg";
import bannerthree from "@/images/bannerthree.jpg";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import BannerText from "./BannerText";

export default function Banner() {
  const NextArrow = (props: any) => {
    const { onClick } = props;
    return (
      <div
        className="absolute z-20 top-1/2 left-3 flex items-center 
        justify-center text-2xl font-semibold p-2 rounded-full 
        bg-slate-100 hover:text-orange-600 hover:bg-white
        cursor-pointer duration-200"
        onClick={onClick}
      >
        <SlArrowLeft />
      </div>
    );
  };
  const PrevArrow = (props: any) => {
    const { onClick } = props;
    return (
      <div
        className="absolute z-20 top-1/2 right-3 flex items-center 
        justify-center text-2xl font-semibold p-2 rounded-full
      bg-slate-200 hover:text-orange-600 hover:bg-white
        cursor-pointer duration-200"
        onClick={onClick}
      >
        <SlArrowRight />
      </div>
    );
  };

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    Arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <div className="relative ">
      <Slider {...settings}>
        <div className="relative  w-full h-full">
          <Image
            src={bannerone}
            alt="photo"
            className="relative w-full h-full"
            priority
          />
          <BannerText title="Outware Picks" />
        </div>
        <div className="relative w-full h-full">
          <Image
            src={bannertwo}
            alt="photo"
            className="relative w-full h-full"
          />
          <BannerText title="Seasonal Offers" />
        </div>
        <div className="relative w-full h-full">
          <Image
            src={bannerthree}
            alt="photo"
            className="relative w-full h-full"
          />
          <BannerText title="Best for men" />
        </div>
      </Slider>
      <div className="absolute z-10 h-44 w-full bg-gradient-to-t from-gray-100 to-transparent left-0 bottom-0"/>
    </div>
  );
}
