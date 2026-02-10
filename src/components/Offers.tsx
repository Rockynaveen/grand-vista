import  Header from "./Header"
import Footer from "./Footer";
const offersData = [
  { image:"https://images.unsplash.com/photo-1542314831-068cd1dbfeeb",
    title: "Weekend Getaway",
    description: "Enjoy a relaxing weekend with complimentary breakfast",
  },
  { image:"https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
    title: "Romantic Escape",
    description: "Perfect stay for couples with candlelight dinner",
  },
  { image:"https://images.unsplash.com/photo-1505691938895-1758d7feb511",
    title: "Family Special",
    description: "Spacious rooms and fun activities for families",
  },
];

const Offers = () => {
  return (
    <>
    <Header/>
     <section className="gallery-hero d-flex align-items-center text-center">
    <div className="container text-white">
      <h1 className="fw-bold display-4 text-warning">Special Offers</h1>
      <p className="fs-5">Exclusive deals crafted for unforgettable stays</p>

      <nav aria-label="breadcrumb" className="mt-3">
        <ol className="breadcrumb justify-content-center">
          <li className="breadcrumb-item">
            <a href="index.html" className="hero-breadcrumb-link fw-bold">Home</a>
          </li>
          <li className="breadcrumb-item active text-white fw-bold">Offers</li>
        </ol>
      </nav>

    </div>
  </section>

    <section className="py-5  bg-white">
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
    <Footer/>
    </>
  );
};

export default Offers;
