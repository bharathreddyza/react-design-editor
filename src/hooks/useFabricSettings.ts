// @ts-nocheck
import { fabric } from 'fabric';

// General settings
fabric.Object.prototype.transparentCorners = false;
fabric.Object.prototype.cornerColor = '#20bf6b';
fabric.Object.prototype.cornerStyle = 'circle';
fabric.Object.prototype.borderColor = '#00D9E1';
fabric.Object.prototype.cornerSize = 12;
fabric.Object.prototype.borderScaleFactor = 2.4;
fabric.Object.prototype.borderOpacityWhenMoving = 0;
// Objects

fabric.Object.prototype.controls.tr = new fabric.Control({
  x: 0.5,
  y: -0.5,
  actionHandler: fabric.controlsUtils.scalingEqually,
  cursorStyleHandler: fabric.controlsUtils.scaleSkewCursorStyleHandler,
  actionName: fabric.controlsUtils.scaleOrSkewActionName,
  render: renderCircle,
  cornerSize: 28,
  withConnection: true,
});

fabric.Object.prototype.controls.tl = new fabric.Control({
  x: -0.5,
  y: -0.5,
  actionHandler: fabric.controlsUtils.scalingEqually,
  cursorStyleHandler: fabric.controlsUtils.scaleSkewCursorStyleHandler,
  actionName: fabric.controlsUtils.scaleOrSkewActionName,
  render: renderCircle,
  cornerSize: 28,
  withConnection: true,
});

fabric.Object.prototype.controls.bl = new fabric.Control({
  x: -0.5,
  y: 0.5,
  actionHandler: fabric.controlsUtils.scalingEqually,
  cursorStyleHandler: fabric.controlsUtils.scaleSkewCursorStyleHandler,
  actionName: fabric.controlsUtils.scaleOrSkewActionName,
  render: renderCircle,
  cornerSize: 28,
  withConnection: true,
});

fabric.Object.prototype.controls.br = new fabric.Control({
  x: 0.5,
  y: 0.5,
  actionHandler: fabric.controlsUtils.scalingEqually,
  cursorStyleHandler: fabric.controlsUtils.scaleSkewCursorStyleHandler,
  actionName: fabric.controlsUtils.scaleOrSkewActionName,
  render: renderCircle,
  cornerSize: 28,
  withConnection: true,
});

fabric.Object.prototype.controls.ml = new fabric.Control({
  x: -0.5,
  y: 0,
  actionHandler: fabric.controlsUtils.scalingXOrSkewingY,
  cursorStyleHandler: fabric.controlsUtils.scaleSkewCursorStyleHandler,
  actionName: fabric.controlsUtils.scaleOrSkewActionName,
  render: renderVerticalIcon,
  cornerSize: 28,
  withConnection: true,
});

fabric.Object.prototype.controls.mt = new fabric.Control({
  x: 0,
  y: -0.5,
  actionHandler: fabric.controlsUtils.scalingYOrSkewingX,
  cursorStyleHandler: fabric.controlsUtils.scaleSkewCursorStyleHandler,
  actionName: fabric.controlsUtils.scaleOrSkewActionName,
  render: renderHorizontalIcon,
  cornerSize: 28,
  withConnection: true,
});

fabric.Object.prototype.controls.mb = new fabric.Control({
  x: 0,
  y: 0.5,
  actionHandler: fabric.controlsUtils.scalingYOrSkewingX,
  cursorStyleHandler: fabric.controlsUtils.scaleSkewCursorStyleHandler,
  actionName: fabric.controlsUtils.scaleOrSkewActionName,
  render: renderHorizontalIcon,
  cornerSize: 28,
  withConnection: true,
});

fabric.Object.prototype.controls.mr = new fabric.Control({
  x: 0.5,
  y: 0,
  actionHandler: fabric.controlsUtils.scalingXOrSkewingY,
  cursorStyleHandler: fabric.controlsUtils.scaleSkewCursorStyleHandler,
  actionName: fabric.controlsUtils.scaleOrSkewActionName,
  render: renderVerticalIcon,
  cornerSize: 28,
  withConnection: true,
});

// mtr

fabric.Object.prototype.controls.mtr = new fabric.Control({
  x: 0,
  y: -0.5,
  offsetY: -40,
  //cursorStyle: 'grab',
  // @ts-ignore
  actionHandler: fabric.controlsUtils.rotationWithSnapping,
  cursorStyleHandler: fabric.controlsUtils.rotationStyleHandler,
  actionName: 'rotate',
  render: renderRotateIcon,
  cornerSize: 28,
  withConnection: false,
});

// Texbox controls
fabric.Textbox.prototype.controls.tr = fabric.Object.prototype.controls.tr;
fabric.Textbox.prototype.controls.tl = fabric.Object.prototype.controls.tl;
fabric.Textbox.prototype.controls.bl = fabric.Object.prototype.controls.bl;
fabric.Textbox.prototype.controls.br = fabric.Object.prototype.controls.br;

fabric.Textbox.prototype.controls.mt = new fabric.Control({
  render: () => false,
});

fabric.Textbox.prototype.controls.mb = fabric.Textbox.prototype.controls.mt;
//fabric.Textbox.prototype.controls.mb = fabric.Textbox.prototype.controls.mt;
//fabric.
//fabric.Group.prototype.controls.mt = fabric.Textbox.prototype.controls.mt;
//fabric.Group.prototype.controls.mb = fabric.Textbox.prototype.controls.mt;

fabric.Textbox.prototype.controls.mr = new fabric.Control({
  x: 0.5,
  y: 0,
  actionHandler: fabric.controlsUtils.changeWidth,
  cursorStyleHandler: fabric.controlsUtils.scaleSkewCursorStyleHandler,
  actionName: 'resizing',
  render: renderVerticalIcon,
  cornerSize: 28,
  withConnection: true,
});

