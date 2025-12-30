import React from "react";

const BookNow = () => {
  return (
    <div className="w-full bg-[#F8E8DF] py-10 md:py-20 flex flex-col md:flex-row relative">
      {/* Left Image (mobile = full width, desktop = 45%) */}
      <div className="w-full md:w-[45%]">
        <img
          src="https://i.ibb.co.com/350RzVLn/manicures-2023-12-11-163023-pbgb.webp"
          alt="Manicure"
          className="w-full h-[250px] sm:h-[300px] md:h-[450px] object-cover rounded-md md:rounded-r-2xl shadow-lg"
        />
      </div>

      {/* Card */}
      <div
        className="
        bg-white shadow-xl rounded-xl p-8 sm:p-10 md:p-14
        w-[90%] sm:w-[80%] md:max-w-xl
        mx-auto
        md:absolute md:top-3/4 md:right-50 md:-translate-y-2/3
      "
      >
        <p className="text-[#b08a71] italic tracking-widest text-sm mb-2 text-center md:text-left">
          appointment
        </p>

        <h1 className="text-3xl sm:text-4xl font-serif font-semibold leading-tight mb-4 text-center md:text-left">
          BOOK TIME <br /> TO GET MANICURE
        </h1>

        <p className="text-gray-600 leading-relaxed mb-8 text-center md:text-left text-sm sm:text-base">
          Sed quam urna, facilisis eleifend ipsum vel, imperdiet tristique ante.
          Sed eu ligula hendrerit, venenatis eros in, vulputate diam.
        </p>

        <div className="flex justify-center md:justify-start">
          <button className="bg-black text-white px-6 sm:px-8 py-2 sm:py-3 rounded-md hover:bg-gray-800 duration-300 text-sm sm:text-base">
            Book now →
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookNow;
