//
//
//
import { NextResponse } from "next/server";
import { productsData } from "@/constants/data_json";

export const GET = async () => {
  try {
    return NextResponse.json({
      message: "products fetched successfully",
      success: true,
      productsData,
    });
  } catch (error) {
    return NextResponse.json(
      {
        error: "Product loading error",
      },
      {
        status: 500,
      }
    );
  }
};
