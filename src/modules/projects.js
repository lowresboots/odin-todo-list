import TodoManager, { Todo } from './todos';

export class Project {
    constructor(name) {
        this.id = Date.now().toString();
        this.name = name;
        this.todos = [];
    }
}

export default class ProjectManager {
    constructor(todoManager) {
        this.projects = [];
        this.todoManager = todoManager;
        this.defaultProjects = [
            {
                name: "Dating App for Developers",
                task: {
                    title: "Fix bug where all matches are 'undefined'",
                    description: "Users complaining they only match with null or undefined. Need to implement proper type checking.",
                    priority: "high",
                    dueDate: () => new Date(Date.now() + 86400000).toISOString().split('T')[0]
                }
            },
            {
                name: "Cat Pic NFT Marketplace", 
                task: {
                    title: "Implement anti-dog image filter",
                    description: "Users keep uploading dog pics. Need ML model to detect and block non-feline content.",
                    priority: "medium",
                    dueDate: () => new Date(Date.now() + 172800000).toISOString().split('T')[0]
                }
            },
            {
                name: "AI That Makes Coffee",
                task: {
                    title: "Debug infinite coffee loop",
                    description: "AI keeps brewing coffee until RAM is full. Need to implement proper brew cycle termination.",
                    priority: "high",
                    dueDate: () => new Date(Date.now() + 86400000).toISOString().split('T')[0]
                }
            },
            {
                name: "StackOverflow But Nicer",
                task: {
                    title: "Add mandatory compliments",
                    description: "Before marking as duplicate, users must say something nice first.",
                    priority: "medium", 
                    dueDate: () => new Date(Date.now() + 259200000).toISOString().split('T')[0]
                }
            },
            {
                name: "Social Media for Introverts",
                task: {
                    title: "Implement 'Pretend to be Offline' feature",
                    description: "Users requesting ability to appear offline while still lurking.",
                    priority: "high",
                    dueDate: () => new Date(Date.now() + 432000000).toISOString().split('T')[0]
                }
            },
            {
                name: "Bitcoin for Pets",
                task: {
                    title: "Fix treat-to-crypto conversion rate",
                    description: "Cats gaming the system by doing multiple transactions of the same trick.",
                    priority: "medium",
                    dueDate: () => new Date(Date.now() + 345600000).toISOString().split('T')[0]
                }
            },
            {
                name: "Netflix for Documentation",
                task: {
                    title: "Add 'Skip Intro' for README files",
                    description: "Users want to skip straight to the installation commands.",
                    priority: "low",
                    dueDate: () => new Date(Date.now() + 518400000).toISOString().split('T')[0]
                }
            },
            {
                name: "Uber for Rubber Ducks",
                task: {
                    title: "Fix duck surge pricing",
                    description: "Surge rates skyrocketing during peak debugging hours.",
                    priority: "medium",
                    dueDate: () => new Date(Date.now() + 172800000).toISOString().split('T')[0]
                }
            },
            {
                name: "Tinder for Design Patterns",
                task: {
                    title: "Handle Singleton rejection anxiety",
                    description: "Singleton pattern reporting feelings of loneliness and abandonment.",
                    priority: "high",
                    dueDate: () => new Date(Date.now() + 86400000).toISOString().split('T')[0]
                }
            },
            {
                name: "JavaScript Framework #8,742",
                task: {
                    title: "Invent new buzzwords",
                    description: "Current marketing terms not confusing enough. Need more paradigm shifts.",
                    priority: "low",
                    dueDate: () => new Date(Date.now() + 604800000).toISOString().split('T')[0]
                }
            },
            {
                name: "Another Todo App™",
                task: {
                    title: "Add todo item to track todo items",
                    description: "Meta-todo functionality requested by project manager.",
                    priority: "medium",
                    dueDate: () => new Date(Date.now() + 259200000).toISOString().split('T')[0]
                }
            },
            {
                name: "Reddit for Office Plants",
                task: {
                    title: "Fix overwatering notification spam",
                    description: "Cacti complaining about excessive hydration suggestions.",
                    priority: "high",
                    dueDate: () => new Date(Date.now() + 86400000).toISOString().split('T')[0]
                }
            },
            {
                name: "GitHub for Recipes",
                task: {
                    title: "Resolve merge conflicts in grandma's cookies",
                    description: "Multiple forks of chocolate chip recipe causing deployment issues.",
                    priority: "medium",
                    dueDate: () => new Date(Date.now() + 172800000).toISOString().split('T')[0]
                }
            },
            {
                name: "Discord for Rubber Ducks",
                task: {
                    title: "Implement quack reactions",
                    description: "Need more expressive ways to respond to debugging sessions.",
                    priority: "low",
                    dueDate: () => new Date(Date.now() + 345600000).toISOString().split('T')[0]
                }
            },
            {
                name: "LinkedIn for AI Bots",
                task: {
                    title: "Filter out spam from GPT-1",
                    description: "Older models keep sending connection requests to everyone.",
                    priority: "medium",
                    dueDate: () => new Date(Date.now() + 259200000).toISOString().split('T')[0]
                }
            },
            {
                name: "Netflix for Code Reviews",
                task: {
                    title: "Add 'Skip Whitespace Drama' button",
                    description: "Reviewers spending too much time debating tabs vs spaces.",
                    priority: "high",
                    dueDate: () => new Date(Date.now() + 86400000).toISOString().split('T')[0]
                }
            },
            {
                name: "Spotify for Compilation Errors",
                task: {
                    title: "Create 'Greatest Bugs' playlist",
                    description: "Users requesting curated collection of most painful debug sessions.",
                    priority: "low",
                    dueDate: () => new Date(Date.now() + 432000000).toISOString().split('T')[0]
                }
            },
            {
                name: "Instagram for Terminal Output",
                task: {
                    title: "Add more retro filters",
                    description: "Users want their stack traces to look more aesthetic.",
                    priority: "medium",
                    dueDate: () => new Date(Date.now() + 172800000).toISOString().split('T')[0]
                }
            },
            {
                name: "TikTok for Algorithms",
                task: {
                    title: "Optimize dance moves for O(1)",
                    description: "Current algorithmic dances too computationally expensive.",
                    priority: "high",
                    dueDate: () => new Date(Date.now() + 86400000).toISOString().split('T')[0]
                }
            },
            {
                name: "Twitch for Debugging Sessions",
                task: {
                    title: "Add commercial breaks for coffee runs",
                    description: "Streamers need automated pauses when caffeine runs low.",
                    priority: "medium",
                    dueDate: () => new Date(Date.now() + 259200000).toISOString().split('T')[0]
                }
            },
            {
                name: "WordPress for Memes",
                task: {
                    title: "Install 73 unnecessary plugins",
                    description: "Site not running slow enough, need more features nobody asked for.",
                    priority: "low",
                    dueDate: () => new Date(Date.now() + 518400000).toISOString().split('T')[0]
                }
            },
            {
                name: "YouTube for Error Messages",
                task: {
                    title: "Implement 'Skip to Stack Overflow' button",
                    description: "Users requesting direct link to someone with same error.",
                    priority: "high",
                    dueDate: () => new Date(Date.now() + 86400000).toISOString().split('T')[0]
                }
            }
         ];
        this.loadProjects();
    }

    loadProjects() {
        const savedProjects = localStorage.getItem('bootdoProjects');
        if (savedProjects) {
            this.projects = JSON.parse(savedProjects);
        } else {
            const defaultProject = this.createDefaultProject();
            this.projects = [defaultProject];
            this.saveProjects();
        }
    }

    saveProjects() {
        localStorage.setItem('bootdoProjects', JSON.stringify(this.projects));
    }

    createDefaultProject() {
        const randomIndex = Math.floor(Math.random() * this.defaultProjects.length);
        const defaultProject = this.defaultProjects[randomIndex];
        const project = this.createProject(defaultProject.name);
        
        const todo = new Todo(
            defaultProject.task.title,
            defaultProject.task.description,
            defaultProject.task.dueDate(),
            defaultProject.task.priority
        );
        this.todoManager.addTodo(project.id, todo);
        
        return project;
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
    
        this.todoManager.removeProjectTasks(projectId);
    }

    getProject(projectId) {
        return this.projects.find(project => project.id === projectId);
    }

    getAllProjects() {
        return this.projects;
    }
}