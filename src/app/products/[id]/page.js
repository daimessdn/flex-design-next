"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

import Container from "@/components/Container";
import Row from "@/components/Row";
import Column from "@/components/Column";

import Footer from "@/layouts/Footer";
import Navbar from "@/layouts/Navbar";

import { ligaSans } from "@/config/fonts.config";
import ProductDetailSection from "@/sections/ProductDetailSection";

export default function Home({ searchParams }) {
  const category = searchParams.category;

  const params = useParams;
  console.log("detail product", params);

  return (
    <>
      <Navbar />

      <section className="bg-primary text-white py-8">
        <Container>
          <Row>
            <Column className={"justify-center gap-2"}>
              <h1 className={ligaSans.className + " text-[2rem]"}>Products</h1>
            </Column>
          </Row>
        </Container>
      </section>

      <ProductDetailSection product={{ name: "Ini Kaos" }} />

      <div className="h-[15rem] pb-20 background-bottom-1 grayscale"></div>

      <Footer />
    </>
  );
}
