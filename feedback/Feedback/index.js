import {Component} from 'react'
import './index.css'
import FeedbackItem from '../FeedbackItem'

class Feedback extends Component {
  state = {
    click: true,
  }

  buttonClick = () => {
    this.setState(prevState => ({
      click: !prevState.click,
    }))
  }

  render() {
    const {click} = this.state
    const {resources} = this.props
    const {emojis} = resources
    return (
      <div className="bg-container">
        <div className="card">
          <div className="items">
            {click ? (
              <fragment>
                <h1 className="heading">
                  How satisfied are you with our customer support performance?
                </h1>
                <ul className="items">
                  {emojis.map(each => (
                    <FeedbackItem
                      key={each.id}
                      resourceItem={each}
                      buttonClick={this.buttonClick}
                    />
                  ))}
                </ul>
              </fragment>
            ) : (
              <div className="eachitem">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/love-emoji-img.png"
                  className="logo"
                  alt="love emoji"
                />
                <h1>Thank you</h1>
                <p>
                  We will use your feedback to improve our customer support
                  performance.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default Feedback
