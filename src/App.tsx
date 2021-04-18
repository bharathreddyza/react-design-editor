//@ts-check
import { useInstance } from '@backium/use-instance';
import { useEffect } from 'react';
import useFabricSettings from './hooks/useFabricSettings';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Toolbox from './components/Toolbox';
import { fabric } from 'fabric';
import useContainerHandler from './handlers/useContainerHandler';
import useEventsHandler from './handlers/useEventsHandler';

function App() {
  const { setInstance } = useInstance();
  const containerRef = useContainerHandler();
  useFabricSettings();
  useEventsHandler();

  useEffect(() => {
    const initialHeigh = containerRef.current.clientHeight;
    const initialWidth = containerRef.current.clientWidth;
    const canvasInstance = new fabric.Canvas('canvas', {
      backgroundColor: '#ecf0f1',
      height: initialHeigh,
      width: initialWidth,
    });
    setInstance('canvas', canvasInstance);
  }, []);

  return (
    <div className="container">
      <Navbar />
      <div className="editor-content">
        <Sidebar />
        <div className="editor">
          <Toolbox />
          <div className="editor-canvas" ref={containerRef}>
            <canvas id="canvas"></canvas>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
