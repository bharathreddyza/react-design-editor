import { FC, createContext, useState } from 'react'
import { fabric } from 'fabric'

interface CanvasContext {
  zoomRatio: number
  setZoomRatio: (value: number) => void
  canvas: fabric.Canvas | null
  setCanvas: (canvas: fabric.Canvas) => void
  activeObject: fabric.Object | null
  setActiveObject: (object: fabric.Object | null) => void
}

export const Context = createContext<CanvasContext>({
  zoomRatio: 1,
  setZoomRatio: () => {},
  canvas: null,
  setCanvas: () => {},
  activeObject: null,
  setActiveObject: () => {},
})

export const CanvasProvider: FC = ({ children }) => {
  const [canvas, setCanvas] = useState<fabric.Canvas | null>(null)
  const [activeObject, setActiveObject] = useState<fabric.Object | null>(null)
  const [zoomRatio, setZoomRatio] = useState(1)
  const context = { canvas, setCanvas, activeObject, setActiveObject, zoomRatio, setZoomRatio }

  return <Context.Provider value={context}>{children}</Context.Provider>
}
