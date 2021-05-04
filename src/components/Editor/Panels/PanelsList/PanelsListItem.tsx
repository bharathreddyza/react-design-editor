import classNames from 'classnames'
import PanelItemIcon from './PanelItemIcon'
// import "./Item.less"

interface Props {
  activeTab: string
  label: string
  icon: string
  name: string
  panelOpen: boolean
  setActiveTab: React.Dispatch<React.SetStateAction<string>>
  setPanelOpen: React.Dispatch<React.SetStateAction<boolean>>
}

function PanelItem(props: Props) {
  const { setActiveTab, label, icon, name, activeTab, setPanelOpen } = props
  const className = classNames({
    'panel-items-list-item': true,
    active: activeTab === name,
  })

  return (
    <div
      className={className}
      onClick={() => {
        setPanelOpen(true)
        setActiveTab(name)
      }}
    >
      {PanelItemIcon[icon].render()}
      <span>{label}</span>
    </div>
  )
}

export default PanelItem
