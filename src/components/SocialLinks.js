import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const SocialLinks = () => {
    return (
        <div>
            <a href="https://github.com/somkumar9568" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} size="1x" />
            </a>
            <a href="https://www.instagram.com/somkumar9568/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} size="1x" />
            </a>
            <a href="https://x.com/somkumar9568" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter} size="1x" />
            </a>
            <a href="https://www.linkedin.com/in/som-kumar-3603b6206/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} size="1x" />
            </a>
        </div>
    );
};

export default SocialLinks;
