"use client";
import React, { useEffect, useState } from "react";
import { travelBlogs } from "./blogdata";

interface Blog {
  id: number;
  image: string;
  title: string;
  paragraph: string;
}

const Page = ({ params }: { params: { id: string } }) => {
  const [blog, setBlog] = useState<Blog>({
    image: "",
    paragraph: "",
    id: 1,
    title: "",
  });

  useEffect(() => {
    const selectedBlog = travelBlogs.find(
      (blog) => blog.id === Number(params.id)
    );
    if (selectedBlog) {
      setBlog(selectedBlog);
    }
  }, [params.id]);

  const paragraphParts = blog.paragraph
    ? blog.paragraph.split(". ").reduce<string[]>((acc, sentence, index) => {
        const partIndex = Math.floor(
          index / (blog.paragraph.split(". ").length / 3)
        );
        if (!acc[partIndex]) acc[partIndex] = "";
        acc[partIndex] += sentence + ". ";
        return acc;
      }, [])
    : [];

  return (
    <div className="p-4 sm:p-8 max-w-screen-xl mx-auto">
      <div
        className="w-full mb-4 mx-auto overflow-hidden rounded-md"
        style={{
          height: "350px",
          width: "100%",
          maxWidth: "650px",
          backgroundImage: `url(${blog.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      <div className="flex justify-center">
        <h1 className="text-3xl sm:text-4xl font-bold mt-6 sm:mt-12 mb-6 sm:mb-12 border-4 border-transparent bg-clip-border bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-4 inline-block text-center w-full sm:w-auto">
          {blog.title}
        </h1>
      </div>

      <div className="text-gray-700 flex flex-col items-center">
        {paragraphParts.map((part, index) => (
          <p
            key={index}
            className="mb-2 text-sm sm:text-base text-center max-w-full sm:max-w-2xl px-2 sm:px-8"
          >
            {part}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Page;
