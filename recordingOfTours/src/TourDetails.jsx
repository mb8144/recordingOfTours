import { useParams } from "react-router";
import useFetch from "./useFetch";

const TourDetails = () => {
  const {id} = useParams();
  const { data: tour, error, isPending} = useFetch('http://localhost:8000/tours/' + id)
  return ( 
    <div className="blog-details">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {tour && (
        <article>
          <h2>{tour.title}</h2>
          <p>Region: {tour.region}</p>
          <div>{tour.body}</div>
        </article>
      )}
    </div>
   );
}
 
export default TourDetails;