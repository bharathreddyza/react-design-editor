// @ts-nocheck
import { useEffect } from 'react'
import { fabric } from 'fabric'
import {
  drawCircleIcon,
  drawVerticalLineIcon,
  drawHorizontalLineIcon,
  drawRotateIcon,
} from '@components/Canvas/utils'
import { useCanvasContext } from '@components/Canvas/hooks'

function useCustomizationHandler() {
  const { canvas } = useCanvasContext()

  /**
   * Customize fabric controls
   */
  useEffect(() => {
    fabric.Object.prototype.transparentCorners = false
    fabric.Object.prototype.cornerColor = '#20bf6b'
    fabric.Object.prototype.cornerStyle = 'circle'
    fabric.Object.prototype.borderColor = '#00D9E1'
    fabric.Object.prototype.cornerSize = 12
    fabric.Object.prototype.borderScaleFactor = 2.4
    fabric.Object.prototype.borderOpacityWhenMoving = 0

    fabric.Object.prototype.controls.tr = new fabric.Control({
      x: 0.5,
      y: -0.5,
      actionHandler: fabric.controlsUtils.scalingEqually,
      cursorStyleHandler: fabric.controlsUtils.scaleSkewCursorStyleHandler,
      actionName: fabric.controlsUtils.scaleOrSkewActionName,
      render: drawCircleIcon,
      cornerSize: 28,
      withConnection: true,
    })

    fabric.Object.prototype.controls.tl = new fabric.Control({
      x: -0.5,
      y: -0.5,
      actionHandler: fabric.controlsUtils.scalingEqually,
      cursorStyleHandler: fabric.controlsUtils.scaleSkewCursorStyleHandler,
      actionName: fabric.controlsUtils.scaleOrSkewActionName,
      render: drawCircleIcon,
      cornerSize: 28,
      withConnection: true,
    })

    fabric.Object.prototype.controls.bl = new fabric.Control({
      x: -0.5,
      y: 0.5,
      actionHandler: fabric.controlsUtils.scalingEqually,
      cursorStyleHandler: fabric.controlsUtils.scaleSkewCursorStyleHandler,
      actionName: fabric.controlsUtils.scaleOrSkewActionName,
      render: drawCircleIcon,
      cornerSize: 28,
      withConnection: true,
    })

    fabric.Object.prototype.controls.br = new fabric.Control({
      x: 0.5,
      y: 0.5,
      actionHandler: fabric.controlsUtils.scalingEqually,
      cursorStyleHandler: fabric.controlsUtils.scaleSkewCursorStyleHandler,
      actionName: fabric.controlsUtils.scaleOrSkewActionName,
      render: drawCircleIcon,
      cornerSize: 28,
      withConnection: true,
    })

    fabric.Object.prototype.controls.ml = new fabric.Control({
      x: -0.5,
      y: 0,
      actionHandler: fabric.controlsUtils.scalingXOrSkewingY,
      cursorStyleHandler: fabric.controlsUtils.scaleSkewCursorStyleHandler,
      actionName: fabric.controlsUtils.scaleOrSkewActionName,
      render: drawVerticalLineIcon,
      cornerSize: 28,
      withConnection: true,
    })

    fabric.Object.prototype.controls.mt = new fabric.Control({
      x: 0,
      y: -0.5,
      actionHandler: fabric.controlsUtils.scalingYOrSkewingX,
      cursorStyleHandler: fabric.controlsUtils.scaleSkewCursorStyleHandler,
      actionName: fabric.controlsUtils.scaleOrSkewActionName,
      render: drawHorizontalLineIcon,
      cornerSize: 28,
      withConnection: true,
    })

    fabric.Object.prototype.controls.mb = new fabric.Control({
      x: 0,
      y: 0.5,
      actionHandler: fabric.controlsUtils.scalingYOrSkewingX,
      cursorStyleHandler: fabric.controlsUtils.scaleSkewCursorStyleHandler,
      actionName: fabric.controlsUtils.scaleOrSkewActionName,
      render: drawHorizontalLineIcon,
      cornerSize: 28,
      withConnection: true,
    })

    fabric.Object.prototype.controls.mr = new fabric.Control({
      x: 0.5,
      y: 0,
      actionHandler: fabric.controlsUtils.scalingXOrSkewingY,
      cursorStyleHandler: fabric.controlsUtils.scaleSkewCursorStyleHandler,
      actionName: fabric.controlsUtils.scaleOrSkewActionName,
      render: drawVerticalLineIcon,
      cornerSize: 28,
      withConnection: true,
    })

    fabric.Object.prototype.controls.mtr = new fabric.Control({
      x: 0,
      y: -0.5,
      offsetY: -40,
      actionHandler: fabric.controlsUtils.rotationWithSnapping,
      cursorStyleHandler: fabric.controlsUtils.rotationStyleHandler,
      actionName: 'rotate',
      render: drawRotateIcon,
      cornerSize: 28,
      withConnection: false,
    })

    // Texbox controls
    fabric.Textbox.prototype.controls.tr = fabric.Object.prototype.controls.tr
    fabric.Textbox.prototype.controls.tl = fabric.Object.prototype.controls.tl
    fabric.Textbox.prototype.controls.bl = fabric.Object.prototype.controls.bl
    fabric.Textbox.prototype.controls.br = fabric.Object.prototype.controls.br

    fabric.Textbox.prototype.controls.mt = new fabric.Control({
      render: () => false,
    })

    fabric.Textbox.prototype.controls.mb = fabric.Textbox.prototype.controls.mt

    fabric.Textbox.prototype.controls.mr = new fabric.Control({
      x: 0.5,
      y: 0,
      actionHandler: fabric.controlsUtils.changeWidth,
      cursorStyleHandler: fabric.controlsUtils.scaleSkewCursorStyleHandler,
      actionName: 'resizing',
      render: drawVerticalLineIcon,
      cornerSize: 28,
      withConnection: true,
    })

    fabric.Textbox.prototype.controls.ml = new fabric.Control({
      x: -0.5,
      y: 0,
      actionHandler: fabric.controlsUtils.changeWidth,
      cursorStyleHandler: fabric.controlsUtils.scaleSkewCursorStyleHandler,
      actionName: 'resizing',
      render: drawVerticalLineIcon,
      cornerSize: 28,
      withConnection: true,
    })

    fabric.Textbox.prototype.controls.mtr = new fabric.Control({
      x: 0,
      y: -0.5,
      offsetY: -40,
      actionHandler: fabric.controlsUtils.rotationWithSnapping,
      cursorStyleHandler: fabric.controlsUtils.rotationStyleHandler,
      actionName: 'rotate',
      render: drawRotateIcon,
      cornerSize: 28,
      withConnection: false,
    })
  }, [])

  /**
   * Customize selected styles for groups
   */
  useEffect(() => {
    if (canvas) {
      canvas.on('selection:created', function (ev) {
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

  /**
   * Customize seletion styles
   */
  useEffect(() => {
    if (canvas) {
      canvas.selectionColor = 'rgba(46, 204, 113, 0.15)'
      canvas.selectionBorderColor = 'rgb(39, 174, 96)'
      canvas.selectionLineWidth = 0.4
    }
  }, [canvas])
}

export default useCustomizationHandler
