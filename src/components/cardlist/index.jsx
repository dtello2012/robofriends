import React from "react";
import Card from "../card";

const CardList = ({ robots }) => {
  return robots.map((robot, index) => {
    return <Card key={`card-${index}`} robot={robot} />;
  });
};

export default CardList;
