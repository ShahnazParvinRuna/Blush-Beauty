import React from "react";
import Link from "next/link";

const ServiceCard = ({ item }) => {
  return (
    <div className="bg-white p-4 shadow rounded hover:scale-[1.02] duration-300">
      <img
        src={item.image}
        alt={item.service}
        className="h-48 w-full object-cover rounded"
      />
      <h3 className="text-xl font-semibold mt-3">{item.service}</h3>
      <p className="text-gray-600">{item.price}</p>

      <div className="flex gap-2 mt-4">
        <Link
          href="/dashboard"
          className="w-1/2 text-center bg-black text-white py-2 rounded hover:bg-gray-800 duration-200"
        >
          Shop Now
        </Link>
        <Link
          href={`/service/${item.id}`}
          className="w-1/2 text-center border border-black py-2 rounded hover:bg-black hover:text-white duration-200"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
