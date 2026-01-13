"use client";
import React, { useEffect, useState } from "react";
import ServiceCard from "../Components/ServiceCard";

const Service = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch("/api/all-services", {
          cache: "no-store",
        });
        const data = await res.json();

        // 🔐 safety
        setServices(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error("Failed to load services", err);
        setServices([]);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, []);

  return (
    <div className="w-full bg-[#F8E8DF] py-20 px-6 lg:px-20">
      {/* Heading */}
      <div className="text-center mb-16">
        <p className="text-[#b08a71] tracking-[4px] uppercase text-sm mb-3">
          Our Services
        </p>
        <h2 className="text-4xl md:text-5xl font-serif font-semibold">
          Professional Beauty & Care Services
        </h2>
      </div>

      {/* Cards */}
      {loading ? (
        <p className="text-center">Loading services...</p>
      ) : services.length === 0 ? (
        <p className="text-center">No services found</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((item) => (
            <ServiceCard key={item._id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Service;
