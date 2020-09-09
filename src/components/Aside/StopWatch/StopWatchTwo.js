class Stopwatch extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        timerOn: false,
        timerStart: 0,
        timerTime: 0
      };
    }
  
    async componentDidMount() {
      let timerOn = localStorage.getItem('timerOn') === "true";
      let timerStart = localStorage.getItem('timerStart')
      let timerTime = localStorage.getItem('timerTime')
  
      await this.setState({
        timerOn: timerOn,
        timerStart: timerStart,
        timerTime: timerTime
      });
  
      if (timerOn) {
        this.startTimer()
      }
    }
  
  
    startTimer = (e) => {
      let { timerOn, timerTime = 0, timerStart = 0 } = this.state;
  
      if (e && timerOn) {
        return // stop continuous start button click
      }
  
      if (!timerOn) {
        // stop / pause state
        // start / resume from current time
        timerStart = Date.now() - timerTime
      }
      else if (timerOn) {
        // running state
        // calculate and compensate closed time
        timerTime = Date.now() - timerStart
      }
  
      this.setState({
        timerOn: true,
        timerTime: timerTime,
        timerStart: timerStart
      });
  
      this.timer = setInterval(() => {
        this.setState({
          timerTime: Date.now() - timerStart
        });
      }, 10);
  
      localStorage.setItem('timerOn', true);
      localStorage.setItem('timerStart', timerStart)
      localStorage.removeItem("timerTime")
    };
  
    stopTimer = () => {
      this.setState({ timerOn: false });
      localStorage.setItem('timerOn', false);
      localStorage.setItem('timerTime', this.state.timerTime);
      localStorage.removeItem("timerStart")
      clearInterval(this.timer);
    };
  
    render() {
      const { timerTime = 0 } = this.state;
      let centiseconds = ("0" + (Math.floor(timerTime / 10) % 100)).slice(-2);
      let seconds = ("0" + (Math.floor(timerTime / 1000) % 60)).slice(-2);
      let minutes = ("0" + (Math.floor(timerTime / 60000) % 60)).slice(-2);
      let hours = ("0" + Math.floor(timerTime / 3600000)).slice(-2);
  
      return (
        <div>
          <div className="Stopwatch-display">
            {hours} : {minutes} : {seconds}
          </div>
  
          {(
            <button onClick={this.startTimer}>Start</button>
          )}
  
          {this.state.timerOn === true && this.state.timerTime > 0 && (
            <button onClick={this.stopTimer}>Stop</button>
          )}
        </div>
      );
    }
  }