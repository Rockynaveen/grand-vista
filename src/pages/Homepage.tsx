import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Reviews from "../components/Testimonial";
import { rooms } from "./Roomdata";
import Offers from "../components/Offers";

const Homepage = () => {
  const amenities = [
    { icon: "fa-solid fa-wifi", title: "Free Wi-Fi", description: "High-speed internet in every room" },
    { icon: "fa-solid fa-utensils", title: "Restaurant", description: "Multi-cuisine dishes by expert chefs" },
    { icon: "fa-solid fa-dumbbell", title: "Fitness Center", description: "Modern gym and training facilities" },
    { icon: "fa-solid fa-spa", title: "Spa & Wellness", description: "Premium spa and wellness treatments" },
    { icon: "fa-solid fa-water-ladder", title: "Infinity Pool", description: "Scenic swims with breathtaking views" },
    { icon: "fa-solid fa-cocktail", title: "Bar & Lounge", description: "Premium drinks and cocktails" },
    { icon: "fa-solid fa-handshake-angle", title: "Conference Hall", description: "Modern halls for meetings/events" },
    { icon: "fa-solid fa-car", title: "Parking", description: "Safe and spacious parking" },
  ];

  const offersData = [
    {
      image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb",
      title: "Weekend Getaway",
      description: "Enjoy a relaxing weekend with complimentary breakfast",
    },
    {
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
      title: "Romantic Escape",
      description: "Perfect stay for couples with candlelight dinner",
    },
    {
      image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
      title: "Family Special",
      description: "Spacious rooms and fun activities for families",
    },
  ];

  return (
    <div>
      <Header />
      <div id="carouselExample" className="carousel slide hero-carousel" data-bs-ride="carousel">

        <div className="carousel-inner">

          <div className="carousel-item active">
            <img src="bg.webp" className="d-block w-100" alt="Luxury Hotel"/>


              <div className="carousel-caption d-flex align-items-center justify-content-center text-center">
                <div>
                  <h1 className="fw-bold head1 text-warning">Luxury Redefined</h1>
                  <p className="fw-bold fs-5">
                    Experience elegance, comfort, and world-className hospitality at Grand Vista
                  </p>
                  <a href="#rooms" className="btn btn-warning fw-semibold">Explore Rooms</a>
                </div>
              </div>
          </div>

          <div className="carousel-item">
            <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945" className="d-block w-100"
              alt="Hotel Interior"/>

              <div className="carousel-caption d-flex align-items-center justify-content-center text-center">
                <div>
                  <h1 className="fw-bold head1 text-warning">Stay in Style</h1>
                  <p className="fw-bold fs-5">
                    Enjoy modern amenities and sophisticated interiors for a perfect stay</p>
                  <a href="#rooms" className="btn btn-warning fw-semibold">Explore Rooms</a>
                </div>
              </div>
          </div>

          <div className="carousel-item">
            <img src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b" className="d-block w-100" alt="Resort View"/>

              <div className="carousel-caption d-flex align-items-center justify-content-center text-center">
                <div>
                  <h1 className="fw-bold head1 text-warning">Relax & Rejuvenate</h1>
                  <p className="fw-bold fs-5">
                    Reconnect with nature and unwind in our luxurious resort surroundings
                  </p>
                  <a href="#rooms" className="btn btn-warning fw-semibold">Explore Rooms</a>
                </div>
              </div>
          </div>

        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </button>

        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
        </button>

      </div>

      {/* /////////////////// */}
      <section className="py-5  my-5 bg-white">
        <div className="container">
          <div className="row align-items-center g-4">

            <div className="col-lg-6" data-aos="fade-right" data-aos-duration="1000">
              <div className="mb-2" data-aos="fade-right" data-aos-delay="100">
                <span className="text-warning fw-semibold">★★★★★</span>
                <small className="text-muted ms-2">5★ Rated by 1,24,000+ Guests</small>
              </div>

              <h1 className="fw-bold display-5 mb-3 text-success" data-aos="fade-up" data-aos-delay="200">
                Discover the <span className="text-warning">perfect stay</span> with us.
              </h1>

              <p className="text-muted mb-4" data-aos="fade-up" data-aos-delay="300">
                From luxury resorts to modern city hotels, we curate stays that turn
                every trip into a comfortable and memorable experience. Whether it’s
                a relaxing getaway or a business visit, we take care of every detail.
              </p>

              <ul className="list-unstyled text-black fs-6">
                <li className="mb-2" data-aos="fade-up" data-aos-delay="400">✅ Premium Hotels & Exclusive Deals</li>
                <li className="mb-2" data-aos="fade-up" data-aos-delay="500">✅ Handpicked Rooms for Every Budget</li>
                <li className="mb-2" data-aos="fade-up" data-aos-delay="600">✅ 24/7 Guest Support During Your Stay</li>
                <li className="mb-2" data-aos="fade-up" data-aos-delay="600">✅ Free High-Speed Wi-Fi in All Rooms</li>
                <li className="mb-2" data-aos="fade-up" data-aos-delay="600">✅ Hygienic Rooms with Daily Housekeeping
                </li>
                <li className="mb-2" data-aos="fade-up" data-aos-delay="600">✅ Flexible Check-in & Check-out Options
                </li>



              </ul>
            </div>
            <div className="col-lg-6">
              <div className="row g-3">
                <div className="col-7">
                  <img src="h.webp" loading="lazy" className="img-fluid rounded h-100 object-fit-cover room-img"
                    alt="Luxury Hotel" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="100" />
                </div>
                <div className="col-5">
                  <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945"
                    className="img-fluid rounded mb-3 room-img" loading="lazy" alt="Hotel Room" data-aos="zoom-in"
                    data-aos-duration="1000" data-aos-delay="200" />
                  <img src="https://images.unsplash.com/photo-1505691938895-1758d7feb511" className="img-fluid rounded room-img"
                    alt="Resort View" loading="lazy" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="300" />
                  <img src="hammocks-umbrellas-placed-near-pool.webp" className="img-fluid rounded mt-3 room-img"
                    alt="Resort View" loading="lazy" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="400" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>



      {/* Rooms Section */}
      <section id="rooms" className="py-5 bg-light">
        <div className="container text-center">
          <h2 className="fw-bold mb-4 mt-3">OUR ROOMS</h2>

          <div className="row g-4 justify-content-center">
            {rooms.map((room) => (
              <div key={room.slug} className="col-md-4">
                <Link
                  to={`/rooms/${room.slug}`}
                  className="text-decoration-none text-dark"
                >
                  <div className="room-card my-4">
                    <img
                      src={room.heroImage}
                      alt={room.name}
                      className="room-img-fixed img-fluid"
                    />

                    <h5 className="mt-3">{room.name}</h5>
                    <p className="text-muted">{room.description}</p>
                    <p className="fw-semibold">{room.price}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="py-5 bg-white">
        <div className="container">
          <h2 className="text-center fw-bold">AMENITIES</h2>
          <div className="row g-4 mt-3">
            {amenities.map((item, index) => (
              <div key={index} className="col-lg-3 col-md-4 col-sm-6">
                <div className="amenity-card">
                  <div className="amenity-inner">
                    <div className="amenity-front">
                      <i className={`${item.icon} fa-2x mb-3`}></i>
                      <h6>{item.title}</h6>
                    </div>
                    <div className="amenity-back">
                      <h4>{item.title}</h4>
                      <p>{item.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-5 bg-light">
        <div className="container">

          <h2 className="fw-bold text-dark text-center mb-4">
            OFFERS
          </h2>

          <div className="row g-4">
            {offersData.map((item, index) => (
              <div key={index} className="col-md-4">
                <div className="offer-card h-100">

                  <img src={item.image} className="img-fluid" alt={item.title} />

                  <div className="p-4">
                    <h5 className="fw-bold">{item.title}</h5>
                    <p className="text-muted">{item.description}</p>
                    <a
                      href="booking.html"
                      className="btn btn-warning fw-semibold w-100"
                    >
                      Book Now
                    </a>
                  </div>

                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
      <Reviews />
      <section id="contact" className="py-5  bg-light">
        <div className="container ">

          <div className="text-center mb-3" data-aos="fade-up">
            <h2 className="fw-bold" style={{ color: "#2d0a1f" }}>
              Contact <span className="text-warning">Grand Vista</span>
            </h2>
            <p className="text-muted">
              We’re here to help you plan your perfect stay
            </p>
          </div>

          <div className="row g-4 align-items-start">

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

                <div className="d-flex gap-3 mt-3">
                  <a
                    href="#"
                    className="text-white bg-dark rounded-circle d-flex align-items-center justify-content-center p-3 shadow-sm hover-scale"
                  >
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>

                  <a
                    href="#"
                    className="text-white bg-dark rounded-circle d-flex align-items-center justify-content-center p-3 shadow-sm hover-scale"
                  >
                    <i className="fa-brands fa-instagram"></i>
                  </a>

                  <a
                    href="#"
                    className="text-white bg-dark rounded-circle d-flex align-items-center justify-content-center p-3 shadow-sm hover-scale"
                  >
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                </div>

              </div>
            </div>

            <div className="col-lg-8" data-aos="fade-left">
              <div className="p-0 p-md-5 rounded-4 h-100">

                <form>
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
                        <label htmlFor="name" style={{ color: "#2d0a1f" }}>
                          Your Name
                        </label>
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
                        <label htmlFor="email" style={{ color: "#2d0a1f" }}>
                          Email Address
                        </label>
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
                        <label htmlFor="subject" style={{ color: "#2d0a1f" }}>
                          Subject
                        </label>
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
                        <label htmlFor="message" style={{ color: "#2d0a1f" }}>
                          Your Message
                        </label>
                      </div>
                    </div>

                    <div className="col-12 text-end mt-3">
                      <button
                        className="btn btn-warning px-4 py-2 fw-semibold shadow-sm"
                        type="submit"
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


      <Footer />
    </div>
  );
};

export default Homepage;
