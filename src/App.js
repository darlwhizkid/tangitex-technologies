import React, { useEffect, useRef } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import WOW from "wow.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./css/style.css";

import Spinner from "./components/sections/Spinner";
import Topbar from "./components/layout/Topbar";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import Facts from "./components/sections/Facts";
import About from "./components/sections/About";
import Features from "./components/sections/Features";
import Services from "./components/sections/Services";
import Quote from "./components/sections/Quote";
import Testimonial from "./components/sections/Testimonial";
import Footer from "./components/layout/Footer";
import ScrollToTop from "./components/layout/ScrollToTop";
import AboutPage from "./components/pages/AboutPage";
import ServicesPage from "./components/pages/ServicesPage";
import ContactPage from "./components/pages/ContactPage";

function App() {
  const wowRef = useRef(null);

  useEffect(() => {
    const wow = new WOW({
      boxClass: 'wow',
      animateClass: 'animated',
      offset: 50,
      mobile: true,
      live: true,
      callback: function(box) {
        // Optional callback after each animation
      },
      scrollContainer: null
    });
    wow.init();

    return () => {
      // Cleanup if needed
    };
  }, []);

  return (
    <BrowserRouter>
      <Spinner />
      <Topbar />
      <Navbar />
      <ScrollToTop />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Facts />
              <About />
              <Features />
              <Services />
              <Quote />
              <Testimonial />
              <Footer />
            </>
          }
        />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/service" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}export default App;