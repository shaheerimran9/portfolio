import React from 'react';

const MobileNav = (props) => {
    return (
        <nav className="mobile-nav" style={{display: props.isMobileView === true ? 'block' : 'none'}}>
            <i className="fas fa-times mobilenav-toggle" onClick={props.toggle}></i>
            <ul className="mobile-nav__links">
                <a href="./index.html">Home</a>
                <a href="#">Projects</a>
                <a href="#">About Me</a>
                <a href="#">
                    <i className="fab fa-linkedin"></i>
                </a>
                <a href="https://github.com/shaheerimran9">
                    <i className="fab fa-github"></i>
                </a>
            </ul>
        </nav>
    )
};

export default MobileNav;