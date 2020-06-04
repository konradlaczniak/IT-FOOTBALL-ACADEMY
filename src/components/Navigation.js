import React from "react";
import { NavLink } from "react-router-dom";

export const Navigation = () => {
  window.scroll(function () {
    console.log(123);
    if (document.scrollTop() > 50) {
      console.log("done");
      document.getElementsByClassName("nav").classList.add("affix");
    } else {
      document.getElementsByClassName("nav").classList.remove("affix");
    }
  });

  return (
    <nav className="scrooling dark nav navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand logo" href="#">
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
            <NavLink to="/" exact active className="activeLink">
              Strona główna
            </NavLink>
          </li>
          <li className="nav-item active">
            <NavLink to="/uslugi" active className="activeLink">
              Usługi
            </NavLink>
          </li>
          <li className="nav-item active">
            <NavLink to="/kontakt" active className="activeLink">
              Kontakt
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
