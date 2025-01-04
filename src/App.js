import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar'; // Import Navbar
import Home from './components/Home'; 
import Intro from './components/Intro';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import AboutMe from './components/AboutMe';

const App = () => {
    return (
        <Router>
            <div>
                {/* Include Navbar inside the Router */}
                <Navbar />
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/intro" element={<Intro />} />
                        <Route path="/AboutMe" element={<AboutMe />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/skills" element={<Skills />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
};

export default App;
