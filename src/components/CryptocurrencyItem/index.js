import './index.css'

const CryptocurrencyItem = props => {
  const {details} = props
  const {currencyName, usd, euro, logo} = details

  return (
    <ul className="dataList">
      <li className="firstcol">
        <img src={logo} alt={currencyName} className="logo" />
        <p>{currencyName}</p>
      </li>
      <li className="secondcol">
        <p>{usd}</p>
      </li>
      <li className="secondcol">
        <p>{euro}</p>
      </li>
    </ul>
  )
}

export default CryptocurrencyItem
