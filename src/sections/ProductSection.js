import Image from "next/image";

import Container from "@/components/Container";
import Row from "@/components/Row";
import Column from "@/components/Column";

import Product from "@/components/Product";

import { ligaSans } from "@/config/fonts.config";

import { getProducts } from "@/functions/products.functions";
import { getCategories } from "@/functions/categories.functions";

export default async function ProductSection() {
  const products = await getProducts();
  const categories = await getCategories();

  return (
    <section className="py-8">
      <Container>
        <Row>
          <Column>
            <h2 className={ligaSans.className + " text-[1.5rem] mb-2"}>
              Items by category
            </h2>
          </Column>
        </Row>

        <Row className="gap-3 mb-8">
          {categories.map((category) => (
            <button className="border-0 flex flex-row items-center gap-2 bg-primary shadow-sm rounded-sm text-white px-3 py-2">
              <Image
                className="self-center pointer-events-none select-none"
                src={category.imageUrl}
                alt={category.description}
                width={64}
                height={64}
              />

              <span className={ligaSans.className + " text-[1.5rem]"}>
                {category.name}
              </span>
            </button>
          ))}
        </Row>

        <div className="grid grid-cols-3 gap-3">
          {products.map((product) => (
            <Product
              key={product.id}
              name={product.name}
              description={product.description}
              link={product.link}
              imageUrl={product.imageUrl}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
