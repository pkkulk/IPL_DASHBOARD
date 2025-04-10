"use client";
import { useParams } from "next/navigation";
import teamsMockData from "@/data/teamsMockData";
import Image from "next/image";

const TeamPage = () => {
  const { id } = useParams();
  const team = teamsMockData.find((team) => team.id === Number(id));

  if (!team) {
    return <div className="text-center text-3xl font-bold mt-10 text-red-500">Team not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10 px-5">
      {/* Header Section */}
      <div
        className="relative w-full flex flex-col items-center justify-center py-24 md:py-32 shadow-lg"
        style={{
          background: `linear-gradient(to right, ${team.primaryColor}, ${team.secondaryColor})`,
          borderRadius: "0 0 50px 50px",
        }}
      >
        {/* Team Logo */}
        <div className="absolute -bottom-12 bg-white p-4 rounded-full shadow-lg">
          <Image
            src={team.logo || "/MI.png"}
            alt={`${team.name} Logo`}
            width={100}
            height={150}
            className="object-contain drop-shadow-lg"
            unoptimized
          />
        </div>

        {/* Team Name */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-md">{team.name}</h1>
      </div>

      {/* Team Info Card */}
      <div className="bg-white p-6 md:p-10 shadow-lg rounded-3xl max-w-4xl w-full text-center mt-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{team.name}</h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center">
          <div className="bg-gray-100 p-4 md:p-6 rounded-xl shadow-sm">
            <p className="text-lg md:text-xl font-semibold text-gray-700">🏆 Titles</p>
            <p className="text-2xl md:text-3xl font-bold text-gray-900">{team.titles}</p>
          </div>
          <div className="bg-gray-100 p-4 md:p-6 rounded-xl shadow-sm">
            <p className="text-lg md:text-xl font-semibold text-gray-700">📊 Matches</p>
            <p className="text-2xl md:text-3xl font-bold text-gray-900">{team.matches}</p>
          </div>
          <div className="bg-gray-100 p-4 md:p-6 rounded-xl shadow-sm">
            <p className="text-lg md:text-xl font-semibold text-gray-700">⚡ Win %</p>
            <p className="text-2xl md:text-3xl font-bold text-gray-900">
              {((team.titles / team.matches) * 100).toFixed(2)}%
            </p>
          </div>
        </div>

        {/* Additional Details */}
        <div className="mt-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">📈 Performance Summary</h3>
          <p className="text-gray-600 text-lg">
            {team.name} has won **{team.titles} titles** in **{team.matches} matches**, with a winning percentage of **{((team.titles / team.matches) * 100).toFixed(2)}%**.
          </p>
        </div>

        {/* Placeholder for Top Players */}
        <div className="mt-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">🏏 Top Players (Power BI)</h3>
          <p className="text-gray-600 text-lg">🔍 Coming soon: Player stats powered by Power BI.</p>
        </div>
      </div>

      {/* Power BI Analytics Section */}
      <div className="mt-12 w-full max-w-6xl h-96 bg-gray-300 rounded-lg flex items-center justify-center shadow-inner">
        <p className="text-gray-600 text-2xl font-medium">🚧 Power BI Integration Coming Soon 🚧</p>
      </div>
    </div>
  );
};

export default TeamPage;
