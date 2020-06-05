import React from "react";

function GroupDetails(props) {
  return (
    <div className="gr-information">
      <h4>Group description</h4>
      <div className="decoration"></div>
      <p>{props.groupDefinition.details}</p>
      <h5>Requirements</h5>
      <ul>
        <li>
          Target age: <span>{props.groupDefinition.age} years old</span>
        </li>
        <li>Sports accesories - shoes and outfit</li>
        <li>Enthusiasm to play</li>
      </ul>
      <h5>Training schedule</h5>
      <ul>
        <li>{props.groupDefinition.timeplan.first}</li>
        <li>{props.groupDefinition.timeplan.second}</li>
      </ul>
    </div>
  );
}

export default GroupDetails;
