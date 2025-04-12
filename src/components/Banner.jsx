// Banner.jsx
import { useEffect, useState } from 'react';

export default function Banner() {
  const sentences = [
    'I am a Software Engineer',
    'I am a Student',
    'I am Passionate about Technology'
  ];
  const colors = ['#00FF00', '#FF204E', '#00FFFF']; // Neon green, pink, cyan
  const [displayedText, setDisplayedText] = useState('');
  const [sentenceIndex, setSentenceIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentSentence = sentences[sentenceIndex];
    
    const typingSpeed = isDeleting ? 50 : 100;
    const delayBetweenSentences = 1500;

    const timer = setTimeout(() => {
      if (!isDeleting && charIndex < currentSentence.length) {
        setDisplayedText(currentSentence.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else if (isDeleting && charIndex > 0) {
        setDisplayedText(currentSentence.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else if (!isDeleting && charIndex === currentSentence.length) {
        setTimeout(() => setIsDeleting(true), delayBetweenSentences);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setSentenceIndex((sentenceIndex + 1) % sentences.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, sentenceIndex, sentences]);

  return (
    <div className="Banner">
      <div className="introduction">
        <h1>Hi! I'm Sakib</h1>
        <h2 className="typing-effect" style={{ color: colors[sentenceIndex] }}>
          {displayedText}<span className="cursor">|</span>
        </h2>
        <ul className="about-list">
          <li>💪 Known for my resilience and ability to overcome challenges.</li>
          <li>🌟 Open to new ideas and always eager to learn.</li>
          <li>🧠 Possess strong logical thinking skills for problem-solving.</li>
          <li>🔥 Driven by a passion for technology and algorithms.</li>
          <li>🚀 Aspire to become a versatile full-stack developer.</li>
          <li>💡 Committed to delivering innovative solutions to complex challenges.</li>
        </ul>
        <div className="socials">
          <a href="https://www.linkedin.com/in/sbque05/" target="_blank" rel="noopener noreferrer">
            <img src="./Images/LN logo.png" alt="linkedin" />
          </a>
          <a href="https://github.com/Sakib-05" target="_blank" rel="noopener noreferrer">
            <img src="./Images/github logo.png" alt="github" />
          </a>
          <a href="https://www.instagram.com/soku_ui/" target="_blank" rel="noopener noreferrer">
            <img src="./Images/instagram logo.png" alt="instagram" />
          </a>
        </div>
      </div>
      <img id="profilePic" src="./Images/profile picture.jpeg" alt="profile picture" />
    </div>
  );
}