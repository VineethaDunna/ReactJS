import './index.css'

const PasswordItem = props => {
  const {itemdetails, passwordHidden, deletePassword} = props
  const {id, username, password, website} = itemdetails

  const passwordDelete = () => {
    deletePassword(id)
  }

  return (
    <li className="PasswordItem">
      <p className="userProfile">{username[0]}</p>
      <div className="details">
        <p className="name">{website}</p>
        <p className="name">{username}</p>

        {passwordHidden ? (
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
            alt="stars"
            className="starsImg"
          />
        ) : (
          <p className="name">{password}</p>
        )}
      </div>
      <button
        type="button"
        data-testid="delete"
        className="deleteBtn"
        onClick={passwordDelete}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          className="deleteImg"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default PasswordItem
