// app/stats/page.tsx (if using App Router)
import StatsDashboard from "@/components/StatsDashboard";

export default function StatsPage() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-center">📊 IPL Stats & Analytics</h1>
      <StatsDashboard />
    </div>
  );
}
