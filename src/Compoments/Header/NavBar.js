import React, { useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Navbar() {
  useEffect(() => {
    // Navbar background color change on scroll
    const handleScroll = () => {
      const navbar = document.querySelector("header");
      const sections = document.querySelectorAll("section");
      const navLinks = document.querySelectorAll("nav ul li a");

      if (navbar) {
        if (window.scrollY > 100) {
          navbar.classList.add("bg-color-primary-dark", "border-b", "border-color-gray");
        } else {
          navbar.classList.remove("bg-color-primary-dark", "border-b", "border-color-gray");
        }

        // Update active link
        let current = "home";
        sections.forEach((section) => {
          const sectionTop = section.offsetTop;
          if (window.pageYOffset >= sectionTop - 60) {
            current = section.getAttribute("id");
          }
        });

        navLinks.forEach((item) => {
          item.classList.remove("text-color-secondary");
          if (item.href.includes(current)) {
            item.classList.add("text-color-secondary");
          }
        });
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array means this effect runs once after the initial render

  // Mobile menu toggle logic
  const handleMenuToggle = () => {
    const menu = document.querySelector("#menu");
    const faSolid = document.querySelector(".fa-solid");

    if (menu && faSolid) {
      menu.classList.toggle("hidden");
      faSolid.classList.toggle("fa-xmark");
    }
  };

  // Function to handle login button click
  const handleLoginClick = () => {
    toast.info('Login feature will be updated soon!', {
      position: "top-center",
      autoClose: 3000, // Close the toast after 3 seconds
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <div>
      <ToastContainer />
      <header className="fixed w-full top-0 z-50">
        <nav className="container flex justify-between items-center">
          <div className="py-5 text-color-secondary font-bold text-3xl">
            <a href="/">
              <span className="text-color-white">Vital </span>
              <span className="text-color-secondary">Stats.</span>
            </a>
          </div>
          <div>
            <ul className="hidden lg:flex items-center space-x-6">
              <li><a href="#home" className="hover:text-color-secondary ease-in duration-200">Home</a></li>
              <li><a href="#features" className="hover:text-color-secondary ease-in duration-200">Features</a></li>
              <li><a href="#team" className="hover:text-color-secondary ease-in duration-200">Our Team</a></li>
              <li><a href="#contact" className="hover:text-color-secondary ease-in duration-200">Contact</a></li>
              <li><button onClick={handleLoginClick} className="bg-color-secondary px-9 py-3 rounded-lg capitalize font-bold hover:opacity-80 ease-in duration-200 ">Login</button></li>
            </ul>
          </div>
          <div id="hamburger" className="lg:hidden cursor-pointer z-50" onClick={handleMenuToggle}>
            <i className="fa-solid fa-bars"></i>
          </div>

          <div id="menu" className="hidden absolute inset-0 m-10 justify-center items-center">
            <ul className="space-y-4 bg-slate-600 rounded-lg p-4">
              <li><a href="#home" className="block py-2 px-4 hover:text-color-secondary transition duration-200 ease-in">Home</a></li>
              <li><a href="#features" className="block py-2 px-4 hover:text-color-secondary transition duration-200 ease-in">Features</a></li>
              <li><a href="#team" className="block py-2 px-4 hover:text-color-secondary transition duration-200 ease-in">Our Team</a></li>
              <li><a href="#contact" className="block py-2 px-4 hover:text-color-secondary transition duration-200 ease-in">Contact</a></li>
              <li><button onClick={handleLoginClick} className="block py-2 px-4 hover:text-color-secondary transition duration-200 ease-in">Login</button></li>

            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
