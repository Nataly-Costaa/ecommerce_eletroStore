import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2>
        <Link to={`/`}>EletroStore</Link>
      </h2>
      <ul>
        <li>
          <Link to={`/`}>Home</Link>
        </li>
        <li>
          <Link to={`/newProduct`} className="new-btn">
            Vender
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
