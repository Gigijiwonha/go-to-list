import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import bar from "../assets/bar.png";
import cafe from "../assets/cafe.png";
import restaurant from "../assets/restaurant.png";
import other from "../assets/other.png";

function ListItem({ item }) {
  const imageFiltered = (place) => {
    switch (place) {
      case "Cafe":
        return cafe;
      case "Restaurant":
        return restaurant;
      case "Bar":
        return bar;
      case "Other":
        return other;

      default:
        return null;
    }
  };

  const keywordsArray = item.keywords.split(",");

  return (
    <div>
      <div className="item-container">
        <img src={imageFiltered(item.place)} alt={item.place} />
        <div className="item-info">
          <div className="item-name">
            <h3>{item.placeName}</h3>
            <p>{item.place}</p>
          </div>
          <div className="item-location">
            <p>{item.detailAddress},</p>
            <p>{item.suburb}</p>
          </div>
          <p className="item-description">
            {item.comments ? "Check comments" : ""}
          </p>
        </div>
      </div>
      <div className="item-keywords-container">
        {keywordsArray.map((keyword, index) => (
          <p key={index} className="item-keywords">
            {keyword}
          </p>
        ))}
      </div>
    </div>
  );
}

export default ListItem;
