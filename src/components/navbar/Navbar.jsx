import React from 'react'
import "./navbar.css"

function Navbar() {
  return (
    <div className='navbar'>
        <div className="navbarContainer">
            <span className='logo'>Ticket Booking</span>
            <div className="navItems">
                <button className='navButton'>Registure</button>
                <button className='navButton'>Login</button>
            </div>
        </div>
        
    </div>
  )
}

export default Navbar