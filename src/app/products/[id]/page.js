import Link from "next/link";

import Container from "@/components/Container";
import Row from "@/components/Row";
import Column from "@/components/Column";

import Footer from "@/layouts/Footer";
import Navbar from "@/layouts/Navbar";

import { ligaSans } from "@/config/fonts.config";
import ProductDetailSection from "@/sections/ProductDetailSection";
import WhiteArrowLeftButton from "@/assets/svg/WhiteArrowLeftButton";
import { getProductsById } from "@/functions/products.functions";

export default async function Home({ params, searchParams }) {
  console.log("detail product", params, searchParams);

  const { id } = params;
  const product = await getProductsById(id);

  return (
    <>
      <Navbar />

      <section className="bg-primary text-white py-8">
        <Container>
          <Row>
            <Column className={"justify-center gap-2"}>
              <Link href={"/products"}>
                <h1 className={ligaSans.className + " text-[2rem]"}>
                  <WhiteArrowLeftButton width={48} />
                </h1>
              </Link>
            </Column>
          </Row>
        </Container>
      </section>

      <ProductDetailSection product={product} />

      <div className="h-[15rem] pb-20 background-bottom-1 grayscale"></div>

      <Footer />
    </>
  );
}
