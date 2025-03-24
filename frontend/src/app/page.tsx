
import Hero from "@/components/Hero"
import TopPlayers from "@/components/TopPlayers"
import FeaturMatches from "@/components/FeaturedMatches"
import Team from "@/components/Team"
export default function Home() {
  return (
    <div className="text-center">
     <Hero/>
    <Team/>
<FeaturMatches/>
<TopPlayers/>
    </div>

  );
}
