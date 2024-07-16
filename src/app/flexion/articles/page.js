"use client";

import { useState } from "react";
import dynamic from "next/dynamic";

import "react-quill/dist/quill.snow.css";

import { ligaSans } from "@/config/fonts.config";
import { quillFormats, quillModules } from "@/config/quill.config";

import Row from "@/components/Row";

import AdminSidebar from "@/components/flexion/AdminSidebar";
import ArticleDashboard from "@/sections/flexion/articles/ArticleDashboard";

const QuillEditor = dynamic(() => import("react-quill"), { ssr: false });

export default function ProductPage() {
  const [isCreatePopupOpen, setIsCreatePopupOpen] = useState(false);

  return (
    <section>
      <Row>
        <AdminSidebar />

        <ArticleDashboard
          addArticle={() => {
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
            <h2 className={ligaSans.className + " text-3xl"}>Add Article</h2>

            <form>
              <div className="flex flex-col mt-4 gap-2">
                <label className="text-gray-100" htmlFor="title">
                  Article title
                </label>

                <input
                  className="border border-gray-100 rounded-md p-2"
                  type="text"
                  id="title"
                  name="title"
                  placeholder="Input category title"
                  required
                />
              </div>

              <div className="flex flex-col mt-4 gap-2">
                <label className="text-gray-100" htmlFor="author">
                  Article author
                </label>

                <input
                  className="border border-gray-100 rounded-md p-2"
                  type="text"
                  id="author"
                  author="author"
                  placeholder="Input category author"
                  required
                />
              </div>

              <div className="flex flex-col mt-4">
                <span className="text-gray-100">Article body</span>

                <QuillEditor
                  className="w-full h-[250px] mt-2 bg-white border border-black overflow-auto"
                  modules={quillModules}
                  formats={quillFormats}
                />
              </div>

              <div className="flex flex-row gap-2 items-center">
                <button className="mt-4 px-4 py-2 rounded-full shadow-md bg-primary text-white text-sm block flex items-center gap-2">
                  Add article
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
