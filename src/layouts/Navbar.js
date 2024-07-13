import Container from "@/components/Container";
import Row from "@/components/Row";

import { geist, ligaSans } from "@/config/fonts.config";
import Link from "next/link";

export default function Navbar({ ...props }) {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-10">
      <Container className="flex-row">
        <Row className={"items-center"}>
          <h1 className={ligaSans.className + " text-[1.5rem] me-auto"}>
            flex
          </h1>

          <ul className={geist.className + " flex flex-row gap-[2rem] ms-auto"}>
            <li className="px-2 py-4">
              <Link className="no-underline" href="/">
                Home
              </Link>
            </li>

            <li className="px-2 py-4">
              <Link className="no-underline" href="/products">
                Products
              </Link>
            </li>

            <li className="px-2 py-4">
              <Link className="no-underline" href="/articles">
                Articles
              </Link>
            </li>

            <li className="px-2 py-4">
              <Link className="no-underline" href={"/contact"}>
                Contact
              </Link>
            </li>
          </ul>
        </Row>
      </Container>
    </nav>
  );
}
