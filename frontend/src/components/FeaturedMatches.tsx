const FeaturedMatches = () => {
    return (
      <section className="py-8 bg-gray-100">
        <h2 className="text-center text-2xl font-bold">🎯 Featured Matches</h2>
        <div className="flex justify-center space-x-6 mt-4">
          <div className="bg-white p-4 shadow-lg rounded-lg text-center">
            <h3 className="font-bold">MI vs CSK</h3>
            <p className="text-sm">Date: March 25, 2025</p>
            <button className="mt-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded">
              View Match
            </button>
          </div>
          <div className="bg-white p-4 shadow-lg rounded-lg text-center">
            <h3 className="font-bold">RCB vs KKR</h3>
            <p className="text-sm">Date: March 27, 2025</p>
            <button className="mt-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded">
              View Match
            </button>
          </div>
        </div>
      </section>
    );
  };
  
  export default FeaturedMatches;
  