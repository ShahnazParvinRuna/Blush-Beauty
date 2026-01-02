import React from "react";
import Title from "../Components/Title";

const blogs = [
  {
    id: 1,
    title: "Perfect Nail Care Tips",
    date: "September 10, 2025",
    desc: "Learn how to keep your nails healthy, strong and stylish with expert manicure tips.",
    image: "https://i.ibb.co/pxcZdz2t/manicure.jpg",
  },
  {
    id: 2,
    title: "Bridal Makeup Trends",
    date: "October 02, 2025",
    desc: "Explore the latest bridal makeup styles that enhance natural beauty.",
    image: "https://i.ibb.co/KcN0SJSJ/bride-getting-her-make-up-ready.jpg",
  },
  {
    id: 3,
    title: "Hair Spa Benefits",
    date: "October 18, 2025",
    desc: "Why hair spa treatment is important for shiny and healthy hair.",
    image: "https://i.ibb.co/Bxw8QZJ/Hair-Spa-Treatment.jpg",
  },
];

const Blog = () => {
  return (
    <div className="bg-[#F8E8DF] min-h-screen px-6 lg:px-20 py-20">
      {/* Page Title */}
      <div className="text-center mb-14">
        <Title>Our Blog</Title>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Read our latest beauty tips, trends and expert advice to keep yourself
          glowing and confident.
        </p>
      </div>

      {/* Blog Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white rounded-lg shadow hover:shadow-xl duration-300"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-56 object-cover rounded-t-lg"
            />

            <div className="p-6">
              <p className="text-sm text-gray-500">{blog.date}</p>
              <h3 className="text-xl font-semibold mt-2">{blog.title}</h3>
              <p className="text-gray-600 mt-3">{blog.desc}</p>

              <button className="mt-5 text-black font-medium hover:underline">
                Read More →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
