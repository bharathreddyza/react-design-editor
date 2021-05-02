import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'

function TemplatesPanel() {
  return (
    <>
      <InputGroup>
        <InputLeftElement pointerEvents="none" children={<SearchIcon color="gray.300" />} />
        <Input style={{ background: '#fff' }} type="tel" placeholder="Search templates" />
      </InputGroup>
    </>
  )
}
export default TemplatesPanel
