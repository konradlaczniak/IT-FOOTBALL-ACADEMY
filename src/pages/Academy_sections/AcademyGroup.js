import React from "react";
import Title from "../../components/Title";
import Figure from "react-bootstrap/Figure";
import AcademyGroupItem from "./AcademyGroup_item";

function AcademyGroup(props) {
  return (
    <section className="academy-group">
      <Title title={props.title} />
      <AcademyGroupItem
        coach={props.teamGroup.coach}
        groupDefinition={props.teamGroup.groupDefinition}
      />
      <div className="team-photo">
        <Figure>
          <Figure.Image
            alt="team"
            src={props.teamGroup.teamImg}
            className="img-fluid"
          />
          <Figure.Caption>{props.teamGroup.teamImgCaption}</Figure.Caption>
          <div className="decoration"></div>
        </Figure>
      </div>
    </section>
  );
}

export default AcademyGroup;
