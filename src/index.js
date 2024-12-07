import './styles/main.css';
import './styles/background.css';
import './styles/onboarding.css';
import bootIcon from './assets/boot.svg';
import Onboarding from './modules/onboarding';

const boot = new Image();
boot.src = bootIcon;
boot.classList.add('background-boot');
document.body.appendChild(boot);

const onboarding = new Onboarding();
onboarding.init().then(userData => {
    console.log('User setup complete:', userData);
});