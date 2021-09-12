import React from 'react';
import NavBar from './NavBar';

const Header = () => {
    return (
        <header id="header">
        <div className="header">
            <NavBar />

            <div className="header-text-box">
                <div className="border">
                    <div className="inner">
                        <h1 className="header-text heading-main">Huong Nguyen</h1>
                        <h5 className="header-text heading-sub">UI Designer & <span className="heading-sub-2">Full-Stack Web
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