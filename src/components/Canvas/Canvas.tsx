import { useEffect } from 'react'
import {
  useCanvasContext,
  useContainerHandler,
  useFabricSettings,
  useEventsHandler,
} from '@components/Canvas/hooks'
import { fabric } from 'fabric'

function Canvas() {
  const containerRef = useContainerHandler()
  const { setCanvas } = useCanvasContext()
  useFabricSettings()
  useEventsHandler()
  useEffect(() => {
    const initialHeigh = containerRef.current.clientHeight
    const initialWidth = containerRef.current.clientWidth
    setCanvas(
      new fabric.Canvas('canvas', {
        backgroundColor: '#ecf0f1',
        height: initialHeigh,
        width: initialWidth,
      })
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <div className="editor-canvas" ref={containerRef}>
      <canvas id="canvas"></canvas>
    </div>
  )
}

export default Canvas
