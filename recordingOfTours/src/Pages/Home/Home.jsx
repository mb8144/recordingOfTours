import '../../home.css'
import EXJS from './EXJS';
import LatestAddedTour from './LatestAddedTour';
import LoremList from './LoremList';
const Home = () => {
  return ( 
    <>
    {/* <div className="animated-element"></div> */}    
    <div className="container-lg bg-blue-900 rounded-lg p-4 shadow-md">
      <p className="text-gray-200 text-3xl font-semibold mb-4">
        Do you ever think about your mountain adventures and need a way to track and share them? TourRecord has you covered!
      </p>
      <p className="text-gray-200 text-lg">
        Whether it's finding inspiration for your next journey, recommending trails to friends, or documenting for a course or expedition, TourRecord is the perfect tool.
      </p>
    </div>
    <div className="grid grid-cols-5 grid-rows-3 gap-4 mt-3">
      <div className="col-span-2 row-span-3 p-2 text-gray-300 bg-violet-800 rounded shadow-md"><LoremList /></div>
      <div className="col-span-3 row-span-2 p-2 text-gray-300 bg-lime-400 rounded shadow-md"><LatestAddedTour /></div>
    </div>




    <EXJS />
    </>
    
   );
}
 
export default Home;