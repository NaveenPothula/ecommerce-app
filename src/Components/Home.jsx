import React from "react";
import Filter from "./Filters"; // Import your Filter component
import { FaHeart, FaStar } from "react-icons/fa"; // Import some icons for dummy data

const ProductListing = () => {
  // Dummy products data
  const products = [
    {
      id: 1,
      name: "Product 1",
      price: "$199.99",
      image: "https://via.placeholder.com/150",
      rating: 4.5,
      inWishlist: false,
    },
    {
      id: 2,
      name: "Product 2",
      price: "$299.99",
      image: "https://via.placeholder.com/150",
      rating: 4,
      inWishlist: true,
    },
    {
      id: 3,
      name: "Product 3",
      price: "$399.99",
      image: "https://via.placeholder.com/150",
      rating: 3.5,
      inWishlist: false,
    },
    {
      id: 4,
      name: "Product 3",
      price: "$399.99",
      image: "https://via.placeholder.com/150",
      rating: 3.5,
      inWishlist: false,
    },
    // More products...
  ];

  return (
    <div className="container px-4 py-3 flex flex-col md:flex-row bg-white">
      {/* Filter Component - Only visible on medium and larger screens */}
      <div className="hidden md:flex md:shrink-0 w-1/6 mr-5">
        <Filter />
      </div>

      {/* Products Component - Takes remaining width and adjusts height accordingly */}
      <div className="w-full">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 min-h-[300px] max-h-[500px]"
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-40 object-cover rounded-t-md"
                />
                {product.inWishlist && (
                  <FaHeart className="absolute top-2 right-2 text-red-500" />
                )}
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-gray-500">{product.price}</p>
                <div className="flex items-center mt-2">
                  {Array.from({ length: 5 }, (_, index) => (
                    <FaStar
                      key={index}
                      className={`text-yellow-500 ${
                        index < Math.floor(product.rating)
                          ? "fill-current"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                  <span className="ml-2 text-sm text-gray-600">
                    {product.rating.toFixed(1)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductListing;
