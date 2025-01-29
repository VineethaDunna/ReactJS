import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LanguageFilterItem from '../LanguageFilterItem'
import RepositoryItem from '../RepositoryItem'
import './index.css'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

class GithubPopularRepos extends Component {
  state = {
    itemsData: [],
    isLoading: false,
    optionId: languageFiltersData[0].id,
    isError: false,
  }

  componentDidMount() {
    this.getItemsList()
  }

  getItemsList = async () => {
    this.setState({
      isLoading: true,
      isError: false,
    })

    const {optionId} = this.state
    const apiUrl = `https://apis.ccbp.in/popular-repos?language=${optionId}`

    const response = await fetch(apiUrl)
    if (response.ok) {
      const data = await response.json()
      const updatedData = data.popular_repos.map(repo => ({
        id: repo.id,
        name: repo.name,
        issuesCount: repo.issues_count,
        forksCount: repo.forks_count,
        starsCount: repo.stars_count,
        avatarUrl: repo.avatar_url,
      }))
      this.setState({itemsData: updatedData, isLoading: false})
    } else {
      this.setState({isLoading: false, isError: true})
    }
  }

  changeLanguage = id => {
    this.setState({optionId: id}, this.getItemsList)
  }

  renderLoader = () => (
    <div data-testid="loader">
      <Loader type="ThreeDots" color="#0284c7" height={80} width={80} />
    </div>
  )

  renderErrorView = () => (
    <p className="error-message">Failed to fetch repositories</p>
  )

  render() {
    const {itemsData, isError, optionId, isLoading} = this.state
    return (
      <div className="appContainer">
        <h1 className="head">Popular</h1>
        <ul className="tabsList">
          {languageFiltersData.map(each => (
            <LanguageFilterItem
              key={each.id}
              details={each}
              isActive={optionId === each.id}
              changeLanguage={this.changeLanguage}
            />
          ))}
        </ul>
        {isLoading ? (
          this.renderLoader()
        ) : (
          <ul className="itemsList">
            {itemsData.map(each => (
              <RepositoryItem key={each.id} itemDetails={each} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default GithubPopularRepos
