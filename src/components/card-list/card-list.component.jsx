import React from "react";
import { Card } from "../card/card.component";
import "./card-list.styles.css";
export const CartList = (props) => {
  return (
    <div className="card-list">
      {props.monsters.map((monster) => (
        <Card key={monster.id} monster={monster}></Card>
      ))}
    </div>
  );
};
