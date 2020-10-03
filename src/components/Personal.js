import React from 'react';

const Personal = () => {
    return (
        <section className="landing-aboutme">
            <div className="landing-aboutme__info">
                <h1 className="info__name">Shaheer Imran</h1>
                <h2 className="info__title">Front End Web Developer</h2>
                <p className="info__description">A Front End Web Developer based in Richmond, VA who is enthusiastic about developing applications for the web. I build modern websites that utilize the latest technologies.</p>
                <h3 className="info__technologies-heading">Here are a few of the technologies I have been utilizing recently:</h3>
                <ul className="info__technologies">
                    <li className="technology">Semantic HTML</li>
                    <li className="technology">Responsive CSS</li>
                    <li className="technology">JavaScript</li>
                    <li className="technology">React.JS</li>
                    <li className="technology">Git/Github</li>
                </ul>
            </div>
            <div className="landing-aboutme__img"></div>
        </section>
    );
};

export default Personal;