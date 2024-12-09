import './index.css'

const TabItem = props => {
  const {tabDetails, clickTabItem, isActive} = props
  const {displayText, tabId} = tabDetails
  const clickTab = () => {
    clickTabItem(tabId)
  }
  const activeTabBtnClassName = isActive ? 'active-btn' : ''
  return (
    <li className="tabContainer">
      <button
        type="button"
        className={`btn ${activeTabBtnClassName}`}
        onClick={clickTab}
      >
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
