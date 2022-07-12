import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>CR car rental</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/fleet">Fleet</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </nav>
      );
}
 //sfc
export default Navbar;