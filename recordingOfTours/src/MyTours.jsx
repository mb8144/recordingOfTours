import TourList from "./TourList";
import useFetch from "./useFetch";

const Home = () => {
  const { error, isPending, data: tours } = useFetch('http://localhost:8000/tours')

  return (
    <div className="home">
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { tours && <TourList tours={tours} /> }
    </div>
  );
}
 
export default Home;