import Link from "next/link";
import Image from "next/image";

import Container from "@/components/Container";
import Row from "@/components/Row";
import Column from "@/components/Column";

import { ligaSans } from "@/config/fonts.config";

export default async function ProductDetailSection({ product }) {
  return (
    <section className="py-8">
      <Container>
        <Row>
          <Column>
            <h2 className={ligaSans.className + " text-[1.5rem] mb-2"}>
              {product.name}
            </h2>

            <div className="bg-white2 p-2 shadow-sm rounded-sm w-fit">
              <Image
                src={product.imageUrl}
                alt={product.description}
                width={350}
                height={350}
              />
            </div>
          </Column>

          <Column>
            <p className={ligaSans.className + " text-[1.2rem]"}>
              {product.description}
            </p>

            <p className={"my-2 text-2xl font-bold text-red-500"}>
              ${product.price}
            </p>

            <div className="flex flex-row gap-4">
              <Link
                className="border-2 border-primary inline-block px-3 py-2 bg-white shadow-sm rounded-sm"
                href="#"
              >
                Add to cart
              </Link>

              <Link
                className="border-2 border-primary inline-block px-3 py-2 bg-primary text-white shadow-sm rounded-sm"
                href="#"
              >
                Direct Check-out
                <br />
              </Link>
            </div>
          </Column>
        </Row>
      </Container>
    </section>
  );
}
