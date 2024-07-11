import Image from "next/image";
import Link from "next/link";

import { geist, ligaSans } from "./layout";

import Container from "./components/Container";
import Row from "./components/Row";
import Column from "./components/Column";

import Product from "./components/Product";

import Footer from "./layouts/Footer";
import Navbar from "./layouts/Navbar";

export default function Home() {
  const product = {
    name: "Men's watch",
    description: "Stylish men's watch for better lifestyle.",
    link: {
      label: "Buy now!",
      href: "https://www.amazon.com",
    },
    imageUrl: "/watch2.png",
  };

  const product2 = {
    name: "Men's wallet",
    description: "Flex wallet on your pocket",
    link: {
      label: "Take a look!",
      href: "https://www.amazon.com",
    },
    imageUrl: "/wallet.png",
  };

  return (
    <>
      <Navbar />

      <section className="bg-primary text-white">
        <Container>
          <Row>
            <Column className={"justify-center gap-2"}>
              <h1 className={ligaSans.className + " text-[3rem]"}>
                Keep it flex
              </h1>
              <p>Flexible fashion for all.</p>
            </Column>

            <Column>
              <Image
                src={"/tshirt-top.png"}
                alt="Man with t-shirt facing behind"
                width={600}
                height={400}
              />
            </Column>
          </Row>
        </Container>
      </section>

      <section className="py-8">
        <Container>
          <h1 className={ligaSans.className + " text-[2rem] mb-4"}>
            Recommended Products
          </h1>

          <div className="grid-cols-2 grid gap-3">
            <Product
              name={product.name}
              description={product.description}
              link={product.link}
              imageUrl={product.imageUrl}
            />

            <Product
              name={product2.name}
              description={product2.description}
              link={product2.link}
              imageUrl={product2.imageUrl}
            />
          </div>
        </Container>
      </section>

      <Footer />
    </>
  );
}
