import './index.css'

const FeedbackItem = ({resourceItem, buttonClick}) => {
  const {name, imageUrl} = resourceItem
  return (
    <li className="eachitem">
      <img src={imageUrl} className="logo" alt={name} onClick={buttonClick} />
      <p>{name}</p>
    </li>
  )
}

export default FeedbackItem
