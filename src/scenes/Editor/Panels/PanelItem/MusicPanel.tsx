import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'

function MusicPanel() {
  return (
    <>
      <InputGroup>
        <InputLeftElement pointerEvents="none" children={<SearchIcon color="gray.300" />} />
        <Input style={{ background: '#fff' }} type="tel" placeholder="Search music" />
      </InputGroup>
    </>
  )
}
export default MusicPanel
