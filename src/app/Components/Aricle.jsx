import React from "react";

const articles = [
  {
    category: "Manicure",
    title: "Perfect Nail Pictures for Portfolio",
    date: "September 10, 2021",
    img: "https://i.ibb.co.com/bj7v3PMn/frenchmanicure-1-e1728481513796.png",
  },
  {
    category: "Manicure",
    title: "Popular Nail Stamping Techniques",
    date: "September 14, 2021",
    img: "https://i.ibb.co.com/m5gXKYtr/1720115892.webp",
  },
  {
    category: "Nail Bar",
    title: "Mistakes and Myths About Gel Polish",
    date: "September 18, 2021",
    img: "https://i.ibb.co.com/V0WsJGwG/5980008674234-2.webp",
  },
];

const Article = () => {
  return (
    <div className="w-full px-6 sm:px-10 md:px-16 lg:px-24 py-16 bg-white">
      <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-center mb-14">
        Latest Articles
      </h2>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {articles.map((item, index) => (
          <div
            key={index}
            className="space-y-3 cursor-pointer hover:scale-[1.02] duration-300"
          >
            {/* Image */}
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-[260px] sm:h-[300px] object-cover rounded-md shadow"
            />

            {/* Category */}
            <span className="bg-[#EED8C4] text-[10px] font-semibold tracking-widest py-1 px-3 rounded text-gray-800 uppercase">
              {item.category}
            </span>

            {/* Title */}
            <h3 className="text-xl font-serif font-semibold leading-7">
              {item.title}
            </h3>

            {/* Date */}
            <p className="text-sm text-gray-500 italic">{item.date}</p>
          </div>
        ))}
      </div>

      {/* <div className="flex justify-center my-5">
        <button className="text-white bg-black border-2 border-white text-center p-2 ">
          View more
        </button>
      </div> */}
    </div>
  );
};

export default Article;
