import React, { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-xl font-bold text-emerald-800 tracking-wide">
          OPTIK KAYUMANIS
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 font-medium text-gray-600">
          <a href="#home" className="hover:text-emerald-700 transition">
            Home
          </a>
          <a href="#about" className="hover:text-emerald-700 transition">
            About
          </a>
          <a href="#services" className="hover:text-emerald-700 transition">
            Services
          </a>
          <a href="#branches" className="hover:text-emerald-700 transition">
            Stores
          </a>
          <a href="#contact" className="hover:text-emerald-700 transition">
            Contact Us
          </a>
        </div>

        <div className="hidden md:block">
          <a
            href="https://wa.me/628171601969"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2 rounded-full font-semibold transition shadow-sm">
            Book Now
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-3">
          <a
            href="#home"
            onClick={() => setIsMenuOpen(false)}
            className="block text-gray-600 hover:text-emerald-700">
            Home
          </a>
          <a
            href="#about"
            onClick={() => setIsMenuOpen(false)}
            className="block text-gray-600 hover:text-emerald-700">
            About
          </a>
          <a
            href="#services"
            onClick={() => setIsMenuOpen(false)}
            className="block text-gray-600 hover:text-emerald-700">
            Services
          </a>
          <a
            href="#branches"
            onClick={() => setIsMenuOpen(false)}
            className="block text-gray-600 hover:text-emerald-700">
            Stores
          </a>
          <a
            href="#contact"
            onClick={() => setIsMenuOpen(false)}
            className="block text-gray-600 hover:text-emerald-700">
            Contact Us
          </a>
          <a
            href="https://wa.me/628171601969"
            className="block text-center bg-emerald-600 text-white py-2 rounded-lg font-semibold">
            Book Now
          </a>
        </div>
      )}
    </nav>
  );
}
