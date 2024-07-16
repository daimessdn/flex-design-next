"use client";

import { useState } from "react";

import { FaPlus } from "react-icons/fa";

import { ligaSans } from "@/config/fonts.config";

import Row from "@/components/Row";
import Column from "@/components/Column";

import AdminSidebar from "@/components/flexion/AdminSidebar";

export default function DashboardPage() {
  const [isCreatePopupOpen, setIsCreatePopupOpen] = useState(false);
  return (
    <section>
      <Row>
        <AdminSidebar />

        <Column className="my-4">
          <h1 className={ligaSans.className + " text-2xl mb-4"}>Featured</h1>

          <p className="leading-6 mb-4">
            This is a featured dashboard page. Add some featured content to be
            displayed in homepage.
          </p>

          <button
            className="uppercase px-4 py-2 rounded-full bg-primary text-white flex items-center gap-2 w-fit text-sm mb-4"
            onClick={() => {
              setIsCreatePopupOpen(true);
            }}
          >
            <FaPlus size={20} />
            Add Featured
          </button>

          <Row></Row>
        </Column>

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
            <h2 className={ligaSans.className + " text-3xl"}>Add Featured</h2>

            <form>
              <div className="flex flex-col mt-4 gap-2">
                <label className="text-gray-500" htmlFor="name">
                  Featured name
                </label>

                <input
                  className="border border-gray-300 rounded-md p-2"
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Input featured name"
                  required
                />
              </div>

              <div className="flex flex-col mt-4 gap-2">
                <label className="text-gray-500" htmlFor="description">
                  Featured description
                </label>

                <input
                  className="border border-gray-300 rounded-md p-2"
                  type="text"
                  id="description"
                  name="description"
                  placeholder="Input featured description"
                  required
                />
              </div>

              <div className="flex flex-col mt-4 gap-2">
                <label className="text-gray-500" htmlFor="image">
                  Featured image
                </label>

                <input
                  className="border border-gray-300 rounded-md p-2"
                  placeholder="Upload your featured image"
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
                  Add featured
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
