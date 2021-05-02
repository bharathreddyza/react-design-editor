import Navbar from '@scenes/Editor/Navbar/Navbar'
import Panels from '@scenes/Editor/Panels/Panels'
import FooterMenu from '@scenes/Editor/FooterMenu/FooterMenu'
import Toolbox from '@scenes/Editor/Toolbox/Toolbox'
import CanvasArea from '@scenes/Editor/CanvasArea/CanvasArea'
import './Editor.scss'

function Editor() {
  return (
    <div className="editor">
      <Navbar />
      <div className="section-two">
        <Panels />
        <div className="section-three">
          <Toolbox />
          <CanvasArea />
          <FooterMenu />
        </div>
      </div>
    </div>
  )
}

export default Editor
