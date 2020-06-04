import React, { Component } from "react";
import Title from "../../components/Title";
import { GiLifeSupport, GiChampions, GiPodiumWinner } from "react-icons/gi";
import { RiUserStarLine } from "react-icons/ri";

class Jumbatron extends Component {
  state = {
    facts: [
      {
        icon: <RiUserStarLine />,
        title: "Lorem",
        info: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      },
      {
        icon: <GiLifeSupport />,
        title: "Lorem",
        info: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      },
      {
        icon: <GiChampions />,
        title: "Lorem",
        info: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      },
      {
        icon: <GiPodiumWinner />,
        title: "Lorem",
        info: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      },
    ],
  };
  render() {
    return (
      <section className="facts">
        <Title title="Key facts" />
        <div className="facts-center">
          {this.state.facts.map((item, index) => {
            return (
              <article key={index} className="fact">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}

export default Jumbatron;
