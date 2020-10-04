import React from 'react';
import reynoldsImg from '../../img/reynolds.jpg';
import lambdaImg from '../../img/lambdaschool.png'

const Education = () => {
    return (
        <section className="education">
            <h2 className="education__heading">Education</h2>
            <div className="education__school">
                <img src={reynoldsImg} className="school__img" alt="college-logo"/>
                <div className="school__info">
                    <h3 className="school__info__name">Lambda School</h3>
                    <h3 className="school__info__degree">Full Stack Web Development and Computer Science Bootcamp</h3>
                    <p className="schoool__info__progress">Currently in-progress</p>
                    <p className="school__info__description">
                        A remote tweleve month immersive, hands-on Full Stack Web Development and Computer Science program. Classes have a rigorous structure which helps ensure that students graduate with all the skills they need to make an impact on day one.
                    </p>
                </div>
            </div>
            <div className="education__school">
                <img src={lambdaImg} className="school__img" alt="college-logo"/>
                <div className="school__info">
                    <h3 className="school__info__name">J. Sargeant Reynolds Community College</h3>
                    <h3 className="school__info__degree">Associate of Science: Business Administration</h3>
                    <p className="schoool__info__progress">Graduated</p>
                    <p className="school__info__description">
                        A two-year preparing graduates to begin or advance their careers in the business world with a comprehensive understanding of management principles, business-oriented technology and interpersonal skills.
                    </p>
                    <ul className="school__info__accomplishments">
                        <li>Applied ethical reasoning to business situations</li>
                        <li>Performed effectively within a professional team environment on projects</li>
                        <li>Gained excellent public speaking skills to reach audience members during presentations</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Education;