import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {
    value: 0,
    parity: 'Count is Even',
  }

  increment = () => {
    const randomValue = Math.floor(Math.random() * 101)
    this.setState(prevState => {
      const newCount = prevState.value + randomValue
      const newParity = newCount % 2 === 0 ? 'Count is Even' : 'Count is Odd'
      return {value: newCount, parity: newParity}
    })
  }

  render() {
    const {value, parity} = this.state
    return (
      <div className="bg-container">
        <div className="card">
          <h1 className="heading">Count {value}</h1>
          <p className="para">{parity}</p>
          <div>
            <button type="button" onClick={this.increment} className="btn">
              Increment
            </button>
          </div>
          <p className="para">*Increase by random number between 0 to 100</p>
        </div>
      </div>
    )
  }
}
export default EvenOddApp
