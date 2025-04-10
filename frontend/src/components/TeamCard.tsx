import Image from "next/image";
import React from "react";
import Link from "next/link";

interface TeamCardProps {
  id: number;
  name: string;
  shortName: string;
  logo: string;
  primaryColor: string;
  secondaryColor: string;
  titles: number;
  matches: number;
}

const TeamCard: React.FC<TeamCardProps> = ({
  id, // ✅ Add id to link correctly
  name,
  logo,
  primaryColor = "#000000",
  secondaryColor = "#333333",
  titles,
  matches,
}) => {
  const getRgba = (hex: string, alpha: number) => {
    if (!/^#[0-9A-F]{6}$/i.test(hex)) return `rgba(0, 0, 0, ${alpha})`;
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  };

  const gradientStyle = {
    background: `linear-gradient(to bottom right, ${getRgba(primaryColor, 0.9)}, ${getRgba(secondaryColor, 0.9)})`,
  };

  return (
    <Link href={`/teams/${id}`} className="block"> {/* ✅ Correct Link */}
      <div className="group rounded-3xl overflow-hidden shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
        <div className="relative h-48">
          <div style={gradientStyle} className="absolute inset-0"></div>
          <div className="absolute inset-0 flex items-center justify-center p-6 transform transition-all group-hover:scale-110">
            <Image
              src={logo || "/MI.png"}
              alt={`${name} logo`}
              width={100}
              height={100}
              className="max-h-28 max-w-full object-contain"
              unoptimized
            />
          </div>
        </div>
        <div className="p-5 bg-white rounded-b-3xl text-center">
          <h3 className="text-lg font-semibold">{name}</h3>
          <div className="grid grid-cols-2 gap-4 mt-3">
            <div>
              <p className="text-gray-500 text-sm">Titles</p>
              <p className="text-xl font-bold">{titles}</p>
            </div>
            <div>
              <p className="text-gray-500 text-sm">Matches</p>
              <p className="text-xl font-bold">{matches}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default TeamCard;
