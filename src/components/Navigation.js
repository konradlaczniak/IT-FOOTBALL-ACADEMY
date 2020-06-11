import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

export const Navigation = () => {
  const [header, setHeader] = useState("header");

  const listenScrollEvent = (event) => {
    if (window.scrollY < 50) {
      return setHeader("");
    } else if (window.scrollY > 50) {
      return setHeader("header2");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);

    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);

  return (
    <nav className={`dark nav navbar navbar-expand-lg  ${header}`}>
      <a className="navbar-brand logo" href="/">
        IT FOOTBALL ACADEMY
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse main_list" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <NavLink to="/" exact active="true" className="activeLink">
              Home
            </NavLink>
          </li>
          <li className="nav-item active">
            <NavLink to="/academy" active="true" className="activeLink">
              Academy
            </NavLink>
          </li>
          <li className="nav-item active">
            <NavLink to="/gallery" active="true" className="activeLink">
              Gallery
            </NavLink>
          </li>
          <li className="nav-item active">
            <NavLink to="/contact" active="true" className="activeLink">
              Contact
            </NavLink>
          </li>
          <li className="nav-item active">
            <NavLink to="/weather" active="true" className="activeLink">
              Weather
            </NavLink>
          </li>
          <li className="nav-item active">
            <NavLink to="/sponsors" active="true" className="activeLink">
              Sponsors
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
