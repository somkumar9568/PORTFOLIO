import React from "react";
import "./AboutMe.css";
import img1 from './images/Som.png';

const AboutMe = () => {
  return (
    <div className="about-container">
      <div>
        <h1>About Me</h1>
      </div>
      <div className="about-content">
        {/* Profile Image */}
        <div className="intro-image">
          <img src={img1} alt="Profile" className="profile-image" />
        </div>

        {/* About Me Text */}
        <div className="text-content">
          <p>
            I'm a <strong>self-taught</strong> web designer, developer,
            entrepreneur, athlete, musician, and futurist from California.
          </p>
          <p>
            I am currently working with <strong>Scorpion</strong> and enjoy
            building beautiful sites for our clients!
          </p>
          <p>
            My passion and dream is to use technology in a way that benefits
            everyone. I love designing web pages and making them responsive for
            any screen size. I love solving programming challenges; there's
            always a way!
          </p>
          <div className="dev-skills">
            <h3>Dev Skills:</h3>
            <p>
              HTML5, CSS3 and Bootstrap, JavaScript, jQuery, Ajax, PHP, MySql,Laravel
              Git, Responsive, Mobile-First Design <br />
              (Go ahead and resize the window!)
            </p>
          </div>
          <p>
            I've been using <strong>Free Code Camp, The Odin Project, Codecademy</strong>, 
            and other free resources for my education.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
