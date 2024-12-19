import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {value: 0}

  generateValue = () => {
    const newValue = Math.floor(Math.random() * 100)
    this.setState({
      value: newValue,
    })
  }

  render() {
    const {value} = this.state
    return (
      <div className="bg-container">
        <div className="card">
          <h1 className="heading">Random Number</h1>
          <p className="para">
            Generate a random number in the range of 0 to 100
          </p>
          <button className="btn" onClick={this.generateValue}>
            Generate
          </button>
          <p className="value">{value}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
