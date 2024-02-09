import React, { useRef } from 'react';
import '../header/header.css';
import { Link } from 'react-router-dom';

function Header() {
  const headerBtns = useRef([]);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section != null && sectionId !== "section1") {
      const offset = section.offsetTop - 80;
      document.documentElement.scrollTop = offset;
      document.body.scrollTop = offset;
    } else if (sectionId === "section1") {
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }

    headerBtns.current.forEach(btn => btn.classList.remove("active"));
    document.getElementById(sectionId).classList.add("active");
  };

  return (
    <header className="header_holder">
      <nav className="header">
        <li ref={(el) => (headerBtns.current[0] = el)} onClick={() => scrollToSection('section1')} className="active header_btn">Main</li>
        <li ref={(el) => (headerBtns.current[1] = el)} onClick={() => scrollToSection('section2')} className="header_btn">Skills</li>
        <li ref={(el) => (headerBtns.current[2] = el)} onClick={() => scrollToSection('section3')} className="header_btn">About Me</li>
        <li ref={(el) => (headerBtns.current[3] = el)} onClick={() => scrollToSection('section4')} className="header_btn">Projects</li>
        <li>Blog</li>
      </nav>
    </header>
  );
}

export default Header;