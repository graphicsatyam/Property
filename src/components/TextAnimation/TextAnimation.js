import React, { useState, useEffect } from 'react';
import './TextAnimation.css'; // Assume you have CSS file for styling

const TextAnimation = ({ sentences }) => {
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const currentSentence = sentences[currentSentenceIndex];
        let currentIndex = 0;
    let timeout;

    const typeText = () => {
      timeout = setTimeout(() => {
        if (isTyping) {
          if (currentIndex <= currentSentence.length) {
            setDisplayText(currentSentence.substring(0, currentIndex));
            currentIndex++;
          } else {
            setIsTyping(false);
            currentIndex = currentSentence.length;
          }
        } else {
          if (currentIndex >= 0) {
            setDisplayText(currentSentence.substring(0, currentIndex));
            currentIndex--;
          } else {
            setIsTyping(true);
            setCurrentSentenceIndex(prevIndex => (prevIndex + 1) % sentences.length);
          }
        }
        typeText();
      }, isTyping ? 100 : 50); // Typing speed for typing, erasing speed for erasing
    };

    typeText();

    return () => clearTimeout(timeout);
  }, [currentSentenceIndex, isTyping, sentences]);

  return <div className="text-animation"> {displayText}</div>;

};

export default TextAnimation;
