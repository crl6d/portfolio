import React from 'react'
import '../header/header.css'

function Header() {
  return (
    <header className="header_holder">
            <nav className="header">
                <li>Main</li>
                <li>Skills</li>
                <li>About Me</li>
                <li>Projects</li>
            </nav>
    </header>
  )
}

export default Header