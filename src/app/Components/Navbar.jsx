"use client";
import React, { useState } from "react";
import Link from "next/link";
import BookingModal from "./BookingModal";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="px-6 sm:px-10 bg-gray-50 flex items-center justify-between py-4 shadow-sm">
        {/* Brand */}
        <h1 className="text-black italic font-serif text-3xl sm:text-4xl">
          Blush
        </h1>

        {/* Menu */}
        <div className="hidden md:flex items-center space-x-6 text-gray-800 font-medium">
          <Link href="/">Home</Link>
          <Link href="/about">About Us</Link>
          <Link href="/products">Products</Link>
          <Link href="/service">Our Services</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact Us</Link>

          {/* Book Now */}
          <button
            onClick={() => setOpen(true)}
            className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 duration-300"
          >
            Book Now
          </button>
        </div>

        {/* Mobile */}
        <div className="md:hidden text-2xl cursor-pointer">☰</div>
      </nav>

      {/* Booking Modal */}
      {open && (
        <BookingModal
          serviceName="Beauty Service Booking"
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;
