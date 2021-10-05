import React from 'react';

const ProjectCard = ({project}) => {
    return (
        <div className="project">
        <img src={project.img} alt={project.name} className="project_img" />
        <h5 className="project_name">{project.name}</h5>
        {
            project.languages && project.languages.map((skill, index) =>  <div key={index+1} className={`project_skill--${index+1}`}>{skill}</div>)
        }
        <button className="btn btn--view"><a href={project.demo} target="_blank" className="btn--link" rel="noreferrer" >Demo</a></button>     
        <button className="btn btn--github"><a href={project.github} target="_blank" className="btn--link" rel="noreferrer" >Github</a></button>               
    </div>
    );
};

export default ProjectCard;