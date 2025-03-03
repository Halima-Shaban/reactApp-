import React, { useEffect, useState } from "react";
import "./Nav.css";
import "bootstrap/dist/css/bootstrap.css";
import logo from "../../assets/logo.png";
import menu_icon from "../../assets/menu-icon.png";
import { Link } from "react-scroll";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Nav() {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);

  const [handleMenu, sethandleMenu] = useState(false);

  const togglMenu = () => {
    handleMenu ? sethandleMenu(false) : sethandleMenu(true);
  };

  return (
    <nav
      className={`contain d-flex justify-content-between align-items-center    ${
        sticky ? "dark-nav" : ""
      }`}
    >
      <img className="logo" src={logo} alt="" />

      <ul className={handleMenu ? "" : "hide-mobile-menu"}>
        <li className=" d-inline-block list-unstyled">
          <Link to="hero" smooth={true} offset={0} duration={500}>
            Home
          </Link>
        </li>
        <li className=" d-inline-block list-unstyled">
          <Link to="programs" smooth={true} offset={-260} duration={500}>
            Program
          </Link>
        </li>
        <li className=" d-inline-block list-unstyled">
          <Link to="about" smooth={true} offset={-150} duration={500}>
            About
          </Link>
          us
        </li>
        <li className=" d-inline-block list-unstyled">
          <Link to="campus" smooth={true} offset={-260} duration={500}>
            Campus
          </Link>
        </li>
        <li className=" d-inline-block list-unstyled">
          <Link to="Testimonails" smooth={true} offset={-260} duration={500}>
            {" "}
            Testimonials
          </Link>
        </li>
        <li className=" d-inline-block list-unstyled  ">
          <Link
            className="btn"
            to=" Contact"
            smooth={true}
            offset={-260}
            duration={500}
          >
            Contact us
          </Link>
        </li>
      </ul>
      <img className="menu_icon" src={menu_icon} alt="" onClick={togglMenu} />
    </nav>
  );
}
