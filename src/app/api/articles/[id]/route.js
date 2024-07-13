import { NextResponse } from "next/server";
import { articlesData } from "../route";

export async function GET(request, { params }) {
  try {
    const { id } = params;
    const article = articlesData.find((p) => p.id == id);

    return NextResponse.json({
      success: true,
      code: 200,
      message: "Displaying article data...",
      data: article,
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      code: 500,
      message: error.message,
    });
  }
}
