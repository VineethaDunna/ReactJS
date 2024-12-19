import './index.css'
import {format} from 'date-fns'

const AppointmentItem = props => {
  const {listDetails, onStarred} = props
  const {title, date, id, star} = listDetails
  const formattedDate = format(new Date(date), 'dd MMMM yyyy, EEEE')

  const starred = () => {
    onStarred(id)
  }
  const isStarred = !star
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'

  return (
    <li className="listItem">
      <div className="headSection">
        <h1 className="head">{title}</h1>
        <button data-testid="star" onClick={starred} className="starbtn">
          <img src={isStarred} className="star" alt="star" />
        </button>
      </div>
      <p className="span">{formattedDate}</p>
    </li>
  )
}

export default AppointmentItem
