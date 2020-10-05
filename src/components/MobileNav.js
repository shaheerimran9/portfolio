import React from 'react';
import { Link } from 'react-router-dom';

const MobileNav = (props) => {

    const clickHandler = () => {
        props.toggle();
    };

    return (
        <nav className="mobile-nav" style={{ display: props.isMobileView === true ? 'block' : 'none' }}>
            <i className="fas fa-times mobilenav-toggle" onClick={clickHandler}></i>
            <ul className="mobile-nav__links">
                <Link to="/" onClick={clickHandler}>Home</Link>
                <Link to="/projects" onClick={clickHandler}>Projects</Link>
                <a href="https://www.linkedin.com/in/shaheerimran">
                    <i className="fab fa-linkedin"></i>
                </a>
                <a href="https://github.com/shaheerimran9">
                    <i className="fab fa-github"></i>
                </a>
                <a href="mailto:shaheerimran@icloud.com">
                    <i class="fas fa-envelope"></i>
                </a>
            </ul>
        </nav>
    )
};

export default MobileNav;