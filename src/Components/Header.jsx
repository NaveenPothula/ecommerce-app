import React, { useState } from "react";
import {
  FaUser,
  FaShoppingCart,
  FaBars,
  FaSearch,
  FaFilter,
  FaTimes,
} from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const location = useLocation();
  const isHomePage = location.pathname === "/";
  // State for toggling mobile menu

  return (
    <nav className="bg-white shadow-lg p-4 relative">
      {/* First Row: Logo, Search Bar, User Icon, Cart Icon, and Menu Button */}
      <div className="container  flex items-center justify-between  relative">
        {/* Logo */}
        <div
          className={`flex items-center ${
            !isHomePage ? "md:flex-grow md:max-w-xs" : ""
          }`}
        >
          <a
            href="/orders"
            className={`text-2xl font-bold text-blue-600 ${
              !isHomePage ? "flex-grow flex-shrink-0" : ""
            }`}
          >
            Logo
          </a>
        </div>

        {/* Search Bar (hidden on small screens) */}
        {isHomePage && (
          <div className="hidden md:flex flex-grow items-center mx-4 max-w-lg">
            <input
              type="text"
              className="flex-grow px-4 py-2 border rounded-l-md focus:outline-none"
              placeholder="Search..."
            />
            <button className="bg-blue-600 text-white px-4 py-2 rounded-r-md">
              <FaSearch />
            </button>
          </div>
        )}

        {/* User Icon and Login Text (Login text hidden on small screens) */}
        <div className="flex items-center space-x-2 ml-2">
          <FaUser className="text-gray-800" />
          <span className="hidden md:inline">Login</span>
        </div>

        {/* Cart Icon and Cart Text (Cart text hidden on small screens) */}
        <div className="flex items-center space-x-2 ml-2">
          <div className="relative flex items-center">
            <FaShoppingCart className="text-gray-800" />
            <span className="hidden md:inline ml-1">Cart</span>
            {/* Cart indicator */}
            <span className="absolute top-0 right-0 bg-red-600 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
              3
            </span>
          </div>
        </div>
        {/* Menu Button (only visible on small screens) */}
        <div className="flex items-center space-x-2 ml-2 md:hidden">
          <button
            className="text-gray-800"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}{" "}
            {/* Conditional rendering of icons */}
          </button>
          {isMobileMenuOpen && (
            <div className="absolute w-full inset-x-0 top-full px-2 py-2 bg-white shadow-lg md:hidden z-50">
              {/* Menu Items */}
              <div className="flex flex-col items-start">
                <NavLink
                  to="/profile"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `w-full text-gray-800 hover:bg-gray-100 p-2 rounded-md ${
                      isActive ? "bg-gray-200" : ""
                    }`
                  }
                >
                  Profile
                </NavLink>
                <NavLink
                  to="/orders"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `w-full text-gray-800 hover:bg-gray-100 p-2 rounded-md ${
                      isActive ? "bg-gray-200" : ""
                    }`
                  }
                >
                  Orders
                </NavLink>
                <NavLink
                  to="/reviews"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `w-full text-gray-800 hover:bg-gray-100 p-2 rounded-md ${
                      isActive ? "bg-gray-200" : ""
                    }`
                  }
                >
                  Reviews
                </NavLink>
                <NavLink
                  to="/cart"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `w-full text-gray-800 hover:bg-gray-100 p-2 rounded-md flex items-center justify-between ${
                      isActive ? "bg-gray-200" : ""
                    }`
                  }
                >
                  Cart
                </NavLink>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Menu Items: Directly Below the Menu Button */}

      {/* Second Row: Filter Icon and Search Bar (visible only on small screens) */}
      <div className="flex items-center mt-4 md:hidden">
        {/* Filter Icon */}
        <div>
          <FaFilter className="text-gray-800 mr-2 ml-2" />
        </div>
        {/* Search Bar */}
        <div className="flex-grow flex items-center">
          <input
            type="text"
            className="flex-grow px-4 py-2 border rounded-l-md focus:outline-none"
            placeholder="Search..."
          />
          <button className="bg-blue-600 text-white px-4 py-2 rounded-r-md">
            <FaSearch />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
