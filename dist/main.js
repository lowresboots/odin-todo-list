/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/layout.js":
/*!*******************************!*\
  !*** ./src/modules/layout.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Layout)
/* harmony export */ });
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ "./src/modules/projects.js");
/* harmony import */ var _todos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todos */ "./src/modules/todos.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


var Layout = /*#__PURE__*/function () {
  function Layout(userData, todoManager, projectManager) {
    _classCallCheck(this, Layout);
    this.userData = userData;
    this.activeProjectId = null;
    this.todoManager = todoManager;
    this.projectManager = projectManager;
  }
  return _createClass(Layout, [{
    key: "createHeader",
    value: function createHeader() {
      var header = document.createElement('header');
      header.className = 'app-header';
      header.innerHTML = "\n            <div class=\"header-left\">\n                <button class=\"menu-toggle\" aria-label=\"Toggle Menu\">\n                    <span></span>\n                    <span></span>\n                    <span></span>\n                </button>\n                <h1 class=\"app-title\"><span class=\"boot\">Boot</span><span class=\"do\">do</span></h1>\n            </div>\n            <div class=\"header-right\">\n                <div class=\"user-profile\">\n                    <span class=\"user-name\">".concat(this.userData.name, "</span>\n                    <div class=\"user-avatar\">\n                        ").concat(this.createAvatarElement(), "\n                    </div>\n                    <div class=\"user-dropdown\" style=\"display: none;\">\n                        <div class=\"dropdown-item about\">About</div>\n                        <div class=\"dropdown-item sign-out\">Sign Out</div>\n                    </div>\n                </div>\n            </div>\n        ");
      return header;
    }
  }, {
    key: "createSidebar",
    value: function createSidebar() {
      var sidebar = document.createElement('aside');
      sidebar.className = 'app-sidebar';
      sidebar.innerHTML = "\n            <nav class=\"sidebar-nav\">\n                <div class=\"sidebar-section\">\n                    <h2>Home</h2>\n                    <ul>\n                        <li><a href=\"#\" class=\"active\" data-view=\"all\">All Tasks</a></li>\n                        <li><a href=\"#\" data-view=\"today\">Today</a></li>\n                        <li><a href=\"#\" data-view=\"upcoming\">Upcoming</a></li>\n                        <li><a href=\"#\" data-view=\"completed\">Completed</a></li>\n                    </ul>\n                </div>\n                <div class=\"sidebar-section\">\n                    <h2>Projects</h2>\n                    <ul class=\"projects-list\">\n                    </ul>\n                    <button class=\"btn-add-project\" id=\"add-project-btn\">+ Add Project</button>\n                    <div class=\"add-project-form\" style=\"display: none;\">\n                        <input type=\"text\" class=\"add-project-input\" placeholder=\"Project name\">\n                        <div class=\"project-actions\">\n                            <button class=\"btn-add-project\" id=\"save-project-btn\">Add</button>\n                            \n                        </div>\n                    </div>\n                </div>\n            </nav>\n        ";
      return sidebar;
    }
  }, {
    key: "createMain",
    value: function createMain() {
      var main = document.createElement('main');
      main.className = 'app-main';
      main.innerHTML = "\n            <div class=\"content-header\">\n                <h2>All Tasks</h2>\n                <button class=\"add-task-btn\">+ Add Task</button>\n            </div>\n            <div class=\"tasks-container\">\n            </div>\n        ";
      return main;
    }
  }, {
    key: "createAvatarElement",
    value: function createAvatarElement() {
      if (this.userData.avatar === 'default') {
        var initials = this.userData.name.split(' ').map(function (word) {
          return word[0];
        }).join('').toUpperCase().slice(0, 2);
        return "<div class=\"default-avatar\"><span>".concat(initials, "</span></div>");
      }
      return "<div class=\"user-avatar-img\" style=\"background-image: url(".concat(this.userData.avatar, ")\"></div>");
    }
  }, {
    key: "createTodoModal",
    value: function createTodoModal() {
      var _this = this;
      var todoToEdit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var modal = document.createElement('div');
      modal.className = 'modal-overlay';
      var projects = this.projectManager.getAllProjects();
      var projectOptions = projects.map(function (project) {
        return "\n                <option value=\"".concat(project.id, "\" ").concat(project.id === ((todoToEdit === null || todoToEdit === void 0 ? void 0 : todoToEdit.projectId) || _this.activeProjectId) ? 'selected' : '', ">\n                    ").concat(project.name, "\n                </option>\n            ");
      }).join('');
      modal.innerHTML = "\n            <div class=\"todo-modal\">\n                <h2>".concat(todoToEdit ? 'Edit Task' : 'Add New Task', "</h2>\n                <form class=\"todo-form\">\n                    <div class=\"form-group\">\n                        <label for=\"todo-title\">Title</label>\n                        <input type=\"text\" id=\"todo-title\" value=\"").concat((todoToEdit === null || todoToEdit === void 0 ? void 0 : todoToEdit.title) || '', "\" required>\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"todo-project\">Project</label>\n                        <select id=\"todo-project\" required>\n                            ").concat(projectOptions, "\n                        </select>\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"todo-description\">Description</label>\n                        <textarea id=\"todo-description\" rows=\"3\">").concat((todoToEdit === null || todoToEdit === void 0 ? void 0 : todoToEdit.description) || '', "</textarea>\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"todo-due-date\">Due Date</label>\n                        <input type=\"date\" id=\"todo-due-date\" value=\"").concat((todoToEdit === null || todoToEdit === void 0 ? void 0 : todoToEdit.dueDate) || '', "\">\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"todo-priority\">Priority</label>\n                        <select id=\"todo-priority\">\n                            <option value=\"low\" ").concat((todoToEdit === null || todoToEdit === void 0 ? void 0 : todoToEdit.priority) === 'low' ? 'selected' : '', ">Low</option>\n                            <option value=\"medium\" ").concat(!todoToEdit || (todoToEdit === null || todoToEdit === void 0 ? void 0 : todoToEdit.priority) === 'medium' ? 'selected' : '', ">Medium</option>\n                            <option value=\"high\" ").concat((todoToEdit === null || todoToEdit === void 0 ? void 0 : todoToEdit.priority) === 'high' ? 'selected' : '', ">High</option>\n                        </select>\n                    </div>\n                    <div class=\"todo-actions\">\n                        <button type=\"submit\" class=\"btn-todo btn-primary\">\n                            ").concat(todoToEdit ? 'Update' : 'Add Task', "\n                        </button>\n                        ").concat(todoToEdit ? '<button type="button" class="btn-todo btn-danger" id="delete-todo">Delete</button>' : '', "\n                        <button type=\"button\" class=\"btn-todo btn-secondary\" id=\"cancel-todo\">Cancel</button>\n                    </div>\n                </form>\n            </div>\n        ");
      return modal;
    }
  }, {
    key: "showTodoModal",
    value: function showTodoModal() {
      var _this2 = this;
      var todoToEdit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var projectId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var modal = this.createTodoModal(todoToEdit);
      document.body.appendChild(modal);
      var form = modal.querySelector('.todo-form');
      var cancelButton = modal.querySelector('#cancel-todo');
      var deleteButton = modal.querySelector('#delete-todo');
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        var title = document.getElementById('todo-title').value;
        var description = document.getElementById('todo-description').value;
        var dueDate = document.getElementById('todo-due-date').value;
        var priority = document.getElementById('todo-priority').value;
        var selectedProjectId = document.getElementById('todo-project').value;
        if (title.trim()) {
          if (todoToEdit) {
            todoToEdit.title = title;
            todoToEdit.description = description;
            todoToEdit.dueDate = dueDate;
            todoToEdit.priority = priority;
            _this2.todoManager.updateTodo(projectId, todoToEdit.id, todoToEdit);
          } else {
            var todo = new _todos__WEBPACK_IMPORTED_MODULE_1__.Todo(title, description, dueDate, priority);
            _this2.todoManager.addTodo(selectedProjectId, todo);
          }
          _this2.renderCurrentView();
          document.body.removeChild(modal);
        }
      });
      cancelButton.addEventListener('click', function () {
        document.body.removeChild(modal);
      });
      if (deleteButton) {
        deleteButton.addEventListener('click', function () {
          _this2.todoManager.deleteTodo(projectId, todoToEdit.id);
          _this2.renderCurrentView();
          document.body.removeChild(modal);
        });
      }
    }
  }, {
    key: "showSignOutConfirmation",
    value: function showSignOutConfirmation() {
      var modal = document.createElement('div');
      modal.className = 'modal-overlay';
      modal.innerHTML = "\n            <div class=\"todo-modal\">\n                <h2>Sign Out</h2>\n                <p>Are you sure you want to sign out? This will clear all your data...</p>\n                <p style=\"font-size: 0.9em; color: #666; margin-top: 0.5rem;\">\n                    (Yes, this is just for testing. In a real app, your data would be saved!)\n                </p>\n                <div class=\"todo-actions\" style=\"margin-top: 2rem;\">\n                    <button class=\"btn-todo btn-primary\" id=\"confirm-signout\">Sign Out</button>\n                    <button class=\"btn-todo btn-secondary\" id=\"cancel-signout\">Cancel</button>\n                </div>\n            </div>\n        ";
      document.body.appendChild(modal);
      var confirmBtn = modal.querySelector('#confirm-signout');
      var cancelBtn = modal.querySelector('#cancel-signout');
      confirmBtn.addEventListener('click', function () {
        localStorage.clear();
        window.location.reload();
      });
      cancelBtn.addEventListener('click', function () {
        document.body.removeChild(modal);
      });
    }
  }, {
    key: "showAboutModal",
    value: function showAboutModal() {
      var modal = document.createElement('div');
      modal.className = 'modal-overlay';
      modal.innerHTML = "\n            <div class=\"todo-modal\">\n                <h2>About Bootdo</h2>\n                <div class=\"about-content\">\n                    <p>Bootdo is a project management application built as part of The Odin Project curriculum. It's designed to help developers organize their projects and tasks with a touch of humor.</p>\n                    \n                   <p class=\"features-text\">Features include:</p>\n                    <ul>\n                        <li>Project organization</li>\n                        <li>Task management with priorities and due dates</li>\n                        <li>Different task views (Today, Upcoming, Completed)</li>\n                        <li>Fun default project names for developer inspiration</li>\n                    </ul>\n                    \n                    <p class=\"signature\">\n                        Enjoy!<br><br>\n                        &mdash; Boots@lowresboots\n                    </p>\n                </div>\n                <div class=\"todo-actions\">\n                    <button class=\"btn-todo btn-primary\" id=\"close-about\">Close</button>\n                </div>\n            </div>\n        ";
      document.body.appendChild(modal);
      var closeBtn = modal.querySelector('#close-about');
      closeBtn.addEventListener('click', function () {
        document.body.removeChild(modal);
      });
    }
  }, {
    key: "renderTodos",
    value: function renderTodos() {
      var _this3 = this;
      var view = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'all';
      var tasksContainer = document.querySelector('.tasks-container');
      var todos;
      switch (view) {
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
          if (this.activeProjectId) {
            var projectTodos = this.todoManager.getAllTodos().filter(function (todo) {
              return todo.projectId === _this3.activeProjectId;
            });
            todos = projectTodos;
          } else {
            todos = this.todoManager.getActiveTodos();
          }
      }
      if (this.activeProjectId) {
        tasksContainer.innerHTML = this.renderTodoList(todos);
        return;
      }
      var todosByProject = new Map();
      todos.forEach(function (todo) {
        var projectId = todo.projectId;
        if (!_this3.projectManager.getProject(projectId)) return;
        if (!todosByProject.has(projectId)) {
          todosByProject.set(projectId, []);
        }
        todosByProject.get(projectId).push(todo);
      });
      var html = Array.from(todosByProject.entries()).map(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
          projectId = _ref2[0],
          projectTodos = _ref2[1];
        var project = _this3.projectManager.getProject(projectId);
        if (!project) return '';
        return "\n                <div class=\"project-section\">\n                    <h3 class=\"project-header\">".concat(project.name, "</h3>\n                    ").concat(_this3.renderTodoList(projectTodos), "\n                </div>\n            ");
      }).join('');
      tasksContainer.innerHTML = html || '<p>No tasks yet</p>';
    }
  }, {
    key: "renderTodoList",
    value: function renderTodoList(todos) {
      var _this4 = this;
      if (!todos.length) return '';
      return todos.map(function (todo) {
        return "\n            <div class=\"todo-item ".concat(todo.completed ? 'completed' : '', "\" \n                 data-id=\"").concat(todo.id, "\" \n                 data-project-id=\"").concat(todo.projectId || _this4.activeProjectId, "\">\n                <input type=\"checkbox\" class=\"todo-checkbox\" ").concat(todo.completed ? 'checked' : '', ">\n                <div class=\"todo-content\">\n                    <div class=\"todo-title\">").concat(todo.title, "</div>\n                    ").concat(todo.description ? "<div class=\"todo-description\">".concat(todo.description, "</div>") : '', "\n                    <div class=\"todo-metadata\">\n                        ").concat(todo.dueDate ? "<span>Due: ".concat(todo.dueDate, "</span>") : '', "\n                        <span>Priority: ").concat(todo.priority, "</span>\n                    </div>\n                </div>\n                <div class=\"todo-actions\">\n                    <button class=\"edit-todo\">\n                        <svg class=\"feather feather-edit\" fill=\"none\" height=\"16\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" viewBox=\"0 0 24 24\" width=\"16\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7\"/><path d=\"M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z\"/></svg>\n                    </button>\n                </div>\n            </div>\n        ");
      }).join('');
    }
  }, {
    key: "updateMainHeader",
    value: function updateMainHeader(title) {
      var contentHeader = document.querySelector('.content-header h2');
      contentHeader.textContent = title;
    }
  }, {
    key: "init",
    value: function init() {
      var appContainer = document.createElement('div');
      appContainer.className = 'app-container';
      appContainer.appendChild(this.createHeader());
      appContainer.appendChild(this.createSidebar());
      appContainer.appendChild(this.createMain());
      var root = document.getElementById('app');
      root.innerHTML = '';
      root.appendChild(appContainer);
      this.setupEventListeners();
      this.setupProjectEvents();
      this.setupTodoEvents();
      this.renderTodos('all');
    }
  }, {
    key: "setupEventListeners",
    value: function setupEventListeners() {
      var _this5 = this;
      var menuToggle = document.querySelector('.menu-toggle');
      var sidebar = document.querySelector('.app-sidebar');
      menuToggle.addEventListener('click', function () {
        sidebar.classList.toggle('active');
      });
      var userProfile = document.querySelector('.user-profile');
      var userDropdown = document.querySelector('.user-dropdown');
      userProfile.addEventListener('click', function () {
        userDropdown.style.display = userDropdown.style.display === 'none' ? 'block' : 'none';
      });
      document.addEventListener('click', function (e) {
        if (!userProfile.contains(e.target)) {
          userDropdown.style.display = 'none';
        }
      });
      var signOutBtn = document.querySelector('.sign-out');
      signOutBtn.addEventListener('click', function () {
        _this5.showSignOutConfirmation();
      });
      var aboutBtn = document.querySelector('.about');
      aboutBtn.addEventListener('click', function () {
        _this5.showAboutModal();
      });
      var viewLinks = document.querySelectorAll('.sidebar-nav a[data-view]');
      viewLinks.forEach(function (link) {
        link.addEventListener('click', function (e) {
          e.preventDefault();
          document.querySelectorAll('.sidebar-nav a, .project-item').forEach(function (el) {
            el.classList.remove('active');
          });
          link.classList.add('active');
          _this5.activeProjectId = null;
          var view = link.dataset.view;
          _this5.updateMainHeader(link.textContent);
          _this5.renderTodos(view);
        });
      });
    }
  }, {
    key: "setupProjectEvents",
    value: function setupProjectEvents() {
      var _this6 = this;
      var projectsList = document.querySelector('.projects-list');
      var addProjectBtn = document.getElementById('add-project-btn');
      var addProjectForm = document.querySelector('.add-project-form');
      var projectInput = document.querySelector('.add-project-input');
      var saveProjectBtn = document.getElementById('save-project-btn');
      this.renderProjects(this.projectManager.getAllProjects());
      addProjectBtn.addEventListener('click', function () {
        addProjectBtn.style.display = 'none';
        addProjectForm.style.display = 'block';
        projectInput.focus();
      });
      document.addEventListener('click', function (e) {
        if (!addProjectForm.contains(e.target) && e.target !== addProjectBtn) {
          addProjectBtn.style.display = 'block';
          addProjectForm.style.display = 'none';
          projectInput.value = '';
        }
      });
      saveProjectBtn.addEventListener('click', function () {
        var projectName = projectInput.value.trim();
        if (projectName) {
          var newProject = _this6.projectManager.createProject(projectName);
          _this6.renderProjects(_this6.projectManager.getAllProjects());
          addProjectBtn.style.display = 'block';
          addProjectForm.style.display = 'none';
          projectInput.value = '';
        }
      });
      projectsList.addEventListener('click', function (e) {
        var projectItem = e.target.closest('.project-item');
        if (e.target.classList.contains('delete-project')) {
          var projectId = e.target.closest('.project-item').dataset.id;
          _this6.projectManager.deleteProject(projectId);
          if (_this6.activeProjectId === projectId) {
            _this6.activeProjectId = null;
            var allTasksLink = document.querySelector('.sidebar-nav a[data-view="all"]');
            if (allTasksLink) {
              allTasksLink.click();
            } else {
              _this6.updateMainHeader('All Tasks');
              _this6.renderTodos('all');
            }
          }
          _this6.renderProjects(_this6.projectManager.getAllProjects());
          return;
        }
        if (projectItem) {
          var _projectId = projectItem.dataset.id;
          var project = _this6.projectManager.getProject(_projectId);
          _this6.activeProjectId = _projectId;
          _this6.renderProjects(_this6.projectManager.getAllProjects());
          _this6.updateMainHeader(project.name);
          _this6.renderTodos();
          document.querySelectorAll('.sidebar-nav a').forEach(function (link) {
            link.classList.remove('active');
          });
        }
      });
    }
  }, {
    key: "setupTodoEvents",
    value: function setupTodoEvents() {
      var _this7 = this;
      var addTaskBtn = document.querySelector('.add-task-btn');
      var tasksContainer = document.querySelector('.tasks-container');
      addTaskBtn.addEventListener('click', function () {
        _this7.showTodoModal();
      });
      tasksContainer.addEventListener('click', function (e) {
        var todoItem = e.target.closest('.todo-item');
        if (!todoItem) return;
        var todoId = todoItem.dataset.id;
        var projectId = todoItem.dataset.projectId || _this7.activeProjectId;
        if (e.target.classList.contains('todo-checkbox')) {
          _this7.todoManager.toggleTodoComplete(projectId, todoId);
          _this7.renderCurrentView();
        }
        if (e.target.closest('.edit-todo')) {
          var todo = _this7.todoManager.getTodo(projectId, todoId);
          if (todo) {
            _this7.showTodoModal(todo, projectId);
          }
        }
      });
    }
  }, {
    key: "renderCurrentView",
    value: function renderCurrentView() {
      var activeLink = document.querySelector('.sidebar-nav a.active');
      var currentView = activeLink ? activeLink.dataset.view : 'all';
      this.renderTodos(currentView);
    }
  }, {
    key: "renderProjects",
    value: function renderProjects(projects) {
      var _this8 = this;
      var projectsList = document.querySelector('.projects-list');
      var addTaskBtn = document.querySelector('.add-task-btn');
      if (projects.length === 0) {
        addTaskBtn.disabled = true;
        addTaskBtn.classList.add('disabled');
      } else {
        addTaskBtn.disabled = false;
        addTaskBtn.classList.remove('disabled');
      }
      projectsList.innerHTML = projects.map(function (project) {
        return "\n            <li class=\"project-item ".concat(project.id === _this8.activeProjectId ? 'active' : '', "\" data-id=\"").concat(project.id, "\">\n                <span class=\"project-name\">").concat(project.name, "</span>\n                <button class=\"delete-project\" aria-label=\"Delete project\">\xD7</button>\n            </li>\n        ");
      }).join('');
    }
  }]);
}();


/***/ }),

/***/ "./src/modules/onboarding.js":
/*!***********************************!*\
  !*** ./src/modules/onboarding.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Onboarding)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Onboarding = /*#__PURE__*/function () {
  function Onboarding() {
    _classCallCheck(this, Onboarding);
    this.userData = {
      name: '',
      avatar: ''
    };
  }
  return _createClass(Onboarding, [{
    key: "createModal",
    value: function createModal() {
      var modal = document.createElement('div');
      modal.className = 'overlay';
      modal.innerHTML = "\n            <div class=\"onboarding-modal\">\n                <h2>Welcome to Bootdo!</h2>\n                <div id=\"name-step\">\n                    <p>What's your name?</p>\n                    <input type=\"text\" id=\"username\" placeholder=\"Enter your name\" required>\n                    <button class=\"btn btn-primary\" id=\"next-btn\">Next</button>\n                </div>\n                <div id=\"avatar-step\" style=\"display: none;\">\n                    <p>Choose a profile picture</p>\n                    <div class=\"avatar-upload\">\n                        <div class=\"avatar-preview\">\n                            <div id=\"avatar-preview-image\"></div>\n                        </div>\n                        <div class=\"avatar-actions\">\n                            <input type=\"file\" id=\"avatar-upload\" accept=\"image/*\" class=\"file-input\">\n                            <label for=\"avatar-upload\" class=\"btn btn-secondary\">Choose File</label>\n                            <button class=\"btn btn-primary\" id=\"complete-btn\">Complete Setup</button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        ";
      return modal;
    }
  }, {
    key: "createDefaultAvatar",
    value: function createDefaultAvatar(name) {
      var initials = name.split(' ').map(function (word) {
        return word[0];
      }).join('').toUpperCase().slice(0, 2);
      return "\n            <div class=\"default-avatar\">\n                <span>".concat(initials, "</span>\n            </div>\n        ");
    }
  }, {
    key: "getAvatarOptions",
    value: function getAvatarOptions() {
      var colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEEAD'];
      return colors.map(function (color, index) {
        return "\n            <div class=\"avatar-option\" data-avatar=\"avatar".concat(index + 1, "\">\n                <svg width=\"100%\" height=\"100%\" viewBox=\"0 0 50 50\">\n                    <circle cx=\"25\" cy=\"25\" r=\"20\" fill=\"").concat(color, "\"/>\n                </svg>\n            </div>\n        ");
      }).join('');
    }
  }, {
    key: "init",
    value: function init() {
      var _this = this;
      return new Promise(function (resolve) {
        var existingUser = localStorage.getItem('bootdoUser');
        if (existingUser) {
          resolve(JSON.parse(existingUser));
          return;
        }
        var modal = _this.createModal();
        document.body.appendChild(modal);
        var nameStep = modal.querySelector('#name-step');
        var avatarStep = modal.querySelector('#avatar-step');
        var usernameInput = modal.querySelector('#username');
        var nextBtn = modal.querySelector('#next-btn');
        var completeBtn = modal.querySelector('#complete-btn');
        var fileInput = modal.querySelector('#avatar-upload');
        var previewImage = modal.querySelector('#avatar-preview-image');
        nextBtn.addEventListener('click', function () {
          if (usernameInput.value.trim()) {
            _this.userData.name = usernameInput.value.trim();
            nameStep.style.display = 'none';
            avatarStep.style.display = 'block';
            var defaultAvatarHTML = _this.createDefaultAvatar(_this.userData.name);
            var previewContainer = modal.querySelector('#avatar-preview-image');
            previewContainer.innerHTML = defaultAvatarHTML;
            _this.userData.avatar = 'default';
          }
        });
        fileInput.addEventListener('change', function (e) {
          var file = e.target.files[0];
          if (file) {
            var reader = new FileReader();
            reader.onload = function (e) {
              var imageUrl = e.target.result;
              var previewContainer = modal.querySelector('#avatar-preview-image');
              previewContainer.innerHTML = '';
              previewContainer.style.backgroundImage = "url(".concat(imageUrl, ")");
              _this.userData.avatar = imageUrl;
            };
            reader.readAsDataURL(file);
          }
        });
        completeBtn.addEventListener('click', function () {
          _this.completeOnboarding(modal, resolve);
        });
      });
    }
  }, {
    key: "completeOnboarding",
    value: function completeOnboarding(modal, resolve) {
      localStorage.setItem('bootdoUser', JSON.stringify(this.userData));
      document.body.removeChild(modal);
      resolve(this.userData);
    }
  }]);
}();


/***/ }),

/***/ "./src/modules/projects.js":
/*!*********************************!*\
  !*** ./src/modules/projects.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Project: () => (/* binding */ Project),
/* harmony export */   "default": () => (/* binding */ ProjectManager)
/* harmony export */ });
/* harmony import */ var _todos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todos */ "./src/modules/todos.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

var Project = /*#__PURE__*/_createClass(function Project(name) {
  _classCallCheck(this, Project);
  this.id = Date.now().toString();
  this.name = name;
  this.todos = [];
});
var ProjectManager = /*#__PURE__*/function () {
  function ProjectManager(todoManager) {
    _classCallCheck(this, ProjectManager);
    this.projects = [];
    this.todoManager = todoManager;
    this.defaultProjects = [{
      name: "Dating App for Developers",
      task: {
        title: "Fix bug where all matches are 'undefined'",
        description: "Users complaining they only match with null or undefined. Need to implement proper type checking.",
        priority: "high",
        dueDate: function dueDate() {
          return new Date(Date.now() + 86400000).toISOString().split('T')[0];
        }
      }
    }, {
      name: "Cat Pic NFT Marketplace",
      task: {
        title: "Implement anti-dog image filter",
        description: "Users keep uploading dog pics. Need ML model to detect and block non-feline content.",
        priority: "medium",
        dueDate: function dueDate() {
          return new Date(Date.now() + 172800000).toISOString().split('T')[0];
        }
      }
    }, {
      name: "AI That Makes Coffee",
      task: {
        title: "Debug infinite coffee loop",
        description: "AI keeps brewing coffee until RAM is full. Need to implement proper brew cycle termination.",
        priority: "high",
        dueDate: function dueDate() {
          return new Date(Date.now() + 86400000).toISOString().split('T')[0];
        }
      }
    }, {
      name: "StackOverflow But Nicer",
      task: {
        title: "Add mandatory compliments",
        description: "Before marking as duplicate, users must say something nice first.",
        priority: "medium",
        dueDate: function dueDate() {
          return new Date(Date.now() + 259200000).toISOString().split('T')[0];
        }
      }
    }, {
      name: "Social Media for Introverts",
      task: {
        title: "Implement 'Pretend to be Offline' feature",
        description: "Users requesting ability to appear offline while still lurking.",
        priority: "high",
        dueDate: function dueDate() {
          return new Date(Date.now() + 432000000).toISOString().split('T')[0];
        }
      }
    }, {
      name: "Bitcoin for Pets",
      task: {
        title: "Fix treat-to-crypto conversion rate",
        description: "Cats gaming the system by doing multiple transactions of the same trick.",
        priority: "medium",
        dueDate: function dueDate() {
          return new Date(Date.now() + 345600000).toISOString().split('T')[0];
        }
      }
    }, {
      name: "Netflix for Documentation",
      task: {
        title: "Add 'Skip Intro' for README files",
        description: "Users want to skip straight to the installation commands.",
        priority: "low",
        dueDate: function dueDate() {
          return new Date(Date.now() + 518400000).toISOString().split('T')[0];
        }
      }
    }, {
      name: "Uber for Rubber Ducks",
      task: {
        title: "Fix duck surge pricing",
        description: "Surge rates skyrocketing during peak debugging hours.",
        priority: "medium",
        dueDate: function dueDate() {
          return new Date(Date.now() + 172800000).toISOString().split('T')[0];
        }
      }
    }, {
      name: "Tinder for Design Patterns",
      task: {
        title: "Handle Singleton rejection anxiety",
        description: "Singleton pattern reporting feelings of loneliness and abandonment.",
        priority: "high",
        dueDate: function dueDate() {
          return new Date(Date.now() + 86400000).toISOString().split('T')[0];
        }
      }
    }, {
      name: "JavaScript Framework #8,742",
      task: {
        title: "Invent new buzzwords",
        description: "Current marketing terms not confusing enough. Need more paradigm shifts.",
        priority: "low",
        dueDate: function dueDate() {
          return new Date(Date.now() + 604800000).toISOString().split('T')[0];
        }
      }
    }, {
      name: "Another Todo App™",
      task: {
        title: "Add todo item to track todo items",
        description: "Meta-todo functionality requested by project manager.",
        priority: "medium",
        dueDate: function dueDate() {
          return new Date(Date.now() + 259200000).toISOString().split('T')[0];
        }
      }
    }, {
      name: "Reddit for Office Plants",
      task: {
        title: "Fix overwatering notification spam",
        description: "Cacti complaining about excessive hydration suggestions.",
        priority: "high",
        dueDate: function dueDate() {
          return new Date(Date.now() + 86400000).toISOString().split('T')[0];
        }
      }
    }, {
      name: "GitHub for Recipes",
      task: {
        title: "Resolve merge conflicts in grandma's cookies",
        description: "Multiple forks of chocolate chip recipe causing deployment issues.",
        priority: "medium",
        dueDate: function dueDate() {
          return new Date(Date.now() + 172800000).toISOString().split('T')[0];
        }
      }
    }, {
      name: "Discord for Rubber Ducks",
      task: {
        title: "Implement quack reactions",
        description: "Need more expressive ways to respond to debugging sessions.",
        priority: "low",
        dueDate: function dueDate() {
          return new Date(Date.now() + 345600000).toISOString().split('T')[0];
        }
      }
    }, {
      name: "LinkedIn for AI Bots",
      task: {
        title: "Filter out spam from GPT-1",
        description: "Older models keep sending connection requests to everyone.",
        priority: "medium",
        dueDate: function dueDate() {
          return new Date(Date.now() + 259200000).toISOString().split('T')[0];
        }
      }
    }, {
      name: "Netflix for Code Reviews",
      task: {
        title: "Add 'Skip Whitespace Drama' button",
        description: "Reviewers spending too much time debating tabs vs spaces.",
        priority: "high",
        dueDate: function dueDate() {
          return new Date(Date.now() + 86400000).toISOString().split('T')[0];
        }
      }
    }, {
      name: "Spotify for Compilation Errors",
      task: {
        title: "Create 'Greatest Bugs' playlist",
        description: "Users requesting curated collection of most painful debug sessions.",
        priority: "low",
        dueDate: function dueDate() {
          return new Date(Date.now() + 432000000).toISOString().split('T')[0];
        }
      }
    }, {
      name: "Instagram for Terminal Output",
      task: {
        title: "Add more retro filters",
        description: "Users want their stack traces to look more aesthetic.",
        priority: "medium",
        dueDate: function dueDate() {
          return new Date(Date.now() + 172800000).toISOString().split('T')[0];
        }
      }
    }, {
      name: "TikTok for Algorithms",
      task: {
        title: "Optimize dance moves for O(1)",
        description: "Current algorithmic dances too computationally expensive.",
        priority: "high",
        dueDate: function dueDate() {
          return new Date(Date.now() + 86400000).toISOString().split('T')[0];
        }
      }
    }, {
      name: "Twitch for Debugging Sessions",
      task: {
        title: "Add commercial breaks for coffee runs",
        description: "Streamers need automated pauses when caffeine runs low.",
        priority: "medium",
        dueDate: function dueDate() {
          return new Date(Date.now() + 259200000).toISOString().split('T')[0];
        }
      }
    }, {
      name: "WordPress for Memes",
      task: {
        title: "Install 73 unnecessary plugins",
        description: "Site not running slow enough, need more features nobody asked for.",
        priority: "low",
        dueDate: function dueDate() {
          return new Date(Date.now() + 518400000).toISOString().split('T')[0];
        }
      }
    }, {
      name: "YouTube for Error Messages",
      task: {
        title: "Implement 'Skip to Stack Overflow' button",
        description: "Users requesting direct link to someone with same error.",
        priority: "high",
        dueDate: function dueDate() {
          return new Date(Date.now() + 86400000).toISOString().split('T')[0];
        }
      }
    }];
    this.loadProjects();
  }
  return _createClass(ProjectManager, [{
    key: "loadProjects",
    value: function loadProjects() {
      var savedProjects = localStorage.getItem('bootdoProjects');
      if (savedProjects) {
        this.projects = JSON.parse(savedProjects);
      } else {
        var defaultProject = this.createDefaultProject();
        this.projects = [defaultProject];
        this.saveProjects();
      }
    }
  }, {
    key: "saveProjects",
    value: function saveProjects() {
      localStorage.setItem('bootdoProjects', JSON.stringify(this.projects));
    }
  }, {
    key: "createDefaultProject",
    value: function createDefaultProject() {
      var randomIndex = Math.floor(Math.random() * this.defaultProjects.length);
      var defaultProject = this.defaultProjects[randomIndex];
      var project = this.createProject(defaultProject.name);
      var todo = new _todos__WEBPACK_IMPORTED_MODULE_0__.Todo(defaultProject.task.title, defaultProject.task.description, defaultProject.task.dueDate(), defaultProject.task.priority);
      this.todoManager.addTodo(project.id, todo);
      return project;
    }
  }, {
    key: "createProject",
    value: function createProject(name) {
      var project = new Project(name);
      this.projects.push(project);
      this.saveProjects();
      return project;
    }
  }, {
    key: "deleteProject",
    value: function deleteProject(projectId) {
      this.projects = this.projects.filter(function (project) {
        return project.id !== projectId;
      });
      this.saveProjects();
      this.todoManager.removeProjectTasks(projectId);
    }
  }, {
    key: "getProject",
    value: function getProject(projectId) {
      return this.projects.find(function (project) {
        return project.id === projectId;
      });
    }
  }, {
    key: "getAllProjects",
    value: function getAllProjects() {
      return this.projects;
    }
  }]);
}();


/***/ }),

/***/ "./src/modules/todos.js":
/*!******************************!*\
  !*** ./src/modules/todos.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Todo: () => (/* binding */ Todo),
/* harmony export */   "default": () => (/* binding */ TodoManager)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/isToday.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/parseISO.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/isFuture.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

