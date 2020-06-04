import React, { Component } from "react";
import Title from "../../components/Title";
import Card from "react-bootstrap/Card";
import cardImage from "../../images/HomePage/card.jpg";
import MoreInfo from "../Home_setions/Modal";

class News extends Component {
  state = {
    news: [
      {
        icon: cardImage,
        title: "News 1",
        info: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        paragraph1:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga excepturi omnis, iste eos debitis id odit velit aliquid necessitatibus cupiditate quo, sequi explicabo suscipit dignissimos, deserunt et ab dolorum culpa.",
        paragraph2:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga excepturi omnis, iste eos debitis id odit velit aliquid necessitatibus cupiditate quo, sequi explicabo suscipit dignissimos, deserunt et ab dolorum culpa.",
      },
      {
        icon: cardImage,
        title: "News 2",
        info: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        paragraph1:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga excepturi omnis, iste eos debitis id odit velit aliquid necessitatibus cupiditate quo, sequi explicabo suscipit dignissimos, deserunt et ab dolorum culpa.",
        paragraph2:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga excepturi omnis, iste eos debitis id odit velit aliquid necessitatibus cupiditate quo, sequi explicabo suscipit dignissimos, deserunt et ab dolorum culpa.",
      },
      {
        icon: cardImage,
        title: "News 3",
        info: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        paragraph1:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga excepturi omnis, iste eos debitis id odit velit aliquid necessitatibus cupiditate quo, sequi explicabo suscipit dignissimos, deserunt et ab dolorum culpa.",
        paragraph2:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga excepturi omnis, iste eos debitis id odit velit aliquid necessitatibus cupiditate quo, sequi explicabo suscipit dignissimos, deserunt et ab dolorum culpa.",
      },
      {
        icon: cardImage,
        title: "News 4",
        info: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        paragraph1:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga excepturi omnis, iste eos debitis id odit velit aliquid necessitatibus cupiditate quo, sequi explicabo suscipit dignissimos, deserunt et ab dolorum culpa.",
        paragraph2:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga excepturi omnis, iste eos debitis id odit velit aliquid necessitatibus cupiditate quo, sequi explicabo suscipit dignissimos, deserunt et ab dolorum culpa.",
      },
      {
        icon: cardImage,
        title: "News 5",
        info: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        paragraph1:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga excepturi omnis, iste eos debitis id odit velit aliquid necessitatibus cupiditate quo, sequi explicabo suscipit dignissimos, deserunt et ab dolorum culpa.",
        paragraph2:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga excepturi omnis, iste eos debitis id odit velit aliquid necessitatibus cupiditate quo, sequi explicabo suscipit dignissimos, deserunt et ab dolorum culpa.",
      },
      {
        icon: cardImage,
        title: "News 6",
        info: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        paragraph1:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga excepturi omnis, iste eos debitis id odit velit aliquid necessitatibus cupiditate quo, sequi explicabo suscipit dignissimos, deserunt et ab dolorum culpa.",
        paragraph2:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga excepturi omnis, iste eos debitis id odit velit aliquid necessitatibus cupiditate quo, sequi explicabo suscipit dignissimos, deserunt et ab dolorum culpa.",
      },
    ],
  };

  render() {
    return (
      <section className="news">
        <Title title="News" />
        <div className="news-center">
          {this.state.news.map((item, index) => {
            return (
              <Card style={{ minWidth: "18rem" }}>
                <Card.Img variant="top" src={item.icon} />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>{item.info}</Card.Text>
                  <MoreInfo
                    title={item.title}
                    paragraph1={item.paragraph1}
                    paragraph2={item.paragraph2}
                  />
                </Card.Body>
              </Card>
            );
          })}
        </div>
      </section>
    );
  }
}

export default News;
