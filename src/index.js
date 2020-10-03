import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css'
import Container from './components/Container'
import Navbar from './components/Navbar';
import Personal from './components/Personal';
import Education from './components/Education'

const App = () => {
    return (
        <Container>
            <Navbar />
            <Personal />
            <Education />
        </Container>
    )
};

ReactDOM.render(<App />, document.querySelector('#root'));