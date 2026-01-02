import React from "react";
import ServiceCard from "../Components/ServiceCard";
import services from "@/data/services"; // ← এটা ছিল না

const Service = () => {
  return (
    <div className="w-full bg-[#F8E8DF] py-20 px-6 lg:px-20">
      {/* Heading Section */}
      <div className="text-center mb-14">
        <p className="text-[#b08a71] tracking-widest uppercase text-sm">
          Our Services
        </p>
        <h2 className="text-4xl font-serif font-semibold">
          Professional Beauty & Care Services
        </h2>
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
          We provide premium beauty care treatments with expert hands, luxury
          products and personalized service. Feel the elegance with every touch.
        </p>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((item) => (
          <ServiceCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Service;
