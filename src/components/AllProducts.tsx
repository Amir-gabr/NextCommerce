//
//
//
//
import { getProducts } from "@/helper";
import React from "react";
import Container from "./Container";
import AllProductsData from "./AllProductsData";
import { Products } from "../../type";

const AllProducts = async () => {
  const product = await getProducts();
  return (
    <div className="bg-slate-100">
      <h1 className="text-3xl text-center py-8 font-bold">New Products</h1>
      <Container className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 -mt-10">
        {product?.map((item: Products) => (
          <AllProductsData item={item} key={item._id} />
        ))}
      </Container>
    </div>
  );
};
export default AllProducts;
