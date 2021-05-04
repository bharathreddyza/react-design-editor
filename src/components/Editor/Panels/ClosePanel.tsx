interface ClosePanelProp {
  closePanel: () => void
}

function ClosePanel({ closePanel }: ClosePanelProp) {
  return (
    <div onClick={closePanel} className="panel-item-close">
      <div className="c2">
        <svg width="14" height="96" viewBox="0 0 14 96" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M2 1.006C2.001 4.507 2.916 10.402 6.571 14L7.099 14.518C11.262 18.605 13.875 21.17 13.996 28H14V68C14 75.207 11.361 77.798 7.098 81.982L6.571 82.5C2.916 86.098 2.001 91.993 2 95.494V96H0V0H2V1.006Z"
            fill="#29303a"
          />
        </svg>
      </div>
      <div className="c1">
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12">
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="1.25"
            d="M7 3.17L4.88 5.3a1 1 0 0 0 0 1.42L7 8.83"
          ></path>
        </svg>
      </div>
    </div>
  )
}

export default ClosePanel
