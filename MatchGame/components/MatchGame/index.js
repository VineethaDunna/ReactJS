import {Component} from 'react'
import {v4} from 'uuid'
import TabsItem from '../TabsItem'

import ImagesDisplay from '../ImagesDisplay'
import './index.css'

class MatchGame extends Component {
  state = {
    activeTab: this.props.tabsList[0].tabId,
    activeImg: this.props.imagesList[0].id,
    score: 0,
    time: 60,
    matched: true,
    intervalId: NaN,
    gameover: false,
  }

  componentDidMount() {
    this.startTimer()
  }

  resetGame = () => {
    this.componentDidMount()
    this.setState(prevState => ({
      score: 0,
      time: 60,
      gameover: !prevState.gameover,
    }))
  }

  startTimer = () => {
    this.timerInterval = setInterval(() => {
      this.setState(
        prevState => ({
          time: prevState.time - 1,
        }),
        () => {
          if (this.state.time === 0) {
            clearInterval(this.timerInterval)
            this.setState({gameover: true})
          }
        },
      )
    }, 1000)
  }

  onTabFilteredImages = tabId => {
    this.setState({
      activeTab: tabId,
    })
  }

  generateRandomImage = () => {
    const {imagesList} = this.props
    const imageIndex = Math.floor(Math.random() * imagesList.length)
    this.setState({
      activeImg: imagesList[imageIndex].id,
    })
  }

  ismatch = id => {
    const {activeImg} = this.state
    if (id === activeImg) {
      this.setState(prev => ({
        score: prev.score + 1,
        activeImg: this.generateRandomImage(),
      }))
    } else {
      this.setState(prev => ({
        matched: !prev.matched,
        gameover: !prev.gameover,
      }))
    }
  }

  render() {
    const {tabsList, imagesList} = this.props
    const {score, time, activeTab, activeImg, gameover} = this.state
    const filteredList = imagesList.filter(each => each.category === activeTab)
    const bigImageDetails = imagesList.find(each => each.id === activeImg)
    const bigImageUrl = bigImageDetails.imageUrl

    return (
      <div className="appContainer">
        <div className="header">
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
              className="logo"
              alt="website logo"
            />
          </div>
          <ul className="scoreBoard">
            <li>
              <p className="score">Score:</p>
            </li>
            <p className="span"> {score}</p>
            <img
              src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
              className="timer"
              alt="timer"
            />
            <li>
              <p className="span">{time} sec</p>
            </li>
          </ul>
        </div>
        {gameover ? (
          <div className="gameover">
            <div className="gamecard">
              <img
                src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png "
                alt="trophy"
                className="trophy"
              />
              <p className="para">YOUR SCORE</p>
              <p className="scoreValue">{score}</p>
              <button
                type="button"
                className="playbtn"
                onClick={this.resetGame}
              >
                <img
                  src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
                  alt="reset"
                  className="reset"
                />
                PLAY AGAIN
              </button>
            </div>
          </div>
        ) : (
          <div className="body">
            <img src={bigImageUrl} alt="match" className="fullPicture" />

            <ul className="tabslist">
              {tabsList.map(each => (
                <TabsItem
                  key={each.tabId}
                  tabdetails={each}
                  tabClick={this.onTabFilteredImages}
                />
              ))}
            </ul>
            <ul className="imagelist">
              {filteredList.map(each => (
                <ImagesDisplay
                  key={each.id}
                  imagedetails={each}
                  ismatch={this.ismatch}
                />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default MatchGame
