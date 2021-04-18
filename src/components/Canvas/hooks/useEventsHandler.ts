import { useCanvasContext } from '@components/Canvas/hooks'
import { useCallback, useEffect } from 'react'

function useEventsHandler() {
  const { canvas } = useCanvasContext()
  const onMouseWheel = useCallback(
    event => {
      if (canvas && event.e.ctrlKey) {
        const delta = event.e.deltaY
        let zoomRatio = canvas.getZoom()
        if (delta > 0) {
          zoomRatio -= 0.04
        } else {
          zoomRatio += 0.04
        }
        // @ts-ignore
        canvas.zoomToPoint({ x: event.e.offsetX, y: event.e.offsetY }, zoomRatio)
      }
      event.e.preventDefault()
      event.e.stopPropagation()
    },
    [canvas]
  )

  useEffect(() => {
    if (canvas) {
      canvas.on('mouse:wheel', onMouseWheel)
    }
    return () => {
      if (canvas) {
        canvas.off('mouse:wheel', onMouseWheel)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [canvas])
}

export default useEventsHandler
