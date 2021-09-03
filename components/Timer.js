import React, { Component } from 'react';

class Timer extends Component {
  state = {

  }

  render() {
    return (
      <div className="phass__timer text-center">
        <p>timer</p>
        <button className="phass__timer-stop">
          <img src="/stop.png" alt="Stop" />
        </button>
        <button className="phass__timer-play">
          <img src="/play.png" alt="Play" />
        </button>
        <button className="phass__timer-reset">
          <img src="/reset.png" alt="Reset" />
        </button>
      </div>
    )
  }
}

export default Timer;
