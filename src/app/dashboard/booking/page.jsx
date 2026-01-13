"use client";
import { useEffect, useState } from "react";

export default function BookingsPage() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadBookings = async () => {
    try {
      const res = await fetch("/api/bookings", {
        cache: "no-store", // 🔥 important for fresh data
      });
      const data = await res.json();
      setBookings(data);
    } catch (error) {
      console.error("Failed to load bookings");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadBookings();

    // 🔄 auto refresh every 5 seconds (optional)
    const interval = setInterval(loadBookings, 5000);
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return <p className="p-6">Loading bookings...</p>;
  }

  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-semibold mb-4">
        Total Bookings: {bookings.length}
      </h2>

      {bookings.length === 0 ? (
        <p>No bookings yet</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-200">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="border p-2">Service</th>
                <th className="border p-2">Customer</th>
                <th className="border p-2">Phone</th>
                <th className="border p-2">Date</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((b) => (
                <tr key={b._id}>
                  <td className="border p-2">{b.serviceName}</td>
                  <td className="border p-2">{b.customerName}</td>
                  <td className="border p-2">{b.phone}</td>
                  <td className="border p-2">{b.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
