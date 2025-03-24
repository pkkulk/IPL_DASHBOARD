import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
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
          <span className="text-2xl font-bold">🏏 IPL Dashboard</span>
        </Link>

        {/* Navigation Links */}
        <div className="space-x-6 ">
          <Link href="/" className="hover:text-gray-300">Home</Link>
          <Link href="/teams" className="hover:text-gray-300">Teams</Link>
          <Link href="/players" className="hover:text-gray-300">Players</Link>
          <Link href="/stats" className="hover:text-gray-300">Stats</Link>
          <Link href="/about" className="hover:text-gray-300">About</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
