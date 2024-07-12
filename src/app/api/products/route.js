export const productsData = [
  {
    id: "1720682297790",
    name: "Timeless flex",
    description: "Special watch, wearable all time",
    price: 74.2,
    category: "watches",
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
    price: 27.1,
    category: "wallets",
    link: {
      label: "Take a look!",
      href: "https://www.amazon.com",
    },
    imageUrl: "/wallet.png",
  },
  {
    id: "1720771448501",
    name: "DARE Vintage T-shirt",
    description: "Express yourself to be dare.",
    price: 12.9,
    category: "uppers",
    link: {
      label: "Purchase now!",
      href: "https://www.amazon.com",
    },
    imageUrl: "/tshirt2.png",
  },
  {
    id: "1720742925135",
    name: "PREMIO Plain T-shirt",
    description: "Simple, casual, professional.",
    price: 10.3,
    category: "uppers",
    link: {
      label: "Take a look!",
      href: "https://www.amazon.com",
    },
    imageUrl: "/tshirt.png",
  },
];

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get("category");

    if (category) {
      const productsByCategory = productsData.filter(
        (p) => p.category === category.toLowerCase()
      );

      return Response.json({
        success: true,
        code: 200,
        message: `Displaying products based on ${category} category.`,
        data: productsByCategory,
      });
    } else {
      return Response.json({
        success: true,
        code: 200,
        message: "Displaying products data...",
        data: productsData,
      });
    }
  } catch (error) {
    // console.log("ini error", error);

    return Response.json({
      success: false,
      code: 500,
      message: error.message,
    });
  }
}
