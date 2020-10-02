import React, { Component } from "react";
import styled from "styled-components";
import _ from "lodash";
import stopbtn from "../../../assets/timer-stop.svg";
import pausebtn from "../../../assets/timer-pause.svg";
import startbtn from "../../../assets/timer-start.svg";

const Stopwatch = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: bold;
  font-size: 54px;
  color: #1e1e1e;
`;
const StopwatchTitle = styled.div`
  text-align: center;
`;
const StopwatchWorklogName = styled.div`
  font-weight: 500;
  font-size: 20px;
  color: #000000;
  padding-bottom: 14px;
`;
const StopwatchHeaderText = styled.div`
  font-size: 18px;
  color: #828282;
  padding-bottom: 11px;
`;
const ButtonsContainer = styled.div`
  display: flex;
  padding-top: 31px;
  padding-bottom: 33px;
  & button:first-child {
    margin-right: 22px;
  }
`;
const StopwatchButton = styled.button`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: flex;
  background: ${(props) => (props.stop ? "#EB5757" : "#3744BD")};
  justify-content: center;
  align-items: center;
`;

class StopWatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timerOn: true,
      timerStart: 0,
      timerTime: 0,
    };
    this.handleStopBtnClick = this.handleStopBtnClick.bind(this);
  }

  async componentDidMount() {
    let timerOn = localStorage.getItem("timerOn") === "true";
    let timerStart = localStorage.getItem("timerStart");
    let timerTime = localStorage.getItem("timerTime");
    await this.setState({
      timerOn: timerOn,
      timerStart: timerStart,
      timerTime: timerTime,
    });
  }

  startTimer = (e) => {
    let { timerOn, timerTime = 0, timerStart = 0 } = this.state;

    if (e && timerOn) {
      return; // stop continuous start button click
    }

    if (!timerOn) {
      // stop / pause state
      // start / resume from current time
      timerStart = Date.now() - timerTime;
    } else if (timerOn) {
      // running state
      // calculate and compensate closed time
      timerTime = Date.now() - timerStart;
    }

    this.setState({
      timerOn: true,
      timerTime: timerTime,
      timerStart: timerStart,
    });

    this.timer = setInterval(() => {
      this.setState({
        timerTime: Date.now() - timerStart,
      });
    }, 1000);

    localStorage.setItem("timerOn", true);
    localStorage.setItem("timerStart", timerStart);
    localStorage.removeItem("timerTime");
  };
  // handleStopBtnClick = () => {
  //   clearInterval(this.timerID);
  //   this.setState({ isRunning: false });
  //   this.props.setEndTime();
  //   if (this.props.duration < 60000) {
  //     this.props.openAlert();
  //     this.props.openModal();
  //   }
  // };

  // handlePauseStartClick = () => {
  //   if (this.state.isRunning) {
  //     clearInterval(this.timerID);
  //     this.setState({ isRunning: false });
  //   } else {
  //     this.setState({ isRunning: true });
  //     this.timerID = setInterval(() => {
  //       this.setState((state) => {
  //         return {
  //           hour: state.hour === 59 ? state.hour + 1 : state.hour,
  //           minute: state.second === 59 ? state.minute + 1 : state.minute,
  //           second: state.second === 59 ? 0 : state.second + 1,
  //         };
  //       });
  //     }, 1000);
  //   }
  // };
  stopTimer = () => {
    this.setState({ timerOn: false });
    localStorage.setItem("timerOn", false);
    localStorage.setItem("timerTime", this.state.timerTime);
    localStorage.removeItem("timerStart");
    clearInterval(this.timer);
    this.props.setEndTime();
    this.props.openModal();
  };

  render() {
    const { timerTime = 0 } = this.state;
    let seconds = ("0" + (Math.floor(timerTime / 1000) % 60)).slice(-2);
    let minutes = ("0" + (Math.floor(timerTime / 60000) % 60)).slice(-2);
    let hours = ("0" + Math.floor(timerTime / 3600000)).slice(-2);
    return (
      <Stopwatch>
        <StopwatchTitle>
          <StopwatchWorklogName>Meeting with QA</StopwatchWorklogName>
          <StopwatchHeaderText>ADD ISSUE</StopwatchHeaderText>
        </StopwatchTitle>
        {hours}:{minutes}:{seconds}
        <ButtonsContainer>
          <StopwatchButton stop onClick={this.stopTimer}>
            <img src={stopbtn} alt="stop" />
          </StopwatchButton>
          <StopwatchButton onClick={this.startTimer}>
            <img src={startbtn} alt="play" />
          </StopwatchButton>
        </ButtonsContainer>
      </Stopwatch>
    );
  }
}

export default StopWatch;
