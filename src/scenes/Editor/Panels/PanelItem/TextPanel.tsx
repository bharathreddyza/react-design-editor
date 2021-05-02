import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
import { useCanvasContext } from '@/components/Canvas/hooks'
import { fabric } from 'fabric'

function TextPanel() {
  const { canvas } = useCanvasContext()

  const addHeading = () => {
    const text = new fabric.Textbox('Add a heading', {
      fontSize: 32,
      width: 320,
      fontWeight: 700,
      fontFamily: 'Lexend',
      textAlign: 'center',
    })
    //@ts-ignore
    const workarea = canvas.getObjects().find(obj => obj.id === 'workarea')
    canvas.add(text)
    text.center()

    text.clipPath = workarea
    canvas.renderAll()
  }

  const addSubheading = () => {
    const text = new fabric.Textbox('Add a subheading', {
      fontSize: 24,
      width: 320,
      fontWeight: 500,
      fontFamily: 'Lexend',
      textAlign: 'center',
    })
    //@ts-ignore
    const workarea = canvas.getObjects().find(obj => obj.id === 'workarea')
    canvas.add(text)
    text.center()

    text.clipPath = workarea
    canvas.renderAll()
  }

  const addTextBody = () => {
    const text = new fabric.Textbox('Add a little bit of body text', {
      fontSize: 18,
      width: 320,
      fontWeight: 300,
      fontFamily: 'Lexend',
      textAlign: 'center',
    })
    //@ts-ignore
    const workarea = canvas.getObjects().find(obj => obj.id === 'workarea')
    canvas.add(text)
    text.center()

    text.clipPath = workarea
    canvas.renderAll()
  }
  return (
    <>
      <div className="panel-text" style={{ padding: '1rem 1.5rem' }}>
        <InputGroup>
          <InputLeftElement pointerEvents="none" children={<SearchIcon color="gray.600" />} />
          <Input style={{ background: '#fff' }} type="tel" placeholder="Search text" />
        </InputGroup>
        <div className="label">Click text to add to page</div>
        <div className="add-text-items">
          <div onClick={addHeading} className="add-text-item add-heading">
            Add a heading
          </div>
          <div onClick={addSubheading} className="add-text-item add-subheading">
            Add a subheading
          </div>
          <div onClick={addTextBody} className="add-text-item add-body-text">
            Add a litle bit of body text
          </div>
        </div>
      </div>
    </>
  )
}
export default TextPanel
