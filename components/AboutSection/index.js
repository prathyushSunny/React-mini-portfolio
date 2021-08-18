import './index.css'

const skillsData = [
  {
    id: 0,
    name: 'HTML',
  },
  {
    id: 1,
    name: 'Java Script',
  },
  {
    id: 2,
    name: 'CSS',
  },
  {
    id: 3,
    name: 'Java',
  },
  {
    id: 4,
    name: 'Python',
  },
  {
    id: 5,
    name: 'React',
  },
  {
    id: 6,
    name: 'Node',
  },

  {
    id: 7,
    name: 'Bootstrap',
  },
]

const educationData = [
  {
    id: 0,
    qualification: 'Graduation',
    qualificationSource: 'B.Tech(Computer Science)',
  },
  {
    id: 1,
    qualification: 'Intermediate',
    qualificationSource: 'Sri Chaitanya Jr College',
  },
  {
    id: 2,
    qualification: 'High School',
    qualificationSource: 'SCTS',
  },
]

const AboutSection = () => (
  <div className="about-section">
    <h1>About</h1>
    <p className="about-para">
      I was always fascinated towards technology and curious to learn and
      implement things in my own way, which lead me towards learning
      programming. I'm presently a fresher, looking for opportunities to grow
      professionally.
    </p>
    <h2 className="education-title">Eudcation</h2>
    {educationData.map(educationItem => (
      <div key={educationItem.id} className="education-div">
        <img
          src="https://assets.ccbp.in/frontend/react-js/list-icon-img.png"
          alt="bullet point"
          className="bullet-point"
        />
        <div className="education-quals">
          <p className="education-type">{educationItem.qualification}</p>
          <p>{educationItem.qualificationSource}</p>
        </div>
      </div>
    ))}
    <h2>Skills</h2>
    <div className="skill-tags-div">
      {skillsData.map(skill => (
        <p key={skill.id} className="skill-tag">
          {skill.name}
        </p>
      ))}
    </div>
  </div>
)

export default AboutSection
