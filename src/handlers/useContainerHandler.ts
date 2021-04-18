import { createRef, useCallback, useEffect } from 'react'
import useCanvas from '../hooks/useCanvas'

function useContainerHandler() {
  const containerRef = createRef<HTMLDivElement>()
  const canvas = useCanvas()
  const updateCanvasSize = useCallback(
    (x, y) => {
      if (canvas) {
        canvas.setHeight(y).setWidth(x)
        canvas.renderAll()
        // @ts-ignore
        const workarea = canvas.getObjects().find(obj => obj.id === 'workarea')
        if (workarea) {
          workarea.center()
        }
      }
    },
    [canvas]
  )
  useEffect(() => {
    const containerWidth = containerRef.current.clientWidth
    const containerHeight = containerRef.current.clientHeight
    updateCanvasSize(containerWidth, containerHeight)
  }, [canvas])

  useEffect(() => {
    if (canvas) {
      canvas.selectionColor = 'rgba(46, 204, 113, 0.15)'
      canvas.selectionBorderColor = 'rgb(39, 174, 96)'
      canvas.selectionLineWidth = 0.4
    }
  }, [canvas])

  useEffect(() => {
    if (canvas) {
      canvas.on('selection:created', function (ev) {
        //  ev.target.borderOpacityWhenMoving = 0;

        const objects = canvas.getActiveObjects()
        if (objects.length > 1) {
          ev.target.setControlsVisibility({
            mt: false,
            mb: false,
            mr: false,
            ml: false,
          })
          ev.target.borderDashArray = [7]
        }
      })
    }
  }, [canvas])

  //useEffect(())
  return containerRef
}

export default useContainerHandler
