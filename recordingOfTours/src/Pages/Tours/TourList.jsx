import { Link } from "react-router-dom";

const TourList = ({ tours }) => {
  return (
    <div>
      <h3>Here are all your Tours!</h3>
      {tours.map(tour => (
        <div className="card-tour-preview">
          <Link to={`/tours/${tour.id}`}>
            <div className="card">
              <div className="card-header">
                {tour.date}
              </div>
              <div className="card-body">
                <h5 className="card-title">{tour.title}</h5>
                <p className="card-text">{tour.region}</p>
              </div>
            </div>
          </Link>
        </div>
      ))}
      <nav aria-label="Page navigation example">
        <ul class="pagination justify-content-center">
        {/* Deleted href as no function yet to switch pages */}
          <li class="page-item"><a class="page-link">Previous</a></li>
          <li class="page-item"><a class="page-link">1</a></li>
          <li class="page-item"><a class="page-link">2</a></li>
          <li class="page-item"><a class="page-link">3</a></li>
          <li class="page-item"><a class="page-link">Next</a></li>
        </ul>
      </nav>
    </div>
  );
}
 
export default TourList;