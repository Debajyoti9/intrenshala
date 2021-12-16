import React from 'react'
import './Styles/Navabr.css';
function Navbar() {
    return (
        <div className='navbar'>
            <div className="navabr__logo">
                <h2>INFIGION</h2>
            </div>
            <div className="navbar__menu">
                <li>Home</li>
                <li className='line'>How we help</li>
                <li>Programs</li>
                <li>FAQS</li>
            </div>
            <div className="navbar__button">
                <button>Get In Touch</button>
            </div>
        </div>
    )
}

export default Navbar
