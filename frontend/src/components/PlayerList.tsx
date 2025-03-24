// components/PlayerList.tsx
"use client"; // Add this only if using App Router
import { useState } from "react";
import playersData from "@/data/players.json"; // Sample data file

export default function PlayerList() {
  const [search, setSearch] = useState("");

  const filteredPlayers = playersData.filter((player) =>
    player.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="mt-6">
      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search players..."
        className="p-2 border rounded w-full mb-4"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Players Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2 border">Player</th>
              <th className="p-2 border">Team</th>
              <th className="p-2 border">Role</th>
              <th className="p-2 border">Matches</th>
              <th className="p-2 border">Runs</th>
              <th className="p-2 border">Wickets</th>
            </tr>
          </thead>
          <tbody>
            {filteredPlayers.map((player, index) => (
              <tr key={index} className="border">
                <td className="p-2 border">{player.name}</td>
                <td className="p-2 border">{player.team}</td>
                <td className="p-2 border">{player.role}</td>
                <td className="p-2 border">{player.matches}</td>
                <td className="p-2 border">{player.runs || "-"}</td>
                <td className="p-2 border">{player.wickets || "-"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
