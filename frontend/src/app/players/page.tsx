"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

// Mock Data (Replace with API data in a real app)
const playersMockData = [
  {
    id: 1,
    name: "Virat Kohli",
    team: "RCB",
    role: "Batsman",
    matches: 237,
    runs: 7263,
    wickets: 4,
    image: "https://via.placeholder.com/150/EC1C24/FFFFFF?text=VK",
  },
  {
    id: 2,
    name: "MS Dhoni",
    team: "CSK",
    role: "Wicketkeeper",
    matches: 250,
    runs: 4978,
    wickets: 0,
    image: "https://via.placeholder.com/150/FDB913/FFFFFF?text=MSD",
  },
  {
    id: 3,
    name: "Rohit Sharma",
    team: "MI",
    role: "Batsman",
    matches: 243,
    runs: 6211,
    wickets: 15,
    image: "https://via.placeholder.com/150/0078BC/FFFFFF?text=RS",
  },
];

const Players = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPlayers = playersMockData.filter((player) =>
    player.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col">
      <div className="pt-16 bg-gradient-to-b from-gray-100 to-white">
        <div className="section-container py-8">
          <h1 className="text-3xl font-bold text-center mb-4">IPL Players</h1>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-8">
            Discover the top players in the Indian Premier League.
          </p>
        </div>
      </div>

      <main className="flex-grow section-container">
        {/* Search Bar */}
        <div className="m-5 relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <Input
            type="text"
            placeholder="Search players..."
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Players Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in m-5">
          {filteredPlayers.map((player) => (
            <div
              key={player.id}
              className="bg-white rounded-3xl shadow-lg overflow-hidden group transition-transform transform hover:scale-105 hover:shadow-xl"
            >
              {/* Player Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={player.image}
                  alt={player.name}
                  width={150}
                  height={150}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                />
              </div>

              {/* Player Info */}
              <div className="p-5 text-center">
                <h3 className="text-lg font-semibold mb-2">{player.name}</h3>
                <p className="text-gray-500 text-sm">{player.role} - {player.team}</p>
                <div className="grid grid-cols-2 gap-4 mt-3">
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
          ))}
          {filteredPlayers.length === 0 && (
            <div className="col-span-full text-center py-12">
              <p className="text-xl text-gray-500">
                No players found matching "{searchTerm}"
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Players;