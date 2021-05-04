import { useCanvasContext } from '@/components/Canvas/hooks'
import DefaultToolbox from './DefaultToolbox/DefaultToolbox'
import TextToolbox from './TextToolbox/TextToolbox'

import './Toolbox.scss'

function Toolbox() {
  const { activeObject } = useCanvasContext()
  if (!activeObject) {
    return <DefaultToolbox />
  }
  const activeObjectType = activeObject.type

  return <div>{activeObjectType === 'textbox' ? <TextToolbox /> : <DefaultToolbox />}</div>
}

export default Toolbox
