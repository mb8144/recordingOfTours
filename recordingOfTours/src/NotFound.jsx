import { Link } from "react-router-dom";

const NotFound = () => {
  return ( 
    <div className="not-found">
      <h2>ERROR 404</h2>
      <h4>This page can not be found</h4>
      <Link to="/">Return to homepage</Link>
    </div>
   );
}
 
export default NotFound;