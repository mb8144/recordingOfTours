import { Link } from "react-router-dom";

const TourList = ({ tours }) => {
  return (
    <div className="tour-list">
      <h2>All Tours!</h2>
      {tours.map(tour => (
        <div className="tour-preview" key={tour.id}>
          <Link to={`/tours/${tour.id}`}>
            <div className="first-line">
              <h2>{ tour.title }</h2>
              <p className="tour-date">{ tour.date }</p>
            </div>
            <p>Region: { tour.region }</p>
          </Link>
        </div>
      ))}
    </div>
  );
}
 
export default TourList;