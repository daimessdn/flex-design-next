export const getArticles = async () => {
  const response = await fetch("http://localhost:3000/api/articles", {
    cache: "no-store",
  }).then((res) => res.json());

  return response.data;
};

export const getArticleById = async (id) => {
  const response = await fetch(`http://localhost:3000/api/articles/${id}`, {
    cache: "no-store",
  }).then((res) => res.json());

  return response.data;
};
