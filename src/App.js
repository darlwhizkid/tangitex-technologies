import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import $ from "jquery";
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
  useEffect(() => {
    const wow = new WOW();
    wow.init();

    const handleScroll = () => {
      if ($(window).scrollTop() > 45) {
        $(".navbar").addClass("sticky-top shadow-sm");
      } else {
        $(".navbar").removeClass("sticky-top shadow-sm");
      }
    };

    $(window).on("scroll", handleScroll);

    return () => {
      $(window).off("scroll", handleScroll);
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
}
export default App;