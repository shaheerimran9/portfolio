import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MobileNav from './MobileNav';

const Navbar = () => {
    const [mobileView, setMobileView] = useState(false);

    const viewToggle = () => {
        setMobileView(!mobileView);
    };

    return (
        <header>
            <nav className="main-nav">
                <Link to="/">
                    <h2 className="main-nav__title">Shaheer Imran</h2>
                </Link>
                <div className="main-nav__links">
                    <Link to="/projects">Projects</Link>
                    <a href="https://www.linkedin.com/in/shaheerimran">
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="https://github.com/shaheerimran9">
                        <i className="fab fa-github"></i>
                    </a>
                    <a href="mailto:shaheerimran@icloud.com">
                        <i class="fas fa-envelope"></i>
                    </a>
                </div>
                <i className="fas fa-bars nav-toggle" onClick={viewToggle}></i>
            </nav>
            <MobileNav toggle={viewToggle} isMobileView={mobileView} />
        </header>
    );
};

export default Navbar;