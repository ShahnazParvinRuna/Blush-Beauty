"use client";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="px-6 sm:px-10 bg-gray-50 flex items-center justify-between py-4 shadow-sm">
      {/* Brand Logo / Name */}
      <h1 className="text-black italic font-serif text-3xl sm:text-4xl">
        Blush
      </h1>

      {/* Menu Links */}
      <div className="hidden md:flex items-center space-x-6 text-gray-800 font-medium">
        <Link href="/">Home</Link>
        <Link href="/about">About Us</Link>
        <Link href="/Products">Products</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/contact">Contact Us</Link>

        {/* Book Now Button */}
        <Link href="/bookNow">
          <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 duration-300">
            Book Now
          </button>
        </Link>
      </div>

      {/* Mobile Button (Optional Hamburger) */}
      <div className="md:hidden text-2xl cursor-pointer">☰</div>
    </nav>
  );
};

export default Navbar;
