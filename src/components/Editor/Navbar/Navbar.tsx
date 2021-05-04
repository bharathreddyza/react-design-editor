import './Navbar.scss'
import { DownloadIcon, LogoIcon, GithubIcon } from './NavbarIcons'

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <LogoIcon />
      </div>
      <div className="navbar-action-items">
        <DownloadIcon />
        <a href="https://github.com/xorb/react-design-editor">
          <GithubIcon />
        </a>
      </div>
    </div>
  )
}

export default Navbar
