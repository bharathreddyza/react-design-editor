import { useEffect, useState } from 'react'
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
import { getImage, getImages } from '@services/iconscout'
import { useCanvasContext } from '@components/Canvas/hooks'
import { useDebounce } from 'use-debounce'

import { fabric } from 'fabric'

function ObjectsPanel() {
  const [search, setSearch] = useState('')
  const [objects, setObjects] = useState<any[]>([])
  const [value] = useDebounce(search, 1000)
  const { canvas } = useCanvasContext()

  useEffect(() => {
    getImages('love')
      .then((data: any) => setObjects(data))
      .catch(console.log)
  }, [])

  useEffect(() => {
    if (value) {
      getImages(value)
        .then((data: any) => setObjects(data))
        .catch(console.log)
    }
  }, [value])
  const renderItems = () => {
    return objects.map(obj => {
      return (
        <div className="object-item-container" onClick={() => downloadImage(obj.uuid)} key={obj.uuid}>
          <img className="object-item" src={obj.urls.thumb} />
        </div>
      )
    })
  }
  const downloadImage = uuid => {
    getImage(uuid)
      .then(url => {
        fabric.loadSVGFromURL(url, (objects, options) => {
          const object = fabric.util.groupSVGElements(objects, options)
          //@ts-ignore
          const workarea = canvas.getObjects().find(obj => obj.id === 'workarea')
          canvas.add(object)
          object.scaleToHeight(300)
          object.center()
          object.clipPath = workarea
          canvas.renderAll()
        })
      })
      .catch(console.log)
  }

  return (
    <>
      <div style={{ padding: '1rem 2rem' }}>
        <InputGroup>
          <InputLeftElement pointerEvents="none" children={<SearchIcon color="gray.300" />} />
          <Input
            onChange={e => setSearch(e.target.value)}
            style={{ background: '#fff' }}
            type="tel"
            placeholder="Search objects"
          />
        </InputGroup>
      </div>
      <div style={{ padding: '0 2rem' }} className="objects-list">
        {renderItems()}
      </div>
    </>
  )
}
export default ObjectsPanel
