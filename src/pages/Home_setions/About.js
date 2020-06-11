import React from "react";
import Description from "./Description";
import AboutImages from "./AboutImages";

function About(props) {
  return (
    <section className="about container-fluid" id="about">
      <div className="row">
        <Description
          title="About us"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est dolorem reiciendis hic eligendi distinctio atque quaerat."
          text1="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem et, deleniti repudiandae laudantium consectetur incidunt rerum cum minus, ex sapiente quae provident! Consectetur assumenda, dolorem possimus doloremque dignissimos nihil modi."
          text2="Error quis optio rerum modi recusandae sint! Quos porro velit quas illo, neque hic cumque corporis nostrum a libero voluptas laborum perspiciatis?"
        />
        <AboutImages />
      </div>
    </section>
  );
}

export default About;
