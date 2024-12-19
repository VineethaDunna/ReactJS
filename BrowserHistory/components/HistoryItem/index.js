import './index.css'

const HistoryItem = props => {
  const {item, onDeleteItem} = props
  const {id, timeAccessed, logoUrl, domainUrl, title} = item

  const deleteItem = () => {
    onDeleteItem(id)
  }
  return (
    <li className="item">
      <div className="eachitem">
        <p className="time">{timeAccessed}</p>
        <img src={logoUrl} className="logo" alt="domain logo" />
        <p>
          {title}
          <p className="url"> {domainUrl}</p>
        </p>
        <button
          data-testid="delete"
          className="button"
          type="button"
          onClick={deleteItem}
        >
          <img
            id={`delete${id}`}
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            className="deleteIcon"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default HistoryItem
