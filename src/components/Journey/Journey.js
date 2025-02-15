import React from "react";
import "./Journey.css";
import { useState } from "react";
import TimeCard from "../TimeCard/TimeCard";

const Journey = () => {
  const startDate = new Date("2024-08-27");

  const [travelled, setTravelled] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  setInterval(() => {
    const currentDate = new Date();
    const travelled = currentDate - startDate;
    const days = Math.floor(travelled / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (travelled % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((travelled % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((travelled % (1000 * 60)) / 1000);

    setTravelled({
      days,
      hours,
      minutes,
      seconds,
    });
  }, 1000);
  const daysArray = Array.from(travelled.days.toString()).map((str) =>
    parseInt(str)
  );
  return (
    <div className="journey">
      <div className="journey-header">
        <h1 className="header-text">Our Journey</h1>
      </div>
      <div className="journey-content">
        <div>
          <div className="journey-content-days">
            <div className="days-header">
              <p className="days-text">
                <span>D</span>ays
              </p>
            </div>
            <div className="days">
              {daysArray.map((digit, index) => (
                <TimeCard
                  Key={index}
                  className="day"
                  Data={digit}
                  ShouldBeSingleDigit={true}
                />
              ))}
            </div>
          </div>
        </div>
        <div>
          <div className="journey-content-hours">
            <div className="hours">
              <TimeCard Data={travelled.hours} />
            </div>
            <div>
              <p className="hours-text">
                <span>H</span>ours
              </p>
            </div>
          </div>
          <div className="journey-content-minutes">
            <div className="minutes">
              <TimeCard Data={travelled.minutes} />
            </div>
            <div>
              <p className="minutes-text">
                <span>M</span>inutes
              </p>
            </div>
          </div>
          <div className="journey-content-seconds">
            <div className="seconds">
              <TimeCard Data={travelled.seconds} />
            </div>
            <div>
              <p className="seconds-text">
                <span>S</span>econds
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Journey;
