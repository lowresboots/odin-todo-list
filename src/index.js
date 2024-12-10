import './styles/main.css';
import './styles/background.css';
import './styles/onboarding.css';
import './styles/layout.css';
import './styles/projects.css';
import './styles/todos.css';
import bootIcon from './assets/boot.svg';
import Onboarding from './modules/onboarding';
import Layout from './modules/layout';
import TodoManager from './modules/todos';
import ProjectManager from './modules/projects';

const boot = new Image();
boot.src = bootIcon;
boot.classList.add('background-boot');
document.body.appendChild(boot);

const onboarding = new Onboarding();
onboarding.init().then(userData => {
    console.log('User setup complete:', userData);
    
    const todoManager = new TodoManager();
    const projectManager = new ProjectManager(todoManager);
    
    const layout = new Layout(userData, todoManager, projectManager);
    layout.init();
    
    const appContainer = document.querySelector('.app-container');
    const existingBoot = document.querySelector('.background-boot');
    if (existingBoot) {
        document.body.removeChild(existingBoot);
        appContainer.prepend(boot);
    }
});