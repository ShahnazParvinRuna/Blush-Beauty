"use client";
import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#F8E8DF] px-6 text-center">
      {/* 404 */}
      <h1 className="text-8xl font-serif font-bold text-black">404</h1>

      <h2 className="text-3xl font-serif font-semibold mt-4">Page Not Found</h2>

      <p className="text-gray-600 mt-4 max-w-md">
        Sorry, the page you are looking for does not exist or has been moved.
        Let’s get you back to something beautiful.
      </p>

      {/* Buttons */}
      <div className="flex gap-4 mt-8">
        <Link href="/">
          <button className="px-6 py-3 bg-black text-white rounded hover:bg-gray-800 duration-300">
            Go Home
          </button>
        </Link>

        <Link href="/contact">
          <button className="px-6 py-3 border border-black text-black rounded hover:bg-black hover:text-white duration-300">
            Contact Us
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
