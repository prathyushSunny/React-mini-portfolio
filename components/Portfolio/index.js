import {Component} from 'react'
import './index.css'
import NavBar from '../NavBar'
import HomeSection from '../HomeSection'
import AboutSection from '../AboutSection'
import ContactSection from '../ContactSection'
import ProjectsSection from '../ProjectsSection'
import SocialMediaSection from '../SocialMediaSection'

const navBarItems = [
  {
    id: 0,
    iconUrl: 'https://assets.ccbp.in/frontend/react-js/home-img.png',
    name: 'HOME',
  },
  {
    id: 1,
    iconUrl: 'https://assets.ccbp.in/frontend/react-js/about-img.png',
    name: 'ABOUT',
  },
  {
    id: 2,
    iconUrl: 'https://assets.ccbp.in/frontend/react-js/projects-img.png',
    name: 'PROJECTS',
  },
  {
    id: 3,
    iconUrl: 'https://assets.ccbp.in/frontend/react-js/person-img.png',
    name: 'CONTACT',
  },
]

class Portfolio extends Component {
  // The initial active state is set to HOME container
  state = {activeSection: 'HOME'} // HOME, ABOUT, PROJECTS, CONTACT

  registerClicks = clickedOn => {
    this.setState({activeSection: clickedOn})
  }

  render() {
    const {activeSection} = this.state
    const produceDiv = () => {
      let content
      if (activeSection === 'HOME') content = <HomeSection />
      else if (activeSection === 'ABOUT') content = <AboutSection />
      else if (activeSection === 'PROJECTS') content = <ProjectsSection />
      else if (activeSection === 'CONTACT') content = <ContactSection />
      return content
    }
    return (
      <div className="portfolio-container">
        <div className="section navbar-container">
          <img
            className="person-image"
            alt="my pic"
            src="https://i.ibb.co/3Nmtjn6/my-picture.jpg"
          />
          <ul className="navbar-items">
            {navBarItems.map(navItem => (
              <NavBar
                key={navItem.id}
                navItem={navItem}
                registerClicks={this.registerClicks}
                activeSection={activeSection}
              />
            ))}
          </ul>
        </div>
        <div className="portfolio-sections-and-socials-container">
          <div className="section rendering-container">{produceDiv()}</div>
          <div className="section social-media-container">
            <div className="social-media-icons">
              <SocialMediaSection />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Portfolio
