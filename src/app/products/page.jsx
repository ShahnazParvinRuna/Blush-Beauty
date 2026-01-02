import React from "react";
import Title from "../Components/Title";
import Link from "next/link";

const Products = () => {
  return (
    <div className="bg-[#F8E8DF] min-h-screen py-16 px-6 lg:px-20">
      <div className="container mx-auto px-10 py-20 flex flex-col md:flex-row items-center gap-14">
        <div className="w-full md:w-1/2 space-y-6">
          <h5 className="text-lg tracking-[6px] text-[#b08a71] uppercase">
            Nail Styles
          </h5>
          <Title>
            Modern Style <br />& High Quality Work
          </Title>
          <p className="text-[18px] text-gray-700">
            Elegant nail designs with premium finishing. Soft colors, smooth
            textures, and artistic detailing for a luxurious experience.
          </p>

          <Link href={"/dashboard"}>
            <button className="px-8 py-3 bg-black text-white rounded-md text-[16px] hover:bg-gray-800 duration-300">
              Shop Now →
            </button>
          </Link>

          <Link href={"/service"}>
            <button className="px-8 py-3 bg-black text-white rounded-md text-[16px] hover:bg-gray-800 duration-300 ml-3">
              View More →
            </button>
          </Link>
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
            Modern Style <br />& High Quality Work
          </Title>
          <p className="text-[18px] text-gray-700">
            Elegant nail designs with premium finishing. Soft colors, smooth
            textures, and artistic detailing for a luxurious experience.
          </p>

          <Link href={"/dashboard"}>
            <button className="px-8 py-3 bg-black text-white rounded-md text-[16px] hover:bg-gray-800 duration-300">
              Shop Now →
            </button>
          </Link>

          <Link href={"/service"}>
            <button className="px-8 py-3 bg-black text-white rounded-md text-[16px] hover:bg-gray-800 duration-300 ml-3">
              View More →
            </button>
          </Link>
        </div>
      </div>

      {/* 🔥 2 Service Cards Section */}
      {/* <h2 className="text-center text-3xl font-serif font-semibold mb-10">
        Our Best Services
      </h2> */}

      {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-4xl mx-auto">
        {limitedServices.map((item) => (
          <div
            key={item.id}
            className="bg-white p-5 rounded-lg shadow-lg hover:scale-105 duration-300"
          >
            <img
              src={item.image}
              alt={item.service}
              className="w-full h-[200px] object-cover rounded-md"
            />
            <h3 className="text-2xl font-semibold mt-4">{item.service}</h3>
            <p className="text-gray-500">{item.price}</p>

            <div className="flex gap-3 mt-4">
              <Link
                href="/dashboard"
                className="w-1/2 text-center bg-black text-white py-2 rounded-md"
              >
                Shop Now
              </Link>
              <Link
                href={`/service/${item.id}`}
                className="w-1/2 text-center border border-black py-2 rounded-md hover:bg-black hover:text-white duration-200"
              >
                Details
              </Link>
            </div>
          </div>
        ))}
      </div> */}

      {/* View More Button for all services */}
      {/* <div className="text-center mt-10">
        <Link href="/service">
          <button className="bg-black text-white px-8 py-3 rounded-md hover:bg-gray-800">
            View All Services →
          </button>
        </Link>
      </div> */}
    </div>
  );
};

export default Products;
