import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Tour Record</h1>
      <div className="links">
        <Link to="/">My Tours</Link>
        <Link to="/create" style={{ 
          color: 'white', 
          backgroundColor: '#1a18b9',
          borderRadius: '8px' 
        }}>New Tour</Link>
      </div>
    </nav>
  );
}
 
export default Navbar;