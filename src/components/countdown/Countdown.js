import { useState, useEffect } from "react";
import "./Countdown.css";

const Countdown = () => {
  const [days, setDays] = useState("00");
  const [hours, setHours] = useState("00");
  const [minutes, setMinutes] = useState("00");
  const [seconds, setSeconds] = useState("00");

  const startCountdown = () => {
    // Use setInterval method
    let interval = setInterval(() => {
      // Make a variable to store the end date of the countdown
      const endDate = new Date("Dec 25, 2024")
      // Make a variable to store the current date
      const currentDate = new Date();

      // Calculate total number of seconds first, then divide it into days, hours, minutes
      const totalSeconds = (endDate - currentDate) / 1000;
      const daysCount = Math.floor(totalSeconds / 3600 / 24); // round down to nearest whole day
      const hoursCount = Math.floor(totalSeconds / 3600) % 24;
      const minutesCount = Math.floor(totalSeconds / 60) % 60;
      const secondsCount = Math.floor(totalSeconds) % 60;

      // Logic for what we want it to do (when countdown is finished is written first)
      if (totalSeconds < 1) {
        // do something
      } else {
        // Use backticks to plug in our format function to our counts
        setDays(`${format(daysCount)}`);
        setHours(`${format(hoursCount)}`);
        setMinutes(`${format(minutesCount)}`);
        setSeconds(`${format(secondsCount)}`);
      }
    }, 1000); // tells interval to run every 1 second (1000ms)
  }

  // Function to add leading 0s to numbers that are single digits. Saying if time is less than 10, add a 0. Otherwise just show time
  function format (time) {
    return time < 10 ? `0${time}` : time;
  }

  // Must use the useEffect hook to call the function
  useEffect(() => {
    startCountdown()
  }, []); // set an empty dependency so it fires just once

  return (
    <div className='countdown-section'>
      <div className='container --flex-between'>
        <h2 className='--text-md'>Christmas Sale!</h2>

        <div className='countdown --card --my'>
          <time className='--flex-center --text-center --color-white'>
            <span>
              <p>{days}</p>
              <small>Days</small>
            </span>

            <span>
              <p>{hours}</p>
              <small>Hours</small>
            </span>

            <span>
              <p>{minutes}</p>
              <small>Minutes</small>
            </span>

            <span>
              <p>{seconds}</p>
              <small>Seconds</small>
            </span>
          </time>
        </div>
      </div>

      <p className='close'>X</p>
    </div>
  )
}

export default Countdown
