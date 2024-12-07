import './styles/main.css';
import './styles/background.css';
import bootIcon from './assets/boot.svg';

const boot = new Image();
boot.src = bootIcon;
boot.classList.add('background-boot');
document.body.appendChild(boot);

console.log('Bootdo initialization successful!');