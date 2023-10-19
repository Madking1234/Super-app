import React, { useEffect, useState } from "react";
import "./Main.css";
import ProfileImage from "./profile.png";
import vector from "./vector.png";
import wind from "./wind.png";
import humidity from "./Group.png";
import { useNavigate } from "react-router-dom";
function Main() {
  const [news, setNews] = useState([]);
  const [notes, setNotes] = useState("");

  const [wether, setWether] = useState([]);
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const Name = localStorage.getItem("name").replace(/["]+/g, "");
  const passUserName = localStorage.getItem("username").replace(/["]+/g, "");
  const passEmail = localStorage.getItem("email").replace(/["]+/g, "");
  const savedNamesStr = localStorage.getItem("selectedCategoryNames");
  const savedNames = JSON.parse(savedNamesStr) || [];
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const formattedDate =
    (month < 10 ? "0" : "") +
    month +
    "-" +
    (day < 10 ? "0" : "") +
    day +
    "-" +
    year;
  const formattedTime = time
    .toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    })
    .toUpperCase();
  useEffect(() => {
    const dateIntervalId = setInterval(() => {
      setDate(new Date());
    }, 1000);

    const timeIntervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(dateIntervalId);
      clearInterval(timeIntervalId);
    };
  }, []);
  const wetherAPI = "7275327d4b2f4b9f84b141027230910";
  const wetherURL = `http://api.weatherapi.com/v1/current.json?key=7275327d4b2f4b9f84b141027230910&q=Chennai&aqi=no`;
  useEffect(() => {
    fetchData();
  }, []);
  async function fetchData() {
    try {
      const response = await fetch(wetherURL);
      const jsonData = await response.json();
      setWether(jsonData.current);
    } catch (e) {
      console.log("error", e);
    }
  }
  useEffect(() => {
    const localNotes = localStorage.getItem("notes");
    if (localNotes) {
      setNotes(JSON.parse(localNotes));
    }
  }, []);
  function handleNotes(e) {
    setNotes(e.target.value);
    localStorage.setItem("notes", JSON.stringify(e.target.value));
  }
  const newsURL = `https://newsapi.org/v2/everything?q=tesla&from=2023-09-18&sortBy=publishedAt&apiKey=aceab26de84740a3aeb3d3d32bbb1c60`;

  useEffect(() => {
    fetchNewsData();
  }, []);
  async function fetchNewsData() {
    try {
      const response = await fetch(newsURL);
      const jsonData = await response.json();
      setNews(jsonData.articles);
    } catch (e) {
      console.log("error", e);
    }
  }
  const navigate = useNavigate();
  const handleBrowse = () => {
    navigate("/Movie");
  };
  return (
    <div className="profile-wether-notes-news">
      <div className="main-page">
        <div className="profile-wether-notes">
          <div profile-wether>
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
                <div className="date">{formattedDate}</div>
                <div className="time">{formattedTime}</div>
              </div>
              <div className="weather-conditions">
                {wether && wether.condition && (
                  <div className="wether-report">
                    <img></img>
                    <p>{wether.condition.text}</p>
                  </div>
                )}
                <img id="line" src={vector} height={70} />
                <div className="tempreature">
                  <p>{wether.feelslike_c}°C</p>
                </div>
                <img id="line" src={vector} height={70} />
                <div className="wind-humidity">
                  <div className="wind">
                    <img src={wind} alt="wind" height={40} width={30} />
                    <div className="wind-condition">
                      <p>{wether.wind_kph}km/h</p>
                      <p>Humidity</p>
                    </div>
                  </div>
                  <div className="humidity">
                    <img
                      id="humidityimg"
                      src={humidity}
                      alt="humidity"
                      height={50}
                      width={30}
                    />
                    <div className="humidity-condition">
                      <p>{wether.humidity}%</p>
                      <p>Humidity</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="notes">
            <p>All Notes</p>
            <textarea
              className="input-notes"
              value={notes}
              onChange={handleNotes}
            ></textarea>
          </div>
        </div>
        <div className="countdown-timer">
          <div className="timer"></div>
          <div></div>
        </div>
      </div>
      <div className="news">
        {news.length > 0 && (
          <div className="news-image-description-container">
            <img
              id="news-img"
              src={news[0].urlToImage}
              alt={news[0].title}
              height={500}
              width={596}
            />
            <div className="news-title" style={{ color: "white" }}>
              {news[0].title}
            </div>
            <div className="description">
              <p>{news[0].content}</p>
            </div>
          </div>
        )}
        <button className="final-page" onClick={handleBrowse}>
          Browse
        </button>
      </div>
    </div>
  );
}

export default Main;
