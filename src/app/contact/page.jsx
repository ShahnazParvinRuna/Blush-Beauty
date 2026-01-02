"use client";
import React from "react";
import Title from "../Components/Title";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="bg-[#F8E8DF] min-h-screen px-6 lg:px-20 py-20">
      {/* Page Title */}
      <div className="text-center mb-16">
        <Title>Please Contact Us</Title>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Have questions or want to book an appointment? Get in touch with us
          and we’ll be happy to assist you.
        </p>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
        {/* Contact Info */}
        <div className="space-y-8">
          <div className="flex items-center gap-4">
            <FaPhoneAlt className="text-xl text-black" />
            <div>
              <h4 className="font-semibold">Phone</h4>
              <p className="text-gray-600">+880 1XXXXXXXXX</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <FaEnvelope className="text-xl text-black" />
            <div>
              <h4 className="font-semibold">Email</h4>
              <p className="text-gray-600">info@blushbeauty.com</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <FaMapMarkerAlt className="text-xl text-black" />
            <div>
              <h4 className="font-semibold">Location</h4>
              <p className="text-gray-600">Dhaka, Bangladesh</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-8 rounded-lg shadow">
          <h3 className="text-2xl font-semibold mb-6">Send Us a Message</h3>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border p-3 rounded"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border p-3 rounded"
              required
            />
            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full border p-3 rounded"
              required
            ></textarea>

            <button
              type="submit"
              className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800 duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
