export const metadata = {
  title: "flex - Contact",
  description:
    "Contact flex - Keep it flex with the best menswear in the world",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={"min-h-full"}>{children}</body>
    </html>
  );
}
