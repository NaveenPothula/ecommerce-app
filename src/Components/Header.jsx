import React, { useState } from "react";
import {
  FaUser,
  FaShoppingCart,
  FaBars,
  FaSearch,
  FaFilter,
  FaTimes,
} from "react-icons/fa";
import { useLocation, useSearchParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import FiltersComponent from "./Filters";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  let initialSearch = searchParams.get("search");
  if (!initialSearch) {
    initialSearch = "";
  }
  const [search, setSearch] = useState(initialSearch);

  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const handleSearch = () => {
    // const params = new URLSearchParams(searchParams);

    // // Clear all existing parameters
    // params.forEach((value, key) => {
    //   params.delete(key);
    // });
    // setSearchParams("");
    if (search.trim() !== "") {
      const newParams = new URLSearchParams();

      // Add new query parameters
      newParams.set("search", search);

      // Update the URL with the new parameters
      setSearchParams(newParams);
      //   setSearchParams("");
      //   searchParams.append("search", search);
      //   setSearchParams(searchParams);
    }
  };
  // State for toggling mobile menu

  return (
    <nav className="bg-white shadow-lg p-4 relative">
      {/* First Row: Logo, Search Bar, User Icon, Cart Icon, and Menu Button */}
      <div className="container  flex items-center justify-between gap-4 relative">
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
              className="flex-grow px-4 py-2 border rounded-l-md focus:outline-none max-w-sm"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded-r-md"
              onClick={handleSearch}
            >
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
          {/* <button
            className="text-gray-800"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}{" "}
           
          </button> */}
          {isMobileMenuOpen && (
            <button
              className="text-gray-800"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <FaTimes />
            </button>
          )}
          {!isMobileMenuOpen && (
            <button
              className="text-gray-800"
              onClick={() => {
                setIsMobileMenuOpen(true);
                setShowFilter(false);
              }}
            >
              <FaBars />
            </button>
          )}
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
      {isHomePage && (
        <div className="flex items-center mt-4 md:hidden">
          {/* Filter Icon */}
          <div>
            {!showFilter && (
              <button
                className="text-gray-800 md:hidden ml-2 mr-4"
                onClick={() => {
                  setShowFilter(true);
                  setIsMobileMenuOpen(false);
                }}
              >
                <FaFilter />
              </button>
            )}
            {showFilter && (
              <button
                className="text-gray-800 md:hidden ml-2 mr-4"
                onClick={() => setShowFilter(false)}
              >
                <FaTimes />
              </button>
            )}
            {showFilter && (
              <div className="absolute w-1/2 bg-white shadow-lg z-50 top-full">
                <FiltersComponent /> {/* Your filter component */}
              </div>
            )}
          </div>
          {/* Search Bar */}
          <div className="flex-grow flex items-center">
            <input
              type="text"
              className="flex-grow px-4 py-2 border rounded-l-md focus:outline-none"
              placeholder="Search..."
            />
            <button className="bg-blue-600 text-white px-3 py-2 rounded-r-md">
              <FaSearch />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
