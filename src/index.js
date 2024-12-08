import './styles/main.css';
import './styles/background.css';
import './styles/onboarding.css';
import './styles/layout.css';
import bootIcon from './assets/boot.svg';
import Onboarding from './modules/onboarding';
import Layout from './modules/layout';

const boot = new Image();
boot.src = bootIcon;
boot.classList.add('background-boot');
document.body.appendChild(boot); // Keep this for initial loading/onboarding

const onboarding = new Onboarding();
onboarding.init().then(userData => {
    console.log('User setup complete:', userData);
    const layout = new Layout(userData);
    layout.init();
    
    const appContainer = document.querySelector('.app-container');
    const existingBoot = document.querySelector('.background-boot');
    if (existingBoot) {
        document.body.removeChild(existingBoot);
        appContainer.prepend(boot);
    }
});