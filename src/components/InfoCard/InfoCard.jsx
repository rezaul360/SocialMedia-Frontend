import React from "react";
import "./InfoCard.css";
import { UilPen } from "@iconscout/react-unicons";
const InfoCard = () => {
  return (
    <div className="InfoCard">
      <div className="InfoHead">
        <h4>Your info</h4>
        <div>
          <UilPen width="2rem" height="1.2rem" />
        </div>
      </div>
      <div className="Info">
        <span>
          <b>Status </b>
        </span>
        <span>In Relationship</span>
      </div>
      <div className="Info">
        <span>
          <b>Lives in </b>
        </span>
        <span>Dhaka Bangladesh</span>
      </div>
      <div className="Info">
        <span>
          <b>Works at </b>
        </span>
        <span>Lead-code it department</span>
      </div>
      <button className="Button logout-button">Logout</button>
    </div>
  );
};

export default InfoCard;
