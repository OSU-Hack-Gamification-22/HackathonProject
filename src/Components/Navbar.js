import React from 'react';
import '../styles/navbar.css';
import {NavLink} from 'react-router-dom'
function Navbar() {
    
  return (
    <>
    <nav className='navbar'>
    <div className='nav-container'>
        <NavLink exact to ='/' className='nav-logo'>
          Foodie
          </NavLink>
      <ul className='nav-menu'>
        <li className='nav-item'>
          <NavLink exact to ='/' className='nav-links'>
            Home
          </NavLink>
        </li>
        <li className='nav-item'>
          <NavLink exact to ='/leaderboard' className='nav-links'>
            LeaderBoard
          </NavLink>
        </li>
        <li className='nav-item'>
          <NavLink exact to ='/about' className='nav-links'>
            About
          </NavLink>
        </li>
        <li className='nav-item'>
          <NavLink exact to ='/contact' className='nav-links'>
            Contact
          </NavLink>
        </li>

      </ul>
    </div>
    </nav>

    </>
  )
}

export default Navbar