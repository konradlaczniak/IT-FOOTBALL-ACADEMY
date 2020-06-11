import React from "react";

export const Footer = () => {
  return (
    <footer>
      <div className="container-fluid footer-top">
        <div className="row">
          <div className="footer-details col-md-4 col-sm-6">
            <h4>Contact</h4>
            <hr className="hr-style mb-2 mt-0 mx-auto"></hr>
            <ul className="list-unstyled">
              <li>
                <i className="fas fa-home mr-3"></i> New York, NY 10012, US
              </li>
              <li>
                <i className="fas fa-envelope mr-3"></i> info@example.com
              </li>
              <li>
                <i className="fas fa-phone mr-3"></i> + 01 234 567 88
              </li>
              <li>
                <i className="fas fa-print mr-3"></i> + 01 234 567 89
              </li>
            </ul>
          </div>
          <div className="footer-details col-md-4 col-sm-6">
            <h4>IT FOOTBALL ACADEMY</h4>
            <hr className="hr-style mb-2 mt-0 mx-auto"></hr>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor
              sit beatae error nemo hic libero expedita dolores laudantium
              soluta animi modi nisi eveniet.
            </p>
          </div>
          <div className="footer-details col-md-4 col-sm-6">
            <h4 className="text-uppercase">Follow us</h4>
            <hr className="hr-style mb-2 mt-0 mx-auto"></hr>
            <ul className="list-unstyled social-media">
              <a href="/#">
                <i className="fab fa-facebook"> </i>
              </a>
              <a href="/#">
                <i className="fab fa-twitter"> </i>
              </a>
              <a href="/#">
                <i className="fab fa-instagram"> </i>
              </a>
              <a href="/#">
                <i className="fab fa-youtube"> </i>
              </a>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="text-center">
          &copy; {new Date().getFullYear()} Projekt zrealizowany przez{" "}
          <a href="/#">Konrad Łączniak</a>. Wszelkie prawa zastrzeżone.
        </p>
      </div>
    </footer>
  );
};
