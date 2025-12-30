import React from "react";

const logos = [
  "https://i.ibb.co.com/DfTqW0cm/beauty-salon-logo-female-gold-600nw-2306041673.webp",
  "https://i.ibb.co.com/W4tTv5bY/images.png",
  "https://i.ibb.co.com/W4tTv5bY/images.png",
  "https://i.ibb.co.com/W4tTv5bY/images.png",
  "https://i.ibb.co.com/W4tTv5bY/images.png",
];

const Brands = () => {
  return (
    <div className="bg-black py-10 sm:py-14 w-full">
      <div className="flex justify-center items-center gap-6 sm:gap-10 md:gap-14 lg:gap-16 flex-wrap px-4">
        {logos.map((logo, i) => (
          <img
            key={i}
            src={logo}
            alt="brand logo"
            className="
              h-10 sm:h-14 md:h-16 lg:h-20
              opacity-70 hover:opacity-100
              transition duration-300 cursor-pointer object-contain
            "
          />
        ))}
      </div>
    </div>
  );
};

export default Brands;
