// @ts-nocheck
import { ChevronDownIcon } from '@chakra-ui/icons'
import { useCanvasContext } from '@/components/Canvas/hooks'
import { useEffect, useState } from 'react'
import { Popover, PopoverTrigger, PopoverContent, PopoverBody } from '@chakra-ui/react'
import './TextToolbox.scss'
import { useCoreHandler } from '@/components/Canvas/handlers'

const fontsList = ['Open Sans', 'Lexend', 'Comic Neue', 'Patrick Hand']

function TextTool() {
  const { activeObject } = useCanvasContext()
  const { setProperty } = useCoreHandler()
  const [options, setOptions] = useState({
    fontFamily: 'Lexend',
    fontSize: 1,
    fontWeight: 2,
    textAlign: 'center',
    textDecoration: 'none',
  })

  useEffect(() => {
    if (activeObject) {
      const updatedOptions = {
        fontFamily: activeObject.fontFamily,
        fontSize: activeObject.fontSize,
        fontWeight: activeObject.fontWeight,
        textAlign: activeObject.textAlign,
      }
      setOptions({ ...options, ...updatedOptions })
    }
  }, [activeObject])

  const onChangeFontFamily = fontFamily => {
    setProperty('fontFamily', fontFamily)
    setOptions({ ...options, fontFamily })
  }

  return (
    <div className="editor-toolbox-container">
      <div className="editor-toolbox text">
        <div>
          <Popover placement="bottom-start" matchWidth={true}>
            <PopoverTrigger>
              <div className="font-family-selector">
                <div>{options.fontFamily}</div>
                <ChevronDownIcon />
              </div>
            </PopoverTrigger>
            <PopoverContent style={{ width: '240px' }}>
              <PopoverBody>
                {fontsList.map(fontItem => (
                  <div
                    onClick={() => onChangeFontFamily(fontItem)}
                    style={{ fontFamily: fontItem }}
                    className="list-item"
                    key={fontItem}
                  >
                    {fontItem}
                  </div>
                ))}
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </div>
        <div className="section-two">
          <OpacityIcon />
          <DeleteIcon />
        </div>
      </div>
    </div>
  )
}

function OpacityIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <g fill="currentColor" fillRule="evenodd">
        <path d="M3 2h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zm0 8h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1zm0 8h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1z"></path>
        <path
          d="M11 2h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zm0 8h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1zm0 8h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1z"
          opacity=".45"
        ></path>
        <path
          d="M19 2h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zm0 8h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1zm0 8h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1z"
          opacity=".15"
        ></path>
        <path
          d="M7 6h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1zm0 8h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1z"
          opacity=".7"
        ></path>
        <path
          d="M15 6h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1zm0 8h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1z"
          opacity=".3"
        ></path>
      </g>
    </svg>
  )
}

function DeleteIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M8 5a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3h4.25a.75.75 0 1 1 0 1.5H19V18a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V6.5H3.75a.75.75 0 0 1 0-1.5H8zM6.5 6.5V18c0 .83.67 1.5 1.5 1.5h8c.83 0 1.5-.67 1.5-1.5V6.5h-11zm3-1.5h5c0-.83-.67-1.5-1.5-1.5h-2c-.83 0-1.5.67-1.5 1.5zm-.25 4h1.5v8h-1.5V9zm4 0h1.5v8h-1.5V9z"
      ></path>
    </svg>
  )
}
export default TextTool
