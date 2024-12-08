import ProjectManager from './projects';

export default class Layout {
    constructor(userData) {
        this.userData = userData;
        this.activeProjectId = null;
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
                        <li><a href="#" class="active" data-view="all">All Tasks</a></li>
                        <li><a href="#" data-view="today">Today</a></li>
                        <li><a href="#" data-view="upcoming">Upcoming</a></li>
                    </ul>
                </div>
                <div class="sidebar-section">
                    <h2>Projects</h2>
                    <ul class="projects-list">
                    </ul>
                    <button class="btn-add-project" id="add-project-btn">+ Add Project</button>
                    <div class="add-project-form" style="display: none;">
                        <input type="text" class="add-project-input" placeholder="Project name">
                        <div class="project-actions">
                            <button class="btn-add-project" id="save-project-btn">Add</button>
                            <button class="btn-cancel" id="cancel-project-btn">Cancel</button>
                        </div>
                    </div>
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

    updateMainHeader(title) {
        const contentHeader = document.querySelector('.content-header h2');
        contentHeader.textContent = title;
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
        this.setupProjectEvents();
    }

    setupEventListeners() {
        const menuToggle = document.querySelector('.menu-toggle');
        const sidebar = document.querySelector('.app-sidebar');
        menuToggle.addEventListener('click', () => {
            sidebar.classList.toggle('active');
        });
    
        const viewLinks = document.querySelectorAll('.sidebar-nav a[data-view]');
        viewLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                
                document.querySelectorAll('.sidebar-nav a, .project-item').forEach(el => {
                    el.classList.remove('active');
                });
                
                link.classList.add('active');
                
                this.activeProjectId = null;
                
                this.updateMainHeader(link.textContent);
            });
        });
    }

    setupProjectEvents() {
        const projectManager = new ProjectManager();
        const projectsList = document.querySelector('.projects-list');
        const addProjectBtn = document.getElementById('add-project-btn');
        const addProjectForm = document.querySelector('.add-project-form');
        const projectInput = document.querySelector('.add-project-input');
        const saveProjectBtn = document.getElementById('save-project-btn');
        const cancelProjectBtn = document.getElementById('cancel-project-btn');
    
        this.renderProjects(projectManager.getAllProjects());
    
        addProjectBtn.addEventListener('click', () => {
            addProjectBtn.style.display = 'none';
            addProjectForm.style.display = 'block';
            projectInput.focus();
        });
    
        cancelProjectBtn.addEventListener('click', () => {
            addProjectBtn.style.display = 'block';
            addProjectForm.style.display = 'none';
            projectInput.value = '';
        });
    
        saveProjectBtn.addEventListener('click', () => {
            const projectName = projectInput.value.trim();
            if (projectName) {
                const newProject = projectManager.createProject(projectName);
                this.renderProjects(projectManager.getAllProjects());
                addProjectBtn.style.display = 'block';
                addProjectForm.style.display = 'none';
                projectInput.value = '';
            }
        });
    
        projectsList.addEventListener('click', (e) => {
            const projectItem = e.target.closest('.project-item');
            
            if (e.target.classList.contains('delete-project')) {
                const projectId = projectItem.dataset.id;
                projectManager.deleteProject(projectId);
                this.renderProjects(projectManager.getAllProjects());
                return;
            }
    
            if (projectItem) {
                const projectId = projectItem.dataset.id;
                const project = projectManager.getProject(projectId);
                
                this.activeProjectId = projectId;
                this.renderProjects(projectManager.getAllProjects());
                this.updateMainHeader(project.name);
    
                document.querySelectorAll('.sidebar-nav a').forEach(link => {
                    link.classList.remove('active');
                });
            }
        });
    }

    renderProjects(projects) {
        const projectsList = document.querySelector('.projects-list');
        projectsList.innerHTML = projects.map(project => `
            <li class="project-item ${project.id === this.activeProjectId ? 'active' : ''}" data-id="${project.id}">
                <span class="project-name">${project.name}</span>
                <button class="delete-project" aria-label="Delete project">×</button>
            </li>
        `).join('');
    }
}