var Todo = /*#__PURE__*/_createClass(function Todo(title) {
  var description = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var dueDate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var priority = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'medium';
  _classCallCheck(this, Todo);
  this.id = Date.now().toString();
  this.title = title;
  this.description = description;
  this.dueDate = dueDate;
  this.priority = priority;
  this.completed = false;
  this.createdAt = new Date();
});
var TodoManager = /*#__PURE__*/function () {
  function TodoManager() {
    _classCallCheck(this, TodoManager);
    this.todos = new Map();
    this.loadTodos();
  }
  return _createClass(TodoManager, [{
    key: "loadTodos",
    value: function loadTodos() {
      var savedTodos = localStorage.getItem('bootdoTodos');
      if (savedTodos) {
        var todoData = JSON.parse(savedTodos);
        this.todos = new Map(todoData);
      }
    }
  }, {
    key: "saveTodos",
    value: function saveTodos() {
      localStorage.setItem('bootdoTodos', JSON.stringify(_toConsumableArray(this.todos)));
    }
  }, {
    key: "addTodo",
    value: function addTodo(projectId, todo) {
      if (!this.todos.has(projectId)) {
        this.todos.set(projectId, []);
      }
      this.todos.get(projectId).push(todo);
      this.saveTodos();
    }
  }, {
    key: "getTodo",
    value: function getTodo(projectId, todoId) {
      var projectTodos = this.todos.get(projectId);
      if (projectTodos) {
        return projectTodos.find(function (todo) {
          return todo.id === todoId;
        });
      }
      return null;
    }
  }, {
    key: "updateTodo",
    value: function updateTodo(projectId, todoId, updatedTodo) {
      var projectTodos = this.todos.get(projectId);
      if (projectTodos) {
        var index = projectTodos.findIndex(function (todo) {
          return todo.id === todoId;
        });
        if (index !== -1) {
          projectTodos[index] = updatedTodo;
          this.saveTodos();
        }
      }
    }
  }, {
    key: "getAllTodos",
    value: function getAllTodos() {
      var allTodos = [];
      this.todos.forEach(function (todos, projectId) {
        todos.forEach(function (todo) {
          allTodos.push(_objectSpread(_objectSpread({}, todo), {}, {
            projectId: projectId
          }));
        });
      });
      return allTodos;
    }
  }, {
    key: "getTodayTodos",
    value: function getTodayTodos() {
      var allTodos = this.getAllTodos();
      return allTodos.filter(function (todo) {
        if (!todo.dueDate || todo.completed) return false;
        return (0,date_fns__WEBPACK_IMPORTED_MODULE_0__.isToday)((0,date_fns__WEBPACK_IMPORTED_MODULE_1__.parseISO)(todo.dueDate));
      });
    }
  }, {
    key: "getUpcomingTodos",
    value: function getUpcomingTodos() {
      var allTodos = this.getAllTodos();
      return allTodos.filter(function (todo) {
        if (!todo.dueDate || todo.completed) return false;
        return (0,date_fns__WEBPACK_IMPORTED_MODULE_2__.isFuture)((0,date_fns__WEBPACK_IMPORTED_MODULE_1__.parseISO)(todo.dueDate));
      }).sort(function (a, b) {
        return (0,date_fns__WEBPACK_IMPORTED_MODULE_1__.parseISO)(a.dueDate) - (0,date_fns__WEBPACK_IMPORTED_MODULE_1__.parseISO)(b.dueDate);
      });
    }
  }, {
    key: "deleteTodo",
    value: function deleteTodo(projectId, todoId) {
      var projectTodos = this.todos.get(projectId);
      if (projectTodos) {
        var index = projectTodos.findIndex(function (todo) {
          return todo.id === todoId;
        });
        if (index !== -1) {
          projectTodos.splice(index, 1);
          this.saveTodos();
        }
      }
    }
  }, {
    key: "toggleTodoComplete",
    value: function toggleTodoComplete(projectId, todoId) {
      var projectTodos = this.todos.get(projectId);
      if (projectTodos) {
        var todo = projectTodos.find(function (todo) {
          return todo.id === todoId;
        });
        if (todo) {
          todo.completed = !todo.completed;
          this.saveTodos();
        }
      }
    }
  }, {
    key: "getCompletedTodos",
    value: function getCompletedTodos() {
      var allTodos = this.getAllTodos();
      return allTodos.filter(function (todo) {
        return todo.completed;
      });
    }
  }, {
    key: "getActiveTodos",
    value: function getActiveTodos() {
      var allTodos = this.getAllTodos();
      return allTodos.filter(function (todo) {
        return !todo.completed;
      });
    }
  }, {
    key: "removeProjectTasks",
    value: function removeProjectTasks(projectId) {
      this.todos["delete"](projectId);
      this.saveTodos();
    }
  }]);
}();


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/background.css":
/*!*************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/background.css ***!
  \*************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.background-boot {
    position: fixed;
    z-index: -1;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 70vh;
    height: 70vh;
    opacity: 0.03;
    pointer-events: none;
    transition: opacity 0.3s ease;
}`, "",{"version":3,"sources":["webpack://./src/styles/background.css"],"names":[],"mappings":"AAAA;IACI,eAAe;IACf,WAAW;IACX,QAAQ;IACR,SAAS;IACT,gCAAgC;IAChC,WAAW;IACX,YAAY;IACZ,aAAa;IACb,oBAAoB;IACpB,6BAA6B;AACjC","sourcesContent":[".background-boot {\n    position: fixed;\n    z-index: -1;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    width: 70vh;\n    height: 70vh;\n    opacity: 0.03;\n    pointer-events: none;\n    transition: opacity 0.3s ease;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/layout.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/layout.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.app-container {
    position: relative;
    z-index: 1;
    display: grid;
    grid-template-areas:
        "header header"
        "sidebar main";
    grid-template-columns: 250px 1fr;
    grid-template-rows: auto 1fr;
    min-height: 100vh;
    background-color: var(--bg-color);
    color: var(--text-color);
}

.app-header {
    grid-area: header;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background-color: var(--header-bg);
    border-bottom: 1px solid var(--border-color);
}

.header-left, .header-right {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.menu-toggle {
    display: none;
    flex-direction: column;
    gap: 4px;
    background: none;
    border: none;
    cursor: pointer;
    padding: 4px;
}

.menu-toggle span {
    display: block;
    width: 24px;
    height: 2px;
    background-color: var(--text-color);
    transition: 0.3s;
}

.app-sidebar {
    grid-area: sidebar;
    background-color: var(--sidebar-bg);
    border-right: 1px solid var(--border-color);
    padding: 1rem;
    overflow-y: auto;
}

.sidebar-section {
    margin-bottom: 2rem;
}

.sidebar-section h2 {
    font-size: 1rem;
    text-transform: uppercase;
    color: var(--text-muted);
    margin-bottom: 0.5rem;
}

.sidebar-nav ul {
    list-style: none;
    padding: 0;
}

.sidebar-nav a {
    display: block;
    padding: 0.5rem;
    color: var(--text-color);
    text-decoration: none;
    border-radius: 4px;
    transition: background-color 0.2s;
}

.sidebar-nav a:hover {
    background-color: var(--hover-bg);
}

.sidebar-nav a.active {
    background-color: var(--hover-bg);
    color: #007bff;
    font-weight: bold;
}

.app-main {
    grid-area: main;
    padding: 2rem;
    overflow-y: auto;
}

.content-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
}

.user-profile {
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.user-avatar {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    overflow: hidden;
}

.user-name {
    cursor: pointer;
}

.user-name:hover {
    text-decoration: underline;
}

.user-avatar .default-avatar {
    width: 100%;
    height: 100%;
    background-color: #007bff;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    font-weight: bold;
    user-select: none;
}

.user-avatar-img {
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
}

.user-profile {
    position: relative;
    cursor: pointer;
}

.user-dropdown {
    position: absolute;
    top: 100%;
    right: 0;
    background: white;
    border: 1px solid #dee2e6;
    border-radius: 4px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    min-width: 150px;
    margin-top: 0.5rem;
    z-index: 1000;
}

.dropdown-item {
    padding: 0.75rem 1rem;
    transition: background-color 0.2s;
}

.dropdown-item:hover {
    background-color: var(--hover-bg);
}

@media (max-width: 768px) {
    .app-container {
        grid-template-areas:
            "header"
            "main";
        grid-template-columns: 1fr;
    }

    .menu-toggle {
        display: flex;
    }

    .app-sidebar {
        position: fixed;
        left: -250px;
        top: 0;
        height: 100vh;
        width: 250px;
        transition: 0.3s;
        z-index: 1000;
    }

    .app-sidebar.active {
        left: 0;
    }
}

.app-title {
    margin: 0;
    font-size: 1.8rem;
    display: flex;
    align-items: baseline;
}

.app-title .boot {
    font-weight: 300;
    color: #2c3e50;
}

.app-title .do {
    font-weight: 700;
    color: #007bff;
}

.project-item.active {
    background-color: var(--hover-bg);
    color: #007bff;
    font-weight: bold;
}

.about-content .features-text {
    margin-top: 2rem;
}`, "",{"version":3,"sources":["webpack://./src/styles/layout.css"],"names":[],"mappings":"AAAA;IACI,kBAAkB;IAClB,UAAU;IACV,aAAa;IACb;;sBAEkB;IAClB,gCAAgC;IAChC,4BAA4B;IAC5B,iBAAiB;IACjB,iCAAiC;IACjC,wBAAwB;AAC5B;;AAEA;IACI,iBAAiB;IACjB,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,aAAa;IACb,kCAAkC;IAClC,4CAA4C;AAChD;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,QAAQ;IACR,gBAAgB;IAChB,YAAY;IACZ,eAAe;IACf,YAAY;AAChB;;AAEA;IACI,cAAc;IACd,WAAW;IACX,WAAW;IACX,mCAAmC;IACnC,gBAAgB;AACpB;;AAEA;IACI,kBAAkB;IAClB,mCAAmC;IACnC,2CAA2C;IAC3C,aAAa;IACb,gBAAgB;AACpB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,eAAe;IACf,yBAAyB;IACzB,wBAAwB;IACxB,qBAAqB;AACzB;;AAEA;IACI,gBAAgB;IAChB,UAAU;AACd;;AAEA;IACI,cAAc;IACd,eAAe;IACf,wBAAwB;IACxB,qBAAqB;IACrB,kBAAkB;IAClB,iCAAiC;AACrC;;AAEA;IACI,iCAAiC;AACrC;;AAEA;IACI,iCAAiC;IACjC,cAAc;IACd,iBAAiB;AACrB;;AAEA;IACI,eAAe;IACf,aAAa;IACb,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,WAAW;AACf;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB,gBAAgB;AACpB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,0BAA0B;AAC9B;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,yBAAyB;IACzB,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,eAAe;IACf,iBAAiB;IACjB,iBAAiB;AACrB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,sBAAsB;IACtB,2BAA2B;AAC/B;;AAEA;IACI,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,kBAAkB;IAClB,SAAS;IACT,QAAQ;IACR,iBAAiB;IACjB,yBAAyB;IACzB,kBAAkB;IAClB,yCAAyC;IACzC,gBAAgB;IAChB,kBAAkB;IAClB,aAAa;AACjB;;AAEA;IACI,qBAAqB;IACrB,iCAAiC;AACrC;;AAEA;IACI,iCAAiC;AACrC;;AAEA;IACI;QACI;;kBAEU;QACV,0BAA0B;IAC9B;;IAEA;QACI,aAAa;IACjB;;IAEA;QACI,eAAe;QACf,YAAY;QACZ,MAAM;QACN,aAAa;QACb,YAAY;QACZ,gBAAgB;QAChB,aAAa;IACjB;;IAEA;QACI,OAAO;IACX;AACJ;;AAEA;IACI,SAAS;IACT,iBAAiB;IACjB,aAAa;IACb,qBAAqB;AACzB;;AAEA;IACI,gBAAgB;IAChB,cAAc;AAClB;;AAEA;IACI,gBAAgB;IAChB,cAAc;AAClB;;AAEA;IACI,iCAAiC;IACjC,cAAc;IACd,iBAAiB;AACrB;;AAEA;IACI,gBAAgB;AACpB","sourcesContent":[".app-container {\n    position: relative;\n    z-index: 1;\n    display: grid;\n    grid-template-areas:\n        \"header header\"\n        \"sidebar main\";\n    grid-template-columns: 250px 1fr;\n    grid-template-rows: auto 1fr;\n    min-height: 100vh;\n    background-color: var(--bg-color);\n    color: var(--text-color);\n}\n\n.app-header {\n    grid-area: header;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 1rem;\n    background-color: var(--header-bg);\n    border-bottom: 1px solid var(--border-color);\n}\n\n.header-left, .header-right {\n    display: flex;\n    align-items: center;\n    gap: 1rem;\n}\n\n.menu-toggle {\n    display: none;\n    flex-direction: column;\n    gap: 4px;\n    background: none;\n    border: none;\n    cursor: pointer;\n    padding: 4px;\n}\n\n.menu-toggle span {\n    display: block;\n    width: 24px;\n    height: 2px;\n    background-color: var(--text-color);\n    transition: 0.3s;\n}\n\n.app-sidebar {\n    grid-area: sidebar;\n    background-color: var(--sidebar-bg);\n    border-right: 1px solid var(--border-color);\n    padding: 1rem;\n    overflow-y: auto;\n}\n\n.sidebar-section {\n    margin-bottom: 2rem;\n}\n\n.sidebar-section h2 {\n    font-size: 1rem;\n    text-transform: uppercase;\n    color: var(--text-muted);\n    margin-bottom: 0.5rem;\n}\n\n.sidebar-nav ul {\n    list-style: none;\n    padding: 0;\n}\n\n.sidebar-nav a {\n    display: block;\n    padding: 0.5rem;\n    color: var(--text-color);\n    text-decoration: none;\n    border-radius: 4px;\n    transition: background-color 0.2s;\n}\n\n.sidebar-nav a:hover {\n    background-color: var(--hover-bg);\n}\n\n.sidebar-nav a.active {\n    background-color: var(--hover-bg);\n    color: #007bff;\n    font-weight: bold;\n}\n\n.app-main {\n    grid-area: main;\n    padding: 2rem;\n    overflow-y: auto;\n}\n\n.content-header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin-bottom: 2rem;\n}\n\n.user-profile {\n    display: flex;\n    align-items: center;\n    gap: 0.5rem;\n}\n\n.user-avatar {\n    width: 32px;\n    height: 32px;\n    border-radius: 50%;\n    overflow: hidden;\n}\n\n.user-name {\n    cursor: pointer;\n}\n\n.user-name:hover {\n    text-decoration: underline;\n}\n\n.user-avatar .default-avatar {\n    width: 100%;\n    height: 100%;\n    background-color: #007bff;\n    color: white;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 1rem;\n    font-weight: bold;\n    user-select: none;\n}\n\n.user-avatar-img {\n    width: 100%;\n    height: 100%;\n    background-size: cover;\n    background-position: center;\n}\n\n.user-profile {\n    position: relative;\n    cursor: pointer;\n}\n\n.user-dropdown {\n    position: absolute;\n    top: 100%;\n    right: 0;\n    background: white;\n    border: 1px solid #dee2e6;\n    border-radius: 4px;\n    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n    min-width: 150px;\n    margin-top: 0.5rem;\n    z-index: 1000;\n}\n\n.dropdown-item {\n    padding: 0.75rem 1rem;\n    transition: background-color 0.2s;\n}\n\n.dropdown-item:hover {\n    background-color: var(--hover-bg);\n}\n\n@media (max-width: 768px) {\n    .app-container {\n        grid-template-areas:\n            \"header\"\n            \"main\";\n        grid-template-columns: 1fr;\n    }\n\n    .menu-toggle {\n        display: flex;\n    }\n\n    .app-sidebar {\n        position: fixed;\n        left: -250px;\n        top: 0;\n        height: 100vh;\n        width: 250px;\n        transition: 0.3s;\n        z-index: 1000;\n    }\n\n    .app-sidebar.active {\n        left: 0;\n    }\n}\n\n.app-title {\n    margin: 0;\n    font-size: 1.8rem;\n    display: flex;\n    align-items: baseline;\n}\n\n.app-title .boot {\n    font-weight: 300;\n    color: #2c3e50;\n}\n\n.app-title .do {\n    font-weight: 700;\n    color: #007bff;\n}\n\n.project-item.active {\n    background-color: var(--hover-bg);\n    color: #007bff;\n    font-weight: bold;\n}\n\n.about-content .features-text {\n    margin-top: 2rem;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/main.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/main.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
    --bg-color: #ffffff;
    --header-bg: #ffffff;
    --sidebar-bg: #f8f9fa;
    --text-color: #212529;
    --text-muted: #6c757d;
    --border-color: #dee2e6;
    --hover-bg: rgba(0, 123, 255, 0.1);
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    line-height: 1.6;
}`, "",{"version":3,"sources":["webpack://./src/styles/main.css"],"names":[],"mappings":"AAAA;IACI,mBAAmB;IACnB,oBAAoB;IACpB,qBAAqB;IACrB,qBAAqB;IACrB,qBAAqB;IACrB,uBAAuB;IACvB,kCAAkC;AACtC;;AAEA;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;AAC1B;;AAEA;IACI,8BAA8B;IAC9B,gBAAgB;AACpB","sourcesContent":[":root {\n    --bg-color: #ffffff;\n    --header-bg: #ffffff;\n    --sidebar-bg: #f8f9fa;\n    --text-color: #212529;\n    --text-muted: #6c757d;\n    --border-color: #dee2e6;\n    --hover-bg: rgba(0, 123, 255, 0.1);\n}\n\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nbody {\n    font-family: Arial, sans-serif;\n    line-height: 1.6;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/onboarding.css":
/*!*************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/onboarding.css ***!
  \*************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
}

.onboarding-modal {
    background: white;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    width: 90%;
    max-width: 500px;
    text-align: center;
}

.onboarding-modal h2 {
    margin-bottom: 1.5rem;
    color: #333;
}

.onboarding-modal input {
    width: 100%;
    padding: 0.8rem;
    margin-bottom: 1rem;
    border: 1px solid #ddd;
    border-radius: 4px;
}

.avatar-upload {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    margin: 1.5rem 0;
}

.avatar-preview {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    overflow: hidden;
    border: 2px solid #ddd;
    margin-bottom: 1rem;
}

#avatar-preview-image {
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
}

.avatar-actions {
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: center;
    width: 100%;
}

.onboarding-modal .avatar-preview .default-avatar {
    width: 100%;
    height: 100%;
    background-color: #007bff;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 4rem; /* or whatever size you prefer */
    font-weight: bold;
    user-select: none;
}
.file-input {
    display: none;
}

.btn {
    padding: 0.8rem 1.5rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-weight: 600;
    transition: all 0.2s ease;
}

