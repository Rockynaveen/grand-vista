import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Booknowpage = () => {
  const [guests, setGuests] = useState(1);

  const increaseGuests = () => {
    setGuests((prev) => prev + 1);
  };

  const decreaseGuests = () => {
    if (guests > 1) {
      setGuests((prev) => prev - 1);
    }
  };

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="gallery-hero d-flex align-items-center text-center">
        <div className="container text-white">
          <h1 className="fw-bold display-4 text-warning">Book Now</h1>
          <p className="fs-5">
            Book your stay with us and enjoy comfort, luxury, and unforgettable moments.
          </p>

          <nav aria-label="breadcrumb" className="mt-3">
            <ol className="breadcrumb justify-content-center">
              <li className="breadcrumb-item">
                <a href="/" className="hero-breadcrumb-link fw-bold">
                  Home
                </a>
              </li>
              <li className="breadcrumb-item active text-white fw-bold">
                Book Now
              </li>
            </ol>
          </nav>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="booking-card p-4 p-md-5 ">
                <h2 className="text-center fw-bold mb-4">Book Your Stay</h2>

                <form className="row g-3">

                  <div className="col-md-4">
                    <label className="form-label fw-semibold">Check-in</label>
                    <input type="date" className="form-control" required />
                  </div>

                  <div className="col-md-4">
                    <label className="form-label fw-semibold">Check-out</label>
                    <input type="date" className="form-control" required />
                  </div>

                  {/* Guests */}
                  <div className="col-md-4">
                    <label className="form-label fw-semibold">Guests</label>
                    <div className="d-flex align-items-center gap-3 mt-1">
                      <button
                        type="button"
                        className="btn btn-outline-secondary"
                        onClick={decreaseGuests}
                        disabled={guests === 1}
                      >
                        −
                      </button>

                      <span className="fw-bold fs-5">{guests}</span>

                      <button
                        type="button"
                        className="btn btn-outline-secondary"
                        onClick={increaseGuests}
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* Button */}
                  <div className="col-12 d-grid mt-4">
                    <button
                      type="button"
                      className="btn btn-warning fw-semibold py-2"
                      onClick={() =>
                        alert(`Checking availability for ${guests} guests`)
                      }
                    >
                      Check Availability
                    </button>
                  </div>

                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Booknowpage;
