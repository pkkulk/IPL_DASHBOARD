// components/Teams.tsx
import Link from "next/link";

const Team = () => {
  return (
    <section className="py-6 bg-gray-100">
      <h2 className="text-center text-2xl font-bold">🏏 IPL Teams</h2>
      <div className="flex justify-center space-x-6 mt-4">
        <Link href="/teams" className="font-semibold hover:text-blue-500">Mumbai Indians</Link>
        <Link href="/teams" className="font-semibold hover:text-blue-500">Chennai Super Kings</Link>
        <Link href="/teams" className="font-semibold hover:text-blue-500">RCB</Link>
        <Link href="/teams" className="font-semibold hover:text-blue-500">KKR</Link>
      </div>
    </section>
  );
};

export default Team;
