import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { rooms } from "./Roomdata";

const RoomsPage = () => {
  return (
    <>
      <Header />
      <section className="rooms-hero d-flex align-items-center">
    <div className="container text-center text-white">
      <h1 className="fw-bold  text-warning display-5">Our Rooms</h1>
      <p className="lead mb-3 fw-semibold">
        Discover luxury, comfort & breathtaking stays
      </p>

      <nav aria-label="breadcrumb" className="d-flex justify-content-center">
        <ol className="breadcrumb bg-transparent mb-0">
          <li className="breadcrumb-item">
            <a href="index.html" className="hero-breadcrumb-link fw-bold">Home</a>
          </li>
          <li className="breadcrumb-item active text-white fw-bold" aria-current="page">
            Rooms
          </li>
        </ol>
      </nav>
    </div>
  </section>


      <section className="py-5 bg-light">
        <div className="container text-center">
          <h2 className="fw-bold mb-4">OUR ROOMS</h2>

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

                    <p className="text-muted">
                      {room.description}
                    </p>

                    <p className="fw-semibold">{room.price}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default RoomsPage;
