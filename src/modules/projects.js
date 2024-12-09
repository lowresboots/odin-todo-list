import TodoManager from './todos';

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
        this.defaultProjectNames = [
            "Dating App for Developers",
            "Cat Pic NFT Marketplace",
            "AI That Makes Coffee",
            "StackOverflow But Nicer",
            "Social Media for Introverts",
            "Bitcoin for Pets",
            "Netflix for Documentation",
            "Uber for Rubber Ducks",
            "Tinder for Design Patterns",
            "JavaScript Framework #8,742",
            "Another Todo App™",
            "Reddit for Office Plants",
            "GitHub for Recipes",
            "Discord for Rubber Ducks",
            "LinkedIn for AI Bots",
            "Netflix for Code Reviews",
            "Spotify for Compilation Errors",
            "Instagram for Terminal Output",
            "TikTok for Algorithms",
            "Twitch for Debugging Sessions",
            "WordPress for Memes",
            "YouTube for Error Messages"
        ];
        this.loadProjects();
    }

    loadProjects() {
        const savedProjects = localStorage.getItem('bootdoProjects');
        if (savedProjects) {
            this.projects = JSON.parse(savedProjects);
        } else {
            this.createDefaultProject();
        }
    }

    saveProjects() {
        localStorage.setItem('bootdoProjects', JSON.stringify(this.projects));
    }

    createDefaultProject() {
        const randomIndex = Math.floor(Math.random() * this.defaultProjectNames.length);
        const defaultName = this.defaultProjectNames[randomIndex];
        const defaultProject = this.createProject(defaultName);
        return defaultProject;
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
    
        const todoManager = new TodoManager();
        todoManager.removeProjectTasks(projectId);
    }

    getProject(projectId) {
        return this.projects.find(project => project.id === projectId);
    }

    getAllProjects() {
        return this.projects;
    }
}