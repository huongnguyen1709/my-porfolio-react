import React from 'react';

const NavBar = () => {
    return (
      
            <nav className="navigation">
                <div className="hn"><a href="#header" className="nav-link hn-logo"><i class="fab fa-angellist"></i> HN</a></div>
               
                <div className="btn-about-container"><a href="#about" className="nav-link">About</a></div>
                <div className="btn-projects-container"><a href="#project" className="nav-link">Projects</a></div>
                <div className="btn-contact-container"><a href="#contact" className="nav-link">Contact</a></div>

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