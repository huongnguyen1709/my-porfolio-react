import React, {useState} from 'react';

import quizApp from '../../imgs/projects/quiz-app.png'
import dragdropColor from '../../imgs/projects/drag-drop-color.png'
import marioBlog from '../../imgs/projects/mario-blog.png'
import NavBar from '../home/NavBar';
import ProjectCard from './ProjectCard';


const Projects = () => {
    const [projects, setProjects] = useState([
        {
            name: 'Quiz App',
            img: quizApp,
            languages: ['React', 'TypeScript', 'Styled-Component'],
            demo: 'https://join-quiz.netlify.app/',
            github: 'https://github.com/huongnguyen1709/quiz-app-react-typescript'
        },

        {
            name: 'Drag Drop Color',
            img: dragdropColor,
            languages: ['React', 'CSS'],
            demo: 'https://drag-drop-color.web.app/',
            github: 'https://github.com/huongnguyen1709/Drag-Drop-Color'
        },

        {
            name: 'Mario Blog',
            img: marioBlog,
            languages: ['React', 'Redux', 'React Router', 'Firebase'],
            demo: 'https://marioplan-66b4a.firebaseapp.com/signin',
            github: 'https://github.com/huongnguyen1709/MarioBlog-App'
        }
    ])

    return (
        <div className="projects">
            <h2 className="heading-projects">My Work</h2>

            <div className="projects_container">
                {
                    projects && projects.map((project, index) => <ProjectCard key={index} project={project} />)
                }                
            </div>
            
        </div>
    );
};

export default Projects;