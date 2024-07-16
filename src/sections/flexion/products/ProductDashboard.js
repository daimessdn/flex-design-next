"use client";

import Image from "next/image";

import { useEffect, useState } from "react";
import { BiDollar } from "react-icons/bi";
import { FaPlus } from "react-icons/fa";

import { ligaSans } from "@/config/fonts.config";

import Column from "@/components/Column";

export default function ProductDashboard({ addProduct }) {
  const [products, setProducts] = useState([]);

  const [productUpdated, setProductUpdated] = useState({});
  const [productDeleted, setProductDeleted] = useState({});

  const [isEditPopupOpen, setIsEditPopupOpen] = useState(false);
  const [isDeletePopupOpen, setIsDeletePopupOpen] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3000/api/products")
      .then((res) => res.json())
      .then((res) => setProducts(res.data));
  }, []);

  const handleEditPopup = (id) => {
    const productBeingUpdated = products.find((p) => p.id === id);
    setProductUpdated(productBeingUpdated);
    setIsEditPopupOpen(true);
  };

  const handleDeletePopup = (id) => {
    const productBeingDeleted = products.find((p) => p.id === id);
    setProductDeleted(productBeingDeleted);
    setIsDeletePopupOpen(true);
  };

  return (
    <>
      <Column className="p-4">
        <h1 className={ligaSans.className + " text-3xl mb-4"}>Flex Products</h1>

        <button
          className="uppercase px-4 py-2 rounded-full bg-primary text-white flex items-center gap-2 w-fit text-sm mb-4"
          onClick={addProduct}
        >
          <FaPlus size={20} />
          Add Product
        </button>

        <div className="rounded-lg overflow-hidden w-full">
          <table className="w-full">
            <thead>
              <tr className="bg-green-100">
                <th className="p-2 w-1/4">Name</th>
                <th className="p-2 w-1/2">Description</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {products.map((p) => (
                <tr key={p.id} className="odd:bg-green-50 even:bg-green-100">
                  <td className="p-2">
                    <div className="flex flex-row gap-2 items-center">
                      <Image
                        src={p.imageUrl}
                        alt={p.description}
                        width={64}
                        height={64}
                      />

                      {p.name}
                    </div>
                  </td>

                  <td className="p-2 w-1/2">{p.description}</td>

                  <td className="p-2 w-1/8">${p.price}</td>

                  <td className="p-2">
                    <div className="flex flex-row gap-2 items-center">
                      <button
                        className="uppercase px-4 py-2 rounded-full bg-primary text-white inline-block text-sm flex items-center gap-2"
                        onClick={() => {
                          handleEditPopup(p.id);
                        }}
                      >
                        Edit
                      </button>
                      <button
                        className="uppercase px-4 py-2 rounded-full bg-primary text-white inline-block text-sm flex items-center gap-2"
                        onClick={() => {
                          handleDeletePopup(p.id);
                        }}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Column>

      <div
        className={
          "fixed top-0 left-0 w-screen h-screen bg-gray/50 " +
          (isEditPopupOpen ? "flex" : "hidden")
        }
      >
        <div
          className={
            "w-1/2 m-auto bg-white p-4 mt-4 shadow-md rounded-md transition duration-300 ease-in-out " +
            (isEditPopupOpen ? "opacity-100" : "opacity-0")
          }
        >
          <h2 className={ligaSans.className + " text-3xl"}>Edit Product</h2>

          <blockquote className="bg-primary text-white p-2 shadow-md rounded-md mt-4">
            You will edit "{productUpdated.name || ""}".
          </blockquote>

          <form>
            <div className="flex flex-col mt-4 gap-2">
              <label className="text-gray-100" htmlFor="name">
                Product name
              </label>

              <input
                className="border border-gray-100 rounded-md p-2"
                type="text"
                id="name"
                name="name"
                value={productUpdated.name}
                onChange={(e) => {
                  setProductUpdated({
                    ...productUpdated,
                    name: e.target.value,
                  });
                }}
                placeholder="Input product name"
                required
              />
            </div>

            <div className="flex flex-col mt-4 gap-2">
              <label className="text-gray-100" htmlFor="description">
                Product description
              </label>

              <textarea
                className="border border-gray-100 rounded-md p-2 resize-none"
                id="description"
                name="description"
                value={productUpdated.description}
                onChange={(e) => {
                  setProductUpdated({
                    ...productUpdated,
                    description: e.target.value,
                  });
                }}
                rows={4}
                placeholder="Input product description"
              ></textarea>
            </div>

            <div className="flex flex-col mt-4 gap-2">
              <label className="text-gray-100" htmlFor="price">
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
                  className="border border-gray-100 rounded-r-md p-2"
                  type="number"
                  placeholder="0.00"
                  name="price"
                  value={productUpdated.price}
                  onChange={(e) => {
                    setProductUpdated({
                      ...productUpdated,
                      price: e.target.value,
                    });
                  }}
                  id="price"
                  required
                />
              </div>
            </div>

            <div className="flex flex-col mt-4 gap-2">
              <label className="text-gray-100" htmlFor="image">
                Product image
              </label>

              <input
                className="border border-gray-100 rounded-md p-2"
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
                Edit product
              </button>

              <button
                className="mt-4 px-4 py-2 rounded-full shadow-md bg-white text-primary text-sm block flex items-center gap-2"
                onClick={(e) => {
                  e.preventDefault();
                  setIsEditPopupOpen(false);
                  setProductUpdated({});
                }}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>

      <div
        className={
          "fixed top-0 left-0 w-screen h-screen bg-gray/50 " +
          (isDeletePopupOpen ? "flex" : "hidden")
        }
      >
        <div
          className={
            "w-1/2 m-auto bg-white p-4 mt-4 shadow-md rounded-md transition duration-300 ease-in-out " +
            (isDeletePopupOpen ? "opacity-100" : "opacity-0")
          }
        >
          <h2 className={ligaSans.className + " text-3xl"}>Delete Product</h2>

          <p className="mt-4">
            Are you sure want to delete "{productDeleted.name || ""}".
          </p>

          <div className="flex flex-row gap-2 items-center">
            <button
              className="mt-4 px-4 py-2 rounded-full shadow-md bg-primary text-white text-sm block flex items-center gap-2"
              href="/flexion/products/delete"
            >
              Delete product
            </button>

            <button
              className="mt-4 px-4 py-2 rounded-full shadow-md bg-white text-primary text-sm block flex items-center gap-2"
              onClick={(e) => {
                e.preventDefault();
                setIsDeletePopupOpen(false);
                setProductDeleted({});
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
