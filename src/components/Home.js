import React from 'react';
import './App.css';
import Intro from './Intro';
import AboutMe from './AboutMe';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import './TypingAnimation';

const Home = () => {
    return (
        <div>
            <main>
                <Intro />
                <AboutMe />
                <Projects />
                <Skills />
                <Contact />
            </main>
        </div>
    );
}

export default Home;
