import Link from "next/link";

import { ligaSans } from "@/app/layout";

import Footer from "@/app/layouts/Footer";
import Navbar from "@/app/layouts/Navbar";

import Container from "@/app/components/Container";
import Row from "@/app/components/Row";
import Column from "@/app/components/Column";

export default function Attribution() {
  return (
    <>
      <Navbar />

      <section className="bg-primary text-white py-4">
        <Container>
          <Row>
            <Column className={"justify-center gap-2"}>
              <h1 className={ligaSans.className + " text-[3rem]"}>
                Attribution
              </h1>
            </Column>
          </Row>
        </Container>
      </section>

      <section className="py-4">
        <Container>
          <h1 className={ligaSans.className + " text-[2rem] mb-4"}>Design</h1>

          <ul className="flex flex-col gap-4 mb-4">
            <li>
              <a href="https://www.freepik.com/free-vector/men-s-t-shirt-different-views-with-realistic-style_29750501.htm#page=3&query=t%20shirt%20mockup&position=15&from_view=keyword&track=ais_hybrid&uuid=a0e96c27-1764-4cc7-8a00-f058187a698d">
                Image by vector_corp
              </a>
              on Freepik
            </li>

            <li>
              <a href="https://www.freepik.com/free-psd/back-view-man-blank-white-t-shirt-grey-background_89634608.htm#page=4&query=t%20shirt%20mockup&position=47&from_view=keyword&track=ais_hybrid&uuid=a0e96c27-1764-4cc7-8a00-f058187a698d">
                Image by flatart
              </a>{" "}
              on Freepik
            </li>
          </ul>
        </Container>
      </section>

      <Footer />
    </>
  );
}
