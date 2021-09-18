import React from 'react';

import NavBar from './NavBar';

import profile from '../../imgs/huong.jpg';
import javascript from '../../imgs/javascript.png';
import react from '../../imgs/react.png';
import nodejs from '../../imgs/nodejs.png';
import mongoDB from '../../imgs/mongoDB.png';

const Header = () => {
    return (
    <div className="home">
         <NavBar />
       <div className="header">
           <span className="huongnguyen">Huong Nguyen</span>  
           <div className="title"><span className="full-stack">Full-Stack</span> Developer</div>
           <button className="btn-click">View my work</button>
       </div>
       <img src={profile} alt="huong" className="huong-picture" />

       <div className="line"></div>

        <div className="js-container"><img src={javascript} alt="javascript-logo" className="logo" /></div>

        <div className="react-container"><img src={react} alt="react-logo" className="logo" /></div>

        <div className="nodejs-container"><img src={nodejs} alt="typescript-logo" className="logo" /></div>

        <div className="mongoDB-container"><img src={mongoDB} alt="mongoDB-logo" className="logo" /></div>
    </div>
    );
};

export default Header;