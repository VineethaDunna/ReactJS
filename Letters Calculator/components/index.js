import {Component} from 'react'
import './index.css'

class LettersCalculators extends Component {
  state = {
    count: 0,
  }

  countLetters = event => {
    const letter = event.target.value
    this.setState({
      count: letter.length,
    })
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <div className="card">
          <div className="card1">
            <h1 className="heading">Calculate the Letters you enter</h1>
            <label htmlFor="phraseInput" className="para">
              Enter the phrase
            </label>
            <input
              type="text"
              className="inputBox"
              onChange={this.countLetters}
              placeholder="Enter the phrase"
            />
            <div>
              <p className="btn">No.of letters: {count}</p>
            </div>
          </div>
          <div className="card2">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
              alt="letters calculator"
              className="image"
            />
          </div>
        </div>
      </div>
    )
  }
}

export default LettersCalculators
