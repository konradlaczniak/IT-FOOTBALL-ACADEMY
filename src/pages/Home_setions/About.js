import React from "react";
import Description from "./Description";
import AboutImages from "./AboutImages";

function About(props) {
  return (
    <section className="about container-fluid">
      <div className="row">
        <Description
          title="About us"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est dolorem reiciendis hic eligendi distinctio atque quaerat."
        />
        <AboutImages />
      </div>
    </section>
  );
}

export default About;
