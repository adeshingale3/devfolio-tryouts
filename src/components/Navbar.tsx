import { useState } from "react";
import { Bell, Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative w-full shadow-sm shadow-black/10 bg-white">
      {/* Navbar Container */}
      <div className="h-16 w-full px-4 sm:px-10 md:px-20 lg:px-40 flex flex-row justify-between items-center">
        {/* Left Section (Menu + Title) */}
        <div className="flex flex-row items-center gap-4">
          {/* Menu Icon (visible only on mobile) */}
          <button
            className="block sm:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Title */}
          <h1 className="text-2xl font-bold montserrat text-center w-full sm:w-auto">
            Devfolio
          </h1>

          {/* Desktop Menu */}
          <div className="hidden sm:flex text-gray-400 flex-row gap-8 text-md ml-10">
            <h3 className="cursor-pointer hover:text-blue-400 transition-colors font-semibold">Home</h3>
            <h3 className="cursor-pointer hover:text-blue-400 transition-colors font-semibold">Blog</h3>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-row items-center gap-4">
          <Bell color="gray" className="cursor-pointer" />
          <div className="flex flex-row gap-2 items-center group cursor-pointer">
            <img
              className="w-10 h-10 rounded-full shadow-md group-hover:ring-2 ring-blue-200 transition-all duration-300"
              src="https://devfolio.co/_next/image?url=https%3A%2F%2Fassets.devfolio.co%2Fusers%2Fb7e8d98e741f48eea51cab6b859695d1%2Favatar-f1185bde-bb1b-44ca-b5e1-243e01e8cbbf.jpeg&w=360&q=75"
              alt="Profile"
            />
            {/* Name hidden on small screens */}
            <h1 className="hidden sm:block text-gray-700 font-medium">Adeshx</h1>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md border-t border-gray-200 flex flex-col items-center py-4 gap-3 animate-slideDown">
          <h3 className="cursor-pointer text-gray-700 hover:text-black transition-colors font-semibold">
            Home
          </h3>
          <h3 className="cursor-pointer text-gray-700 hover:text-black transition-colors font-semibold">
            Blog
          </h3>
        </div>
      )}
    </div>
  );
};

export default Navbar;
