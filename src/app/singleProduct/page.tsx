//
//
//
type Props = {
  searchParams: { [key: string]: string | string[] | undefined };
};
//
import Container from "@/components/Container";
import AllProductsData from "@/components/AllProductsData";
import { getProductToShow, getTrendingProducts } from "@/helper";
import React from "react";
import { Products } from "../../../type";
import SingleProductData from "@/components/SingleProductData";

const SingleProductPage = async ({ searchParams }: Props) => {
  const _idString = searchParams?._id;
  const _id = Number(_idString);
  const product = getProductToShow(_id);
  //
  const trendingData = await getTrendingProducts();
  return (
    <div className="bg-slate-100">
      <Container className="">
        <div className="">
          <SingleProductData product={product} />
        </div>
        <div className="py-10">
          <p className="text-4xl font-bold text-darkText text-center pb-5">
            Trending Products
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mt-10">
            {trendingData?.map((item: Products) => (
              <AllProductsData item={item} key={item._id} />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SingleProductPage;
