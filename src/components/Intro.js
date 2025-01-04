import React from 'react';
import img1 from './images/Som.png';
import SocialLinks from './SocialLinks';
import TypingAnimation from './TypingAnimation'; 

const Intro = () => {
    return (
        <section className="intro" id="intro">
            <div className="intro-text">
                <h1>
                    Hello, It's Me<span> Som Kumar</span><br />
                    And I'm a <TypingAnimation /> {/* Use TypingAnimation here */}
                </h1>
                <p>
                    I'm a web designer with extensive experience for over 1 year. My expertise is in creating and designing websites, frontend design, and much more. An enthusiastic and passionate human with a strong interest in web development. Blissful and quick learner, newbie tech geek, music lover.
                </p>
                <div className="social-links">
                    <SocialLinks />
                </div>
                <a href="/about" className="btn">More About Me</a>
            </div>
            <div className="intro-image">
                <img src={img1} alt="Som Kumar" />
            </div>
        </section>
    );
};

export default Intro;
