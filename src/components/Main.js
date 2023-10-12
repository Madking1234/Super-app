import React from "react";
import "./Main.css";
import ProfileImage from "./profile.png";
function Main() {
  const Name = localStorage.getItem("name").replace(/["]+/g, "");
  const passUserName = localStorage.getItem("username").replace(/["]+/g, "");
  const passEmail = localStorage.getItem("email").replace(/["]+/g, "");
  const currDate = new Date().toLocaleDateString;
  const currTime = new Date().toLocaleTimeString;
  const savedNamesStr = localStorage.getItem("selectedCategoryNames");
  const savedNames = JSON.parse(savedNamesStr) || [];
  return (
    <div className="main-page">
      <div className="profile">
        <img className="profile-image" src={ProfileImage}></img>
        <div className="profile-data">
          <ul className="user-data">
            <li className="name-username">{Name}</li>
            <li className="name-username">{passEmail}</li>
            <li className="email">{passUserName}</li>
          </ul>
          <div className="choices">
            {savedNames.map((name, index) => (
              <div className="choice-name" key={index}>
                {name}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="wether-app">
        <div className="date-time">
          <div className="date">{currDate}</div>
          <div className="time">{currTime}</div>
        </div>
        <div wether-conditons>
          <div className="day-wether"></div>
          <div className="tempreature"></div>
          <div className="climate"></div>
        </div>
      </div>
    </div>
  );
}

export default Main;
