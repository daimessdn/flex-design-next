"use client";

import Image from "next/image";
import Link from "next/link";

import { useEffect, useState } from "react";

import { ligaSans } from "@/config/fonts.config";

import Column from "@/components/Column";

export default function ProductDashboard() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/products")
      .then((res) => res.json())
      .then((res) => setProducts(res.data));
  }, []);

  const handleLoadProducts = () => {};

  return (
    <Column className="p-4">
      <h1 className={ligaSans.className + " text-3xl mb-4"}>Flex Products</h1>

      <Link
        className="uppercase px-4 py-2 rounded-2xl bg-secondary text-white flex items-center gap-2 w-fit text-xs mb-4"
        href="/flexion/products/add"
      >
        Add Products
      </Link>

      <table className="border-collapse">
        <thead>
          <tr className="border border-primary">
            <th className="p-2 w-1/4"></th>
            <th className="p-2 w-1/4">Name</th>
            <th className="p-2 w-1/8">Description</th>
            <th>Price</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {products.map((p) => (
            <tr className="border border-primary align-middle h-full">
              <td className="p-2 w-[10%]">
                <Image
                  src={p.imageUrl}
                  alt={p.description}
                  width={50}
                  height={50}
                />
              </td>

              <td className="p-2 w-1/4">{p.name}</td>

              <td className="p-2 w-1/4">{p.description}</td>

              <td className="p-2 w-1/8">
                <p className="grow-1">${p.price}</p>
              </td>

              <td className="py-4 p-2 items-center flex gap-2 min-h-full">
                <Link
                  className="uppercase px-4 py-2 rounded-2xl bg-secondary text-white block text-xs flex items-center gap-2"
                  href="/flexion/products/edit"
                >
                  Edit
                </Link>
                <Link
                  className="uppercase px-4 py-2 rounded-2xl bg-secondary text-white block text-xs flex items-center gap-2"
                  href="/flexion/products/delete"
                >
                  Delete
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Column>
  );
}
