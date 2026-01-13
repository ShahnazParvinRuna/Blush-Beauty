"use client";
import React, { useEffect, useState } from "react";
import ServiceCard from "../Components/ServiceCard";

const Service = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadServices = async () => {
      try {
        const res = await fetch("/api/all-services", {
          cache: "no-store",
        });
        const data = await res.json();

        // 🔒 safety check
        if (Array.isArray(data)) {
          setServices(data);
        } else {
          setServices([]);
        }
      } catch (error) {
        console.error("Failed to load services", error);
      } finally {
        setLoading(false);
      }
    };

    loadServices();
  }, []);

  return (
    <section className="w-full bg-[#F8E8DF] py-20 px-6 lg:px-20">
      {/* 🔥 Heading Section */}
      <div className="text-center mb-16">
        <p className="text-[#b08a71] tracking-[4px] uppercase text-sm mb-3">
          Our Services
        </p>

        <h2 className="text-4xl md:text-5xl font-serif font-semibold text-gray-800 leading-tight">
          Professional Beauty <br />& Care Services
        </h2>

        <div className="w-24 h-[2px] bg-[#b08a71] mx-auto my-6"></div>

        <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
          Experience luxury beauty treatments delivered by expert professionals
          using premium products — crafted to enhance your natural elegance.
        </p>
      </div>

      {/* 🔥 Cards Section */}
      {loading ? (
        <p className="text-center text-gray-600">Loading services...</p>
      ) : services.length === 0 ? (
        <p className="text-center text-red-500">No services found</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((item) => (
            <ServiceCard key={item._id} item={item} />
          ))}
        </div>
      )}
    </section>
  );
};

export default Service;
