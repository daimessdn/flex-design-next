const categoriesData = [
  {
    id: "1720692069066",
    name: "Watch",
    link: {
      href: "https://www.amazon.com",
    },
    imageUrl: "/watch2.png",
  },
  {
    id: "1720692080767",
    name: "Wallet",
    link: {
      href: "https://www.amazon.com",
    },
    imageUrl: "/wallet.png",
  },
  {
    id: "1720742818925",
    name: "Uppers",
    link: {
      href: "https://www.amazon.com",
    },
    imageUrl: "/tshirt.png",
  },
];

export async function GET(request) {
  try {
    return Response.json({
      success: true,
      code: 200,
      message: "Displaying products data...",
      data: categoriesData,
    });
  } catch (error) {
    console.log("ini error", error);

    return Response.json({
      success: false,
      code: 500,
      message: error.message,
    });
  }
}
