import React from 'react';
import NavBar from './NavBar';

const Header = () => {
    return (
        <header id="header">
        <div class="header">
            <nav class="navigation">
                <ul class="nav-list">
                    <li><a href="#header" class="nav-link">Home</a></li>
                    <li><a href="#about" class="nav-link">About</a></li>
                    <li><a href="#project" class="nav-link">Project</a></li>
                    <li><a href="#contact" class="nav-link">Contact</a></li>
                </ul>
            </nav>

            <NavBar />

            <div class="header-text-box">
                <div class="border">
                    <div class="inner">
                        <h1 class="header-text heading-main">Huong Nguyen</h1>
                        <h5 class="header-text heading-sub">UI Designer & <span class="heading-sub-2">Front-end Web
                                Developer</span></h5>
                        <a href="#about" class="btn-click">Click me !</a>
                    </div>
                </div>
            </div>
        </div>

    </header>
    );
};

export default Header;