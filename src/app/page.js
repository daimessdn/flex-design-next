import Image from "next/image";
import Link from "next/link";

import Container from "../components/Container";
import Row from "../components/Row";
import Column from "../components/Column";

import Footer from "../layouts/Footer";
import Navbar from "../layouts/Navbar";
import HomeProductSection from "@/sections/HomeProductSection";

import { ligaSans } from "@/config/fonts.config";
import HomeCategorySection from "@/sections/HomeCategorySection";

export default function Home() {
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
                className="pointer-events-none select-none"
                src={"/man-top.png"}
                alt="Man with t-shirt facing behind"
                width={600}
                height={400}
              />
            </Column>
          </Row>
        </Container>
      </section>

      <HomeProductSection />

      <HomeCategorySection />

      <Footer />
    </>
  );
}
