"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Title from "../Components/Title";

const Search = () => {
  const [query, setQuery] = useState("");
  const [services, setServices] = useState([]);

  useEffect(() => {
    const loadServices = async () => {
      const res = await fetch("/api/all-services", { cache: "no-store" });
      const data = await res.json();
      setServices(data);
    };
    loadServices();
  }, []);

  const results = services.filter((item) =>
    item.service.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#F8E8DF] px-6 lg:px-20 py-20">
      <div className="text-center mb-12">
        <Title>Search Services</Title>
        <p className="text-gray-600 mt-4">
          Search and explore our beauty & care services
        </p>
      </div>

      <div className="max-w-xl mx-auto mb-10">
        <input
          type="text"
          placeholder="Search services..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full p-4 rounded-lg border"
        />
      </div>

      <div className="max-w-xl mx-auto bg-white rounded-lg shadow p-6">
        {query === "" ? (
          <p className="text-center text-gray-500">
            Start typing to search services
          </p>
        ) : results.length === 0 ? (
          <p className="text-center text-gray-500">No service found</p>
        ) : (
          <ul className="space-y-4">
            {results.map((item) => (
              <Link key={item._id} href={`/service/${item._id}`}>
                <li className="p-4 border rounded hover:bg-gray-50 cursor-pointer">
                  <div className="flex justify-between">
                    <span>{item.service}</span>
                    <span>{item.price}</span>
                  </div>
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
