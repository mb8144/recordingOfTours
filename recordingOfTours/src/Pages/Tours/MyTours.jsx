import TourList from "./TourList";
import useFetch from "../../Components/UseFetch";
import Filter from "./Filter";

const Home = () => {
  const { error, isPending, data: tours } = useFetch('http://localhost:8000/tours')

  return (
    <div>
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { tours && <Filter />}
      { tours && <TourList tours={tours} /> }
    </div>
  );
}
 
export default Home;