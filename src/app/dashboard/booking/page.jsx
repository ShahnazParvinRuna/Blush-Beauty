"use client";
import { useEffect, useState } from "react";

export default function BookingsPage() {
  const [bookings, setBookings] = useState([]);

  const loadBookings = () => {
    const data = JSON.parse(localStorage.getItem("bookings")) || [];
    setBookings(data);
  };

  useEffect(() => {
    loadBookings();

    // 🔥 listen for updates
    window.addEventListener("bookingUpdated", loadBookings);

    return () => {
      window.removeEventListener("bookingUpdated", loadBookings);
    };
  }, []);

  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-semibold mb-4">
        Total Bookings: {bookings.length}
      </h2>

      {bookings.length === 0 ? (
        <p>No bookings yet</p>
      ) : (
        <table className="w-full border">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2">Service</th>
              <th className="border p-2">Name</th>
              <th className="border p-2">Phone</th>
              <th className="border p-2">Date</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((b) => (
              <tr key={b.id}>
                <td className="border p-2">{b.service}</td>
                <td className="border p-2">{b.name}</td>
                <td className="border p-2">{b.phone}</td>
                <td className="border p-2">{b.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
