// app/players/page.tsx (if using App Router)
import PlayerList from "@/components/PlayerList"; 

export default function PlayersPage() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-center">🏏 IPL Players</h1>
      <PlayerList />
    </div>
  );
}
