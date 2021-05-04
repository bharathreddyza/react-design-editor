import ReactDOM from 'react-dom'
import Editor from '@components/Editor'
import reportWebVitals from './reportWebVitals'
import { CanvasProvider } from '@components/Canvas'
import { ChakraProvider } from '@chakra-ui/react'

import 'focus-visible/dist/focus-visible'
import './i18n/index'
import './index.css'

ReactDOM.render(
  <CanvasProvider>
    <ChakraProvider>
      <Editor />
    </ChakraProvider>
  </CanvasProvider>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
