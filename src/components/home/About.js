import React from 'react';

const About = () => {
    return (
        <div className="about">
            <h2 className="heading-about">About Me</h2>
            <p className="introduce">Hi, I'm Huong. I have a passion in designing and building website, playing with animation and UI effects in front-end web development. I am self-motivation, willing to learn new things & new skills. My hobbies are reading, traveling, and talking with people. Feel free to check out my skills & projects below !</p>
            
            <div className="card card--1">
                <div className="card_picture card_picture--1"></div>
                <div className="card_heading">
                    <span className="card_heading--span card_heading--span--1">Front-end</span>
                </div>
                <div className="card_details">
                    <ul>
                        <li>HTML</li>
                        <li>CSS - SASS</li>
                        <li>JavaScript - React</li>
                        <li>Redux - React Router</li>
                        <li>Typescript</li>
                        <li>Web Accessibility</li>
                    </ul>
                </div>
                
            </div>
            
            <div className="card card--2">
                <div className="card_picture card_picture--2"></div>
                <div className="card_heading">
                    <span className="card_heading--span card_heading--span--2">Back-end</span>
                </div>
                <div className="card_details">
                    <ul>
                        <li>Express</li>
                        <li>Nodejs</li>
                        <li>REST API</li>
                    </ul>
                </div>   
            </div>

            <div className="card card--3">
                <div className="card_picture card_picture--3"></div> 
                <div className="card_heading">
                    <span className="card_heading--span card_heading--span--3">Database</span>
                </div>   
                <div className="card_details">
                    <ul>
                        <li>Firebase</li>
                        <li>MongoDB</li>
                        <li>REST API</li>
                    </ul>
                </div>   
               
            </div>

            <div className="card card--4">
                <div className="card_picture card_picture--4"></div> 
                <div className="card_heading">
                    <span className="card_heading--span card_heading--span--4">Testing</span>
                </div> 
                <div className="card_details">
                    <ul>
                        <li>Jest</li>
                    </ul>
                </div>   
            </div>
            
        </div>
    );
};

export default About;