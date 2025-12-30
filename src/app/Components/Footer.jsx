import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer
      className="w-full bg-black text-white py-16 bg-center bg-no-repeat bg-cover"
      style={{
        backgroundImage:
          "url('https://i.ibb.co.com/mFVGDBHT/1dd85be27741a5b8792693695aadb7f3.jpg')",
      }}
    >
      {/* Logo / Title */}
      <h1 className="text-4xl font-serif text-center mb-4 tracking-wide">Blush</h1>
      <p className="text-center text-[#c9c9c9] max-w-2xl mx-auto px-4">
        Mauris eget velit mauris. Suspendisse nec odio nec turpis malesuada
        vestibulum at vitae eros proin in ligula sed.
      </p>

      {/* Footer Menu */}
      <div className="flex justify-center gap-6 sm:gap-10 mt-10 text-sm text-[#e4e4e4]">
        <Link href="/articles" className="hover:text-white duration-200">Articles</Link>
        <Link href="/products" className="hover:text-white duration-200">Products</Link>
        <Link href="/faq" className="hover:text-white duration-200">FAQ</Link>
        <Link href="/gallery" className="hover:text-white duration-200">Gallery</Link>
        <Link href="/contact" className="hover:text-white duration-200">Contacts</Link>
      </div>

      {/* Social Icons */}
      <div className="flex justify-center gap-6 text-xl mt-10">
        <a href="#" className="hover:text-gray-300 duration-200"><FaFacebookF /></a>
        <a href="#" className="hover:text-gray-300 duration-200"><FaInstagram /></a>
        <a href="#" className="hover:text-gray-300 duration-200"><FaTwitter /></a>
        <a href="#" className="hover:text-gray-300 duration-200"><FaYoutube /></a>
      </div>

      {/* Bottom Line */}
      <p className="text-center text-gray-400 text-xs mt-14">
        © All Rights Reserved - 2021 - Purchase
      </p>
    </footer>
  );
};

export default Footer;
