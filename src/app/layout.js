import { Inter } from "next/font/google";
import "./globals.css";
import local from "next/font/local";

const inter = Inter({ subsets: ["latin"] });

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

export const metadata = {
  title: "flex",
  description: "Keep it flex with the best menswear in the world",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
