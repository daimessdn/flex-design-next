import Link from "next/link";

import Container from "@/app/components/Container";
import Row from "@/app/components/Row";
import Column from "@/app/components/Column";

export default function Footer() {
  return (
    <footer className="py-4 bg-gray text-white shadow-md">
      <Container>
        <Row>
          <Column>
            <ul className="flex flex-row gap-4 mb-4">
              <li>
                <Link href={"/"}>Home</Link>
              </li>

              <li>
                <Link href={"/attribution"}>Attribution</Link>
              </li>
            </ul>

            <p>Flex &copy; {new Date().getFullYear()}</p>
          </Column>
        </Row>
      </Container>
    </footer>
  );
}
