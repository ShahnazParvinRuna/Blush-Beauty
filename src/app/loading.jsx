"use client";
import React from "react";

const Loading = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#F8E8DF]">
      {/* Spinner */}
      <div className="w-16 h-16 border-4 border-black border-t-transparent rounded-full animate-spin"></div>

      {/* Text */}
      <p className="mt-6 text-gray-700 font-medium tracking-wide">
        Loading, please wait...
      </p>
    </div>
  );
};

export default Loading;
