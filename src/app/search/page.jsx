"use client";
import React, { useState } from "react";
import Link from "next/link";
import Title from "../Components/Title";
import services from "@/data/services";


const Search = () => {
  const [query, setQuery] = useState("");

  const results = services.filter((item) =>
    item.service.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#F8E8DF] px-6 lg:px-20 py-20">
      {/* Title */}
      <div className="text-center mb-12">
        <Title>Search Services</Title>
        <p className="text-gray-600 mt-4">
          Search and explore our beauty & care services
        </p>
      </div>

      {/* Search Input */}
      <div className="max-w-xl mx-auto mb-10">
        <input
          type="text"
          placeholder="Search services..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full p-4 rounded-lg border focus:outline-none focus:ring-2 focus:ring-black"
        />
      </div>

      {/* Results */}
      <div className="max-w-xl mx-auto bg-white rounded-lg shadow p-6">
        {query === "" ? (
          <p className="text-gray-500 text-center">
            Start typing to search services
          </p>
        ) : results.length === 0 ? (
          <p className="text-gray-500 text-center">No service found</p>
        ) : (
          <ul className="space-y-4">
            {results.map((item) => (
              <Link key={item.id} href={`/service/${item.id}`}>
                <li className="flex justify-between items-center p-4 border rounded hover:bg-gray-50 cursor-pointer">
                  <span className="font-medium">{item.service}</span>
                  <span className="text-sm text-gray-600">{item.price}</span>
                </li>
              </Link>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Search;
