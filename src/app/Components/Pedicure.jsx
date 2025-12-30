"use client";
import React from "react";

const Pedicure = () => {
  const items = [
    {
      title: "MANICURE",
      img: "https://i.ibb.co.com/LDRmG5vR/female-feet-bath-pedicure-procedure-outline-drawing-registration-women-blogs-websites-articles-15552.webp",
      desc: "In cursus neque a varius tempus ante lorem dapibus urna leo erat a est.",
    },
    {
      title: "PEDICURE",
      img: "https://i.ibb.co.com/LDRmG5vR/female-feet-bath-pedicure-procedure-outline-drawing-registration-women-blogs-websites-articles-15552.webp",
      desc: "Fusce euismod arcu id lacus feugiat quis dapibus felis facilisis sit amet.",
    },
    {
      title: "NAIL ART",
      img: "https://i.ibb.co.com/LDRmG5vR/female-feet-bath-pedicure-procedure-outline-drawing-registration-women-blogs-websites-articles-15552.webp",
      desc: "Vestibulum pretium tortor nec cursus lectus sem posuere massa viverra.",
    },
    {
      title: "SPA CARE",
      img: "https://i.ibb.co.com/LDRmG5vR/female-feet-bath-pedicure-procedure-outline-drawing-registration-women-blogs-websites-articles-15552.webp",
      desc: "Aenean vitae ligula quis turpis semper suscipit consectetur sed lacus.",
    },
  ];

  return (
    <div className="px-6 sm:px-10 lg:px-20 py-14">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
        Our Pedicure Services
      </h2>

      <div className="
        grid 
        grid-cols-1 
        sm:grid-cols-2 
        lg:grid-cols-4 
        gap-10
        place-items-center
      ">
        {items.map((item, i) => (
          <div
            key={i}
            className="
              bg-white 
              shadow-lg 
              rounded-xl 
              p-6 
              text-center 
              hover:shadow-2xl 
              hover:-translate-y-2 
              duration-300 
              w-full
              sm:w-[80%]
              md:w-[90%]
              lg:w-full
            "
          >
            <img
              className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full object-cover mb-4 "
              src={item.img}
              alt={item.title}
            />
            <h3 className="text-xl md:text-2xl font-semibold text-black">
              {item.title}
            </h3>
            <p className="text-gray-500 mt-2 text-sm leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pedicure;
