import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {subscribe: false}

  subscribe = () => {
    this.setState(() => {
      console.log('changed')
      return {subscribe: false}
    })
  }

  subscribed = () => {
    this.setState(() => {
      console.log('changed')
      return {subscribe: true}
    })
  }

  render() {
    const {subscribe} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">Welcome</h1>
        <p className="para">Thank you! Happy Learning</p>
        {subscribe && (
          <button className="btn" onClick={this.subscribe}>
            Subscribed
          </button>
        )}
        {!subscribe && (
          <button className="btn" onClick={this.subscribed}>
            Subscribe
          </button>
        )}
      </div>
    )
  }
}
export default Welcome
