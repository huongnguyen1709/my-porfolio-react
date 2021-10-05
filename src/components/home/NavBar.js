import React from 'react';

import {
    Link
  } from "react-router-dom";

const NavBar = () => {
    return (
            <nav className="navigation">
                <div className="hn"><Link to="/" className="nav-link hn-logo"><i class="fab fa-angellist"></i> HN</Link></div>
               
                <div className="btn-about-container"><Link to="/about" className="nav-link">About</Link></div>
                <div className="btn-projects-container"><Link to="/projects" className="nav-link">Projects</Link></div>
                <div className="btn-contact-container"><Link to="/contact" className="nav-link contact_btn">Contact</Link></div>

                {/* <ul className="nav-list">                 
                    <li><a href="#header" className="nav-link">Home</a></li>
                    <li><a href="#about" className="nav-link">About</a></li>
                    <li><a href="#project" className="nav-link">Project</a></li>
                    <li><a href="#contact" className="nav-link">Contact</a></li>
                </ul> */}
            </nav>
        //    {/* <nav className="ham-btn">
        //         <span></span>
        //         <span></span>
        //         <span></span>
        //     </nav>
        //     <div className="toggle-menu">
        //         <a href="#header" className="nav-link">Home</a>
        //         <a href="#about" className="nav-link">About</a>
        //         <a href="#project" className="nav-link">Project</a>
        //         <a href="#contact" className="nav-link">Contact</a>
        //     </div> */}
       
    );
};

export default NavBar;