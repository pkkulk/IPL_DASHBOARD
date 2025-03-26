"use client";

import { useParams } from "next/navigation";
import playersMockData from "@/data/playersMockData"; // Import the player data

const PlayerPage = () => {
  const { id } = useParams();
  const player = playersMockData.find((p) => p.id.toString() === id);

  if (!player) {
    return <div className="text-center text-xl">Player Not Found</div>;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold mb-4">{player.name}</h1>
      <p className="text-lg text-gray-600">{player.role} - {player.team}</p>

      {/* Player Image */}
      <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mt-6">
        <img
          src={player.image}
          alt={player.name}
          className="w-full h-auto rounded-xl shadow-lg"
        />
      </div>

      {/* Player Stats */}
      <div className="mt-6 p-4 bg-white shadow-md rounded-xl w-full max-w-md text-center">
        <h3 className="text-xl font-semibold">Player Stats</h3>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <p className="text-gray-500 text-sm">Matches</p>
            <p className="text-xl font-bold">{player.matches}</p>
          </div>
          <div>
            <p className="text-gray-500 text-sm">Runs</p>
            <p className="text-xl font-bold">{player.runs}</p>
          </div>
          <div>
            <p className="text-gray-500 text-sm">Wickets</p>
            <p className="text-xl font-bold">{player.wickets}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerPage;
