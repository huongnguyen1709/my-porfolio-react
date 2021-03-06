import React from 'react';
import {Link} from "react-router-dom";

import profile from '../../imgs/profile_picture/huong.jpg';
import Footer from '../Footer';

const Header = () => {
    return (
    <div className="home">
       <div className='header_container'>
            <div className="header">
                <div className="name">Huong Nguyen</div>  
                <div className="title"><span>Full-stack</span> Developer</div>
                <Link to="/about" className="btn-click">Explore me</Link>
            </div>
            <img src={profile} alt="huongpicture" className="profile-picture" />
       </div>

       <Footer />
       
    </div>
    );
};

export default Header;