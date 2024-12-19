// Write your code here
import './index.css'

const MatchCard = props => {
  const {matchDetails} = props
  const {result, competingTeam, competingTeamLogo, matchStatus} = matchDetails
  const matchClass = matchStatus === 'Lost' ? 'matchLost' : 'matchWin'
  return (
    <li className="listCard">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="imagecompete1"
      />
      <p className="head1">{competingTeam}</p>
      <p className="head1">{result}</p>
      <p className={matchClass}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
