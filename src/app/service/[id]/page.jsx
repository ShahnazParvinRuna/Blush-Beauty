"use client";
import React from "react";
import { useRouter } from "next/navigation";
import services from "../../../data/services";

import { useState } from "react";
import BookingModal from "@/app/Components/BookingModal";

export default function ServiceDetails({ params }) {
  const router = useRouter();
  const { id } = React.use(params);

  const service = services.find((s) => s.id === Number(id));

  if (!service) {
    return <div className="p-20 text-center">Service not found</div>;
  }
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F8E8DF] px-6 py-20 lg:px-20 relative">
      {/* 🔙 Sticky Back Button */}
      <button
        onClick={() => router.back()}
        className="fixed top-24 left-6 z-50 bg-white shadow-md rounded-full px-4 py-2 flex items-center gap-2 text-sm text-gray-700 hover:bg-black hover:text-white transition duration-300"
      >
        ← Back
      </button>

      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <img
          src={service.image}
          alt={service.service}
          className="w-full h-[320px] object-cover rounded-md"
        />

        <h1 className="text-4xl font-serif font-semibold mt-6">
          {service.service}
        </h1>

        <p className="text-xl text-gray-600 mt-2">
          <span className="font-semibold">{service.price}</span>
        </p>

        <p className="text-gray-700 mt-6 leading-relaxed">
          This service is provided by our professional beauty experts using
          premium products and modern techniques.
        </p>

        <button
          onClick={() => setOpen(true)}
          className="mt-8 px-8 py-3 bg-black text-white rounded-md"
        >
          Book This Service
        </button>

        {open && (
          <BookingModal service={service} onClose={() => setOpen(false)} />
        )}
      </div>
    </div>
  );
}
