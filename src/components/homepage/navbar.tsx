"use client";
import React, { useState } from "react";
import { FaCog, FaBars, FaTimes } from "react-icons/fa";
import { VscSettings } from "react-icons/vsc";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/components/cart-component/CartContext";
import { FiBell, FiHeart, FiSearch, FiShoppingCart } from "react-icons/fi";

const Header = () => {
  const { cartItems } = useCart();

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-white py-4 px-4 md:px-8 shadow-md flex items-center justify-between flex-wrap">
      {/* Logo and Search Bar Container */}
      <div className="flex items-center space-x-4 lg:space-x-20 w-full lg:w-auto">
        {/* Logo */}
        <Link href="/">
          <button className="text-xl md:text-2xl font-bold text-blue-600 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 rounded-md transition">
            MORENT
          </button>
        </Link>
        {/* Search Bar */}
        <div className="relative w-full lg:w-[492px] h-[44px] mt-2 lg:mt-0">
          <input
            type="text"
            placeholder="Search something here"
            className="w-full h-full border rounded-full py-2 px-4 pl-12 pr-12 text-sm border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            style={{ borderRadius: "70px" }}
          />
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500">
            <FiSearch />
          </div>
          <div className="absolute text-2xl right-4 top-1/2 transform -translate-y-1/2 text-gray-500">
            <Link href="/">
              <VscSettings />
            </Link>
          </div>
        </div>
      </div>

      {/* Hamburger Menu for Small Screens */}
      <div className="lg:hidden flex items-center">
        <button onClick={toggleMenu} className="text-2xl text-gray-600">
          <FaBars />
        </button>
      </div>

      {/* Icons for Large Screens */}
      <div className="hidden lg:flex items-center space-x-2 lg:space-x-4 mt-2 lg:mt-0">
        <Link href="/">
          <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-gray-300 flex items-center justify-center">
            <FiHeart className="text-lg md:text-xl text-gray-600 cursor-pointer" />
          </div>
        </Link>

        <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-gray-300 flex items-center justify-center">
          <Link href={"/cart"}>
            <div className="relative">
              <FiShoppingCart className="text-lg cursor-pointer text-gray-600" />
              {totalItems > 0 && (
                <span className="absolute -top-5 -right-4 bg-blue-500 text-gray-300 text-xs font-semibold rounded-full w-5 h-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </div>
          </Link>
        </div>

        <Link href="/">
          <div className="relative w-8 h-8 md:w-10 md:h-10 rounded-full border border-gray-300 flex items-center justify-center">
            <FiBell className="text-lg md:text-xl text-gray-600 cursor-pointer" />
            <span className="absolute top-1 right-0 w-3 h-3 bg-red-500 rounded-full"></span>
          </div>
        </Link>
        <Link href="/">
          <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-gray-300 flex items-center justify-center">
            <FaCog className="text-lg md:text-xl text-gray-600 cursor-pointer" />
          </div>
        </Link>

        {/* Profile Picture */}
        <Link href="/">
          <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-gray-300 flex items-center justify-center overflow-hidden cursor-pointer">
            <Image src="/profile.png" alt="Profile" width={40} height={40} />
          </div>
        </Link>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end">
          <div className="bg-white w-4/5 h-full p-6 shadow-lg space-y-6 relative">
            <button
              onClick={toggleMenu}
              className="absolute top-4 right-4 text-3xl text-gray-600"
            >
              <FaTimes />
            </button>

            <Link href="/">
              <div
                className="text-xl text-gray-600 py-2 hover:text-blue-600"
                onClick={toggleMenu}
              >
                Favorites
              </div>
            </Link>
            <Link href="/">
              <div
                className="text-xl text-gray-600 py-2 hover:text-blue-600"
                onClick={toggleMenu}
              >
                Notifications
              </div>
            </Link>
            <Link href="/">
              <div
                className="text-xl text-gray-600 py-2 hover:text-blue-600"
                onClick={toggleMenu}
              >
                Settings
              </div>
            </Link>
            <Link href="/">
              <div
                className="text-xl text-gray-600 py-2 hover:text-blue-600"
                onClick={toggleMenu}
              >
                Profile
              </div>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
