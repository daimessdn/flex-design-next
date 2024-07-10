import Image from "next/image";

import Container from "./components/Container";
import Row from "./components/Row";
import Column from "./components/Column";
import { geist, ligaSans } from "./layout";

export default function Home() {
  return (
    <>
      <nav>
        <Container className="flex-row">
          <Row className={"items-center"}>
            <h1 className={ligaSans.className + " text-[1.5rem]"}>flex</h1>

            <ul className="flex flex-row gap-[2rem] ms-auto">
              <li className="px-2 py-4">
                <a className="no-underline" href="https://google.com">
                  Home
                </a>
              </li>

              <li className="px-2 py-4">
                <a className="no-underline" href="https://google.com">
                  Products
                </a>
              </li>

              <li className="px-2 py-4">
                <a className="no-underline" href="https://google.com">
                  Contact
                </a>
              </li>
            </ul>
          </Row>
        </Container>

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
                  height={"400"}
                />
              </Column>
            </Row>
          </Container>
        </section>
      </nav>
    </>
  );
}
