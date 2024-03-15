import React from 'react'
import {Link} from 'react-router-dom'
import '../Styles/Navbar.css'
function Navbar() {
  return (
    <div className='Navbar'>
    <div className='NavbarContainer'>
        <Link to='/'>Home</Link>
        <Link to='/projects'>Projects</Link>
        <Link to='/contact'>Contact</Link>
        <Link to='/AboutMe'>About Me</Link>
    </div>
      
    </div>
  )
}

export default Navbar
