import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { email, password } = await req.json();

    if (email === "" || password === "") {
      throw new Error("Email or password is required.");
    }

    return NextResponse.json({
      success: true,
      code: 200,
      message: "Login success.",
      data: {
        accessToken: "ABC123",
      },
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      code: 500,
      message: error.message,
    });
  }
}
