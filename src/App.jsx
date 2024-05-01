import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import styles from "./App.module.css";
import WebFont from "webfontloader";
import Header from "./components/layouts/Header/Header";
import Home from "./components/route/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from "./components/route/About/AboutUs";
import ContactUs from "./components/route/Contact Us/ContactUs";
import Product from "./components/route/Product/Product";
import Error from "./components/route/Error/Error";
import Footer from "./components/layouts/Footer/Footer";
import Aos from "aos";

function App() {
  useEffect(() => {
    WebFont.load({
      google: { families: ["Roboto", "Droid Sans"] },
    });
  }, []);
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/about-us" element={<AboutUs />} />

          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/product" element={<Product />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
      {/* <Home /> */}
    </>
  );
}

export default App;
