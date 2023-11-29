//
//
//
//
import Container from "@/components/Container";
import React from "react";
import Link from "next/link";

const notFound = () => {
  return (
    <Container className="flex items-center justify-center py-20">
      <div className="max-w-2xl min-h-[500px] flex items-center justify-center flex-col gap-y-5">
        <h2 className=" text-3xl font-bold text-darkText">
          Your page not-found
        </h2>
        <p className="">
          Oops! The page you are looking for does not exist. It might have been
          moved or deleted
        </p>
        <Link href="/" className="text-white font-bold py-2 px-4 bg-orange-500 rounded-full hover:bg-orange-700">
          back to home
        </Link>
      </div>
    </Container>
  );
};

export default notFound;
