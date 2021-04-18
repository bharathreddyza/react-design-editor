import Navbar from '@components/Navbar/Navbar'
import Sidebar from '@components/Sidebar/Sidebar'
import Toolbox from '@components/Toolbox/Toolbox'
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
