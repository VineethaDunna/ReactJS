import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {
    first: false,
    last: false,
  }

  first = () => {
    this.setState(prevState => {
      console.log('click')
      return {first: !prevState.first}
    })
  }

  last = () => {
    this.setState(prevState => {
      console.log('click')
      return {last: !prevState.last}
    })
  }

  render() {
    const {first, last} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="buttons">
          <button type="button" className="btn" onClick={this.first}>
            Show/Hide Firstname
          </button>
          <button type="button" className="btn" onClick={this.last}>
            Show/Hide Lastname
          </button>
        </div>
        <div className="cards">
          {first && (
            <div className="card1">
              <p className="para">Joe</p>
            </div>
          )}
          {last && (
            <div className="card1">
              <p className="para">Jonas</p>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default ShowHide

