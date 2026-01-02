"use client";
import React, { useState } from "react";
import Title from "../Components/Title";

const About = () => {
  const [open, setOpen] = useState(null);

  const toggle = (i) => {
    setOpen(open === i ? null : i);
  };

  const dropdowns = [
    {
      title: "Our Mission",
      content:
        "Our mission is to provide premium beauty services in a relaxing and luxurious environment, ensuring every client feels confident and beautiful.",
    },
    {
      title: "Our Vision",
      content:
        "We aim to become a trusted beauty destination by delivering consistent quality, innovation, and personalized care.",
    },
    {
      title: "Our Expertise",
      content:
        "Our team consists of trained professionals specialized in makeup, skincare, nail art, hair styling, and spa treatments.",
    },
    {
      title: "Hygiene & Safety",
      content:
        "We strictly maintain hygiene standards, using sanitized tools and skin-friendly, premium products for every service.",
    },
  ];

  return (
    <div className="bg-[#F8E8DF] min-h-screen px-6 lg:px-20 py-20">
      {/* Title */}
      <div className="text-center mb-16">
        <Title>About Us</Title>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Learn more about our values, expertise, and commitment to beauty care.
        </p>
      </div>

      {/* Dropdown Section */}
      <div className="max-w-3xl mx-auto space-y-4">
        {dropdowns.map((item, i) => (
          <div key={i} className="bg-white rounded-lg shadow overflow-hidden">
            <button
              onClick={() => toggle(i)}
              className="w-full flex justify-between items-center px-6 py-4 text-left font-semibold text-lg"
            >
              {item.title}
              <span className="text-xl">{open === i ? "−" : "+"}</span>
            </button>

            {open === i && (
              <div className="px-6 pb-4 text-gray-700 leading-relaxed">
                {item.content}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
