import React, { useState } from 'react';
import MobileNav from './MobileNav';

const Navbar = () => {
    const [mobileView, setMobileView] = useState(false);

    const viewToggle = () => {
        setMobileView(!mobileView);
    };

    return (
        <header>
            <nav className="main-nav">
                <h2 className="main-nav__title">Shaheer Imran</h2>
                <div className="main-nav__links">
                    <a href="#">Projects</a>
                    <a href="#">About Me</a>
                    <a href="#">
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="https://github.com/shaheerimran9">
                        <i className="fab fa-github"></i>
                    </a>
                </div>
                <i className="fas fa-bars nav-toggle" onClick={viewToggle}></i>
            </nav>
            <MobileNav toggle={viewToggle} isMobileView={mobileView}/>
        </header>
    );
};

export default Navbar;