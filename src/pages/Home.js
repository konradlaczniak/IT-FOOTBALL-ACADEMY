import React from "react";
import News from "./Home_setions/News";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-scroll";
import Jumbotron from "./Home_setions/Jumbotron";
import About from "./Home_setions/About";

export const Home = () => {
  return (
    <div>
      <Hero>
        <Banner
          title="IT Football Academy"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est dolorem reiciendis hic eligendi distinctio atque quaerat."
        >
          <Link to="about" smooth={true} offset={-70} className="btn-banner">
            Check out more!
          </Link>
        </Banner>
      </Hero>
      <About />
      <Jumbotron />
      <News />
    </div>
  );
};
