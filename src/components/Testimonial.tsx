const reviewsData = [
  {
    name: "Rahul Verma",
    city: "Bengaluru",
    text:
      "An unforgettable stay! The rooms were spotless, staff was friendly, and the atmosphere was truly luxurious.",
    rating: 5,
  },
  {
    name: "Ananya Singh",
    city: "Delhi",
    text:
      "Grand Vista exceeded our expectations. Amazing food, beautiful interiors, and excellent service.",
    rating: 5,
  },
  {
    name: "Suresh Kumar",
    city: "Chennai",
    text:
      "Perfect location with world-class hospitality. Highly recommended for families and couples.",
    rating: 5,
  },
];

const Reviews = () => {
  return (
    <section id="reviews" className="py-5 bg-dark text-light">
      <div className="container text-center py-5">

        <h2 className="fw-bold mb-4" data-aos="fade-up">
          What Our Guests Say
        </h2>

        <div
          id="reviewCarousel"
          className="carousel slide"
          data-bs-ride="carousel"
          data-bs-interval="4000"
          data-aos="fade-up"
        >
          <div className="carousel-inner">

            {reviewsData.map((review, index) => (
              <div
                key={index}
                className={`carousel-item ${index === 0 ? "active" : ""}`}
              >
                <div className="mx-auto" style={{ maxWidth: "800px" }}>
                  <div className="text-warning fs-4 mb-3">
                    {"★".repeat(review.rating)}
                  </div>
                  <p className="fs-5">“{review.text}”</p>
                  <h6 className="fw-bold mt-3">{review.name}</h6>
                  <small className="text-muted">{review.city}</small>
                </div>
              </div>
            ))}

          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#reviewCarousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon"></span>
          </button>

          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#reviewCarousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon"></span>
          </button>

        </div>
      </div>
    </section>
  );
};

export default Reviews;
