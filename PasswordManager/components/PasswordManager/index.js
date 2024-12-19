import {Component} from 'react'
import {v4} from 'uuid'
import PasswordItem from '../PasswordItem'
import './index.css'

class PasswordManager extends Component {
  state = {
    passwordsList: [],
    passwordHidden: true,
    websiteInput: '',
    usernameInput: '',
    passwordInput: '',
    searchInput: '',
  }

  onChangewebsite = event => {
    this.setState({
      websiteInput: event.target.value,
    })
  }

  onChangeusername = event => {
    this.setState({
      usernameInput: event.target.value,
    })
  }

  onChangepassword = event => {
    this.setState({
      passwordInput: event.target.value,
    })
  }

  onSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  deletePassword = id => {
    this.setState(prev => ({
      passwordsList: prev.passwordsList.filter(each => each.id !== id),
    }))
  }

  onAddPassword = event => {
    event.preventDefault()
    const {websiteInput, usernameInput, passwordInput, passwordsList} =
      this.state
    const newPassword = {
      id: v4(),
      website: websiteInput,
      username: usernameInput,
      password: passwordInput,
    }
    console.log(passwordsList)
    this.setState({
      passwordsList: [...passwordsList, newPassword],
      websiteInput: '',
      usernameInput: '',
      passwordInput: '',
    })
  }

  togglePasswordHidden = () => {
    this.setState(prev => ({
      passwordHidden: !prev.passwordHidden,
    }))
  }

  render() {
    const {
      websiteInput,
      searchInput,
      usernameInput,
      passwordInput,
      passwordsList,
      passwordHidden,
    } = this.state

    const filteredList = passwordsList.filter(each =>
      each.website.toLowerCase().includes(searchInput.toLowerCase()),
    )
    const passwordLength = filteredList.length

    return (
      <div className="appContainer">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png "
          alt="app logo"
          className="logo"
        />
        <div className="card">
          <form className="card1" onSubmit={this.onAddPassword}>
            <h1 className="para1">Add New Password</h1>
            <div className="input">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                alt="website"
                className="icon"
              />
              <input
                type="text"
                placeholder="Enter Website"
                className="inputBox"
                value={websiteInput}
                onChange={this.onChangewebsite}
              />
            </div>

            <div className="input">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                alt="username"
                className="icon"
              />
              <input
                type="text"
                placeholder="Enter Username"
                className="inputBox"
                value={usernameInput}
                onChange={this.onChangeusername}
              />
            </div>
            <div className="input">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png "
                alt="password"
                className="icon"
              />
              <input
                type="password"
                placeholder="Enter Password"
                className="inputBox"
                value={passwordInput}
                onChange={this.onChangepassword}
              />
            </div>
            <div className="buttonDiv">
              <button type="submit" className="btn">
                Add
              </button>
            </div>
          </form>
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
            alt="password manager"
            className="passwordImage"
          />
        </div>
        <div id="card" className="card">
          <div className="headline">
            <div className="head">
              <h1 className="head">Your Passwords </h1>
              <p className="spanCard"> {passwordLength}</p>
            </div>
            <div id="Searchinput" className="input ">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                alt="search"
                className="icon"
              />
              <input
                type="search"
                className="inputBox"
                value={searchInput}
                onChange={this.onSearchInput}
              />
            </div>
          </div>
          <hr className="hline" />
          <div className="check">
            <input
              type="checkbox"
              className="checkBox"
              id="show/hide"
              onClick={this.togglePasswordHidden}
            />
            <label htmlFor="show/hide">
              {passwordHidden ? 'Show Passwords' : 'Hide Passwords'}
            </label>
          </div>
          <div className="passwordsShowing">
            {passwordLength ? (
              <ul className="passwordLists">
                {filteredList.map(each => (
                  <PasswordItem
                    key={each.id}
                    itemdetails={each}
                    passwordHidden={passwordHidden}
                    deletePassword={this.deletePassword}
                  />
                ))}
              </ul>
            ) : (
              <div className="noPasswords">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                  alt="no passwords"
                  className="noPassImg"
                />
                <p className="para">No Passwords</p>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default PasswordManager
