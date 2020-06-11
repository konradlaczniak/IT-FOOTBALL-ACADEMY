import React from "react";

function Coach(props) {
  return (
    <div className="coach-item">
      <img src={props.coach.img} alt="Coach" className="img-fluid" />
      <h1>{props.coach.name}</h1>
      <p className="title-coach">{props.coach.role}</p>
      <p>{props.coach.details}</p>
    </div>
  );
}

export default Coach;
