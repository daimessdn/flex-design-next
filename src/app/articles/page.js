import Image from "next/image";
import Link from "next/link";

import Container from "@/components/Container";
import Row from "@/components/Row";
import Column from "@/components/Column";

import Footer from "@/layouts/Footer";
import Navbar from "@/layouts/Navbar";

import { ligaSans } from "@/config/fonts.config";
import ArticleSection from "@/sections/ArticleSection";

export default async function ArticlePage({ searchParams }) {
  return (
    <>
      <Navbar />

      <section className="bg-primary text-white py-8">
        <Container>
          <Row>
            <Column className={"justify-center gap-2"}>
              <h1 className={ligaSans.className + " text-[2rem]"}>Articles</h1>
            </Column>
          </Row>
        </Container>
      </section>

      <ArticleSection />

      <div className="h-[15rem] pb-20 background-bottom-1 grayscale"></div>

      <Footer />
    </>
  );
}
