
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <NavLink to="/" className="nav-logo">📚 Online Library</NavLink>
      </div>
      <div className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/books/Fiction">Browse Books</NavLink>
        <NavLink to="/add-book">Add Book</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
