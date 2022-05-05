import React, {useState} from 'react';
import CardSlider from './CardSlider';

import Footer from "../Footer";


const About = () => {
    const [skills, setSkills] = useState([
        {
            name: 'Front-end',
            languages: ['HTML', 'CSS - SASS', 'JavaScript - React', 'Redux - React Router', 'TypeScript', 'Web Accessibility']
        },

        {
            name: 'Back-end',
            languages: ['Nodejs', 'Express', 'REST API']
        },

        {
            name: 'Database',
            languages: ['Firebase', 'MongoDB']
        },

        {
            name: 'Testing',
            languages: ['Jest', 'Cypress']
        }
    ])

    return (
        <div className='about'>
            <h2 className="heading-about">About Me</h2>
            <p className="introduce">Hi, I'm Huong. 
            I have a passion in coding, building websites & applications. I am self-motivation and optimistic that promote myself to meet my goals. I am curious and constantly learning to keep myself updated. My hobbies are reading, traveling, and communicating with people. <br></br>
            <br></br>  
            Feel free to check out my skills & projects ! <br></br> 
            <br></br>  
            <u>Education</u> : <br></br>  
            &nbsp; • &nbsp; Degree: Bachelor of Engineering of Information & Communication Technology <br></br> 
            &nbsp; • &nbsp; School: Turku University of Applied Sciences <br></br> 
            <br></br>  
            <u>Achievements</u> : <br></br>  
            &nbsp; • &nbsp; Full Stack Open 2021, University of Helsinki & Houston Inc. <br></br>  
            &nbsp; • &nbsp; GraphQL, Full Stack Open 2021, University of Helsinki & Houston Inc.  <br></br> 
            &nbsp; • &nbsp; TypeScript, Full Stack Open 2021, University of Helsinki & Houston Inc.  <br></br> 
            &nbsp; • &nbsp; CI/CD, Full Stack Open 2021, University of Helsinki & Houston Inc.  <br></br> 
            </p>
    
            <CardSlider skills = {skills} />

            <Footer />
        
        </div>
    );
};

export default About;