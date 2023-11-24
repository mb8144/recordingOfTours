import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className='nav-top-left'>Tour Record</Link>
      <div className="links">
        <Link to="/tours">My Tours</Link>
        <Link to="/create" style={{ 
          color: 'white', 
          backgroundColor: '#6A18B9',
          borderRadius: '8px' 
        }}>New Tour</Link>
      </div>
    </nav>
  );
}
 
export default Navbar;