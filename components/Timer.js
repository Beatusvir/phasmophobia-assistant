import React, { Component } from 'react';
import moment from "moment";

class Timer extends Component {
  state = {
    clock: 0,
    interval : null,
    offset: null,
  }

  start = () => {
    if (!this.state.interval) {
      this.setState({
        offset: Date.now(),
        interval: setInterval(this.update, 1000),
      })
    }
  }

  stop = () => {
    if (this.state.interval) {
      clearInterval(this.state.interval);
      this.setState({
        interval: null,
      });
    }
  }

  reset = () => {
    this.setState({
      clock: 0,
    })
  }

  update = () => {
    const now = Date.now();
    const d = now - this.state.offset;
    this.setState({
      offset: now,
      clock: d + this.state.clock,
    });
  }

  render() {
    return (
      <div className="phass__timer">
        <p>{moment.utc(this.state.clock).format('mm:ss')}</p>
        <button className="phass__timer-play" onClick={this.start}>
          <img src="/play.png" alt="Play" />
        </button>
        <button className="phass__timer-stop" onClick={this.stop}>
          <img src="/stop.png" alt="Stop" />
        </button>
        <button className="phass__timer-reset" onClick={this.reset}>
          <img src="/reset.png" alt="Reset" />
        </button>
      </div>
    )
  }
}

export default Timer;
