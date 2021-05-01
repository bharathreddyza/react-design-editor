import { useCanvasContext } from '@components/Canvas/hooks'
import { useCallback, useEffect } from 'react'
import { propertiesToInclude } from '../constants/contants'
import { sampleData } from '../constants/sample'

function useCoreHandler() {
  const { canvas } = useCanvasContext()

  const exportJSON = useCallback(() => {
    const json = canvas.toJSON(propertiesToInclude)
    return json
  }, [canvas])

  const loadJSON = useCallback(
    json => {
      if (canvas) {
        canvas.loadFromJSON(json, () => {
          canvas.requestRenderAll()
        })
      }
    },
    [canvas]
  )
  useEffect(() => {
    if (canvas) {
      loadJSON(sampleData)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [canvas])

  const setCanvasBackgroundColor = useCallback(
    color => {
      // @ts-ignore
      const workarea = canvas.getObjects().find(object => object.id === 'workarea')
      if (workarea) {
        workarea.set('fill', color)
        canvas.requestRenderAll()
      }
    },
    [canvas]
  )

  return { exportJSON, loadJSON, setCanvasBackgroundColor }
}

export default useCoreHandler
