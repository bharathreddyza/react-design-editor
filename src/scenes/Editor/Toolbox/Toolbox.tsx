import { useCoreHandler } from '@/components/Canvas/handlers'
import { CSSProperties, useState } from 'react'
import { TwitterPicker } from 'react-color'
import emptyColorPlaceholder from '@/assets/images/base-color-picker.png'

import './Toolbox.css'

function VerticalSeparator() {
  return <div className="vertical-separator"></div>
}

function Toolbox() {
  const [dropdown, setDropdown] = useState({
    displayColorPicker: false,
  })
  const [options, setOptions] = useState({
    backgroundColor: '#ffffff',
  })
  const { setCanvasBackgroundColor } = useCoreHandler()

  const handleClick = () => {
    setDropdown({ ...dropdown, displayColorPicker: !dropdown.displayColorPicker })
  }
  const handleClose = () => {
    setDropdown({ ...dropdown, displayColorPicker: false })
  }

  const popover: CSSProperties = {
    position: 'absolute',
    zIndex: 2,
  }
  const cover: CSSProperties = {
    position: 'fixed',
    top: '0px',
    right: '0px',
    bottom: '0px',
    left: '0px',
  }

  const onColorChange = color => {
    setCanvasBackgroundColor(color.hex)
    setOptions({ ...options, backgroundColor: color.hex })
  }
  return (
    <div className="editor-toolbox">
      <div style={{ position: 'relative' }}>
        <div onClick={handleClick}>
          {options.backgroundColor === '#ffffff' ? (
            <img style={{ height: '30px', display: 'flex' }} src={emptyColorPlaceholder} alt="color picker" />
          ) : (
            <div style={{ background: options.backgroundColor }} className="editor-color-holder" />
          )}
        </div>

        {dropdown.displayColorPicker ? (
          <div style={popover}>
            <div style={cover} onClick={handleClose} />
            <TwitterPicker color={options.backgroundColor} onChange={onColorChange} />
          </div>
        ) : null}
      </div>
      <VerticalSeparator />
    </div>
  )
}

export default Toolbox
