// components/StatsDashboard.tsx
"use client"; // Add this only if using App Router
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { team: "CSK", wins: 5, finals: 9 },
  { team: "MI", wins: 5, finals: 6 },
  { team: "KKR", wins: 2, finals: 3 },
  { team: "RCB", wins: 0, finals: 3 },
];

export default function StatsDashboard() {
  return (
    <div className="mt-6">
      {/* Team Performance Chart */}
      <h2 className="text-2xl font-bold text-center">🏆 Team Performance Over the Years</h2>
      <div className="flex justify-center">
        <ResponsiveContainer width="80%" height={400}>
          <BarChart data={data}>
            <XAxis dataKey="team" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="wins" fill="#8884d8" name="Championship Wins" />
            <Bar dataKey="finals" fill="#82ca9d" name="Final Appearances" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
