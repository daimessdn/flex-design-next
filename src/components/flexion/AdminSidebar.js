import Link from "next/link";

import Column from "../Column";

import { ligaSans } from "@/config/fonts.config";

export default function AdminSidebar() {
  return (
    <Column className="!w-[20%] sticky top-0 min-h-screen p-4">
      <h1 className={ligaSans.className + " text-2xl mb-8"}>flexion</h1>

      <ul className="list-none flex flex-col gap-8">
        <li>
          <Link href="/flexion/dashboard">Dashboard</Link>
        </li>

        <li>
          <Link href="/flexion/products">Products</Link>
        </li>

        <li>
          <Link href="/flexion/categories">Categories</Link>
        </li>

        <li>
          <Link href="/flexion/articles">Articles</Link>
        </li>

        <li>
          <Link href="#">Featured</Link>
        </li>

        <li>
          <Link href="/flexion/logout">Logout</Link>
        </li>
      </ul>
    </Column>
  );
}
