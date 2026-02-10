import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Homepage from "./pages/Homepage";
import RoomsPage from "./pages/Roomspage";
import RoomDetailsPage from "./pages/Roomdetailspage";
import AmenitiesPage from "./pages/Amenitiespage";
import Gallery from "./pages/Gallerypage";
import Offers from "./components/Offers";
import Contact from "./pages/Contactpage";
import BookNowPage from "./pages/Booknowpage";

import "./vista.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/rooms" element={<RoomsPage />} />
        <Route path="/amenities" element={<AmenitiesPage />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/booknow" element={<BookNowPage />} />

        <Route path="/rooms/:slug" element={<RoomDetailsPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
