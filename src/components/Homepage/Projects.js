import React, { useState } from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
    const [projects, setProjects] = useState([]);

    const getProjects = () => {
        fetch('https://api.github.com/users/shaheerimran9/repos')
            .then(res => res.json())
            .then(data => {
                setProjects(data);
            })
    };
    getProjects();

    return (
        <section className="landing-projects">
            <h2 className="landing-projects__heading">Recent Projects</h2>
            <div className="landing-projects__wrapper">
                {projects.slice(0, 3).map(project => {
                    return <ProjectCard title={project.name} description={project.description} link={project.homepage}/>
                })};
            </div>

        </section>
    )
};

export default Projects;