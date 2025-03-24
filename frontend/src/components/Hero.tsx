import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative w-full h-[500px] flex items-center justify-center bg-cover bg-center"
    style={{ backgroundImage: "url('/download1.jpeg')" }}
    >
  {/* Background Image */}

   
  
  {/* Dark Overlay (Reduce Opacity) */}


  {/* Content */}
  <div className="relative text-center text-white">
    <h1 className="text-4xl md:text-6xl font-bold">🏏 IPL Dashboard</h1>
    <p className="text-3xl mt-3 shadow-lg">
      Track live matches, teams, and player stats in real-time.
    </p>

    <Link href="/stats">
      <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg shadow-lg">
        View Stats 📊
      </button>
    </Link>
  </div>
</section>

  );
};

export default Hero;
