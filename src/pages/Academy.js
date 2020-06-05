import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import AcademyGroup from "./Academy_sections/AcademyGroup";
import team from "../images/AcademyPage/team.jpg";
import coachImg from "../images/AcademyPage/coach.jpg";
import coachImg1 from "../images/AcademyPage/coach1.jpg";
import coachImg2 from "../images/AcademyPage/coach2.jpg";
import coachImg3 from "../images/AcademyPage/coach3.jpg";
import team1 from "../images/AcademyPage/team1.jpg";
import team2 from "../images/AcademyPage/team2.jpg";
import team3 from "../images/AcademyPage/team3.jpg";

const juniors = [
  {
    teamImg: team1,
    teamImgCaption: "Pee Wee League 2020 representation",
    coach: {
      img: coachImg,
      name: "Ernesto Valverde",
      role: "Coach",
      details:
        "“Coaches have to watch for what they don’t want to see and listen to what they don’t want to hear.”",
    },
    groupDefinition: {
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint error sit assumenda natus cumque dicta optio deleniti libero accusantium reiciendis quos ducimus, labore dolores repellendus eaque provident? Fugiat, magni non.",
      age: "6-9",
      timeplan: {
        first: "Monday 15:30 - 17:00",
        second: "Friday 15:30 - 17:00",
      },
    },
  },
  {
    teamImg: team2,
    teamImgCaption: "Junior League 2020 representation",
    coach: {
      img: coachImg1,
      name: "Diego Simeone",
      role: "Coach",
      details:
        "“A coach's greatest asset is his sense of responsibility - the reliance placed on him by his players.”",
    },
    groupDefinition: {
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint error sit assumenda natus cumque dicta optio deleniti libero accusantium reiciendis quos ducimus, labore dolores repellendus eaque provident? Fugiat, magni non.",
      age: "9-12",
      timeplan: {
        first: "Wednesday 18:00 - 19:30",
        second: "Saturday 11:30 - 14:00",
      },
    },
  },
  {
    teamImg: team3,
    teamImgCaption: "Youth League 2020 representation",
    coach: {
      img: coachImg2,
      name: "Maurizio Sarri",
      role: "Coach",
      details:
        "“A great coach can lead you to a place where you don't need him any more.”",
    },
    groupDefinition: {
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint error sit assumenda natus cumque dicta optio deleniti libero accusantium reiciendis quos ducimus, labore dolores repellendus eaque provident? Fugiat, magni non.",
      age: "12-14",
      timeplan: {
        first: "Tuesday 17:00 - 18:30",
        second: "Thursday 18:30 - 20:00",
      },
    },
  },
  {
    teamImg: team,
    teamImgCaption: "High School League 2020 representation",
    coach: {
      img: coachImg3,
      name: "Pep Guardiola",
      role: "Coach",
      details:
        "“No coach has ever won a game by what he knows; it's what his players know that counts.”",
    },
    groupDefinition: {
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint error sit assumenda natus cumque dicta optio deleniti libero accusantium reiciendis quos ducimus, labore dolores repellendus eaque provident? Fugiat, magni non.",
      age: "14+",
      timeplan: {
        first: "Monday 17:30 - 19:00",
        second: "Thursday 19:30 - 21:00",
      },
    },
  },
];

export const Academy = () => {
  return (
    <div>
      <Hero hero="defaultAcademy">
        <Banner
          title="Academy"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est do Lorem reiciendis hic eligendi distinctio atque quaerat."
        ></Banner>
      </Hero>
      <AcademyGroup teamGroup={juniors[0]} title="PEE WEE LEAGUE" />
      <AcademyGroup teamGroup={juniors[1]} title="JUNIOR LEAGUE" />
      <AcademyGroup teamGroup={juniors[2]} title="YOUTH LEAGUE" />
      <AcademyGroup teamGroup={juniors[3]} title="HIGH SCHOOL LEAGUE" />
    </div>
  );
};
