import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {
    heads: 0,
    tails: 0,
    generateValue: 0,
  }

  tossingCoin = () => {
    const generateValue = Math.floor(Math.random() * 2)
    this.setState(prevState => {
      if (generateValue === 0) {
        return {
          heads: prevState.heads + 1,
          generateValue,
        }
      }
      return {
        tails: prevState.tails + 1,
        generateValue,
      }
    })
  }

  render() {
    const {heads, tails, generateValue} = this.state

    return (
      <div className="bg-container">
        <div className="card">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="para">Heads (or) Tails</p>
          {generateValue === 0 ? (
            <img
              src="https://assets.ccbp.in/frontend/react-js/heads-img.png"
              className="coin"
              alt="head"
            />
          ) : (
            <img
              src="https://assets.ccbp.in/frontend/react-js/tails-img.png"
              className="coin"
              alt="tail"
            />
          )}

          <button type="button" className="btn" onClick={this.tossingCoin}>
            Toss Coin
          </button>
          <p>
            Total:{heads + tails} Heads: {heads} Tail: {tails}
          </p>
        </div>
      </div>
    )
  }
}
export default CoinToss
