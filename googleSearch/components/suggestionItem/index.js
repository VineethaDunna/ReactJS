import './index.css'

const SuggestionItem = props => {
  const {suggestions, inputSuggestion} = props
  const {id, suggestion} = suggestions

  return (
    <li className="suggestion">
      <p className="para">{suggestion}</p>
      <img
        id={`arror${id}`}
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
        className="arrow"
        onClick={() => inputSuggestion(id)}
      />
    </li>
  )
}

export default SuggestionItem
