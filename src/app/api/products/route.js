const productsData = [
  {
    id: "1720682297790",
    name: "Men's watch",
    description: "Stylish men's watch for better lifestyle.",
    link: {
      label: "Buy now!",
      href: "https://www.amazon.com",
    },
    imageUrl: "/watch2.png",
  },
  {
    id: "1720682306323",
    name: "Men's wallet",
    description: "Flex wallet on your pocket",
    link: {
      label: "Take a look!",
      href: "https://www.amazon.com",
    },
    imageUrl: "/wallet.png",
  },
];

export async function GET(request) {
  try {
    return Response.json({
      success: true,
      code: 200,
      message: "Displaying products data...",
      data: productsData,
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
