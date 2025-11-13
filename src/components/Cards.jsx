import React from 'react';
import "./Cards.css";

const Cards = ({ title, data, pic }) => {
  return (
    <div className="card">
      <div className="icon">{pic}</div>
      <h2>{title}</h2>
      <p>{data}</p>
    </div>
  );
};

export default Cards;