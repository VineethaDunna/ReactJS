import './index.css'

const ImagesDisplay = props => {
  const {imagedetails, ismatch} = props
  const {id, thumbnailUrl} = imagedetails

  const matchimage = () => {
    ismatch(id)
  }
  return (
    <li className="listings">
      <button
        type="button"
        className="activeImg"
        data-testid={id}
        onClick={matchimage}
      >
        <img src={thumbnailUrl} alt="thumbnail" className="thumbnail" />
      </button>
    </li>
  )
}

export default ImagesDisplay
