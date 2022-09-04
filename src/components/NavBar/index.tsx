import "bootstrap/js/src/collapse.js";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./style.css";

const NavBar = () => {
  return (
    <nav className="bg-primary nav-container navbar navbar-expand-md navbar-light fixed-top">
      <Link to="/">
        <h1>Carros Top</h1>
      </Link>

      <button
        className="navbar-toggler bg-primary"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#carrostop-navbar"
        aria-controls="carrostop-navbar"
        aria-expanded="true"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="carrostop-navbar">
        <ul className="nav-menu-container nav-menu navbar-nav">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/cars">Catálogo</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
