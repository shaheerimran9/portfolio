import React from 'react';

const Navbar = () => {
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
            </nav>
        </header>
    );
};

export default Navbar;