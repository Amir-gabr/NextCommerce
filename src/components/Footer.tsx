//
//
//
//
//
//
import React from "react";
import Link from "next/link";
import payment from "@/images/payment.png";
import { TfiLayoutGrid2Alt } from "react-icons/tfi";
import {
  FaFacebookF,
  FaGithub,
  FaInstagramSquare,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import Image from "next/image";

export default function Footer() {
  return (
    //  <!-- Footer container -->
    <footer className="bg-darkText text-center text-white dark:bg-neutral-600 dark:text-neutral-200 lg:text-left">
      <div className="flex items-center justify-center border-b-2 border-neutral-200 p-6 dark:border-neutral-500 lg:justify-between">
        <div className="mr-12 hidden lg:block">
          <span>Get connected with us on social networks:</span>
        </div>
        {/* <!-- Social network icons container --> */}
        <div className="flex justify-center">
          <Link
            href="#!"
            className="mr-6 text-darkText text-lg dark:text-neutral-200 bg-white p-2 flex items-center justify-center rounded-md hover:text-orange-500 duration-200"
          >
            <FaFacebookF />
          </Link>
          <Link
            href="#!"
            className="mr-6 text-darkText text-lg dark:text-neutral-200 bg-white p-2 flex items-center justify-center rounded-md hover:text-orange-500 duration-200"
          >
            <FaGithub />
          </Link>
          <Link
            href="#!"
            className="mr-6 text-darkText text-lg dark:text-neutral-200 bg-white p-2 flex items-center justify-center rounded-md hover:text-orange-500 duration-200"
          >
            <FaInstagramSquare />
          </Link>
          <Link
            href="#!"
            className="mr-6 text-darkText text-lg dark:text-neutral-200 bg-white p-2 flex items-center justify-center rounded-md hover:text-orange-500 duration-200"
          >
            <FaLinkedin />
          </Link>
          <Link
            href="#!"
            className="mr-6 text-darkText text-lg dark:text-neutral-200 bg-white p-2 flex items-center justify-center rounded-md hover:text-orange-500 duration-200"
          >
            <FaYoutube />
          </Link>
        </div>
      </div>

      {/* <!-- Main container div: holds the entire content of the footer, including four sections (TW elements, Products, Useful links, and Contact), with responsive styling and appropriate padding/margins. --> */}
      <div className="mx-6 py-10 text-center md:text-left">
        <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* <!-- TW elements section --> */}
          <div className="">
            <h6 className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
              <TfiLayoutGrid2Alt />
              <span className="ml-2">
                Next<span className="text-orange-500 font-bold">Commerce</span>
              </span>
            </h6>
            <p>
              Here you can use rows and columns to organize your footer content.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>
          {/* <!-- Products section --> */}
          <div className="">
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Products
            </h6>
            <p className="mb-4">
              <Link href="#!" className=" dark:text-neutral-200 hover:text-orange-500 duration-200">
                Angular
              </Link>
            </p>
            <p className="mb-4">
              <Link href="#!" className="text-white dark:text-neutral-200 hover:text-orange-500 duration-200">
                React
              </Link>
            </p>
            <p className="mb-4">
              <Link href="#!" className="text-white dark:text-neutral-200 hover:text-orange-500 duration-200">
                Vue
              </Link>
            </p>
            <p>
              <Link href="#!" className="text-white dark:text-neutral-200 hover:text-orange-500 duration-200">
                Larval
              </Link>
            </p>
          </div>
          {/* <!-- Useful links section --> */}
          <div className="">
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Useful links
            </h6>
            <p className="mb-4">
              <Link href="/" className="text-white dark:text-neutral-200 hover:text-orange-500 duration-200">
                Home
              </Link>
            </p>
            <p className="mb-4">
              <Link href="/cart" className="text-white dark:text-neutral-200 hover:text-orange-500 duration-200">
                Cart
              </Link>
            </p>
            <p className="mb-4">
              <Link href="/about" className="text-white dark:text-neutral-200 hover:text-orange-500 duration-200">
                About
              </Link>
            </p>
            <p>
              <Link href="/contact" className="text-white dark:text-neutral-200 hover:text-orange-500 duration-200">
                Contact
              </Link>
            </p>
          </div>
          {/* <!-- Contact section --> */}
          <div>
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Pay us with your trusted services
            </h6>
            <Image src={payment} alt="payment banner image" className=""/>
          </div>
        </div>
      </div>

      {/* <!--Copyright section--> */}
      <div className="bg-neutral-200 text-neutral-700 p-6 text-center dark:bg-neutral-700">
        <span>© 2023 Copyright:</span>
        <Link
          className="font-semibold  dark:text-neutral-400"
          href="#"
        >
          Next<span className="text-orange-500 font-bold">Commerce</span>
        </Link>
      </div>
    </footer>
  );
}
