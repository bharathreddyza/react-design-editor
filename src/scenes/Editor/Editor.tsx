import Navbar from '@components/Navbar/Navbar'
import Sidebar from '@scenes/Editor/Sidebar/Sidebar'
import Toolbox from '@scenes/Editor/Toolbox/Toolbox'
import Canvas from '@components/Canvas'

function App() {
  return (
    <div className="container">
      <Navbar />
      <div className="editor-content">
        <Sidebar />
        <div className="editor">
          <Toolbox />
          <Canvas />
        </div>
      </div>
    </div>
  )
}

export default App
