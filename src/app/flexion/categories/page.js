"use client";

import { useState } from "react";

import { ligaSans } from "@/config/fonts.config";

import Row from "@/components/Row";

import AdminSidebar from "@/components/flexion/AdminSidebar";
import CategoryDashboard from "@/sections/flexion/categories/CategoryDashboard";

export default function ProductPage() {
  const [isCreatePopupOpen, setIsCreatePopupOpen] = useState(false);

  return (
    <section>
      <Row>
        <AdminSidebar />

        <CategoryDashboard
          addCategory={() => {
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
            <h2 className={ligaSans.className + " text-3xl"}>Add Category</h2>

            <form>
              <div className="flex flex-col mt-4 gap-2">
                <label className="text-gray-500" htmlFor="name">
                  Category name
                </label>

                <input
                  className="border border-gray-300 rounded-md p-2"
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Input category name"
                  required
                />
              </div>

              <div className="flex flex-col mt-4 gap-2">
                <label className="text-gray-500" htmlFor="image">
                  Category image
                </label>

                <input
                  className="border border-gray-300 rounded-md p-2"
                  placeholder="Upload your category image"
                  type="file"
                  id="image"
                  name="image"
                />
              </div>

              <div className="flex flex-row gap-2 items-center">
                <button className="mt-4 px-4 py-2 rounded-full shadow-md bg-primary text-white text-sm block flex items-center gap-2">
                  Add category
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
