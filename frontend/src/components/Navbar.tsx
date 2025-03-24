"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { LuSquareMenu, LuX } from "react-icons/lu"; // Import close icon

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  // Function to toggle menu
  const toggleMenu = () => setMenu(!menu);

  // Function to close menu when an item is clicked
  const closeMenu = () => setMenu(false);

  return (
    <nav className="bg-blue-900 text-white p-4 shadow-lg fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo & Title */}
        <Link href="/" className="flex items-center space-x-3">
          <Image 
            src="/download.jpeg" 
            alt="IPL Logo" 
            width={40} 
            height={40} 
            className="rounded-full object-contain"
          />
          <span className="text-2xl font-bold">𝒾𝓅𝓁𝒾𝓃𝓈𝒾𝑔𝒽𝓉𝓈</span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex space-x-6">
          <Link href="/" className="hover:text-gray-300">Home</Link>
          <Link href="/teams" className="hover:text-gray-300">Teams</Link>
          <Link href="/players" className="hover:text-gray-300">Players</Link>
          <Link href="/stats" className="hover:text-gray-300">Stats</Link>
          <Link href="/about" className="hover:text-gray-300">About</Link>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="lg:hidden sm:block hover:cursor-pointer">
          {menu ? <LuX size={30} /> : <LuSquareMenu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menu && (
        <ul className="absolute top-16 left-0 w-full bg-blue-900 flex flex-col items-center py-4 space-y-2 lg:hidden">
          <li><Link href="/teams" className="hover:text-gray-300" onClick={closeMenu}>Teams</Link></li>
          <li><Link href="/players" className="hover:text-gray-300" onClick={closeMenu}>Players</Link></li>
          <li><Link href="/stats" className="hover:text-gray-300" onClick={closeMenu}>Stats</Link></li>
          <li><Link href="/about" className="hover:text-gray-300" onClick={closeMenu}>About</Link></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
