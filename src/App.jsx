import React from "react";
import Nav from "./Componants/Navbar/Nav";
import Hero from "./Componants/Hero/Hero";
import Programs from "./Componants/Programs/Programs";
import Titel from "./Componants/Titel/Titel";
import About from "./Componants/About/About";
import Campus from "./Componants/Campus/Campus";
import Testimonails from "./Componants/Testimonails/Testimonails";
import Contact from "./Componants/Contact/Contact";
import Footer from "./Componants/Footer/Footer";

export default function App() {
  return (
    <div>
      <Nav />
      <Hero />
      <div className="container">
        <Titel subTitel="Our programs" titel="What We Offer" />
        <Programs />
        <About />
        <Titel subTitel="Gallary" titel="Campus Photos" />
        <Campus />
        <Titel subTitel="TESTIMONALS" titel="What Student Says" />
        <Testimonails />
        <Titel subTitel="Contact Us" titel="Get in Touch" />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
