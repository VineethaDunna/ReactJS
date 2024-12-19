import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import CryptocurrencyItem from '../CryptocurrencyItem'

import './index.css'

class CryptocurrenciesList extends Component {
  state = {
    isLoading: true,
    currencyList: [],
  }

  componentDidMount() {
    this.getCurrencyData()
  }

  getCurrencyData = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const updateData = data.map(each => ({
      currencyName: each.currency_name,
      usd: each.usd_value,
      euro: each.euro_value,
      id: each.id,
      logo: each.currency_logo,
    }))

    this.setState({
      currencyList: updateData,
      isLoading: false,
    })
  }

  renderCurrencyList = () => {
    const {currencyList} = this.state

    return (
      <>
        <h1 className="heading">Cryptocurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
          className="bgImage"
        />
        <ul className="currencyList">
          <ul className="headerTab">
            <li className="firstcol"> Coin Type</li>
            <li className="secondcol"> USD</li>
            <li className="secondcol"> EURO</li>
          </ul>

          {currencyList.map(each => (
            <CryptocurrencyItem key={each.id} details={each} />
          ))}
        </ul>
      </>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div className="listContainer">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          this.renderCurrencyList()
        )}
      </div>
    )
  }
}

export default CryptocurrenciesList
