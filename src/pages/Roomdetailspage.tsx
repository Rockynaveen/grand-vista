import { useParams } from "react-router-dom";
import { rooms } from "../pages/Roomdata";
import Header from "../components/Header";
import Footer from "../components/Footer";

const RoomDetails = () => {
  const { slug } = useParams();
  const room = rooms.find((r) => r.slug === slug);

  if (!room) {
    return <h2 className="text-center my-5">Room not found</h2>;
  }

  return (
    <>
      <Header />
      <section className="amenities-hero d-flex align-items-center justify-content-center text-center text-white ">
        <div className="container py-5">
          <h1 className="fw-bold display-5">Our Rooms</h1>
          <p className="lead mt-3 fw-semibold">
            Explore our luxury spaces & experiences
          </p>

          <nav aria-label="breadcrumb" className="d-flex justify-content-center">
            <ol className="breadcrumb bg-transparent mb-0">
              <li className="breadcrumb-item">
                <a href="index.html" className="hero-breadcrumb-link fw-bold">Home</a>
              </li>
              <li className="breadcrumb-item active text-white fw-bold">Rooms</li>
            </ol>
          </nav>

        </div>
      </section>

      {/* ROOM DETAILS */}
      <section className="room-details py-5 ">
        <div className="container ">
          <div className="row align-items-center g-4">
            <div className="col-md-6">
              <img
                src={room.heroImage}
                className="img-fluid rounded"
                alt={room.name}
              />
            </div>

            <div className="col-md-6">
              <h2 className="fw-bold">{room.name}</h2>
              <h4 className="text-warning">{room.price}</h4>

              {/* Highlights */}
              <div className="row my-3">
                {room.highlights.map((item, i) => (
                  <div className="col-6" key={i}>
                    <i className={`fa-solid ${item.icon} text-warning me-2`}></i>
                    {item.label}
                  </div>
                ))}
              </div>

              {/* Amenities */}
              <ul className="mt-3">
                {room.amenities.map((item, index) => (
                  <li key={index}>
                    <i className={`fa-solid ${item.icon} text-warning me-2`}></i>
                    {item.name}
                  </li>
                ))}
              </ul>

              <button className="btn btn-warning mt-3 px-4">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="gallery py-5 bg-light">
        <div className="container">
          <div className="row g-4">
            {room.gallery.map((img, index) => (
              <div className="col-md-4" key={index}>
                <img src={img} className="img-fluid rounded" />
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default RoomDetails;
