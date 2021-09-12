import React from 'react';
import NavBar from './NavBar';

const Header = () => {
    return (
        <header id="header">
        <div className="header">
            <nav className="navigation">
                <ul className="nav-list">
                    <li><a href="#header" className="nav-link">Home</a></li>
                    <li><a href="#about" className="nav-link">About</a></li>
                    <li><a href="#project" className="nav-link">Project</a></li>
                    <li><a href="#contact" className="nav-link">Contact</a></li>
                </ul>
            </nav>

            <NavBar />

            <div className="header-text-box">
                <div className="border">
                    <div className="inner">
                        <h1 className="header-text heading-main">Huong Nguyen</h1>
                        <h5 className="header-text heading-sub">UI Designer & <span className="heading-sub-2">Front-end Web
                                Developer</span></h5>
                        <a href="#about" className="btn-click">Click me !</a>
                    </div>
                    
                </div>
            </div>
        </div>

    </header>
    );
};

export default Header;