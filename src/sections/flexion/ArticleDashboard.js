"use client";

import { useEffect, useState } from "react";

import { ligaSans } from "@/config/fonts.config";

import Column from "@/components/Column";

export default function ArticleDashboard() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/articles")
      .then((res) => res.json())
      .then((res) => setArticles(res.data));
  });

  const handleLoadArticles = () => {};

  return (
    <Column className="p-4">
      <h1 className={ligaSans.className + " text-2xl mb-4"}>
        Hello, articles.
      </h1>

      <table>
        {articles.map((a) => (
          <tr>
            <td>{a.title}</td>

            <td>{a.author}</td>

            <td>
              <p className="grow-1">
                {new Date(a.publishedDate).toLocaleDateString()}
              </p>
            </td>

            <td></td>
          </tr>
        ))}
      </table>
    </Column>
  );
}
