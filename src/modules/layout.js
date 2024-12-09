import ProjectManager from './projects';
import TodoManager, { Todo } from './todos';

export default class Layout {
    constructor(userData) {
        this.userData = userData;
        this.activeProjectId = null;
        this.todoManager = new TodoManager();
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
                        <li><a href="#" data-view="completed">Completed</a></li>
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

    createTodoModal() {
        const modal = document.createElement('div');
        modal.className = 'modal-overlay';
        
        const projectManager = new ProjectManager();
        const projects = projectManager.getAllProjects();
        const projectOptions = projects
            .map(project => `
                <option value="${project.id}" ${project.id === this.activeProjectId ? 'selected' : ''}>
                    ${project.name}
                </option>
            `)
            .join('');
        
        modal.innerHTML = `
            <div class="todo-modal">
                <h2>Add New Task</h2>
                <form class="todo-form">
                    <div class="form-group">
                        <label for="todo-title">Title</label>
                        <input type="text" id="todo-title" required>
                    </div>
                    <div class="form-group">
                        <label for="todo-project">Project</label>
                        <select id="todo-project" required>
                            ${projectOptions}
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="todo-description">Description</label>
                        <textarea id="todo-description" rows="3"></textarea>
                    </div>
                    <div class="form-group">
                        <label for="todo-due-date">Due Date</label>
                        <input type="date" id="todo-due-date">
                    </div>
                    <div class="form-group">
                        <label for="todo-priority">Priority</label>
                        <select id="todo-priority">
                            <option value="low">Low</option>
                            <option value="medium" selected>Medium</option>
                            <option value="high">High</option>
                        </select>
                    </div>
                    <div class="todo-actions">
                        <button type="submit" class="btn-todo btn-primary">Add Task</button>
                        <button type="button" class="btn-todo btn-secondary" id="cancel-todo">Cancel</button>
                    </div>
                </form>
            </div>
        `;
    
        return modal;
    }

    showTodoModal() {
        const modal = this.createTodoModal();
        document.body.appendChild(modal);
    
        const form = modal.querySelector('.todo-form');
        const cancelButton = modal.querySelector('#cancel-todo');
    
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const title = document.getElementById('todo-title').value;
            const description = document.getElementById('todo-description').value;
            const dueDate = document.getElementById('todo-due-date').value;
            const priority = document.getElementById('todo-priority').value;
            const projectId = document.getElementById('todo-project').value;
    
            if (title.trim()) {
                const todo = new Todo(title, description, dueDate, priority);
                this.todoManager.addTodo(projectId, todo);
                this.renderTodos();
                document.body.removeChild(modal);
            }
        });
    
        cancelButton.addEventListener('click', () => {
            document.body.removeChild(modal);
        });
    }

    renderTodos(view = 'all') {
        const tasksContainer = document.querySelector('.tasks-container');
        let todos;
    
        switch(view) {
            case 'today':
                todos = this.todoManager.getTodayTodos();
                break;
            case 'upcoming':
                todos = this.todoManager.getUpcomingTodos();
                break;
            case 'completed':
                todos = this.todoManager.getCompletedTodos();
                break;
            default:
                todos = this.activeProjectId 
                    ? this.todoManager.getTodos(this.activeProjectId)
                    : this.todoManager.getActiveTodos();
        }
    
        tasksContainer.innerHTML = todos.length ? todos.map(todo => `
            <div class="todo-item ${todo.completed ? 'completed' : ''}" data-id="${todo.id}" data-project-id="${todo.projectId || this.activeProjectId}">
                <input type="checkbox" class="todo-checkbox" ${todo.completed ? 'checked' : ''}>
                <div class="todo-content">
                    <div class="todo-title">${todo.title}</div>
                    ${todo.description ? `<div class="todo-description">${todo.description}</div>` : ''}
                    <div class="todo-metadata">
                        ${todo.dueDate ? `<span>Due: ${todo.dueDate}</span>` : ''}
                        <span>Priority: ${todo.priority}</span>
                    </div>
                </div>
                <div class="todo-actions">
                    <button class="delete-todo">×</button>
                </div>
            </div>
        `).join('') : '<p>No tasks yet</p>';
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
        this.setupTodoEvents();
        this.renderTodos('all');
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

                const view = link.dataset.view;
                this.updateMainHeader(link.textContent);
                this.renderTodos(view);
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
                this.renderTodos();

                document.querySelectorAll('.sidebar-nav a').forEach(link => {
                    link.classList.remove('active');
                });
            }
        });
    }

    setupTodoEvents() {
        const addTaskBtn = document.querySelector('.add-task-btn');
        const tasksContainer = document.querySelector('.tasks-container');
    
        addTaskBtn.addEventListener('click', () => {
            this.showTodoModal();
        });
    
        tasksContainer.addEventListener('click', (e) => {
            const todoItem = e.target.closest('.todo-item');
            if (!todoItem) return;
            
            const todoId = todoItem.dataset.id;
            const projectId = todoItem.dataset.projectId || this.activeProjectId;
    
            if (e.target.classList.contains('delete-todo')) {
                this.todoManager.deleteTodo(projectId, todoId);
                this.renderTodos(document.querySelector('.sidebar-nav a.active').dataset.view);
            }
            
            if (e.target.classList.contains('todo-checkbox')) {
                this.todoManager.toggleTodoComplete(projectId, todoId);
                const currentView = document.querySelector('.sidebar-nav a.active').dataset.view;
                this.renderTodos(currentView);
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