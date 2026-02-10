import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div>
        <footer className="footer-section pt-5 pb-3">
    <div className="container">

      <div className="row gy-4">

        <div className="col-lg-3">
          <img src="/Screenshot_2026-01-28_155050-removebg-preview.png" height="70" width="160"/>
          <p className="footer-text mt-3">
            Experience luxury, comfort, and unforgettable hospitality.
            Grand Vista is your perfect destination for premium stays.
          </p>
        </div>

        <div className="col-lg-3 col-md-4">
          <h6 className="footer-title">Quick Links</h6>
          <ul className="list-unstyled footer-links">
            <li>
              <NavLink className="nav-link" to="/rooms">Rooms</NavLink>
            </li>
            <li>
              <NavLink className="nav-link" to="/amenities">Amenities</NavLink>
            </li>
            <li>
              <NavLink className="nav-link" to="/reviews">Experience</NavLink>
            </li>
            <li>
              <NavLink className="nav-link" to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>

        <div className="col-lg-3 col-md-4">
          <h6 className="footer-title">Our Services</h6>
          <ul className="list-unstyled footer-links">
            <li>
              <NavLink className="nav-link" to="/gallery">Luxury Rooms</NavLink>
            </li>
            <li>
              <NavLink className="nav-link" to="/amenities">Restaurant & Dining</NavLink>
            </li>
            <li>
              <NavLink className="nav-link" to="/amenities">Spa & Wellness</NavLink>
            </li>
            <li>
              <NavLink className="nav-link" to="/amenities">24/7 Room Services</NavLink>
            </li>
          </ul>
        </div>

        <div className="col-lg-3 col-md-4">
          <h6 className="footer-title">Contact</h6>
          <p className="footer-text mb-2">📍 Goa, India</p>
          <p className="footer-text mb-2">📞 +91 98765 43210</p>
          <p className="footer-text mb-3">✉ contact@grandvista.com</p>

          <div className="d-flex gap-3">
            <a href="#" className="footer-social"><i className="fa-brands fa-facebook-f"></i></a>
            <a href="#" className="footer-social"><i className="fa-brands fa-instagram"></i></a>
            <a href="#" className="footer-social"><i className="fa-brands fa-twitter"></i>
            </a>
          </div>
        </div>

      </div>

      <div className="footer-divider my-4">

      <div className="text-center footer-bottom">
        © 2026 <strong>Grand Vista</strong>. All Rights Reserved.
      </div>

    </div>
    </div>
  </footer>

      
    </div>
  )
}
export default Footer


