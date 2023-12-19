import { Link } from 'react-router-dom'
import mountainLogo from '../assets/mountain-15481.svg'
const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={mountainLogo} alt="Mountain" style={{width:50}}/>
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