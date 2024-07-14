"use client";

import { useEffect, useState } from "react";

import { ligaSans } from "@/config/fonts.config";

import Column from "@/components/Column";

export default function CategoryDashboard() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/categories")
      .then((res) => res.json())
      .then((res) => setCategories(res.data));
  });

  const handleLoadCategories = () => {};

  return (
    <Column className="p-4">
      <h1 className={ligaSans.className + " text-2xl mb-4"}>
        Hello, categories.
      </h1>

      <table>
        {categories.map((c) => (
          <tr key={c.id}>
            <td>{c.name}</td>

            <td></td>
          </tr>
        ))}
      </table>
    </Column>
  );
}
