import Header from "../components/Header"
import Footer from "../components/Footer";
const amenities = [
  {
    icon: "fa-solid fa-wifi",
    title: "Free Wi-Fi",
    description: "High-speed internet in every room"

  },
  {
    icon: "fa-solid fa-utensils ",
    title: "Restaurant",
    description: "Savor multi-cuisine dishes prepared by our expert chefs."
  },
  {
    icon: "fa-solid fa-dumbbell ",
    title: "Fitness Center",
    description: "Stay active with modern gym equipment and training facilities."
  },
  {
    icon: "fa-solid fa-spa",
    title: "Spa & Wellness",
    description: "Relax and rejuvenate with premium spa and wellness treatments."
  },
  {
    icon: "fa-solid fa-water-ladder",
    title: "Infinity Pool",
    description: " Enjoy scenic swims with breathtaking views from our pool."
  },
  {
    icon: "fa-solid fa-cocktail",
    title: "Bar & Lounge",
    description: "Unwind with premium drinks and cocktails in a cozy ambiance."
  },
  {

    icon: "fa-solid fa-handshake-angle",
    title: "Conference Hall",
    description: "Host meetings and events in our modern conference halls."
  },
  {
    icon: "fa-solid fa-car",
    title: "Parking",
    description: "Safe and spacious parking available for all guests.."
  },
];
function Amenitiespage() {
  return (
    <>
      <Header />
      <section className="amenities-hero d-flex align-items-center justify-content-center text-center text-white">
        <div className="container">
            <h1 className="fw-bold display-5">Our Premium Amenities</h1>
            <p className="lead mt-3 fw-semibold">
                Crafted for comfort,designed for luxury,
                perfected for you
            </p>
            <nav aria-label="breadcrumb" className="d-flex justify-content-center">
                <ol className="breadcrumb bg-transparent mb-0">
                    <li className="breadcrumb-item">
                        <a href="index.html" className="hero-breadcrumb-link fw-bold">Home</a>
                    </li>
                    <li className="breadcrumb-item active text-white fw-bold" aria-current="page">
                        Amenities
                    </li>
                </ol>
            </nav>
        </div>
    </section>

      <section className="py-5  bg-light">
        <div className="container" >
          <h2 className="text-center   fw-bold">AMENITIES</h2>
          <div className="row g-4 mt-3">
            {amenities.map((item, index) => (
              <div key={index} className="col-lg-3 col-md-4 col-sm-6">
                <div className="amenity-card">
                  <div className="amenity-inner">
                    <div className="amenity-front">
                      <i className={item.icon + " fa-2x mb-3"}></i>
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
      <Footer />
    </>
  );
}
export default Amenitiespage