.btn-primary {
    background-color: #007bff;
    color: white;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.btn-primary:hover {
    background-color: #0056b3;
    transform: translateY(-1px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.btn-secondary {
    background-color: #f8f9fa;
    color: #212529;
    border: 1px solid #dee2e6;
}

.btn-secondary:hover {
    background-color: #e2e6ea;
    transform: translateY(-1px);
}`, "",{"version":3,"sources":["webpack://./src/styles/onboarding.css"],"names":[],"mappings":"AAAA;IACI,eAAe;IACf,MAAM;IACN,OAAO;IACP,WAAW;IACX,YAAY;IACZ,8BAA8B;IAC9B,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,aAAa;AACjB;;AAEA;IACI,iBAAiB;IACjB,aAAa;IACb,kBAAkB;IAClB,yCAAyC;IACzC,UAAU;IACV,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,qBAAqB;IACrB,WAAW;AACf;;AAEA;IACI,WAAW;IACX,eAAe;IACf,mBAAmB;IACnB,sBAAsB;IACtB,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,SAAS;IACT,gBAAgB;AACpB;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,kBAAkB;IAClB,gBAAgB;IAChB,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,sBAAsB;IACtB,2BAA2B;AAC/B;;AAEA;IACI,aAAa;IACb,SAAS;IACT,mBAAmB;IACnB,uBAAuB;IACvB,WAAW;AACf;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,yBAAyB;IACzB,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,eAAe,EAAE,gCAAgC;IACjD,iBAAiB;IACjB,iBAAiB;AACrB;AACA;IACI,aAAa;AACjB;;AAEA;IACI,sBAAsB;IACtB,YAAY;IACZ,kBAAkB;IAClB,eAAe;IACf,gBAAgB;IAChB,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;IACzB,YAAY;IACZ,wCAAwC;AAC5C;;AAEA;IACI,yBAAyB;IACzB,2BAA2B;IAC3B,wCAAwC;AAC5C;;AAEA;IACI,yBAAyB;IACzB,cAAc;IACd,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;IACzB,2BAA2B;AAC/B","sourcesContent":[".overlay {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background: rgba(0, 0, 0, 0.5);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    z-index: 1000;\n}\n\n.onboarding-modal {\n    background: white;\n    padding: 2rem;\n    border-radius: 8px;\n    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n    width: 90%;\n    max-width: 500px;\n    text-align: center;\n}\n\n.onboarding-modal h2 {\n    margin-bottom: 1.5rem;\n    color: #333;\n}\n\n.onboarding-modal input {\n    width: 100%;\n    padding: 0.8rem;\n    margin-bottom: 1rem;\n    border: 1px solid #ddd;\n    border-radius: 4px;\n}\n\n.avatar-upload {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 2rem;\n    margin: 1.5rem 0;\n}\n\n.avatar-preview {\n    width: 150px;\n    height: 150px;\n    border-radius: 50%;\n    overflow: hidden;\n    border: 2px solid #ddd;\n    margin-bottom: 1rem;\n}\n\n#avatar-preview-image {\n    width: 100%;\n    height: 100%;\n    background-size: cover;\n    background-position: center;\n}\n\n.avatar-actions {\n    display: flex;\n    gap: 1rem;\n    align-items: center;\n    justify-content: center;\n    width: 100%;\n}\n\n.onboarding-modal .avatar-preview .default-avatar {\n    width: 100%;\n    height: 100%;\n    background-color: #007bff;\n    color: white;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 4rem; /* or whatever size you prefer */\n    font-weight: bold;\n    user-select: none;\n}\n.file-input {\n    display: none;\n}\n\n.btn {\n    padding: 0.8rem 1.5rem;\n    border: none;\n    border-radius: 4px;\n    cursor: pointer;\n    font-weight: 600;\n    transition: all 0.2s ease;\n}\n\n.btn-primary {\n    background-color: #007bff;\n    color: white;\n    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n\n.btn-primary:hover {\n    background-color: #0056b3;\n    transform: translateY(-1px);\n    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n}\n\n.btn-secondary {\n    background-color: #f8f9fa;\n    color: #212529;\n    border: 1px solid #dee2e6;\n}\n\n.btn-secondary:hover {\n    background-color: #e2e6ea;\n    transform: translateY(-1px);\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/projects.css":
/*!***********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/projects.css ***!
  \***********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.projects-list {
    margin: 1rem 0;
}

.project-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem;
    margin: 0.25rem 0;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.2s;
}

.project-item:hover {
    background-color: var(--hover-bg);
}

.sidebar-nav a.active,
.project-item.active {
    background-color: var(--hover-bg);
    font-weight: bold;
}

.project-name {
    flex-grow: 1;
    margin-right: 0.5rem;
}

.delete-project {
    opacity: 0;
    background: none;
    border: none;
    color: #212529;
    cursor: pointer;
    padding: 0.25rem;
    transition: opacity 0.2s;
}

.project-item:hover .delete-project {
    opacity: 1;
}

.add-project-form {
    margin-top: 1rem;
}

.add-project-input {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid var(--border-color);
    border-radius: 4px;
    margin-bottom: 0.5rem;
}

.project-actions {
    display: flex;
    gap: 0.5rem;
}

.btn-add-project {
    width: 100%;
    padding: 0.5rem;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.2s;
}

.btn-add-project:hover {
    background-color: #0056b3;
}`, "",{"version":3,"sources":["webpack://./src/styles/projects.css"],"names":[],"mappings":"AAAA;IACI,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,8BAA8B;IAC9B,eAAe;IACf,iBAAiB;IACjB,kBAAkB;IAClB,eAAe;IACf,iCAAiC;AACrC;;AAEA;IACI,iCAAiC;AACrC;;AAEA;;IAEI,iCAAiC;IACjC,iBAAiB;AACrB;;AAEA;IACI,YAAY;IACZ,oBAAoB;AACxB;;AAEA;IACI,UAAU;IACV,gBAAgB;IAChB,YAAY;IACZ,cAAc;IACd,eAAe;IACf,gBAAgB;IAChB,wBAAwB;AAC5B;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,WAAW;IACX,eAAe;IACf,qCAAqC;IACrC,kBAAkB;IAClB,qBAAqB;AACzB;;AAEA;IACI,aAAa;IACb,WAAW;AACf;;AAEA;IACI,WAAW;IACX,eAAe;IACf,yBAAyB;IACzB,YAAY;IACZ,YAAY;IACZ,kBAAkB;IAClB,gBAAgB;IAChB,eAAe;IACf,iCAAiC;AACrC;;AAEA;IACI,yBAAyB;AAC7B","sourcesContent":[".projects-list {\n    margin: 1rem 0;\n}\n\n.project-item {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 0.5rem;\n    margin: 0.25rem 0;\n    border-radius: 4px;\n    cursor: pointer;\n    transition: background-color 0.2s;\n}\n\n.project-item:hover {\n    background-color: var(--hover-bg);\n}\n\n.sidebar-nav a.active,\n.project-item.active {\n    background-color: var(--hover-bg);\n    font-weight: bold;\n}\n\n.project-name {\n    flex-grow: 1;\n    margin-right: 0.5rem;\n}\n\n.delete-project {\n    opacity: 0;\n    background: none;\n    border: none;\n    color: #212529;\n    cursor: pointer;\n    padding: 0.25rem;\n    transition: opacity 0.2s;\n}\n\n.project-item:hover .delete-project {\n    opacity: 1;\n}\n\n.add-project-form {\n    margin-top: 1rem;\n}\n\n.add-project-input {\n    width: 100%;\n    padding: 0.5rem;\n    border: 1px solid var(--border-color);\n    border-radius: 4px;\n    margin-bottom: 0.5rem;\n}\n\n.project-actions {\n    display: flex;\n    gap: 0.5rem;\n}\n\n.btn-add-project {\n    width: 100%;\n    padding: 0.5rem;\n    background-color: #007bff;\n    color: white;\n    border: none;\n    border-radius: 4px;\n    font-weight: 600;\n    cursor: pointer;\n    transition: background-color 0.2s;\n}\n\n.btn-add-project:hover {\n    background-color: #0056b3;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/todos.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/todos.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
}

.todo-modal {
    background: white;
    padding: 2rem;
    border-radius: 8px;
    width: 90%;
    max-width: 500px;
}

.todo-form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.form-group {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.form-group label {
    font-weight: bold;
}

.form-group input,
.form-group textarea,
.form-group select {
    padding: 0.5rem;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 1rem;
}

.todo-list {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-top: 1rem;
}

.todo-item {
    position: relative;
    display: flex;
    align-items: center;
    padding: 1rem;
    background: white;
    border: 1px solid #ddd;
    border-radius: 4px;
    gap: 1rem;
}

.todo-checkbox {
    width: 20px;
    height: 20px;
    cursor: pointer;
}

.todo-content {
    flex-grow: 1;
}

.todo-title {
    font-weight: bold;
    margin-bottom: 0.25rem;
}

.todo-description {
    font-size: 0.9rem;
    color: #666;
}

.todo-metadata {
    display: flex;
    gap: 1rem;
    font-size: 0.8rem;
    color: #666;
}

.todo-item .todo-actions {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
}

.todo-modal .todo-actions {
    position: static;
    display: flex;
    gap: 1rem;
    margin-top: 1rem;
}

.todo-actions button {
    padding: 0.25rem;
    background: none;
    border: none;
    cursor: pointer;
    color: #6c757d;
    transition: color 0.2s;
}

.todo-actions button:hover {
    color: #007bff;
}

.edit-todo svg {
    width: 20px;
    height: 20px;
}

.btn-todo {
    padding: 0.8rem 1.5rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-weight: 600;
    transition: all 0.2s ease;
    min-width: 100px;
}

.btn-todo.btn-primary {
    background-color: #007bff;
    color: white;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.btn-todo.btn-primary:hover {
    background-color: #0056b3;
    transform: translateY(-1px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    color: white;
}

.btn-todo.btn-secondary {
    background-color: #f8f9fa;
    color: #212529;
    border: 1px solid #dee2e6;
}

.btn-todo.btn-secondary:hover {
    background-color: #e2e6ea;
    transform: translateY(-1px);
}

.project-section {
    margin-bottom: 2rem;
}

.project-header {
    font-size: 1.1rem;
    margin: 1.5rem 0 1rem 0;
    font-weight: 600;
}

.project-section:first-child .project-header {
    margin-top: 0;
}

.add-task-btn {
    padding: 0.8rem 1.5rem;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-weight: 600;
    transition: background-color 0.2s;
}

.add-task-btn:hover {
    background-color: #0056b3;
}

.btn-todo.btn-danger {
    background-color: #dc3545;
    color: white;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.btn-todo.btn-danger:hover {
    background-color: #c82333;
    transform: translateY(-1px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    color: white;
}

.about-content {
    margin: 1.5rem 0;
    line-height: 1.6;
}

.about-content ul {
    margin: 1rem 0;
    padding-left: 1.5rem;
}

.about-content .signature {
    margin-top: 2rem;
    font-style: italic;
    color: #666;
    line-height: 1.5;
}

.add-task-btn.disabled {
    background-color: #cccccc;
    cursor: not-allowed;
    opacity: 0.7;
}

.add-task-btn.disabled:hover {
    background-color: #cccccc;
}`, "",{"version":3,"sources":["webpack://./src/styles/todos.css"],"names":[],"mappings":"AAAA;IACI,eAAe;IACf,MAAM;IACN,OAAO;IACP,QAAQ;IACR,SAAS;IACT,8BAA8B;IAC9B,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,aAAa;AACjB;;AAEA;IACI,iBAAiB;IACjB,aAAa;IACb,kBAAkB;IAClB,UAAU;IACV,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,WAAW;AACf;;AAEA;IACI,iBAAiB;AACrB;;AAEA;;;IAGI,eAAe;IACf,sBAAsB;IACtB,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,WAAW;IACX,gBAAgB;AACpB;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,mBAAmB;IACnB,aAAa;IACb,iBAAiB;IACjB,sBAAsB;IACtB,kBAAkB;IAClB,SAAS;AACb;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,iBAAiB;IACjB,sBAAsB;AAC1B;;AAEA;IACI,iBAAiB;IACjB,WAAW;AACf;;AAEA;IACI,aAAa;IACb,SAAS;IACT,iBAAiB;IACjB,WAAW;AACf;;AAEA;IACI,kBAAkB;IAClB,WAAW;IACX,aAAa;AACjB;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,SAAS;IACT,gBAAgB;AACpB;;AAEA;IACI,gBAAgB;IAChB,gBAAgB;IAChB,YAAY;IACZ,eAAe;IACf,cAAc;IACd,sBAAsB;AAC1B;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,sBAAsB;IACtB,YAAY;IACZ,kBAAkB;IAClB,eAAe;IACf,gBAAgB;IAChB,yBAAyB;IACzB,gBAAgB;AACpB;;AAEA;IACI,yBAAyB;IACzB,YAAY;IACZ,wCAAwC;AAC5C;;AAEA;IACI,yBAAyB;IACzB,2BAA2B;IAC3B,wCAAwC;IACxC,YAAY;AAChB;;AAEA;IACI,yBAAyB;IACzB,cAAc;IACd,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;IACzB,2BAA2B;AAC/B;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,iBAAiB;IACjB,uBAAuB;IACvB,gBAAgB;AACpB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,sBAAsB;IACtB,yBAAyB;IACzB,YAAY;IACZ,YAAY;IACZ,kBAAkB;IAClB,eAAe;IACf,gBAAgB;IAChB,iCAAiC;AACrC;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;IACzB,YAAY;IACZ,wCAAwC;AAC5C;;AAEA;IACI,yBAAyB;IACzB,2BAA2B;IAC3B,wCAAwC;IACxC,YAAY;AAChB;;AAEA;IACI,gBAAgB;IAChB,gBAAgB;AACpB;;AAEA;IACI,cAAc;IACd,oBAAoB;AACxB;;AAEA;IACI,gBAAgB;IAChB,kBAAkB;IAClB,WAAW;IACX,gBAAgB;AACpB;;AAEA;IACI,yBAAyB;IACzB,mBAAmB;IACnB,YAAY;AAChB;;AAEA;IACI,yBAAyB;AAC7B","sourcesContent":[".modal-overlay {\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background: rgba(0, 0, 0, 0.5);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    z-index: 1000;\n}\n\n.todo-modal {\n    background: white;\n    padding: 2rem;\n    border-radius: 8px;\n    width: 90%;\n    max-width: 500px;\n}\n\n.todo-form {\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n}\n\n.form-group {\n    display: flex;\n    flex-direction: column;\n    gap: 0.5rem;\n}\n\n.form-group label {\n    font-weight: bold;\n}\n\n.form-group input,\n.form-group textarea,\n.form-group select {\n    padding: 0.5rem;\n    border: 1px solid #ddd;\n    border-radius: 4px;\n    font-size: 1rem;\n}\n\n.todo-list {\n    display: flex;\n    flex-direction: column;\n    gap: 0.5rem;\n    margin-top: 1rem;\n}\n\n.todo-item {\n    position: relative;\n    display: flex;\n    align-items: center;\n    padding: 1rem;\n    background: white;\n    border: 1px solid #ddd;\n    border-radius: 4px;\n    gap: 1rem;\n}\n\n.todo-checkbox {\n    width: 20px;\n    height: 20px;\n    cursor: pointer;\n}\n\n.todo-content {\n    flex-grow: 1;\n}\n\n.todo-title {\n    font-weight: bold;\n    margin-bottom: 0.25rem;\n}\n\n.todo-description {\n    font-size: 0.9rem;\n    color: #666;\n}\n\n.todo-metadata {\n    display: flex;\n    gap: 1rem;\n    font-size: 0.8rem;\n    color: #666;\n}\n\n.todo-item .todo-actions {\n    position: absolute;\n    top: 0.5rem;\n    right: 0.5rem;\n}\n\n.todo-modal .todo-actions {\n    position: static;\n    display: flex;\n    gap: 1rem;\n    margin-top: 1rem;\n}\n\n.todo-actions button {\n    padding: 0.25rem;\n    background: none;\n    border: none;\n    cursor: pointer;\n    color: #6c757d;\n    transition: color 0.2s;\n}\n\n.todo-actions button:hover {\n    color: #007bff;\n}\n\n.edit-todo svg {\n    width: 20px;\n    height: 20px;\n}\n\n.btn-todo {\n    padding: 0.8rem 1.5rem;\n    border: none;\n    border-radius: 4px;\n    cursor: pointer;\n    font-weight: 600;\n    transition: all 0.2s ease;\n    min-width: 100px;\n}\n\n.btn-todo.btn-primary {\n    background-color: #007bff;\n    color: white;\n    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n\n.btn-todo.btn-primary:hover {\n    background-color: #0056b3;\n    transform: translateY(-1px);\n    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n    color: white;\n}\n\n.btn-todo.btn-secondary {\n    background-color: #f8f9fa;\n    color: #212529;\n    border: 1px solid #dee2e6;\n}\n\n.btn-todo.btn-secondary:hover {\n    background-color: #e2e6ea;\n    transform: translateY(-1px);\n}\n\n.project-section {\n    margin-bottom: 2rem;\n}\n\n.project-header {\n    font-size: 1.1rem;\n    margin: 1.5rem 0 1rem 0;\n    font-weight: 600;\n}\n\n.project-section:first-child .project-header {\n    margin-top: 0;\n}\n\n.add-task-btn {\n    padding: 0.8rem 1.5rem;\n    background-color: #007bff;\n    color: white;\n    border: none;\n    border-radius: 4px;\n    cursor: pointer;\n    font-weight: 600;\n    transition: background-color 0.2s;\n}\n\n.add-task-btn:hover {\n    background-color: #0056b3;\n}\n\n.btn-todo.btn-danger {\n    background-color: #dc3545;\n    color: white;\n    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n\n.btn-todo.btn-danger:hover {\n    background-color: #c82333;\n    transform: translateY(-1px);\n    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n    color: white;\n}\n\n.about-content {\n    margin: 1.5rem 0;\n    line-height: 1.6;\n}\n\n.about-content ul {\n    margin: 1rem 0;\n    padding-left: 1.5rem;\n}\n\n.about-content .signature {\n    margin-top: 2rem;\n    font-style: italic;\n    color: #666;\n    line-height: 1.5;\n}\n\n.add-task-btn.disabled {\n    background-color: #cccccc;\n    cursor: not-allowed;\n    opacity: 0.7;\n}\n\n.add-task-btn.disabled:hover {\n    background-color: #cccccc;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/background.css":
/*!***********************************!*\
  !*** ./src/styles/background.css ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_background_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./background.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/background.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_background_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_background_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_background_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_background_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/layout.css":
/*!*******************************!*\
  !*** ./src/styles/layout.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_layout_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./layout.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/layout.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_layout_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_layout_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_layout_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_layout_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/main.css":
/*!*****************************!*\
  !*** ./src/styles/main.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./main.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/main.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/onboarding.css":
/*!***********************************!*\
  !*** ./src/styles/onboarding.css ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_onboarding_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./onboarding.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/onboarding.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_onboarding_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_onboarding_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_onboarding_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_onboarding_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/projects.css":
/*!*********************************!*\
  !*** ./src/styles/projects.css ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_projects_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./projects.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/projects.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_projects_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_projects_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_projects_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_projects_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/todos.css":
/*!******************************!*\
  !*** ./src/styles/todos.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_todos_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./todos.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/todos.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_todos_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_todos_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_todos_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_todos_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/boot.svg":
/*!*****************************!*\
  !*** ./src/assets/boot.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a47e0a4c5d7202a41986.svg";

/***/ }),

/***/ "./node_modules/date-fns/_lib/normalizeDates.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/_lib/normalizeDates.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   normalizeDates: () => (/* binding */ normalizeDates)
/* harmony export */ });
/* harmony import */ var _constructFrom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constructFrom.js */ "./node_modules/date-fns/constructFrom.js");


function normalizeDates(context, ...dates) {
  const normalize = _constructFrom_js__WEBPACK_IMPORTED_MODULE_0__.constructFrom.bind(
    null,
    context || dates.find((date) => typeof date === "object"),
  );
  return dates.map(normalize);
}


/***/ }),

/***/ "./node_modules/date-fns/constants.js":
/*!********************************************!*\
  !*** ./node_modules/date-fns/constants.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   constructFromSymbol: () => (/* binding */ constructFromSymbol),
/* harmony export */   daysInWeek: () => (/* binding */ daysInWeek),
/* harmony export */   daysInYear: () => (/* binding */ daysInYear),
/* harmony export */   maxTime: () => (/* binding */ maxTime),
/* harmony export */   millisecondsInDay: () => (/* binding */ millisecondsInDay),
/* harmony export */   millisecondsInHour: () => (/* binding */ millisecondsInHour),
/* harmony export */   millisecondsInMinute: () => (/* binding */ millisecondsInMinute),
/* harmony export */   millisecondsInSecond: () => (/* binding */ millisecondsInSecond),
/* harmony export */   millisecondsInWeek: () => (/* binding */ millisecondsInWeek),
/* harmony export */   minTime: () => (/* binding */ minTime),
/* harmony export */   minutesInDay: () => (/* binding */ minutesInDay),
/* harmony export */   minutesInHour: () => (/* binding */ minutesInHour),
/* harmony export */   minutesInMonth: () => (/* binding */ minutesInMonth),
/* harmony export */   minutesInYear: () => (/* binding */ minutesInYear),
/* harmony export */   monthsInQuarter: () => (/* binding */ monthsInQuarter),
/* harmony export */   monthsInYear: () => (/* binding */ monthsInYear),
/* harmony export */   quartersInYear: () => (/* binding */ quartersInYear),
/* harmony export */   secondsInDay: () => (/* binding */ secondsInDay),
/* harmony export */   secondsInHour: () => (/* binding */ secondsInHour),
/* harmony export */   secondsInMinute: () => (/* binding */ secondsInMinute),
/* harmony export */   secondsInMonth: () => (/* binding */ secondsInMonth),
/* harmony export */   secondsInQuarter: () => (/* binding */ secondsInQuarter),
/* harmony export */   secondsInWeek: () => (/* binding */ secondsInWeek),
/* harmony export */   secondsInYear: () => (/* binding */ secondsInYear)
/* harmony export */ });
/**
 * @module constants
 * @summary Useful constants
 * @description
 * Collection of useful date constants.
 *
 * The constants could be imported from `date-fns/constants`:
 *
 * ```ts
 * import { maxTime, minTime } from "./constants/date-fns/constants";
 *
 * function isAllowedTime(time) {
 *   return time <= maxTime && time >= minTime;
 * }
 * ```
 */

/**
 * @constant
 * @name daysInWeek
 * @summary Days in 1 week.
 */
const daysInWeek = 7;

/**
 * @constant
 * @name daysInYear
 * @summary Days in 1 year.
 *
 * @description
 * How many days in a year.
 *
 * One years equals 365.2425 days according to the formula:
 *
 * > Leap year occurs every 4 years, except for years that are divisible by 100 and not divisible by 400.
 * > 1 mean year = (365+1/4-1/100+1/400) days = 365.2425 days
 */
const daysInYear = 365.2425;

/**
 * @constant
 * @name maxTime
 * @summary Maximum allowed time.
 *
 * @example
 * import { maxTime } from "./constants/date-fns/constants";
 *
 * const isValid = 8640000000000001 <= maxTime;
 * //=> false
 *
 * new Date(8640000000000001);
 * //=> Invalid Date
 */
const maxTime = Math.pow(10, 8) * 24 * 60 * 60 * 1000;

/**
 * @constant
 * @name minTime
 * @summary Minimum allowed time.
 *
 * @example
 * import { minTime } from "./constants/date-fns/constants";
 *
 * const isValid = -8640000000000001 >= minTime;
 * //=> false
 *
 * new Date(-8640000000000001)
 * //=> Invalid Date
 */
const minTime = -maxTime;

/**
 * @constant
 * @name millisecondsInWeek
 * @summary Milliseconds in 1 week.
 */
const millisecondsInWeek = 604800000;

/**
 * @constant
 * @name millisecondsInDay
 * @summary Milliseconds in 1 day.
 */
const millisecondsInDay = 86400000;

/**
 * @constant
 * @name millisecondsInMinute
 * @summary Milliseconds in 1 minute
 */
const millisecondsInMinute = 60000;

/**
 * @constant
 * @name millisecondsInHour
 * @summary Milliseconds in 1 hour
 */
const millisecondsInHour = 3600000;

/**
 * @constant
 * @name millisecondsInSecond
 * @summary Milliseconds in 1 second
 */
const millisecondsInSecond = 1000;

/**
 * @constant
 * @name minutesInYear
 * @summary Minutes in 1 year.
 */
const minutesInYear = 525600;

/**
 * @constant
 * @name minutesInMonth
 * @summary Minutes in 1 month.
 */
const minutesInMonth = 43200;

/**
 * @constant
 * @name minutesInDay
 * @summary Minutes in 1 day.
 */
const minutesInDay = 1440;

/**
 * @constant
 * @name minutesInHour
 * @summary Minutes in 1 hour.
 */
const minutesInHour = 60;

/**
 * @constant
 * @name monthsInQuarter
 * @summary Months in 1 quarter.
 */
const monthsInQuarter = 3;

/**
 * @constant
 * @name monthsInYear
 * @summary Months in 1 year.
 */
const monthsInYear = 12;

/**
 * @constant
 * @name quartersInYear
 * @summary Quarters in 1 year
 */
const quartersInYear = 4;

/**
 * @constant
 * @name secondsInHour
 * @summary Seconds in 1 hour.
 */
const secondsInHour = 3600;

/**
 * @constant
 * @name secondsInMinute
 * @summary Seconds in 1 minute.
 */
const secondsInMinute = 60;

/**
 * @constant
 * @name secondsInDay
 * @summary Seconds in 1 day.
 */
const secondsInDay = secondsInHour * 24;

/**
 * @constant
 * @name secondsInWeek
 * @summary Seconds in 1 week.
 */
const secondsInWeek = secondsInDay * 7;

/**
 * @constant
 * @name secondsInYear
 * @summary Seconds in 1 year.
 */
const secondsInYear = secondsInDay * daysInYear;

/**
 * @constant
 * @name secondsInMonth
 * @summary Seconds in 1 month
 */
const secondsInMonth = secondsInYear / 12;

/**
 * @constant
 * @name secondsInQuarter
 * @summary Seconds in 1 quarter.
 */
const secondsInQuarter = secondsInMonth * 3;

/**
 * @constant
 * @name constructFromSymbol
 * @summary Symbol enabling Date extensions to inherit properties from the reference date.
 *
 * The symbol is used to enable the `constructFrom` function to construct a date
 * using a reference date and a value. It allows to transfer extra properties
 * from the reference date to the new date. It's useful for extensions like
 * [`TZDate`](https://github.com/date-fns/tz) that accept a time zone as
 * a constructor argument.
 */
const constructFromSymbol = Symbol.for("constructDateFrom");


/***/ }),

/***/ "./node_modules/date-fns/constructFrom.js":
/*!************************************************!*\
  !*** ./node_modules/date-fns/constructFrom.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   constructFrom: () => (/* binding */ constructFrom),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants.js */ "./node_modules/date-fns/constants.js");


/**
 * @name constructFrom
 * @category Generic Helpers
 * @summary Constructs a date using the reference date and the value
 *
 * @description
 * The function constructs a new date using the constructor from the reference
 * date and the given value. It helps to build generic functions that accept
 * date extensions.
 *
 * It defaults to `Date` if the passed reference date is a number or a string.
 *
 * Starting from v3.7.0, it allows to construct a date using `[Symbol.for("constructDateFrom")]`
 * enabling to transfer extra properties from the reference date to the new date.
 * It's useful for extensions like [`TZDate`](https://github.com/date-fns/tz)
 * that accept a time zone as a constructor argument.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The reference date to take constructor from
 * @param value - The value to create the date
 *
 * @returns Date initialized using the given date and value
 *
 * @example
 * import { constructFrom } from "./constructFrom/date-fns";
 *
 * // A function that clones a date preserving the original type
 * function cloneDate<DateType extends Date>(date: DateType): DateType {
 *   return constructFrom(
 *     date, // Use constructor from the given date
 *     date.getTime() // Use the date value to create a new date
 *   );
 * }
 */
function constructFrom(date, value) {
  if (typeof date === "function") return date(value);

  if (date && typeof date === "object" && _constants_js__WEBPACK_IMPORTED_MODULE_0__.constructFromSymbol in date)
    return date[_constants_js__WEBPACK_IMPORTED_MODULE_0__.constructFromSymbol](value);

  if (date instanceof Date) return new date.constructor(value);

  return new Date(value);
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (constructFrom);


/***/ }),

/***/ "./node_modules/date-fns/constructNow.js":
/*!***********************************************!*\
  !*** ./node_modules/date-fns/constructNow.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   constructNow: () => (/* binding */ constructNow),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constructFrom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constructFrom.js */ "./node_modules/date-fns/constructFrom.js");


/**
 * @name constructNow
 * @category Generic Helpers
 * @summary Constructs a new current date using the passed value constructor.
 * @pure false
 *
 * @description
 * The function constructs a new current date using the constructor from
 * the reference date. It helps to build generic functions that accept date
 * extensions and use the current date.
 *
 * It defaults to `Date` if the passed reference date is a number or a string.
 *
 * @param date - The reference date to take constructor from
 *
 * @returns Current date initialized using the given date constructor
 *
 * @example
 * import { constructNow, isSameDay } from 'date-fns'
 *
 * function isToday<DateType extends Date>(
 *   date: DateArg<DateType>,
 * ): boolean {
 *   // If we were to use `new Date()` directly, the function would  behave
 *   // differently in different timezones and return false for the same date.
 *   return isSameDay(date, constructNow(date));
 * }
 */
function constructNow(date) {
  return (0,_constructFrom_js__WEBPACK_IMPORTED_MODULE_0__.constructFrom)(date, Date.now());
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (constructNow);


/***/ }),

/***/ "./node_modules/date-fns/isFuture.js":
/*!*******************************************!*\
  !*** ./node_modules/date-fns/isFuture.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   isFuture: () => (/* binding */ isFuture)
/* harmony export */ });
/* harmony import */ var _toDate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.js */ "./node_modules/date-fns/toDate.js");


/**
 * @name isFuture
 * @category Common Helpers
 * @summary Is the given date in the future?
 * @pure false
 *
 * @description
 * Is the given date in the future?
 *
 * @param date - The date to check
 *
 * @returns The date is in the future
 *
 * @example
 * // If today is 6 October 2014, is 31 December 2014 in the future?
 * const result = isFuture(new Date(2014, 11, 31))
 * //=> true
 */
function isFuture(date) {
  return +(0,_toDate_js__WEBPACK_IMPORTED_MODULE_0__.toDate)(date) > Date.now();
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isFuture);


/***/ }),

/***/ "./node_modules/date-fns/isSameDay.js":
/*!********************************************!*\
  !*** ./node_modules/date-fns/isSameDay.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   isSameDay: () => (/* binding */ isSameDay)
/* harmony export */ });
/* harmony import */ var _lib_normalizeDates_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/normalizeDates.js */ "./node_modules/date-fns/_lib/normalizeDates.js");
/* harmony import */ var _startOfDay_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./startOfDay.js */ "./node_modules/date-fns/startOfDay.js");



/**
 * The {@link isSameDay} function options.
 */

/**
 * @name isSameDay
 * @category Day Helpers
 * @summary Are the given dates in the same day (and year and month)?
 *
 * @description
 * Are the given dates in the same day (and year and month)?
 *
 * @param laterDate - The first date to check
 * @param earlierDate - The second date to check
 * @param options - An object with options
 *
 * @returns The dates are in the same day (and year and month)
 *
 * @example
 * // Are 4 September 06:00:00 and 4 September 18:00:00 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4, 6, 0), new Date(2014, 8, 4, 18, 0))
 * //=> true
 *
 * @example
 * // Are 4 September and 4 October in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2014, 9, 4))
 * //=> false
 *
 * @example
 * // Are 4 September, 2014 and 4 September, 2015 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2015, 8, 4))
 * //=> false
 */
function isSameDay(laterDate, earlierDate, options) {
  const [dateLeft_, dateRight_] = (0,_lib_normalizeDates_js__WEBPACK_IMPORTED_MODULE_0__.normalizeDates)(
    options?.in,
    laterDate,
    earlierDate,
  );
  return +(0,_startOfDay_js__WEBPACK_IMPORTED_MODULE_1__.startOfDay)(dateLeft_) === +(0,_startOfDay_js__WEBPACK_IMPORTED_MODULE_1__.startOfDay)(dateRight_);
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isSameDay);


/***/ }),

/***/ "./node_modules/date-fns/isToday.js":
/*!******************************************!*\
  !*** ./node_modules/date-fns/isToday.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   isToday: () => (/* binding */ isToday)
/* harmony export */ });
/* harmony import */ var _constructFrom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constructFrom.js */ "./node_modules/date-fns/constructFrom.js");
/* harmony import */ var _constructNow_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constructNow.js */ "./node_modules/date-fns/constructNow.js");
/* harmony import */ var _isSameDay_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isSameDay.js */ "./node_modules/date-fns/isSameDay.js");




/**
 * The {@link isToday} function options.
 */

/**
 * @name isToday
 * @category Day Helpers
 * @summary Is the given date today?
 * @pure false
 *
 * @description
 * Is the given date today?
 *
 * @param date - The date to check
 * @param options - An object with options
 *
 * @returns The date is today
 *
 * @example
 * // If today is 6 October 2014, is 6 October 14:00:00 today?
 * const result = isToday(new Date(2014, 9, 6, 14, 0))
 * //=> true
 */
function isToday(date, options) {
  return (0,_isSameDay_js__WEBPACK_IMPORTED_MODULE_0__.isSameDay)(
    (0,_constructFrom_js__WEBPACK_IMPORTED_MODULE_1__.constructFrom)(options?.in || date, date),
    (0,_constructNow_js__WEBPACK_IMPORTED_MODULE_2__.constructNow)(options?.in || date),
  );
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isToday);


/***/ }),

/***/ "./node_modules/date-fns/parseISO.js":
/*!*******************************************!*\
  !*** ./node_modules/date-fns/parseISO.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   parseISO: () => (/* binding */ parseISO)
/* harmony export */ });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants.js */ "./node_modules/date-fns/constants.js");
/* harmony import */ var _constructFrom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constructFrom.js */ "./node_modules/date-fns/constructFrom.js");
/* harmony import */ var _toDate_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toDate.js */ "./node_modules/date-fns/toDate.js");




/**
 * The {@link parseISO} function options.
 */

/**
 * @name parseISO
 * @category Common Helpers
 * @summary Parse ISO string
 *
 * @description
 * Parse the given string in ISO 8601 format and return an instance of Date.
 *
 * Function accepts complete ISO 8601 formats as well as partial implementations.
 * ISO 8601: http://en.wikipedia.org/wiki/ISO_8601
 *
 * If the argument isn't a string, the function cannot parse the string or
 * the values are invalid, it returns Invalid Date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param argument - The value to convert
 * @param options - An object with options
 *
 * @returns The parsed date in the local time zone
 *
 * @example
 * // Convert string '2014-02-11T11:30:30' to date:
 * const result = parseISO('2014-02-11T11:30:30')
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert string '+02014101' to date,
 * // if the additional number of digits in the extended year format is 1:
 * const result = parseISO('+02014101', { additionalDigits: 1 })
 * //=> Fri Apr 11 2014 00:00:00
 */
function parseISO(argument, options) {
  const invalidDate = () => (0,_constructFrom_js__WEBPACK_IMPORTED_MODULE_0__.constructFrom)(options?.in, NaN);

  const additionalDigits = options?.additionalDigits ?? 2;
  const dateStrings = splitDateString(argument);

  let date;
  if (dateStrings.date) {
    const parseYearResult = parseYear(dateStrings.date, additionalDigits);
    date = parseDate(parseYearResult.restDateString, parseYearResult.year);
  }

  if (!date || isNaN(+date)) return invalidDate();

  const timestamp = +date;
  let time = 0;
  let offset;

  if (dateStrings.time) {
    time = parseTime(dateStrings.time);
    if (isNaN(time)) return invalidDate();
  }

  if (dateStrings.timezone) {
    offset = parseTimezone(dateStrings.timezone);
    if (isNaN(offset)) return invalidDate();
  } else {
    const tmpDate = new Date(timestamp + time);
    const result = (0,_toDate_js__WEBPACK_IMPORTED_MODULE_1__.toDate)(0, options?.in);
    result.setFullYear(
      tmpDate.getUTCFullYear(),
      tmpDate.getUTCMonth(),
      tmpDate.getUTCDate(),
    );
    result.setHours(
      tmpDate.getUTCHours(),
      tmpDate.getUTCMinutes(),
      tmpDate.getUTCSeconds(),
      tmpDate.getUTCMilliseconds(),
    );
    return result;
  }

  return (0,_toDate_js__WEBPACK_IMPORTED_MODULE_1__.toDate)(timestamp + time + offset, options?.in);
}

const patterns = {
  dateTimeDelimiter: /[T ]/,
  timeZoneDelimiter: /[Z ]/i,
  timezone: /([Z+-].*)$/,
};

const dateRegex =
  /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/;
const timeRegex =
  /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/;
const timezoneRegex = /^([+-])(\d{2})(?::?(\d{2}))?$/;

function splitDateString(dateString) {
  const dateStrings = {};
  const array = dateString.split(patterns.dateTimeDelimiter);
  let timeString;

  // The regex match should only return at maximum two array elements.
  // [date], [time], or [date, time].
  if (array.length > 2) {
    return dateStrings;
  }

  if (/:/.test(array[0])) {
    timeString = array[0];
  } else {
    dateStrings.date = array[0];
    timeString = array[1];
    if (patterns.timeZoneDelimiter.test(dateStrings.date)) {
      dateStrings.date = dateString.split(patterns.timeZoneDelimiter)[0];
      timeString = dateString.substr(
        dateStrings.date.length,
        dateString.length,
      );
    }
  }

  if (timeString) {
    const token = patterns.timezone.exec(timeString);
    if (token) {
      dateStrings.time = timeString.replace(token[1], "");
      dateStrings.timezone = token[1];
    } else {
      dateStrings.time = timeString;
    }
  }

  return dateStrings;
}

function parseYear(dateString, additionalDigits) {
  const regex = new RegExp(
    "^(?:(\\d{4}|[+-]\\d{" +
      (4 + additionalDigits) +
      "})|(\\d{2}|[+-]\\d{" +
      (2 + additionalDigits) +
      "})$)",
  );

  const captures = dateString.match(regex);
  // Invalid ISO-formatted year
  if (!captures) return { year: NaN, restDateString: "" };

  const year = captures[1] ? parseInt(captures[1]) : null;
  const century = captures[2] ? parseInt(captures[2]) : null;

  // either year or century is null, not both
  return {
    year: century === null ? year : century * 100,
    restDateString: dateString.slice((captures[1] || captures[2]).length),
  };
}

function parseDate(dateString, year) {
  // Invalid ISO-formatted year
  if (year === null) return new Date(NaN);

  const captures = dateString.match(dateRegex);
  // Invalid ISO-formatted string
  if (!captures) return new Date(NaN);

  const isWeekDate = !!captures[4];
  const dayOfYear = parseDateUnit(captures[1]);
  const month = parseDateUnit(captures[2]) - 1;
  const day = parseDateUnit(captures[3]);
  const week = parseDateUnit(captures[4]);
  const dayOfWeek = parseDateUnit(captures[5]) - 1;

  if (isWeekDate) {
    if (!validateWeekDate(year, week, dayOfWeek)) {
      return new Date(NaN);
    }
    return dayOfISOWeekYear(year, week, dayOfWeek);
  } else {
    const date = new Date(0);
    if (
      !validateDate(year, month, day) ||
      !validateDayOfYearDate(year, dayOfYear)
    ) {
      return new Date(NaN);
    }
    date.setUTCFullYear(year, month, Math.max(dayOfYear, day));
    return date;
  }
}

function parseDateUnit(value) {
  return value ? parseInt(value) : 1;
}

function parseTime(timeString) {
  const captures = timeString.match(timeRegex);
  if (!captures) return NaN; // Invalid ISO-formatted time

  const hours = parseTimeUnit(captures[1]);
  const minutes = parseTimeUnit(captures[2]);
  const seconds = parseTimeUnit(captures[3]);

  if (!validateTime(hours, minutes, seconds)) {
    return NaN;
  }

  return (
    hours * _constants_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInHour + minutes * _constants_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInMinute + seconds * 1000
  );
}

function parseTimeUnit(value) {
  return (value && parseFloat(value.replace(",", "."))) || 0;
}

function parseTimezone(timezoneString) {
  if (timezoneString === "Z") return 0;

  const captures = timezoneString.match(timezoneRegex);
  if (!captures) return 0;

  const sign = captures[1] === "+" ? -1 : 1;
  const hours = parseInt(captures[2]);
  const minutes = (captures[3] && parseInt(captures[3])) || 0;

  if (!validateTimezone(hours, minutes)) {
    return NaN;
  }

  return sign * (hours * _constants_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInHour + minutes * _constants_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInMinute);
}

function dayOfISOWeekYear(isoWeekYear, week, day) {
  const date = new Date(0);
  date.setUTCFullYear(isoWeekYear, 0, 4);
  const fourthOfJanuaryDay = date.getUTCDay() || 7;
  const diff = (week - 1) * 7 + day + 1 - fourthOfJanuaryDay;
  date.setUTCDate(date.getUTCDate() + diff);
  return date;
}

// Validation functions

// February is null to handle the leap year (using ||)
const daysInMonths = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function isLeapYearIndex(year) {
  return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
}

function validateDate(year, month, date) {
  return (
    month >= 0 &&
    month <= 11 &&
    date >= 1 &&
    date <= (daysInMonths[month] || (isLeapYearIndex(year) ? 29 : 28))
  );
}

function validateDayOfYearDate(year, dayOfYear) {
  return dayOfYear >= 1 && dayOfYear <= (isLeapYearIndex(year) ? 366 : 365);
}

function validateWeekDate(_year, week, day) {
  return week >= 1 && week <= 53 && day >= 0 && day <= 6;
}

function validateTime(hours, minutes, seconds) {
  if (hours === 24) {
    return minutes === 0 && seconds === 0;
  }

  return (
    seconds >= 0 &&
    seconds < 60 &&
    minutes >= 0 &&
    minutes < 60 &&
    hours >= 0 &&
    hours < 25
  );
}

function validateTimezone(_hours, minutes) {
  return minutes >= 0 && minutes <= 59;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (parseISO);


/***/ }),

/***/ "./node_modules/date-fns/startOfDay.js":
/*!*********************************************!*\
  !*** ./node_modules/date-fns/startOfDay.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   startOfDay: () => (/* binding */ startOfDay)
/* harmony export */ });
/* harmony import */ var _toDate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.js */ "./node_modules/date-fns/toDate.js");


/**
 * The {@link startOfDay} function options.
 */

/**
 * @name startOfDay
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - The options
 *
 * @returns The start of a day
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */
function startOfDay(date, options) {
  const _date = (0,_toDate_js__WEBPACK_IMPORTED_MODULE_0__.toDate)(date, options?.in);
  _date.setHours(0, 0, 0, 0);
  return _date;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startOfDay);


/***/ }),

/***/ "./node_modules/date-fns/toDate.js":
/*!*****************************************!*\
  !*** ./node_modules/date-fns/toDate.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   toDate: () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _constructFrom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constructFrom.js */ "./node_modules/date-fns/constructFrom.js");


/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * Starting from v3.7.0, it clones a date using `[Symbol.for("constructDateFrom")]`
 * enabling to transfer extra properties from the reference date to the new date.
 * It's useful for extensions like [`TZDate`](https://github.com/date-fns/tz)
 * that accept a time zone as a constructor argument.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param argument - The value to convert
 *
 * @returns The parsed date in the local time zone
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */
function toDate(argument, context) {
  // [TODO] Get rid of `toDate` or `constructFrom`?
  return (0,_constructFrom_js__WEBPACK_IMPORTED_MODULE_0__.constructFrom)(context || argument, argument);
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toDate);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.css */ "./src/styles/main.css");
/* harmony import */ var _styles_background_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/background.css */ "./src/styles/background.css");
/* harmony import */ var _styles_onboarding_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/onboarding.css */ "./src/styles/onboarding.css");
/* harmony import */ var _styles_layout_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/layout.css */ "./src/styles/layout.css");
/* harmony import */ var _styles_projects_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/projects.css */ "./src/styles/projects.css");
/* harmony import */ var _styles_todos_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/todos.css */ "./src/styles/todos.css");
/* harmony import */ var _assets_boot_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/boot.svg */ "./src/assets/boot.svg");
/* harmony import */ var _modules_onboarding__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/onboarding */ "./src/modules/onboarding.js");
/* harmony import */ var _modules_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/layout */ "./src/modules/layout.js");
/* harmony import */ var _modules_todos__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/todos */ "./src/modules/todos.js");
/* harmony import */ var _modules_projects__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/projects */ "./src/modules/projects.js");











var boot = new Image();
boot.src = _assets_boot_svg__WEBPACK_IMPORTED_MODULE_6__;
boot.classList.add('background-boot');
document.body.appendChild(boot);
var onboarding = new _modules_onboarding__WEBPACK_IMPORTED_MODULE_7__["default"]();
onboarding.init().then(function (userData) {
  console.log('User setup complete:', userData);
  var todoManager = new _modules_todos__WEBPACK_IMPORTED_MODULE_9__["default"]();
  var projectManager = new _modules_projects__WEBPACK_IMPORTED_MODULE_10__["default"](todoManager);
  var layout = new _modules_layout__WEBPACK_IMPORTED_MODULE_8__["default"](userData, todoManager, projectManager);
  layout.init();
  var appContainer = document.querySelector('.app-container');
  var existingBoot = document.querySelector('.background-boot');
  if (existingBoot) {
    document.body.removeChild(existingBoot);
    appContainer.prepend(boot);
  }
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLHdGQUF3RixZQUFZLFdBQVcsVUFBVSxNQUFNLE9BQU8sYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEs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O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sdUZBQXVGLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZ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O0FBQ0EsWUFBWSxVQUFVO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxVQUFVO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2TjhDOztBQUVyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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LElBQUk0TCxZQUFZLEVBQUU7SUFDZHJPLFFBQVEsQ0FBQ3NDLElBQUksQ0FBQ2dCLFdBQVcsQ0FBQytLLFlBQVksQ0FBQztJQUN2Q2pJLFlBQVksQ0FBQ2tJLE9BQU8sQ0FBQ1QsSUFBSSxDQUFDO0VBQzlCO0FBQ0osQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2xheW91dC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL29uYm9hcmRpbmcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9wcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3RvZG9zLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL3N0eWxlcy9iYWNrZ3JvdW5kLmNzcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9zdHlsZXMvbGF5b3V0LmNzcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9zdHlsZXMvbWFpbi5jc3MiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvc3R5bGVzL29uYm9hcmRpbmcuY3NzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL3N0eWxlcy9wcm9qZWN0cy5jc3MiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvc3R5bGVzL3RvZG9zLmNzcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9zdHlsZXMvYmFja2dyb3VuZC5jc3M/MzYxNSIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9zdHlsZXMvbGF5b3V0LmNzcz9kODEyIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL3N0eWxlcy9tYWluLmNzcz9lODBhIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL3N0eWxlcy9vbmJvYXJkaW5nLmNzcz9jZDBlIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL3N0eWxlcy9wcm9qZWN0cy5jc3M/MWFhYSIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9zdHlsZXMvdG9kb3MuY3NzPzJiZmUiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9fbGliL25vcm1hbGl6ZURhdGVzLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9jb25zdHJ1Y3RGcm9tLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2NvbnN0cnVjdE5vdy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9pc0Z1dHVyZS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9pc1NhbWVEYXkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvaXNUb2RheS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9wYXJzZUlTTy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9zdGFydE9mRGF5LmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3RvRGF0ZS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9qZWN0TWFuYWdlciBmcm9tICcuL3Byb2plY3RzJztcbmltcG9ydCBUb2RvTWFuYWdlciwgeyBUb2RvIH0gZnJvbSAnLi90b2Rvcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExheW91dCB7XG4gICAgY29uc3RydWN0b3IodXNlckRhdGEsIHRvZG9NYW5hZ2VyLCBwcm9qZWN0TWFuYWdlcikge1xuICAgICAgICB0aGlzLnVzZXJEYXRhID0gdXNlckRhdGE7XG4gICAgICAgIHRoaXMuYWN0aXZlUHJvamVjdElkID0gbnVsbDtcbiAgICAgICAgdGhpcy50b2RvTWFuYWdlciA9IHRvZG9NYW5hZ2VyO1xuICAgICAgICB0aGlzLnByb2plY3RNYW5hZ2VyID0gcHJvamVjdE1hbmFnZXI7XG4gICAgfVxuXG4gICAgY3JlYXRlSGVhZGVyKCkge1xuICAgICAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcbiAgICAgICAgaGVhZGVyLmNsYXNzTmFtZSA9ICdhcHAtaGVhZGVyJztcblxuICAgICAgICBoZWFkZXIuaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRlci1sZWZ0XCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIm1lbnUtdG9nZ2xlXCIgYXJpYS1sYWJlbD1cIlRvZ2dsZSBNZW51XCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj48L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzPVwiYXBwLXRpdGxlXCI+PHNwYW4gY2xhc3M9XCJib290XCI+Qm9vdDwvc3Bhbj48c3BhbiBjbGFzcz1cImRvXCI+ZG88L3NwYW4+PC9oMT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRlci1yaWdodFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1c2VyLXByb2ZpbGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ1c2VyLW5hbWVcIj4ke3RoaXMudXNlckRhdGEubmFtZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1c2VyLWF2YXRhclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgJHt0aGlzLmNyZWF0ZUF2YXRhckVsZW1lbnQoKX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1c2VyLWRyb3Bkb3duXCIgc3R5bGU9XCJkaXNwbGF5OiBub25lO1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRyb3Bkb3duLWl0ZW0gYWJvdXRcIj5BYm91dDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRyb3Bkb3duLWl0ZW0gc2lnbi1vdXRcIj5TaWduIE91dDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICBgO1xuXG4gICAgICAgIHJldHVybiBoZWFkZXI7XG4gICAgfVxuXG4gICAgY3JlYXRlU2lkZWJhcigpIHtcbiAgICAgICAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2FzaWRlJyk7XG4gICAgICAgIHNpZGViYXIuY2xhc3NOYW1lID0gJ2FwcC1zaWRlYmFyJztcblxuICAgICAgICBzaWRlYmFyLmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgIDxuYXYgY2xhc3M9XCJzaWRlYmFyLW5hdlwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzaWRlYmFyLXNlY3Rpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgPGgyPkhvbWU8L2gyPlxuICAgICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIiBjbGFzcz1cImFjdGl2ZVwiIGRhdGEtdmlldz1cImFsbFwiPkFsbCBUYXNrczwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCIgZGF0YS12aWV3PVwidG9kYXlcIj5Ub2RheTwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCIgZGF0YS12aWV3PVwidXBjb21pbmdcIj5VcGNvbWluZzwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCIgZGF0YS12aWV3PVwiY29tcGxldGVkXCI+Q29tcGxldGVkPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNpZGViYXItc2VjdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICA8aDI+UHJvamVjdHM8L2gyPlxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJwcm9qZWN0cy1saXN0XCI+XG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4tYWRkLXByb2plY3RcIiBpZD1cImFkZC1wcm9qZWN0LWJ0blwiPisgQWRkIFByb2plY3Q8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFkZC1wcm9qZWN0LWZvcm1cIiBzdHlsZT1cImRpc3BsYXk6IG5vbmU7XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImFkZC1wcm9qZWN0LWlucHV0XCIgcGxhY2Vob2xkZXI9XCJQcm9qZWN0IG5hbWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9qZWN0LWFjdGlvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuLWFkZC1wcm9qZWN0XCIgaWQ9XCJzYXZlLXByb2plY3QtYnRuXCI+QWRkPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L25hdj5cbiAgICAgICAgYDtcblxuICAgICAgICByZXR1cm4gc2lkZWJhcjtcbiAgICB9XG5cbiAgICBjcmVhdGVNYWluKCkge1xuICAgICAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xuICAgICAgICBtYWluLmNsYXNzTmFtZSA9ICdhcHAtbWFpbic7XG5cbiAgICAgICAgbWFpbi5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudC1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICA8aDI+QWxsIFRhc2tzPC9oMj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYWRkLXRhc2stYnRuXCI+KyBBZGQgVGFzazwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFza3MtY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgYDtcblxuICAgICAgICByZXR1cm4gbWFpbjtcbiAgICB9XG5cbiAgICBjcmVhdGVBdmF0YXJFbGVtZW50KCkge1xuICAgICAgICBpZiAodGhpcy51c2VyRGF0YS5hdmF0YXIgPT09ICdkZWZhdWx0Jykge1xuICAgICAgICAgICAgY29uc3QgaW5pdGlhbHMgPSB0aGlzLnVzZXJEYXRhLm5hbWVcbiAgICAgICAgICAgICAgICAuc3BsaXQoJyAnKVxuICAgICAgICAgICAgICAgIC5tYXAod29yZCA9PiB3b3JkWzBdKVxuICAgICAgICAgICAgICAgIC5qb2luKCcnKVxuICAgICAgICAgICAgICAgIC50b1VwcGVyQ2FzZSgpXG4gICAgICAgICAgICAgICAgLnNsaWNlKDAsIDIpO1xuICAgICAgICAgICAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwiZGVmYXVsdC1hdmF0YXJcIj48c3Bhbj4ke2luaXRpYWxzfTwvc3Bhbj48L2Rpdj5gO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBgPGRpdiBjbGFzcz1cInVzZXItYXZhdGFyLWltZ1wiIHN0eWxlPVwiYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7dGhpcy51c2VyRGF0YS5hdmF0YXJ9KVwiPjwvZGl2PmA7XG4gICAgfVxuXG4gICAgY3JlYXRlVG9kb01vZGFsKHRvZG9Ub0VkaXQgPSBudWxsKSB7XG4gICAgICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG1vZGFsLmNsYXNzTmFtZSA9ICdtb2RhbC1vdmVybGF5JztcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHByb2plY3RzID0gdGhpcy5wcm9qZWN0TWFuYWdlci5nZXRBbGxQcm9qZWN0cygpO1xuICAgICAgICBjb25zdCBwcm9qZWN0T3B0aW9ucyA9IHByb2plY3RzXG4gICAgICAgICAgICAubWFwKHByb2plY3QgPT4gYFxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIke3Byb2plY3QuaWR9XCIgJHtwcm9qZWN0LmlkID09PSAodG9kb1RvRWRpdD8ucHJvamVjdElkIHx8IHRoaXMuYWN0aXZlUHJvamVjdElkKSA/ICdzZWxlY3RlZCcgOiAnJ30+XG4gICAgICAgICAgICAgICAgICAgICR7cHJvamVjdC5uYW1lfVxuICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICAgYClcbiAgICAgICAgICAgIC5qb2luKCcnKTtcbiAgICAgICAgXG4gICAgICAgIG1vZGFsLmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0b2RvLW1vZGFsXCI+XG4gICAgICAgICAgICAgICAgPGgyPiR7dG9kb1RvRWRpdCA/ICdFZGl0IFRhc2snIDogJ0FkZCBOZXcgVGFzayd9PC9oMj5cbiAgICAgICAgICAgICAgICA8Zm9ybSBjbGFzcz1cInRvZG8tZm9ybVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInRvZG8tdGl0bGVcIj5UaXRsZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInRvZG8tdGl0bGVcIiB2YWx1ZT1cIiR7dG9kb1RvRWRpdD8udGl0bGUgfHwgJyd9XCIgcmVxdWlyZWQ+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInRvZG8tcHJvamVjdFwiPlByb2plY3Q8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBpZD1cInRvZG8tcHJvamVjdFwiIHJlcXVpcmVkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7cHJvamVjdE9wdGlvbnN9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwidG9kby1kZXNjcmlwdGlvblwiPkRlc2NyaXB0aW9uPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBpZD1cInRvZG8tZGVzY3JpcHRpb25cIiByb3dzPVwiM1wiPiR7dG9kb1RvRWRpdD8uZGVzY3JpcHRpb24gfHwgJyd9PC90ZXh0YXJlYT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwidG9kby1kdWUtZGF0ZVwiPkR1ZSBEYXRlPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZGF0ZVwiIGlkPVwidG9kby1kdWUtZGF0ZVwiIHZhbHVlPVwiJHt0b2RvVG9FZGl0Py5kdWVEYXRlIHx8ICcnfVwiPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ0b2RvLXByaW9yaXR5XCI+UHJpb3JpdHk8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBpZD1cInRvZG8tcHJpb3JpdHlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibG93XCIgJHt0b2RvVG9FZGl0Py5wcmlvcml0eSA9PT0gJ2xvdycgPyAnc2VsZWN0ZWQnIDogJyd9Pkxvdzwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJtZWRpdW1cIiAkeyF0b2RvVG9FZGl0IHx8IHRvZG9Ub0VkaXQ/LnByaW9yaXR5ID09PSAnbWVkaXVtJyA/ICdzZWxlY3RlZCcgOiAnJ30+TWVkaXVtPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImhpZ2hcIiAke3RvZG9Ub0VkaXQ/LnByaW9yaXR5ID09PSAnaGlnaCcgPyAnc2VsZWN0ZWQnIDogJyd9PkhpZ2g8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRvZG8tYWN0aW9uc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJidG4tdG9kbyBidG4tcHJpbWFyeVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7dG9kb1RvRWRpdCA/ICdVcGRhdGUnIDogJ0FkZCBUYXNrJ31cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgJHt0b2RvVG9FZGl0ID8gJzxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuLXRvZG8gYnRuLWRhbmdlclwiIGlkPVwiZGVsZXRlLXRvZG9cIj5EZWxldGU8L2J1dHRvbj4nIDogJyd9XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0bi10b2RvIGJ0bi1zZWNvbmRhcnlcIiBpZD1cImNhbmNlbC10b2RvXCI+Q2FuY2VsPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICBgO1xuICAgIFxuICAgICAgICByZXR1cm4gbW9kYWw7XG4gICAgfVxuXG4gICAgc2hvd1RvZG9Nb2RhbCh0b2RvVG9FZGl0ID0gbnVsbCwgcHJvamVjdElkID0gbnVsbCkge1xuICAgICAgICBjb25zdCBtb2RhbCA9IHRoaXMuY3JlYXRlVG9kb01vZGFsKHRvZG9Ub0VkaXQpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1vZGFsKTtcbiAgICBcbiAgICAgICAgY29uc3QgZm9ybSA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWZvcm0nKTtcbiAgICAgICAgY29uc3QgY2FuY2VsQnV0dG9uID0gbW9kYWwucXVlcnlTZWxlY3RvcignI2NhbmNlbC10b2RvJyk7XG4gICAgICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJyNkZWxldGUtdG9kbycpO1xuICAgIFxuICAgICAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG8tdGl0bGUnKS52YWx1ZTtcbiAgICAgICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG8tZGVzY3JpcHRpb24nKS52YWx1ZTtcbiAgICAgICAgICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kby1kdWUtZGF0ZScpLnZhbHVlO1xuICAgICAgICAgICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kby1wcmlvcml0eScpLnZhbHVlO1xuICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWRQcm9qZWN0SWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kby1wcm9qZWN0JykudmFsdWU7XG4gICAgXG4gICAgICAgICAgICBpZiAodGl0bGUudHJpbSgpKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRvZG9Ub0VkaXQpIHtcbiAgICAgICAgICAgICAgICAgICAgdG9kb1RvRWRpdC50aXRsZSA9IHRpdGxlO1xuICAgICAgICAgICAgICAgICAgICB0b2RvVG9FZGl0LmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgICAgICAgICAgICAgIHRvZG9Ub0VkaXQuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgICAgICAgICAgICAgICAgIHRvZG9Ub0VkaXQucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b2RvTWFuYWdlci51cGRhdGVUb2RvKHByb2plY3RJZCwgdG9kb1RvRWRpdC5pZCwgdG9kb1RvRWRpdCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9kbyA9IG5ldyBUb2RvKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRvZG9NYW5hZ2VyLmFkZFRvZG8oc2VsZWN0ZWRQcm9qZWN0SWQsIHRvZG8pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlckN1cnJlbnRWaWV3KCk7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChtb2RhbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIFxuICAgICAgICBjYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKG1vZGFsKTtcbiAgICAgICAgfSk7XG4gICAgXG4gICAgICAgIGlmIChkZWxldGVCdXR0b24pIHtcbiAgICAgICAgICAgIGRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnRvZG9NYW5hZ2VyLmRlbGV0ZVRvZG8ocHJvamVjdElkLCB0b2RvVG9FZGl0LmlkKTtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlckN1cnJlbnRWaWV3KCk7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChtb2RhbCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNob3dTaWduT3V0Q29uZmlybWF0aW9uKCkge1xuICAgICAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBtb2RhbC5jbGFzc05hbWUgPSAnbW9kYWwtb3ZlcmxheSc7XG4gICAgICAgIFxuICAgICAgICBtb2RhbC5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidG9kby1tb2RhbFwiPlxuICAgICAgICAgICAgICAgIDxoMj5TaWduIE91dDwvaDI+XG4gICAgICAgICAgICAgICAgPHA+QXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIHNpZ24gb3V0PyBUaGlzIHdpbGwgY2xlYXIgYWxsIHlvdXIgZGF0YS4uLjwvcD5cbiAgICAgICAgICAgICAgICA8cCBzdHlsZT1cImZvbnQtc2l6ZTogMC45ZW07IGNvbG9yOiAjNjY2OyBtYXJnaW4tdG9wOiAwLjVyZW07XCI+XG4gICAgICAgICAgICAgICAgICAgIChZZXMsIHRoaXMgaXMganVzdCBmb3IgdGVzdGluZy4gSW4gYSByZWFsIGFwcCwgeW91ciBkYXRhIHdvdWxkIGJlIHNhdmVkISlcbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRvZG8tYWN0aW9uc1wiIHN0eWxlPVwibWFyZ2luLXRvcDogMnJlbTtcIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0bi10b2RvIGJ0bi1wcmltYXJ5XCIgaWQ9XCJjb25maXJtLXNpZ25vdXRcIj5TaWduIE91dDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuLXRvZG8gYnRuLXNlY29uZGFyeVwiIGlkPVwiY2FuY2VsLXNpZ25vdXRcIj5DYW5jZWw8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICBgO1xuICAgIFxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1vZGFsKTtcbiAgICBcbiAgICAgICAgY29uc3QgY29uZmlybUJ0biA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJyNjb25maXJtLXNpZ25vdXQnKTtcbiAgICAgICAgY29uc3QgY2FuY2VsQnRuID0gbW9kYWwucXVlcnlTZWxlY3RvcignI2NhbmNlbC1zaWdub3V0Jyk7XG4gICAgXG4gICAgICAgIGNvbmZpcm1CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgfSk7XG4gICAgXG4gICAgICAgIGNhbmNlbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQobW9kYWwpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzaG93QWJvdXRNb2RhbCgpIHtcbiAgICAgICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbW9kYWwuY2xhc3NOYW1lID0gJ21vZGFsLW92ZXJsYXknO1xuICAgICAgICBcbiAgICAgICAgbW9kYWwuaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRvZG8tbW9kYWxcIj5cbiAgICAgICAgICAgICAgICA8aDI+QWJvdXQgQm9vdGRvPC9oMj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWJvdXQtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICA8cD5Cb290ZG8gaXMgYSBwcm9qZWN0IG1hbmFnZW1lbnQgYXBwbGljYXRpb24gYnVpbHQgYXMgcGFydCBvZiBUaGUgT2RpbiBQcm9qZWN0IGN1cnJpY3VsdW0uIEl0J3MgZGVzaWduZWQgdG8gaGVscCBkZXZlbG9wZXJzIG9yZ2FuaXplIHRoZWlyIHByb2plY3RzIGFuZCB0YXNrcyB3aXRoIGEgdG91Y2ggb2YgaHVtb3IuPC9wPlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImZlYXR1cmVzLXRleHRcIj5GZWF0dXJlcyBpbmNsdWRlOjwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlByb2plY3Qgb3JnYW5pemF0aW9uPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5UYXNrIG1hbmFnZW1lbnQgd2l0aCBwcmlvcml0aWVzIGFuZCBkdWUgZGF0ZXM8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkRpZmZlcmVudCB0YXNrIHZpZXdzIChUb2RheSwgVXBjb21pbmcsIENvbXBsZXRlZCk8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkZ1biBkZWZhdWx0IHByb2plY3QgbmFtZXMgZm9yIGRldmVsb3BlciBpbnNwaXJhdGlvbjwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInNpZ25hdHVyZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgRW5qb3khPGJyPjxicj5cbiAgICAgICAgICAgICAgICAgICAgICAgICZtZGFzaDsgQm9vdHNAbG93cmVzYm9vdHNcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0b2RvLWFjdGlvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0bi10b2RvIGJ0bi1wcmltYXJ5XCIgaWQ9XCJjbG9zZS1hYm91dFwiPkNsb3NlPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgYDtcbiAgICBcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtb2RhbCk7XG4gICAgXG4gICAgICAgIGNvbnN0IGNsb3NlQnRuID0gbW9kYWwucXVlcnlTZWxlY3RvcignI2Nsb3NlLWFib3V0Jyk7XG4gICAgICAgIGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChtb2RhbCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlbmRlclRvZG9zKHZpZXcgPSAnYWxsJykge1xuICAgICAgICBjb25zdCB0YXNrc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrcy1jb250YWluZXInKTtcbiAgICAgICAgbGV0IHRvZG9zO1xuICAgIFxuICAgICAgICBzd2l0Y2godmlldykge1xuICAgICAgICAgICAgY2FzZSAndG9kYXknOlxuICAgICAgICAgICAgICAgIHRvZG9zID0gdGhpcy50b2RvTWFuYWdlci5nZXRUb2RheVRvZG9zKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICd1cGNvbWluZyc6XG4gICAgICAgICAgICAgICAgdG9kb3MgPSB0aGlzLnRvZG9NYW5hZ2VyLmdldFVwY29taW5nVG9kb3MoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2NvbXBsZXRlZCc6XG4gICAgICAgICAgICAgICAgdG9kb3MgPSB0aGlzLnRvZG9NYW5hZ2VyLmdldENvbXBsZXRlZFRvZG9zKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmFjdGl2ZVByb2plY3RJZCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0VG9kb3MgPSB0aGlzLnRvZG9NYW5hZ2VyLmdldEFsbFRvZG9zKClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5maWx0ZXIodG9kbyA9PiB0b2RvLnByb2plY3RJZCA9PT0gdGhpcy5hY3RpdmVQcm9qZWN0SWQpO1xuICAgICAgICAgICAgICAgICAgICB0b2RvcyA9IHByb2plY3RUb2RvcztcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0b2RvcyA9IHRoaXMudG9kb01hbmFnZXIuZ2V0QWN0aXZlVG9kb3MoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgaWYgKHRoaXMuYWN0aXZlUHJvamVjdElkKSB7XG4gICAgICAgICAgICB0YXNrc0NvbnRhaW5lci5pbm5lckhUTUwgPSB0aGlzLnJlbmRlclRvZG9MaXN0KHRvZG9zKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICBjb25zdCB0b2Rvc0J5UHJvamVjdCA9IG5ldyBNYXAoKTtcbiAgICAgICAgXG4gICAgICAgIHRvZG9zLmZvckVhY2godG9kbyA9PiB7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0SWQgPSB0b2RvLnByb2plY3RJZDtcbiAgICAgICAgICAgIGlmICghdGhpcy5wcm9qZWN0TWFuYWdlci5nZXRQcm9qZWN0KHByb2plY3RJZCkpIHJldHVybjtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKCF0b2Rvc0J5UHJvamVjdC5oYXMocHJvamVjdElkKSkge1xuICAgICAgICAgICAgICAgIHRvZG9zQnlQcm9qZWN0LnNldChwcm9qZWN0SWQsIFtdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRvZG9zQnlQcm9qZWN0LmdldChwcm9qZWN0SWQpLnB1c2godG9kbyk7XG4gICAgICAgIH0pO1xuICAgIFxuICAgICAgICBjb25zdCBodG1sID0gQXJyYXkuZnJvbSh0b2Rvc0J5UHJvamVjdC5lbnRyaWVzKCkpLm1hcCgoW3Byb2plY3RJZCwgcHJvamVjdFRvZG9zXSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdCA9IHRoaXMucHJvamVjdE1hbmFnZXIuZ2V0UHJvamVjdChwcm9qZWN0SWQpO1xuICAgICAgICAgICAgaWYgKCFwcm9qZWN0KSByZXR1cm4gJyc7XG4gICAgICAgICAgICByZXR1cm4gYFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9qZWN0LXNlY3Rpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzPVwicHJvamVjdC1oZWFkZXJcIj4ke3Byb2plY3QubmFtZX08L2gzPlxuICAgICAgICAgICAgICAgICAgICAke3RoaXMucmVuZGVyVG9kb0xpc3QocHJvamVjdFRvZG9zKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIGA7XG4gICAgICAgIH0pLmpvaW4oJycpO1xuICAgIFxuICAgICAgICB0YXNrc0NvbnRhaW5lci5pbm5lckhUTUwgPSBodG1sIHx8ICc8cD5ObyB0YXNrcyB5ZXQ8L3A+JztcbiAgICB9XG5cbiAgICByZW5kZXJUb2RvTGlzdCh0b2Rvcykge1xuICAgICAgICBpZiAoIXRvZG9zLmxlbmd0aCkgcmV0dXJuICcnO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHRvZG9zLm1hcCh0b2RvID0+IGBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0b2RvLWl0ZW0gJHt0b2RvLmNvbXBsZXRlZCA/ICdjb21wbGV0ZWQnIDogJyd9XCIgXG4gICAgICAgICAgICAgICAgIGRhdGEtaWQ9XCIke3RvZG8uaWR9XCIgXG4gICAgICAgICAgICAgICAgIGRhdGEtcHJvamVjdC1pZD1cIiR7dG9kby5wcm9qZWN0SWQgfHwgdGhpcy5hY3RpdmVQcm9qZWN0SWR9XCI+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNsYXNzPVwidG9kby1jaGVja2JveFwiICR7dG9kby5jb21wbGV0ZWQgPyAnY2hlY2tlZCcgOiAnJ30+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRvZG8tY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidG9kby10aXRsZVwiPiR7dG9kby50aXRsZX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgJHt0b2RvLmRlc2NyaXB0aW9uID8gYDxkaXYgY2xhc3M9XCJ0b2RvLWRlc2NyaXB0aW9uXCI+JHt0b2RvLmRlc2NyaXB0aW9ufTwvZGl2PmAgOiAnJ31cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRvZG8tbWV0YWRhdGFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICR7dG9kby5kdWVEYXRlID8gYDxzcGFuPkR1ZTogJHt0b2RvLmR1ZURhdGV9PC9zcGFuPmAgOiAnJ31cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlByaW9yaXR5OiAke3RvZG8ucHJpb3JpdHl9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidG9kby1hY3Rpb25zXCI+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJlZGl0LXRvZG9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgY2xhc3M9XCJmZWF0aGVyIGZlYXRoZXItZWRpdFwiIGZpbGw9XCJub25lXCIgaGVpZ2h0PVwiMTZcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBzdHJva2Utd2lkdGg9XCIyXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHdpZHRoPVwiMTZcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHBhdGggZD1cIk0xMSA0SDRhMiAyIDAgMCAwLTIgMnYxNGEyIDIgMCAwIDAgMiAyaDE0YTIgMiAwIDAgMCAyLTJ2LTdcIi8+PHBhdGggZD1cIk0xOC41IDIuNWEyLjEyMSAyLjEyMSAwIDAgMSAzIDNMMTIgMTVsLTQgMSAxLTQgOS41LTkuNXpcIi8+PC9zdmc+XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIGApLmpvaW4oJycpO1xuICAgIH1cblxuICAgIHVwZGF0ZU1haW5IZWFkZXIodGl0bGUpIHtcbiAgICAgICAgY29uc3QgY29udGVudEhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50LWhlYWRlciBoMicpO1xuICAgICAgICBjb250ZW50SGVhZGVyLnRleHRDb250ZW50ID0gdGl0bGU7XG4gICAgfVxuXG4gICAgaW5pdCgpIHtcbiAgICAgICAgY29uc3QgYXBwQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGFwcENvbnRhaW5lci5jbGFzc05hbWUgPSAnYXBwLWNvbnRhaW5lcic7XG5cbiAgICAgICAgYXBwQ29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuY3JlYXRlSGVhZGVyKCkpO1xuICAgICAgICBhcHBDb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVTaWRlYmFyKCkpO1xuICAgICAgICBhcHBDb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVNYWluKCkpO1xuXG4gICAgICAgIGNvbnN0IHJvb3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJyk7XG4gICAgICAgIHJvb3QuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIHJvb3QuYXBwZW5kQ2hpbGQoYXBwQ29udGFpbmVyKTtcblxuICAgICAgICB0aGlzLnNldHVwRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICAgICAgdGhpcy5zZXR1cFByb2plY3RFdmVudHMoKTtcbiAgICAgICAgdGhpcy5zZXR1cFRvZG9FdmVudHMoKTtcbiAgICAgICAgdGhpcy5yZW5kZXJUb2RvcygnYWxsJyk7XG4gICAgfVxuXG4gICAgc2V0dXBFdmVudExpc3RlbmVycygpIHtcbiAgICAgICAgY29uc3QgbWVudVRvZ2dsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51LXRvZ2dsZScpO1xuICAgICAgICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFwcC1zaWRlYmFyJyk7XG4gICAgICAgIG1lbnVUb2dnbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBzaWRlYmFyLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCB1c2VyUHJvZmlsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51c2VyLXByb2ZpbGUnKTtcbiAgICAgICAgY29uc3QgdXNlckRyb3Bkb3duID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVzZXItZHJvcGRvd24nKTtcblxuICAgICAgICB1c2VyUHJvZmlsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHVzZXJEcm9wZG93bi5zdHlsZS5kaXNwbGF5ID0gdXNlckRyb3Bkb3duLnN0eWxlLmRpc3BsYXkgPT09ICdub25lJyA/ICdibG9jaycgOiAnbm9uZSc7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIGlmICghdXNlclByb2ZpbGUuY29udGFpbnMoZS50YXJnZXQpKSB7XG4gICAgICAgICAgICAgICAgdXNlckRyb3Bkb3duLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IHNpZ25PdXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lnbi1vdXQnKTtcbiAgICAgICAgc2lnbk91dEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2hvd1NpZ25PdXRDb25maXJtYXRpb24oKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgYWJvdXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWJvdXQnKTtcbiAgICAgICAgYWJvdXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNob3dBYm91dE1vZGFsKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IHZpZXdMaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zaWRlYmFyLW5hdiBhW2RhdGEtdmlld10nKTtcbiAgICAgICAgdmlld0xpbmtzLmZvckVhY2gobGluayA9PiB7XG4gICAgICAgICAgICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2lkZWJhci1uYXYgYSwgLnByb2plY3QtaXRlbScpLmZvckVhY2goZWwgPT4ge1xuICAgICAgICAgICAgICAgICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGxpbmsuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZVByb2plY3RJZCA9IG51bGw7XG5cbiAgICAgICAgICAgICAgICBjb25zdCB2aWV3ID0gbGluay5kYXRhc2V0LnZpZXc7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVNYWluSGVhZGVyKGxpbmsudGV4dENvbnRlbnQpO1xuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyVG9kb3Modmlldyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc2V0dXBQcm9qZWN0RXZlbnRzKCkge1xuICAgICAgICBjb25zdCBwcm9qZWN0c0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHMtbGlzdCcpO1xuICAgICAgICBjb25zdCBhZGRQcm9qZWN0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC1wcm9qZWN0LWJ0bicpO1xuICAgICAgICBjb25zdCBhZGRQcm9qZWN0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtcHJvamVjdC1mb3JtJyk7XG4gICAgICAgIGNvbnN0IHByb2plY3RJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtcHJvamVjdC1pbnB1dCcpO1xuICAgICAgICBjb25zdCBzYXZlUHJvamVjdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzYXZlLXByb2plY3QtYnRuJyk7XG4gICAgXG4gICAgICAgIHRoaXMucmVuZGVyUHJvamVjdHModGhpcy5wcm9qZWN0TWFuYWdlci5nZXRBbGxQcm9qZWN0cygpKTtcbiAgICBcbiAgICAgICAgYWRkUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGFkZFByb2plY3RCdG4uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgIGFkZFByb2plY3RGb3JtLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICAgICAgcHJvamVjdElucHV0LmZvY3VzKCk7XG4gICAgICAgIH0pO1xuICAgIFxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICBpZiAoIWFkZFByb2plY3RGb3JtLmNvbnRhaW5zKGUudGFyZ2V0KSAmJiBlLnRhcmdldCAhPT0gYWRkUHJvamVjdEJ0bikge1xuICAgICAgICAgICAgICAgIGFkZFByb2plY3RCdG4uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgICAgICAgICAgYWRkUHJvamVjdEZvcm0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgICAgICBwcm9qZWN0SW5wdXQudmFsdWUgPSAnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgXG4gICAgICAgIHNhdmVQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdE5hbWUgPSBwcm9qZWN0SW5wdXQudmFsdWUudHJpbSgpO1xuICAgICAgICAgICAgaWYgKHByb2plY3ROYW1lKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV3UHJvamVjdCA9IHRoaXMucHJvamVjdE1hbmFnZXIuY3JlYXRlUHJvamVjdChwcm9qZWN0TmFtZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJQcm9qZWN0cyh0aGlzLnByb2plY3RNYW5hZ2VyLmdldEFsbFByb2plY3RzKCkpO1xuICAgICAgICAgICAgICAgIGFkZFByb2plY3RCdG4uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgICAgICAgICAgYWRkUHJvamVjdEZvcm0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgICAgICBwcm9qZWN0SW5wdXQudmFsdWUgPSAnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgXG4gICAgICAgIHByb2plY3RzTGlzdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0SXRlbSA9IGUudGFyZ2V0LmNsb3Nlc3QoJy5wcm9qZWN0LWl0ZW0nKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZGVsZXRlLXByb2plY3QnKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHByb2plY3RJZCA9IGUudGFyZ2V0LmNsb3Nlc3QoJy5wcm9qZWN0LWl0ZW0nKS5kYXRhc2V0LmlkO1xuICAgICAgICAgICAgICAgIHRoaXMucHJvamVjdE1hbmFnZXIuZGVsZXRlUHJvamVjdChwcm9qZWN0SWQpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmFjdGl2ZVByb2plY3RJZCA9PT0gcHJvamVjdElkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlUHJvamVjdElkID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYWxsVGFza3NMaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGViYXItbmF2IGFbZGF0YS12aWV3PVwiYWxsXCJdJyk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChhbGxUYXNrc0xpbmspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsbFRhc2tzTGluay5jbGljaygpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVNYWluSGVhZGVyKCdBbGwgVGFza3MnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyVG9kb3MoJ2FsbCcpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyUHJvamVjdHModGhpcy5wcm9qZWN0TWFuYWdlci5nZXRBbGxQcm9qZWN0cygpKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICBpZiAocHJvamVjdEl0ZW0pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0SWQgPSBwcm9qZWN0SXRlbS5kYXRhc2V0LmlkO1xuICAgICAgICAgICAgICAgIGNvbnN0IHByb2plY3QgPSB0aGlzLnByb2plY3RNYW5hZ2VyLmdldFByb2plY3QocHJvamVjdElkKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZVByb2plY3RJZCA9IHByb2plY3RJZDtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlclByb2plY3RzKHRoaXMucHJvamVjdE1hbmFnZXIuZ2V0QWxsUHJvamVjdHMoKSk7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVNYWluSGVhZGVyKHByb2plY3QubmFtZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJUb2RvcygpO1xuICAgIFxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zaWRlYmFyLW5hdiBhJykuZm9yRWFjaChsaW5rID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGluay5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc2V0dXBUb2RvRXZlbnRzKCkge1xuICAgICAgICBjb25zdCBhZGRUYXNrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC10YXNrLWJ0bicpO1xuICAgICAgICBjb25zdCB0YXNrc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrcy1jb250YWluZXInKTtcbiAgICBcbiAgICAgICAgYWRkVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2hvd1RvZG9Nb2RhbCgpO1xuICAgICAgICB9KTtcbiAgICBcbiAgICAgICAgdGFza3NDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdG9kb0l0ZW0gPSBlLnRhcmdldC5jbG9zZXN0KCcudG9kby1pdGVtJyk7XG4gICAgICAgICAgICBpZiAoIXRvZG9JdGVtKSByZXR1cm47XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IHRvZG9JZCA9IHRvZG9JdGVtLmRhdGFzZXQuaWQ7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0SWQgPSB0b2RvSXRlbS5kYXRhc2V0LnByb2plY3RJZCB8fCB0aGlzLmFjdGl2ZVByb2plY3RJZDtcbiAgICBcbiAgICAgICAgICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3RvZG8tY2hlY2tib3gnKSkge1xuICAgICAgICAgICAgICAgIHRoaXMudG9kb01hbmFnZXIudG9nZ2xlVG9kb0NvbXBsZXRlKHByb2plY3RJZCwgdG9kb0lkKTtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlckN1cnJlbnRWaWV3KCk7XG4gICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICBpZiAoZS50YXJnZXQuY2xvc2VzdCgnLmVkaXQtdG9kbycpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdG9kbyA9IHRoaXMudG9kb01hbmFnZXIuZ2V0VG9kbyhwcm9qZWN0SWQsIHRvZG9JZCk7XG4gICAgICAgICAgICAgICAgaWYgKHRvZG8pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93VG9kb01vZGFsKHRvZG8sIHByb2plY3RJZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZW5kZXJDdXJyZW50VmlldygpIHtcbiAgICAgICAgY29uc3QgYWN0aXZlTGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyLW5hdiBhLmFjdGl2ZScpO1xuICAgICAgICBjb25zdCBjdXJyZW50VmlldyA9IGFjdGl2ZUxpbmsgPyBhY3RpdmVMaW5rLmRhdGFzZXQudmlldyA6ICdhbGwnO1xuICAgICAgICB0aGlzLnJlbmRlclRvZG9zKGN1cnJlbnRWaWV3KTtcbiAgICB9XG5cbiAgICByZW5kZXJQcm9qZWN0cyhwcm9qZWN0cykge1xuICAgICAgICBjb25zdCBwcm9qZWN0c0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHMtbGlzdCcpO1xuICAgICAgICBjb25zdCBhZGRUYXNrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC10YXNrLWJ0bicpO1xuICAgICAgICBcbiAgICAgICAgaWYgKHByb2plY3RzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgYWRkVGFza0J0bi5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgICAgICBhZGRUYXNrQnRuLmNsYXNzTGlzdC5hZGQoJ2Rpc2FibGVkJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhZGRUYXNrQnRuLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgICAgICBhZGRUYXNrQnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2Rpc2FibGVkJyk7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgcHJvamVjdHNMaXN0LmlubmVySFRNTCA9IHByb2plY3RzLm1hcChwcm9qZWN0ID0+IGBcbiAgICAgICAgICAgIDxsaSBjbGFzcz1cInByb2plY3QtaXRlbSAke3Byb2plY3QuaWQgPT09IHRoaXMuYWN0aXZlUHJvamVjdElkID8gJ2FjdGl2ZScgOiAnJ31cIiBkYXRhLWlkPVwiJHtwcm9qZWN0LmlkfVwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicHJvamVjdC1uYW1lXCI+JHtwcm9qZWN0Lm5hbWV9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJkZWxldGUtcHJvamVjdFwiIGFyaWEtbGFiZWw9XCJEZWxldGUgcHJvamVjdFwiPsOXPC9idXR0b24+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICBgKS5qb2luKCcnKTtcbiAgICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgT25ib2FyZGluZyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMudXNlckRhdGEgPSB7XG4gICAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICAgIGF2YXRhcjogJydcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBjcmVhdGVNb2RhbCgpIHtcbiAgICAgICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbW9kYWwuY2xhc3NOYW1lID0gJ292ZXJsYXknO1xuICAgICAgICBcbiAgICAgICAgbW9kYWwuaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm9uYm9hcmRpbmctbW9kYWxcIj5cbiAgICAgICAgICAgICAgICA8aDI+V2VsY29tZSB0byBCb290ZG8hPC9oMj5cbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwibmFtZS1zdGVwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxwPldoYXQncyB5b3VyIG5hbWU/PC9wPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInVzZXJuYW1lXCIgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIG5hbWVcIiByZXF1aXJlZD5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiIGlkPVwibmV4dC1idG5cIj5OZXh0PC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cImF2YXRhci1zdGVwXCIgc3R5bGU9XCJkaXNwbGF5OiBub25lO1wiPlxuICAgICAgICAgICAgICAgICAgICA8cD5DaG9vc2UgYSBwcm9maWxlIHBpY3R1cmU8L3A+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhdmF0YXItdXBsb2FkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYXZhdGFyLXByZXZpZXdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiYXZhdGFyLXByZXZpZXctaW1hZ2VcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImF2YXRhci1hY3Rpb25zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgaWQ9XCJhdmF0YXItdXBsb2FkXCIgYWNjZXB0PVwiaW1hZ2UvKlwiIGNsYXNzPVwiZmlsZS1pbnB1dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJhdmF0YXItdXBsb2FkXCIgY2xhc3M9XCJidG4gYnRuLXNlY29uZGFyeVwiPkNob29zZSBGaWxlPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCIgaWQ9XCJjb21wbGV0ZS1idG5cIj5Db21wbGV0ZSBTZXR1cDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIGA7XG4gICAgXG4gICAgICAgIHJldHVybiBtb2RhbDtcbiAgICB9XG4gICAgXG4gICAgY3JlYXRlRGVmYXVsdEF2YXRhcihuYW1lKSB7XG4gICAgICAgIGNvbnN0IGluaXRpYWxzID0gbmFtZVxuICAgICAgICAgICAgLnNwbGl0KCcgJylcbiAgICAgICAgICAgIC5tYXAod29yZCA9PiB3b3JkWzBdKVxuICAgICAgICAgICAgLmpvaW4oJycpXG4gICAgICAgICAgICAudG9VcHBlckNhc2UoKVxuICAgICAgICAgICAgLnNsaWNlKDAsIDIpO1xuICAgIFxuICAgICAgICByZXR1cm4gYFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRlZmF1bHQtYXZhdGFyXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4+JHtpbml0aWFsc308L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgYDtcbiAgICB9XG5cbiAgICBnZXRBdmF0YXJPcHRpb25zKCkge1xuICAgICAgICBjb25zdCBjb2xvcnMgPSBbJyNGRjZCNkInLCAnIzRFQ0RDNCcsICcjNDVCN0QxJywgJyM5NkNFQjQnLCAnI0ZGRUVBRCddO1xuICAgICAgICByZXR1cm4gY29sb3JzLm1hcCgoY29sb3IsIGluZGV4KSA9PiBgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYXZhdGFyLW9wdGlvblwiIGRhdGEtYXZhdGFyPVwiYXZhdGFyJHtpbmRleCArIDF9XCI+XG4gICAgICAgICAgICAgICAgPHN2ZyB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCIxMDAlXCIgdmlld0JveD1cIjAgMCA1MCA1MFwiPlxuICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGN4PVwiMjVcIiBjeT1cIjI1XCIgcj1cIjIwXCIgZmlsbD1cIiR7Y29sb3J9XCIvPlxuICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIGApLmpvaW4oJycpO1xuICAgIH1cblxuICAgIGluaXQoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZXhpc3RpbmdVc2VyID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2Jvb3Rkb1VzZXInKTtcbiAgICAgICAgICAgIGlmIChleGlzdGluZ1VzZXIpIHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKEpTT04ucGFyc2UoZXhpc3RpbmdVc2VyKSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgY29uc3QgbW9kYWwgPSB0aGlzLmNyZWF0ZU1vZGFsKCk7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1vZGFsKTtcbiAgICBcbiAgICAgICAgICAgIGNvbnN0IG5hbWVTdGVwID0gbW9kYWwucXVlcnlTZWxlY3RvcignI25hbWUtc3RlcCcpO1xuICAgICAgICAgICAgY29uc3QgYXZhdGFyU3RlcCA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJyNhdmF0YXItc3RlcCcpO1xuICAgICAgICAgICAgY29uc3QgdXNlcm5hbWVJbnB1dCA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJyN1c2VybmFtZScpO1xuICAgICAgICAgICAgY29uc3QgbmV4dEJ0biA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJyNuZXh0LWJ0bicpO1xuICAgICAgICAgICAgY29uc3QgY29tcGxldGVCdG4gPSBtb2RhbC5xdWVyeVNlbGVjdG9yKCcjY29tcGxldGUtYnRuJyk7XG4gICAgICAgICAgICBjb25zdCBmaWxlSW5wdXQgPSBtb2RhbC5xdWVyeVNlbGVjdG9yKCcjYXZhdGFyLXVwbG9hZCcpO1xuICAgICAgICAgICAgY29uc3QgcHJldmlld0ltYWdlID0gbW9kYWwucXVlcnlTZWxlY3RvcignI2F2YXRhci1wcmV2aWV3LWltYWdlJyk7XG4gICAgXG4gICAgICAgICAgICBuZXh0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh1c2VybmFtZUlucHV0LnZhbHVlLnRyaW0oKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVzZXJEYXRhLm5hbWUgPSB1c2VybmFtZUlucHV0LnZhbHVlLnRyaW0oKTtcbiAgICAgICAgICAgICAgICAgICAgbmFtZVN0ZXAuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgICAgICAgICAgYXZhdGFyU3RlcC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRlZmF1bHRBdmF0YXJIVE1MID0gdGhpcy5jcmVhdGVEZWZhdWx0QXZhdGFyKHRoaXMudXNlckRhdGEubmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHByZXZpZXdDb250YWluZXIgPSBtb2RhbC5xdWVyeVNlbGVjdG9yKCcjYXZhdGFyLXByZXZpZXctaW1hZ2UnKTtcbiAgICAgICAgICAgICAgICAgICAgcHJldmlld0NvbnRhaW5lci5pbm5lckhUTUwgPSBkZWZhdWx0QXZhdGFySFRNTDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51c2VyRGF0YS5hdmF0YXIgPSAnZGVmYXVsdCc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgXG4gICAgICAgICAgICBmaWxlSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBmaWxlID0gZS50YXJnZXQuZmlsZXNbMF07XG4gICAgICAgICAgICAgICAgaWYgKGZpbGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgcmVhZGVyLm9ubG9hZCA9IChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpbWFnZVVybCA9IGUudGFyZ2V0LnJlc3VsdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByZXZpZXdDb250YWluZXIgPSBtb2RhbC5xdWVyeVNlbGVjdG9yKCcjYXZhdGFyLXByZXZpZXctaW1hZ2UnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXZpZXdDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcmV2aWV3Q29udGFpbmVyLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHtpbWFnZVVybH0pYDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXNlckRhdGEuYXZhdGFyID0gaW1hZ2VVcmw7XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgIFxuICAgICAgICAgICAgY29tcGxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb21wbGV0ZU9uYm9hcmRpbmcobW9kYWwsIHJlc29sdmUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbXBsZXRlT25ib2FyZGluZyhtb2RhbCwgcmVzb2x2ZSkge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYm9vdGRvVXNlcicsIEpTT04uc3RyaW5naWZ5KHRoaXMudXNlckRhdGEpKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChtb2RhbCk7XG4gICAgICAgIHJlc29sdmUodGhpcy51c2VyRGF0YSk7XG4gICAgfVxufSIsImltcG9ydCBUb2RvTWFuYWdlciwgeyBUb2RvIH0gZnJvbSAnLi90b2Rvcyc7XG5cbmV4cG9ydCBjbGFzcyBQcm9qZWN0IHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgICAgIHRoaXMuaWQgPSBEYXRlLm5vdygpLnRvU3RyaW5nKCk7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMudG9kb3MgPSBbXTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2plY3RNYW5hZ2VyIHtcbiAgICBjb25zdHJ1Y3Rvcih0b2RvTWFuYWdlcikge1xuICAgICAgICB0aGlzLnByb2plY3RzID0gW107XG4gICAgICAgIHRoaXMudG9kb01hbmFnZXIgPSB0b2RvTWFuYWdlcjtcbiAgICAgICAgdGhpcy5kZWZhdWx0UHJvamVjdHMgPSBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJEYXRpbmcgQXBwIGZvciBEZXZlbG9wZXJzXCIsXG4gICAgICAgICAgICAgICAgdGFzazoge1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJGaXggYnVnIHdoZXJlIGFsbCBtYXRjaGVzIGFyZSAndW5kZWZpbmVkJ1wiLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJVc2VycyBjb21wbGFpbmluZyB0aGV5IG9ubHkgbWF0Y2ggd2l0aCBudWxsIG9yIHVuZGVmaW5lZC4gTmVlZCB0byBpbXBsZW1lbnQgcHJvcGVyIHR5cGUgY2hlY2tpbmcuXCIsXG4gICAgICAgICAgICAgICAgICAgIHByaW9yaXR5OiBcImhpZ2hcIixcbiAgICAgICAgICAgICAgICAgICAgZHVlRGF0ZTogKCkgPT4gbmV3IERhdGUoRGF0ZS5ub3coKSArIDg2NDAwMDAwKS50b0lTT1N0cmluZygpLnNwbGl0KCdUJylbMF1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwiQ2F0IFBpYyBORlQgTWFya2V0cGxhY2VcIiwgXG4gICAgICAgICAgICAgICAgdGFzazoge1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJJbXBsZW1lbnQgYW50aS1kb2cgaW1hZ2UgZmlsdGVyXCIsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIlVzZXJzIGtlZXAgdXBsb2FkaW5nIGRvZyBwaWNzLiBOZWVkIE1MIG1vZGVsIHRvIGRldGVjdCBhbmQgYmxvY2sgbm9uLWZlbGluZSBjb250ZW50LlwiLFxuICAgICAgICAgICAgICAgICAgICBwcmlvcml0eTogXCJtZWRpdW1cIixcbiAgICAgICAgICAgICAgICAgICAgZHVlRGF0ZTogKCkgPT4gbmV3IERhdGUoRGF0ZS5ub3coKSArIDE3MjgwMDAwMCkudG9JU09TdHJpbmcoKS5zcGxpdCgnVCcpWzBdXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcIkFJIFRoYXQgTWFrZXMgQ29mZmVlXCIsXG4gICAgICAgICAgICAgICAgdGFzazoge1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJEZWJ1ZyBpbmZpbml0ZSBjb2ZmZWUgbG9vcFwiLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJBSSBrZWVwcyBicmV3aW5nIGNvZmZlZSB1bnRpbCBSQU0gaXMgZnVsbC4gTmVlZCB0byBpbXBsZW1lbnQgcHJvcGVyIGJyZXcgY3ljbGUgdGVybWluYXRpb24uXCIsXG4gICAgICAgICAgICAgICAgICAgIHByaW9yaXR5OiBcImhpZ2hcIixcbiAgICAgICAgICAgICAgICAgICAgZHVlRGF0ZTogKCkgPT4gbmV3IERhdGUoRGF0ZS5ub3coKSArIDg2NDAwMDAwKS50b0lTT1N0cmluZygpLnNwbGl0KCdUJylbMF1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwiU3RhY2tPdmVyZmxvdyBCdXQgTmljZXJcIixcbiAgICAgICAgICAgICAgICB0YXNrOiB7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIkFkZCBtYW5kYXRvcnkgY29tcGxpbWVudHNcIixcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiQmVmb3JlIG1hcmtpbmcgYXMgZHVwbGljYXRlLCB1c2VycyBtdXN0IHNheSBzb21ldGhpbmcgbmljZSBmaXJzdC5cIixcbiAgICAgICAgICAgICAgICAgICAgcHJpb3JpdHk6IFwibWVkaXVtXCIsIFxuICAgICAgICAgICAgICAgICAgICBkdWVEYXRlOiAoKSA9PiBuZXcgRGF0ZShEYXRlLm5vdygpICsgMjU5MjAwMDAwKS50b0lTT1N0cmluZygpLnNwbGl0KCdUJylbMF1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwiU29jaWFsIE1lZGlhIGZvciBJbnRyb3ZlcnRzXCIsXG4gICAgICAgICAgICAgICAgdGFzazoge1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJJbXBsZW1lbnQgJ1ByZXRlbmQgdG8gYmUgT2ZmbGluZScgZmVhdHVyZVwiLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJVc2VycyByZXF1ZXN0aW5nIGFiaWxpdHkgdG8gYXBwZWFyIG9mZmxpbmUgd2hpbGUgc3RpbGwgbHVya2luZy5cIixcbiAgICAgICAgICAgICAgICAgICAgcHJpb3JpdHk6IFwiaGlnaFwiLFxuICAgICAgICAgICAgICAgICAgICBkdWVEYXRlOiAoKSA9PiBuZXcgRGF0ZShEYXRlLm5vdygpICsgNDMyMDAwMDAwKS50b0lTT1N0cmluZygpLnNwbGl0KCdUJylbMF1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwiQml0Y29pbiBmb3IgUGV0c1wiLFxuICAgICAgICAgICAgICAgIHRhc2s6IHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiRml4IHRyZWF0LXRvLWNyeXB0byBjb252ZXJzaW9uIHJhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiQ2F0cyBnYW1pbmcgdGhlIHN5c3RlbSBieSBkb2luZyBtdWx0aXBsZSB0cmFuc2FjdGlvbnMgb2YgdGhlIHNhbWUgdHJpY2suXCIsXG4gICAgICAgICAgICAgICAgICAgIHByaW9yaXR5OiBcIm1lZGl1bVwiLFxuICAgICAgICAgICAgICAgICAgICBkdWVEYXRlOiAoKSA9PiBuZXcgRGF0ZShEYXRlLm5vdygpICsgMzQ1NjAwMDAwKS50b0lTT1N0cmluZygpLnNwbGl0KCdUJylbMF1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwiTmV0ZmxpeCBmb3IgRG9jdW1lbnRhdGlvblwiLFxuICAgICAgICAgICAgICAgIHRhc2s6IHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiQWRkICdTa2lwIEludHJvJyBmb3IgUkVBRE1FIGZpbGVzXCIsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIlVzZXJzIHdhbnQgdG8gc2tpcCBzdHJhaWdodCB0byB0aGUgaW5zdGFsbGF0aW9uIGNvbW1hbmRzLlwiLFxuICAgICAgICAgICAgICAgICAgICBwcmlvcml0eTogXCJsb3dcIixcbiAgICAgICAgICAgICAgICAgICAgZHVlRGF0ZTogKCkgPT4gbmV3IERhdGUoRGF0ZS5ub3coKSArIDUxODQwMDAwMCkudG9JU09TdHJpbmcoKS5zcGxpdCgnVCcpWzBdXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcIlViZXIgZm9yIFJ1YmJlciBEdWNrc1wiLFxuICAgICAgICAgICAgICAgIHRhc2s6IHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiRml4IGR1Y2sgc3VyZ2UgcHJpY2luZ1wiLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJTdXJnZSByYXRlcyBza3lyb2NrZXRpbmcgZHVyaW5nIHBlYWsgZGVidWdnaW5nIGhvdXJzLlwiLFxuICAgICAgICAgICAgICAgICAgICBwcmlvcml0eTogXCJtZWRpdW1cIixcbiAgICAgICAgICAgICAgICAgICAgZHVlRGF0ZTogKCkgPT4gbmV3IERhdGUoRGF0ZS5ub3coKSArIDE3MjgwMDAwMCkudG9JU09TdHJpbmcoKS5zcGxpdCgnVCcpWzBdXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcIlRpbmRlciBmb3IgRGVzaWduIFBhdHRlcm5zXCIsXG4gICAgICAgICAgICAgICAgdGFzazoge1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJIYW5kbGUgU2luZ2xldG9uIHJlamVjdGlvbiBhbnhpZXR5XCIsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIlNpbmdsZXRvbiBwYXR0ZXJuIHJlcG9ydGluZyBmZWVsaW5ncyBvZiBsb25lbGluZXNzIGFuZCBhYmFuZG9ubWVudC5cIixcbiAgICAgICAgICAgICAgICAgICAgcHJpb3JpdHk6IFwiaGlnaFwiLFxuICAgICAgICAgICAgICAgICAgICBkdWVEYXRlOiAoKSA9PiBuZXcgRGF0ZShEYXRlLm5vdygpICsgODY0MDAwMDApLnRvSVNPU3RyaW5nKCkuc3BsaXQoJ1QnKVswXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJKYXZhU2NyaXB0IEZyYW1ld29yayAjOCw3NDJcIixcbiAgICAgICAgICAgICAgICB0YXNrOiB7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIkludmVudCBuZXcgYnV6endvcmRzXCIsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkN1cnJlbnQgbWFya2V0aW5nIHRlcm1zIG5vdCBjb25mdXNpbmcgZW5vdWdoLiBOZWVkIG1vcmUgcGFyYWRpZ20gc2hpZnRzLlwiLFxuICAgICAgICAgICAgICAgICAgICBwcmlvcml0eTogXCJsb3dcIixcbiAgICAgICAgICAgICAgICAgICAgZHVlRGF0ZTogKCkgPT4gbmV3IERhdGUoRGF0ZS5ub3coKSArIDYwNDgwMDAwMCkudG9JU09TdHJpbmcoKS5zcGxpdCgnVCcpWzBdXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcIkFub3RoZXIgVG9kbyBBcHDihKJcIixcbiAgICAgICAgICAgICAgICB0YXNrOiB7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIkFkZCB0b2RvIGl0ZW0gdG8gdHJhY2sgdG9kbyBpdGVtc1wiLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJNZXRhLXRvZG8gZnVuY3Rpb25hbGl0eSByZXF1ZXN0ZWQgYnkgcHJvamVjdCBtYW5hZ2VyLlwiLFxuICAgICAgICAgICAgICAgICAgICBwcmlvcml0eTogXCJtZWRpdW1cIixcbiAgICAgICAgICAgICAgICAgICAgZHVlRGF0ZTogKCkgPT4gbmV3IERhdGUoRGF0ZS5ub3coKSArIDI1OTIwMDAwMCkudG9JU09TdHJpbmcoKS5zcGxpdCgnVCcpWzBdXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcIlJlZGRpdCBmb3IgT2ZmaWNlIFBsYW50c1wiLFxuICAgICAgICAgICAgICAgIHRhc2s6IHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiRml4IG92ZXJ3YXRlcmluZyBub3RpZmljYXRpb24gc3BhbVwiLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJDYWN0aSBjb21wbGFpbmluZyBhYm91dCBleGNlc3NpdmUgaHlkcmF0aW9uIHN1Z2dlc3Rpb25zLlwiLFxuICAgICAgICAgICAgICAgICAgICBwcmlvcml0eTogXCJoaWdoXCIsXG4gICAgICAgICAgICAgICAgICAgIGR1ZURhdGU6ICgpID0+IG5ldyBEYXRlKERhdGUubm93KCkgKyA4NjQwMDAwMCkudG9JU09TdHJpbmcoKS5zcGxpdCgnVCcpWzBdXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcIkdpdEh1YiBmb3IgUmVjaXBlc1wiLFxuICAgICAgICAgICAgICAgIHRhc2s6IHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiUmVzb2x2ZSBtZXJnZSBjb25mbGljdHMgaW4gZ3JhbmRtYSdzIGNvb2tpZXNcIixcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiTXVsdGlwbGUgZm9ya3Mgb2YgY2hvY29sYXRlIGNoaXAgcmVjaXBlIGNhdXNpbmcgZGVwbG95bWVudCBpc3N1ZXMuXCIsXG4gICAgICAgICAgICAgICAgICAgIHByaW9yaXR5OiBcIm1lZGl1bVwiLFxuICAgICAgICAgICAgICAgICAgICBkdWVEYXRlOiAoKSA9PiBuZXcgRGF0ZShEYXRlLm5vdygpICsgMTcyODAwMDAwKS50b0lTT1N0cmluZygpLnNwbGl0KCdUJylbMF1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwiRGlzY29yZCBmb3IgUnViYmVyIER1Y2tzXCIsXG4gICAgICAgICAgICAgICAgdGFzazoge1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJJbXBsZW1lbnQgcXVhY2sgcmVhY3Rpb25zXCIsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIk5lZWQgbW9yZSBleHByZXNzaXZlIHdheXMgdG8gcmVzcG9uZCB0byBkZWJ1Z2dpbmcgc2Vzc2lvbnMuXCIsXG4gICAgICAgICAgICAgICAgICAgIHByaW9yaXR5OiBcImxvd1wiLFxuICAgICAgICAgICAgICAgICAgICBkdWVEYXRlOiAoKSA9PiBuZXcgRGF0ZShEYXRlLm5vdygpICsgMzQ1NjAwMDAwKS50b0lTT1N0cmluZygpLnNwbGl0KCdUJylbMF1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwiTGlua2VkSW4gZm9yIEFJIEJvdHNcIixcbiAgICAgICAgICAgICAgICB0YXNrOiB7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIkZpbHRlciBvdXQgc3BhbSBmcm9tIEdQVC0xXCIsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIk9sZGVyIG1vZGVscyBrZWVwIHNlbmRpbmcgY29ubmVjdGlvbiByZXF1ZXN0cyB0byBldmVyeW9uZS5cIixcbiAgICAgICAgICAgICAgICAgICAgcHJpb3JpdHk6IFwibWVkaXVtXCIsXG4gICAgICAgICAgICAgICAgICAgIGR1ZURhdGU6ICgpID0+IG5ldyBEYXRlKERhdGUubm93KCkgKyAyNTkyMDAwMDApLnRvSVNPU3RyaW5nKCkuc3BsaXQoJ1QnKVswXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJOZXRmbGl4IGZvciBDb2RlIFJldmlld3NcIixcbiAgICAgICAgICAgICAgICB0YXNrOiB7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIkFkZCAnU2tpcCBXaGl0ZXNwYWNlIERyYW1hJyBidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiUmV2aWV3ZXJzIHNwZW5kaW5nIHRvbyBtdWNoIHRpbWUgZGViYXRpbmcgdGFicyB2cyBzcGFjZXMuXCIsXG4gICAgICAgICAgICAgICAgICAgIHByaW9yaXR5OiBcImhpZ2hcIixcbiAgICAgICAgICAgICAgICAgICAgZHVlRGF0ZTogKCkgPT4gbmV3IERhdGUoRGF0ZS5ub3coKSArIDg2NDAwMDAwKS50b0lTT1N0cmluZygpLnNwbGl0KCdUJylbMF1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwiU3BvdGlmeSBmb3IgQ29tcGlsYXRpb24gRXJyb3JzXCIsXG4gICAgICAgICAgICAgICAgdGFzazoge1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJDcmVhdGUgJ0dyZWF0ZXN0IEJ1Z3MnIHBsYXlsaXN0XCIsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIlVzZXJzIHJlcXVlc3RpbmcgY3VyYXRlZCBjb2xsZWN0aW9uIG9mIG1vc3QgcGFpbmZ1bCBkZWJ1ZyBzZXNzaW9ucy5cIixcbiAgICAgICAgICAgICAgICAgICAgcHJpb3JpdHk6IFwibG93XCIsXG4gICAgICAgICAgICAgICAgICAgIGR1ZURhdGU6ICgpID0+IG5ldyBEYXRlKERhdGUubm93KCkgKyA0MzIwMDAwMDApLnRvSVNPU3RyaW5nKCkuc3BsaXQoJ1QnKVswXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJJbnN0YWdyYW0gZm9yIFRlcm1pbmFsIE91dHB1dFwiLFxuICAgICAgICAgICAgICAgIHRhc2s6IHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiQWRkIG1vcmUgcmV0cm8gZmlsdGVyc1wiLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJVc2VycyB3YW50IHRoZWlyIHN0YWNrIHRyYWNlcyB0byBsb29rIG1vcmUgYWVzdGhldGljLlwiLFxuICAgICAgICAgICAgICAgICAgICBwcmlvcml0eTogXCJtZWRpdW1cIixcbiAgICAgICAgICAgICAgICAgICAgZHVlRGF0ZTogKCkgPT4gbmV3IERhdGUoRGF0ZS5ub3coKSArIDE3MjgwMDAwMCkudG9JU09TdHJpbmcoKS5zcGxpdCgnVCcpWzBdXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcIlRpa1RvayBmb3IgQWxnb3JpdGhtc1wiLFxuICAgICAgICAgICAgICAgIHRhc2s6IHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiT3B0aW1pemUgZGFuY2UgbW92ZXMgZm9yIE8oMSlcIixcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiQ3VycmVudCBhbGdvcml0aG1pYyBkYW5jZXMgdG9vIGNvbXB1dGF0aW9uYWxseSBleHBlbnNpdmUuXCIsXG4gICAgICAgICAgICAgICAgICAgIHByaW9yaXR5OiBcImhpZ2hcIixcbiAgICAgICAgICAgICAgICAgICAgZHVlRGF0ZTogKCkgPT4gbmV3IERhdGUoRGF0ZS5ub3coKSArIDg2NDAwMDAwKS50b0lTT1N0cmluZygpLnNwbGl0KCdUJylbMF1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwiVHdpdGNoIGZvciBEZWJ1Z2dpbmcgU2Vzc2lvbnNcIixcbiAgICAgICAgICAgICAgICB0YXNrOiB7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIkFkZCBjb21tZXJjaWFsIGJyZWFrcyBmb3IgY29mZmVlIHJ1bnNcIixcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiU3RyZWFtZXJzIG5lZWQgYXV0b21hdGVkIHBhdXNlcyB3aGVuIGNhZmZlaW5lIHJ1bnMgbG93LlwiLFxuICAgICAgICAgICAgICAgICAgICBwcmlvcml0eTogXCJtZWRpdW1cIixcbiAgICAgICAgICAgICAgICAgICAgZHVlRGF0ZTogKCkgPT4gbmV3IERhdGUoRGF0ZS5ub3coKSArIDI1OTIwMDAwMCkudG9JU09TdHJpbmcoKS5zcGxpdCgnVCcpWzBdXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcIldvcmRQcmVzcyBmb3IgTWVtZXNcIixcbiAgICAgICAgICAgICAgICB0YXNrOiB7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIkluc3RhbGwgNzMgdW5uZWNlc3NhcnkgcGx1Z2luc1wiLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJTaXRlIG5vdCBydW5uaW5nIHNsb3cgZW5vdWdoLCBuZWVkIG1vcmUgZmVhdHVyZXMgbm9ib2R5IGFza2VkIGZvci5cIixcbiAgICAgICAgICAgICAgICAgICAgcHJpb3JpdHk6IFwibG93XCIsXG4gICAgICAgICAgICAgICAgICAgIGR1ZURhdGU6ICgpID0+IG5ldyBEYXRlKERhdGUubm93KCkgKyA1MTg0MDAwMDApLnRvSVNPU3RyaW5nKCkuc3BsaXQoJ1QnKVswXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJZb3VUdWJlIGZvciBFcnJvciBNZXNzYWdlc1wiLFxuICAgICAgICAgICAgICAgIHRhc2s6IHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiSW1wbGVtZW50ICdTa2lwIHRvIFN0YWNrIE92ZXJmbG93JyBidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiVXNlcnMgcmVxdWVzdGluZyBkaXJlY3QgbGluayB0byBzb21lb25lIHdpdGggc2FtZSBlcnJvci5cIixcbiAgICAgICAgICAgICAgICAgICAgcHJpb3JpdHk6IFwiaGlnaFwiLFxuICAgICAgICAgICAgICAgICAgICBkdWVEYXRlOiAoKSA9PiBuZXcgRGF0ZShEYXRlLm5vdygpICsgODY0MDAwMDApLnRvSVNPU3RyaW5nKCkuc3BsaXQoJ1QnKVswXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgIF07XG4gICAgICAgIHRoaXMubG9hZFByb2plY3RzKCk7XG4gICAgfVxuXG4gICAgbG9hZFByb2plY3RzKCkge1xuICAgICAgICBjb25zdCBzYXZlZFByb2plY3RzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2Jvb3Rkb1Byb2plY3RzJyk7XG4gICAgICAgIGlmIChzYXZlZFByb2plY3RzKSB7XG4gICAgICAgICAgICB0aGlzLnByb2plY3RzID0gSlNPTi5wYXJzZShzYXZlZFByb2plY3RzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGRlZmF1bHRQcm9qZWN0ID0gdGhpcy5jcmVhdGVEZWZhdWx0UHJvamVjdCgpO1xuICAgICAgICAgICAgdGhpcy5wcm9qZWN0cyA9IFtkZWZhdWx0UHJvamVjdF07XG4gICAgICAgICAgICB0aGlzLnNhdmVQcm9qZWN0cygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2F2ZVByb2plY3RzKCkge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYm9vdGRvUHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeSh0aGlzLnByb2plY3RzKSk7XG4gICAgfVxuXG4gICAgY3JlYXRlRGVmYXVsdFByb2plY3QoKSB7XG4gICAgICAgIGNvbnN0IHJhbmRvbUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5kZWZhdWx0UHJvamVjdHMubGVuZ3RoKTtcbiAgICAgICAgY29uc3QgZGVmYXVsdFByb2plY3QgPSB0aGlzLmRlZmF1bHRQcm9qZWN0c1tyYW5kb21JbmRleF07XG4gICAgICAgIGNvbnN0IHByb2plY3QgPSB0aGlzLmNyZWF0ZVByb2plY3QoZGVmYXVsdFByb2plY3QubmFtZSk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCB0b2RvID0gbmV3IFRvZG8oXG4gICAgICAgICAgICBkZWZhdWx0UHJvamVjdC50YXNrLnRpdGxlLFxuICAgICAgICAgICAgZGVmYXVsdFByb2plY3QudGFzay5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgIGRlZmF1bHRQcm9qZWN0LnRhc2suZHVlRGF0ZSgpLFxuICAgICAgICAgICAgZGVmYXVsdFByb2plY3QudGFzay5wcmlvcml0eVxuICAgICAgICApO1xuICAgICAgICB0aGlzLnRvZG9NYW5hZ2VyLmFkZFRvZG8ocHJvamVjdC5pZCwgdG9kbyk7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gcHJvamVjdDtcbiAgICB9XG5cbiAgICBjcmVhdGVQcm9qZWN0KG5hbWUpIHtcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IG5ldyBQcm9qZWN0KG5hbWUpO1xuICAgICAgICB0aGlzLnByb2plY3RzLnB1c2gocHJvamVjdCk7XG4gICAgICAgIHRoaXMuc2F2ZVByb2plY3RzKCk7XG4gICAgICAgIHJldHVybiBwcm9qZWN0O1xuICAgIH1cblxuICAgIGRlbGV0ZVByb2plY3QocHJvamVjdElkKSB7XG4gICAgICAgIHRoaXMucHJvamVjdHMgPSB0aGlzLnByb2plY3RzLmZpbHRlcihwcm9qZWN0ID0+IHByb2plY3QuaWQgIT09IHByb2plY3RJZCk7XG4gICAgICAgIHRoaXMuc2F2ZVByb2plY3RzKCk7XG4gICAgXG4gICAgICAgIHRoaXMudG9kb01hbmFnZXIucmVtb3ZlUHJvamVjdFRhc2tzKHByb2plY3RJZCk7XG4gICAgfVxuXG4gICAgZ2V0UHJvamVjdChwcm9qZWN0SWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvamVjdHMuZmluZChwcm9qZWN0ID0+IHByb2plY3QuaWQgPT09IHByb2plY3RJZCk7XG4gICAgfVxuXG4gICAgZ2V0QWxsUHJvamVjdHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByb2plY3RzO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBpc1RvZGF5LCBpc0Z1dHVyZSwgcGFyc2VJU08gfSBmcm9tICdkYXRlLWZucyc7XG5cbmV4cG9ydCBjbGFzcyBUb2RvIHtcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24gPSAnJywgZHVlRGF0ZSA9IG51bGwsIHByaW9yaXR5ID0gJ21lZGl1bScpIHtcbiAgICAgICAgdGhpcy5pZCA9IERhdGUubm93KCkudG9TdHJpbmcoKTtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICAgICAgdGhpcy5jb21wbGV0ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5jcmVhdGVkQXQgPSBuZXcgRGF0ZSgpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9kb01hbmFnZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnRvZG9zID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLmxvYWRUb2RvcygpO1xuICAgIH1cblxuICAgIGxvYWRUb2RvcygpIHtcbiAgICAgICAgY29uc3Qgc2F2ZWRUb2RvcyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdib290ZG9Ub2RvcycpO1xuICAgICAgICBpZiAoc2F2ZWRUb2Rvcykge1xuICAgICAgICAgICAgY29uc3QgdG9kb0RhdGEgPSBKU09OLnBhcnNlKHNhdmVkVG9kb3MpO1xuICAgICAgICAgICAgdGhpcy50b2RvcyA9IG5ldyBNYXAodG9kb0RhdGEpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2F2ZVRvZG9zKCkge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYm9vdGRvVG9kb3MnLCBKU09OLnN0cmluZ2lmeShbLi4udGhpcy50b2Rvc10pKTtcbiAgICB9XG5cbiAgICBhZGRUb2RvKHByb2plY3RJZCwgdG9kbykge1xuICAgICAgICBpZiAoIXRoaXMudG9kb3MuaGFzKHByb2plY3RJZCkpIHtcbiAgICAgICAgICAgIHRoaXMudG9kb3Muc2V0KHByb2plY3RJZCwgW10pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudG9kb3MuZ2V0KHByb2plY3RJZCkucHVzaCh0b2RvKTtcbiAgICAgICAgdGhpcy5zYXZlVG9kb3MoKTtcbiAgICB9XG5cbiAgICBnZXRUb2RvKHByb2plY3RJZCwgdG9kb0lkKSB7XG4gICAgICAgIGNvbnN0IHByb2plY3RUb2RvcyA9IHRoaXMudG9kb3MuZ2V0KHByb2plY3RJZCk7XG4gICAgICAgIGlmIChwcm9qZWN0VG9kb3MpIHtcbiAgICAgICAgICAgIHJldHVybiBwcm9qZWN0VG9kb3MuZmluZCh0b2RvID0+IHRvZG8uaWQgPT09IHRvZG9JZCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIFxuICAgIHVwZGF0ZVRvZG8ocHJvamVjdElkLCB0b2RvSWQsIHVwZGF0ZWRUb2RvKSB7XG4gICAgICAgIGNvbnN0IHByb2plY3RUb2RvcyA9IHRoaXMudG9kb3MuZ2V0KHByb2plY3RJZCk7XG4gICAgICAgIGlmIChwcm9qZWN0VG9kb3MpIHtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gcHJvamVjdFRvZG9zLmZpbmRJbmRleCh0b2RvID0+IHRvZG8uaWQgPT09IHRvZG9JZCk7XG4gICAgICAgICAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgcHJvamVjdFRvZG9zW2luZGV4XSA9IHVwZGF0ZWRUb2RvO1xuICAgICAgICAgICAgICAgIHRoaXMuc2F2ZVRvZG9zKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRBbGxUb2RvcygpIHtcbiAgICAgICAgY29uc3QgYWxsVG9kb3MgPSBbXTtcbiAgICAgICAgdGhpcy50b2Rvcy5mb3JFYWNoKCh0b2RvcywgcHJvamVjdElkKSA9PiB7XG4gICAgICAgICAgICB0b2Rvcy5mb3JFYWNoKHRvZG8gPT4ge1xuICAgICAgICAgICAgICAgIGFsbFRvZG9zLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAuLi50b2RvLFxuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0SWRcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGFsbFRvZG9zO1xuICAgIH1cblxuICAgIGdldFRvZGF5VG9kb3MoKSB7XG4gICAgICAgIGNvbnN0IGFsbFRvZG9zID0gdGhpcy5nZXRBbGxUb2RvcygpO1xuICAgICAgICByZXR1cm4gYWxsVG9kb3MuZmlsdGVyKHRvZG8gPT4ge1xuICAgICAgICAgICAgaWYgKCF0b2RvLmR1ZURhdGUgfHwgdG9kby5jb21wbGV0ZWQpIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIHJldHVybiBpc1RvZGF5KHBhcnNlSVNPKHRvZG8uZHVlRGF0ZSkpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnZXRVcGNvbWluZ1RvZG9zKCkge1xuICAgICAgICBjb25zdCBhbGxUb2RvcyA9IHRoaXMuZ2V0QWxsVG9kb3MoKTtcbiAgICAgICAgcmV0dXJuIGFsbFRvZG9zLmZpbHRlcih0b2RvID0+IHtcbiAgICAgICAgICAgIGlmICghdG9kby5kdWVEYXRlIHx8IHRvZG8uY29tcGxldGVkKSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICByZXR1cm4gaXNGdXR1cmUocGFyc2VJU08odG9kby5kdWVEYXRlKSk7XG4gICAgICAgIH0pLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBwYXJzZUlTTyhhLmR1ZURhdGUpIC0gcGFyc2VJU08oYi5kdWVEYXRlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZGVsZXRlVG9kbyhwcm9qZWN0SWQsIHRvZG9JZCkge1xuICAgICAgICBjb25zdCBwcm9qZWN0VG9kb3MgPSB0aGlzLnRvZG9zLmdldChwcm9qZWN0SWQpO1xuICAgICAgICBpZiAocHJvamVjdFRvZG9zKSB7XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IHByb2plY3RUb2Rvcy5maW5kSW5kZXgodG9kbyA9PiB0b2RvLmlkID09PSB0b2RvSWQpO1xuICAgICAgICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIHByb2plY3RUb2Rvcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2F2ZVRvZG9zKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0b2dnbGVUb2RvQ29tcGxldGUocHJvamVjdElkLCB0b2RvSWQpIHtcbiAgICAgICAgY29uc3QgcHJvamVjdFRvZG9zID0gdGhpcy50b2Rvcy5nZXQocHJvamVjdElkKTtcbiAgICAgICAgaWYgKHByb2plY3RUb2Rvcykge1xuICAgICAgICAgICAgY29uc3QgdG9kbyA9IHByb2plY3RUb2Rvcy5maW5kKHRvZG8gPT4gdG9kby5pZCA9PT0gdG9kb0lkKTtcbiAgICAgICAgICAgIGlmICh0b2RvKSB7XG4gICAgICAgICAgICAgICAgdG9kby5jb21wbGV0ZWQgPSAhdG9kby5jb21wbGV0ZWQ7XG4gICAgICAgICAgICAgICAgdGhpcy5zYXZlVG9kb3MoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldENvbXBsZXRlZFRvZG9zKCkge1xuICAgICAgICBjb25zdCBhbGxUb2RvcyA9IHRoaXMuZ2V0QWxsVG9kb3MoKTtcbiAgICAgICAgcmV0dXJuIGFsbFRvZG9zLmZpbHRlcih0b2RvID0+IHRvZG8uY29tcGxldGVkKTtcbiAgICB9XG5cbiAgICBnZXRBY3RpdmVUb2RvcygpIHtcbiAgICAgICAgY29uc3QgYWxsVG9kb3MgPSB0aGlzLmdldEFsbFRvZG9zKCk7XG4gICAgICAgIHJldHVybiBhbGxUb2Rvcy5maWx0ZXIodG9kbyA9PiAhdG9kby5jb21wbGV0ZWQpO1xuICAgIH1cblxuICAgIHJlbW92ZVByb2plY3RUYXNrcyhwcm9qZWN0SWQpIHtcbiAgICAgICAgdGhpcy50b2Rvcy5kZWxldGUocHJvamVjdElkKTtcbiAgICAgICAgdGhpcy5zYXZlVG9kb3MoKTtcbiAgICB9XG59IiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5iYWNrZ3JvdW5kLWJvb3Qge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB6LWluZGV4OiAtMTtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgd2lkdGg6IDcwdmg7XG4gICAgaGVpZ2h0OiA3MHZoO1xuICAgIG9wYWNpdHk6IDAuMDM7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2U7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2JhY2tncm91bmQuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksZUFBZTtJQUNmLFdBQVc7SUFDWCxRQUFRO0lBQ1IsU0FBUztJQUNULGdDQUFnQztJQUNoQyxXQUFXO0lBQ1gsWUFBWTtJQUNaLGFBQWE7SUFDYixvQkFBb0I7SUFDcEIsNkJBQTZCO0FBQ2pDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5iYWNrZ3JvdW5kLWJvb3Qge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHotaW5kZXg6IC0xO1xcbiAgICB0b3A6IDUwJTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gICAgd2lkdGg6IDcwdmg7XFxuICAgIGhlaWdodDogNzB2aDtcXG4gICAgb3BhY2l0eTogMC4wMztcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5hcHAtY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgei1pbmRleDogMTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XG4gICAgICAgIFwiaGVhZGVyIGhlYWRlclwiXG4gICAgICAgIFwic2lkZWJhciBtYWluXCI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyNTBweCAxZnI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmcjtcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvcik7XG4gICAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xufVxuXG4uYXBwLWhlYWRlciB7XG4gICAgZ3JpZC1hcmVhOiBoZWFkZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRlci1iZyk7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XG59XG5cbi5oZWFkZXItbGVmdCwgLmhlYWRlci1yaWdodCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMXJlbTtcbn1cblxuLm1lbnUtdG9nZ2xlIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiA0cHg7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHBhZGRpbmc6IDRweDtcbn1cblxuLm1lbnUtdG9nZ2xlIHNwYW4ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAyNHB4O1xuICAgIGhlaWdodDogMnB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xuICAgIHRyYW5zaXRpb246IDAuM3M7XG59XG5cbi5hcHAtc2lkZWJhciB7XG4gICAgZ3JpZC1hcmVhOiBzaWRlYmFyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXItYmcpO1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XG4gICAgcGFkZGluZzogMXJlbTtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xufVxuXG4uc2lkZWJhci1zZWN0aW9uIHtcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xufVxuXG4uc2lkZWJhci1zZWN0aW9uIGgyIHtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xufVxuXG4uc2lkZWJhci1uYXYgdWwge1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgcGFkZGluZzogMDtcbn1cblxuLnNpZGViYXItbmF2IGEge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBhZGRpbmc6IDAuNXJlbTtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnM7XG59XG5cbi5zaWRlYmFyLW5hdiBhOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ob3Zlci1iZyk7XG59XG5cbi5zaWRlYmFyLW5hdiBhLmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXItYmcpO1xuICAgIGNvbG9yOiAjMDA3YmZmO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uYXBwLW1haW4ge1xuICAgIGdyaWQtYXJlYTogbWFpbjtcbiAgICBwYWRkaW5nOiAycmVtO1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG59XG5cbi5jb250ZW50LWhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xufVxuXG4udXNlci1wcm9maWxlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAwLjVyZW07XG59XG5cbi51c2VyLWF2YXRhciB7XG4gICAgd2lkdGg6IDMycHg7XG4gICAgaGVpZ2h0OiAzMnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4udXNlci1uYW1lIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi51c2VyLW5hbWU6aG92ZXIge1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG4udXNlci1hdmF0YXIgLmRlZmF1bHQtYXZhdGFyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuLnVzZXItYXZhdGFyLWltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xufVxuXG4udXNlci1wcm9maWxlIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4udXNlci1kcm9wZG93biB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTAwJTtcbiAgICByaWdodDogMDtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGVlMmU2O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBib3gtc2hhZG93OiAwIDJweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICBtaW4td2lkdGg6IDE1MHB4O1xuICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcbiAgICB6LWluZGV4OiAxMDAwO1xufVxuXG4uZHJvcGRvd24taXRlbSB7XG4gICAgcGFkZGluZzogMC43NXJlbSAxcmVtO1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycztcbn1cblxuLmRyb3Bkb3duLWl0ZW06aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyLWJnKTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgLmFwcC1jb250YWluZXIge1xuICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxuICAgICAgICAgICAgXCJoZWFkZXJcIlxuICAgICAgICAgICAgXCJtYWluXCI7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgIH1cblxuICAgIC5tZW51LXRvZ2dsZSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgfVxuXG4gICAgLmFwcC1zaWRlYmFyIHtcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICBsZWZ0OiAtMjUwcHg7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgd2lkdGg6IDI1MHB4O1xuICAgICAgICB0cmFuc2l0aW9uOiAwLjNzO1xuICAgICAgICB6LWluZGV4OiAxMDAwO1xuICAgIH1cblxuICAgIC5hcHAtc2lkZWJhci5hY3RpdmUge1xuICAgICAgICBsZWZ0OiAwO1xuICAgIH1cbn1cblxuLmFwcC10aXRsZSB7XG4gICAgbWFyZ2luOiAwO1xuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xufVxuXG4uYXBwLXRpdGxlIC5ib290IHtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIGNvbG9yOiAjMmMzZTUwO1xufVxuXG4uYXBwLXRpdGxlIC5kbyB7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBjb2xvcjogIzAwN2JmZjtcbn1cblxuLnByb2plY3QtaXRlbS5hY3RpdmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyLWJnKTtcbiAgICBjb2xvcjogIzAwN2JmZjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmFib3V0LWNvbnRlbnQgLmZlYXR1cmVzLXRleHQge1xuICAgIG1hcmdpbi10b3A6IDJyZW07XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2xheW91dC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLGFBQWE7SUFDYjs7c0JBRWtCO0lBQ2xCLGdDQUFnQztJQUNoQyw0QkFBNEI7SUFDNUIsaUJBQWlCO0lBQ2pCLGlDQUFpQztJQUNqQyx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLGtDQUFrQztJQUNsQyw0Q0FBNEM7QUFDaEQ7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsUUFBUTtJQUNSLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osZUFBZTtJQUNmLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsV0FBVztJQUNYLFdBQVc7SUFDWCxtQ0FBbUM7SUFDbkMsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLG1DQUFtQztJQUNuQywyQ0FBMkM7SUFDM0MsYUFBYTtJQUNiLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZix5QkFBeUI7SUFDekIsd0JBQXdCO0lBQ3hCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZUFBZTtJQUNmLHdCQUF3QjtJQUN4QixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLGlDQUFpQztJQUNqQyxjQUFjO0lBQ2QsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGFBQWE7SUFDYixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHNCQUFzQjtJQUN0QiwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsUUFBUTtJQUNSLGlCQUFpQjtJQUNqQix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLHlDQUF5QztJQUN6QyxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0k7UUFDSTs7a0JBRVU7UUFDViwwQkFBMEI7SUFDOUI7O0lBRUE7UUFDSSxhQUFhO0lBQ2pCOztJQUVBO1FBQ0ksZUFBZTtRQUNmLFlBQVk7UUFDWixNQUFNO1FBQ04sYUFBYTtRQUNiLFlBQVk7UUFDWixnQkFBZ0I7UUFDaEIsYUFBYTtJQUNqQjs7SUFFQTtRQUNJLE9BQU87SUFDWDtBQUNKOztBQUVBO0lBQ0ksU0FBUztJQUNULGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGlDQUFpQztJQUNqQyxjQUFjO0lBQ2QsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5hcHAtY29udGFpbmVyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICAgICAgXFxcImhlYWRlciBoZWFkZXJcXFwiXFxuICAgICAgICBcXFwic2lkZWJhciBtYWluXFxcIjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyNTBweCAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnI7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvcik7XFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcXG59XFxuXFxuLmFwcC1oZWFkZXIge1xcbiAgICBncmlkLWFyZWE6IGhlYWRlcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZWFkZXItYmcpO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcXG59XFxuXFxuLmhlYWRlci1sZWZ0LCAuaGVhZGVyLXJpZ2h0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4ubWVudS10b2dnbGUge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDRweDtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHBhZGRpbmc6IDRweDtcXG59XFxuXFxuLm1lbnUtdG9nZ2xlIHNwYW4ge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDI0cHg7XFxuICAgIGhlaWdodDogMnB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcXG4gICAgdHJhbnNpdGlvbjogMC4zcztcXG59XFxuXFxuLmFwcC1zaWRlYmFyIHtcXG4gICAgZ3JpZC1hcmVhOiBzaWRlYmFyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlYmFyLWJnKTtcXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG59XFxuXFxuLnNpZGViYXItc2VjdGlvbiB7XFxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XFxufVxcblxcbi5zaWRlYmFyLXNlY3Rpb24gaDIge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xcbn1cXG5cXG4uc2lkZWJhci1uYXYgdWwge1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4uc2lkZWJhci1uYXYgYSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycztcXG59XFxuXFxuLnNpZGViYXItbmF2IGE6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ob3Zlci1iZyk7XFxufVxcblxcbi5zaWRlYmFyLW5hdiBhLmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyLWJnKTtcXG4gICAgY29sb3I6ICMwMDdiZmY7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uYXBwLW1haW4ge1xcbiAgICBncmlkLWFyZWE6IG1haW47XFxuICAgIHBhZGRpbmc6IDJyZW07XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxufVxcblxcbi5jb250ZW50LWhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG59XFxuXFxuLnVzZXItcHJvZmlsZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMC41cmVtO1xcbn1cXG5cXG4udXNlci1hdmF0YXIge1xcbiAgICB3aWR0aDogMzJweDtcXG4gICAgaGVpZ2h0OiAzMnB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi51c2VyLW5hbWUge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi51c2VyLW5hbWU6aG92ZXIge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXFxuLnVzZXItYXZhdGFyIC5kZWZhdWx0LWF2YXRhciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDdiZmY7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG4udXNlci1hdmF0YXItaW1nIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbn1cXG5cXG4udXNlci1wcm9maWxlIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi51c2VyLWRyb3Bkb3duIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDEwMCU7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RlZTJlNjtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBib3gtc2hhZG93OiAwIDJweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gICAgbWluLXdpZHRoOiAxNTBweDtcXG4gICAgbWFyZ2luLXRvcDogMC41cmVtO1xcbiAgICB6LWluZGV4OiAxMDAwO1xcbn1cXG5cXG4uZHJvcGRvd24taXRlbSB7XFxuICAgIHBhZGRpbmc6IDAuNzVyZW0gMXJlbTtcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzO1xcbn1cXG5cXG4uZHJvcGRvd24taXRlbTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyLWJnKTtcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxuICAgIC5hcHAtY29udGFpbmVyIHtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgICAgICAgICAgXFxcImhlYWRlclxcXCJcXG4gICAgICAgICAgICBcXFwibWFpblxcXCI7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgfVxcblxcbiAgICAubWVudS10b2dnbGUge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgfVxcblxcbiAgICAuYXBwLXNpZGViYXIge1xcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICAgICAgbGVmdDogLTI1MHB4O1xcbiAgICAgICAgdG9wOiAwO1xcbiAgICAgICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgICAgIHdpZHRoOiAyNTBweDtcXG4gICAgICAgIHRyYW5zaXRpb246IDAuM3M7XFxuICAgICAgICB6LWluZGV4OiAxMDAwO1xcbiAgICB9XFxuXFxuICAgIC5hcHAtc2lkZWJhci5hY3RpdmUge1xcbiAgICAgICAgbGVmdDogMDtcXG4gICAgfVxcbn1cXG5cXG4uYXBwLXRpdGxlIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBmb250LXNpemU6IDEuOHJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xcbn1cXG5cXG4uYXBwLXRpdGxlIC5ib290IHtcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gICAgY29sb3I6ICMyYzNlNTA7XFxufVxcblxcbi5hcHAtdGl0bGUgLmRvIHtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgY29sb3I6ICMwMDdiZmY7XFxufVxcblxcbi5wcm9qZWN0LWl0ZW0uYWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXItYmcpO1xcbiAgICBjb2xvcjogIzAwN2JmZjtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5hYm91dC1jb250ZW50IC5mZWF0dXJlcy10ZXh0IHtcXG4gICAgbWFyZ2luLXRvcDogMnJlbTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdCB7XG4gICAgLS1iZy1jb2xvcjogI2ZmZmZmZjtcbiAgICAtLWhlYWRlci1iZzogI2ZmZmZmZjtcbiAgICAtLXNpZGViYXItYmc6ICNmOGY5ZmE7XG4gICAgLS10ZXh0LWNvbG9yOiAjMjEyNTI5O1xuICAgIC0tdGV4dC1tdXRlZDogIzZjNzU3ZDtcbiAgICAtLWJvcmRlci1jb2xvcjogI2RlZTJlNjtcbiAgICAtLWhvdmVyLWJnOiByZ2JhKDAsIDEyMywgMjU1LCAwLjEpO1xufVxuXG4qIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5ib2R5IHtcbiAgICBmb250LWZhbWlseTogQXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgbGluZS1oZWlnaHQ6IDEuNjtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvbWFpbi5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFDckIscUJBQXFCO0lBQ3JCLHVCQUF1QjtJQUN2QixrQ0FBa0M7QUFDdEM7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLDhCQUE4QjtJQUM5QixnQkFBZ0I7QUFDcEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgICAtLWJnLWNvbG9yOiAjZmZmZmZmO1xcbiAgICAtLWhlYWRlci1iZzogI2ZmZmZmZjtcXG4gICAgLS1zaWRlYmFyLWJnOiAjZjhmOWZhO1xcbiAgICAtLXRleHQtY29sb3I6ICMyMTI1Mjk7XFxuICAgIC0tdGV4dC1tdXRlZDogIzZjNzU3ZDtcXG4gICAgLS1ib3JkZXItY29sb3I6ICNkZWUyZTY7XFxuICAgIC0taG92ZXItYmc6IHJnYmEoMCwgMTIzLCAyNTUsIDAuMSk7XFxufVxcblxcbioge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgICBmb250LWZhbWlseTogQXJpYWwsIHNhbnMtc2VyaWY7XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjY7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLm92ZXJsYXkge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB6LWluZGV4OiAxMDAwO1xufVxuXG4ub25ib2FyZGluZy1tb2RhbCB7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgcGFkZGluZzogMnJlbTtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgYm94LXNoYWRvdzogMCAycHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLm9uYm9hcmRpbmctbW9kYWwgaDIge1xuICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbiAgICBjb2xvcjogIzMzMztcbn1cblxuLm9uYm9hcmRpbmctbW9kYWwgaW5wdXQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDAuOHJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG4uYXZhdGFyLXVwbG9hZCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAycmVtO1xuICAgIG1hcmdpbjogMS41cmVtIDA7XG59XG5cbi5hdmF0YXItcHJldmlldyB7XG4gICAgd2lkdGg6IDE1MHB4O1xuICAgIGhlaWdodDogMTUwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgYm9yZGVyOiAycHggc29saWQgI2RkZDtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuXG4jYXZhdGFyLXByZXZpZXctaW1hZ2Uge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbn1cblxuLmF2YXRhci1hY3Rpb25zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogMXJlbTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4ub25ib2FyZGluZy1tb2RhbCAuYXZhdGFyLXByZXZpZXcgLmRlZmF1bHQtYXZhdGFyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogNHJlbTsgLyogb3Igd2hhdGV2ZXIgc2l6ZSB5b3UgcHJlZmVyICovXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG4uZmlsZS1pbnB1dCB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLmJ0biB7XG4gICAgcGFkZGluZzogMC44cmVtIDEuNXJlbTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG59XG5cbi5idG4tcHJpbWFyeSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cblxuLmJ0bi1wcmltYXJ5OmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1NmIzO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcbiAgICBib3gtc2hhZG93OiAwIDRweCA2cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuXG4uYnRuLXNlY29uZGFyeSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcbiAgICBjb2xvcjogIzIxMjUyOTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGVlMmU2O1xufVxuXG4uYnRuLXNlY29uZGFyeTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UyZTZlYTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL29uYm9hcmRpbmcuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksZUFBZTtJQUNmLE1BQU07SUFDTixPQUFPO0lBQ1AsV0FBVztJQUNYLFlBQVk7SUFDWiw4QkFBOEI7SUFDOUIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLHlDQUF5QztJQUN6QyxVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsU0FBUztJQUNULGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixzQkFBc0I7SUFDdEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksYUFBYTtJQUNiLFNBQVM7SUFDVCxtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixlQUFlLEVBQUUsZ0NBQWdDO0lBQ2pELGlCQUFpQjtJQUNqQixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osd0NBQXdDO0FBQzVDOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLDJCQUEyQjtJQUMzQix3Q0FBd0M7QUFDNUM7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsY0FBYztJQUNkLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QiwyQkFBMkI7QUFDL0JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLm92ZXJsYXkge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgei1pbmRleDogMTAwMDtcXG59XFxuXFxuLm9uYm9hcmRpbmctbW9kYWwge1xcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gICAgcGFkZGluZzogMnJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBib3gtc2hhZG93OiAwIDJweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gICAgd2lkdGg6IDkwJTtcXG4gICAgbWF4LXdpZHRoOiA1MDBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ub25ib2FyZGluZy1tb2RhbCBoMiB7XFxuICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcXG4gICAgY29sb3I6ICMzMzM7XFxufVxcblxcbi5vbmJvYXJkaW5nLW1vZGFsIGlucHV0IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDAuOHJlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbn1cXG5cXG4uYXZhdGFyLXVwbG9hZCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMnJlbTtcXG4gICAgbWFyZ2luOiAxLjVyZW0gMDtcXG59XFxuXFxuLmF2YXRhci1wcmV2aWV3IHtcXG4gICAgd2lkdGg6IDE1MHB4O1xcbiAgICBoZWlnaHQ6IDE1MHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNkZGQ7XFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxufVxcblxcbiNhdmF0YXItcHJldmlldy1pbWFnZSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG59XFxuXFxuLmF2YXRhci1hY3Rpb25zIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5vbmJvYXJkaW5nLW1vZGFsIC5hdmF0YXItcHJldmlldyAuZGVmYXVsdC1hdmF0YXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YmZmO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDRyZW07IC8qIG9yIHdoYXRldmVyIHNpemUgeW91IHByZWZlciAqL1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcbi5maWxlLWlucHV0IHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmJ0biB7XFxuICAgIHBhZGRpbmc6IDAuOHJlbSAxLjVyZW07XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XFxufVxcblxcbi5idG4tcHJpbWFyeSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDdiZmY7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG59XFxuXFxuLmJ0bi1wcmltYXJ5OmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNTZiMztcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xcbiAgICBib3gtc2hhZG93OiAwIDRweCA2cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbn1cXG5cXG4uYnRuLXNlY29uZGFyeSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XFxuICAgIGNvbG9yOiAjMjEyNTI5O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGVlMmU2O1xcbn1cXG5cXG4uYnRuLXNlY29uZGFyeTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlMmU2ZWE7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAucHJvamVjdHMtbGlzdCB7XG4gICAgbWFyZ2luOiAxcmVtIDA7XG59XG5cbi5wcm9qZWN0LWl0ZW0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgcGFkZGluZzogMC41cmVtO1xuICAgIG1hcmdpbjogMC4yNXJlbSAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzO1xufVxuXG4ucHJvamVjdC1pdGVtOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ob3Zlci1iZyk7XG59XG5cbi5zaWRlYmFyLW5hdiBhLmFjdGl2ZSxcbi5wcm9qZWN0LWl0ZW0uYWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ob3Zlci1iZyk7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5wcm9qZWN0LW5hbWUge1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcbn1cblxuLmRlbGV0ZS1wcm9qZWN0IHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGNvbG9yOiAjMjEyNTI5O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBwYWRkaW5nOiAwLjI1cmVtO1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycztcbn1cblxuLnByb2plY3QtaXRlbTpob3ZlciAuZGVsZXRlLXByb2plY3Qge1xuICAgIG9wYWNpdHk6IDE7XG59XG5cbi5hZGQtcHJvamVjdC1mb3JtIHtcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xufVxuXG4uYWRkLXByb2plY3QtaW5wdXQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDAuNXJlbTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG59XG5cbi5wcm9qZWN0LWFjdGlvbnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiAwLjVyZW07XG59XG5cbi5idG4tYWRkLXByb2plY3Qge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDAuNXJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YmZmO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycztcbn1cblxuLmJ0bi1hZGQtcHJvamVjdDpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNTZiMztcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvcHJvamVjdHMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsOEJBQThCO0lBQzlCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxpQ0FBaUM7QUFDckM7O0FBRUE7O0lBRUksaUNBQWlDO0lBQ2pDLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixjQUFjO0lBQ2QsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQix3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsZUFBZTtJQUNmLHFDQUFxQztJQUNyQyxrQkFBa0I7SUFDbEIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5wcm9qZWN0cy1saXN0IHtcXG4gICAgbWFyZ2luOiAxcmVtIDA7XFxufVxcblxcbi5wcm9qZWN0LWl0ZW0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXG4gICAgbWFyZ2luOiAwLjI1cmVtIDA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnM7XFxufVxcblxcbi5wcm9qZWN0LWl0ZW06aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ob3Zlci1iZyk7XFxufVxcblxcbi5zaWRlYmFyLW5hdiBhLmFjdGl2ZSxcXG4ucHJvamVjdC1pdGVtLmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyLWJnKTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5wcm9qZWN0LW5hbWUge1xcbiAgICBmbGV4LWdyb3c6IDE7XFxuICAgIG1hcmdpbi1yaWdodDogMC41cmVtO1xcbn1cXG5cXG4uZGVsZXRlLXByb2plY3Qge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGNvbG9yOiAjMjEyNTI5O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHBhZGRpbmc6IDAuMjVyZW07XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycztcXG59XFxuXFxuLnByb2plY3QtaXRlbTpob3ZlciAuZGVsZXRlLXByb2plY3Qge1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4uYWRkLXByb2plY3QtZm9ybSB7XFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxufVxcblxcbi5hZGQtcHJvamVjdC1pbnB1dCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xcbn1cXG5cXG4ucHJvamVjdC1hY3Rpb25zIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAwLjVyZW07XFxufVxcblxcbi5idG4tYWRkLXByb2plY3Qge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogMC41cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YmZmO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycztcXG59XFxuXFxuLmJ0bi1hZGQtcHJvamVjdDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDU2YjM7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLm1vZGFsLW92ZXJsYXkge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB6LWluZGV4OiAxMDAwO1xufVxuXG4udG9kby1tb2RhbCB7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgcGFkZGluZzogMnJlbTtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xufVxuXG4udG9kby1mb3JtIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAxcmVtO1xufVxuXG4uZm9ybS1ncm91cCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMC41cmVtO1xufVxuXG4uZm9ybS1ncm91cCBsYWJlbCB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5mb3JtLWdyb3VwIGlucHV0LFxuLmZvcm0tZ3JvdXAgdGV4dGFyZWEsXG4uZm9ybS1ncm91cCBzZWxlY3Qge1xuICAgIHBhZGRpbmc6IDAuNXJlbTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBmb250LXNpemU6IDFyZW07XG59XG5cbi50b2RvLWxpc3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDAuNXJlbTtcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xufVxuXG4udG9kby1pdGVtIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDFyZW07XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgZ2FwOiAxcmVtO1xufVxuXG4udG9kby1jaGVja2JveCB7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnRvZG8tY29udGVudCB7XG4gICAgZmxleC1ncm93OiAxO1xufVxuXG4udG9kby10aXRsZSB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMC4yNXJlbTtcbn1cblxuLnRvZG8tZGVzY3JpcHRpb24ge1xuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICAgIGNvbG9yOiAjNjY2O1xufVxuXG4udG9kby1tZXRhZGF0YSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDFyZW07XG4gICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgY29sb3I6ICM2NjY7XG59XG5cbi50b2RvLWl0ZW0gLnRvZG8tYWN0aW9ucyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMC41cmVtO1xuICAgIHJpZ2h0OiAwLjVyZW07XG59XG5cbi50b2RvLW1vZGFsIC50b2RvLWFjdGlvbnMge1xuICAgIHBvc2l0aW9uOiBzdGF0aWM7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDFyZW07XG4gICAgbWFyZ2luLXRvcDogMXJlbTtcbn1cblxuLnRvZG8tYWN0aW9ucyBidXR0b24ge1xuICAgIHBhZGRpbmc6IDAuMjVyZW07XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGNvbG9yOiAjNmM3NTdkO1xuICAgIHRyYW5zaXRpb246IGNvbG9yIDAuMnM7XG59XG5cbi50b2RvLWFjdGlvbnMgYnV0dG9uOmhvdmVyIHtcbiAgICBjb2xvcjogIzAwN2JmZjtcbn1cblxuLmVkaXQtdG9kbyBzdmcge1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIGhlaWdodDogMjBweDtcbn1cblxuLmJ0bi10b2RvIHtcbiAgICBwYWRkaW5nOiAwLjhyZW0gMS41cmVtO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcbiAgICBtaW4td2lkdGg6IDEwMHB4O1xufVxuXG4uYnRuLXRvZG8uYnRuLXByaW1hcnkge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDdiZmY7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5cbi5idG4tdG9kby5idG4tcHJpbWFyeTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNTZiMztcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XG4gICAgYm94LXNoYWRvdzogMCA0cHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi5idG4tdG9kby5idG4tc2Vjb25kYXJ5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xuICAgIGNvbG9yOiAjMjEyNTI5O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZWUyZTY7XG59XG5cbi5idG4tdG9kby5idG4tc2Vjb25kYXJ5OmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTJlNmVhO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcbn1cblxuLnByb2plY3Qtc2VjdGlvbiB7XG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbn1cblxuLnByb2plY3QtaGVhZGVyIHtcbiAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICBtYXJnaW46IDEuNXJlbSAwIDFyZW0gMDtcbiAgICBmb250LXdlaWdodDogNjAwO1xufVxuXG4ucHJvamVjdC1zZWN0aW9uOmZpcnN0LWNoaWxkIC5wcm9qZWN0LWhlYWRlciB7XG4gICAgbWFyZ2luLXRvcDogMDtcbn1cblxuLmFkZC10YXNrLWJ0biB7XG4gICAgcGFkZGluZzogMC44cmVtIDEuNXJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YmZmO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycztcbn1cblxuLmFkZC10YXNrLWJ0bjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNTZiMztcbn1cblxuLmJ0bi10b2RvLmJ0bi1kYW5nZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkYzM1NDU7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5cbi5idG4tdG9kby5idG4tZGFuZ2VyOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzgyMzMzO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcbiAgICBib3gtc2hhZG93OiAwIDRweCA2cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmFib3V0LWNvbnRlbnQge1xuICAgIG1hcmdpbjogMS41cmVtIDA7XG4gICAgbGluZS1oZWlnaHQ6IDEuNjtcbn1cblxuLmFib3V0LWNvbnRlbnQgdWwge1xuICAgIG1hcmdpbjogMXJlbSAwO1xuICAgIHBhZGRpbmctbGVmdDogMS41cmVtO1xufVxuXG4uYWJvdXQtY29udGVudCAuc2lnbmF0dXJlIHtcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICBjb2xvcjogIzY2NjtcbiAgICBsaW5lLWhlaWdodDogMS41O1xufVxuXG4uYWRkLXRhc2stYnRuLmRpc2FibGVkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjY2NjO1xuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gICAgb3BhY2l0eTogMC43O1xufVxuXG4uYWRkLXRhc2stYnRuLmRpc2FibGVkOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjY2NjO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy90b2Rvcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxlQUFlO0lBQ2YsTUFBTTtJQUNOLE9BQU87SUFDUCxRQUFRO0lBQ1IsU0FBUztJQUNULDhCQUE4QjtJQUM5QixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztBQUNiOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7OztJQUdJLGVBQWU7SUFDZixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsU0FBUztBQUNiOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixlQUFlO0FBQ25COztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsV0FBVztBQUNmOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFNBQVM7SUFDVCxpQkFBaUI7SUFDakIsV0FBVztBQUNmOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixTQUFTO0lBQ1QsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osZUFBZTtJQUNmLGNBQWM7SUFDZCxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLHdDQUF3QztBQUM1Qzs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QiwyQkFBMkI7SUFDM0Isd0NBQXdDO0lBQ3hDLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsY0FBYztJQUNkLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QiwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWix3Q0FBd0M7QUFDNUM7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsMkJBQTJCO0lBQzNCLHdDQUF3QztJQUN4QyxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLm1vZGFsLW92ZXJsYXkge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgei1pbmRleDogMTAwMDtcXG59XFxuXFxuLnRvZG8tbW9kYWwge1xcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gICAgcGFkZGluZzogMnJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICB3aWR0aDogOTAlO1xcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xcbn1cXG5cXG4udG9kby1mb3JtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4uZm9ybS1ncm91cCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMC41cmVtO1xcbn1cXG5cXG4uZm9ybS1ncm91cCBsYWJlbCB7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uZm9ybS1ncm91cCBpbnB1dCxcXG4uZm9ybS1ncm91cCB0ZXh0YXJlYSxcXG4uZm9ybS1ncm91cCBzZWxlY3Qge1xcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4udG9kby1saXN0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAwLjVyZW07XFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxufVxcblxcbi50b2RvLWl0ZW0ge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIGdhcDogMXJlbTtcXG59XFxuXFxuLnRvZG8tY2hlY2tib3gge1xcbiAgICB3aWR0aDogMjBweDtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50b2RvLWNvbnRlbnQge1xcbiAgICBmbGV4LWdyb3c6IDE7XFxufVxcblxcbi50b2RvLXRpdGxlIHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIG1hcmdpbi1ib3R0b206IDAuMjVyZW07XFxufVxcblxcbi50b2RvLWRlc2NyaXB0aW9uIHtcXG4gICAgZm9udC1zaXplOiAwLjlyZW07XFxuICAgIGNvbG9yOiAjNjY2O1xcbn1cXG5cXG4udG9kby1tZXRhZGF0YSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMXJlbTtcXG4gICAgZm9udC1zaXplOiAwLjhyZW07XFxuICAgIGNvbG9yOiAjNjY2O1xcbn1cXG5cXG4udG9kby1pdGVtIC50b2RvLWFjdGlvbnMge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMC41cmVtO1xcbiAgICByaWdodDogMC41cmVtO1xcbn1cXG5cXG4udG9kby1tb2RhbCAudG9kby1hY3Rpb25zIHtcXG4gICAgcG9zaXRpb246IHN0YXRpYztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcbn1cXG5cXG4udG9kby1hY3Rpb25zIGJ1dHRvbiB7XFxuICAgIHBhZGRpbmc6IDAuMjVyZW07XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBjb2xvcjogIzZjNzU3ZDtcXG4gICAgdHJhbnNpdGlvbjogY29sb3IgMC4ycztcXG59XFxuXFxuLnRvZG8tYWN0aW9ucyBidXR0b246aG92ZXIge1xcbiAgICBjb2xvcjogIzAwN2JmZjtcXG59XFxuXFxuLmVkaXQtdG9kbyBzdmcge1xcbiAgICB3aWR0aDogMjBweDtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbn1cXG5cXG4uYnRuLXRvZG8ge1xcbiAgICBwYWRkaW5nOiAwLjhyZW0gMS41cmVtO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xcbiAgICBtaW4td2lkdGg6IDEwMHB4O1xcbn1cXG5cXG4uYnRuLXRvZG8uYnRuLXByaW1hcnkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YmZmO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxufVxcblxcbi5idG4tdG9kby5idG4tcHJpbWFyeTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDU2YjM7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcXG4gICAgYm94LXNoYWRvdzogMCA0cHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uYnRuLXRvZG8uYnRuLXNlY29uZGFyeSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XFxuICAgIGNvbG9yOiAjMjEyNTI5O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGVlMmU2O1xcbn1cXG5cXG4uYnRuLXRvZG8uYnRuLXNlY29uZGFyeTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlMmU2ZWE7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcXG59XFxuXFxuLnByb2plY3Qtc2VjdGlvbiB7XFxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XFxufVxcblxcbi5wcm9qZWN0LWhlYWRlciB7XFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgICBtYXJnaW46IDEuNXJlbSAwIDFyZW0gMDtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuLnByb2plY3Qtc2VjdGlvbjpmaXJzdC1jaGlsZCAucHJvamVjdC1oZWFkZXIge1xcbiAgICBtYXJnaW4tdG9wOiAwO1xcbn1cXG5cXG4uYWRkLXRhc2stYnRuIHtcXG4gICAgcGFkZGluZzogMC44cmVtIDEuNXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnM7XFxufVxcblxcbi5hZGQtdGFzay1idG46aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1NmIzO1xcbn1cXG5cXG4uYnRuLXRvZG8uYnRuLWRhbmdlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkYzM1NDU7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG59XFxuXFxuLmJ0bi10b2RvLmJ0bi1kYW5nZXI6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzgyMzMzO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XFxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmFib3V0LWNvbnRlbnQge1xcbiAgICBtYXJnaW46IDEuNXJlbSAwO1xcbiAgICBsaW5lLWhlaWdodDogMS42O1xcbn1cXG5cXG4uYWJvdXQtY29udGVudCB1bCB7XFxuICAgIG1hcmdpbjogMXJlbSAwO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDEuNXJlbTtcXG59XFxuXFxuLmFib3V0LWNvbnRlbnQgLnNpZ25hdHVyZSB7XFxuICAgIG1hcmdpbi10b3A6IDJyZW07XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gICAgY29sb3I6ICM2NjY7XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XFxufVxcblxcbi5hZGQtdGFzay1idG4uZGlzYWJsZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjY2NjO1xcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcbiAgICBvcGFjaXR5OiAwLjc7XFxufVxcblxcbi5hZGQtdGFzay1idG4uZGlzYWJsZWQ6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjY2NjO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9iYWNrZ3JvdW5kLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2JhY2tncm91bmQuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2xheW91dC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9sYXlvdXQuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vb25ib2FyZGluZy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9vbmJvYXJkaW5nLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9wcm9qZWN0cy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9wcm9qZWN0cy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vdG9kb3MuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vdG9kb3MuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBjb25zdHJ1Y3RGcm9tIH0gZnJvbSBcIi4uL2NvbnN0cnVjdEZyb20uanNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZURhdGVzKGNvbnRleHQsIC4uLmRhdGVzKSB7XG4gIGNvbnN0IG5vcm1hbGl6ZSA9IGNvbnN0cnVjdEZyb20uYmluZChcbiAgICBudWxsLFxuICAgIGNvbnRleHQgfHwgZGF0ZXMuZmluZCgoZGF0ZSkgPT4gdHlwZW9mIGRhdGUgPT09IFwib2JqZWN0XCIpLFxuICApO1xuICByZXR1cm4gZGF0ZXMubWFwKG5vcm1hbGl6ZSk7XG59XG4iLCIvKipcbiAqIEBtb2R1bGUgY29uc3RhbnRzXG4gKiBAc3VtbWFyeSBVc2VmdWwgY29uc3RhbnRzXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbGxlY3Rpb24gb2YgdXNlZnVsIGRhdGUgY29uc3RhbnRzLlxuICpcbiAqIFRoZSBjb25zdGFudHMgY291bGQgYmUgaW1wb3J0ZWQgZnJvbSBgZGF0ZS1mbnMvY29uc3RhbnRzYDpcbiAqXG4gKiBgYGB0c1xuICogaW1wb3J0IHsgbWF4VGltZSwgbWluVGltZSB9IGZyb20gXCIuL2NvbnN0YW50cy9kYXRlLWZucy9jb25zdGFudHNcIjtcbiAqXG4gKiBmdW5jdGlvbiBpc0FsbG93ZWRUaW1lKHRpbWUpIHtcbiAqICAgcmV0dXJuIHRpbWUgPD0gbWF4VGltZSAmJiB0aW1lID49IG1pblRpbWU7XG4gKiB9XG4gKiBgYGBcbiAqL1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgZGF5c0luV2Vla1xuICogQHN1bW1hcnkgRGF5cyBpbiAxIHdlZWsuXG4gKi9cbmV4cG9ydCBjb25zdCBkYXlzSW5XZWVrID0gNztcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIGRheXNJblllYXJcbiAqIEBzdW1tYXJ5IERheXMgaW4gMSB5ZWFyLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogSG93IG1hbnkgZGF5cyBpbiBhIHllYXIuXG4gKlxuICogT25lIHllYXJzIGVxdWFscyAzNjUuMjQyNSBkYXlzIGFjY29yZGluZyB0byB0aGUgZm9ybXVsYTpcbiAqXG4gKiA+IExlYXAgeWVhciBvY2N1cnMgZXZlcnkgNCB5ZWFycywgZXhjZXB0IGZvciB5ZWFycyB0aGF0IGFyZSBkaXZpc2libGUgYnkgMTAwIGFuZCBub3QgZGl2aXNpYmxlIGJ5IDQwMC5cbiAqID4gMSBtZWFuIHllYXIgPSAoMzY1KzEvNC0xLzEwMCsxLzQwMCkgZGF5cyA9IDM2NS4yNDI1IGRheXNcbiAqL1xuZXhwb3J0IGNvbnN0IGRheXNJblllYXIgPSAzNjUuMjQyNTtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1heFRpbWVcbiAqIEBzdW1tYXJ5IE1heGltdW0gYWxsb3dlZCB0aW1lLlxuICpcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgeyBtYXhUaW1lIH0gZnJvbSBcIi4vY29uc3RhbnRzL2RhdGUtZm5zL2NvbnN0YW50c1wiO1xuICpcbiAqIGNvbnN0IGlzVmFsaWQgPSA4NjQwMDAwMDAwMDAwMDAxIDw9IG1heFRpbWU7XG4gKiAvLz0+IGZhbHNlXG4gKlxuICogbmV3IERhdGUoODY0MDAwMDAwMDAwMDAwMSk7XG4gKiAvLz0+IEludmFsaWQgRGF0ZVxuICovXG5leHBvcnQgY29uc3QgbWF4VGltZSA9IE1hdGgucG93KDEwLCA4KSAqIDI0ICogNjAgKiA2MCAqIDEwMDA7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtaW5UaW1lXG4gKiBAc3VtbWFyeSBNaW5pbXVtIGFsbG93ZWQgdGltZS5cbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgbWluVGltZSB9IGZyb20gXCIuL2NvbnN0YW50cy9kYXRlLWZucy9jb25zdGFudHNcIjtcbiAqXG4gKiBjb25zdCBpc1ZhbGlkID0gLTg2NDAwMDAwMDAwMDAwMDEgPj0gbWluVGltZTtcbiAqIC8vPT4gZmFsc2VcbiAqXG4gKiBuZXcgRGF0ZSgtODY0MDAwMDAwMDAwMDAwMSlcbiAqIC8vPT4gSW52YWxpZCBEYXRlXG4gKi9cbmV4cG9ydCBjb25zdCBtaW5UaW1lID0gLW1heFRpbWU7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtaWxsaXNlY29uZHNJbldlZWtcbiAqIEBzdW1tYXJ5IE1pbGxpc2Vjb25kcyBpbiAxIHdlZWsuXG4gKi9cbmV4cG9ydCBjb25zdCBtaWxsaXNlY29uZHNJbldlZWsgPSA2MDQ4MDAwMDA7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtaWxsaXNlY29uZHNJbkRheVxuICogQHN1bW1hcnkgTWlsbGlzZWNvbmRzIGluIDEgZGF5LlxuICovXG5leHBvcnQgY29uc3QgbWlsbGlzZWNvbmRzSW5EYXkgPSA4NjQwMDAwMDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1pbGxpc2Vjb25kc0luTWludXRlXG4gKiBAc3VtbWFyeSBNaWxsaXNlY29uZHMgaW4gMSBtaW51dGVcbiAqL1xuZXhwb3J0IGNvbnN0IG1pbGxpc2Vjb25kc0luTWludXRlID0gNjAwMDA7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtaWxsaXNlY29uZHNJbkhvdXJcbiAqIEBzdW1tYXJ5IE1pbGxpc2Vjb25kcyBpbiAxIGhvdXJcbiAqL1xuZXhwb3J0IGNvbnN0IG1pbGxpc2Vjb25kc0luSG91ciA9IDM2MDAwMDA7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtaWxsaXNlY29uZHNJblNlY29uZFxuICogQHN1bW1hcnkgTWlsbGlzZWNvbmRzIGluIDEgc2Vjb25kXG4gKi9cbmV4cG9ydCBjb25zdCBtaWxsaXNlY29uZHNJblNlY29uZCA9IDEwMDA7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtaW51dGVzSW5ZZWFyXG4gKiBAc3VtbWFyeSBNaW51dGVzIGluIDEgeWVhci5cbiAqL1xuZXhwb3J0IGNvbnN0IG1pbnV0ZXNJblllYXIgPSA1MjU2MDA7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtaW51dGVzSW5Nb250aFxuICogQHN1bW1hcnkgTWludXRlcyBpbiAxIG1vbnRoLlxuICovXG5leHBvcnQgY29uc3QgbWludXRlc0luTW9udGggPSA0MzIwMDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1pbnV0ZXNJbkRheVxuICogQHN1bW1hcnkgTWludXRlcyBpbiAxIGRheS5cbiAqL1xuZXhwb3J0IGNvbnN0IG1pbnV0ZXNJbkRheSA9IDE0NDA7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtaW51dGVzSW5Ib3VyXG4gKiBAc3VtbWFyeSBNaW51dGVzIGluIDEgaG91ci5cbiAqL1xuZXhwb3J0IGNvbnN0IG1pbnV0ZXNJbkhvdXIgPSA2MDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1vbnRoc0luUXVhcnRlclxuICogQHN1bW1hcnkgTW9udGhzIGluIDEgcXVhcnRlci5cbiAqL1xuZXhwb3J0IGNvbnN0IG1vbnRoc0luUXVhcnRlciA9IDM7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtb250aHNJblllYXJcbiAqIEBzdW1tYXJ5IE1vbnRocyBpbiAxIHllYXIuXG4gKi9cbmV4cG9ydCBjb25zdCBtb250aHNJblllYXIgPSAxMjtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIHF1YXJ0ZXJzSW5ZZWFyXG4gKiBAc3VtbWFyeSBRdWFydGVycyBpbiAxIHllYXJcbiAqL1xuZXhwb3J0IGNvbnN0IHF1YXJ0ZXJzSW5ZZWFyID0gNDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIHNlY29uZHNJbkhvdXJcbiAqIEBzdW1tYXJ5IFNlY29uZHMgaW4gMSBob3VyLlxuICovXG5leHBvcnQgY29uc3Qgc2Vjb25kc0luSG91ciA9IDM2MDA7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBzZWNvbmRzSW5NaW51dGVcbiAqIEBzdW1tYXJ5IFNlY29uZHMgaW4gMSBtaW51dGUuXG4gKi9cbmV4cG9ydCBjb25zdCBzZWNvbmRzSW5NaW51dGUgPSA2MDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIHNlY29uZHNJbkRheVxuICogQHN1bW1hcnkgU2Vjb25kcyBpbiAxIGRheS5cbiAqL1xuZXhwb3J0IGNvbnN0IHNlY29uZHNJbkRheSA9IHNlY29uZHNJbkhvdXIgKiAyNDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIHNlY29uZHNJbldlZWtcbiAqIEBzdW1tYXJ5IFNlY29uZHMgaW4gMSB3ZWVrLlxuICovXG5leHBvcnQgY29uc3Qgc2Vjb25kc0luV2VlayA9IHNlY29uZHNJbkRheSAqIDc7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBzZWNvbmRzSW5ZZWFyXG4gKiBAc3VtbWFyeSBTZWNvbmRzIGluIDEgeWVhci5cbiAqL1xuZXhwb3J0IGNvbnN0IHNlY29uZHNJblllYXIgPSBzZWNvbmRzSW5EYXkgKiBkYXlzSW5ZZWFyO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgc2Vjb25kc0luTW9udGhcbiAqIEBzdW1tYXJ5IFNlY29uZHMgaW4gMSBtb250aFxuICovXG5leHBvcnQgY29uc3Qgc2Vjb25kc0luTW9udGggPSBzZWNvbmRzSW5ZZWFyIC8gMTI7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBzZWNvbmRzSW5RdWFydGVyXG4gKiBAc3VtbWFyeSBTZWNvbmRzIGluIDEgcXVhcnRlci5cbiAqL1xuZXhwb3J0IGNvbnN0IHNlY29uZHNJblF1YXJ0ZXIgPSBzZWNvbmRzSW5Nb250aCAqIDM7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBjb25zdHJ1Y3RGcm9tU3ltYm9sXG4gKiBAc3VtbWFyeSBTeW1ib2wgZW5hYmxpbmcgRGF0ZSBleHRlbnNpb25zIHRvIGluaGVyaXQgcHJvcGVydGllcyBmcm9tIHRoZSByZWZlcmVuY2UgZGF0ZS5cbiAqXG4gKiBUaGUgc3ltYm9sIGlzIHVzZWQgdG8gZW5hYmxlIHRoZSBgY29uc3RydWN0RnJvbWAgZnVuY3Rpb24gdG8gY29uc3RydWN0IGEgZGF0ZVxuICogdXNpbmcgYSByZWZlcmVuY2UgZGF0ZSBhbmQgYSB2YWx1ZS4gSXQgYWxsb3dzIHRvIHRyYW5zZmVyIGV4dHJhIHByb3BlcnRpZXNcbiAqIGZyb20gdGhlIHJlZmVyZW5jZSBkYXRlIHRvIHRoZSBuZXcgZGF0ZS4gSXQncyB1c2VmdWwgZm9yIGV4dGVuc2lvbnMgbGlrZVxuICogW2BUWkRhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdHopIHRoYXQgYWNjZXB0IGEgdGltZSB6b25lIGFzXG4gKiBhIGNvbnN0cnVjdG9yIGFyZ3VtZW50LlxuICovXG5leHBvcnQgY29uc3QgY29uc3RydWN0RnJvbVN5bWJvbCA9IFN5bWJvbC5mb3IoXCJjb25zdHJ1Y3REYXRlRnJvbVwiKTtcbiIsImltcG9ydCB7IGNvbnN0cnVjdEZyb21TeW1ib2wgfSBmcm9tIFwiLi9jb25zdGFudHMuanNcIjtcblxuLyoqXG4gKiBAbmFtZSBjb25zdHJ1Y3RGcm9tXG4gKiBAY2F0ZWdvcnkgR2VuZXJpYyBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb25zdHJ1Y3RzIGEgZGF0ZSB1c2luZyB0aGUgcmVmZXJlbmNlIGRhdGUgYW5kIHRoZSB2YWx1ZVxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogVGhlIGZ1bmN0aW9uIGNvbnN0cnVjdHMgYSBuZXcgZGF0ZSB1c2luZyB0aGUgY29uc3RydWN0b3IgZnJvbSB0aGUgcmVmZXJlbmNlXG4gKiBkYXRlIGFuZCB0aGUgZ2l2ZW4gdmFsdWUuIEl0IGhlbHBzIHRvIGJ1aWxkIGdlbmVyaWMgZnVuY3Rpb25zIHRoYXQgYWNjZXB0XG4gKiBkYXRlIGV4dGVuc2lvbnMuXG4gKlxuICogSXQgZGVmYXVsdHMgdG8gYERhdGVgIGlmIHRoZSBwYXNzZWQgcmVmZXJlbmNlIGRhdGUgaXMgYSBudW1iZXIgb3IgYSBzdHJpbmcuXG4gKlxuICogU3RhcnRpbmcgZnJvbSB2My43LjAsIGl0IGFsbG93cyB0byBjb25zdHJ1Y3QgYSBkYXRlIHVzaW5nIGBbU3ltYm9sLmZvcihcImNvbnN0cnVjdERhdGVGcm9tXCIpXWBcbiAqIGVuYWJsaW5nIHRvIHRyYW5zZmVyIGV4dHJhIHByb3BlcnRpZXMgZnJvbSB0aGUgcmVmZXJlbmNlIGRhdGUgdG8gdGhlIG5ldyBkYXRlLlxuICogSXQncyB1c2VmdWwgZm9yIGV4dGVuc2lvbnMgbGlrZSBbYFRaRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy90eilcbiAqIHRoYXQgYWNjZXB0IGEgdGltZSB6b25lIGFzIGEgY29uc3RydWN0b3IgYXJndW1lbnQuXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgcmVmZXJlbmNlIGRhdGUgdG8gdGFrZSBjb25zdHJ1Y3RvciBmcm9tXG4gKiBAcGFyYW0gdmFsdWUgLSBUaGUgdmFsdWUgdG8gY3JlYXRlIHRoZSBkYXRlXG4gKlxuICogQHJldHVybnMgRGF0ZSBpbml0aWFsaXplZCB1c2luZyB0aGUgZ2l2ZW4gZGF0ZSBhbmQgdmFsdWVcbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgY29uc3RydWN0RnJvbSB9IGZyb20gXCIuL2NvbnN0cnVjdEZyb20vZGF0ZS1mbnNcIjtcbiAqXG4gKiAvLyBBIGZ1bmN0aW9uIHRoYXQgY2xvbmVzIGEgZGF0ZSBwcmVzZXJ2aW5nIHRoZSBvcmlnaW5hbCB0eXBlXG4gKiBmdW5jdGlvbiBjbG9uZURhdGU8RGF0ZVR5cGUgZXh0ZW5kcyBEYXRlPihkYXRlOiBEYXRlVHlwZSk6IERhdGVUeXBlIHtcbiAqICAgcmV0dXJuIGNvbnN0cnVjdEZyb20oXG4gKiAgICAgZGF0ZSwgLy8gVXNlIGNvbnN0cnVjdG9yIGZyb20gdGhlIGdpdmVuIGRhdGVcbiAqICAgICBkYXRlLmdldFRpbWUoKSAvLyBVc2UgdGhlIGRhdGUgdmFsdWUgdG8gY3JlYXRlIGEgbmV3IGRhdGVcbiAqICAgKTtcbiAqIH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbnN0cnVjdEZyb20oZGF0ZSwgdmFsdWUpIHtcbiAgaWYgKHR5cGVvZiBkYXRlID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBkYXRlKHZhbHVlKTtcblxuICBpZiAoZGF0ZSAmJiB0eXBlb2YgZGF0ZSA9PT0gXCJvYmplY3RcIiAmJiBjb25zdHJ1Y3RGcm9tU3ltYm9sIGluIGRhdGUpXG4gICAgcmV0dXJuIGRhdGVbY29uc3RydWN0RnJvbVN5bWJvbF0odmFsdWUpO1xuXG4gIGlmIChkYXRlIGluc3RhbmNlb2YgRGF0ZSkgcmV0dXJuIG5ldyBkYXRlLmNvbnN0cnVjdG9yKHZhbHVlKTtcblxuICByZXR1cm4gbmV3IERhdGUodmFsdWUpO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGNvbnN0cnVjdEZyb207XG4iLCJpbXBvcnQgeyBjb25zdHJ1Y3RGcm9tIH0gZnJvbSBcIi4vY29uc3RydWN0RnJvbS5qc1wiO1xuXG4vKipcbiAqIEBuYW1lIGNvbnN0cnVjdE5vd1xuICogQGNhdGVnb3J5IEdlbmVyaWMgSGVscGVyc1xuICogQHN1bW1hcnkgQ29uc3RydWN0cyBhIG5ldyBjdXJyZW50IGRhdGUgdXNpbmcgdGhlIHBhc3NlZCB2YWx1ZSBjb25zdHJ1Y3Rvci5cbiAqIEBwdXJlIGZhbHNlXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBUaGUgZnVuY3Rpb24gY29uc3RydWN0cyBhIG5ldyBjdXJyZW50IGRhdGUgdXNpbmcgdGhlIGNvbnN0cnVjdG9yIGZyb21cbiAqIHRoZSByZWZlcmVuY2UgZGF0ZS4gSXQgaGVscHMgdG8gYnVpbGQgZ2VuZXJpYyBmdW5jdGlvbnMgdGhhdCBhY2NlcHQgZGF0ZVxuICogZXh0ZW5zaW9ucyBhbmQgdXNlIHRoZSBjdXJyZW50IGRhdGUuXG4gKlxuICogSXQgZGVmYXVsdHMgdG8gYERhdGVgIGlmIHRoZSBwYXNzZWQgcmVmZXJlbmNlIGRhdGUgaXMgYSBudW1iZXIgb3IgYSBzdHJpbmcuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgcmVmZXJlbmNlIGRhdGUgdG8gdGFrZSBjb25zdHJ1Y3RvciBmcm9tXG4gKlxuICogQHJldHVybnMgQ3VycmVudCBkYXRlIGluaXRpYWxpemVkIHVzaW5nIHRoZSBnaXZlbiBkYXRlIGNvbnN0cnVjdG9yXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IGNvbnN0cnVjdE5vdywgaXNTYW1lRGF5IH0gZnJvbSAnZGF0ZS1mbnMnXG4gKlxuICogZnVuY3Rpb24gaXNUb2RheTxEYXRlVHlwZSBleHRlbmRzIERhdGU+KFxuICogICBkYXRlOiBEYXRlQXJnPERhdGVUeXBlPixcbiAqICk6IGJvb2xlYW4ge1xuICogICAvLyBJZiB3ZSB3ZXJlIHRvIHVzZSBgbmV3IERhdGUoKWAgZGlyZWN0bHksIHRoZSBmdW5jdGlvbiB3b3VsZCAgYmVoYXZlXG4gKiAgIC8vIGRpZmZlcmVudGx5IGluIGRpZmZlcmVudCB0aW1lem9uZXMgYW5kIHJldHVybiBmYWxzZSBmb3IgdGhlIHNhbWUgZGF0ZS5cbiAqICAgcmV0dXJuIGlzU2FtZURheShkYXRlLCBjb25zdHJ1Y3ROb3coZGF0ZSkpO1xuICogfVxuICovXG5leHBvcnQgZnVuY3Rpb24gY29uc3RydWN0Tm93KGRhdGUpIHtcbiAgcmV0dXJuIGNvbnN0cnVjdEZyb20oZGF0ZSwgRGF0ZS5ub3coKSk7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgY29uc3RydWN0Tm93O1xuIiwiaW1wb3J0IHsgdG9EYXRlIH0gZnJvbSBcIi4vdG9EYXRlLmpzXCI7XG5cbi8qKlxuICogQG5hbWUgaXNGdXR1cmVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIGRhdGUgaW4gdGhlIGZ1dHVyZT9cbiAqIEBwdXJlIGZhbHNlXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBJcyB0aGUgZ2l2ZW4gZGF0ZSBpbiB0aGUgZnV0dXJlP1xuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIGRhdGUgdG8gY2hlY2tcbiAqXG4gKiBAcmV0dXJucyBUaGUgZGF0ZSBpcyBpbiB0aGUgZnV0dXJlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRvZGF5IGlzIDYgT2N0b2JlciAyMDE0LCBpcyAzMSBEZWNlbWJlciAyMDE0IGluIHRoZSBmdXR1cmU/XG4gKiBjb25zdCByZXN1bHQgPSBpc0Z1dHVyZShuZXcgRGF0ZSgyMDE0LCAxMSwgMzEpKVxuICogLy89PiB0cnVlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0Z1dHVyZShkYXRlKSB7XG4gIHJldHVybiArdG9EYXRlKGRhdGUpID4gRGF0ZS5ub3coKTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBpc0Z1dHVyZTtcbiIsImltcG9ydCB7IG5vcm1hbGl6ZURhdGVzIH0gZnJvbSBcIi4vX2xpYi9ub3JtYWxpemVEYXRlcy5qc1wiO1xuaW1wb3J0IHsgc3RhcnRPZkRheSB9IGZyb20gXCIuL3N0YXJ0T2ZEYXkuanNcIjtcblxuLyoqXG4gKiBUaGUge0BsaW5rIGlzU2FtZURheX0gZnVuY3Rpb24gb3B0aW9ucy5cbiAqL1xuXG4vKipcbiAqIEBuYW1lIGlzU2FtZURheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIGRheSAoYW5kIHllYXIgYW5kIG1vbnRoKT9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgZGF5IChhbmQgeWVhciBhbmQgbW9udGgpP1xuICpcbiAqIEBwYXJhbSBsYXRlckRhdGUgLSBUaGUgZmlyc3QgZGF0ZSB0byBjaGVja1xuICogQHBhcmFtIGVhcmxpZXJEYXRlIC0gVGhlIHNlY29uZCBkYXRlIHRvIGNoZWNrXG4gKiBAcGFyYW0gb3B0aW9ucyAtIEFuIG9iamVjdCB3aXRoIG9wdGlvbnNcbiAqXG4gKiBAcmV0dXJucyBUaGUgZGF0ZXMgYXJlIGluIHRoZSBzYW1lIGRheSAoYW5kIHllYXIgYW5kIG1vbnRoKVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgNCBTZXB0ZW1iZXIgMDY6MDA6MDAgYW5kIDQgU2VwdGVtYmVyIDE4OjAwOjAwIGluIHRoZSBzYW1lIGRheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZURheShuZXcgRGF0ZSgyMDE0LCA4LCA0LCA2LCAwKSwgbmV3IERhdGUoMjAxNCwgOCwgNCwgMTgsIDApKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSA0IFNlcHRlbWJlciBhbmQgNCBPY3RvYmVyIGluIHRoZSBzYW1lIGRheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZURheShuZXcgRGF0ZSgyMDE0LCA4LCA0KSwgbmV3IERhdGUoMjAxNCwgOSwgNCkpXG4gKiAvLz0+IGZhbHNlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSA0IFNlcHRlbWJlciwgMjAxNCBhbmQgNCBTZXB0ZW1iZXIsIDIwMTUgaW4gdGhlIHNhbWUgZGF5P1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDQpLCBuZXcgRGF0ZSgyMDE1LCA4LCA0KSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzU2FtZURheShsYXRlckRhdGUsIGVhcmxpZXJEYXRlLCBvcHRpb25zKSB7XG4gIGNvbnN0IFtkYXRlTGVmdF8sIGRhdGVSaWdodF9dID0gbm9ybWFsaXplRGF0ZXMoXG4gICAgb3B0aW9ucz8uaW4sXG4gICAgbGF0ZXJEYXRlLFxuICAgIGVhcmxpZXJEYXRlLFxuICApO1xuICByZXR1cm4gK3N0YXJ0T2ZEYXkoZGF0ZUxlZnRfKSA9PT0gK3N0YXJ0T2ZEYXkoZGF0ZVJpZ2h0Xyk7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgaXNTYW1lRGF5O1xuIiwiaW1wb3J0IHsgY29uc3RydWN0RnJvbSB9IGZyb20gXCIuL2NvbnN0cnVjdEZyb20uanNcIjtcbmltcG9ydCB7IGNvbnN0cnVjdE5vdyB9IGZyb20gXCIuL2NvbnN0cnVjdE5vdy5qc1wiO1xuaW1wb3J0IHsgaXNTYW1lRGF5IH0gZnJvbSBcIi4vaXNTYW1lRGF5LmpzXCI7XG5cbi8qKlxuICogVGhlIHtAbGluayBpc1RvZGF5fSBmdW5jdGlvbiBvcHRpb25zLlxuICovXG5cbi8qKlxuICogQG5hbWUgaXNUb2RheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gZGF0ZSB0b2RheT9cbiAqIEBwdXJlIGZhbHNlXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBJcyB0aGUgZ2l2ZW4gZGF0ZSB0b2RheT9cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBkYXRlIHRvIGNoZWNrXG4gKiBAcGFyYW0gb3B0aW9ucyAtIEFuIG9iamVjdCB3aXRoIG9wdGlvbnNcbiAqXG4gKiBAcmV0dXJucyBUaGUgZGF0ZSBpcyB0b2RheVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0b2RheSBpcyA2IE9jdG9iZXIgMjAxNCwgaXMgNiBPY3RvYmVyIDE0OjAwOjAwIHRvZGF5P1xuICogY29uc3QgcmVzdWx0ID0gaXNUb2RheShuZXcgRGF0ZSgyMDE0LCA5LCA2LCAxNCwgMCkpXG4gKiAvLz0+IHRydWVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzVG9kYXkoZGF0ZSwgb3B0aW9ucykge1xuICByZXR1cm4gaXNTYW1lRGF5KFxuICAgIGNvbnN0cnVjdEZyb20ob3B0aW9ucz8uaW4gfHwgZGF0ZSwgZGF0ZSksXG4gICAgY29uc3RydWN0Tm93KG9wdGlvbnM/LmluIHx8IGRhdGUpLFxuICApO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGlzVG9kYXk7XG4iLCJpbXBvcnQge1xuICBtaWxsaXNlY29uZHNJbkhvdXIsXG4gIG1pbGxpc2Vjb25kc0luTWludXRlLFxufSBmcm9tIFwiLi9jb25zdGFudHMuanNcIjtcbmltcG9ydCB7IGNvbnN0cnVjdEZyb20gfSBmcm9tIFwiLi9jb25zdHJ1Y3RGcm9tLmpzXCI7XG5pbXBvcnQgeyB0b0RhdGUgfSBmcm9tIFwiLi90b0RhdGUuanNcIjtcblxuLyoqXG4gKiBUaGUge0BsaW5rIHBhcnNlSVNPfSBmdW5jdGlvbiBvcHRpb25zLlxuICovXG5cbi8qKlxuICogQG5hbWUgcGFyc2VJU09cbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgUGFyc2UgSVNPIHN0cmluZ1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUGFyc2UgdGhlIGdpdmVuIHN0cmluZyBpbiBJU08gODYwMSBmb3JtYXQgYW5kIHJldHVybiBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIEZ1bmN0aW9uIGFjY2VwdHMgY29tcGxldGUgSVNPIDg2MDEgZm9ybWF0cyBhcyB3ZWxsIGFzIHBhcnRpYWwgaW1wbGVtZW50YXRpb25zLlxuICogSVNPIDg2MDE6IGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSVNPXzg2MDFcbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXNuJ3QgYSBzdHJpbmcsIHRoZSBmdW5jdGlvbiBjYW5ub3QgcGFyc2UgdGhlIHN0cmluZyBvclxuICogdGhlIHZhbHVlcyBhcmUgaW52YWxpZCwgaXQgcmV0dXJucyBJbnZhbGlkIERhdGUuXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKiBAdHlwZVBhcmFtIFJlc3VsdERhdGUgLSBUaGUgcmVzdWx0IGBEYXRlYCB0eXBlLCBpdCBpcyB0aGUgdHlwZSByZXR1cm5lZCBmcm9tIHRoZSBjb250ZXh0IGZ1bmN0aW9uIGlmIGl0IGlzIHBhc3NlZCwgb3IgaW5mZXJyZWQgZnJvbSB0aGUgYXJndW1lbnRzLlxuICpcbiAqIEBwYXJhbSBhcmd1bWVudCAtIFRoZSB2YWx1ZSB0byBjb252ZXJ0XG4gKiBAcGFyYW0gb3B0aW9ucyAtIEFuIG9iamVjdCB3aXRoIG9wdGlvbnNcbiAqXG4gKiBAcmV0dXJucyBUaGUgcGFyc2VkIGRhdGUgaW4gdGhlIGxvY2FsIHRpbWUgem9uZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHN0cmluZyAnMjAxNC0wMi0xMVQxMTozMDozMCcgdG8gZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHBhcnNlSVNPKCcyMDE0LTAyLTExVDExOjMwOjMwJylcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgc3RyaW5nICcrMDIwMTQxMDEnIHRvIGRhdGUsXG4gKiAvLyBpZiB0aGUgYWRkaXRpb25hbCBudW1iZXIgb2YgZGlnaXRzIGluIHRoZSBleHRlbmRlZCB5ZWFyIGZvcm1hdCBpcyAxOlxuICogY29uc3QgcmVzdWx0ID0gcGFyc2VJU08oJyswMjAxNDEwMScsIHsgYWRkaXRpb25hbERpZ2l0czogMSB9KVxuICogLy89PiBGcmkgQXByIDExIDIwMTQgMDA6MDA6MDBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlSVNPKGFyZ3VtZW50LCBvcHRpb25zKSB7XG4gIGNvbnN0IGludmFsaWREYXRlID0gKCkgPT4gY29uc3RydWN0RnJvbShvcHRpb25zPy5pbiwgTmFOKTtcblxuICBjb25zdCBhZGRpdGlvbmFsRGlnaXRzID0gb3B0aW9ucz8uYWRkaXRpb25hbERpZ2l0cyA/PyAyO1xuICBjb25zdCBkYXRlU3RyaW5ncyA9IHNwbGl0RGF0ZVN0cmluZyhhcmd1bWVudCk7XG5cbiAgbGV0IGRhdGU7XG4gIGlmIChkYXRlU3RyaW5ncy5kYXRlKSB7XG4gICAgY29uc3QgcGFyc2VZZWFyUmVzdWx0ID0gcGFyc2VZZWFyKGRhdGVTdHJpbmdzLmRhdGUsIGFkZGl0aW9uYWxEaWdpdHMpO1xuICAgIGRhdGUgPSBwYXJzZURhdGUocGFyc2VZZWFyUmVzdWx0LnJlc3REYXRlU3RyaW5nLCBwYXJzZVllYXJSZXN1bHQueWVhcik7XG4gIH1cblxuICBpZiAoIWRhdGUgfHwgaXNOYU4oK2RhdGUpKSByZXR1cm4gaW52YWxpZERhdGUoKTtcblxuICBjb25zdCB0aW1lc3RhbXAgPSArZGF0ZTtcbiAgbGV0IHRpbWUgPSAwO1xuICBsZXQgb2Zmc2V0O1xuXG4gIGlmIChkYXRlU3RyaW5ncy50aW1lKSB7XG4gICAgdGltZSA9IHBhcnNlVGltZShkYXRlU3RyaW5ncy50aW1lKTtcbiAgICBpZiAoaXNOYU4odGltZSkpIHJldHVybiBpbnZhbGlkRGF0ZSgpO1xuICB9XG5cbiAgaWYgKGRhdGVTdHJpbmdzLnRpbWV6b25lKSB7XG4gICAgb2Zmc2V0ID0gcGFyc2VUaW1lem9uZShkYXRlU3RyaW5ncy50aW1lem9uZSk7XG4gICAgaWYgKGlzTmFOKG9mZnNldCkpIHJldHVybiBpbnZhbGlkRGF0ZSgpO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IHRtcERhdGUgPSBuZXcgRGF0ZSh0aW1lc3RhbXAgKyB0aW1lKTtcbiAgICBjb25zdCByZXN1bHQgPSB0b0RhdGUoMCwgb3B0aW9ucz8uaW4pO1xuICAgIHJlc3VsdC5zZXRGdWxsWWVhcihcbiAgICAgIHRtcERhdGUuZ2V0VVRDRnVsbFllYXIoKSxcbiAgICAgIHRtcERhdGUuZ2V0VVRDTW9udGgoKSxcbiAgICAgIHRtcERhdGUuZ2V0VVRDRGF0ZSgpLFxuICAgICk7XG4gICAgcmVzdWx0LnNldEhvdXJzKFxuICAgICAgdG1wRGF0ZS5nZXRVVENIb3VycygpLFxuICAgICAgdG1wRGF0ZS5nZXRVVENNaW51dGVzKCksXG4gICAgICB0bXBEYXRlLmdldFVUQ1NlY29uZHMoKSxcbiAgICAgIHRtcERhdGUuZ2V0VVRDTWlsbGlzZWNvbmRzKCksXG4gICAgKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgcmV0dXJuIHRvRGF0ZSh0aW1lc3RhbXAgKyB0aW1lICsgb2Zmc2V0LCBvcHRpb25zPy5pbik7XG59XG5cbmNvbnN0IHBhdHRlcm5zID0ge1xuICBkYXRlVGltZURlbGltaXRlcjogL1tUIF0vLFxuICB0aW1lWm9uZURlbGltaXRlcjogL1taIF0vaSxcbiAgdGltZXpvbmU6IC8oW1orLV0uKikkLyxcbn07XG5cbmNvbnN0IGRhdGVSZWdleCA9XG4gIC9eLT8oPzooXFxkezN9KXwoXFxkezJ9KSg/Oi0/KFxcZHsyfSkpP3xXKFxcZHsyfSkoPzotPyhcXGR7MX0pKT98KSQvO1xuY29uc3QgdGltZVJlZ2V4ID1cbiAgL14oXFxkezJ9KD86Wy4sXVxcZCopPykoPzo6PyhcXGR7Mn0oPzpbLixdXFxkKik/KSk/KD86Oj8oXFxkezJ9KD86Wy4sXVxcZCopPykpPyQvO1xuY29uc3QgdGltZXpvbmVSZWdleCA9IC9eKFsrLV0pKFxcZHsyfSkoPzo6PyhcXGR7Mn0pKT8kLztcblxuZnVuY3Rpb24gc3BsaXREYXRlU3RyaW5nKGRhdGVTdHJpbmcpIHtcbiAgY29uc3QgZGF0ZVN0cmluZ3MgPSB7fTtcbiAgY29uc3QgYXJyYXkgPSBkYXRlU3RyaW5nLnNwbGl0KHBhdHRlcm5zLmRhdGVUaW1lRGVsaW1pdGVyKTtcbiAgbGV0IHRpbWVTdHJpbmc7XG5cbiAgLy8gVGhlIHJlZ2V4IG1hdGNoIHNob3VsZCBvbmx5IHJldHVybiBhdCBtYXhpbXVtIHR3byBhcnJheSBlbGVtZW50cy5cbiAgLy8gW2RhdGVdLCBbdGltZV0sIG9yIFtkYXRlLCB0aW1lXS5cbiAgaWYgKGFycmF5Lmxlbmd0aCA+IDIpIHtcbiAgICByZXR1cm4gZGF0ZVN0cmluZ3M7XG4gIH1cblxuICBpZiAoLzovLnRlc3QoYXJyYXlbMF0pKSB7XG4gICAgdGltZVN0cmluZyA9IGFycmF5WzBdO1xuICB9IGVsc2Uge1xuICAgIGRhdGVTdHJpbmdzLmRhdGUgPSBhcnJheVswXTtcbiAgICB0aW1lU3RyaW5nID0gYXJyYXlbMV07XG4gICAgaWYgKHBhdHRlcm5zLnRpbWVab25lRGVsaW1pdGVyLnRlc3QoZGF0ZVN0cmluZ3MuZGF0ZSkpIHtcbiAgICAgIGRhdGVTdHJpbmdzLmRhdGUgPSBkYXRlU3RyaW5nLnNwbGl0KHBhdHRlcm5zLnRpbWVab25lRGVsaW1pdGVyKVswXTtcbiAgICAgIHRpbWVTdHJpbmcgPSBkYXRlU3RyaW5nLnN1YnN0cihcbiAgICAgICAgZGF0ZVN0cmluZ3MuZGF0ZS5sZW5ndGgsXG4gICAgICAgIGRhdGVTdHJpbmcubGVuZ3RoLFxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBpZiAodGltZVN0cmluZykge1xuICAgIGNvbnN0IHRva2VuID0gcGF0dGVybnMudGltZXpvbmUuZXhlYyh0aW1lU3RyaW5nKTtcbiAgICBpZiAodG9rZW4pIHtcbiAgICAgIGRhdGVTdHJpbmdzLnRpbWUgPSB0aW1lU3RyaW5nLnJlcGxhY2UodG9rZW5bMV0sIFwiXCIpO1xuICAgICAgZGF0ZVN0cmluZ3MudGltZXpvbmUgPSB0b2tlblsxXTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGF0ZVN0cmluZ3MudGltZSA9IHRpbWVTdHJpbmc7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGRhdGVTdHJpbmdzO1xufVxuXG5mdW5jdGlvbiBwYXJzZVllYXIoZGF0ZVN0cmluZywgYWRkaXRpb25hbERpZ2l0cykge1xuICBjb25zdCByZWdleCA9IG5ldyBSZWdFeHAoXG4gICAgXCJeKD86KFxcXFxkezR9fFsrLV1cXFxcZHtcIiArXG4gICAgICAoNCArIGFkZGl0aW9uYWxEaWdpdHMpICtcbiAgICAgIFwifSl8KFxcXFxkezJ9fFsrLV1cXFxcZHtcIiArXG4gICAgICAoMiArIGFkZGl0aW9uYWxEaWdpdHMpICtcbiAgICAgIFwifSkkKVwiLFxuICApO1xuXG4gIGNvbnN0IGNhcHR1cmVzID0gZGF0ZVN0cmluZy5tYXRjaChyZWdleCk7XG4gIC8vIEludmFsaWQgSVNPLWZvcm1hdHRlZCB5ZWFyXG4gIGlmICghY2FwdHVyZXMpIHJldHVybiB7IHllYXI6IE5hTiwgcmVzdERhdGVTdHJpbmc6IFwiXCIgfTtcblxuICBjb25zdCB5ZWFyID0gY2FwdHVyZXNbMV0gPyBwYXJzZUludChjYXB0dXJlc1sxXSkgOiBudWxsO1xuICBjb25zdCBjZW50dXJ5ID0gY2FwdHVyZXNbMl0gPyBwYXJzZUludChjYXB0dXJlc1syXSkgOiBudWxsO1xuXG4gIC8vIGVpdGhlciB5ZWFyIG9yIGNlbnR1cnkgaXMgbnVsbCwgbm90IGJvdGhcbiAgcmV0dXJuIHtcbiAgICB5ZWFyOiBjZW50dXJ5ID09PSBudWxsID8geWVhciA6IGNlbnR1cnkgKiAxMDAsXG4gICAgcmVzdERhdGVTdHJpbmc6IGRhdGVTdHJpbmcuc2xpY2UoKGNhcHR1cmVzWzFdIHx8IGNhcHR1cmVzWzJdKS5sZW5ndGgpLFxuICB9O1xufVxuXG5mdW5jdGlvbiBwYXJzZURhdGUoZGF0ZVN0cmluZywgeWVhcikge1xuICAvLyBJbnZhbGlkIElTTy1mb3JtYXR0ZWQgeWVhclxuICBpZiAoeWVhciA9PT0gbnVsbCkgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG5cbiAgY29uc3QgY2FwdHVyZXMgPSBkYXRlU3RyaW5nLm1hdGNoKGRhdGVSZWdleCk7XG4gIC8vIEludmFsaWQgSVNPLWZvcm1hdHRlZCBzdHJpbmdcbiAgaWYgKCFjYXB0dXJlcykgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG5cbiAgY29uc3QgaXNXZWVrRGF0ZSA9ICEhY2FwdHVyZXNbNF07XG4gIGNvbnN0IGRheU9mWWVhciA9IHBhcnNlRGF0ZVVuaXQoY2FwdHVyZXNbMV0pO1xuICBjb25zdCBtb250aCA9IHBhcnNlRGF0ZVVuaXQoY2FwdHVyZXNbMl0pIC0gMTtcbiAgY29uc3QgZGF5ID0gcGFyc2VEYXRlVW5pdChjYXB0dXJlc1szXSk7XG4gIGNvbnN0IHdlZWsgPSBwYXJzZURhdGVVbml0KGNhcHR1cmVzWzRdKTtcbiAgY29uc3QgZGF5T2ZXZWVrID0gcGFyc2VEYXRlVW5pdChjYXB0dXJlc1s1XSkgLSAxO1xuXG4gIGlmIChpc1dlZWtEYXRlKSB7XG4gICAgaWYgKCF2YWxpZGF0ZVdlZWtEYXRlKHllYXIsIHdlZWssIGRheU9mV2VlaykpIHtcbiAgICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICAgIH1cbiAgICByZXR1cm4gZGF5T2ZJU09XZWVrWWVhcih5ZWFyLCB3ZWVrLCBkYXlPZldlZWspO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgwKTtcbiAgICBpZiAoXG4gICAgICAhdmFsaWRhdGVEYXRlKHllYXIsIG1vbnRoLCBkYXkpIHx8XG4gICAgICAhdmFsaWRhdGVEYXlPZlllYXJEYXRlKHllYXIsIGRheU9mWWVhcilcbiAgICApIHtcbiAgICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICAgIH1cbiAgICBkYXRlLnNldFVUQ0Z1bGxZZWFyKHllYXIsIG1vbnRoLCBNYXRoLm1heChkYXlPZlllYXIsIGRheSkpO1xuICAgIHJldHVybiBkYXRlO1xuICB9XG59XG5cbmZ1bmN0aW9uIHBhcnNlRGF0ZVVuaXQodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlID8gcGFyc2VJbnQodmFsdWUpIDogMTtcbn1cblxuZnVuY3Rpb24gcGFyc2VUaW1lKHRpbWVTdHJpbmcpIHtcbiAgY29uc3QgY2FwdHVyZXMgPSB0aW1lU3RyaW5nLm1hdGNoKHRpbWVSZWdleCk7XG4gIGlmICghY2FwdHVyZXMpIHJldHVybiBOYU47IC8vIEludmFsaWQgSVNPLWZvcm1hdHRlZCB0aW1lXG5cbiAgY29uc3QgaG91cnMgPSBwYXJzZVRpbWVVbml0KGNhcHR1cmVzWzFdKTtcbiAgY29uc3QgbWludXRlcyA9IHBhcnNlVGltZVVuaXQoY2FwdHVyZXNbMl0pO1xuICBjb25zdCBzZWNvbmRzID0gcGFyc2VUaW1lVW5pdChjYXB0dXJlc1szXSk7XG5cbiAgaWYgKCF2YWxpZGF0ZVRpbWUoaG91cnMsIG1pbnV0ZXMsIHNlY29uZHMpKSB7XG4gICAgcmV0dXJuIE5hTjtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgaG91cnMgKiBtaWxsaXNlY29uZHNJbkhvdXIgKyBtaW51dGVzICogbWlsbGlzZWNvbmRzSW5NaW51dGUgKyBzZWNvbmRzICogMTAwMFxuICApO1xufVxuXG5mdW5jdGlvbiBwYXJzZVRpbWVVbml0KHZhbHVlKSB7XG4gIHJldHVybiAodmFsdWUgJiYgcGFyc2VGbG9hdCh2YWx1ZS5yZXBsYWNlKFwiLFwiLCBcIi5cIikpKSB8fCAwO1xufVxuXG5mdW5jdGlvbiBwYXJzZVRpbWV6b25lKHRpbWV6b25lU3RyaW5nKSB7XG4gIGlmICh0aW1lem9uZVN0cmluZyA9PT0gXCJaXCIpIHJldHVybiAwO1xuXG4gIGNvbnN0IGNhcHR1cmVzID0gdGltZXpvbmVTdHJpbmcubWF0Y2godGltZXpvbmVSZWdleCk7XG4gIGlmICghY2FwdHVyZXMpIHJldHVybiAwO1xuXG4gIGNvbnN0IHNpZ24gPSBjYXB0dXJlc1sxXSA9PT0gXCIrXCIgPyAtMSA6IDE7XG4gIGNvbnN0IGhvdXJzID0gcGFyc2VJbnQoY2FwdHVyZXNbMl0pO1xuICBjb25zdCBtaW51dGVzID0gKGNhcHR1cmVzWzNdICYmIHBhcnNlSW50KGNhcHR1cmVzWzNdKSkgfHwgMDtcblxuICBpZiAoIXZhbGlkYXRlVGltZXpvbmUoaG91cnMsIG1pbnV0ZXMpKSB7XG4gICAgcmV0dXJuIE5hTjtcbiAgfVxuXG4gIHJldHVybiBzaWduICogKGhvdXJzICogbWlsbGlzZWNvbmRzSW5Ib3VyICsgbWludXRlcyAqIG1pbGxpc2Vjb25kc0luTWludXRlKTtcbn1cblxuZnVuY3Rpb24gZGF5T2ZJU09XZWVrWWVhcihpc29XZWVrWWVhciwgd2VlaywgZGF5KSB7XG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgwKTtcbiAgZGF0ZS5zZXRVVENGdWxsWWVhcihpc29XZWVrWWVhciwgMCwgNCk7XG4gIGNvbnN0IGZvdXJ0aE9mSmFudWFyeURheSA9IGRhdGUuZ2V0VVRDRGF5KCkgfHwgNztcbiAgY29uc3QgZGlmZiA9ICh3ZWVrIC0gMSkgKiA3ICsgZGF5ICsgMSAtIGZvdXJ0aE9mSmFudWFyeURheTtcbiAgZGF0ZS5zZXRVVENEYXRlKGRhdGUuZ2V0VVRDRGF0ZSgpICsgZGlmZik7XG4gIHJldHVybiBkYXRlO1xufVxuXG4vLyBWYWxpZGF0aW9uIGZ1bmN0aW9uc1xuXG4vLyBGZWJydWFyeSBpcyBudWxsIHRvIGhhbmRsZSB0aGUgbGVhcCB5ZWFyICh1c2luZyB8fClcbmNvbnN0IGRheXNJbk1vbnRocyA9IFszMSwgbnVsbCwgMzEsIDMwLCAzMSwgMzAsIDMxLCAzMSwgMzAsIDMxLCAzMCwgMzFdO1xuXG5mdW5jdGlvbiBpc0xlYXBZZWFySW5kZXgoeWVhcikge1xuICByZXR1cm4geWVhciAlIDQwMCA9PT0gMCB8fCAoeWVhciAlIDQgPT09IDAgJiYgeWVhciAlIDEwMCAhPT0gMCk7XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlRGF0ZSh5ZWFyLCBtb250aCwgZGF0ZSkge1xuICByZXR1cm4gKFxuICAgIG1vbnRoID49IDAgJiZcbiAgICBtb250aCA8PSAxMSAmJlxuICAgIGRhdGUgPj0gMSAmJlxuICAgIGRhdGUgPD0gKGRheXNJbk1vbnRoc1ttb250aF0gfHwgKGlzTGVhcFllYXJJbmRleCh5ZWFyKSA/IDI5IDogMjgpKVxuICApO1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZURheU9mWWVhckRhdGUoeWVhciwgZGF5T2ZZZWFyKSB7XG4gIHJldHVybiBkYXlPZlllYXIgPj0gMSAmJiBkYXlPZlllYXIgPD0gKGlzTGVhcFllYXJJbmRleCh5ZWFyKSA/IDM2NiA6IDM2NSk7XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlV2Vla0RhdGUoX3llYXIsIHdlZWssIGRheSkge1xuICByZXR1cm4gd2VlayA+PSAxICYmIHdlZWsgPD0gNTMgJiYgZGF5ID49IDAgJiYgZGF5IDw9IDY7XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlVGltZShob3VycywgbWludXRlcywgc2Vjb25kcykge1xuICBpZiAoaG91cnMgPT09IDI0KSB7XG4gICAgcmV0dXJuIG1pbnV0ZXMgPT09IDAgJiYgc2Vjb25kcyA9PT0gMDtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgc2Vjb25kcyA+PSAwICYmXG4gICAgc2Vjb25kcyA8IDYwICYmXG4gICAgbWludXRlcyA+PSAwICYmXG4gICAgbWludXRlcyA8IDYwICYmXG4gICAgaG91cnMgPj0gMCAmJlxuICAgIGhvdXJzIDwgMjVcbiAgKTtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVUaW1lem9uZShfaG91cnMsIG1pbnV0ZXMpIHtcbiAgcmV0dXJuIG1pbnV0ZXMgPj0gMCAmJiBtaW51dGVzIDw9IDU5O1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IHBhcnNlSVNPO1xuIiwiaW1wb3J0IHsgdG9EYXRlIH0gZnJvbSBcIi4vdG9EYXRlLmpzXCI7XG5cbi8qKlxuICogVGhlIHtAbGluayBzdGFydE9mRGF5fSBmdW5jdGlvbiBvcHRpb25zLlxuICovXG5cbi8qKlxuICogQG5hbWUgc3RhcnRPZkRheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgZGF5IGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgc3RhcnQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqIEB0eXBlUGFyYW0gUmVzdWx0RGF0ZSAtIFRoZSByZXN1bHQgYERhdGVgIHR5cGUsIGl0IGlzIHRoZSB0eXBlIHJldHVybmVkIGZyb20gdGhlIGNvbnRleHQgZnVuY3Rpb24gaWYgaXQgaXMgcGFzc2VkLCBvciBpbmZlcnJlZCBmcm9tIHRoZSBhcmd1bWVudHMuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgb3JpZ2luYWwgZGF0ZVxuICogQHBhcmFtIG9wdGlvbnMgLSBUaGUgb3B0aW9uc1xuICpcbiAqIEByZXR1cm5zIFRoZSBzdGFydCBvZiBhIGRheVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYSBkYXkgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCkpXG4gKiAvLz0+IFR1ZSBTZXAgMDIgMjAxNCAwMDowMDowMFxuICovXG5leHBvcnQgZnVuY3Rpb24gc3RhcnRPZkRheShkYXRlLCBvcHRpb25zKSB7XG4gIGNvbnN0IF9kYXRlID0gdG9EYXRlKGRhdGUsIG9wdGlvbnM/LmluKTtcbiAgX2RhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBfZGF0ZTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBzdGFydE9mRGF5O1xuIiwiaW1wb3J0IHsgY29uc3RydWN0RnJvbSB9IGZyb20gXCIuL2NvbnN0cnVjdEZyb20uanNcIjtcblxuLyoqXG4gKiBAbmFtZSB0b0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGFuIGluc3RhbmNlIG9mIERhdGUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIGl0cyBjbG9uZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYSBudW1iZXIsIGl0IGlzIHRyZWF0ZWQgYXMgYSB0aW1lc3RhbXAuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIG5vbmUgb2YgdGhlIGFib3ZlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBJbnZhbGlkIERhdGUuXG4gKlxuICogU3RhcnRpbmcgZnJvbSB2My43LjAsIGl0IGNsb25lcyBhIGRhdGUgdXNpbmcgYFtTeW1ib2wuZm9yKFwiY29uc3RydWN0RGF0ZUZyb21cIildYFxuICogZW5hYmxpbmcgdG8gdHJhbnNmZXIgZXh0cmEgcHJvcGVydGllcyBmcm9tIHRoZSByZWZlcmVuY2UgZGF0ZSB0byB0aGUgbmV3IGRhdGUuXG4gKiBJdCdzIHVzZWZ1bCBmb3IgZXh0ZW5zaW9ucyBsaWtlIFtgVFpEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3R6KVxuICogdGhhdCBhY2NlcHQgYSB0aW1lIHpvbmUgYXMgYSBjb25zdHJ1Y3RvciBhcmd1bWVudC5cbiAqXG4gKiAqKk5vdGUqKjogKmFsbCogRGF0ZSBhcmd1bWVudHMgcGFzc2VkIHRvIGFueSAqZGF0ZS1mbnMqIGZ1bmN0aW9uIGlzIHByb2Nlc3NlZCBieSBgdG9EYXRlYC5cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqIEB0eXBlUGFyYW0gUmVzdWx0RGF0ZSAtIFRoZSByZXN1bHQgYERhdGVgIHR5cGUsIGl0IGlzIHRoZSB0eXBlIHJldHVybmVkIGZyb20gdGhlIGNvbnRleHQgZnVuY3Rpb24gaWYgaXQgaXMgcGFzc2VkLCBvciBpbmZlcnJlZCBmcm9tIHRoZSBhcmd1bWVudHMuXG4gKlxuICogQHBhcmFtIGFyZ3VtZW50IC0gVGhlIHZhbHVlIHRvIGNvbnZlcnRcbiAqXG4gKiBAcmV0dXJucyBUaGUgcGFyc2VkIGRhdGUgaW4gdGhlIGxvY2FsIHRpbWUgem9uZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDbG9uZSB0aGUgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZShuZXcgRGF0ZSgyMDE0LCAxLCAxMSwgMTEsIDMwLCAzMCkpXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHRoZSB0aW1lc3RhbXAgdG8gZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZSgxMzkyMDk4NDMwMDAwKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRvRGF0ZShhcmd1bWVudCwgY29udGV4dCkge1xuICAvLyBbVE9ET10gR2V0IHJpZCBvZiBgdG9EYXRlYCBvciBgY29uc3RydWN0RnJvbWA/XG4gIHJldHVybiBjb25zdHJ1Y3RGcm9tKGNvbnRleHQgfHwgYXJndW1lbnQsIGFyZ3VtZW50KTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCB0b0RhdGU7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQgJiYgZG9jdW1lbnQuY3VycmVudFNjcmlwdC50YWdOYW1lLnRvVXBwZXJDYXNlKCkgPT09ICdTQ1JJUFQnKVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAoIXNjcmlwdFVybCB8fCAhL15odHRwKHM/KTovLnRlc3Qoc2NyaXB0VXJsKSkpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZXMvbWFpbi5jc3MnO1xuaW1wb3J0ICcuL3N0eWxlcy9iYWNrZ3JvdW5kLmNzcyc7XG5pbXBvcnQgJy4vc3R5bGVzL29uYm9hcmRpbmcuY3NzJztcbmltcG9ydCAnLi9zdHlsZXMvbGF5b3V0LmNzcyc7XG5pbXBvcnQgJy4vc3R5bGVzL3Byb2plY3RzLmNzcyc7XG5pbXBvcnQgJy4vc3R5bGVzL3RvZG9zLmNzcyc7XG5pbXBvcnQgYm9vdEljb24gZnJvbSAnLi9hc3NldHMvYm9vdC5zdmcnO1xuaW1wb3J0IE9uYm9hcmRpbmcgZnJvbSAnLi9tb2R1bGVzL29uYm9hcmRpbmcnO1xuaW1wb3J0IExheW91dCBmcm9tICcuL21vZHVsZXMvbGF5b3V0JztcbmltcG9ydCBUb2RvTWFuYWdlciBmcm9tICcuL21vZHVsZXMvdG9kb3MnO1xuaW1wb3J0IFByb2plY3RNYW5hZ2VyIGZyb20gJy4vbW9kdWxlcy9wcm9qZWN0cyc7XG5cbmNvbnN0IGJvb3QgPSBuZXcgSW1hZ2UoKTtcbmJvb3Quc3JjID0gYm9vdEljb247XG5ib290LmNsYXNzTGlzdC5hZGQoJ2JhY2tncm91bmQtYm9vdCcpO1xuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChib290KTtcblxuY29uc3Qgb25ib2FyZGluZyA9IG5ldyBPbmJvYXJkaW5nKCk7XG5vbmJvYXJkaW5nLmluaXQoKS50aGVuKHVzZXJEYXRhID0+IHtcbiAgICBjb25zb2xlLmxvZygnVXNlciBzZXR1cCBjb21wbGV0ZTonLCB1c2VyRGF0YSk7XG4gICAgXG4gICAgY29uc3QgdG9kb01hbmFnZXIgPSBuZXcgVG9kb01hbmFnZXIoKTtcbiAgICBjb25zdCBwcm9qZWN0TWFuYWdlciA9IG5ldyBQcm9qZWN0TWFuYWdlcih0b2RvTWFuYWdlcik7XG4gICAgXG4gICAgY29uc3QgbGF5b3V0ID0gbmV3IExheW91dCh1c2VyRGF0YSwgdG9kb01hbmFnZXIsIHByb2plY3RNYW5hZ2VyKTtcbiAgICBsYXlvdXQuaW5pdCgpO1xuICAgIFxuICAgIGNvbnN0IGFwcENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hcHAtY29udGFpbmVyJyk7XG4gICAgY29uc3QgZXhpc3RpbmdCb290ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJhY2tncm91bmQtYm9vdCcpO1xuICAgIGlmIChleGlzdGluZ0Jvb3QpIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChleGlzdGluZ0Jvb3QpO1xuICAgICAgICBhcHBDb250YWluZXIucHJlcGVuZChib290KTtcbiAgICB9XG59KTsiXSwibmFtZXMiOlsiUHJvamVjdE1hbmFnZXIiLCJUb2RvTWFuYWdlciIsIlRvZG8iLCJMYXlvdXQiLCJ1c2VyRGF0YSIsInRvZG9NYW5hZ2VyIiwicHJvamVjdE1hbmFnZXIiLCJfY2xhc3NDYWxsQ2hlY2siLCJhY3RpdmVQcm9qZWN0SWQiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsImNyZWF0ZUhlYWRlciIsImhlYWRlciIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsImlubmVySFRNTCIsImNvbmNhdCIsIm5hbWUiLCJjcmVhdGVBdmF0YXJFbGVtZW50IiwiY3JlYXRlU2lkZWJhciIsInNpZGViYXIiLCJjcmVhdGVNYWluIiwibWFpbiIsImF2YXRhciIsImluaXRpYWxzIiwic3BsaXQiLCJtYXAiLCJ3b3JkIiwiam9pbiIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJjcmVhdGVUb2RvTW9kYWwiLCJfdGhpcyIsInRvZG9Ub0VkaXQiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJtb2RhbCIsInByb2plY3RzIiwiZ2V0QWxsUHJvamVjdHMiLCJwcm9qZWN0T3B0aW9ucyIsInByb2plY3QiLCJpZCIsInByb2plY3RJZCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJkdWVEYXRlIiwicHJpb3JpdHkiLCJzaG93VG9kb01vZGFsIiwiX3RoaXMyIiwiYm9keSIsImFwcGVuZENoaWxkIiwiZm9ybSIsInF1ZXJ5U2VsZWN0b3IiLCJjYW5jZWxCdXR0b24iLCJkZWxldGVCdXR0b24iLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwiZ2V0RWxlbWVudEJ5SWQiLCJzZWxlY3RlZFByb2plY3RJZCIsInRyaW0iLCJ1cGRhdGVUb2RvIiwidG9kbyIsImFkZFRvZG8iLCJyZW5kZXJDdXJyZW50VmlldyIsInJlbW92ZUNoaWxkIiwiZGVsZXRlVG9kbyIsInNob3dTaWduT3V0Q29uZmlybWF0aW9uIiwiY29uZmlybUJ0biIsImNhbmNlbEJ0biIsImxvY2FsU3RvcmFnZSIsImNsZWFyIiwid2luZG93IiwibG9jYXRpb24iLCJyZWxvYWQiLCJzaG93QWJvdXRNb2RhbCIsImNsb3NlQnRuIiwicmVuZGVyVG9kb3MiLCJfdGhpczMiLCJ2aWV3IiwidGFza3NDb250YWluZXIiLCJ0b2RvcyIsImdldFRvZGF5VG9kb3MiLCJnZXRVcGNvbWluZ1RvZG9zIiwiZ2V0Q29tcGxldGVkVG9kb3MiLCJwcm9qZWN0VG9kb3MiLCJnZXRBbGxUb2RvcyIsImZpbHRlciIsImdldEFjdGl2ZVRvZG9zIiwicmVuZGVyVG9kb0xpc3QiLCJ0b2Rvc0J5UHJvamVjdCIsIk1hcCIsImZvckVhY2giLCJnZXRQcm9qZWN0IiwiaGFzIiwic2V0IiwiZ2V0IiwicHVzaCIsImh0bWwiLCJBcnJheSIsImZyb20iLCJlbnRyaWVzIiwiX3JlZiIsIl9yZWYyIiwiX3NsaWNlZFRvQXJyYXkiLCJfdGhpczQiLCJjb21wbGV0ZWQiLCJ1cGRhdGVNYWluSGVhZGVyIiwiY29udGVudEhlYWRlciIsInRleHRDb250ZW50IiwiaW5pdCIsImFwcENvbnRhaW5lciIsInJvb3QiLCJzZXR1cEV2ZW50TGlzdGVuZXJzIiwic2V0dXBQcm9qZWN0RXZlbnRzIiwic2V0dXBUb2RvRXZlbnRzIiwiX3RoaXM1IiwibWVudVRvZ2dsZSIsImNsYXNzTGlzdCIsInRvZ2dsZSIsInVzZXJQcm9maWxlIiwidXNlckRyb3Bkb3duIiwic3R5bGUiLCJkaXNwbGF5IiwiY29udGFpbnMiLCJ0YXJnZXQiLCJzaWduT3V0QnRuIiwiYWJvdXRCdG4iLCJ2aWV3TGlua3MiLCJxdWVyeVNlbGVjdG9yQWxsIiwibGluayIsImVsIiwicmVtb3ZlIiwiYWRkIiwiZGF0YXNldCIsIl90aGlzNiIsInByb2plY3RzTGlzdCIsImFkZFByb2plY3RCdG4iLCJhZGRQcm9qZWN0Rm9ybSIsInByb2plY3RJbnB1dCIsInNhdmVQcm9qZWN0QnRuIiwicmVuZGVyUHJvamVjdHMiLCJmb2N1cyIsInByb2plY3ROYW1lIiwibmV3UHJvamVjdCIsImNyZWF0ZVByb2plY3QiLCJwcm9qZWN0SXRlbSIsImNsb3Nlc3QiLCJkZWxldGVQcm9qZWN0IiwiYWxsVGFza3NMaW5rIiwiY2xpY2siLCJfdGhpczciLCJhZGRUYXNrQnRuIiwidG9kb0l0ZW0iLCJ0b2RvSWQiLCJ0b2dnbGVUb2RvQ29tcGxldGUiLCJnZXRUb2RvIiwiYWN0aXZlTGluayIsImN1cnJlbnRWaWV3IiwiX3RoaXM4IiwiZGlzYWJsZWQiLCJkZWZhdWx0IiwiT25ib2FyZGluZyIsImNyZWF0ZU1vZGFsIiwiY3JlYXRlRGVmYXVsdEF2YXRhciIsImdldEF2YXRhck9wdGlvbnMiLCJjb2xvcnMiLCJjb2xvciIsImluZGV4IiwiUHJvbWlzZSIsInJlc29sdmUiLCJleGlzdGluZ1VzZXIiLCJnZXRJdGVtIiwiSlNPTiIsInBhcnNlIiwibmFtZVN0ZXAiLCJhdmF0YXJTdGVwIiwidXNlcm5hbWVJbnB1dCIsIm5leHRCdG4iLCJjb21wbGV0ZUJ0biIsImZpbGVJbnB1dCIsInByZXZpZXdJbWFnZSIsImRlZmF1bHRBdmF0YXJIVE1MIiwicHJldmlld0NvbnRhaW5lciIsImZpbGUiLCJmaWxlcyIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJvbmxvYWQiLCJpbWFnZVVybCIsInJlc3VsdCIsImJhY2tncm91bmRJbWFnZSIsInJlYWRBc0RhdGFVUkwiLCJjb21wbGV0ZU9uYm9hcmRpbmciLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwiUHJvamVjdCIsIkRhdGUiLCJub3ciLCJ0b1N0cmluZyIsImRlZmF1bHRQcm9qZWN0cyIsInRhc2siLCJ0b0lTT1N0cmluZyIsImxvYWRQcm9qZWN0cyIsInNhdmVkUHJvamVjdHMiLCJkZWZhdWx0UHJvamVjdCIsImNyZWF0ZURlZmF1bHRQcm9qZWN0Iiwic2F2ZVByb2plY3RzIiwicmFuZG9tSW5kZXgiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJyZW1vdmVQcm9qZWN0VGFza3MiLCJmaW5kIiwiaXNUb2RheSIsImlzRnV0dXJlIiwicGFyc2VJU08iLCJjcmVhdGVkQXQiLCJsb2FkVG9kb3MiLCJzYXZlZFRvZG9zIiwidG9kb0RhdGEiLCJzYXZlVG9kb3MiLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJ1cGRhdGVkVG9kbyIsImZpbmRJbmRleCIsImFsbFRvZG9zIiwiX29iamVjdFNwcmVhZCIsInNvcnQiLCJhIiwiYiIsInNwbGljZSIsImJvb3RJY29uIiwiYm9vdCIsIkltYWdlIiwic3JjIiwib25ib2FyZGluZyIsInRoZW4iLCJjb25zb2xlIiwibG9nIiwibGF5b3V0IiwiZXhpc3RpbmdCb290IiwicHJlcGVuZCJdLCJzb3VyY2VSb290IjoiIn0=