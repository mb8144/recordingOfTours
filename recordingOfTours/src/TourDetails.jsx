import { useParams } from "react-router";
import useFetch from "./useFetch";
import { Navigate, useNavigate } from "react-router-dom";

const TourDetails = () => {
  const {id} = useParams();
  const { data: tour, error, isPending} = useFetch('http://localhost:8000/tours/' + id)
  const navigate = useNavigate();
  const handleClick = () => {
    fetch('http://localhost:8000/tours/' + tour.id, {
      method: 'DELETE',
    }).then(() => {
      navigate('/');
    })
  }
  return ( 
    <div className="tour-details">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {tour && (
        <article>
          <h2>{tour.title}</h2>
          <p>Region: {tour.region}</p>
          <div>{tour.body}</div>
          <button onClick={handleClick}>Delete Tour</button>
        </article>
      )}
    </div>
   );
}
 
export default TourDetails;