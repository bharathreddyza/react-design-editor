export const isCtrlZ = e => {
  return e.ctrlKey && !e.shiftKey && e.code === 'KeyZ'
}
export const isCtrlShiftZ = e => {
  return e.ctrlKey && e.shiftKey && e.code === 'KeyZ'
}

export const isArrow = e => {
  return ['ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowUp'].includes(e.code)
}
