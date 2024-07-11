import Container from "@/components/Container";
import Row from "@/components/Row";

import { ligaSans } from "@/config/fonts.config";

export default function Navbar(...props) {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-10">
      <Container className="flex-row">
        <Row className={"items-center"}>
          <h1 className={ligaSans.className + " text-[1.5rem] me-auto"}>
            flex
          </h1>

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