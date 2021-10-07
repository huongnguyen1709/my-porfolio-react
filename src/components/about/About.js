import React, {useState} from 'react';
import SkillsCard from './SkillsCard';

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
            <p className="introduce">Hi, I'm Huong. I have a passion in designing and building website, playing with animation and UI effects in front-end web development. I am self-motivation, willing to learn new things & new skills. My hobbies are reading, traveling, and talking with people. Feel free to check out my skills & projects below !</p>
            
            {
                skills && skills.map((skill, index) => <SkillsCard key={index+1} skill={skill} index={index+1} />)
            }
            
        </div>
    );
};

export default About;