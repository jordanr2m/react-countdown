import React from 'react'
import "./Countdown.css";

const Countdown = () => {
  return (
    <div className='countdown-section'>
      <div className='container --flex-between'>
        <h2 className='--text-md'>Christmas Sale!</h2>

        <div className='countdown --card --my'>
          <time className='--flex-center --text-center --color-white'>
            <span>
              <p>00</p>
              <small>Days</small>
            </span>

            <span>
              <p>01</p>
              <small>Hours</small>
            </span>

            <span>
              <p>20</p>
              <small>Minutes</small>
            </span>

            <span>
              <p>33</p>
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
