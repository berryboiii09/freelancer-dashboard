import React from 'react';
import "./Activities.css";

const Activities = ({title,description, date}) => {
  return(
      <div className="activity-card">
          <p>{date}</p>
          <h3>{title}</h3>
          <p>{description}</p>
      </div>
  )
};
export default Activities;