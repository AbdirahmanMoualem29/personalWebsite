import React, { useState } from 'react';

function NavigationBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navStyle = {
    display: isMenuOpen ? 'flex' : 'none',
    flexDirection: 'column',
    justifyContent: 'center',
    listStyle: 'none',
    backgroundColor: '#FFF', // Light background
    padding: '20px',
    position: 'absolute',
    top: '40px', // Adjusted top position
    right: '10px',
    borderRadius: '5px', // Rounded corners
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', // Subtle shadow
    transition: 'all 0.3s ease' // Smooth transition
  };

  const linkStyle = {
    color: '#333', // Darker text for readability
    textDecoration: 'none',
    fontSize: '1.2rem',
    padding: '10px 15px',
    display: 'block' // Full-width clickable area
  };

  const menuButtonStyle = {
    backgroundColor: '#333',
    color: 'white',
    padding: '10px 20px',
    fontSize: '1.2rem',
    border: 'none',
    cursor: 'pointer',
    position: 'absolute',
    top: '10px',
    right: '10px'
  };

  return (
    <nav>
      <button onClick={toggleMenu} style={menuButtonStyle}>
        {isMenuOpen ? 'Close' : 'Menu'} {/* Change text based on state */}
      </button>
      <ul style={navStyle}>
        <li><a href="#Home" style={linkStyle}>Home</a></li>
        <li><a href="#about" style={linkStyle}>About</a></li>
        <li><a href="#work-experience" style={linkStyle}>Work Experience</a></li>
        <li><a href="#projects" style={linkStyle}>Projects</a></li>
        <li><a href="#contact" style={linkStyle}>Contact</a></li>
      </ul>
    </nav>
  );
}

export default NavigationBar;
