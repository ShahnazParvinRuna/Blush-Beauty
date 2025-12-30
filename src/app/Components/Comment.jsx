"use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';

const testimonials = [
  {
    name: "Sophia Williams",
    role: "Regular Customer",
    img: "https://via.placeholder.com/60",
    review:
      "Amazing work! Beautiful finish and elegant style. Highly recommended!"
  },
  {
    name: "Emily Carter",
    role: "Client",
    img: "https://via.placeholder.com/60",
    review:
      "The service was professional, clean, and comforting. Loved the design!"
  },
  {
    name: "Lina Gomez",
    role: "Happy Customer",
    img: "https://via.placeholder.com/60",
    review:
      "Perfect nail art! Smooth texture and lasts long. Definitely coming again."
  },
  {
    name: "Ava Johnson",
    role: "Customer",
    img: "https://via.placeholder.com/60",
    review:
      "Great quality and friendly service. My nails never looked better!"
  },
];

const Comment = () => {
  return (
    <div className=" py-20 px-6">
      <h2 className="text-4xl font-serif font-semibold text-center mb-12">
        What Our Clients Say
      </h2>

      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 2000 }}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        className="max-w-3xl mx-auto"
      >
        {testimonials.map((client, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white rounded-xl shadow-lg p-10 text-center">
              <p className="italic text-gray-700 text-lg leading-relaxed">
                "{client.review}"
              </p>
              <div className="flex items-center justify-center gap-4 mt-6">
                <img
                  src={client.img}
                  alt="client"
                  className="w-14 h-14 rounded-full border"
                />
                <div className="text-left">
                  <h4 className="font-semibold text-gray-900 text-lg">{client.name}</h4>
                  <p className="text-gray-500 text-sm">{client.role}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Comment;
