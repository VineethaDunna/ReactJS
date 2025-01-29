import './index.css'

const RepositoryItem = props => {
  const {itemDetails} = props
  const {name, issuesCount, forksCount, starsCount, avatarUrl} = itemDetails

  return (
    <li className="repository-item">
      <img src={avatarUrl} className="avatarimage" alt={name} />
      <h1 className="heading">{name}</h1>
      <div className="items">
        <img
          src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
          alt="stars"
          className="logo"
        />
        <p>{starsCount} stars</p>
      </div>
      <div className="items">
        <img
          src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
          alt="forks"
          className="logo"
        />
        <p>{forksCount} forks</p>
      </div>
      <div className="items">
        <img
          src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
          alt="open issues"
          className="logo"
        />
        <p>{issuesCount} issues</p>
      </div>
    </li>
  )
}

export default RepositoryItem
