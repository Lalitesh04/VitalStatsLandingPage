import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import NavBar from "./Compoments/Header/NavBar.js";
import Footer from "./Compoments/Footer/Footer.js";
import Home from "./Compoments/Hero/Home.js";
import Features from "./Compoments/Features/Features.js";
import Teams from "./Compoments/Teams/Teams.js";
import Download from "./Compoments/Download/Download.js";
import Contact from "./Compoments/Contact/Contact.js";

function App() {
  useEffect(() => {
    AOS.init({
      offset: 200,
      delay: 300,
      duration: 1200,
      easing: 'ease',
    });
  }, []); // Empty dependency array ensures this runs once on mount

  return (
    <div className="bg-color-primary text-white overflow-x-hidden">
      <NavBar/>
      <Home />
      <Features />
      <Teams /> 
      <Download />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
