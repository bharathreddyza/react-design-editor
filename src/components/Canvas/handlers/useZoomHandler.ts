import { fabric } from 'fabric'
import { useCallback, useEffect } from 'react'
import { useCanvasContext } from '@components/Canvas/hooks'

function useZoomHandler() {
  const { canvas, zoomRatio } = useCanvasContext()

  const updateZoom = useCallback(
    (zoomRatio: number) => {
      if (canvas) {
        canvas.zoomToPoint(new fabric.Point(canvas.getWidth() / 2, canvas.getHeight() / 2), zoomRatio)
      }
    },
    [canvas]
  )

  useEffect(() => {
    updateZoom(zoomRatio)
  }, [zoomRatio])
}

export default useZoomHandler
