import ImagesPanel from '../ImagesPanel/ImagesPanel'
import MusicPanel from '../MusicPanel/MusicPanel'
import ObjectsPanel from '../ObjectsPanel/ObjectsPanel'
import TemplatesPanel from '../TemplatesPanel/TemplatesPanel'
import TextPanel from '../TextPanel/TextPanel'
import VideosPanel from '../VideosPanel/VideosPanel'
import { Scrollbars } from 'react-custom-scrollbars'
import classNames from 'classnames'
import './PanelItem.scss'

interface Props {
  panelOpen: boolean
  activeTab: string
}
function PanelItem({ panelOpen, activeTab }: Props) {
  const className = classNames({
    'panel-item-container': true,
    open: panelOpen,
  })

  return (
    <div className={className}>
      <div className="panel-item">
        <Scrollbars
          renderThumbVertical={() => <div style={{ background: 'rgba(255,255,255,0.3)' }}></div>}
          autoHide
        >
          {activeTab === 'text' && <TextPanel />}
          {activeTab === 'images' && <ImagesPanel />}
          {activeTab === 'musics' && <MusicPanel />}
          {activeTab === 'objects' && <ObjectsPanel />}
          {activeTab === 'templates' && <TemplatesPanel />}
          {activeTab === 'videos' && <VideosPanel />}
        </Scrollbars>
      </div>
    </div>
  )
}

export default PanelItem
