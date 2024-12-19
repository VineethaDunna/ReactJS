import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {
    isLoader: false,
    teamCards: [],
  }

  componentDidMount() {
    this.getTeamsCardsList()
  }

  getTeamsCardsList = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const updateData = data.teams.map(each => ({
      name: each.name,
      id: each.id,
      imgUrl: each.team_image_url,
    }))

    this.setState({
      teamCards: updateData,
      isLoader: false,
    })
  }

  render() {
    const {teamCards, isLoader} = this.state

    return (
      <div className="appContainer">
        <div className="head">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png "
            alt="ipl logo"
            className="logo"
          />
          <h1 className="heading">Ipl Dashboard</h1>
        </div>
        {isLoader ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          <ul className="teamCard">
            {teamCards.map(each => (
              <TeamCard key={each.id} details={each} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default Home
