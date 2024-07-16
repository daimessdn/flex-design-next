import { geist } from "@/config/fonts.config";
import "./globals.css";

export const metadata = {
  title: "flex",
  description: "Keep it flex with the best menswear in the world",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={geist.className + " min-h-full"}>{children}</body>
    </html>
  );
}
