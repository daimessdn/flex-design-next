import { NextResponse } from "next/server";

import { categoriesData } from "../route";

export async function GET(request, { params }) {
  try {
    const { id } = params;
    const category = categoriesData.find((p) => p.id == id);

    return NextResponse.json({
      success: true,
      code: 200,
      message: "Displaying category data...",
      data: category,
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      code: 500,
      message: error.message,
    });
  }
}
