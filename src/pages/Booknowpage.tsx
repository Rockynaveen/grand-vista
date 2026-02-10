import Header from "../components/Header"
import Footer from "../components/Footer"
const Booknowpage = () => {
    return (
        <div>
            <Header />
            <section className="gallery-hero d-flex align-items-center text-center">
                <div className="container text-white">
                    <h1 className="fw-bold display-4 text-warning">Book Now</h1>
                    <p className="fs-5">Book your stay with us and enjoy comfort, luxury, and unforgettable moments.</p>

                    <nav aria-label="breadcrumb" className="mt-3">
                        <ol className="breadcrumb justify-content-center">
                            <li className="breadcrumb-item">
                                <a href="index.html" className="hero-breadcrumb-link fw-bold">Home</a>
                            </li>
                            <li className="breadcrumb-item active text-white fw-bold">Book Now</li>
                        </ol>
                    </nav>

                </div>
            </section>

            <div className="row justify-content-center">
                <div className="col-lg-8">

                    <div className="booking-card  p-4 p-md-5">
                        <h2 className="text-center fw-bold mb-4">Book Your Stay</h2>

                        <form id="bookingForm" className="row g-3">

                            <div className="col-md-4">
                                <label>Check-in</label>
                                <input type="date" id="checkin" className="form-control" required />
                            </div>

                            <div className="col-md-4">
                                <label>Check-out</label>
                                <input type="date" id="checkout" className="form-control" required />
                            </div>

                            <div className="col-md-4">
                                <label>Guests</label>
                                <select id="guests" className="form-select" required>
                                    <option value="">Select</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4+</option>
                                </select>
                            </div>

                            <div className="col-12 d-grid mt-3">
                                <button
                                    type="button"
                                    className="btn btn-warning fw-semibold py-2"
                                >
                                    Check Availability
                                </button>

                            </div>

                        </form>
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Booknowpage



