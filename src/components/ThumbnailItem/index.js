// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {projectDetails, updating, isActive} = props
  const {thumbnailUrl} = projectDetails

  const updatingtestate = () => {
    updating(projectDetails)
  }
  const activeTabBtnClassName = isActive ? 'active-tab-btn' : ''
  return (
    <div>
      <button type="button">
        {}
        <img
          src={thumbnailUrl}
          onClick={updatingtestate}
          className={activeTabBtnClassName}
          alt="thumbnailAltText"
        />
      </button>
    </div>
  )
}

export default ThumbnailItem
