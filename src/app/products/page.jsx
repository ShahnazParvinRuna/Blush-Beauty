import React from "react";
import Title from "../Components/Title";

const Products = () => {
  return (
    <div className="bg-[#F8E8DF] min-h-screen">
      <div className="container mx-auto px-10 py-20 flex flex-col md:flex-row items-center gap-14">
        
        <div className="w-full md:w-1/2 space-y-6">
          <h5 className="text-lg tracking-[6px] text-[#b08a71] uppercase">
            Nail Styles
          </h5>
          <Title>
            Modern Style
            <br />& High Quality Work
          </Title>

          <p className="text-[18px] text-gray-700">
            Elegant nail designs with premium finishing. Soft colors, smooth
            textures, and artistic detailing for a luxurious experience.
            High-quality materials, long lasting shine & professional level
            craftsmanship.
          </p>

         
          <button className="px-8 py-3 bg-black text-white rounded-md text-[16px] hover:bg-gray-800 duration-300">
            Shop Now →
          </button>
        </div>

       
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="https://i.ibb.co.com/RkHBXb18/de7f030be534cbfd2a6bd6a1fdefa270.jpg"
            alt="Product"
            className="rounded-lg shadow-xl"
          />
        </div>
      </div>
      <div className="container mx-auto px-10 py-20 flex flex-col md:flex-row items-center gap-14">
      
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="https://i.ibb.co.com/Dg6khCRt/nails-01175549692117555829061755591866.webp"
            alt="Product"
            className="rounded-lg shadow-xl"
          />
        </div>

       
        <div className="w-full md:w-1/2 space-y-6">
          <h5 className="text-lg tracking-[6px] text-[#b08a71] uppercase">
            Nail Styles
          </h5>
          <Title>
            Modern Style
            <br />& High Quality Work
          </Title>

          <p className="text-[18px] text-gray-700">
            Elegant nail designs with premium finishing. Soft colors, smooth
            textures, and artistic detailing for a luxurious experience.
            High-quality materials, long lasting shine & professional level
            craftsmanship.
          </p>

         
          <button className="px-8 py-3 bg-black text-white rounded-md text-[16px] hover:bg-gray-800 duration-300">
            Shop Now →
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;
