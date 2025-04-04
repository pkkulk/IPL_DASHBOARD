import Link from "next/link";

const Hero = () => {
  return (
    <section
      className="relative w-full h-[500px] flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/stadium.jpg')" }}
    >
      {/* Dark Overlay */}

      {/* Content */}
      <div className="relative text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg">
          🏏 IPL Dashboard
        </h1>
        <p className="text-lg md:text-2xl mt-3 text-gray-200">
          Track live matches, teams, and player stats in real-time.
        </p>

        <Link href="/stats">
          <button className="mt-5 px-6 py-3 rounded-full text-lg font-semibold text-white 
          bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 
          shadow-lg transition-all transform hover:scale-105">
            View Stats 📊
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
