import './index.css'

const LatestMatch = props => {
  const {details} = props
  const {
    date,
    venue,
    result,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
    manOfTheMatch,
    umpires,
  } = details

  return (
    <div className="latestMatchCard">
      <div className="part1">
        <p className="heading">{competingTeam}</p>
        <p className="date">{date}</p>
        <p className="date">{venue}</p>
        <p className="date">{result}</p>
      </div>
      <img
        src={competingTeamLogo}
        alt={`latest match ${competingTeam}`}
        className="imagecompete"
      />
      <div className="part1">
        <p className="date">First Innings</p>
        <p className="date">{firstInnings}</p>
        <p className="date">Second Innings</p>
        <p className="date">{secondInnings}</p>
        <p className="date">Man Of The Match</p>
        <p className="date">{manOfTheMatch}</p>
        <p className="date">Umpires</p>
        <p className="date">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
