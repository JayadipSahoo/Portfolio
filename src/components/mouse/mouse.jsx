import { useEffect} from 'react';
import './mouse.css'; // Create a CSS file for styling

const MouseTrail = () => {
  useEffect(() => {
    const container = document.getElementById('particle-container');

    const createParticle = () => {
      const particle = document.createElement('div');
      particle.classList.add('particle');

      const colors = ['#ffff', '#00FF00', '#00FFFF','#ffff', '#00FF00', '#00FFFF'];
      const color = colors[Math.floor(Math.random() * colors.length)];
      particle.style.background = color;

      const size = Math.random() * 20 + 5;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;

      const x = Math.random() * container.offsetWidth;
      const y = Math.random() * container.offsetHeight;
      particle.style.left = `${x}px`;
      particle.style.top = `${y}px`;

      container.appendChild(particle);

      setTimeout(() => {
        particle.remove();
      }, 2000);
    };

    const interval = setInterval(createParticle, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <div id="particle-container" />;
};





export default MouseTrail;
