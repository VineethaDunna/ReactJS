import './index.css'

const AppItem = props => {
  const {appDetails} = props
  const {appName, imageUrl, category} = appDetails
  return (
    <li className="appContainer">
      <img src={imageUrl} className="appImage" alt={appName} value={category} />
      <p className="title">{appName}</p>
    </li>
  )
}
export default AppItem
