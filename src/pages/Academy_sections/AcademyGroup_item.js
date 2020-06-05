import React from "react";
import Coach from "./coach";
import GroupDetails from "./GroupDetails";

function AcademyGroup_item(props) {
  return (
    <div className="group-details">
      <GroupDetails groupDefinition={props.groupDefinition} />
      <Coach coach={props.coach} />
    </div>
  );
}

export default AcademyGroup_item;
