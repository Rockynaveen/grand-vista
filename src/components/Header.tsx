import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top navbar-custom">
      <div className="container">

        <Link className="navbar-brand fw-bold" to="/">
          <img src="/Screenshot_2026-01-28_155050-removebg-preview.png" height="70" width="160" alt="Hotel Logo" />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#nav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="nav">
          <ul className="navbar-nav mx-auto gap-3 text-center">
            <li className="nav-item"><NavLink className="nav-link" to="/">Home</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/rooms">Rooms</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/amenities">Amenities</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/gallery">Gallery</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/offers">Offers</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/contact">Contact</NavLink></li>
          </ul>

          <div className="text-center">
            <Link to="/booknow" className="btn btn-warning">
              Book Now
            </Link>

          </div>
        </div>

      </div>
    </nav>
  );
}

export default Header;
