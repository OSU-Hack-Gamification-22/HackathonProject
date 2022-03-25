import React from 'react';
import '../styles/navbar.css';
function Navbar() {
    
  return (
    <div className='navbar'>
        <a href='/home'>Home</a>
        <a href='/contact'>Contact</a>
        <a href='/about'>About</a>
    </div>
  )
}

export default Navbar