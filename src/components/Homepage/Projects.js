import React, { useState, useEffect } from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const getProjects = async () => {
            await fetch('https://api.github.com/users/shaheerimran9/repos', {
                method: "GET",
                headers: {
                    Authorization: `Token ${process.env.REACT_APP_API_KEY}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    setProjects(data);
                })
        };
        getProjects();
    }, []);

    return (
        <section className="landing-projects">
            <h2 className="landing-projects__heading">Recent Projects</h2>
            <div className="landing-projects__wrapper">
                {projects.slice(0, 3).map(project => {
                    return <ProjectCard key={project.id} title={project.name} description={project.description} link={project.homepage} />
                })};
            </div>
        </section>
    )
};

export default Projects;