import Link from "next/link";

import { geist, ligaSans } from "@/app/layout";

import Container from "@/app/components/Container";
import Row from "@/app/components/Row";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-10">
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
    </nav>
  );
}
