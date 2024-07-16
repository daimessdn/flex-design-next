"use client";

import Image from "next/image";
import dynamic from "next/dynamic";

import "react-quill/dist/quill.snow.css";

import { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";

import { ligaSans } from "@/config/fonts.config";
import { quillFormats, quillModules } from "@/config/quill.config";

import Column from "@/components/Column";

const QuillEditor = dynamic(() => import("react-quill"), { ssr: false });

export default function ArticleDashboard({ addArticle }) {
  const [articles, setArticles] = useState([]);

  const [articleUpdated, setArticleUpdated] = useState({});
  const [articleDeleted, setArticleDeleted] = useState({});

  const [isEditPopupOpen, setIsEditPopupOpen] = useState(false);
  const [isDeletePopupOpen, setIsDeletePopupOpen] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3000/api/articles")
      .then((res) => res.json())
      .then((res) => setArticles(res.data));
  }, []);

  const handleEditPopup = (id) => {
    const articleBeingUpdated = articles.find((a) => a.id === id);
    setArticleUpdated(articleBeingUpdated);
    setIsEditPopupOpen(true);
  };

  const handleDeletePopup = (id) => {
    const articleBeingDeleted = articles.find((a) => a.id === id);
    setArticleDeleted(articleBeingDeleted);
    setIsDeletePopupOpen(true);
  };

  return (
    <>
      <Column className="p-4">
        <h1 className={ligaSans.className + " text-3xl mb-4"}>Flex articles</h1>

        <button
          className="uppercase px-4 py-2 rounded-full bg-primary text-white flex items-center gap-2 w-fit text-sm mb-4"
          onClick={addArticle}
        >
          <FaPlus size={20} />
          Add Article
        </button>

        <div className="rounded-lg overflow-hidden w-full">
          <table className="w-full">
            <thead>
              <tr className="bg-green-100">
                <th className="w-1/3 p-2">Title</th>
                <th className="w-1/5 p-2">Author</th>
                <th className="w-1/5 p-2">Published Date</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {articles.map((a) => (
                <tr key={a.id} className="odd:bg-green-50 even:bg-green-100">
                  <td className="w-1/3 p-2">
                    <div className="flex flex-row gap-2 items-center">
                      {a.title}
                    </div>
                  </td>

                  <td className="w-1/5 p-2">{a.author}</td>

                  <td className="w-1/6 p-2">
                    {new Date(a.publishedDate).toDateString()}
                  </td>

                  <td className="p-2">
                    <div className="flex flex-row gap-2 items-center">
                      <button
                        className="uppercase px-4 py-2 rounded-full bg-primary text-white inline-block text-sm flex items-center gap-2"
                        onClick={() => {
                          handleEditPopup(a.id);
                        }}
                      >
                        Edit
                      </button>

                      <button
                        className="uppercase px-4 py-2 rounded-full bg-primary text-white inline-block text-sm flex items-center gap-2"
                        onClick={() => {
                          handleDeletePopup(a.id);
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
          <h2 className={ligaSans.className + " text-3xl"}>Edit Article</h2>

          <blockquote className="bg-primary text-white p-2 shadow-md rounded-md mt-4">
            You will edit "{articleUpdated.title || ""}".
          </blockquote>

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
                value={articleUpdated.title}
                onChange={(e) => {
                  setArticleUpdated({
                    ...articleUpdated,
                    title: e.target.value,
                  });
                }}
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
                value={articleUpdated.author}
                onChange={(e) => {
                  setArticleUpdated({
                    ...articleUpdated,
                    author: e.target.value,
                  });
                }}
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
                value={articleUpdated.body}
                onChange={(bodyValue) => {
                  setArticleUpdated({
                    ...articleUpdated,
                    body: bodyValue,
                  });
                }}
              />
            </div>

            <div className="flex flex-row gap-2 items-center">
              <button
                className="mt-4 px-4 py-2 rounded-full shadow-md bg-primary text-white text-sm block flex items-center gap-2"
                href="/flexion/articles/edit"
              >
                Edit Article
              </button>

              <button
                className="mt-4 px-4 py-2 rounded-full shadow-md bg-white text-primary text-sm block flex items-center gap-2"
                onClick={(e) => {
                  e.preventDefault();
                  setIsEditPopupOpen(false);
                  setArticleUpdated({});
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
          <h2 className={ligaSans.className + " text-3xl"}>Delete Article</h2>

          <p className="mt-4">
            Are you sure want to delete "{articleDeleted.title || ""}".
          </p>

          <div className="flex flex-row gap-2 items-center">
            <button
              className="mt-4 px-4 py-2 rounded-full shadow-md bg-primary text-white text-sm block flex items-center gap-2"
              href="/flexion/articles/delete"
            >
              Delete Article
            </button>

            <button
              className="mt-4 px-4 py-2 rounded-full shadow-md bg-white text-primary text-sm block flex items-center gap-2"
              onClick={(e) => {
                e.preventDefault();
                setIsDeletePopupOpen(false);
                setArticleDeleted({});
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
