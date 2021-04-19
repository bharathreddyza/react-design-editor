import { useCanvasContext } from '@components/Canvas/hooks'
import { createRef, useCallback, useEffect } from 'react'

function useContainerHandler() {
  const containerRef = createRef<HTMLDivElement>()
  const { canvas } = useCanvasContext()
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [canvas])

  return containerRef
}

export default useContainerHandler
