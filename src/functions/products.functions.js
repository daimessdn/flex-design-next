export const getProducts = async () => {
  const response = await fetch("http://localhost:3000/api/products", {
    cache: "no-store",
  }).then((res) => res.json());

  return response.data;
};

export const getProductsByCategory = async (category) => {
  const response = await fetch(
    `http://localhost:3000/api/products?category=${category}`,
    {
      cache: "no-store",
    }
  ).then((res) => res.json());

  return response.data;
};

export const getProductsById = async (id) => {
  const response = await fetch(`http://localhost:3000/api/products/${id}`, {
    cache: "no-store",
  }).then((res) => res.json());

  return response.data;
};
