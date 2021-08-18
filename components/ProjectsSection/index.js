import './index.css'

const projectsData = [
  {
    id: 0,
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/advanced-technologies-img.png',
    name: 'Advanced Technologies',
  },
  {
    id: 1,
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/your-moment-is-complete-img.png',
    name: 'Your Moment Is Complete',
  },
  {
    id: 2,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/robotics-img.png',
    name: 'Robotics',
  },
  {
    id: 3,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/happy-meals-img.png',
    name: 'Happy Meals',
  },
]

const ProjectsSection = () => (
  <div className="projects-section">
    <h1 className="title">My Work</h1>
    <div className="projects-container">
      {projectsData.map(project => (
        <div className="project">
          <img
            src={project.imageUrl}
            className="project-image"
            alt={project.name}
          />
          <p className="project-name">{project.name}</p>
        </div>
      ))}
    </div>
  </div>
)

export default ProjectsSection
