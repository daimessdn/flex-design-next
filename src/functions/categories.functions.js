export const getCategories = async () => {
  const response = await fetch("http://localhost:3000/api/categories", {
    cache: "no-store",
  }).then((res) => res.json());

  return response.data;
};
