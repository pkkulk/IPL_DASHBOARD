// components/Teams.tsx
import Link from "next/link";
import Image from "next/image";

const Team = () => {
  return (
    <section className="py-6 bg-gray-100">
      <h2 className="text-center text-2xl font-bold text-blue-500">🏏 IPL Teams</h2>
     <div className="grid grid-cols-2 md:grid-cols-4 gap-6 m-4">
  <div className="flex flex-col items-center  shadow-2xl p-4 rounded-lg bg-white">
    <Link href="/teams" className="font-semibold hover:text-blue-500 text-center">
      <Image src="/MI.png" alt="Mumbai Indians" width={100} height={100} className="mb-2 h-24 w-20 lg:h-36 lg:w-44 "/>
      Mumbai <br/> Indians
    </Link>
  </div>

  <div className="flex flex-col items-center shadow-2xl p-4 rounded-lg  bg-white">
    <Link href="/teams" className="font-semibold hover:text-blue-500 text-center">
      <Image src="/csk.png" alt="Chennai Super Kings" width={100} height={100} className="mb-2 h-24 w-20 lg:h-36 lg:w-44"/>
      Chennai Super <br/> Kings
    </Link>
  </div>

  <div className="flex flex-col items-center  shadow-2xl p-4 rounded-lg  bg-white">
    <Link href="/teams" className="font-semibold hover:text-blue-500 text-center">
      <Image src="/RCB.jpeg" alt="Royal Challengers Bangalore" width={120} height={100} className="mb-2 h-24 w-32 lg:h-36 lg:w-44"/>
      Royal Challengers <br/>Bangalore
    </Link>
  </div>

  <div className="flex flex-col items-center shadow-2xl p-4 rounded-lg  bg-white">
    <Link href="/teams" className="font-semibold hover:text-blue-500 text-center">
      <Image src="/SRH.jpeg" alt="Kolkata Knight Riders" width={100} height={100} className="mb-2 h-24 w-20 lg:h-36 lg:w-44"/>
      Sunrisers <br/> Hydrabad
    </Link>
  </div>
</div>

    </section>
  );
};

export default Team;
