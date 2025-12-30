"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Banner = () => {
  const slider = [
    {
      title: "Nail Manicure",
      description: "Professional manicure care for perfect nails.",
      img: "https://i.ibb.co/jk48tWvn/example.jpg",
    },
    {
      title: "Lip Care",
      description: "Smooth, glossy, and hydrated lips with expert care.",
      img: "https://i.ibb.co/Jj13nM8M/example.jpg",
    },
    {
      title: "Party Makeup",
      description: "Enhance your beauty for any party or event.",
      img: "https://i.ibb.co/pB9tKTfK/example.jpg",
    },
    {
      title: "Bride Groom",
      description: "Special bridal & groom makeover packages.",
      img: "https://i.ibb.co/7JNxXhwq/example.jpg",
    },
  ];

  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slider.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slider.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + slider.length) % slider.length);

  return (
    <div className="relative w-full h-[350px] sm:h-[420px] md:h-[500px] lg:h-[600px] overflow-hidden shadow-lg">
      {/* Slide */}
      <AnimatePresence>
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0"
        >
          <img
            src={slider[current].img}
            alt={slider[current].title}
            className="w-full h-[250px] sm:h-[320px] md:h-[420px] lg:h-[500px] xl:h-[600px] object-cover object-center rounded-none"
          />

          {/* Content */}
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-center px-6 sm:px-10 lg:px-20 text-white">
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold max-w-xl">
              {slider[current].title}
            </h1>
            <p className="mt-2 sm:mt-4 text-sm sm:text-base md:text-lg max-w-md">
              {slider[current].description}
            </p>
            <button className="mt-4 sm:mt-6 px-4 py-2 sm:px-6 sm:py-2 bg-black/70 border border-white hover:bg-black text-white rounded-lg w-fit text-sm sm:text-base">
              View More
            </button>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Prev Button */}
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-black p-2 sm:p-3 rounded-full text-xs sm:text-base"
      >
        ◀
      </button>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-black p-2 sm:p-3 rounded-full text-xs sm:text-base"
      >
        ▶
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 w-full flex justify-center gap-2 sm:gap-3">
        {slider.map((_, i) => (
          <div
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2 w-2 sm:h-3 sm:w-3 rounded-full cursor-pointer transition ${
              current === i ? "bg-black" : "bg-white"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Banner;
