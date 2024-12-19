import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {details} = props
  const {id, name, imgUrl} = details
  return (
    <li className="listItem">
      <Link to={`/team-matches/${id}`} className="linkItem">
        <img src={imgUrl} alt={name} className="iplImg" />
        <p className="name">{name}</p>
      </Link>
    </li>
  )
}

export default TeamCard
