import './index.css'

const LanguageFilterItem = props => {
  const {details, isActive, changeLanguage} = props

  const {id, language} = details
  const onClickTab = () => changeLanguage(id)

  const tabClassName = isActive ? 'active-tab' : 'tab'
  return (
    <button className={tabClassName} onClick={onClickTab}>
      {language}
    </button>
  )
}

export default LanguageFilterItem
