import Category from "@/components/Category";

import Container from "@/components/Container";

import { ligaSans } from "@/config/fonts.config";

const getProducts = async () => {
  const response = await fetch("http://localhost:3000/api/categories", {
    cache: "no-store",
  }).then((res) => res.json());

  return response.data;
};

export default async function HomeCategorySection() {
  const products = await getProducts();

  return (
    <section className="py-8">
      <Container>
        <h1 className={ligaSans.className + " text-[2rem] mb-4"}>
          This week flex!
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
