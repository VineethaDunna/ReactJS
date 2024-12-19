import './index.css'

const TabsItem = props => {
  const {tabdetails, tabClick} = props
  const {tabId, displayText} = tabdetails

  const ontabclick = () => {
    tabClick(tabId)
  }

  return (
    <li className="listings">
      <button type="button" className="tabactive" onClick={ontabclick}>
        {displayText}
      </button>
    </li>
  )
}

export default TabsItem
