import React from 'react';

const NavBar = () => {
    return (
       <div>
           <nav className="ham-btn">
                <span></span>
                <span></span>
                <span></span>
            </nav>
            <div className="toggle-menu">
                <a href="#header" className="nav-link">Home</a>
                <a href="#about" className="nav-link">About</a>
                <a href="#project" className="nav-link">Project</a>
                <a href="#contact" className="nav-link">Contact</a>
            </div>
       </div>
    );
};

export default NavBar;