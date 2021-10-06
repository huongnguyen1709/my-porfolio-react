import React, {useState} from 'react';
import { Link, useLocation, NavLink } from "react-router-dom";
import Hamburger from 'hamburger-react'

const NavBar = () => {
    const [isOpen, setOpen] = useState(false)
    const location = useLocation();
    const pathname = location.pathname
    console.log(location.pathname);

    return (
        <nav className="navigation">
           
            <div className="hn"><Link to="/" className="nav-link hn-logo"><i class="fab fa-angellist"></i> HN</Link></div>
            
            <div className="btn-about-container"><Link to="/about" className="nav-link">About</Link></div>
            <div className="btn-projects-container"><Link to="/projects" className="nav-link">Projects</Link></div>
            <div className="btn-contact-container"><Link to="/contact" className="nav-link contact_btn">Contact</Link></div>
          

            {/* Toggle Menu */}
            <Hamburger toggled={isOpen} toggle={setOpen}  />
    
            <div className={isOpen ? 'toggle_menu visible' : 'toggle_menu hidden'}>
                <Link to="/" className={pathname === '/' ? 'nav-link selected' : 'nav-link'}>Home</Link>
                <Link to="/about" className={pathname === '/about' ? 'nav-link selected' : 'nav-link'}>About</Link>
                <Link to="/projects" className={pathname === '/projects' ? 'nav-link selected' : 'nav-link'}>Projects</Link>
                <Link to="/contact" className={pathname === '/contact' ? 'nav-link selected' : 'nav-link'}>Contact</Link>
            </div> 
        </nav>
       
    );
};

export default NavBar;