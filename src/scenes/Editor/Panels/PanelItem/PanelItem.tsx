import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'

import classNames from 'classnames'
import './PanelItem.scss'

interface Props {
  panelOpen: boolean
}
function PanelItem({ panelOpen }: Props) {
  const className = classNames({
    'panel-item-container': true,
    open: panelOpen,
  })
  return (
    <div className={className}>
      <div className="panel-item">
        <InputGroup>
          <InputLeftElement pointerEvents="none" children={<SearchIcon color="gray.300" />} />
          <Input style={{ background: '#fff' }} type="tel" placeholder="Search text" />
        </InputGroup>
      </div>
    </div>
  )
}

export default PanelItem
