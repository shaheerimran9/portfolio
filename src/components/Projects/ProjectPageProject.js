import React from 'react';

const ProjectPageProject = (props) => {
    return (
        <div className="allprojects__project">
            <img src={props.imgSrc} alt="project-image" className="project__img" />
            <h2 className="project__title">{props.title}</h2>
            <p className="project__description">{props.description}</p>
            <div className="project__links">
                <a href={props.siteLink} className="project__links-btn">View Project</a>
                <a href={props.codeLink} className="project__links-btn">View Code</a>
            </div>
        </div>
    );
};

export default ProjectPageProject;