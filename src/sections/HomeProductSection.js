import Container from "@/components/Container";
import Product from "@/components/Product";

import { ligaSans } from "@/config/fonts.config";

import { getProducts } from "@/functions/products.functions";

export default async function HomeProductSection() {
  const products = await getProducts();

  return (
    <section className="py-8">
      <Container>
        <h1 className={ligaSans.className + " text-[2rem] mb-4"}>
          This week flex!
        </h1>

        <div className="grid grid-cols-2 gap-3">
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
