import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {
    seconds: 0,
    intervalId: null,
  }

  startTime = () => {
    if (!this.state.intervalId) {
      const intervalId = setInterval(() => {
        this.setState(prevState => ({
          seconds: prevState.seconds + 1,
        }))
      }, 1000)
      this.setState({intervalId})
    }
  }

  resetTime = () => {
    clearInterval(this.state.intervalId)
    this.setState({
      seconds: 0,
      intervalId: null,
    })
  }

  stopTime = () => {
    clearInterval(this.state.intervalId)
    this.setState({
      intervalId: null,
    })
  }

  formatTime = () => {
    const {seconds} = this.state
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60

    const stringHours = (minutes < 10 ? '0' : '') + minutes.toString()
    const stringseconds =
      (remainingSeconds < 10 ? '0' : '') + seconds.toString()
    return `${stringHours}:${stringseconds}`
  }

  render() {
    return (
      <div className="appContainer ">
        <h1 className="head1 mb-5">Stopwatch</h1>
        <div className="card shadow text-center">
          <div className="head">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              className="icon"
              alt="stopwatch"
            />
            <h1 className="smallHead ">Timer</h1>
          </div>
          <h1 className="timer">{this.formatTime()}</h1>
          <div className="buttons">
            <button
              type="button"
              onClick={this.startTime}
              className="btn m-2 btn-success"
            >
              Start
            </button>
            <button
              type="button"
              className="btn m-2  btn-danger"
              onClick={this.stopTime}
            >
              Stop
            </button>
            <button
              type="button"
              className="btn m-2  btn-warning"
              onClick={this.resetTime}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
