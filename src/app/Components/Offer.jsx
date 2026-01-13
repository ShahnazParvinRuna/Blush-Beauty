import React from "react";

const services = [
  {
    name: "REGULAR MANICURE",
    desc: "In nec faucibus sem, eu accumsan massa",
    price: "$12",
    // img: "https://via.placeholder.com/60",
  },
  {
    name: "NAIL EXTENTION",
    desc: "Interdum et malesuada fames ac ante ipsum primis",
    price: "$32",
    // img: "https://via.placeholder.com/60",
  },
  {
    name: "PEDICURE",
    desc: "Maecenas euismod risus vitae tempus egestas",
    price: "$14",
    // img: "https://via.placeholder.com/60",
  },
  {
    name: "SKIN RECOVERY",
    desc: "Fusce id leo nec eros laoreet pretium ut nec tellus",
    price: "$16",
    // img: "https://via.placeholder.com/60",
  },
  {
    name: "SKIN RECOVERY",
    desc: "Fusce id leo nec eros laoreet pretium ut nec tellus",
    price: "$16",
    // img: "https://via.placeholder.com/60",
  },
  {
    name: "SKIN RECOVERY",
    desc: "Fusce id leo nec eros laoreet pretium ut nec tellus",
    price: "$16",
  //   img: "https://via.placeholder.com/60",
  },
];

const Offer = () => {
  return (
    <div className="py-20 px-6">
      
      {/* Section Title */}
      <h2 className="text-5xl font-serif text-center font-semibold mb-16 tracking-wide">
        POPULAR OFFERS
      </h2>

      {/* Offer List */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
        
        {services.map((item, index) => (
          <div key={index} className="flex items-start gap-4">
            
            {/* Image */}
            <img 
              src={item.img}
              alt="service"
              className="w-16 h-16 rounded-full object-cover border"
            />

            {/* Text + Price */}
            <div className="w-full">
              <div className="flex justify-between items-center border-b border-dotted border-gray-400 pb-1">
                <h3 className="text-lg font-semibold text-black tracking-wide">
                  {item.name}
                </h3>
                <p className="text-black font-semibold">{item.price}</p>
              </div>

              <p className="text-gray-600 text-sm mt-2">{item.desc}</p>
            </div>

          </div>
        ))}

      </div>
    </div>
  );
};

export default Offer;
