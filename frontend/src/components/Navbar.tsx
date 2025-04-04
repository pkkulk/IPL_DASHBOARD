"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { LuSquareMenu, LuX } from "react-icons/lu"; 

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  // Toggle menu state
  const toggleMenu = () => setMenu(!menu);

  // Close menu when an item is clicked
  const closeMenu = () => setMenu(false);

  return (
    <nav className="bg-blue-900 text-white p-4 shadow-lg fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center px-4 md:px-10">
        
        {/* Logo & Brand */}
        <Link href="/" className="flex items-center space-x-3">
          <Image 
            src="/download.jpeg" 
            alt="IPL Logo" 
            width={40} 
            height={40} 
            priority 
            className="rounded-full object-contain"
          />
          <span className="text-2xl font-bold tracking-wide">
            𝒾𝓅𝓁𝒾𝓃𝓈𝒾𝑔𝒽𝓉𝓈
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex space-x-6 text-lg">
          {["Home", "Teams", "Players", "Stats", "About"].map((item) => (
            <Link 
              key={item} 
              href={`/${item === "Home" ? "" : item.toLowerCase()}`} 
              className="relative transition-all duration-300 hover:text-gray-300"
            >
              {item}
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu} 
          className="lg:hidden focus:outline-none p-2"
        >
          {menu ? <LuX size={30} /> : <LuSquareMenu size={30} />}
        </button>
      </div>

      {/* Mobile Menu (Smooth Appearance) */}
      <div 
        className={`lg:hidden fixed top-16 left-0 w-full bg-blue-900 transform ${
          menu ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        } transition-all duration-300 ease-in-out`}
      >
        <ul className="flex flex-col items-center py-4 space-y-4">
          {["Home", "Teams", "Players", "Stats", "About"].map((item) => (
            <li key={item}>
              <Link 
                href={`/${item === "Home" ? "" : item.toLowerCase()}`} 
                className="text-lg hover:text-gray-300 transition-all duration-300"
                onClick={closeMenu}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
