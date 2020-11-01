import React from 'react';
import reynoldsImg from '../../img/reynolds.jpg';
import vcuImg from '../../img/vcu.jpg'

const Education = () => {
    return (
        <section className="education">
            <h2 className="education__heading">Education</h2>
            <div className="education__school">
                <img src={vcuImg} className="school__img" alt="college-logo" />
                <div className="school__info">
                    <h3 className="school__info__name">Virginia Commonwealth University</h3>
                    <h3 className="school__info__degree">Bachelor of Science: Information Systems</h3>
                    <p className="schoool__info__progress">Currently in-progress</p>
                    <p className="school__info__description">
                        A curriculum that combines technical computing knowledge, skills and techniques with relevant business knowledge.
                    </p>
                </div>
            </div>
            <div className="education__school">
                <img src={reynoldsImg} className="school__img" alt="college-logo" />
                <div className="school__info">
                    <h3 className="school__info__name">J. Sargeant Reynolds Community College</h3>
                    <h3 className="school__info__degree">Associate of Science: Business Administration</h3>
                    <p className="schoool__info__progress">Graduated - 3.18 GPA</p>
                    <p className="school__info__description">
                        A two-year program preparing graduates to begin or advance their careers in the business world with a comprehensive understanding of management principles, business-oriented technology and interpersonal skills.
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