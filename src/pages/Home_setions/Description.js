import React from "react";

function Description({ title, text1, text2, text }) {
  return (
    <article className="aboutAcademy col-md-6">
      <h1>{title}</h1>
      <div></div>
      <p>{text}</p>
      <p>{text1}</p>
      <p>{text}</p>
      <p>{text2}</p>
    </article>
  );
}

export default Description;
