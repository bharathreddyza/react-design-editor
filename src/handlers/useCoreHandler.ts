import { useCallback, useEffect } from 'react'
import { propertiesToInclude } from '../constants/contants'
import { sampleData } from '../constants/sample'
import useCanvas from '../hooks/useCanvas'

function useCoreHandler() {
  const canvas = useCanvas()

  const exportJSON = useCallback(() => {
    const json = canvas.toJSON(propertiesToInclude)
    return json
  }, [canvas])

  const loadJSON = useCallback(
    (json) => {
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
  }, [canvas])

  return { exportJSON, loadJSON }
}

export default useCoreHandler
