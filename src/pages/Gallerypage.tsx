import Footer from "../components/Footer";
import Header from "../components/Header";

const galleryImages = [
    {
        img: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb",

    },
    {
        img: "https://images.unsplash.com/photo-1608198399988-341f712c3711",

    },
    {
        img: "https://images.unsplash.com/photo-1568495248636-6432b97bd949",
    },

    {
        img: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        img: "https://images.unsplash.com/photo-1595576508898-0ad5c879a061?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        img: "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
    },
];

const Gallery = () => {
    return (
        <>
            <Header />
            <section className="amenities-hero d-flex align-items-center justify-content-center text-center text-white ">
                <div className="container py-5">
                    <h1 className="fw-bold display-5">Gallery</h1>
                    <p className="lead mt-3 fw-semibold">
                        Explore our luxury spaces & experiences
                    </p>

                    <nav aria-label="breadcrumb" className="d-flex justify-content-center">
                        <ol className="breadcrumb bg-transparent mb-0">
                            <li className="breadcrumb-item">
                                <a href="index.html" className="hero-breadcrumb-link fw-bold">Home</a>
                            </li>
                            <li className="breadcrumb-item active text-white fw-bold">Gallery</li>
                        </ol>
                    </nav>

                </div>
            </section>

            <div className="container py-5 ">
                <h2 className="fw-bold text-center ">GALLERY</h2>
                <div className="row  mt-3">
                    {galleryImages.map((item, index) => (
                        <div key={index} className="col-md-4 text-center mb-4">
                            <img
                                src={item.img}
                                className="img-fluid rounded"
                                alt="Gallery"
                            />
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Gallery;
