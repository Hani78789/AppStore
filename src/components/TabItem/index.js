// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetails, isActive, setActiveTabId} = props
  const {tabId, displayText} = tabDetails

  const tabClassName = isActive ? 'tab-item active-tab' : 'tab-item'

  const onClickTab = () => {
    setActiveTabId(tabId)
  }

  return (
    <li className={tabClassName} onClick={onClickTab}>
      {displayText}
    </li>
  )
}

export default TabItem
