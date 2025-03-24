const TopPlayers = () => {
    return (
      <section className="py-8">
        <h2 className="text-center text-2xl font-bold">🏆 Top Players</h2>
        <div className="flex justify-center space-x-6 mt-4">
          <div className="bg-white p-4 shadow-lg rounded-lg text-center">
            <h3 className="font-bold">Virat Kohli</h3>
            <p className="text-sm">RCB - 540 Runs</p>
          </div>
          <div className="bg-white p-4 shadow-lg rounded-lg text-center">
            <h3 className="font-bold">MS Dhoni</h3>
            <p className="text-sm">CSK - 420 Runs</p>
          </div>
          <div className="bg-white p-4 shadow-lg rounded-lg text-center">
            <h3 className="font-bold">Rohit Sharma</h3>
            <p className="text-sm">MI - 510 Runs</p>
          </div>
        </div>
      </section>
    );
  };
  
  export default TopPlayers;
  