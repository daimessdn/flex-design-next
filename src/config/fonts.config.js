import local from "next/font/local";

export const ligaSans = local({
  src: [
    {
      path: "../assets/fonts/LigaSans-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-ligasans",
});

export const geist = local({
  src: [
    {
      path: "../assets/fonts/Geist-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../assets/fonts/Geist-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/Geist-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/fonts/Geist-SemiBold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../assets/fonts/Geist-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-geist",
});
