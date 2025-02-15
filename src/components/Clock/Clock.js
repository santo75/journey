import React, { useState, useEffect } from 'react';
import TimeCard from '../TimeCard/TimeCard';
import Colon from '../Colon/Colon';
import './Clock.css';

const Clock = () => {
  const [time, setTime] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  setInterval(() => {
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();

    setTime({
      hours,
      minutes,
      seconds,
    });
  }, 1000);

  return (
    <div className="Time">
      <div className="Time-header">
        <TimeCard Data={time.hours} />
        <Colon />
        <TimeCard Data={time.minutes} />
        <Colon />
        <TimeCard Data={time.seconds} />
      </div>
    </div>
  );
};

export default Clock;