"use client";
import { useState } from "react";

export default function BookingModal({
  serviceName = "General Booking",
  onClose,
}) {
  const [done, setDone] = useState(false);
  window.dispatchEvent(new Event("bookingUpdated"));

  const handleSubmit = (e) => {
    e.preventDefault();

    const booking = {
      id: Date.now(),
      service: serviceName,
      name: e.target.name.value,
      phone: e.target.phone.value,
      date: e.target.date.value,
    };

    const old = JSON.parse(localStorage.getItem("bookings")) || [];
    localStorage.setItem("bookings", JSON.stringify([...old, booking]));

    // 🔥 notify dashboard
    window.dispatchEvent(new Event("bookingUpdated"));

    setDone(true);
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500"
        >
          ✕
        </button>

        <h2 className="text-xl font-semibold mb-4">{serviceName}</h2>

        {done ? (
          <p className="text-green-600 text-center font-semibold">
            ✅ Booking Confirmed!
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3">
            <input
              name="name"
              placeholder="Your Name"
              required
              className="w-full border p-2 rounded"
            />
            <input
              name="phone"
              placeholder="Phone Number"
              required
              className="w-full border p-2 rounded"
            />
            <input
              type="date"
              name="date"
              required
              className="w-full border p-2 rounded"
            />

            <button className="w-full bg-black text-white py-2 rounded">
              Confirm Booking
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
