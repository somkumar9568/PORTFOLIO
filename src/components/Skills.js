import React, { useEffect } from 'react';

const Skills = () => {
    useEffect(() => {
        const progressBars = document.querySelectorAll('.progress-done');

        progressBars.forEach(bar => {
            setTimeout(() => {
                bar.style.width = bar.getAttribute('data-done') + '%';
                bar.style.opacity = 1;
            }, 500);
        });

        const circles = document.querySelectorAll('.circle');

        circles.forEach(circle => {
            let percent = circle.getAttribute('data-percent');
            circle.style.setProperty('--percent', percent);
        });
    }, []);

    return (
        <div className="skills-section">
            <h2>Technical Skills</h2>
            <div className="skill-bar">
                <p>HTML</p>
                <div className="progress">
                    <div className="progress-done" data-done="90"></div>
                </div>
            </div>
            <div className="skill-bar">
                <p>CSS</p>
                <div className="progress">
                    <div className="progress-done" data-done="80"></div>
                </div>
            </div>
            <div className="skill-bar">
                <p>JAVASCRIPT</p>
                <div className="progress">
                    <div className="progress-done" data-done="75"></div>
                </div>
            </div>
            <div className="skill-bar">
                <p>PHP</p>
                <div className="progress">
                    <div className="progress-done" data-done="85"></div>
                </div>
            </div>
            <div className="skill-bar">
                <p>MYSQL</p>
                <div className="progress">
                    <div className="progress-done" data-done="80"></div>
                </div>
            </div>
            <div className="skill-bar">
                <p>REACT JS</p>
                <div className="progress">
                    <div className="progress-done" data-done="65"></div>
                </div>
            </div>
            {/* Repeat for other skills */}
        </div>
    );
};

export default Skills;
