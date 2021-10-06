import React from 'react';
import {Link} from "react-router-dom";

import NavBar from './NavBar';

import profile from '../../imgs/profile_picture/huong.jpg';
import javascript from '../../imgs/logos/javascript.png';
import react from '../../imgs/logos/react.png';
import nodejs from '../../imgs/logos/nodejs.png';
import mongoDB from '../../imgs/logos/mongoDB.png';

const Header = () => {
    return (
    <div className="home">
         <NavBar />
       <div className="header">
           <div className="huongnguyen">Huong Nguyen</div>  
           <div className="title"><span className="full-stack">Full-Stack</span> Developer</div>
          <Link to="/projects" className="btn-click">View my work</Link>
       </div>
       <img src={profile} alt="huong" className="huong-picture" />

       <div className="line"></div>

       <div className="logo_container">
            <img src={javascript} alt="javascript-logo" className="logo" />
            <img src={react} alt="react-logo" className="logo" />
            <img src={nodejs} alt="typescript-logo" className="logo" />
            <img src={mongoDB} alt="mongoDB-logo" className="logo" />
       </div>

       
    </div>
    );
};

export default Header;