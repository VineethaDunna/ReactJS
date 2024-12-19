import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {
    countMango: 0,
    countBanana: 0,
  }

  eatMango = () => {
    this.setState(prevState => {
      console.log('count')
      return {countMango: prevState.countMango + 1}
    })
  }

  eatBanana = () => {
    this.setState(prevState => {
      console.log('count')
      return {countBanana: prevState.countBanana + 1}
    })
  }

  render() {
    const {countMango, countBanana} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">
            Bob ate <span className="count">{countMango} </span>
            mangoes <span className="count">{countBanana}</span> bananas
          </h1>
          <div className="card">
            <div className="card-container2">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
                className="image"
              />
              <div>
                <button type="button" className="btn" onClick={this.eatMango}>
                  Eat Mango
                </button>
              </div>
            </div>
            <div className="card-container2">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
                className="image"
              />
              <div>
                <button type="button" className="btn" onClick={this.eatBanana}>
                  Eat Banana
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default FruitsCounter
