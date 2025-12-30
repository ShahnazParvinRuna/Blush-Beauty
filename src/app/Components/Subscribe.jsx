import React from "react";

const Subscribe = () => {
  return (
    <div className="w-full bg-[#F6EDE6] py-16 px-6 sm:px-12 lg:px-24 font-serif">

      <div className="flex flex-col lg:flex-row items-center justify-between gap-10">

        {/* Left Side Heading */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-center lg:text-left leading-snug">
          SUBSCRIBE TO <br /> OUR NEWSLETTER
        </h2>

        {/* Input + Button Container */}
        <div className="flex w-full lg:w-[60%] items-center border-b border-black gap-3 pb-2">

          <input
            type="email"
            placeholder="Your email ..."
            className="flex-grow bg-transparent outline-none text-gray-700 placeholder-gray-500"
          />

          <button className="bg-black text-white px-8 py-2 rounded-none hover:bg-gray-800 duration-300">
            Subscribe
          </button>

        </div>
      </div>
    </div>
  );
};

export default Subscribe;
