import React from "react";
import Title from "../../components/Title";

function GridGroup(props) {
  return (
    <section className="sponsors_section">
      <Title title={props.title} />
      <div className={props.style}>
        {props.sponsors.map((item, index) => {
          return (
            <article key={index} className="sponsor">
              <img className="img-fluid" src={item.icon} alt="" />
              <h6>{item.title}</h6>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default GridGroup;
