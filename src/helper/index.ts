//
//
//

import { productsData } from "@/constants/data_json";

// fetch products
export const getProducts = async () => {
  const res = await fetch("https://fakestoreapiserver.reactbd.com/smart");
  if (!res.ok) {
    throw new Error("failed to fetch products");
  }
  return res.json();
};
//
//
//
// fetch products
export const getTrendingProducts = async () => {
  const res = await fetch(
    "https://fakestoreapiserver.reactbd.com/smarttrending"
  );
  if (!res.ok) {
    throw new Error("failed to fetch products");
  }
  return res.json();
};
//
//
//
//calculation for price
export const calculatePercentage = (oldPrice: any, price: any) => {
  return !!parseFloat(price) && !!parseFloat(oldPrice)
    ? (100 - (oldPrice / price) * 100).toFixed(0)
    : 0;
};
//
//
//
//get product data to show it in product page
export const getProductToShow = (_id: number) => {
  const item = productsData.find((product) => product._id === _id);
  return item;
};
