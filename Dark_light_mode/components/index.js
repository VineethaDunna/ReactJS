import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {mode: true}

  lightMode = () => {
    this.setState(() => {
      console.log('clicked')
      return {mode: false}
    })
  }

  darkMode = () => {
    this.setState(() => {
      console.log('clicked')
      return {mode: true}
    })
  }

  render() {
    const {mode} = this.state
    return (
      <div className="bg-container">
        {mode ? (
          <div className="card Dark">
            <h1 className="heading Dark">click To Change mode</h1>
            <div className="button Dark">
              <button
                type="button"
                className="btn Dark"
                onClick={this.lightMode}
              >
                Light Mode
              </button>
            </div>
          </div>
        ) : (
          <div className="card Light">
            <h1 className="heading Light">click To Change mode</h1>
            <div className="button Light">
              <button
                type="button"
                className="btn Light"
                onClick={this.darkMode}
              >
                Dark Mode
              </button>
            </div>
          </div>
        )}
      </div>
    )
  }
}
export default LightDarkMode
