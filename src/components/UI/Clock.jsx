import React, { useState, useEffect } from 'react';
import "../../style/clock.css";

const Clock = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const countDown = () => {
      const destination = new Date('Dec 27, 2024').getTime();

      const interval = setInterval(() => {
        const now = new Date().getTime();
        const different = destination - now;

        const daysLeft = Math.floor(different / (1000 * 60 * 60 * 24));
        const hoursLeft = Math.floor((different % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutesLeft = Math.floor((different % (1000 * 60 * 60)) / (1000 * 60));
        const secondsLeft = Math.floor((different % (1000 * 60)) / 1000);

        if (different <= 0) {
          clearInterval(interval);
          setDays(0);
          setHours(0);
          setMinutes(0);
          setSeconds(0);
        } else {
          setDays(daysLeft);
          setHours(hoursLeft);
          setMinutes(minutesLeft);
          setSeconds(secondsLeft);
        }
      }, 1000); // Update every second

      return interval; // Return interval ID for cleanup
    };

    const interval = countDown();

    // Cleanup the interval when the component unmounts
    return () => clearInterval(interval);

  }, []); // Empty dependency array ensures it runs only once when the component mounts

  return (
    <div className="clock__wrapper">
      <div className="clock__data">
        <div className="text-center">
          <h1 className="text-white">{days}</h1>
          <h5 className="text-white">Days</h5>
        </div>
        <span className="text-white">:</span>
      </div>

      <div className="clock__data">
        <div className="text-center">
          <h1 className="text-white">{hours}</h1>
          <h5 className="text-white">Hours</h5>
        </div>
        <span className="text-white">:</span>
      </div>

      <div className="clock__data">
        <div className="text-center">
          <h1 className="text-white">{minutes}</h1>
          <h5 className="text-white">Minutes</h5>
        </div>
        <span className="text-white">:</span>
      </div>

      <div className="clock__data">
        <div className="text-center">
          <h1 className="text-white">{seconds}</h1>
          <h5 className="text-white">Seconds</h5>
        </div>
      </div>
    </div>
  );
};

export default Clock;
