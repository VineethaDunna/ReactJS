import './index.css'

const ThumbnailItem = props => {
  const {itemDetails, onClickDisplayImage, activeClass} = props
  const {id, thumbnailUrl, thumbnailAltText} = itemDetails
  const displayImage = () => {
    onClickDisplayImage(id)
  }
  const activeThumbnail = activeClass ? 'activeThumbnail' : 'smallImage'
  return (
    <li className="listItem">
      <img
        src={thumbnailUrl}
        className={activeThumbnail}
        alt={thumbnailAltText}
        id={id}
        onClick={displayImage}
      />
    </li>
  )
}

export default ThumbnailItem
