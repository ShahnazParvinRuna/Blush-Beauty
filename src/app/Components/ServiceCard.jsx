import Link from "next/link";

const ServiceCard = ({ item }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300 group">
      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={item.image}
          alt={item.service}
          className="w-full h-56 object-cover group-hover:scale-105 transition duration-300"
        />

        <span className="absolute top-4 right-4 bg-[#b08a71] text-white px-3 py-1 rounded-full text-sm">
          {item.price}
        </span>
      </div>

      {/* Content */}
      <div className="p-6 text-center">
        <h3 className="text-xl font-serif font-semibold text-gray-800 mb-2">
          {item.service}
        </h3>

        <p className="text-gray-500 text-sm mb-6">
          Luxury beauty care with expert professionals.
        </p>

        {/* Buttons */}
        <div className="flex gap-3 justify-center">
          {/* View Details */}
          <Link href={`/service/${item._id}`}>
            <button className="px-4 py-2 text-sm border border-[#b08a71] text-[#b08a71] rounded-full hover:bg-[#b08a71] hover:text-white transition">
              View Details
            </button>
          </Link>

          {/* Book Now */}
          <Link
            href={{
              pathname: "/book-now",
              query: {
                serviceId: item._id,
                serviceName: item.service,
              },
            }}
          >
            <button className="px-4 py-2 text-sm bg-[#b08a71] text-white rounded-full hover:bg-[#9c745e] transition">
              Book Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
