import React, { useEffect } from 'react';

const TypingAnimation = () => {
    useEffect(() => {
        const words = ["Web Developer", "Web Designer", "Frontend Developer"];
        let wordIndex = 0;
        let charIndex = 0;
        let currentWord = '';
        const typingSpeed = 100;
        const erasingSpeed = 50;
        const newWordDelay = 2000;

        function type() {
            if (charIndex < words[wordIndex].length) {
                currentWord += words[wordIndex].charAt(charIndex);
                document.querySelector('.typing-animation').textContent = currentWord;
                charIndex++;
                setTimeout(type, typingSpeed);
            } else {
                setTimeout(erase, newWordDelay);
            }
        }

        function erase() {
            if (charIndex > 0) {
                currentWord = currentWord.slice(0, -1);
                document.querySelector('.typing-animation').textContent = currentWord;
                charIndex--;
                setTimeout(erase, erasingSpeed);
            } else {
                wordIndex = (wordIndex + 1) % words.length;
                setTimeout(type, typingSpeed + 1100);
            }
        }

        type();
    }, []);

    return <span className="typing-animation"></span>;
};

export default TypingAnimation;
