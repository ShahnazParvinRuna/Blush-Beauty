"use client";

import React from "react";
import Link from "next/link";
import { IoSearchOutline, IoCart } from "react-icons/io5";
import { GrLogin, GrLogout } from "react-icons/gr";
import { useSession, signOut } from "next-auth/react";

const Header = () => {
  const { data: session } = useSession();

  return (
    <div className="flex flex-wrap justify-between items-center text-white bg-black text-xs sm:text-sm px-4 sm:px-10 py-2">
      {/* Left Menu */}
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

      {/* Right Actions */}
      <div className="flex flex-wrap gap-4 sm:gap-6 mt-2 sm:mt-0 items-center">
        <Link
          href="/search"
          className="flex items-center gap-2 hover:text-gray-300"
        >
          <IoSearchOutline className="text-lg" />
          <span>Search</span>
        </Link>

        {/* AUTH SECTION */}
        {session ? (
          <>
            <span className="text-gray-300 hidden sm:inline">
              Hi, {session.user.name}
            </span>

            <button
              onClick={() => signOut({ callbackUrl: "/login" })}
              className="flex items-center gap-2 text-red-400 hover:text-red-300"
            >
              <GrLogout className="text-lg" />
              <span>Sign Out</span>
            </button>
          </>
        ) : (
          <Link
            href="/login"
            className="flex items-center gap-2 hover:text-gray-300"
          >
            <GrLogin className="text-lg" />
            <span>Login</span>
          </Link>
        )}
         <Link
            href="/signup"
            className="flex items-center gap-2 hover:text-gray-300"
          >
            <GrLogin className="text-lg" />
            <span>SignUp</span>
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
