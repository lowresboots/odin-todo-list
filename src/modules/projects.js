export class Project {
    constructor(name) {
        this.id = Date.now().toString();
        this.name = name;
        this.todos = [];
    }
}

export default class ProjectManager {
    constructor() {
        this.projects = [];
        this.loadProjects();
    }

    loadProjects() {
        const savedProjects = localStorage.getItem('bootdoProjects');
        if (savedProjects) {
            this.projects = JSON.parse(savedProjects);
        } else {
            this.createProject('My Tasks');
        }
    }

    saveProjects() {
        localStorage.setItem('bootdoProjects', JSON.stringify(this.projects));
    }

    createProject(name) {
        const project = new Project(name);
        this.projects.push(project);
        this.saveProjects();
        return project;
    }

    deleteProject(projectId) {
        this.projects = this.projects.filter(project => project.id !== projectId);
        this.saveProjects();
    }

    getProject(projectId) {
        return this.projects.find(project => project.id === projectId);
    }

    getAllProjects() {
        return this.projects;
    }
}