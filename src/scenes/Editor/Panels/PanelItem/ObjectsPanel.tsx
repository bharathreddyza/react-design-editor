import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'

function ObjectsPanel() {
  return (
    <>
      <InputGroup>
        <InputLeftElement pointerEvents="none" children={<SearchIcon color="gray.300" />} />
        <Input style={{ background: '#fff' }} type="tel" placeholder="Search objects" />
      </InputGroup>
    </>
  )
}
export default ObjectsPanel
