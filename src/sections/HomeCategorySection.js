import Category from "@/components/Category";

import Container from "@/components/Container";

import { ligaSans } from "@/config/fonts.config";

import { getCategories } from "@/functions/categories.functions";

export default async function HomeCategorySection() {
  const products = await getCategories();

  return (
    <section className="py-8">
      <Container>
        <h1 className={ligaSans.className + " text-[2rem] mb-4"}>
          More flex to explore.
        </h1>

        <div className="grid grid-cols-2 gap-3">
          {products.map((product) => (
            <Category
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
