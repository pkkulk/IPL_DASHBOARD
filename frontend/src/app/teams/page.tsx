// pages/teams.tsx
const TeamsPage = () => {
  const teams = [
    { name: "Mumbai Indians", logo: "/mi.png" },
    { name: "Chennai Super Kings", logo: "/csk.png" },
    { name: "Royal Challengers Bangalore", logo: "/rcb.png" },
    { name: "Kolkata Knight Riders", logo: "/kkr.png" },
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center">All IPL Teams</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6">
        {teams.map((team, index) => (
          <div key={index} className="border p-4 rounded-lg text-center">
            <img src={team.logo} alt={team.name} className="h-20 mx-auto" />
            <h2 className="mt-2 font-semibold">{team.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamsPage;
