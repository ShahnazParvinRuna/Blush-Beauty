"use client";
import React from "react";

const SeceondBanner = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between md:items-center my-10 px-6 md:px-14 gap-10">

      {/* TEXT SECTION */}
      <div className="md:w-1/2 space-y-6">
        <h1 className="text-3xl md:text-5xl font-semibold leading-tight">
          Creative manicure and pedicure studio <br className="hidden md:block"/>
          with masterly performance of services <br className="hidden md:block"/>
          for the beauty of your nails
        </h1>

        <p className="text-gray-600 md:text-base text-sm leading-relaxed">
          Vestibulum congue, sapien a sollicitudin euismod, lorem ex auctor.
          Ut nec laoreet ante. Duis ultricies congue libero, et accumsan purus
          malesuada aptent taciti.
        </p>

        <div className="flex gap-10 mt-4">
          <div className="flex flex-col items-center">
            <p className="text-5xl font-bold text-black">185</p>
            <p className="text-center leading-tight">Professional <br/> masters</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-5xl font-bold text-black">265</p>
            <p className="text-center leading-tight">Nail polish <br/> colors</p>
          </div>
        </div>
      </div>

      {/* IMAGE SECTION */}
      <div className="md:w-1/2 flex justify-center md:justify-end">
        <div className="flex gap-4">
          <img
            className="w-48 h-72 sm:w-60 sm:h-80 md:w-72 md:h-[450px] object-cover rounded-2xl shadow-xl hover:scale-105 duration-300"
            src="https://i.ibb.co/C33FsW9f/image1.jpg"
            alt="img1"
          />
          <img
            className="w-48 h-72 sm:w-60 sm:h-80 md:w-72 md:h-[450px] object-cover rounded-2xl shadow-xl hover:scale-105 duration-300"
            src="https://i.ibb.co/ZRq97nwY/image2.jpg"
            alt="img2"
          />
        </div>
      </div>
    </div>
  );
};

export default SeceondBanner;
