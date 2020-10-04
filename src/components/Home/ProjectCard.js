import React from 'react';
import codeImg from '../../img/code.jpg';

const ProjectCard = (props) => {
    return (
        <a href={props.link}>
            <div className="card-container">
                <div className="card">
                    <div className="card-image">
                        <h2 className="card-title">{props.title.toUpperCase()}</h2>
                        <img src={codeImg} alt="code-background" />
                    </div>
                    <div className="card-text">
                        <p>{props.description}</p>
                    </div>
                </div>
            </div>
        </a>
    )
};

export default ProjectCard;