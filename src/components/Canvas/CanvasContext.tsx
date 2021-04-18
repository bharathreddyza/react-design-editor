import * as React from 'react'
import { fabric } from 'fabric'

interface CanvasContext {
  zoomRatio: number
  setZoomRatio: (value: number) => void
  canvas: fabric.Canvas | null
  setCanvas: (canvas: fabric.Canvas) => void
  activeObject: fabric.Object | null
  setActiveObject: (object: fabric.Object | null) => void
}

export const Context = React.createContext<CanvasContext>({
  zoomRatio: 1,
  setZoomRatio: () => {},
  canvas: null,
  setCanvas: () => {},
  activeObject: null,
  setActiveObject: () => {},
})

export const CanvasProvider: React.FC = ({ children }) => {
  const [canvas, setCanvas] = React.useState<fabric.Canvas | null>(null)
  const [activeObject, setActiveObject] = React.useState<fabric.Object | null>(null)
  const [zoomRatio, setZoomRatio] = React.useState(1)
  const context = { canvas, setCanvas, activeObject, setActiveObject, zoomRatio, setZoomRatio }

  return <Context.Provider value={context}>{children}</Context.Provider>
}
