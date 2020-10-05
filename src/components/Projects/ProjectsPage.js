import React from 'react';
import ProjectPageProject from './ProjectPageProject';
import moviesurferImg from '../../img/moviesurfer.png'
import bigchileImg from '../../img/bigchile.png';
import brightnsunnyImg from '../../img/brightnsunny.png';
import bookmyshowImg from '../../img/bookmyshow.png';
import portfolioImg from '../../img/portfolio.png';

const ProjectsPage = () => {
    return (
        <section className="allprojects-container">
            <ProjectPageProject
                title="Movie Surfer"
                imgSrc={moviesurferImg}
                description="A movie database web app that allows users to see trending movies and search for specific movie titles using The Movie Database API."
                siteLink="https://shaheer-moviesurfer.netlify.app/"
                codeLink="https://github.com/shaheerimran9/Movie-Surfer"
            />
            <ProjectPageProject
                title="BookMyShow"
                imgSrc={bookmyshowImg}
                description="A movie seat booking web app that connects to The Movie Database API and populates a selection of movies currently in theatres. It allows the user to select a movie and reserve seats while displaying the total number of tickets and the total price for the tickets. "
                siteLink="https://shaheer-bookmyshow.netlify.app/"
                codeLink="https://github.com/shaheerimran9/BookMyShow"
            />
            <ProjectPageProject
                title="BrightNSunny"
                imgSrc={brightnsunnyImg}
                description="A weather application that is powered by the Open Weather Map API. It allows users to enter a location and check the weather for that location."
                siteLink="https://shaheer-brightnsunny.netlify.app/"
                codeLink="https://github.com/shaheerimran9/BrightNSunny"
            />
            <ProjectPageProject
                title="Big Chile"
                imgSrc={bigchileImg}
                description="A modern and responsive restaruant website for a food truck in Richmond, Virginia."
                siteLink="https://shaheer-bigchile.netlify.app/"
                codeLink="https://github.com/shaheerimran9/Big-Chile"
            />
            <ProjectPageProject
                title="Portfolio"
                imgSrc={portfolioImg}
                description="My personal portfolio built using React.JS."
                siteLink="https://shaheerimran.netlify.app/"
                codeLink="https://github.com/shaheerimran9/portfolio"
            />
        </section>
    );
};

export default ProjectsPage;