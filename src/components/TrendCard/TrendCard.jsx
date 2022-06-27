import React from "react";
import "./TrendCard.css";
import { TrendData } from "../../Data/TrendData";

const TrendCard = () => {
  return (
    <div className="TrendCard">
      <h3>Trend for you</h3>
      {TrendData.map((trend) => {
        return (
          <div className="Trend">
            <span>#{trend.name}</span>
            <span>{trend.shares}k shares</span>
          </div>
        );
      })}
      <button className="Button r-button">Share</button>
    </div>
  );
};

export default TrendCard;