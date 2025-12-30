import React from "react";

const Videos = () => {
  return (
    <div className="relative w-full h-[500px]">
      {/* Background Image */}
      <img
        className="w-full h-full object-cover"
        src="https://i.ibb.co.com/V0r1d9GC/interior-black-gold-salon-adorned-with-chandeliers-stylish-chairs-hair-salon-interior-decorated-with.avif"
        alt="Video Background"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Play Button with Text */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
        <button className="w-24 h-24 border border-white rounded-full flex justify-center items-center hover:scale-105 duration-300">
          <span className="text-3xl">&#9658;</span>
        </button>

        <p className="mt-4 text-lg font-serif italic">Watch our video</p>
      </div>
    </div>
  );
};

export default Videos;
