import React from "react";

function Description({ title, text }) {
  return (
    <article className="aboutAcademy col-md-6">
      <h1>{title}</h1>
      <div></div>
      <p>{text}</p>
      <p>{text}</p>
      <p>{text}</p>
      <p>{text}</p>
    </article>
  );
}

export default Description;
