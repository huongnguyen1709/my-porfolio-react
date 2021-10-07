import React from 'react';

const ProjectCard = ({project}) => {
    return (
    <div className="project">
        <img src={project.img} alt={project.name} className="project_img" />
        <h5 className="project_name">{project.name}</h5>
        {
            project.languages && project.languages.map((skill, index) =>  <div key={index+1} className={`project_skill--${index+1}`}>{skill}</div>)
        }
        <a href={project.demo} target="_blank" className="btn btn--view btn--link" rel="noreferrer" >Demo</a>  
        <a href={project.github} target="_blank" className="btn btn--github btn--link" rel="noreferrer" >Github</a>            
    </div>
    );
};

export default ProjectCard;