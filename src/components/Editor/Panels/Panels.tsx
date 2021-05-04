import { useState } from 'react'
import ClosePanel from './ClosePanel'
import PanelItemsList from './PanelsList/PanelsList'
import PanelItem from './PanelItem/PanelItem'
import './Panels.scss'

function Panels() {
  const [panelOpen, setPanelOpen] = useState(true)
  const [activeTab, setActiveTab] = useState('objects')

  const closePanel = () => {
    setPanelOpen(!panelOpen)
  }
  return (
    <div className="panels">
      <PanelItemsList
        setPanelOpen={setPanelOpen}
        panelOpen={panelOpen}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <PanelItem activeTab={activeTab} panelOpen={panelOpen} />
      <ClosePanel closePanel={closePanel} />
    </div>
  )
}

export default Panels
