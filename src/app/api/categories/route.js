export const categoriesData = [
  {
    id: "1720773066377",
    name: "All",
    link: {
      href: "https://www.amazon.com",
    },
    imageUrl: "/all.png",
  },
  {
    id: "1720692069066",
    name: "Watches",
    link: {
      href: "https://www.amazon.com",
    },
    imageUrl: "/watch2.png",
  },
  {
    id: "1720692080767",
    name: "Wallets",
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
    return Response.json({
      success: false,
      code: 500,
      message: error.message,
    });
  }
}
