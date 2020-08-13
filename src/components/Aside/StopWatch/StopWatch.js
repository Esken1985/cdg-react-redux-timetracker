import React from "react";
import "./StopWatch.css";
import stopbtn from "../../../assets/timer-stop.svg";
import pausebtn from "../../../assets/timer-pause.svg";

class StopWatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hour: 0, minute: 0, second: 0, timerTime: 0 };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState((state, props) => {
        return {
          hour: state.hour == 59 ? state.hour + 1 : state.hour,
          minute: state.second == 59 ? state.minute + 1 : state.minute,
          second: state.second == 59 ? 0 : state.second + 1,
        };
      });
    }, 1000);
  }

  render() {
    return (
      <div className="stopwatch">
        <div className="stopwatch__header">
          <div className="stopwatch__header-title">Meeting with QA</div>
          <div className="stopwatch__header-text">ADD ISSUE</div>
        </div>
        {this.state.hour < 10 ? "0" + this.state.hour : this.state.hour}:
        {this.state.minute < 10 ? "0" + this.state.minute : this.state.minute}:
        {this.state.second < 10 ? "0" + this.state.second : this.state.second}
        <div className="buttons">
          <div className="buttons__stop">
            <img src={stopbtn} alt="stop" />
          </div>
          <div className="buttons__pause">
            <img src={pausebtn} alt="play" />
            <img src={pausebtn} alt="play" />
          </div>
        </div>
      </div>
    );
  }
  
}

export default StopWatch;
