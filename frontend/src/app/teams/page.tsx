"use client";
import React, { useState, useEffect } from "react";
import TeamCard from "@/components/TeamCard";
import StatCard from "@/components/StatCard";
import { Input } from "@/components/ui/input";
import { Search, TrendingUp, Trophy, Calendar } from "lucide-react";
import teamsMockData from "@/data/teamsMockData"; // Importing the existing team data

const Teams = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    // Fetching from the local file (Mock API simulation)
    setTeams(teamsMockData);
  }, []);

  // Filtering teams based on search input
  const filteredTeams = teams.filter(
    (team) =>
      team.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      team.shortName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col">
      <div className="pt-16 bg-gradient-to-b from-cricket-pitch/10 to-white">
        <div className="section-container py-8">
          <h1 className="heading-primary text-center mb-4">IPL Teams</h1>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-8">
            Explore the franchises that have shaped the Indian Premier League
            since its inception in 2008.
          </p>
        </div>
      </div>

      <main className="flex-grow section-container">
        {/* Key Team Stats */}
        <div className="mb-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            title="Most Titles"
            value="MI & CSK (5)"
            icon={<Trophy className="w-6 h-6 text-cricket-ball" />}
            color="bg-gradient-to-br from-white to-cricket-ball/10"
          />
          <StatCard
            title="Highest Win Rate"
            value="64.5%"
            icon={<TrendingUp className="w-6 h-6 text-cricket-accent" />}
            color="bg-gradient-to-br from-white to-cricket-accent/10"
          />
          <StatCard
            title="Most Matches"
            value="MI (248)"
            icon={<Calendar className="w-6 h-6 text-cricket-sky" />}
            color="bg-gradient-to-br from-white to-cricket-sky/10"
          />
          <StatCard
            title="Total Teams"
            value={teams.length}
            icon={<Trophy className="w-6 h-6 text-cricket-pitch" />}
            color="bg-gradient-to-br from-white to-cricket-pitch/10"
          />
        </div>

        {/* Search & Filter */}
        <div className="m-5 relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <Input
            type="text"
            placeholder="Search teams..."
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Teams Grid */}
        <div className="rounded-4xl shadow-lg">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 animate-fade-in m-5 rounded-full">
            {filteredTeams.map((team) => (
              <TeamCard key={team.id} {...team} />
            ))}

            {filteredTeams.length === 0 && (
              <div className="col-span-full text-center py-12">
                <p className="text-xl text-gray-500">
                  No teams found matching &quot;{searchTerm}&quot;
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Teams;
