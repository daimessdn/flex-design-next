export const getProducts = async () => {
  const response = await fetch("http://localhost:3000/api/products", {
    cache: "no-store",
  }).then((res) => res.json());

  return response.data;
};
