"use client";
import React from "react";
import Link from "next/link";
import { IoSearchOutline, IoCart } from "react-icons/io5";
import { GrLogin } from "react-icons/gr";

const Header = () => {
  return (
    <div className="flex flex-wrap justify-between items-center text-white bg-black text-xs sm:text-sm px-4 sm:px-10 py-2">
      {/* Left Text Menu */}
      <div className="flex flex-wrap gap-x-4 gap-y-1">
        <Link href="/payment" className="hover:text-gray-300">
          Payment
        </Link>
        <Link href="/delivery" className="hover:text-gray-300">
          Delivery
        </Link>
        <Link href="/terms" className="hover:text-gray-300">
          Terms & Condition
        </Link>
        <Link href="/working-hours" className="hover:text-gray-300">
          Working Hours
        </Link>
      </div>

      {/* Right Icons / Actions */}
      <div className="flex flex-wrap gap-4 sm:gap-6 mt-2 sm:mt-0">
        <Link
          href="/search"
          className="flex items-center gap-2 hover:text-gray-300"
        >
          <IoSearchOutline className="text-lg" />
          <span>Search</span>
        </Link>

        <Link
          href="/login"
          className="flex items-center gap-2 hover:text-gray-300"
        >
          <GrLogin className="text-lg" />
          <span>Login</span>
        </Link>

        <Link
          href="/cart"
          className="flex items-center gap-2 hover:text-gray-300"
        >
          <IoCart className="text-lg" />
          <span>Cart</span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
