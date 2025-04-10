"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BASE_URL from './config';
type Match = {
  id: string;
  name: string;
  status: string;
  dateTimeGMT: string;
  teamInfo: {
    name: string;
    shortname: string;
    img: string;
  }[];
  venue: string;
  matchType: string;
};

const FeaturedMatches: React.FC = () => {
  const [matches, setMatches] = useState<Match[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
 

  // useEffect(() => {
  //   const fetchMatches = async () => {
  //     try {
  //       const apiKey = "bdd1446d-bf33-4fe5-8117-456f88b17638"; // Insecure!
  //       const response = await axios.get(`https://api.cricapi.com/v1/currentMatches?apikey=${apiKey}`);
  //       const rawData = response.data; // <-- Store raw data here
  //       console.log("📡 Raw Data Fetched from External API (with key):", rawData);
  //        setMatches(rawData);
  //        setLoading(false);
  //       // Optional: show somewhere on screen
  //       alert("Data fetched! Check console.");
  //     } catch (err) {
  //       if (err instanceof Error) {
  //         setError(err.message);
  //       } else {
  //         setError('Failed to fetch matches');
  //       }
  //     }
      
  //   };
  
  //   fetchMatches();
  // }, []);
  
  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/featured-matches`);
        setMatches(response.data.matches);
        setLoading(false);
      } catch (err: unknown) { // Type 'err' as unknown
        let errorMessage = 'Failed to fetch matches'; // Default message
      
        // Type Guard: Check if 'err' is actually an Error object
        if (err instanceof Error) {
          errorMessage = err.message; // Safely access the message property
        }
        // Optional: Handle other types or string errors if necessary
        // else if (typeof err === 'string') {
        //   errorMessage = err;
        // }
      
        setError(errorMessage);
        setLoading(false);
      }
    };

    fetchMatches();
  }, []);
  if (loading) return <div className="text-center mt-10 text-blue-500">Loading featured matches...</div>;
  if (error) return <div className="text-center mt-10 text-red-500">Error: {error}</div>;

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-4 text-center">🏏 Featured Matches</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {matches.map((match) => (
          <div
            key={match.id}
            className="bg-white rounded-lg shadow-lg p-5 hover:shadow-xl transition-all duration-300 border border-gray-200"
          >
            <h3 className="text-xl font-semibold mb-2">{match.name}</h3>
            <div className="flex items-center justify-between">
            {match.teamInfo?.map((team, index) => (
            <div key={index} className="flex flex-col items-center">
                  <img src={team.img} alt={team.name} className="w-12 h-12 object-contain" />
                  <span className="text-sm mt-1">{team.shortname}</span>
                </div>
              ))}
            </div>
            <div className="mt-4 text-sm text-gray-600">
              <p><strong>Status:</strong> {match.status}</p>
              <p><strong>Date:</strong> {new Date(match.dateTimeGMT).toLocaleString()}</p>
              <p><strong>Venue:</strong> {match.venue || 'TBD'}</p>
              <p><strong>Match Type:</strong> {match.matchType.toUpperCase()}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedMatches;
