import { NextResponse } from "next/server";

import { featuredData } from "../route";

export async function GET(request, { params }) {
  try {
    const { id } = params;
    const featured = featuredData.find((p) => p.id == id);

    if (!featured) {
      throw new Error("Item not found");
    }

    return NextResponse.json({
      success: true,
      code: 200,
      message: "Displaying featured data...",
      data: featured,
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      code: 500,
      message: error.message,
    });
  }
}
