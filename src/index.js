import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css'
import Container from './components/Homepage/Container'
import Navbar from './components/Homepage/Navbar';
import Personal from './components/Homepage/Personal';
import Education from './components/Homepage/Education';
import Projects from './components/Homepage/Projects';

const App = () => {
    return (
        <Container>
            <Navbar />
            <Personal />
            <Education />
            <Projects />
        </Container>
    )
};

ReactDOM.render(<App />, document.querySelector('#root'));