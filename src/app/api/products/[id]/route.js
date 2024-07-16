import { NextResponse } from "next/server";

import { productsData } from "../route";

export async function GET(request, { params }) {
  try {
    const { id } = params;
    const product = productsData.find((p) => p.id == id);

    if (!product) {
      throw new Error("Item not found");
    }

    return NextResponse.json({
      success: true,
      code: 200,
      message: "Displaying products data...",
      data: product,
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      code: 500,
      message: error.message,
    });
  }
}
