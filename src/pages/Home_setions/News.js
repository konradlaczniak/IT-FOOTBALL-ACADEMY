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
        icon:
          "https://images.unsplash.com/photo-1529900748604-07564a03e7a6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        title: "News 2",
        info:
          "Odit cupiditate id iusto exercitationem rerum magni quae provident ex.",
        paragraph1:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga excepturi omnis, iste eos debitis id odit velit aliquid necessitatibus cupiditate quo, sequi explicabo suscipit dignissimos, deserunt et ab dolorum culpa.",
        paragraph2:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga excepturi omnis, iste eos debitis id odit velit aliquid necessitatibus cupiditate quo, sequi explicabo suscipit dignissimos, deserunt et ab dolorum culpa.",
      },
      {
        icon:
          "https://images.unsplash.com/photo-1553778263-73a83bab9b0c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        title: "News 3",
        info:
          "Tempore mollitia, molestias aperiam asperiores quibusdam culpa error doloribus iure sint vel expedita minima.",
        paragraph1:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga excepturi omnis, iste eos debitis id odit velit aliquid necessitatibus cupiditate quo, sequi explicabo suscipit dignissimos, deserunt et ab dolorum culpa.",
        paragraph2:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga excepturi omnis, iste eos debitis id odit velit aliquid necessitatibus cupiditate quo, sequi explicabo suscipit dignissimos, deserunt et ab dolorum culpa.",
      },
      {
        icon:
          "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        title: "News 4",
        info:
          "Eveniet accusantium assumenda maiores laudantium omnis unde libero nobis tempora ipsa incidunt iure, non porro!",
        paragraph1:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga excepturi omnis, iste eos debitis id odit velit aliquid necessitatibus cupiditate quo, sequi explicabo suscipit dignissimos, deserunt et ab dolorum culpa.",
        paragraph2:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga excepturi omnis, iste eos debitis id odit velit aliquid necessitatibus cupiditate quo, sequi explicabo suscipit dignissimos, deserunt et ab dolorum culpa.",
      },
      {
        icon:
          "https://images.unsplash.com/flagged/photo-1571771710019-ca58cf80f225?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        title: "News 5",
        info:
          "voluptas nesciunt facilis quia error temporibus eveniet nisi similique totam obcaecati et fuga?",
        paragraph1:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga excepturi omnis, iste eos debitis id odit velit aliquid necessitatibus cupiditate quo, sequi explicabo suscipit dignissimos, deserunt et ab dolorum culpa.",
        paragraph2:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga excepturi omnis, iste eos debitis id odit velit aliquid necessitatibus cupiditate quo, sequi explicabo suscipit dignissimos, deserunt et ab dolorum culpa.",
      },
      {
        icon:
          "https://images.unsplash.com/photo-1468259275383-c4f1b88d5772?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        title: "News 6",
        info:
          "Neque qui in iure necessitatibus esse. Quaerat eaque nihil eos laborum at voluptatem, veritatis?",
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
          {this.state.news.map((item, number) => {
            return (
              <Card key={number.toString()} style={{ minWidth: "18rem" }}>
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
