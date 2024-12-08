export default class Layout {
    constructor(userData) {
        this.userData = userData;
    }

    createHeader() {
        const header = document.createElement('header');
        header.className = 'app-header';
        
        header.innerHTML = `
            <div class="header-left">
                <button class="menu-toggle" aria-label="Toggle Menu">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <h1>Bootdo</h1>
            </div>
            <div class="header-right">
                <div class="user-profile">
                    <span class="user-name">${this.userData.name}</span>
                    <div class="user-avatar">
                        ${this.createAvatarElement()}
                    </div>
                </div>
            </div>
        `;

        return header;
    }

    createSidebar() {
        const sidebar = document.createElement('aside');
        sidebar.className = 'app-sidebar';
        
        sidebar.innerHTML = `
            <nav class="sidebar-nav">
                <div class="sidebar-section">
                    <h2>Home</h2>
                    <ul>
                        <li><a href="#" class="active">All Tasks</a></li>
                        <li><a href="#">Today</a></li>
                        <li><a href="#">Upcoming</a></li>
                    </ul>
                </div>
                <div class="sidebar-section">
                    <h2>Projects</h2>
                    <ul class="projects-list">
                        <!-- Projects will be added here dynamically -->
                    </ul>
                    <button class="add-project-btn">+ Add Project</button>
                </div>
            </nav>
        `;

        return sidebar;
    }

    createMain() {
        const main = document.createElement('main');
        main.className = 'app-main';
        
        main.innerHTML = `
            <div class="content-header">
                <h2>All Tasks</h2>
                <button class="add-task-btn">+ Add Task</button>
            </div>
            <div class="tasks-container">
                <!-- Tasks will be added here dynamically -->
            </div>
        `;

        return main;
    }

    createAvatarElement() {
        if (this.userData.avatar === 'default') {
            const initials = this.userData.name
                .split(' ')
                .map(word => word[0])
                .join('')
                .toUpperCase()
                .slice(0, 2);
            return `<div class="default-avatar"><span>${initials}</span></div>`;
        }
        return `<div class="user-avatar-img" style="background-image: url(${this.userData.avatar})"></div>`;
    }

    init() {
        const appContainer = document.createElement('div');
        appContainer.className = 'app-container';
        
        appContainer.appendChild(this.createHeader());
        appContainer.appendChild(this.createSidebar());
        appContainer.appendChild(this.createMain());

        const root = document.getElementById('app');
        root.innerHTML = '';
        root.appendChild(appContainer);

        this.setupEventListeners();
    }

    setupEventListeners() {
        const menuToggle = document.querySelector('.menu-toggle');
        const sidebar = document.querySelector('.app-sidebar');
        menuToggle.addEventListener('click', () => {
            sidebar.classList.toggle('active');
        });
    }
}