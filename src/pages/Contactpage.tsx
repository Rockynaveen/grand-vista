import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="amenities-hero d-flex align-items-center justify-content-center text-center text-white">
        <div className="container">
          <h1 className="fw-bold display-5">Contact</h1>
          <p className="lead mt-3 fw-semibold">Contact Us Today</p>

          <nav aria-label="breadcrumb" className="d-flex justify-content-center">
            <ol className="breadcrumb bg-transparent mb-0">
              <li className="breadcrumb-item">
                <Link to="/" className="hero-breadcrumb-link fw-bold">
                  Home
                </Link>
              </li>
              <li className="breadcrumb-item active text-white fw-bold">
                Contact
              </li>
            </ol>
          </nav>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-3" data-aos="fade-up">
            <h2 className="fw-bold" style={{ color: "#2d0a1f" }}>
              Contact <span className="text-warning">Grand Vista</span>
            </h2>
            <p className="text-muted">
              We’re here to help you plan your perfect stay
            </p>
          </div>

          <div className="row g-4 align-items-start">
            {/* Contact Info */}
            <div className="col-lg-4" data-aos="fade-right">
              <div className="bg-gradient-to-r p-4 p-md-5 rounded-4 h-100">
                <h5 className="fw-semibold mb-4">Contact Information</h5>

                <div className="mb-4 d-flex align-items-start gap-3">
                  <i className="fa-solid fa-location-dot fs-4 mt-1"></i>
                  <p className="mb-0">
                    Grand Vista Hotel,<br />
                    Beach Road, Goa, India
                  </p>
                </div>

                <div className="mb-4 d-flex align-items-start gap-3">
                  <i className="fa-solid fa-phone fs-4 mt-1"></i>
                  <p className="mb-0">+91 98765 43210</p>
                </div>

                <div className="mb-4 d-flex align-items-start gap-3">
                  <i className="fa-solid fa-envelope fs-4 mt-1"></i>
                  <p className="mb-0">contact@grandvista.com</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="col-lg-8" data-aos="fade-left">
              <div className="p-0 p-md-5 rounded-4 h-100">
                <form onSubmit={(e) => e.preventDefault()}>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control border-warning"
                          id="name"
                          placeholder="Your Name"
                          required
                        />
                        <label htmlFor="name">Your Name</label>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="email"
                          className="form-control border-warning"
                          id="email"
                          placeholder="Email Address"
                          required
                        />
                        <label htmlFor="email">Email Address</label>
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control border-warning"
                          id="subject"
                          placeholder="Subject"
                        />
                        <label htmlFor="subject">Subject</label>
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="form-floating">
                        <textarea
                          className="form-control border-warning"
                          id="message"
                          placeholder="Your Message"
                          style={{ height: "80px" }}
                        ></textarea>
                        <label htmlFor="message">Your Message</label>
                      </div>
                    </div>

                    <div className="col-12 text-end mt-3">
                      <button
                        type="submit"
                        className="btn btn-warning px-4 py-2 fw-semibold shadow-sm"
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section
        id="location"
        className="location-section py-5"
        style={{
          background: "linear-gradient(135deg, #fff5f0, #f8f0e3)",
        }}
      >
        <div className="container">
          <div className="text-center mb-4">
            <h2 className="fw-bold">Our Location</h2>
            <p className="text-muted">Find us easily</p>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-8 mb-4 mb-lg-0">
              <iframe
                title="Grand Vista Location"
                src="https://maps.google.com/maps?q=Grand%20Vista%20Hotel&t=&z=15&ie=UTF8&iwloc=&output=embed"
                loading="lazy"
                height="300"
                width="100%"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <div className="col-lg-4">
              <div className="location-info p-4 rounded-4 bg-light">
                <h4 className="fw-semibold mb-3">Grand Vista Hotel</h4>

                <p>
                  <i className="fa-solid fa-location-dot text-warning me-2"></i>
                  Goa, India
                </p>

                <p>
                  <i className="fa-solid fa-phone text-warning me-2"></i>
                  +91 98765 43210
                </p>

                <a
                  href="https://www.google.com/maps/search/Grand+Vista+Hotel"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-warning mt-3"
                >
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Contact;
