"use client";

import dynamic from "next/dynamic";

import "react-quill/dist/quill.snow.css";

import { useState } from "react";
import { BiDollar } from "react-icons/bi";

import { ligaSans } from "@/config/fonts.config";
import { quillFormats, quillModules } from "@/config/quill.config";

import Row from "@/components/Row";

import AdminSidebar from "@/components/flexion/AdminSidebar";
import ProductDashboard from "@/sections/flexion/products/ProductDashboard";

const QuillEditor = dynamic(() => import("react-quill"), { ssr: false });

export default function ProductPage() {
  const [isCreatePopupOpen, setIsCreatePopupOpen] = useState(false);

  return (
    <section>
      <Row>
        <AdminSidebar />

        <ProductDashboard
          addProduct={() => {
            setIsCreatePopupOpen(true);
          }}
        />

        <div
          className={
            "fixed top-0 left-0 w-screen h-screen bg-gray/50 " +
            (isCreatePopupOpen ? "flex" : "hidden")
          }
        >
          <div
            className={
              "w-1/2 m-auto bg-white p-4 mt-4 shadow-md rounded-md transition duration-300 ease-in-out " +
              (isCreatePopupOpen ? "opacity-100" : "opacity-0")
            }
          >
            <h2 className={ligaSans.className + " text-3xl"}>Add Product</h2>

            <form>
              <div className="flex flex-col mt-4 gap-2">
                <label className="text-gray-500" htmlFor="name">
                  Product name
                </label>

                <input
                  className="border border-gray-300 rounded-md p-2"
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Input product name"
                  required
                />
              </div>

              <div className="flex flex-col mt-4 gap-2">
                <label className="text-gray-500" htmlFor="description">
                  Product description
                </label>

                <QuillEditor
                  className="w-full h-[250px] mt-2 bg-white border border-black overflow-auto"
                  modules={quillModules}
                  formats={quillFormats}
                />
              </div>

              <div className="flex flex-col mt-4 gap-2">
                <label className="text-gray-500" htmlFor="price">
                  Product price
                </label>

                <div className="flex items-center">
                  <label
                    htmlFor="price"
                    className="border border-gray bg-gray text-white p-2 rounded-l-md"
                  >
                    <BiDollar size={24} />
                  </label>
                  <input
                    className="border border-gray-300 rounded-r-md p-2"
                    type="number"
                    placeholder="0.00"
                    name="price"
                    id="price"
                    required
                  />
                </div>
              </div>

              <div className="flex flex-col mt-4 gap-2">
                <label className="text-gray-500" htmlFor="image">
                  Product image
                </label>

                <input
                  className="border border-gray-300 rounded-md p-2"
                  placeholder="Upload your product image"
                  type="file"
                  id="image"
                  name="image"
                />
              </div>

              <div className="flex flex-row gap-2 items-center">
                <button
                  className="mt-4 px-4 py-2 rounded-full shadow-md bg-primary text-white text-sm block flex items-center gap-2"
                  href="/flexion/products/edit"
                >
                  Add product
                </button>

                <button
                  className="mt-4 px-4 py-2 rounded-full shadow-md bg-white text-primary text-sm block flex items-center gap-2"
                  onClick={() => {
                    setIsCreatePopupOpen(false);
                  }}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </Row>
    </section>
  );
}
