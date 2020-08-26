import React from "react";
import styled from "styled-components"
import {connect} from "react-redux"
import {setWorklogStartTimepoint, setWorklogEndTimepoint} from "../../../redux/actions/actionCreators"
import stopbtn from "../../../assets/timer-stop.svg";
import pausebtn from "../../../assets/timer-pause.svg";
import startbtn from "../../../assets/timer-start.svg"

const Stopwatch = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-weight: bold;
    font-size: 54px;
    color: #1E1E1E;
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
    & button:first-child{
      margin-right: 22px;
    }
`;
const StopwatchButton = styled.button`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    display: flex;
    background: ${props => props.stop ? "#EB5757" : "#3744BD"};
    justify-content: center;
    align-items: center;
`;



class StopWatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      hour: 0, 
      minute: 0, 
      second: 0, 
      isRunning: true
     };
     this.handleStopBtnClick = this.handleStopBtnClick.bind(this)
  }


  componentDidMount() {
    this.props.setWorklogStartTimepoint()
    this.timerID = setInterval(() => {
      this.setState((state) => {
        return {
          hour: state.hour === 59 ? state.hour + 1 : state.hour,
          minute: state.second === 59 ? state.minute + 1 : state.minute,
          second: state.second === 59 ? 0 : state.second + 1,
        };
      });
    }, 1000);
  }

  handleStopBtnClick = () => {
    clearInterval(this.timerID);
    this.setState({isRunning: false})
    this.props.setWorklogEndTimepoint()
    this.props.openModal()
  }

  handlePauseStartClick = () => {
    if (this.state.isRunning) {
      clearInterval(this.timerID);
      this.setState({isRunning: false})
    } else {
      this.setState({isRunning: true})
      this.timerID = setInterval(() => {
        this.setState((state) => {
          return {
            hour: state.hour === 59 ? state.hour + 1 : state.hour,
            minute: state.second === 59 ? state.minute + 1 : state.minute,
            second: state.second === 59 ? 0 : state.second + 1,
          };
        });
      }, 1000);
    }
  };
  render() {
    return (
      <Stopwatch>
        <StopwatchTitle>
          <StopwatchWorklogName>Meeting with QA</StopwatchWorklogName>
          <StopwatchHeaderText>ADD ISSUE</StopwatchHeaderText>
        </StopwatchTitle>
        {this.state.hour < 10 ? "0" + this.state.hour : this.state.hour}:
        {this.state.minute < 10 ? "0" + this.state.minute : this.state.minute}:
        {this.state.second < 10 ? "0" + this.state.second : this.state.second}
        <ButtonsContainer>
          <StopwatchButton stop onClick={this.handleStopBtnClick} >
            <img src={stopbtn} alt="stop" />
          </StopwatchButton>
          <StopwatchButton  onClick={this.handlePauseStartClick}>
            {
              this.state.isRunning ? 
              <div><img src={pausebtn} alt="pause"/><img src={pausebtn} alt="pause" /></div> : 
              <img src={startbtn} alt="play" />
            }
          </StopwatchButton>
        </ButtonsContainer>
      </Stopwatch>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    startTime: state.startTime,
    endTime: state.endTime,
    isRunning: state.isRunning
  }
}

const mapDispatchToProps = {
  setWorklogStartTimepoint,
  setWorklogEndTimepoint,
}

export default connect(mapStateToProps, mapDispatchToProps)(StopWatch);
