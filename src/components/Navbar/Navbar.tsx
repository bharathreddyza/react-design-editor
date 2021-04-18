import { sampleData } from '@components/Canvas/constants/sample'
import { useCoreHandler } from '@components/Canvas/hooks'

function Navbar() {
  const { exportJSON, loadJSON } = useCoreHandler()

  const exportToJSON = async () => {
    const jsonData = exportJSON()
    const fileName = 'file'
    const json = JSON.stringify(jsonData)
    const blob = new Blob([json], { type: 'application/json' })
    const href = await URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = href
    link.download = fileName + '.json'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const loadFromJSON = () => {
    loadJSON(sampleData)
  }
  return (
    <div className="navbar">
      <div onClick={loadFromJSON} className="button">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M11.25 15.85l-4.38-4.38a.75.75 0 0 0-1.06 1.06l4.95 4.95c.69.68 1.8.68 2.48 0l4.95-4.95a.75.75 0 1 0-1.06-1.06l-4.38 4.38V4.25a.75.75 0 1 0-1.5 0v11.6zm-7.5 3.4h16.5a.75.75 0 1 1 0 1.5H3.75a.75.75 0 1 1 0-1.5z"
          ></path>
        </svg>
      </div>

      <div className="button" onClick={exportToJSON}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M11.25 15.85l-4.38-4.38a.75.75 0 0 0-1.06 1.06l4.95 4.95c.69.68 1.8.68 2.48 0l4.95-4.95a.75.75 0 1 0-1.06-1.06l-4.38 4.38V4.25a.75.75 0 1 0-1.5 0v11.6zm-7.5 3.4h16.5a.75.75 0 1 1 0 1.5H3.75a.75.75 0 1 1 0-1.5z"
          ></path>
        </svg>
      </div>
    </div>
  )
}

export default Navbar
