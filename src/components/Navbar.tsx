"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-4 py-3 shadow-md bg-orange-100">
      <div className="flex items-center font-Pacifico text-3xl font-extrabold text-gray-800">
        Journey Tales
      </div>

      <div className="hidden md:flex space-x-6">
        <Link
          href="/"
          className="text-light-red-500 hover:text-red-500 hover:underline underline-offset-4 font-bold"
        >
          HOME
        </Link>
        <Link
          href="/about"
          className="text-light-red-500 hover:text-red-500 hover:underline underline-offset-4 font-bold"
        >
          ABOUT
        </Link>
        <Link
          href="/blog"
          className="text-light-red-500 hover:text-red-500 hover:underline underline-offset-4 font-bold"
        >
          BLOG
        </Link>
        <Link
          href="/contact"
          className="text-light-red-500 hover:text-red-500 hover:underline underline-offset-4 font-bold"
        >
          CONTACT
        </Link>
      </div>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden flex flex-col space-y-1"
      >
        <span className="block w-6 h-0.5 bg-black"></span>
        <span className="block w-6 h-0.5 bg-black"></span>
        <span className="block w-6 h-0.5 bg-black"></span>
      </button>
      {isOpen && (
        <div className="absolute top-16 right-4 bg-white shadow-lg rounded-lg w-40 md:hidden">
          <Link
            href="#home"
            className="block px-4 py-2 text-center text-light-red-500 hover:text-red-500 hover:underline font-bold"
          >
            Home
          </Link>
          <Link
            href="#about"
            className="block px-4 py-2 text-center text-light-red-500 hover:text-red-500 hover:underline font-bold"
          >
            About
          </Link>
          <Link
            href="#blog"
            className="block px-4 py-2 text-center text-light-red-500 hover:text-red-500 hover:underline font-bold"
          >
            Blog
          </Link>
          <Link
            href="#contact"
            className="block px-4 py-2 text-center text-light-red-500 hover:text-red-500 hover:underline font-bold"
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
