const LatestAddedTour = () => {
  return ( 
    <>
      <div className="text-xl font-bold mb-2">Latest Added Tour</div>
      <div className="flex justify-between pr-6">
        <div>02-02-2023</div>
        <div>Wallis</div>
      </div>
      <div>
        Matterhorn
      </div>
      <button className="bg-lime-400 hover:bg-lime-500 text-blue-800 font-bold py-3 px-6 rounded-full focus:outline-none focus:shadow-outline transition duration-300 ease-in-out float-right">Show Details</button>
    </>
   );
}
 
export default LatestAddedTour;