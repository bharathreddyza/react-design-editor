import { useInstance } from '@backium/use-instance'
import { fabric } from 'fabric'
import { useEffect, useState } from 'react'

function useCanvas() {
  const [canvas, setCanvas] = useState<fabric.Canvas>()
  const { instances, getInstance } = useInstance()

  useEffect(() => {
    const canvasInstance = getInstance<fabric.Canvas>('canvas')
    if (canvasInstance) {
      setCanvas(canvasInstance)
    }
  }, [instances, canvas])

  return canvas
}

export default useCanvas
