import React from "react";
import { IoSearchOutline, IoCart } from "react-icons/io5";
import { GrLogin } from "react-icons/gr";

const Header = () => {
  return (
    <div className="flex flex-wrap justify-between items-center text-white bg-black text-xs sm:text-sm px-4 sm:px-10 py-2">
      {/* Left Text Menu */}
      <div className="flex flex-wrap gap-x-4 gap-y-1">
        <p className="hover:text-gray-300 cursor-pointer">Payment</p>
        <p className="hover:text-gray-300 cursor-pointer">Delivery</p>
        <p className="hover:text-gray-300 cursor-pointer">Terms & Condition</p>
        <p className="hover:text-gray-300 cursor-pointer">Working Hours</p>
      </div>

      {/* Right Icons / Actions */}
      <div className="flex flex-wrap gap-4 sm:gap-6 mt-2 sm:mt-0">
        <div className="flex items-center gap-2 cursor-pointer hover:text-gray-300">
          <IoSearchOutline className="text-lg" />
          <p>Search</p>
        </div>

        <div className="flex items-center gap-2 cursor-pointer hover:text-gray-300">
          <GrLogin className="text-lg" />
          <p>Login</p>
        </div>

        <div className="flex items-center gap-2 cursor-pointer hover:text-gray-300">
          <IoCart className="text-lg" />
          <p>Cart</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
