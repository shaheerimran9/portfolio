import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Container from './components/Container'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home/Home';
import ProjectsPage from './components/Projects/ProjectsPage';
import './styles.css'

const App = () => {
    return (
        <Router>
            <Container>
                <Navbar />
                <Route exact path="/" component={Home} />
                <Route path="/projects" component={ProjectsPage} />
                <Footer />
            </Container>
        </Router>
    )
};

ReactDOM.render(<App />, document.querySelector('#root'));