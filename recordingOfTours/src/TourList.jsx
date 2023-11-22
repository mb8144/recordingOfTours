import { Link } from "react-router-dom";

const TourList = ({ tours }) => {
  return (
    <div className="blog-list">
      <h2>All Tours!</h2>
      {tours.map(tour => (
        <div className="blog-preview" key={tour.id}>
          <Link to={`/tours/${tour.id}`}>
            <h2>{ tour.title }</h2>
            <p>Region: { tour.region }</p>
          </Link>
        </div>
      ))}
    </div>
  );
}
 
export default TourList;