fabric.Textbox.prototype.controls.ml = new fabric.Control({
  x: -0.5,
  y: 0,
  actionHandler: fabric.controlsUtils.changeWidth,
  cursorStyleHandler: fabric.controlsUtils.scaleSkewCursorStyleHandler,
  actionName: 'resizing',
  render: renderVerticalIcon,
  cornerSize: 28,
  withConnection: true,
});

fabric.Textbox.prototype.controls.mtr = new fabric.Control({
  x: 0,
  y: -0.5,
  offsetY: -40,
  //cursorStyle: 'grab',
  // @ts-ignore
  actionHandler: fabric.controlsUtils.rotationWithSnapping,
  cursorStyleHandler: fabric.controlsUtils.rotationStyleHandler,
  actionName: 'rotate',
  render: renderRotateIcon,
  cornerSize: 28,
  withConnection: false,
});

///
//
// here's where the render action for the control is defined
// @ts-ignore

function renderRotateIcon(ctx, left, top, styleOverride, fabricObject) {
  const radius = 6;
  let lineWidth = radius / 3;
  let arrowWidth = radius / 2;
  const center = {
    x: left,
    y: top,
  };
  let arrow1 = {
    startAngle: (1 / 2) * Math.PI + 0.6,
    endAngle: (3 / 2) * Math.PI,
  };

  let arrow2 = {
    startAngle: (3 / 2) * Math.PI + 0.6,
    endAngle: (1 / 2) * Math.PI,
  };
  function draw(startAngle, endAngle) {
    // ctx.closePath();
    ctx.beginPath();
    ctx.shadowBlur = 0;

    ctx.arc(center.x, center.y, radius, startAngle, endAngle);
    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = '#000000';
    ctx.stroke();

    ctx.beginPath();
    let arrowTop = getPointOnCircle(center, radius, endAngle + 0.4);

    ctx.moveTo(arrowTop.x, arrowTop.y);

    let arrowLeft = getPointOnCircle(center, radius - arrowWidth, endAngle);
    ctx.lineTo(arrowLeft.x, arrowLeft.y);

    let arrowRight = getPointOnCircle(center, radius + arrowWidth, endAngle);
    ctx.lineTo(arrowRight.x, arrowRight.y);
    ctx.fillStyle = '#000000';

    ctx.closePath();
    ctx.fill();
  }

  function getPointOnCircle(center, radius, angle) {
    let pX = center.x + Math.cos(angle) * radius;
    let pY = center.y + Math.sin(angle) * radius;
    return { x: pX, y: pY };
  }

  ctx.save();
  ctx.translate(0, 0);

  ctx.beginPath();
  ctx.arc(center.x, center.y, radius + 6, 0, Math.PI * 2);
  ctx.fillStyle = '#ffffff';
  ctx.shadowBlur = 2;
  ctx.shadowColor = 'black';
  ctx.fill();
  ctx.closePath();
  draw(arrow1.startAngle, arrow1.endAngle);
  draw(arrow2.startAngle, arrow2.endAngle);
  ctx.restore();
}

function renderIcon2(ctx, left, top, styleOverride, fabricObject) {
  var rotateIcon =
    'data:image/png;base64,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';
  var img = document.createElement('img');
  img.src = rotateIcon;
  // @ts-ignore

  var size = this.cornerSize;
  ctx.save();
  ctx.translate(left, top);
  ctx.rotate(fabric.util.degreesToRadians(fabricObject.angle));
  ctx.drawImage(img, -size / 2, -size / 2, size, size);
  ctx.restore();
}

function renderCircle(ctx, left, top, styleOverride, fabricObject) {
  const size = this.cornerSize;
  ctx.save();
  ctx.translate(left, top);
  ctx.rotate(fabric.util.degreesToRadians(fabricObject.angle));
  ctx.beginPath();
  ctx.lineCap = 'round';
  ctx.lineWidth = 3;
  ctx.shadowBlur = 2;
  ctx.shadowColor = 'black';

  ctx.arc(0, 0, 5.5, 0, 2 * Math.PI);
  ctx.fillStyle = '#ffffff';
  ctx.fill();
  ctx.restore();
}

function renderVerticalIcon(ctx, left, top, styleOverride, fabricObject) {
  const size = this.cornerSize;
  ctx.save();
  ctx.translate(left, top);
  ctx.rotate(fabric.util.degreesToRadians(fabricObject.angle));
  ctx.beginPath();
  ctx.lineCap = 'round';
  ctx.lineWidth = 3;
  ctx.shadowBlur = 2;
  ctx.shadowColor = 'black';
  ctx.moveTo(-0.5, -size / 4);
  ctx.lineTo(-0.5, -size / 4 + size / 2);
  ctx.strokeStyle = '#ffffff';
  ctx.stroke();
  ctx.restore();
}

function renderHorizontalIcon(ctx, left, top, styleOverride, fabricObject) {
  const size = this.cornerSize;
  ctx.save();
  ctx.translate(left, top);
  ctx.rotate(fabric.util.degreesToRadians(fabricObject.angle));
  ctx.beginPath();
  ctx.lineCap = 'round';
  ctx.lineWidth = 3;
  ctx.shadowBlur = 2;
  ctx.shadowColor = 'black';
  ctx.moveTo(-size / 4, -0.5);
  ctx.lineTo(-size / 4 + size / 2, -0.5);
  ctx.strokeStyle = '#ffffff';
  ctx.stroke();
  ctx.restore();
}

function useFabricSettings() {}

export default useFabricSettings;
