"use client";

import Image from "next/image";

import { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";

import { ligaSans } from "@/config/fonts.config";

import Column from "@/components/Column";

export default function CategoryDashboard({ addCategory }) {
  const [categories, setCategoriess] = useState([]);

  const [categoryUpdated, setCategoryUpdated] = useState({});
  const [categoryDeleted, setCategoryDeleted] = useState({});

  const [isEditPopupOpen, setIsEditPopupOpen] = useState(false);
  const [isDeletePopupOpen, setIsDeletePopupOpen] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3000/api/categories")
      .then((res) => res.json())
      .then((res) => setCategoriess(res.data));
  }, []);

  const handleEditPopup = (id) => {
    const caategoryBeingUpdated = categories.find((p) => c.id === id);
    setCategoryUpdated(caategoryBeingUpdated);
    setIsEditPopupOpen(true);
  };

  const handleDeletePopup = (id) => {
    const categoryBeingDeleted = categories.find((p) => c.id === id);
    setCategoryDeleted(categoryBeingDeleted);
    setIsDeletePopupOpen(true);
  };

  return (
    <>
      <Column className="p-4">
        <h1 className={ligaSans.className + " text-3xl mb-4"}>
          Flex categories
        </h1>

        <button
          className="uppercase px-4 py-2 rounded-full bg-primary text-white flex items-center gap-2 w-fit text-sm mb-4"
          onClick={addCategory}
        >
          <FaPlus size={20} />
          Add Category
        </button>

        <div className="rounded-lg overflow-hidden w-full">
          <table className="w-full">
            <thead>
              <tr className="bg-green-100">
                <th className="w-1/3 p-2"></th>
                <th className="w-1/3 p-2">Name</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {categories.map((c) => (
                <tr key={c.id} className="odd:bg-green-50 even:bg-green-100">
                  <td className="w-1/3 p-2">
                    <div className="flex flex-row gap-2 items-center">
                      <Image
                        src={c.imageUrl}
                        alt={c.name}
                        width={64}
                        height={64}
                      />
                    </div>
                  </td>

                  <td className="w-1/3 p-2">{c.name}</td>

                  <td className="p-2">
                    <div className="flex flex-row gap-2 items-center">
                      <button
                        className="uppercase px-4 py-2 rounded-full bg-primary text-white inline-block text-sm flex items-center gap-2"
                        onClick={() => {
                          handleEditPopup(c.id);
                        }}
                      >
                        Edit
                      </button>
                      <button
                        className="uppercase px-4 py-2 rounded-full bg-primary text-white inline-block text-sm flex items-center gap-2"
                        onClick={() => {
                          handleDeletePopup(c.id);
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
          <h2 className={ligaSans.className + " text-3xl"}>Edit Category</h2>

          <blockquote className="bg-primary text-white p-2 shadow-md rounded-md mt-4">
            You will edit "{categoryUpdated.name || ""}".
          </blockquote>

          <form>
            <div className="flex flex-col mt-4 gap-2">
              <label className="text-gray-100" htmlFor="name">
                Category name
              </label>

              <input
                className="border border-gray-100 rounded-md p-2"
                type="text"
                id="name"
                name="name"
                value={categoryUpdated.name}
                onChange={(e) => {
                  setCategoryUpdated({
                    ...categoryUpdated,
                    name: e.target.value,
                  });
                }}
                placeholder="Input category name"
                required
              />
            </div>

            <div className="flex flex-col mt-4 gap-2">
              <label className="text-gray-100" htmlFor="image">
                Category image
              </label>

              <input
                className="border border-gray-100 rounded-md p-2"
                placeholder="Upload your Category image"
                type="file"
                id="image"
                name="image"
              />
            </div>

            <div className="flex flex-row gap-2 items-center">
              <button
                className="mt-4 px-4 py-2 rounded-full shadow-md bg-primary text-white text-sm block flex items-center gap-2"
                href="/flexion/categories/edit"
              >
                Edit Category
              </button>

              <button
                className="mt-4 px-4 py-2 rounded-full shadow-md bg-white text-primary text-sm block flex items-center gap-2"
                onClick={(e) => {
                  e.preventDefault();
                  setIsEditPopupOpen(false);
                  setCategoryUpdated({});
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
          <h2 className={ligaSans.className + " text-3xl"}>Delete Category</h2>

          <p className="mt-4">
            Are you sure want to delete "{categoryDeleted.name || ""}".
          </p>

          <div className="flex flex-row gap-2 items-center">
            <button
              className="mt-4 px-4 py-2 rounded-full shadow-md bg-primary text-white text-sm block flex items-center gap-2"
              href="/flexion/categories/delete"
            >
              Delete Category
            </button>

            <button
              className="mt-4 px-4 py-2 rounded-full shadow-md bg-white text-primary text-sm block flex items-center gap-2"
              onClick={(e) => {
                e.preventDefault();
                setIsDeletePopupOpen(false);
                setCategoryDeleted({});
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
