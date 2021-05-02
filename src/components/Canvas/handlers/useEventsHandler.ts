import { useCallback, useEffect } from 'react'
import { useCanvasContext } from '@components/Canvas/hooks'
import { isArrow, isCtrlShiftZ, isCtrlZ } from '../utils/keyboard'

function useEventHandlers() {
  const { canvas, setActiveObject, activeObject, setZoomRatio } = useCanvasContext()

  /**
   * Canvas Mouse wheel handler
   */

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
        setZoomRatio(zoomRatio)
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
  }, [canvas])

  /**
   * Canvas selection handlers
   */

  const onSelect = useCallback(
    ({ target }) => {
      if (target) {
        if (canvas) {
          console.log(canvas.getActiveObject())
          setActiveObject(canvas.getActiveObject())
        }
      } else {
        setActiveObject(null)
      }
    },
    [canvas]
  )

  useEffect(() => {
    if (canvas) {
      canvas.on('selection:created', onSelect)
      canvas.on('selection:cleared', onSelect)
      canvas.on('selection:updated', onSelect)
    }
    return () => {
      if (canvas) {
        canvas.off('selection:cleared', onSelect)
        canvas.off('selection:created', onSelect)
        canvas.off('selection:updated', onSelect)
      }
    }
  }, [canvas])

  /**
   * Keyboard Events Handler
   */

  const undo = useCallback(() => {
    // @ts-ignore
    canvas?.undo()
  }, [canvas])

  const redo = useCallback(() => {
    // @ts-ignore
    canvas?.redo()
  }, [canvas])

  const moveUp = useCallback(() => {
    if (activeObject && canvas) {
      activeObject.top = activeObject.top - 2
      activeObject.setCoords()
      canvas.requestRenderAll()
    }
  }, [activeObject, canvas])

  const moveDown = useCallback(() => {
    if (activeObject && canvas) {
      activeObject.top = activeObject.top + 2
      activeObject.setCoords()
      canvas.requestRenderAll()
    }
  }, [activeObject, canvas])

  const moveRight = useCallback(() => {
    if (activeObject && canvas) {
      activeObject.left = activeObject.left + 2
      activeObject.setCoords()
      canvas.requestRenderAll()
    }
  }, [activeObject, canvas])

  const moveLeft = useCallback(() => {
    if (activeObject && canvas) {
      activeObject.left = activeObject.left - 2
      activeObject.setCoords()
      canvas.requestRenderAll()
    }
  }, [activeObject, canvas])

  const onKeyDown = useCallback(
    e => {
      isCtrlZ(e) && undo()
      isCtrlShiftZ(e) && redo()
      if (isArrow(e)) {
        e.code === 'ArrowLeft' && moveLeft()
        e.code === 'ArrowRight' && moveRight()
        e.code === 'ArrowDown' && moveDown()
        e.code === 'ArrowUp' && moveUp()
      }
    },
    [canvas, activeObject]
  )
  useEffect(() => {
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [canvas, activeObject])
}

export default useEventHandlers
