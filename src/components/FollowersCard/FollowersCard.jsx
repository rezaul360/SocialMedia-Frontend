import React from "react";
import "./FollowersCard.css";
import { Followers } from "../../Data/FollowerSData";

const FollowersCard = () => {
  return (
    <div className="FollowersCard">
      <h3>Who is following you</h3>
      {Followers.map((folloer, id) => {
        return (
          <div className="Follower">
            <div>
              <img src={folloer.img} alt="" className="FollowerImg" />
              <div className="Name">
                <span>{folloer.name}</span>
                <span>@{folloer.username}</span>
              </div>
            </div>
            <button className="Button fc-button">Follow</button>
          </div>
        );
      })}
    </div>
  );
};

export default FollowersCard;
