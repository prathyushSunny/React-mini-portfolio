import {Component} from 'react'
import './index.css'

class NavBar extends Component {
  render() {
    const {navItem, registerClicks, activeSection} = this.props
    const {name} = navItem

    const clickedContainerName = () => {
      registerClicks(name)
    }

    const getSelectedClass = () => {
      let selectedClass = ''
      if (navItem.name === activeSection)
        selectedClass = 'nav-item active-section'
      else selectedClass = 'nav-item'
      return selectedClass
    }

    return (
      <li className={getSelectedClass()} onClick={clickedContainerName}>
        <img className="nav-item-icon" src={navItem.iconUrl} alt="nav-icon" />
        {navItem.name}
      </li>
    )
  }
}

export default NavBar
