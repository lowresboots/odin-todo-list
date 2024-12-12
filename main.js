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
      document.addEventListener('click', function (e) {
        var isMobile = window.innerWidth <= 768;
        if (isMobile && !sidebar.contains(e.target) && !menuToggle.contains(e.target)) {
          sidebar.classList.remove('active');
        }
      });
      var touchStartX = 0;
      var touchEndX = 0;
      document.addEventListener('touchstart', function (e) {
        touchStartX = e.changedTouches[0].screenX;
      }, false);
      document.addEventListener('touchend', function (e) {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
      }, false);
      var handleSwipe = function handleSwipe() {
        var swipeDistance = touchEndX - touchStartX;
        var minSwipeDistance = 50;
        if (swipeDistance < -minSwipeDistance) {
          sidebar.classList.remove('active');
        }
      };
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
          var isMobile = window.innerWidth <= 768;
          if (isMobile) {
            var _sidebar = document.querySelector('.app-sidebar');
            _sidebar.classList.remove('active');
          }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sd0ZBQXdGLFlBQVksV0FBVyxVQUFVLE1BQU0sT0FBTyxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFX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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUMsT0FBTyx1RkFBdUYsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxPQUFPLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFB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O0FBQ0E7QUFDQTtBQUNBLFlBQVksbUJBQW1CO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLFVBQVU7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLFVBQVU7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTzs7QUFFUDtB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QUNDLFFBQVEsRUFBRUMsV0FBVyxFQUFFQyxjQUFjLENBQUM7RUFDaEVxUCxNQUFNLENBQUMxSSxJQUFJLENBQUMsQ0FBQztFQUViLElBQU1DLFlBQVksR0FBR3BHLFFBQVEsQ0FBQ3lDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQztFQUM3RCxJQUFNcU0sWUFBWSxHQUFHOU8sUUFBUSxDQUFDeUMsYUFBYSxDQUFDLGtCQUFrQixDQUFDO0VBQy9ELElBQUlxTSxZQUFZLEVBQUU7SUFDZDlPLFFBQVEsQ0FBQ3NDLElBQUksQ0FBQ2dCLFdBQVcsQ0FBQ3dMLFlBQVksQ0FBQztJQUN2QzFJLFlBQVksQ0FBQzJJLE9BQU8sQ0FBQ1QsSUFBSSxDQUFDO0VBQzlCO0FBQ0osQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2xheW91dC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL29uYm9hcmRpbmcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9wcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3RvZG9zLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL3N0eWxlcy9iYWNrZ3JvdW5kLmNzcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9zdHlsZXMvbGF5b3V0LmNzcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9zdHlsZXMvbWFpbi5jc3MiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvc3R5bGVzL29uYm9hcmRpbmcuY3NzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL3N0eWxlcy9wcm9qZWN0cy5jc3MiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvc3R5bGVzL3RvZG9zLmNzcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9zdHlsZXMvYmFja2dyb3VuZC5jc3M/MzYxNSIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9zdHlsZXMvbGF5b3V0LmNzcz9kODEyIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL3N0eWxlcy9tYWluLmNzcz9lODBhIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL3N0eWxlcy9vbmJvYXJkaW5nLmNzcz9jZDBlIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL3N0eWxlcy9wcm9qZWN0cy5jc3M/MWFhYSIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9zdHlsZXMvdG9kb3MuY3NzPzJiZmUiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9fbGliL25vcm1hbGl6ZURhdGVzLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9jb25zdHJ1Y3RGcm9tLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2NvbnN0cnVjdE5vdy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9pc0Z1dHVyZS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9pc1NhbWVEYXkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvaXNUb2RheS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9wYXJzZUlTTy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9zdGFydE9mRGF5LmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3RvRGF0ZS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9qZWN0TWFuYWdlciBmcm9tICcuL3Byb2plY3RzJztcbmltcG9ydCBUb2RvTWFuYWdlciwgeyBUb2RvIH0gZnJvbSAnLi90b2Rvcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExheW91dCB7XG4gICAgY29uc3RydWN0b3IodXNlckRhdGEsIHRvZG9NYW5hZ2VyLCBwcm9qZWN0TWFuYWdlcikge1xuICAgICAgICB0aGlzLnVzZXJEYXRhID0gdXNlckRhdGE7XG4gICAgICAgIHRoaXMuYWN0aXZlUHJvamVjdElkID0gbnVsbDtcbiAgICAgICAgdGhpcy50b2RvTWFuYWdlciA9IHRvZG9NYW5hZ2VyO1xuICAgICAgICB0aGlzLnByb2plY3RNYW5hZ2VyID0gcHJvamVjdE1hbmFnZXI7XG4gICAgfVxuXG4gICAgY3JlYXRlSGVhZGVyKCkge1xuICAgICAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcbiAgICAgICAgaGVhZGVyLmNsYXNzTmFtZSA9ICdhcHAtaGVhZGVyJztcblxuICAgICAgICBoZWFkZXIuaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRlci1sZWZ0XCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIm1lbnUtdG9nZ2xlXCIgYXJpYS1sYWJlbD1cIlRvZ2dsZSBNZW51XCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj48L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzPVwiYXBwLXRpdGxlXCI+PHNwYW4gY2xhc3M9XCJib290XCI+Qm9vdDwvc3Bhbj48c3BhbiBjbGFzcz1cImRvXCI+ZG88L3NwYW4+PC9oMT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRlci1yaWdodFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1c2VyLXByb2ZpbGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ1c2VyLW5hbWVcIj4ke3RoaXMudXNlckRhdGEubmFtZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1c2VyLWF2YXRhclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgJHt0aGlzLmNyZWF0ZUF2YXRhckVsZW1lbnQoKX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1c2VyLWRyb3Bkb3duXCIgc3R5bGU9XCJkaXNwbGF5OiBub25lO1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRyb3Bkb3duLWl0ZW0gYWJvdXRcIj5BYm91dDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRyb3Bkb3duLWl0ZW0gc2lnbi1vdXRcIj5TaWduIE91dDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICBgO1xuXG4gICAgICAgIHJldHVybiBoZWFkZXI7XG4gICAgfVxuXG4gICAgY3JlYXRlU2lkZWJhcigpIHtcbiAgICAgICAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2FzaWRlJyk7XG4gICAgICAgIHNpZGViYXIuY2xhc3NOYW1lID0gJ2FwcC1zaWRlYmFyJztcblxuICAgICAgICBzaWRlYmFyLmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgIDxuYXYgY2xhc3M9XCJzaWRlYmFyLW5hdlwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzaWRlYmFyLXNlY3Rpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgPGgyPkhvbWU8L2gyPlxuICAgICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIiBjbGFzcz1cImFjdGl2ZVwiIGRhdGEtdmlldz1cImFsbFwiPkFsbCBUYXNrczwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCIgZGF0YS12aWV3PVwidG9kYXlcIj5Ub2RheTwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCIgZGF0YS12aWV3PVwidXBjb21pbmdcIj5VcGNvbWluZzwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCIgZGF0YS12aWV3PVwiY29tcGxldGVkXCI+Q29tcGxldGVkPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNpZGViYXItc2VjdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICA8aDI+UHJvamVjdHM8L2gyPlxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJwcm9qZWN0cy1saXN0XCI+XG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4tYWRkLXByb2plY3RcIiBpZD1cImFkZC1wcm9qZWN0LWJ0blwiPisgQWRkIFByb2plY3Q8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFkZC1wcm9qZWN0LWZvcm1cIiBzdHlsZT1cImRpc3BsYXk6IG5vbmU7XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImFkZC1wcm9qZWN0LWlucHV0XCIgcGxhY2Vob2xkZXI9XCJQcm9qZWN0IG5hbWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9qZWN0LWFjdGlvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuLWFkZC1wcm9qZWN0XCIgaWQ9XCJzYXZlLXByb2plY3QtYnRuXCI+QWRkPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L25hdj5cbiAgICAgICAgYDtcblxuICAgICAgICByZXR1cm4gc2lkZWJhcjtcbiAgICB9XG5cbiAgICBjcmVhdGVNYWluKCkge1xuICAgICAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xuICAgICAgICBtYWluLmNsYXNzTmFtZSA9ICdhcHAtbWFpbic7XG5cbiAgICAgICAgbWFpbi5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudC1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICA8aDI+QWxsIFRhc2tzPC9oMj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYWRkLXRhc2stYnRuXCI+KyBBZGQgVGFzazwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFza3MtY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgYDtcblxuICAgICAgICByZXR1cm4gbWFpbjtcbiAgICB9XG5cbiAgICBjcmVhdGVBdmF0YXJFbGVtZW50KCkge1xuICAgICAgICBpZiAodGhpcy51c2VyRGF0YS5hdmF0YXIgPT09ICdkZWZhdWx0Jykge1xuICAgICAgICAgICAgY29uc3QgaW5pdGlhbHMgPSB0aGlzLnVzZXJEYXRhLm5hbWVcbiAgICAgICAgICAgICAgICAuc3BsaXQoJyAnKVxuICAgICAgICAgICAgICAgIC5tYXAod29yZCA9PiB3b3JkWzBdKVxuICAgICAgICAgICAgICAgIC5qb2luKCcnKVxuICAgICAgICAgICAgICAgIC50b1VwcGVyQ2FzZSgpXG4gICAgICAgICAgICAgICAgLnNsaWNlKDAsIDIpO1xuICAgICAgICAgICAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwiZGVmYXVsdC1hdmF0YXJcIj48c3Bhbj4ke2luaXRpYWxzfTwvc3Bhbj48L2Rpdj5gO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBgPGRpdiBjbGFzcz1cInVzZXItYXZhdGFyLWltZ1wiIHN0eWxlPVwiYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7dGhpcy51c2VyRGF0YS5hdmF0YXJ9KVwiPjwvZGl2PmA7XG4gICAgfVxuXG4gICAgY3JlYXRlVG9kb01vZGFsKHRvZG9Ub0VkaXQgPSBudWxsKSB7XG4gICAgICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG1vZGFsLmNsYXNzTmFtZSA9ICdtb2RhbC1vdmVybGF5JztcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHByb2plY3RzID0gdGhpcy5wcm9qZWN0TWFuYWdlci5nZXRBbGxQcm9qZWN0cygpO1xuICAgICAgICBjb25zdCBwcm9qZWN0T3B0aW9ucyA9IHByb2plY3RzXG4gICAgICAgICAgICAubWFwKHByb2plY3QgPT4gYFxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIke3Byb2plY3QuaWR9XCIgJHtwcm9qZWN0LmlkID09PSAodG9kb1RvRWRpdD8ucHJvamVjdElkIHx8IHRoaXMuYWN0aXZlUHJvamVjdElkKSA/ICdzZWxlY3RlZCcgOiAnJ30+XG4gICAgICAgICAgICAgICAgICAgICR7cHJvamVjdC5uYW1lfVxuICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICAgYClcbiAgICAgICAgICAgIC5qb2luKCcnKTtcbiAgICAgICAgXG4gICAgICAgIG1vZGFsLmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0b2RvLW1vZGFsXCI+XG4gICAgICAgICAgICAgICAgPGgyPiR7dG9kb1RvRWRpdCA/ICdFZGl0IFRhc2snIDogJ0FkZCBOZXcgVGFzayd9PC9oMj5cbiAgICAgICAgICAgICAgICA8Zm9ybSBjbGFzcz1cInRvZG8tZm9ybVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInRvZG8tdGl0bGVcIj5UaXRsZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInRvZG8tdGl0bGVcIiB2YWx1ZT1cIiR7dG9kb1RvRWRpdD8udGl0bGUgfHwgJyd9XCIgcmVxdWlyZWQ+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInRvZG8tcHJvamVjdFwiPlByb2plY3Q8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBpZD1cInRvZG8tcHJvamVjdFwiIHJlcXVpcmVkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7cHJvamVjdE9wdGlvbnN9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwidG9kby1kZXNjcmlwdGlvblwiPkRlc2NyaXB0aW9uPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBpZD1cInRvZG8tZGVzY3JpcHRpb25cIiByb3dzPVwiM1wiPiR7dG9kb1RvRWRpdD8uZGVzY3JpcHRpb24gfHwgJyd9PC90ZXh0YXJlYT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwidG9kby1kdWUtZGF0ZVwiPkR1ZSBEYXRlPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZGF0ZVwiIGlkPVwidG9kby1kdWUtZGF0ZVwiIHZhbHVlPVwiJHt0b2RvVG9FZGl0Py5kdWVEYXRlIHx8ICcnfVwiPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ0b2RvLXByaW9yaXR5XCI+UHJpb3JpdHk8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBpZD1cInRvZG8tcHJpb3JpdHlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibG93XCIgJHt0b2RvVG9FZGl0Py5wcmlvcml0eSA9PT0gJ2xvdycgPyAnc2VsZWN0ZWQnIDogJyd9Pkxvdzwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJtZWRpdW1cIiAkeyF0b2RvVG9FZGl0IHx8IHRvZG9Ub0VkaXQ/LnByaW9yaXR5ID09PSAnbWVkaXVtJyA/ICdzZWxlY3RlZCcgOiAnJ30+TWVkaXVtPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImhpZ2hcIiAke3RvZG9Ub0VkaXQ/LnByaW9yaXR5ID09PSAnaGlnaCcgPyAnc2VsZWN0ZWQnIDogJyd9PkhpZ2g8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRvZG8tYWN0aW9uc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJidG4tdG9kbyBidG4tcHJpbWFyeVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7dG9kb1RvRWRpdCA/ICdVcGRhdGUnIDogJ0FkZCBUYXNrJ31cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgJHt0b2RvVG9FZGl0ID8gJzxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuLXRvZG8gYnRuLWRhbmdlclwiIGlkPVwiZGVsZXRlLXRvZG9cIj5EZWxldGU8L2J1dHRvbj4nIDogJyd9XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0bi10b2RvIGJ0bi1zZWNvbmRhcnlcIiBpZD1cImNhbmNlbC10b2RvXCI+Q2FuY2VsPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICBgO1xuICAgIFxuICAgICAgICByZXR1cm4gbW9kYWw7XG4gICAgfVxuXG4gICAgc2hvd1RvZG9Nb2RhbCh0b2RvVG9FZGl0ID0gbnVsbCwgcHJvamVjdElkID0gbnVsbCkge1xuICAgICAgICBjb25zdCBtb2RhbCA9IHRoaXMuY3JlYXRlVG9kb01vZGFsKHRvZG9Ub0VkaXQpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1vZGFsKTtcbiAgICBcbiAgICAgICAgY29uc3QgZm9ybSA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWZvcm0nKTtcbiAgICAgICAgY29uc3QgY2FuY2VsQnV0dG9uID0gbW9kYWwucXVlcnlTZWxlY3RvcignI2NhbmNlbC10b2RvJyk7XG4gICAgICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJyNkZWxldGUtdG9kbycpO1xuICAgIFxuICAgICAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG8tdGl0bGUnKS52YWx1ZTtcbiAgICAgICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG8tZGVzY3JpcHRpb24nKS52YWx1ZTtcbiAgICAgICAgICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kby1kdWUtZGF0ZScpLnZhbHVlO1xuICAgICAgICAgICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kby1wcmlvcml0eScpLnZhbHVlO1xuICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWRQcm9qZWN0SWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kby1wcm9qZWN0JykudmFsdWU7XG4gICAgXG4gICAgICAgICAgICBpZiAodGl0bGUudHJpbSgpKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRvZG9Ub0VkaXQpIHtcbiAgICAgICAgICAgICAgICAgICAgdG9kb1RvRWRpdC50aXRsZSA9IHRpdGxlO1xuICAgICAgICAgICAgICAgICAgICB0b2RvVG9FZGl0LmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgICAgICAgICAgICAgIHRvZG9Ub0VkaXQuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgICAgICAgICAgICAgICAgIHRvZG9Ub0VkaXQucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b2RvTWFuYWdlci51cGRhdGVUb2RvKHByb2plY3RJZCwgdG9kb1RvRWRpdC5pZCwgdG9kb1RvRWRpdCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9kbyA9IG5ldyBUb2RvKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRvZG9NYW5hZ2VyLmFkZFRvZG8oc2VsZWN0ZWRQcm9qZWN0SWQsIHRvZG8pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlckN1cnJlbnRWaWV3KCk7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChtb2RhbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIFxuICAgICAgICBjYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKG1vZGFsKTtcbiAgICAgICAgfSk7XG4gICAgXG4gICAgICAgIGlmIChkZWxldGVCdXR0b24pIHtcbiAgICAgICAgICAgIGRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnRvZG9NYW5hZ2VyLmRlbGV0ZVRvZG8ocHJvamVjdElkLCB0b2RvVG9FZGl0LmlkKTtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlckN1cnJlbnRWaWV3KCk7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChtb2RhbCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNob3dTaWduT3V0Q29uZmlybWF0aW9uKCkge1xuICAgICAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBtb2RhbC5jbGFzc05hbWUgPSAnbW9kYWwtb3ZlcmxheSc7XG4gICAgICAgIFxuICAgICAgICBtb2RhbC5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidG9kby1tb2RhbFwiPlxuICAgICAgICAgICAgICAgIDxoMj5TaWduIE91dDwvaDI+XG4gICAgICAgICAgICAgICAgPHA+QXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIHNpZ24gb3V0PyBUaGlzIHdpbGwgY2xlYXIgYWxsIHlvdXIgZGF0YS4uLjwvcD5cbiAgICAgICAgICAgICAgICA8cCBzdHlsZT1cImZvbnQtc2l6ZTogMC45ZW07IGNvbG9yOiAjNjY2OyBtYXJnaW4tdG9wOiAwLjVyZW07XCI+XG4gICAgICAgICAgICAgICAgICAgIChZZXMsIHRoaXMgaXMganVzdCBmb3IgdGVzdGluZy4gSW4gYSByZWFsIGFwcCwgeW91ciBkYXRhIHdvdWxkIGJlIHNhdmVkISlcbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRvZG8tYWN0aW9uc1wiIHN0eWxlPVwibWFyZ2luLXRvcDogMnJlbTtcIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0bi10b2RvIGJ0bi1wcmltYXJ5XCIgaWQ9XCJjb25maXJtLXNpZ25vdXRcIj5TaWduIE91dDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuLXRvZG8gYnRuLXNlY29uZGFyeVwiIGlkPVwiY2FuY2VsLXNpZ25vdXRcIj5DYW5jZWw8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICBgO1xuICAgIFxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1vZGFsKTtcbiAgICBcbiAgICAgICAgY29uc3QgY29uZmlybUJ0biA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJyNjb25maXJtLXNpZ25vdXQnKTtcbiAgICAgICAgY29uc3QgY2FuY2VsQnRuID0gbW9kYWwucXVlcnlTZWxlY3RvcignI2NhbmNlbC1zaWdub3V0Jyk7XG4gICAgXG4gICAgICAgIGNvbmZpcm1CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgfSk7XG4gICAgXG4gICAgICAgIGNhbmNlbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQobW9kYWwpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzaG93QWJvdXRNb2RhbCgpIHtcbiAgICAgICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbW9kYWwuY2xhc3NOYW1lID0gJ21vZGFsLW92ZXJsYXknO1xuICAgICAgICBcbiAgICAgICAgbW9kYWwuaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRvZG8tbW9kYWxcIj5cbiAgICAgICAgICAgICAgICA8aDI+QWJvdXQgQm9vdGRvPC9oMj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWJvdXQtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICA8cD5Cb290ZG8gaXMgYSBwcm9qZWN0IG1hbmFnZW1lbnQgYXBwbGljYXRpb24gYnVpbHQgYXMgcGFydCBvZiBUaGUgT2RpbiBQcm9qZWN0IGN1cnJpY3VsdW0uIEl0J3MgZGVzaWduZWQgdG8gaGVscCBkZXZlbG9wZXJzIG9yZ2FuaXplIHRoZWlyIHByb2plY3RzIGFuZCB0YXNrcyB3aXRoIGEgdG91Y2ggb2YgaHVtb3IuPC9wPlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImZlYXR1cmVzLXRleHRcIj5GZWF0dXJlcyBpbmNsdWRlOjwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlByb2plY3Qgb3JnYW5pemF0aW9uPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5UYXNrIG1hbmFnZW1lbnQgd2l0aCBwcmlvcml0aWVzIGFuZCBkdWUgZGF0ZXM8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkRpZmZlcmVudCB0YXNrIHZpZXdzIChUb2RheSwgVXBjb21pbmcsIENvbXBsZXRlZCk8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkZ1biBkZWZhdWx0IHByb2plY3QgbmFtZXMgZm9yIGRldmVsb3BlciBpbnNwaXJhdGlvbjwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInNpZ25hdHVyZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgRW5qb3khPGJyPjxicj5cbiAgICAgICAgICAgICAgICAgICAgICAgICZtZGFzaDsgQm9vdHNAbG93cmVzYm9vdHNcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0b2RvLWFjdGlvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0bi10b2RvIGJ0bi1wcmltYXJ5XCIgaWQ9XCJjbG9zZS1hYm91dFwiPkNsb3NlPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgYDtcbiAgICBcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtb2RhbCk7XG4gICAgXG4gICAgICAgIGNvbnN0IGNsb3NlQnRuID0gbW9kYWwucXVlcnlTZWxlY3RvcignI2Nsb3NlLWFib3V0Jyk7XG4gICAgICAgIGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChtb2RhbCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlbmRlclRvZG9zKHZpZXcgPSAnYWxsJykge1xuICAgICAgICBjb25zdCB0YXNrc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrcy1jb250YWluZXInKTtcbiAgICAgICAgbGV0IHRvZG9zO1xuICAgIFxuICAgICAgICBzd2l0Y2godmlldykge1xuICAgICAgICAgICAgY2FzZSAndG9kYXknOlxuICAgICAgICAgICAgICAgIHRvZG9zID0gdGhpcy50b2RvTWFuYWdlci5nZXRUb2RheVRvZG9zKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICd1cGNvbWluZyc6XG4gICAgICAgICAgICAgICAgdG9kb3MgPSB0aGlzLnRvZG9NYW5hZ2VyLmdldFVwY29taW5nVG9kb3MoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2NvbXBsZXRlZCc6XG4gICAgICAgICAgICAgICAgdG9kb3MgPSB0aGlzLnRvZG9NYW5hZ2VyLmdldENvbXBsZXRlZFRvZG9zKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmFjdGl2ZVByb2plY3RJZCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0VG9kb3MgPSB0aGlzLnRvZG9NYW5hZ2VyLmdldEFsbFRvZG9zKClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5maWx0ZXIodG9kbyA9PiB0b2RvLnByb2plY3RJZCA9PT0gdGhpcy5hY3RpdmVQcm9qZWN0SWQpO1xuICAgICAgICAgICAgICAgICAgICB0b2RvcyA9IHByb2plY3RUb2RvcztcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0b2RvcyA9IHRoaXMudG9kb01hbmFnZXIuZ2V0QWN0aXZlVG9kb3MoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgaWYgKHRoaXMuYWN0aXZlUHJvamVjdElkKSB7XG4gICAgICAgICAgICB0YXNrc0NvbnRhaW5lci5pbm5lckhUTUwgPSB0aGlzLnJlbmRlclRvZG9MaXN0KHRvZG9zKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICBjb25zdCB0b2Rvc0J5UHJvamVjdCA9IG5ldyBNYXAoKTtcbiAgICAgICAgXG4gICAgICAgIHRvZG9zLmZvckVhY2godG9kbyA9PiB7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0SWQgPSB0b2RvLnByb2plY3RJZDtcbiAgICAgICAgICAgIGlmICghdGhpcy5wcm9qZWN0TWFuYWdlci5nZXRQcm9qZWN0KHByb2plY3RJZCkpIHJldHVybjtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKCF0b2Rvc0J5UHJvamVjdC5oYXMocHJvamVjdElkKSkge1xuICAgICAgICAgICAgICAgIHRvZG9zQnlQcm9qZWN0LnNldChwcm9qZWN0SWQsIFtdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRvZG9zQnlQcm9qZWN0LmdldChwcm9qZWN0SWQpLnB1c2godG9kbyk7XG4gICAgICAgIH0pO1xuICAgIFxuICAgICAgICBjb25zdCBodG1sID0gQXJyYXkuZnJvbSh0b2Rvc0J5UHJvamVjdC5lbnRyaWVzKCkpLm1hcCgoW3Byb2plY3RJZCwgcHJvamVjdFRvZG9zXSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdCA9IHRoaXMucHJvamVjdE1hbmFnZXIuZ2V0UHJvamVjdChwcm9qZWN0SWQpO1xuICAgICAgICAgICAgaWYgKCFwcm9qZWN0KSByZXR1cm4gJyc7XG4gICAgICAgICAgICByZXR1cm4gYFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9qZWN0LXNlY3Rpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzPVwicHJvamVjdC1oZWFkZXJcIj4ke3Byb2plY3QubmFtZX08L2gzPlxuICAgICAgICAgICAgICAgICAgICAke3RoaXMucmVuZGVyVG9kb0xpc3QocHJvamVjdFRvZG9zKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIGA7XG4gICAgICAgIH0pLmpvaW4oJycpO1xuICAgIFxuICAgICAgICB0YXNrc0NvbnRhaW5lci5pbm5lckhUTUwgPSBodG1sIHx8ICc8cD5ObyB0YXNrcyB5ZXQ8L3A+JztcbiAgICB9XG5cbiAgICByZW5kZXJUb2RvTGlzdCh0b2Rvcykge1xuICAgICAgICBpZiAoIXRvZG9zLmxlbmd0aCkgcmV0dXJuICcnO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHRvZG9zLm1hcCh0b2RvID0+IGBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0b2RvLWl0ZW0gJHt0b2RvLmNvbXBsZXRlZCA/ICdjb21wbGV0ZWQnIDogJyd9XCIgXG4gICAgICAgICAgICAgICAgIGRhdGEtaWQ9XCIke3RvZG8uaWR9XCIgXG4gICAgICAgICAgICAgICAgIGRhdGEtcHJvamVjdC1pZD1cIiR7dG9kby5wcm9qZWN0SWQgfHwgdGhpcy5hY3RpdmVQcm9qZWN0SWR9XCI+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNsYXNzPVwidG9kby1jaGVja2JveFwiICR7dG9kby5jb21wbGV0ZWQgPyAnY2hlY2tlZCcgOiAnJ30+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRvZG8tY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidG9kby10aXRsZVwiPiR7dG9kby50aXRsZX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgJHt0b2RvLmRlc2NyaXB0aW9uID8gYDxkaXYgY2xhc3M9XCJ0b2RvLWRlc2NyaXB0aW9uXCI+JHt0b2RvLmRlc2NyaXB0aW9ufTwvZGl2PmAgOiAnJ31cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRvZG8tbWV0YWRhdGFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICR7dG9kby5kdWVEYXRlID8gYDxzcGFuPkR1ZTogJHt0b2RvLmR1ZURhdGV9PC9zcGFuPmAgOiAnJ31cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlByaW9yaXR5OiAke3RvZG8ucHJpb3JpdHl9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidG9kby1hY3Rpb25zXCI+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJlZGl0LXRvZG9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgY2xhc3M9XCJmZWF0aGVyIGZlYXRoZXItZWRpdFwiIGZpbGw9XCJub25lXCIgaGVpZ2h0PVwiMTZcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBzdHJva2Utd2lkdGg9XCIyXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHdpZHRoPVwiMTZcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHBhdGggZD1cIk0xMSA0SDRhMiAyIDAgMCAwLTIgMnYxNGEyIDIgMCAwIDAgMiAyaDE0YTIgMiAwIDAgMCAyLTJ2LTdcIi8+PHBhdGggZD1cIk0xOC41IDIuNWEyLjEyMSAyLjEyMSAwIDAgMSAzIDNMMTIgMTVsLTQgMSAxLTQgOS41LTkuNXpcIi8+PC9zdmc+XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIGApLmpvaW4oJycpO1xuICAgIH1cblxuICAgIHVwZGF0ZU1haW5IZWFkZXIodGl0bGUpIHtcbiAgICAgICAgY29uc3QgY29udGVudEhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50LWhlYWRlciBoMicpO1xuICAgICAgICBjb250ZW50SGVhZGVyLnRleHRDb250ZW50ID0gdGl0bGU7XG4gICAgfVxuXG4gICAgaW5pdCgpIHtcbiAgICAgICAgY29uc3QgYXBwQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGFwcENvbnRhaW5lci5jbGFzc05hbWUgPSAnYXBwLWNvbnRhaW5lcic7XG5cbiAgICAgICAgYXBwQ29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuY3JlYXRlSGVhZGVyKCkpO1xuICAgICAgICBhcHBDb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVTaWRlYmFyKCkpO1xuICAgICAgICBhcHBDb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVNYWluKCkpO1xuXG4gICAgICAgIGNvbnN0IHJvb3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJyk7XG4gICAgICAgIHJvb3QuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIHJvb3QuYXBwZW5kQ2hpbGQoYXBwQ29udGFpbmVyKTtcblxuICAgICAgICB0aGlzLnNldHVwRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICAgICAgdGhpcy5zZXR1cFByb2plY3RFdmVudHMoKTtcbiAgICAgICAgdGhpcy5zZXR1cFRvZG9FdmVudHMoKTtcbiAgICAgICAgdGhpcy5yZW5kZXJUb2RvcygnYWxsJyk7XG4gICAgfVxuXG4gICAgc2V0dXBFdmVudExpc3RlbmVycygpIHtcbiAgICAgICAgY29uc3QgbWVudVRvZ2dsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51LXRvZ2dsZScpO1xuICAgICAgICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFwcC1zaWRlYmFyJyk7XG4gICAgICAgIG1lbnVUb2dnbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBzaWRlYmFyLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xuICAgICAgICB9KTtcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgY29uc3QgaXNNb2JpbGUgPSB3aW5kb3cuaW5uZXJXaWR0aCA8PSA3Njg7XG4gICAgICAgIGlmIChpc01vYmlsZSAmJiAhc2lkZWJhci5jb250YWlucyhlLnRhcmdldCkgJiYgIW1lbnVUb2dnbGUuY29udGFpbnMoZS50YXJnZXQpKSB7XG4gICAgICAgICAgICBzaWRlYmFyLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBsZXQgdG91Y2hTdGFydFggPSAwO1xuICAgIGxldCB0b3VjaEVuZFggPSAwO1xuICAgIFxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCAoZSkgPT4ge1xuICAgICAgICB0b3VjaFN0YXJ0WCA9IGUuY2hhbmdlZFRvdWNoZXNbMF0uc2NyZWVuWDtcbiAgICB9LCBmYWxzZSk7XG4gICAgXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCAoZSkgPT4ge1xuICAgICAgICB0b3VjaEVuZFggPSBlLmNoYW5nZWRUb3VjaGVzWzBdLnNjcmVlblg7XG4gICAgICAgIGhhbmRsZVN3aXBlKCk7XG4gICAgfSwgZmFsc2UpO1xuICAgIFxuICAgIGNvbnN0IGhhbmRsZVN3aXBlID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBzd2lwZURpc3RhbmNlID0gdG91Y2hFbmRYIC0gdG91Y2hTdGFydFg7XG4gICAgICAgIGNvbnN0IG1pblN3aXBlRGlzdGFuY2UgPSA1MDtcbiAgICAgICAgXG4gICAgICAgIGlmIChzd2lwZURpc3RhbmNlIDwgLW1pblN3aXBlRGlzdGFuY2UpIHtcbiAgICAgICAgICAgIHNpZGViYXIuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgICAgIGNvbnN0IHVzZXJQcm9maWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVzZXItcHJvZmlsZScpO1xuICAgICAgICBjb25zdCB1c2VyRHJvcGRvd24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudXNlci1kcm9wZG93bicpO1xuXG4gICAgICAgIHVzZXJQcm9maWxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgdXNlckRyb3Bkb3duLnN0eWxlLmRpc3BsYXkgPSB1c2VyRHJvcGRvd24uc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnID8gJ2Jsb2NrJyA6ICdub25lJztcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgaWYgKCF1c2VyUHJvZmlsZS5jb250YWlucyhlLnRhcmdldCkpIHtcbiAgICAgICAgICAgICAgICB1c2VyRHJvcGRvd24uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3Qgc2lnbk91dEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWduLW91dCcpO1xuICAgICAgICBzaWduT3V0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zaG93U2lnbk91dENvbmZpcm1hdGlvbigpO1xuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBhYm91dEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hYm91dCcpO1xuICAgICAgICBhYm91dEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2hvd0Fib3V0TW9kYWwoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3Qgdmlld0xpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNpZGViYXItbmF2IGFbZGF0YS12aWV3XScpO1xuICAgICAgICB2aWV3TGlua3MuZm9yRWFjaChsaW5rID0+IHtcbiAgICAgICAgICAgIGxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zaWRlYmFyLW5hdiBhLCAucHJvamVjdC1pdGVtJykuZm9yRWFjaChlbCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgbGluay5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlUHJvamVjdElkID0gbnVsbDtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHZpZXcgPSBsaW5rLmRhdGFzZXQudmlldztcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZU1haW5IZWFkZXIobGluay50ZXh0Q29udGVudCk7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJUb2Rvcyh2aWV3KTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGlzTW9iaWxlID0gd2luZG93LmlubmVyV2lkdGggPD0gNzY4O1xuICAgICAgICAgICAgICAgIGlmIChpc01vYmlsZSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFwcC1zaWRlYmFyJyk7XG4gICAgICAgICAgICAgICAgICAgIHNpZGViYXIuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHNldHVwUHJvamVjdEV2ZW50cygpIHtcbiAgICAgICAgY29uc3QgcHJvamVjdHNMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzLWxpc3QnKTtcbiAgICAgICAgY29uc3QgYWRkUHJvamVjdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtcHJvamVjdC1idG4nKTtcbiAgICAgICAgY29uc3QgYWRkUHJvamVjdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXByb2plY3QtZm9ybScpO1xuICAgICAgICBjb25zdCBwcm9qZWN0SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXByb2plY3QtaW5wdXQnKTtcbiAgICAgICAgY29uc3Qgc2F2ZVByb2plY3RCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2F2ZS1wcm9qZWN0LWJ0bicpO1xuICAgIFxuICAgICAgICB0aGlzLnJlbmRlclByb2plY3RzKHRoaXMucHJvamVjdE1hbmFnZXIuZ2V0QWxsUHJvamVjdHMoKSk7XG4gICAgXG4gICAgICAgIGFkZFByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBhZGRQcm9qZWN0QnRuLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICBhZGRQcm9qZWN0Rm9ybS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgICAgIHByb2plY3RJbnB1dC5mb2N1cygpO1xuICAgICAgICB9KTtcbiAgICBcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgaWYgKCFhZGRQcm9qZWN0Rm9ybS5jb250YWlucyhlLnRhcmdldCkgJiYgZS50YXJnZXQgIT09IGFkZFByb2plY3RCdG4pIHtcbiAgICAgICAgICAgICAgICBhZGRQcm9qZWN0QnRuLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICAgICAgICAgIGFkZFByb2plY3RGb3JtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgcHJvamVjdElucHV0LnZhbHVlID0gJyc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIFxuICAgICAgICBzYXZlUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3ROYW1lID0gcHJvamVjdElucHV0LnZhbHVlLnRyaW0oKTtcbiAgICAgICAgICAgIGlmIChwcm9qZWN0TmFtZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld1Byb2plY3QgPSB0aGlzLnByb2plY3RNYW5hZ2VyLmNyZWF0ZVByb2plY3QocHJvamVjdE5hbWUpO1xuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyUHJvamVjdHModGhpcy5wcm9qZWN0TWFuYWdlci5nZXRBbGxQcm9qZWN0cygpKTtcbiAgICAgICAgICAgICAgICBhZGRQcm9qZWN0QnRuLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICAgICAgICAgIGFkZFByb2plY3RGb3JtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgcHJvamVjdElucHV0LnZhbHVlID0gJyc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIFxuICAgICAgICBwcm9qZWN0c0xpc3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdEl0ZW0gPSBlLnRhcmdldC5jbG9zZXN0KCcucHJvamVjdC1pdGVtJyk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2RlbGV0ZS1wcm9qZWN0JykpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0SWQgPSBlLnRhcmdldC5jbG9zZXN0KCcucHJvamVjdC1pdGVtJykuZGF0YXNldC5pZDtcbiAgICAgICAgICAgICAgICB0aGlzLnByb2plY3RNYW5hZ2VyLmRlbGV0ZVByb2plY3QocHJvamVjdElkKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5hY3RpdmVQcm9qZWN0SWQgPT09IHByb2plY3RJZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZVByb2plY3RJZCA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFsbFRhc2tzTGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyLW5hdiBhW2RhdGEtdmlldz1cImFsbFwiXScpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoYWxsVGFza3NMaW5rKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGxUYXNrc0xpbmsuY2xpY2soKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlTWFpbkhlYWRlcignQWxsIFRhc2tzJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlclRvZG9zKCdhbGwnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlclByb2plY3RzKHRoaXMucHJvamVjdE1hbmFnZXIuZ2V0QWxsUHJvamVjdHMoKSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgaWYgKHByb2plY3RJdGVtKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdElkID0gcHJvamVjdEl0ZW0uZGF0YXNldC5pZDtcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0ID0gdGhpcy5wcm9qZWN0TWFuYWdlci5nZXRQcm9qZWN0KHByb2plY3RJZCk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgdGhpcy5hY3RpdmVQcm9qZWN0SWQgPSBwcm9qZWN0SWQ7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJQcm9qZWN0cyh0aGlzLnByb2plY3RNYW5hZ2VyLmdldEFsbFByb2plY3RzKCkpO1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlTWFpbkhlYWRlcihwcm9qZWN0Lm5hbWUpO1xuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyVG9kb3MoKTtcbiAgICBcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2lkZWJhci1uYXYgYScpLmZvckVhY2gobGluayA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxpbmsuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHNldHVwVG9kb0V2ZW50cygpIHtcbiAgICAgICAgY29uc3QgYWRkVGFza0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtdGFzay1idG4nKTtcbiAgICAgICAgY29uc3QgdGFza3NDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza3MtY29udGFpbmVyJyk7XG4gICAgXG4gICAgICAgIGFkZFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNob3dUb2RvTW9kYWwoKTtcbiAgICAgICAgfSk7XG4gICAgXG4gICAgICAgIHRhc2tzQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRvZG9JdGVtID0gZS50YXJnZXQuY2xvc2VzdCgnLnRvZG8taXRlbScpO1xuICAgICAgICAgICAgaWYgKCF0b2RvSXRlbSkgcmV0dXJuO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCB0b2RvSWQgPSB0b2RvSXRlbS5kYXRhc2V0LmlkO1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdElkID0gdG9kb0l0ZW0uZGF0YXNldC5wcm9qZWN0SWQgfHwgdGhpcy5hY3RpdmVQcm9qZWN0SWQ7XG4gICAgXG4gICAgICAgICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCd0b2RvLWNoZWNrYm94JykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRvZG9NYW5hZ2VyLnRvZ2dsZVRvZG9Db21wbGV0ZShwcm9qZWN0SWQsIHRvZG9JZCk7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJDdXJyZW50VmlldygpO1xuICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgaWYgKGUudGFyZ2V0LmNsb3Nlc3QoJy5lZGl0LXRvZG8nKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRvZG8gPSB0aGlzLnRvZG9NYW5hZ2VyLmdldFRvZG8ocHJvamVjdElkLCB0b2RvSWQpO1xuICAgICAgICAgICAgICAgIGlmICh0b2RvKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd1RvZG9Nb2RhbCh0b2RvLCBwcm9qZWN0SWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVuZGVyQ3VycmVudFZpZXcoKSB7XG4gICAgICAgIGNvbnN0IGFjdGl2ZUxpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhci1uYXYgYS5hY3RpdmUnKTtcbiAgICAgICAgY29uc3QgY3VycmVudFZpZXcgPSBhY3RpdmVMaW5rID8gYWN0aXZlTGluay5kYXRhc2V0LnZpZXcgOiAnYWxsJztcbiAgICAgICAgdGhpcy5yZW5kZXJUb2RvcyhjdXJyZW50Vmlldyk7XG4gICAgfVxuXG4gICAgcmVuZGVyUHJvamVjdHMocHJvamVjdHMpIHtcbiAgICAgICAgY29uc3QgcHJvamVjdHNMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzLWxpc3QnKTtcbiAgICAgICAgY29uc3QgYWRkVGFza0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtdGFzay1idG4nKTtcbiAgICAgICAgXG4gICAgICAgIGlmIChwcm9qZWN0cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIGFkZFRhc2tCdG4uZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgYWRkVGFza0J0bi5jbGFzc0xpc3QuYWRkKCdkaXNhYmxlZCcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYWRkVGFza0J0bi5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgYWRkVGFza0J0bi5jbGFzc0xpc3QucmVtb3ZlKCdkaXNhYmxlZCcpO1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIHByb2plY3RzTGlzdC5pbm5lckhUTUwgPSBwcm9qZWN0cy5tYXAocHJvamVjdCA9PiBgXG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJwcm9qZWN0LWl0ZW0gJHtwcm9qZWN0LmlkID09PSB0aGlzLmFjdGl2ZVByb2plY3RJZCA/ICdhY3RpdmUnIDogJyd9XCIgZGF0YS1pZD1cIiR7cHJvamVjdC5pZH1cIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInByb2plY3QtbmFtZVwiPiR7cHJvamVjdC5uYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiZGVsZXRlLXByb2plY3RcIiBhcmlhLWxhYmVsPVwiRGVsZXRlIHByb2plY3RcIj7DlzwvYnV0dG9uPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgYCkuam9pbignJyk7XG4gICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIE9uYm9hcmRpbmcge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnVzZXJEYXRhID0ge1xuICAgICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgICBhdmF0YXI6ICcnXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgY3JlYXRlTW9kYWwoKSB7XG4gICAgICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG1vZGFsLmNsYXNzTmFtZSA9ICdvdmVybGF5JztcbiAgICAgICAgXG4gICAgICAgIG1vZGFsLmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvbmJvYXJkaW5nLW1vZGFsXCI+XG4gICAgICAgICAgICAgICAgPGgyPldlbGNvbWUgdG8gQm9vdGRvITwvaDI+XG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cIm5hbWUtc3RlcFwiPlxuICAgICAgICAgICAgICAgICAgICA8cD5XaGF0J3MgeW91ciBuYW1lPzwvcD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJ1c2VybmFtZVwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciBuYW1lXCIgcmVxdWlyZWQ+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIiBpZD1cIm5leHQtYnRuXCI+TmV4dDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJhdmF0YXItc3RlcFwiIHN0eWxlPVwiZGlzcGxheTogbm9uZTtcIj5cbiAgICAgICAgICAgICAgICAgICAgPHA+Q2hvb3NlIGEgcHJvZmlsZSBwaWN0dXJlPC9wPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYXZhdGFyLXVwbG9hZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImF2YXRhci1wcmV2aWV3XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cImF2YXRhci1wcmV2aWV3LWltYWdlXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhdmF0YXItYWN0aW9uc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIGlkPVwiYXZhdGFyLXVwbG9hZFwiIGFjY2VwdD1cImltYWdlLypcIiBjbGFzcz1cImZpbGUtaW5wdXRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiYXZhdGFyLXVwbG9hZFwiIGNsYXNzPVwiYnRuIGJ0bi1zZWNvbmRhcnlcIj5DaG9vc2UgRmlsZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiIGlkPVwiY29tcGxldGUtYnRuXCI+Q29tcGxldGUgU2V0dXA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICBgO1xuICAgIFxuICAgICAgICByZXR1cm4gbW9kYWw7XG4gICAgfVxuICAgIFxuICAgIGNyZWF0ZURlZmF1bHRBdmF0YXIobmFtZSkge1xuICAgICAgICBjb25zdCBpbml0aWFscyA9IG5hbWVcbiAgICAgICAgICAgIC5zcGxpdCgnICcpXG4gICAgICAgICAgICAubWFwKHdvcmQgPT4gd29yZFswXSlcbiAgICAgICAgICAgIC5qb2luKCcnKVxuICAgICAgICAgICAgLnRvVXBwZXJDYXNlKClcbiAgICAgICAgICAgIC5zbGljZSgwLCAyKTtcbiAgICBcbiAgICAgICAgcmV0dXJuIGBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkZWZhdWx0LWF2YXRhclwiPlxuICAgICAgICAgICAgICAgIDxzcGFuPiR7aW5pdGlhbHN9PC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIGA7XG4gICAgfVxuXG4gICAgZ2V0QXZhdGFyT3B0aW9ucygpIHtcbiAgICAgICAgY29uc3QgY29sb3JzID0gWycjRkY2QjZCJywgJyM0RUNEQzQnLCAnIzQ1QjdEMScsICcjOTZDRUI0JywgJyNGRkVFQUQnXTtcbiAgICAgICAgcmV0dXJuIGNvbG9ycy5tYXAoKGNvbG9yLCBpbmRleCkgPT4gYFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImF2YXRhci1vcHRpb25cIiBkYXRhLWF2YXRhcj1cImF2YXRhciR7aW5kZXggKyAxfVwiPlxuICAgICAgICAgICAgICAgIDxzdmcgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiMTAwJVwiIHZpZXdCb3g9XCIwIDAgNTAgNTBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGNpcmNsZSBjeD1cIjI1XCIgY3k9XCIyNVwiIHI9XCIyMFwiIGZpbGw9XCIke2NvbG9yfVwiLz5cbiAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICBgKS5qb2luKCcnKTtcbiAgICB9XG5cbiAgICBpbml0KCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGV4aXN0aW5nVXNlciA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdib290ZG9Vc2VyJyk7XG4gICAgICAgICAgICBpZiAoZXhpc3RpbmdVc2VyKSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShKU09OLnBhcnNlKGV4aXN0aW5nVXNlcikpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgIGNvbnN0IG1vZGFsID0gdGhpcy5jcmVhdGVNb2RhbCgpO1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtb2RhbCk7XG4gICAgXG4gICAgICAgICAgICBjb25zdCBuYW1lU3RlcCA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJyNuYW1lLXN0ZXAnKTtcbiAgICAgICAgICAgIGNvbnN0IGF2YXRhclN0ZXAgPSBtb2RhbC5xdWVyeVNlbGVjdG9yKCcjYXZhdGFyLXN0ZXAnKTtcbiAgICAgICAgICAgIGNvbnN0IHVzZXJuYW1lSW5wdXQgPSBtb2RhbC5xdWVyeVNlbGVjdG9yKCcjdXNlcm5hbWUnKTtcbiAgICAgICAgICAgIGNvbnN0IG5leHRCdG4gPSBtb2RhbC5xdWVyeVNlbGVjdG9yKCcjbmV4dC1idG4nKTtcbiAgICAgICAgICAgIGNvbnN0IGNvbXBsZXRlQnRuID0gbW9kYWwucXVlcnlTZWxlY3RvcignI2NvbXBsZXRlLWJ0bicpO1xuICAgICAgICAgICAgY29uc3QgZmlsZUlucHV0ID0gbW9kYWwucXVlcnlTZWxlY3RvcignI2F2YXRhci11cGxvYWQnKTtcbiAgICAgICAgICAgIGNvbnN0IHByZXZpZXdJbWFnZSA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJyNhdmF0YXItcHJldmlldy1pbWFnZScpO1xuICAgIFxuICAgICAgICAgICAgbmV4dEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodXNlcm5hbWVJbnB1dC52YWx1ZS50cmltKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51c2VyRGF0YS5uYW1lID0gdXNlcm5hbWVJbnB1dC52YWx1ZS50cmltKCk7XG4gICAgICAgICAgICAgICAgICAgIG5hbWVTdGVwLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgICAgIGF2YXRhclN0ZXAuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkZWZhdWx0QXZhdGFySFRNTCA9IHRoaXMuY3JlYXRlRGVmYXVsdEF2YXRhcih0aGlzLnVzZXJEYXRhLm5hbWUpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwcmV2aWV3Q29udGFpbmVyID0gbW9kYWwucXVlcnlTZWxlY3RvcignI2F2YXRhci1wcmV2aWV3LWltYWdlJyk7XG4gICAgICAgICAgICAgICAgICAgIHByZXZpZXdDb250YWluZXIuaW5uZXJIVE1MID0gZGVmYXVsdEF2YXRhckhUTUw7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXNlckRhdGEuYXZhdGFyID0gJ2RlZmF1bHQnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgIFxuICAgICAgICAgICAgZmlsZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZmlsZSA9IGUudGFyZ2V0LmZpbGVzWzBdO1xuICAgICAgICAgICAgICAgIGlmIChmaWxlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICAgICAgICAgICAgICAgIHJlYWRlci5vbmxvYWQgPSAoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaW1hZ2VVcmwgPSBlLnRhcmdldC5yZXN1bHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcmV2aWV3Q29udGFpbmVyID0gbW9kYWwucXVlcnlTZWxlY3RvcignI2F2YXRhci1wcmV2aWV3LWltYWdlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcmV2aWV3Q29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJldmlld0NvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7aW1hZ2VVcmx9KWA7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVzZXJEYXRhLmF2YXRhciA9IGltYWdlVXJsO1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICBcbiAgICAgICAgICAgIGNvbXBsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuY29tcGxldGVPbmJvYXJkaW5nKG1vZGFsLCByZXNvbHZlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjb21wbGV0ZU9uYm9hcmRpbmcobW9kYWwsIHJlc29sdmUpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2Jvb3Rkb1VzZXInLCBKU09OLnN0cmluZ2lmeSh0aGlzLnVzZXJEYXRhKSk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQobW9kYWwpO1xuICAgICAgICByZXNvbHZlKHRoaXMudXNlckRhdGEpO1xuICAgIH1cbn0iLCJpbXBvcnQgVG9kb01hbmFnZXIsIHsgVG9kbyB9IGZyb20gJy4vdG9kb3MnO1xuXG5leHBvcnQgY2xhc3MgUHJvamVjdCB7XG4gICAgY29uc3RydWN0b3IobmFtZSkge1xuICAgICAgICB0aGlzLmlkID0gRGF0ZS5ub3coKS50b1N0cmluZygpO1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLnRvZG9zID0gW107XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9qZWN0TWFuYWdlciB7XG4gICAgY29uc3RydWN0b3IodG9kb01hbmFnZXIpIHtcbiAgICAgICAgdGhpcy5wcm9qZWN0cyA9IFtdO1xuICAgICAgICB0aGlzLnRvZG9NYW5hZ2VyID0gdG9kb01hbmFnZXI7XG4gICAgICAgIHRoaXMuZGVmYXVsdFByb2plY3RzID0gW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwiRGF0aW5nIEFwcCBmb3IgRGV2ZWxvcGVyc1wiLFxuICAgICAgICAgICAgICAgIHRhc2s6IHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiRml4IGJ1ZyB3aGVyZSBhbGwgbWF0Y2hlcyBhcmUgJ3VuZGVmaW5lZCdcIixcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiVXNlcnMgY29tcGxhaW5pbmcgdGhleSBvbmx5IG1hdGNoIHdpdGggbnVsbCBvciB1bmRlZmluZWQuIE5lZWQgdG8gaW1wbGVtZW50IHByb3BlciB0eXBlIGNoZWNraW5nLlwiLFxuICAgICAgICAgICAgICAgICAgICBwcmlvcml0eTogXCJoaWdoXCIsXG4gICAgICAgICAgICAgICAgICAgIGR1ZURhdGU6ICgpID0+IG5ldyBEYXRlKERhdGUubm93KCkgKyA4NjQwMDAwMCkudG9JU09TdHJpbmcoKS5zcGxpdCgnVCcpWzBdXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcIkNhdCBQaWMgTkZUIE1hcmtldHBsYWNlXCIsIFxuICAgICAgICAgICAgICAgIHRhc2s6IHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiSW1wbGVtZW50IGFudGktZG9nIGltYWdlIGZpbHRlclwiLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJVc2VycyBrZWVwIHVwbG9hZGluZyBkb2cgcGljcy4gTmVlZCBNTCBtb2RlbCB0byBkZXRlY3QgYW5kIGJsb2NrIG5vbi1mZWxpbmUgY29udGVudC5cIixcbiAgICAgICAgICAgICAgICAgICAgcHJpb3JpdHk6IFwibWVkaXVtXCIsXG4gICAgICAgICAgICAgICAgICAgIGR1ZURhdGU6ICgpID0+IG5ldyBEYXRlKERhdGUubm93KCkgKyAxNzI4MDAwMDApLnRvSVNPU3RyaW5nKCkuc3BsaXQoJ1QnKVswXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJBSSBUaGF0IE1ha2VzIENvZmZlZVwiLFxuICAgICAgICAgICAgICAgIHRhc2s6IHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiRGVidWcgaW5maW5pdGUgY29mZmVlIGxvb3BcIixcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiQUkga2VlcHMgYnJld2luZyBjb2ZmZWUgdW50aWwgUkFNIGlzIGZ1bGwuIE5lZWQgdG8gaW1wbGVtZW50IHByb3BlciBicmV3IGN5Y2xlIHRlcm1pbmF0aW9uLlwiLFxuICAgICAgICAgICAgICAgICAgICBwcmlvcml0eTogXCJoaWdoXCIsXG4gICAgICAgICAgICAgICAgICAgIGR1ZURhdGU6ICgpID0+IG5ldyBEYXRlKERhdGUubm93KCkgKyA4NjQwMDAwMCkudG9JU09TdHJpbmcoKS5zcGxpdCgnVCcpWzBdXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcIlN0YWNrT3ZlcmZsb3cgQnV0IE5pY2VyXCIsXG4gICAgICAgICAgICAgICAgdGFzazoge1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJBZGQgbWFuZGF0b3J5IGNvbXBsaW1lbnRzXCIsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkJlZm9yZSBtYXJraW5nIGFzIGR1cGxpY2F0ZSwgdXNlcnMgbXVzdCBzYXkgc29tZXRoaW5nIG5pY2UgZmlyc3QuXCIsXG4gICAgICAgICAgICAgICAgICAgIHByaW9yaXR5OiBcIm1lZGl1bVwiLCBcbiAgICAgICAgICAgICAgICAgICAgZHVlRGF0ZTogKCkgPT4gbmV3IERhdGUoRGF0ZS5ub3coKSArIDI1OTIwMDAwMCkudG9JU09TdHJpbmcoKS5zcGxpdCgnVCcpWzBdXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcIlNvY2lhbCBNZWRpYSBmb3IgSW50cm92ZXJ0c1wiLFxuICAgICAgICAgICAgICAgIHRhc2s6IHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiSW1wbGVtZW50ICdQcmV0ZW5kIHRvIGJlIE9mZmxpbmUnIGZlYXR1cmVcIixcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiVXNlcnMgcmVxdWVzdGluZyBhYmlsaXR5IHRvIGFwcGVhciBvZmZsaW5lIHdoaWxlIHN0aWxsIGx1cmtpbmcuXCIsXG4gICAgICAgICAgICAgICAgICAgIHByaW9yaXR5OiBcImhpZ2hcIixcbiAgICAgICAgICAgICAgICAgICAgZHVlRGF0ZTogKCkgPT4gbmV3IERhdGUoRGF0ZS5ub3coKSArIDQzMjAwMDAwMCkudG9JU09TdHJpbmcoKS5zcGxpdCgnVCcpWzBdXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcIkJpdGNvaW4gZm9yIFBldHNcIixcbiAgICAgICAgICAgICAgICB0YXNrOiB7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIkZpeCB0cmVhdC10by1jcnlwdG8gY29udmVyc2lvbiByYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkNhdHMgZ2FtaW5nIHRoZSBzeXN0ZW0gYnkgZG9pbmcgbXVsdGlwbGUgdHJhbnNhY3Rpb25zIG9mIHRoZSBzYW1lIHRyaWNrLlwiLFxuICAgICAgICAgICAgICAgICAgICBwcmlvcml0eTogXCJtZWRpdW1cIixcbiAgICAgICAgICAgICAgICAgICAgZHVlRGF0ZTogKCkgPT4gbmV3IERhdGUoRGF0ZS5ub3coKSArIDM0NTYwMDAwMCkudG9JU09TdHJpbmcoKS5zcGxpdCgnVCcpWzBdXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcIk5ldGZsaXggZm9yIERvY3VtZW50YXRpb25cIixcbiAgICAgICAgICAgICAgICB0YXNrOiB7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIkFkZCAnU2tpcCBJbnRybycgZm9yIFJFQURNRSBmaWxlc1wiLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJVc2VycyB3YW50IHRvIHNraXAgc3RyYWlnaHQgdG8gdGhlIGluc3RhbGxhdGlvbiBjb21tYW5kcy5cIixcbiAgICAgICAgICAgICAgICAgICAgcHJpb3JpdHk6IFwibG93XCIsXG4gICAgICAgICAgICAgICAgICAgIGR1ZURhdGU6ICgpID0+IG5ldyBEYXRlKERhdGUubm93KCkgKyA1MTg0MDAwMDApLnRvSVNPU3RyaW5nKCkuc3BsaXQoJ1QnKVswXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJVYmVyIGZvciBSdWJiZXIgRHVja3NcIixcbiAgICAgICAgICAgICAgICB0YXNrOiB7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIkZpeCBkdWNrIHN1cmdlIHByaWNpbmdcIixcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiU3VyZ2UgcmF0ZXMgc2t5cm9ja2V0aW5nIGR1cmluZyBwZWFrIGRlYnVnZ2luZyBob3Vycy5cIixcbiAgICAgICAgICAgICAgICAgICAgcHJpb3JpdHk6IFwibWVkaXVtXCIsXG4gICAgICAgICAgICAgICAgICAgIGR1ZURhdGU6ICgpID0+IG5ldyBEYXRlKERhdGUubm93KCkgKyAxNzI4MDAwMDApLnRvSVNPU3RyaW5nKCkuc3BsaXQoJ1QnKVswXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJUaW5kZXIgZm9yIERlc2lnbiBQYXR0ZXJuc1wiLFxuICAgICAgICAgICAgICAgIHRhc2s6IHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiSGFuZGxlIFNpbmdsZXRvbiByZWplY3Rpb24gYW54aWV0eVwiLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJTaW5nbGV0b24gcGF0dGVybiByZXBvcnRpbmcgZmVlbGluZ3Mgb2YgbG9uZWxpbmVzcyBhbmQgYWJhbmRvbm1lbnQuXCIsXG4gICAgICAgICAgICAgICAgICAgIHByaW9yaXR5OiBcImhpZ2hcIixcbiAgICAgICAgICAgICAgICAgICAgZHVlRGF0ZTogKCkgPT4gbmV3IERhdGUoRGF0ZS5ub3coKSArIDg2NDAwMDAwKS50b0lTT1N0cmluZygpLnNwbGl0KCdUJylbMF1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwiSmF2YVNjcmlwdCBGcmFtZXdvcmsgIzgsNzQyXCIsXG4gICAgICAgICAgICAgICAgdGFzazoge1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJJbnZlbnQgbmV3IGJ1enp3b3Jkc1wiLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJDdXJyZW50IG1hcmtldGluZyB0ZXJtcyBub3QgY29uZnVzaW5nIGVub3VnaC4gTmVlZCBtb3JlIHBhcmFkaWdtIHNoaWZ0cy5cIixcbiAgICAgICAgICAgICAgICAgICAgcHJpb3JpdHk6IFwibG93XCIsXG4gICAgICAgICAgICAgICAgICAgIGR1ZURhdGU6ICgpID0+IG5ldyBEYXRlKERhdGUubm93KCkgKyA2MDQ4MDAwMDApLnRvSVNPU3RyaW5nKCkuc3BsaXQoJ1QnKVswXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJBbm90aGVyIFRvZG8gQXBw4oSiXCIsXG4gICAgICAgICAgICAgICAgdGFzazoge1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJBZGQgdG9kbyBpdGVtIHRvIHRyYWNrIHRvZG8gaXRlbXNcIixcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiTWV0YS10b2RvIGZ1bmN0aW9uYWxpdHkgcmVxdWVzdGVkIGJ5IHByb2plY3QgbWFuYWdlci5cIixcbiAgICAgICAgICAgICAgICAgICAgcHJpb3JpdHk6IFwibWVkaXVtXCIsXG4gICAgICAgICAgICAgICAgICAgIGR1ZURhdGU6ICgpID0+IG5ldyBEYXRlKERhdGUubm93KCkgKyAyNTkyMDAwMDApLnRvSVNPU3RyaW5nKCkuc3BsaXQoJ1QnKVswXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJSZWRkaXQgZm9yIE9mZmljZSBQbGFudHNcIixcbiAgICAgICAgICAgICAgICB0YXNrOiB7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIkZpeCBvdmVyd2F0ZXJpbmcgbm90aWZpY2F0aW9uIHNwYW1cIixcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiQ2FjdGkgY29tcGxhaW5pbmcgYWJvdXQgZXhjZXNzaXZlIGh5ZHJhdGlvbiBzdWdnZXN0aW9ucy5cIixcbiAgICAgICAgICAgICAgICAgICAgcHJpb3JpdHk6IFwiaGlnaFwiLFxuICAgICAgICAgICAgICAgICAgICBkdWVEYXRlOiAoKSA9PiBuZXcgRGF0ZShEYXRlLm5vdygpICsgODY0MDAwMDApLnRvSVNPU3RyaW5nKCkuc3BsaXQoJ1QnKVswXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJHaXRIdWIgZm9yIFJlY2lwZXNcIixcbiAgICAgICAgICAgICAgICB0YXNrOiB7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIlJlc29sdmUgbWVyZ2UgY29uZmxpY3RzIGluIGdyYW5kbWEncyBjb29raWVzXCIsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIk11bHRpcGxlIGZvcmtzIG9mIGNob2NvbGF0ZSBjaGlwIHJlY2lwZSBjYXVzaW5nIGRlcGxveW1lbnQgaXNzdWVzLlwiLFxuICAgICAgICAgICAgICAgICAgICBwcmlvcml0eTogXCJtZWRpdW1cIixcbiAgICAgICAgICAgICAgICAgICAgZHVlRGF0ZTogKCkgPT4gbmV3IERhdGUoRGF0ZS5ub3coKSArIDE3MjgwMDAwMCkudG9JU09TdHJpbmcoKS5zcGxpdCgnVCcpWzBdXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcIkRpc2NvcmQgZm9yIFJ1YmJlciBEdWNrc1wiLFxuICAgICAgICAgICAgICAgIHRhc2s6IHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiSW1wbGVtZW50IHF1YWNrIHJlYWN0aW9uc1wiLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJOZWVkIG1vcmUgZXhwcmVzc2l2ZSB3YXlzIHRvIHJlc3BvbmQgdG8gZGVidWdnaW5nIHNlc3Npb25zLlwiLFxuICAgICAgICAgICAgICAgICAgICBwcmlvcml0eTogXCJsb3dcIixcbiAgICAgICAgICAgICAgICAgICAgZHVlRGF0ZTogKCkgPT4gbmV3IERhdGUoRGF0ZS5ub3coKSArIDM0NTYwMDAwMCkudG9JU09TdHJpbmcoKS5zcGxpdCgnVCcpWzBdXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcIkxpbmtlZEluIGZvciBBSSBCb3RzXCIsXG4gICAgICAgICAgICAgICAgdGFzazoge1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJGaWx0ZXIgb3V0IHNwYW0gZnJvbSBHUFQtMVwiLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJPbGRlciBtb2RlbHMga2VlcCBzZW5kaW5nIGNvbm5lY3Rpb24gcmVxdWVzdHMgdG8gZXZlcnlvbmUuXCIsXG4gICAgICAgICAgICAgICAgICAgIHByaW9yaXR5OiBcIm1lZGl1bVwiLFxuICAgICAgICAgICAgICAgICAgICBkdWVEYXRlOiAoKSA9PiBuZXcgRGF0ZShEYXRlLm5vdygpICsgMjU5MjAwMDAwKS50b0lTT1N0cmluZygpLnNwbGl0KCdUJylbMF1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwiTmV0ZmxpeCBmb3IgQ29kZSBSZXZpZXdzXCIsXG4gICAgICAgICAgICAgICAgdGFzazoge1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJBZGQgJ1NraXAgV2hpdGVzcGFjZSBEcmFtYScgYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIlJldmlld2VycyBzcGVuZGluZyB0b28gbXVjaCB0aW1lIGRlYmF0aW5nIHRhYnMgdnMgc3BhY2VzLlwiLFxuICAgICAgICAgICAgICAgICAgICBwcmlvcml0eTogXCJoaWdoXCIsXG4gICAgICAgICAgICAgICAgICAgIGR1ZURhdGU6ICgpID0+IG5ldyBEYXRlKERhdGUubm93KCkgKyA4NjQwMDAwMCkudG9JU09TdHJpbmcoKS5zcGxpdCgnVCcpWzBdXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcIlNwb3RpZnkgZm9yIENvbXBpbGF0aW9uIEVycm9yc1wiLFxuICAgICAgICAgICAgICAgIHRhc2s6IHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiQ3JlYXRlICdHcmVhdGVzdCBCdWdzJyBwbGF5bGlzdFwiLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJVc2VycyByZXF1ZXN0aW5nIGN1cmF0ZWQgY29sbGVjdGlvbiBvZiBtb3N0IHBhaW5mdWwgZGVidWcgc2Vzc2lvbnMuXCIsXG4gICAgICAgICAgICAgICAgICAgIHByaW9yaXR5OiBcImxvd1wiLFxuICAgICAgICAgICAgICAgICAgICBkdWVEYXRlOiAoKSA9PiBuZXcgRGF0ZShEYXRlLm5vdygpICsgNDMyMDAwMDAwKS50b0lTT1N0cmluZygpLnNwbGl0KCdUJylbMF1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwiSW5zdGFncmFtIGZvciBUZXJtaW5hbCBPdXRwdXRcIixcbiAgICAgICAgICAgICAgICB0YXNrOiB7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIkFkZCBtb3JlIHJldHJvIGZpbHRlcnNcIixcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiVXNlcnMgd2FudCB0aGVpciBzdGFjayB0cmFjZXMgdG8gbG9vayBtb3JlIGFlc3RoZXRpYy5cIixcbiAgICAgICAgICAgICAgICAgICAgcHJpb3JpdHk6IFwibWVkaXVtXCIsXG4gICAgICAgICAgICAgICAgICAgIGR1ZURhdGU6ICgpID0+IG5ldyBEYXRlKERhdGUubm93KCkgKyAxNzI4MDAwMDApLnRvSVNPU3RyaW5nKCkuc3BsaXQoJ1QnKVswXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJUaWtUb2sgZm9yIEFsZ29yaXRobXNcIixcbiAgICAgICAgICAgICAgICB0YXNrOiB7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIk9wdGltaXplIGRhbmNlIG1vdmVzIGZvciBPKDEpXCIsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkN1cnJlbnQgYWxnb3JpdGhtaWMgZGFuY2VzIHRvbyBjb21wdXRhdGlvbmFsbHkgZXhwZW5zaXZlLlwiLFxuICAgICAgICAgICAgICAgICAgICBwcmlvcml0eTogXCJoaWdoXCIsXG4gICAgICAgICAgICAgICAgICAgIGR1ZURhdGU6ICgpID0+IG5ldyBEYXRlKERhdGUubm93KCkgKyA4NjQwMDAwMCkudG9JU09TdHJpbmcoKS5zcGxpdCgnVCcpWzBdXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcIlR3aXRjaCBmb3IgRGVidWdnaW5nIFNlc3Npb25zXCIsXG4gICAgICAgICAgICAgICAgdGFzazoge1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJBZGQgY29tbWVyY2lhbCBicmVha3MgZm9yIGNvZmZlZSBydW5zXCIsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIlN0cmVhbWVycyBuZWVkIGF1dG9tYXRlZCBwYXVzZXMgd2hlbiBjYWZmZWluZSBydW5zIGxvdy5cIixcbiAgICAgICAgICAgICAgICAgICAgcHJpb3JpdHk6IFwibWVkaXVtXCIsXG4gICAgICAgICAgICAgICAgICAgIGR1ZURhdGU6ICgpID0+IG5ldyBEYXRlKERhdGUubm93KCkgKyAyNTkyMDAwMDApLnRvSVNPU3RyaW5nKCkuc3BsaXQoJ1QnKVswXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJXb3JkUHJlc3MgZm9yIE1lbWVzXCIsXG4gICAgICAgICAgICAgICAgdGFzazoge1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJJbnN0YWxsIDczIHVubmVjZXNzYXJ5IHBsdWdpbnNcIixcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiU2l0ZSBub3QgcnVubmluZyBzbG93IGVub3VnaCwgbmVlZCBtb3JlIGZlYXR1cmVzIG5vYm9keSBhc2tlZCBmb3IuXCIsXG4gICAgICAgICAgICAgICAgICAgIHByaW9yaXR5OiBcImxvd1wiLFxuICAgICAgICAgICAgICAgICAgICBkdWVEYXRlOiAoKSA9PiBuZXcgRGF0ZShEYXRlLm5vdygpICsgNTE4NDAwMDAwKS50b0lTT1N0cmluZygpLnNwbGl0KCdUJylbMF1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwiWW91VHViZSBmb3IgRXJyb3IgTWVzc2FnZXNcIixcbiAgICAgICAgICAgICAgICB0YXNrOiB7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIkltcGxlbWVudCAnU2tpcCB0byBTdGFjayBPdmVyZmxvdycgYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIlVzZXJzIHJlcXVlc3RpbmcgZGlyZWN0IGxpbmsgdG8gc29tZW9uZSB3aXRoIHNhbWUgZXJyb3IuXCIsXG4gICAgICAgICAgICAgICAgICAgIHByaW9yaXR5OiBcImhpZ2hcIixcbiAgICAgICAgICAgICAgICAgICAgZHVlRGF0ZTogKCkgPT4gbmV3IERhdGUoRGF0ZS5ub3coKSArIDg2NDAwMDAwKS50b0lTT1N0cmluZygpLnNwbGl0KCdUJylbMF1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICBdO1xuICAgICAgICB0aGlzLmxvYWRQcm9qZWN0cygpO1xuICAgIH1cblxuICAgIGxvYWRQcm9qZWN0cygpIHtcbiAgICAgICAgY29uc3Qgc2F2ZWRQcm9qZWN0cyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdib290ZG9Qcm9qZWN0cycpO1xuICAgICAgICBpZiAoc2F2ZWRQcm9qZWN0cykge1xuICAgICAgICAgICAgdGhpcy5wcm9qZWN0cyA9IEpTT04ucGFyc2Uoc2F2ZWRQcm9qZWN0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBkZWZhdWx0UHJvamVjdCA9IHRoaXMuY3JlYXRlRGVmYXVsdFByb2plY3QoKTtcbiAgICAgICAgICAgIHRoaXMucHJvamVjdHMgPSBbZGVmYXVsdFByb2plY3RdO1xuICAgICAgICAgICAgdGhpcy5zYXZlUHJvamVjdHMoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNhdmVQcm9qZWN0cygpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2Jvb3Rkb1Byb2plY3RzJywgSlNPTi5zdHJpbmdpZnkodGhpcy5wcm9qZWN0cykpO1xuICAgIH1cblxuICAgIGNyZWF0ZURlZmF1bHRQcm9qZWN0KCkge1xuICAgICAgICBjb25zdCByYW5kb21JbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMuZGVmYXVsdFByb2plY3RzLmxlbmd0aCk7XG4gICAgICAgIGNvbnN0IGRlZmF1bHRQcm9qZWN0ID0gdGhpcy5kZWZhdWx0UHJvamVjdHNbcmFuZG9tSW5kZXhdO1xuICAgICAgICBjb25zdCBwcm9qZWN0ID0gdGhpcy5jcmVhdGVQcm9qZWN0KGRlZmF1bHRQcm9qZWN0Lm5hbWUpO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgdG9kbyA9IG5ldyBUb2RvKFxuICAgICAgICAgICAgZGVmYXVsdFByb2plY3QudGFzay50aXRsZSxcbiAgICAgICAgICAgIGRlZmF1bHRQcm9qZWN0LnRhc2suZGVzY3JpcHRpb24sXG4gICAgICAgICAgICBkZWZhdWx0UHJvamVjdC50YXNrLmR1ZURhdGUoKSxcbiAgICAgICAgICAgIGRlZmF1bHRQcm9qZWN0LnRhc2sucHJpb3JpdHlcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy50b2RvTWFuYWdlci5hZGRUb2RvKHByb2plY3QuaWQsIHRvZG8pO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHByb2plY3Q7XG4gICAgfVxuXG4gICAgY3JlYXRlUHJvamVjdChuYW1lKSB7XG4gICAgICAgIGNvbnN0IHByb2plY3QgPSBuZXcgUHJvamVjdChuYW1lKTtcbiAgICAgICAgdGhpcy5wcm9qZWN0cy5wdXNoKHByb2plY3QpO1xuICAgICAgICB0aGlzLnNhdmVQcm9qZWN0cygpO1xuICAgICAgICByZXR1cm4gcHJvamVjdDtcbiAgICB9XG5cbiAgICBkZWxldGVQcm9qZWN0KHByb2plY3RJZCkge1xuICAgICAgICB0aGlzLnByb2plY3RzID0gdGhpcy5wcm9qZWN0cy5maWx0ZXIocHJvamVjdCA9PiBwcm9qZWN0LmlkICE9PSBwcm9qZWN0SWQpO1xuICAgICAgICB0aGlzLnNhdmVQcm9qZWN0cygpO1xuICAgIFxuICAgICAgICB0aGlzLnRvZG9NYW5hZ2VyLnJlbW92ZVByb2plY3RUYXNrcyhwcm9qZWN0SWQpO1xuICAgIH1cblxuICAgIGdldFByb2plY3QocHJvamVjdElkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByb2plY3RzLmZpbmQocHJvamVjdCA9PiBwcm9qZWN0LmlkID09PSBwcm9qZWN0SWQpO1xuICAgIH1cblxuICAgIGdldEFsbFByb2plY3RzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9qZWN0cztcbiAgICB9XG59IiwiaW1wb3J0IHsgaXNUb2RheSwgaXNGdXR1cmUsIHBhcnNlSVNPIH0gZnJvbSAnZGF0ZS1mbnMnO1xuXG5leHBvcnQgY2xhc3MgVG9kbyB7XG4gICAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uID0gJycsIGR1ZURhdGUgPSBudWxsLCBwcmlvcml0eSA9ICdtZWRpdW0nKSB7XG4gICAgICAgIHRoaXMuaWQgPSBEYXRlLm5vdygpLnRvU3RyaW5nKCk7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgICAgIHRoaXMuY29tcGxldGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY3JlYXRlZEF0ID0gbmV3IERhdGUoKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvZG9NYW5hZ2VyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy50b2RvcyA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5sb2FkVG9kb3MoKTtcbiAgICB9XG5cbiAgICBsb2FkVG9kb3MoKSB7XG4gICAgICAgIGNvbnN0IHNhdmVkVG9kb3MgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYm9vdGRvVG9kb3MnKTtcbiAgICAgICAgaWYgKHNhdmVkVG9kb3MpIHtcbiAgICAgICAgICAgIGNvbnN0IHRvZG9EYXRhID0gSlNPTi5wYXJzZShzYXZlZFRvZG9zKTtcbiAgICAgICAgICAgIHRoaXMudG9kb3MgPSBuZXcgTWFwKHRvZG9EYXRhKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNhdmVUb2RvcygpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2Jvb3Rkb1RvZG9zJywgSlNPTi5zdHJpbmdpZnkoWy4uLnRoaXMudG9kb3NdKSk7XG4gICAgfVxuXG4gICAgYWRkVG9kbyhwcm9qZWN0SWQsIHRvZG8pIHtcbiAgICAgICAgaWYgKCF0aGlzLnRvZG9zLmhhcyhwcm9qZWN0SWQpKSB7XG4gICAgICAgICAgICB0aGlzLnRvZG9zLnNldChwcm9qZWN0SWQsIFtdKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnRvZG9zLmdldChwcm9qZWN0SWQpLnB1c2godG9kbyk7XG4gICAgICAgIHRoaXMuc2F2ZVRvZG9zKCk7XG4gICAgfVxuXG4gICAgZ2V0VG9kbyhwcm9qZWN0SWQsIHRvZG9JZCkge1xuICAgICAgICBjb25zdCBwcm9qZWN0VG9kb3MgPSB0aGlzLnRvZG9zLmdldChwcm9qZWN0SWQpO1xuICAgICAgICBpZiAocHJvamVjdFRvZG9zKSB7XG4gICAgICAgICAgICByZXR1cm4gcHJvamVjdFRvZG9zLmZpbmQodG9kbyA9PiB0b2RvLmlkID09PSB0b2RvSWQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBcbiAgICB1cGRhdGVUb2RvKHByb2plY3RJZCwgdG9kb0lkLCB1cGRhdGVkVG9kbykge1xuICAgICAgICBjb25zdCBwcm9qZWN0VG9kb3MgPSB0aGlzLnRvZG9zLmdldChwcm9qZWN0SWQpO1xuICAgICAgICBpZiAocHJvamVjdFRvZG9zKSB7XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IHByb2plY3RUb2Rvcy5maW5kSW5kZXgodG9kbyA9PiB0b2RvLmlkID09PSB0b2RvSWQpO1xuICAgICAgICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIHByb2plY3RUb2Rvc1tpbmRleF0gPSB1cGRhdGVkVG9kbztcbiAgICAgICAgICAgICAgICB0aGlzLnNhdmVUb2RvcygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0QWxsVG9kb3MoKSB7XG4gICAgICAgIGNvbnN0IGFsbFRvZG9zID0gW107XG4gICAgICAgIHRoaXMudG9kb3MuZm9yRWFjaCgodG9kb3MsIHByb2plY3RJZCkgPT4ge1xuICAgICAgICAgICAgdG9kb3MuZm9yRWFjaCh0b2RvID0+IHtcbiAgICAgICAgICAgICAgICBhbGxUb2Rvcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgLi4udG9kbyxcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdElkXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBhbGxUb2RvcztcbiAgICB9XG5cbiAgICBnZXRUb2RheVRvZG9zKCkge1xuICAgICAgICBjb25zdCBhbGxUb2RvcyA9IHRoaXMuZ2V0QWxsVG9kb3MoKTtcbiAgICAgICAgcmV0dXJuIGFsbFRvZG9zLmZpbHRlcih0b2RvID0+IHtcbiAgICAgICAgICAgIGlmICghdG9kby5kdWVEYXRlIHx8IHRvZG8uY29tcGxldGVkKSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICByZXR1cm4gaXNUb2RheShwYXJzZUlTTyh0b2RvLmR1ZURhdGUpKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ2V0VXBjb21pbmdUb2RvcygpIHtcbiAgICAgICAgY29uc3QgYWxsVG9kb3MgPSB0aGlzLmdldEFsbFRvZG9zKCk7XG4gICAgICAgIHJldHVybiBhbGxUb2Rvcy5maWx0ZXIodG9kbyA9PiB7XG4gICAgICAgICAgICBpZiAoIXRvZG8uZHVlRGF0ZSB8fCB0b2RvLmNvbXBsZXRlZCkgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgcmV0dXJuIGlzRnV0dXJlKHBhcnNlSVNPKHRvZG8uZHVlRGF0ZSkpO1xuICAgICAgICB9KS5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gcGFyc2VJU08oYS5kdWVEYXRlKSAtIHBhcnNlSVNPKGIuZHVlRGF0ZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGRlbGV0ZVRvZG8ocHJvamVjdElkLCB0b2RvSWQpIHtcbiAgICAgICAgY29uc3QgcHJvamVjdFRvZG9zID0gdGhpcy50b2Rvcy5nZXQocHJvamVjdElkKTtcbiAgICAgICAgaWYgKHByb2plY3RUb2Rvcykge1xuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBwcm9qZWN0VG9kb3MuZmluZEluZGV4KHRvZG8gPT4gdG9kby5pZCA9PT0gdG9kb0lkKTtcbiAgICAgICAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICBwcm9qZWN0VG9kb3Muc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNhdmVUb2RvcygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdG9nZ2xlVG9kb0NvbXBsZXRlKHByb2plY3RJZCwgdG9kb0lkKSB7XG4gICAgICAgIGNvbnN0IHByb2plY3RUb2RvcyA9IHRoaXMudG9kb3MuZ2V0KHByb2plY3RJZCk7XG4gICAgICAgIGlmIChwcm9qZWN0VG9kb3MpIHtcbiAgICAgICAgICAgIGNvbnN0IHRvZG8gPSBwcm9qZWN0VG9kb3MuZmluZCh0b2RvID0+IHRvZG8uaWQgPT09IHRvZG9JZCk7XG4gICAgICAgICAgICBpZiAodG9kbykge1xuICAgICAgICAgICAgICAgIHRvZG8uY29tcGxldGVkID0gIXRvZG8uY29tcGxldGVkO1xuICAgICAgICAgICAgICAgIHRoaXMuc2F2ZVRvZG9zKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRDb21wbGV0ZWRUb2RvcygpIHtcbiAgICAgICAgY29uc3QgYWxsVG9kb3MgPSB0aGlzLmdldEFsbFRvZG9zKCk7XG4gICAgICAgIHJldHVybiBhbGxUb2Rvcy5maWx0ZXIodG9kbyA9PiB0b2RvLmNvbXBsZXRlZCk7XG4gICAgfVxuXG4gICAgZ2V0QWN0aXZlVG9kb3MoKSB7XG4gICAgICAgIGNvbnN0IGFsbFRvZG9zID0gdGhpcy5nZXRBbGxUb2RvcygpO1xuICAgICAgICByZXR1cm4gYWxsVG9kb3MuZmlsdGVyKHRvZG8gPT4gIXRvZG8uY29tcGxldGVkKTtcbiAgICB9XG5cbiAgICByZW1vdmVQcm9qZWN0VGFza3MocHJvamVjdElkKSB7XG4gICAgICAgIHRoaXMudG9kb3MuZGVsZXRlKHByb2plY3RJZCk7XG4gICAgICAgIHRoaXMuc2F2ZVRvZG9zKCk7XG4gICAgfVxufSIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuYmFja2dyb3VuZC1ib290IHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgei1pbmRleDogLTE7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIHdpZHRoOiA3MHZoO1xuICAgIGhlaWdodDogNzB2aDtcbiAgICBvcGFjaXR5OiAwLjAzO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9iYWNrZ3JvdW5kLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGVBQWU7SUFDZixXQUFXO0lBQ1gsUUFBUTtJQUNSLFNBQVM7SUFDVCxnQ0FBZ0M7SUFDaEMsV0FBVztJQUNYLFlBQVk7SUFDWixhQUFhO0lBQ2Isb0JBQW9CO0lBQ3BCLDZCQUE2QjtBQUNqQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuYmFja2dyb3VuZC1ib290IHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB6LWluZGV4OiAtMTtcXG4gICAgdG9wOiA1MCU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICAgIHdpZHRoOiA3MHZoO1xcbiAgICBoZWlnaHQ6IDcwdmg7XFxuICAgIG9wYWNpdHk6IDAuMDM7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgZWFzZTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuYXBwLWNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDE7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxuICAgICAgICBcImhlYWRlciBoZWFkZXJcIlxuICAgICAgICBcInNpZGViYXIgbWFpblwiO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjUwcHggMWZyO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnI7XG4gICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29sb3IpO1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcbn1cblxuLmFwcC1oZWFkZXIge1xuICAgIGdyaWQtYXJlYTogaGVhZGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMXJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZWFkZXItYmcpO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xufVxuXG4uaGVhZGVyLWxlZnQsIC5oZWFkZXItcmlnaHQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDFyZW07XG59XG5cbi5tZW51LXRvZ2dsZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogNHB4O1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBwYWRkaW5nOiA0cHg7XG59XG5cbi5tZW51LXRvZ2dsZSBzcGFuIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMjRweDtcbiAgICBoZWlnaHQ6IDJweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xufVxuXG4uYXBwLXNpZGViYXIge1xuICAgIGdyaWQtYXJlYTogc2lkZWJhcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlYmFyLWJnKTtcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xuICAgIHBhZGRpbmc6IDFyZW07XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbn1cblxuLnNpZGViYXItc2VjdGlvbiB7XG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbn1cblxuLnNpZGViYXItc2VjdGlvbiBoMiB7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbn1cblxuLnNpZGViYXItbmF2IHVsIHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIHBhZGRpbmc6IDA7XG59XG5cbi5zaWRlYmFyLW5hdiBhIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwYWRkaW5nOiAwLjVyZW07XG4gICAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzO1xufVxuXG4uc2lkZWJhci1uYXYgYTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXItYmcpO1xufVxuXG4uc2lkZWJhci1uYXYgYS5hY3RpdmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyLWJnKTtcbiAgICBjb2xvcjogIzAwN2JmZjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmFwcC1tYWluIHtcbiAgICBncmlkLWFyZWE6IG1haW47XG4gICAgcGFkZGluZzogMnJlbTtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xufVxuXG4uY29udGVudC1oZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbn1cblxuLnVzZXItcHJvZmlsZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMC41cmVtO1xufVxuXG4udXNlci1hdmF0YXIge1xuICAgIHdpZHRoOiAzMnB4O1xuICAgIGhlaWdodDogMzJweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnVzZXItbmFtZSB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4udXNlci1uYW1lOmhvdmVyIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuLnVzZXItYXZhdGFyIC5kZWZhdWx0LWF2YXRhciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDdiZmY7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbi51c2VyLWF2YXRhci1pbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbn1cblxuLnVzZXItcHJvZmlsZSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnVzZXItZHJvcGRvd24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDEwMCU7XG4gICAgcmlnaHQ6IDA7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RlZTJlNjtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYm94LXNoYWRvdzogMCAycHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgbWluLXdpZHRoOiAxNTBweDtcbiAgICBtYXJnaW4tdG9wOiAwLjVyZW07XG4gICAgei1pbmRleDogMTAwMDtcbn1cblxuLmRyb3Bkb3duLWl0ZW0ge1xuICAgIHBhZGRpbmc6IDAuNzVyZW0gMXJlbTtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnM7XG59XG5cbi5kcm9wZG93bi1pdGVtOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ob3Zlci1iZyk7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIC5hcHAtY29udGFpbmVyIHtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcbiAgICAgICAgICAgIFwiaGVhZGVyXCJcbiAgICAgICAgICAgIFwibWFpblwiO1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICB9XG5cbiAgICAubWVudS10b2dnbGUge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgIH1cblxuICAgIC5hcHAtc2lkZWJhciB7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgbGVmdDogLTI1MHB4O1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICAgIHdpZHRoOiAyNTBweDtcbiAgICAgICAgdHJhbnNpdGlvbjogMC4zcztcbiAgICAgICAgei1pbmRleDogMTAwMDtcbiAgICB9XG5cbiAgICAuYXBwLXNpZGViYXIuYWN0aXZlIHtcbiAgICAgICAgbGVmdDogMDtcbiAgICB9XG59XG5cbi5hcHAtdGl0bGUge1xuICAgIG1hcmdpbjogMDtcbiAgICBmb250LXNpemU6IDEuOHJlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbn1cblxuLmFwcC10aXRsZSAuYm9vdCB7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBjb2xvcjogIzJjM2U1MDtcbn1cblxuLmFwcC10aXRsZSAuZG8ge1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgY29sb3I6ICMwMDdiZmY7XG59XG5cbi5wcm9qZWN0LWl0ZW0uYWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ob3Zlci1iZyk7XG4gICAgY29sb3I6ICMwMDdiZmY7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5hYm91dC1jb250ZW50IC5mZWF0dXJlcy10ZXh0IHtcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9sYXlvdXQuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixhQUFhO0lBQ2I7O3NCQUVrQjtJQUNsQixnQ0FBZ0M7SUFDaEMsNEJBQTRCO0lBQzVCLGlCQUFpQjtJQUNqQixpQ0FBaUM7SUFDakMsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixrQ0FBa0M7SUFDbEMsNENBQTRDO0FBQ2hEOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFFBQVE7SUFDUixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGVBQWU7SUFDZixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksY0FBYztJQUNkLFdBQVc7SUFDWCxXQUFXO0lBQ1gsbUNBQW1DO0lBQ25DLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixtQ0FBbUM7SUFDbkMsMkNBQTJDO0lBQzNDLGFBQWE7SUFDYixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLHdCQUF3QjtJQUN4QixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksY0FBYztJQUNkLGVBQWU7SUFDZix3QkFBd0I7SUFDeEIscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxpQ0FBaUM7SUFDakMsY0FBYztJQUNkLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixhQUFhO0lBQ2IsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFFBQVE7SUFDUixpQkFBaUI7SUFDakIseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQix5Q0FBeUM7SUFDekMsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJO1FBQ0k7O2tCQUVVO1FBQ1YsMEJBQTBCO0lBQzlCOztJQUVBO1FBQ0ksYUFBYTtJQUNqQjs7SUFFQTtRQUNJLGVBQWU7UUFDZixZQUFZO1FBQ1osTUFBTTtRQUNOLGFBQWE7UUFDYixZQUFZO1FBQ1osZ0JBQWdCO1FBQ2hCLGFBQWE7SUFDakI7O0lBRUE7UUFDSSxPQUFPO0lBQ1g7QUFDSjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxpQ0FBaUM7SUFDakMsY0FBYztJQUNkLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuYXBwLWNvbnRhaW5lciB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgei1pbmRleDogMTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgICAgIFxcXCJoZWFkZXIgaGVhZGVyXFxcIlxcbiAgICAgICAgXFxcInNpZGViYXIgbWFpblxcXCI7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjUwcHggMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyO1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29sb3IpO1xcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XFxufVxcblxcbi5hcHAtaGVhZGVyIHtcXG4gICAgZ3JpZC1hcmVhOiBoZWFkZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhZGVyLWJnKTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XFxufVxcblxcbi5oZWFkZXItbGVmdCwgLmhlYWRlci1yaWdodCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMXJlbTtcXG59XFxuXFxuLm1lbnUtdG9nZ2xlIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiA0cHg7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBwYWRkaW5nOiA0cHg7XFxufVxcblxcbi5tZW51LXRvZ2dsZSBzcGFuIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiAyNHB4O1xcbiAgICBoZWlnaHQ6IDJweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XFxuICAgIHRyYW5zaXRpb246IDAuM3M7XFxufVxcblxcbi5hcHAtc2lkZWJhciB7XFxuICAgIGdyaWQtYXJlYTogc2lkZWJhcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZWJhci1iZyk7XFxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxufVxcblxcbi5zaWRlYmFyLXNlY3Rpb24ge1xcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbn1cXG5cXG4uc2lkZWJhci1zZWN0aW9uIGgyIHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XFxuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcXG59XFxuXFxuLnNpZGViYXItbmF2IHVsIHtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuLnNpZGViYXItbmF2IGEge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgcGFkZGluZzogMC41cmVtO1xcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnM7XFxufVxcblxcbi5zaWRlYmFyLW5hdiBhOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXItYmcpO1xcbn1cXG5cXG4uc2lkZWJhci1uYXYgYS5hY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ob3Zlci1iZyk7XFxuICAgIGNvbG9yOiAjMDA3YmZmO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmFwcC1tYWluIHtcXG4gICAgZ3JpZC1hcmVhOiBtYWluO1xcbiAgICBwYWRkaW5nOiAycmVtO1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG5cXG4uY29udGVudC1oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XFxufVxcblxcbi51c2VyLXByb2ZpbGUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDAuNXJlbTtcXG59XFxuXFxuLnVzZXItYXZhdGFyIHtcXG4gICAgd2lkdGg6IDMycHg7XFxuICAgIGhlaWdodDogMzJweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4udXNlci1uYW1lIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udXNlci1uYW1lOmhvdmVyIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblxcbi51c2VyLWF2YXRhciAuZGVmYXVsdC1hdmF0YXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YmZmO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuLnVzZXItYXZhdGFyLWltZyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG59XFxuXFxuLnVzZXItcHJvZmlsZSB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udXNlci1kcm9wZG93biB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAxMDAlO1xcbiAgICByaWdodDogMDtcXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZWUyZTY7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgYm94LXNoYWRvdzogMCAycHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICAgIG1pbi13aWR0aDogMTUwcHg7XFxuICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcXG4gICAgei1pbmRleDogMTAwMDtcXG59XFxuXFxuLmRyb3Bkb3duLWl0ZW0ge1xcbiAgICBwYWRkaW5nOiAwLjc1cmVtIDFyZW07XFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycztcXG59XFxuXFxuLmRyb3Bkb3duLWl0ZW06aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ob3Zlci1iZyk7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xcbiAgICAuYXBwLWNvbnRhaW5lciB7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICAgICAgICAgIFxcXCJoZWFkZXJcXFwiXFxuICAgICAgICAgICAgXFxcIm1haW5cXFwiO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgIH1cXG5cXG4gICAgLm1lbnUtdG9nZ2xlIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIH1cXG5cXG4gICAgLmFwcC1zaWRlYmFyIHtcXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgICAgIGxlZnQ6IC0yNTBweDtcXG4gICAgICAgIHRvcDogMDtcXG4gICAgICAgIGhlaWdodDogMTAwdmg7XFxuICAgICAgICB3aWR0aDogMjUwcHg7XFxuICAgICAgICB0cmFuc2l0aW9uOiAwLjNzO1xcbiAgICAgICAgei1pbmRleDogMTAwMDtcXG4gICAgfVxcblxcbiAgICAuYXBwLXNpZGViYXIuYWN0aXZlIHtcXG4gICAgICAgIGxlZnQ6IDA7XFxuICAgIH1cXG59XFxuXFxuLmFwcC10aXRsZSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZm9udC1zaXplOiAxLjhyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcXG59XFxuXFxuLmFwcC10aXRsZSAuYm9vdCB7XFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICAgIGNvbG9yOiAjMmMzZTUwO1xcbn1cXG5cXG4uYXBwLXRpdGxlIC5kbyB7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGNvbG9yOiAjMDA3YmZmO1xcbn1cXG5cXG4ucHJvamVjdC1pdGVtLmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyLWJnKTtcXG4gICAgY29sb3I6ICMwMDdiZmY7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uYWJvdXQtY29udGVudCAuZmVhdHVyZXMtdGV4dCB7XFxuICAgIG1hcmdpbi10b3A6IDJyZW07XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xuICAgIC0tYmctY29sb3I6ICNmZmZmZmY7XG4gICAgLS1oZWFkZXItYmc6ICNmZmZmZmY7XG4gICAgLS1zaWRlYmFyLWJnOiAjZjhmOWZhO1xuICAgIC0tdGV4dC1jb2xvcjogIzIxMjUyOTtcbiAgICAtLXRleHQtbXV0ZWQ6ICM2Yzc1N2Q7XG4gICAgLS1ib3JkZXItY29sb3I6ICNkZWUyZTY7XG4gICAgLS1ob3Zlci1iZzogcmdiYSgwLCAxMjMsIDI1NSwgMC4xKTtcbn1cblxuKiB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuYm9keSB7XG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjY7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL21haW4uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixxQkFBcUI7SUFDckIscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQix1QkFBdUI7SUFDdkIsa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSw4QkFBOEI7SUFDOUIsZ0JBQWdCO0FBQ3BCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gICAgLS1iZy1jb2xvcjogI2ZmZmZmZjtcXG4gICAgLS1oZWFkZXItYmc6ICNmZmZmZmY7XFxuICAgIC0tc2lkZWJhci1iZzogI2Y4ZjlmYTtcXG4gICAgLS10ZXh0LWNvbG9yOiAjMjEyNTI5O1xcbiAgICAtLXRleHQtbXV0ZWQ6ICM2Yzc1N2Q7XFxuICAgIC0tYm9yZGVyLWNvbG9yOiAjZGVlMmU2O1xcbiAgICAtLWhvdmVyLWJnOiByZ2JhKDAsIDEyMywgMjU1LCAwLjEpO1xcbn1cXG5cXG4qIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBzYW5zLXNlcmlmO1xcbiAgICBsaW5lLWhlaWdodDogMS42O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5vdmVybGF5IHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgei1pbmRleDogMTAwMDtcbn1cblxuLm9uYm9hcmRpbmctbW9kYWwge1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDJyZW07XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGJveC1zaGFkb3c6IDAgMnB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgIHdpZHRoOiA5MCU7XG4gICAgbWF4LXdpZHRoOiA1MDBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5vbmJvYXJkaW5nLW1vZGFsIGgyIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG4gICAgY29sb3I6ICMzMzM7XG59XG5cbi5vbmJvYXJkaW5nLW1vZGFsIGlucHV0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAwLjhyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuLmF2YXRhci11cGxvYWQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMnJlbTtcbiAgICBtYXJnaW46IDEuNXJlbSAwO1xufVxuXG4uYXZhdGFyLXByZXZpZXcge1xuICAgIHdpZHRoOiAxNTBweDtcbiAgICBoZWlnaHQ6IDE1MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICNkZGQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cblxuI2F2YXRhci1wcmV2aWV3LWltYWdlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG59XG5cbi5hdmF0YXItYWN0aW9ucyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDFyZW07XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLm9uYm9hcmRpbmctbW9kYWwgLmF2YXRhci1wcmV2aWV3IC5kZWZhdWx0LWF2YXRhciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDdiZmY7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDRyZW07IC8qIG9yIHdoYXRldmVyIHNpemUgeW91IHByZWZlciAqL1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xufVxuLmZpbGUtaW5wdXQge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5idG4ge1xuICAgIHBhZGRpbmc6IDAuOHJlbSAxLjVyZW07XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xufVxuXG4uYnRuLXByaW1hcnkge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDdiZmY7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5cbi5idG4tcHJpbWFyeTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNTZiMztcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XG4gICAgYm94LXNoYWRvdzogMCA0cHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cblxuLmJ0bi1zZWNvbmRhcnkge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XG4gICAgY29sb3I6ICMyMTI1Mjk7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RlZTJlNjtcbn1cblxuLmJ0bi1zZWNvbmRhcnk6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlMmU2ZWE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9vbmJvYXJkaW5nLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGVBQWU7SUFDZixNQUFNO0lBQ04sT0FBTztJQUNQLFdBQVc7SUFDWCxZQUFZO0lBQ1osOEJBQThCO0lBQzlCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQix5Q0FBeUM7SUFDekMsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsV0FBVztBQUNmOztBQUVBO0lBQ0ksV0FBVztJQUNYLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsc0JBQXNCO0lBQ3RCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixTQUFTO0lBQ1QsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsZUFBZSxFQUFFLGdDQUFnQztJQUNqRCxpQkFBaUI7SUFDakIsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLHdDQUF3QztBQUM1Qzs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QiwyQkFBMkI7SUFDM0Isd0NBQXdDO0FBQzVDOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsMkJBQTJCO0FBQy9CXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5vdmVybGF5IHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHotaW5kZXg6IDEwMDA7XFxufVxcblxcbi5vbmJvYXJkaW5nLW1vZGFsIHtcXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XFxuICAgIHBhZGRpbmc6IDJyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgYm94LXNoYWRvdzogMCAycHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICAgIHdpZHRoOiA5MCU7XFxuICAgIG1heC13aWR0aDogNTAwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLm9uYm9hcmRpbmctbW9kYWwgaDIge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XFxuICAgIGNvbG9yOiAjMzMzO1xcbn1cXG5cXG4ub25ib2FyZGluZy1tb2RhbCBpbnB1dCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiAwLjhyZW07XFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG59XFxuXFxuLmF2YXRhci11cGxvYWQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDJyZW07XFxuICAgIG1hcmdpbjogMS41cmVtIDA7XFxufVxcblxcbi5hdmF0YXItcHJldmlldyB7XFxuICAgIHdpZHRoOiAxNTBweDtcXG4gICAgaGVpZ2h0OiAxNTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZGRkO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbn1cXG5cXG4jYXZhdGFyLXByZXZpZXctaW1hZ2Uge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxufVxcblxcbi5hdmF0YXItYWN0aW9ucyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMXJlbTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ub25ib2FyZGluZy1tb2RhbCAuYXZhdGFyLXByZXZpZXcgLmRlZmF1bHQtYXZhdGFyIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiA0cmVtOyAvKiBvciB3aGF0ZXZlciBzaXplIHlvdSBwcmVmZXIgKi9cXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG4uZmlsZS1pbnB1dCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5idG4ge1xcbiAgICBwYWRkaW5nOiAwLjhyZW0gMS41cmVtO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xcbn1cXG5cXG4uYnRuLXByaW1hcnkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YmZmO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxufVxcblxcbi5idG4tcHJpbWFyeTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDU2YjM7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcXG4gICAgYm94LXNoYWRvdzogMCA0cHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG59XFxuXFxuLmJ0bi1zZWNvbmRhcnkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xcbiAgICBjb2xvcjogIzIxMjUyOTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RlZTJlNjtcXG59XFxuXFxuLmJ0bi1zZWNvbmRhcnk6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTJlNmVhO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLnByb2plY3RzLWxpc3Qge1xuICAgIG1hcmdpbjogMXJlbSAwO1xufVxuXG4ucHJvamVjdC1pdGVtIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIHBhZGRpbmc6IDAuNXJlbTtcbiAgICBtYXJnaW46IDAuMjVyZW0gMDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycztcbn1cblxuLnByb2plY3QtaXRlbTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXItYmcpO1xufVxuXG4uc2lkZWJhci1uYXYgYS5hY3RpdmUsXG4ucHJvamVjdC1pdGVtLmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXItYmcpO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ucHJvamVjdC1uYW1lIHtcbiAgICBmbGV4LWdyb3c6IDE7XG4gICAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XG59XG5cbi5kZWxldGUtcHJvamVjdCB7XG4gICAgb3BhY2l0eTogMDtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjb2xvcjogIzIxMjUyOTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcGFkZGluZzogMC4yNXJlbTtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnM7XG59XG5cbi5wcm9qZWN0LWl0ZW06aG92ZXIgLmRlbGV0ZS1wcm9qZWN0IHtcbiAgICBvcGFjaXR5OiAxO1xufVxuXG4uYWRkLXByb2plY3QtZm9ybSB7XG4gICAgbWFyZ2luLXRvcDogMXJlbTtcbn1cblxuLmFkZC1wcm9qZWN0LWlucHV0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAwLjVyZW07XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xufVxuXG4ucHJvamVjdC1hY3Rpb25zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogMC41cmVtO1xufVxuXG4uYnRuLWFkZC1wcm9qZWN0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAwLjVyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnM7XG59XG5cbi5idG4tYWRkLXByb2plY3Q6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDU2YjM7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3Byb2plY3RzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDhCQUE4QjtJQUM5QixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksaUNBQWlDO0FBQ3JDOztBQUVBOztJQUVJLGlDQUFpQztJQUNqQyxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osY0FBYztJQUNkLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGVBQWU7SUFDZixxQ0FBcUM7SUFDckMsa0JBQWtCO0lBQ2xCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsZUFBZTtJQUNmLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIucHJvamVjdHMtbGlzdCB7XFxuICAgIG1hcmdpbjogMXJlbSAwO1xcbn1cXG5cXG4ucHJvamVjdC1pdGVtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxuICAgIG1hcmdpbjogMC4yNXJlbSAwO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzO1xcbn1cXG5cXG4ucHJvamVjdC1pdGVtOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXItYmcpO1xcbn1cXG5cXG4uc2lkZWJhci1uYXYgYS5hY3RpdmUsXFxuLnByb2plY3QtaXRlbS5hY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ob3Zlci1iZyk7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4ucHJvamVjdC1uYW1lIHtcXG4gICAgZmxleC1ncm93OiAxO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcXG59XFxuXFxuLmRlbGV0ZS1wcm9qZWN0IHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjb2xvcjogIzIxMjUyOTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBwYWRkaW5nOiAwLjI1cmVtO1xcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnM7XFxufVxcblxcbi5wcm9qZWN0LWl0ZW06aG92ZXIgLmRlbGV0ZS1wcm9qZWN0IHtcXG4gICAgb3BhY2l0eTogMTtcXG59XFxuXFxuLmFkZC1wcm9qZWN0LWZvcm0ge1xcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcbn1cXG5cXG4uYWRkLXByb2plY3QtaW5wdXQge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogMC41cmVtO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcXG59XFxuXFxuLnByb2plY3QtYWN0aW9ucyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMC41cmVtO1xcbn1cXG5cXG4uYnRuLWFkZC1wcm9qZWN0IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnM7XFxufVxcblxcbi5idG4tYWRkLXByb2plY3Q6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1NmIzO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5tb2RhbC1vdmVybGF5IHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgei1pbmRleDogMTAwMDtcbn1cblxuLnRvZG8tbW9kYWwge1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDJyZW07XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIHdpZHRoOiA5MCU7XG4gICAgbWF4LXdpZHRoOiA1MDBweDtcbn1cblxuLnRvZG8tZm9ybSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMXJlbTtcbn1cblxuLmZvcm0tZ3JvdXAge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDAuNXJlbTtcbn1cblxuLmZvcm0tZ3JvdXAgbGFiZWwge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uZm9ybS1ncm91cCBpbnB1dCxcbi5mb3JtLWdyb3VwIHRleHRhcmVhLFxuLmZvcm0tZ3JvdXAgc2VsZWN0IHtcbiAgICBwYWRkaW5nOiAwLjVyZW07XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgZm9udC1zaXplOiAxcmVtO1xufVxuXG4udG9kby1saXN0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAwLjVyZW07XG4gICAgbWFyZ2luLXRvcDogMXJlbTtcbn1cblxuLnRvZG8taXRlbSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGdhcDogMXJlbTtcbn1cblxuLnRvZG8tY2hlY2tib3gge1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIGhlaWdodDogMjBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi50b2RvLWNvbnRlbnQge1xuICAgIGZsZXgtZ3JvdzogMTtcbn1cblxuLnRvZG8tdGl0bGUge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIG1hcmdpbi1ib3R0b206IDAuMjVyZW07XG59XG5cbi50b2RvLWRlc2NyaXB0aW9uIHtcbiAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgICBjb2xvcjogIzY2Njtcbn1cblxuLnRvZG8tbWV0YWRhdGEge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiAxcmVtO1xuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgIGNvbG9yOiAjNjY2O1xufVxuXG4udG9kby1pdGVtIC50b2RvLWFjdGlvbnMge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDAuNXJlbTtcbiAgICByaWdodDogMC41cmVtO1xufVxuXG4udG9kby1tb2RhbCAudG9kby1hY3Rpb25zIHtcbiAgICBwb3NpdGlvbjogc3RhdGljO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiAxcmVtO1xuICAgIG1hcmdpbi10b3A6IDFyZW07XG59XG5cbi50b2RvLWFjdGlvbnMgYnV0dG9uIHtcbiAgICBwYWRkaW5nOiAwLjI1cmVtO1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBjb2xvcjogIzZjNzU3ZDtcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjJzO1xufVxuXG4udG9kby1hY3Rpb25zIGJ1dHRvbjpob3ZlciB7XG4gICAgY29sb3I6ICMwMDdiZmY7XG59XG5cbi5lZGl0LXRvZG8gc3ZnIHtcbiAgICB3aWR0aDogMjBweDtcbiAgICBoZWlnaHQ6IDIwcHg7XG59XG5cbi5idG4tdG9kbyB7XG4gICAgcGFkZGluZzogMC44cmVtIDEuNXJlbTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG4gICAgbWluLXdpZHRoOiAxMDBweDtcbn1cblxuLmJ0bi10b2RvLmJ0bi1wcmltYXJ5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YmZmO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuXG4uYnRuLXRvZG8uYnRuLXByaW1hcnk6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDU2YjM7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xuICAgIGJveC1zaGFkb3c6IDAgNHB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4uYnRuLXRvZG8uYnRuLXNlY29uZGFyeSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcbiAgICBjb2xvcjogIzIxMjUyOTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGVlMmU2O1xufVxuXG4uYnRuLXRvZG8uYnRuLXNlY29uZGFyeTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UyZTZlYTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XG59XG5cbi5wcm9qZWN0LXNlY3Rpb24ge1xuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG59XG5cbi5wcm9qZWN0LWhlYWRlciB7XG4gICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgbWFyZ2luOiAxLjVyZW0gMCAxcmVtIDA7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLnByb2plY3Qtc2VjdGlvbjpmaXJzdC1jaGlsZCAucHJvamVjdC1oZWFkZXIge1xuICAgIG1hcmdpbi10b3A6IDA7XG59XG5cbi5hZGQtdGFzay1idG4ge1xuICAgIHBhZGRpbmc6IDAuOHJlbSAxLjVyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnM7XG59XG5cbi5hZGQtdGFzay1idG46aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDU2YjM7XG59XG5cbi5idG4tdG9kby5idG4tZGFuZ2VyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGMzNTQ1O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuXG4uYnRuLXRvZG8uYnRuLWRhbmdlcjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2M4MjMzMztcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XG4gICAgYm94LXNoYWRvdzogMCA0cHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi5hYm91dC1jb250ZW50IHtcbiAgICBtYXJnaW46IDEuNXJlbSAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjY7XG59XG5cbi5hYm91dC1jb250ZW50IHVsIHtcbiAgICBtYXJnaW46IDFyZW0gMDtcbiAgICBwYWRkaW5nLWxlZnQ6IDEuNXJlbTtcbn1cblxuLmFib3V0LWNvbnRlbnQgLnNpZ25hdHVyZSB7XG4gICAgbWFyZ2luLXRvcDogMnJlbTtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgY29sb3I6ICM2NjY7XG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcbn1cblxuLmFkZC10YXNrLWJ0bi5kaXNhYmxlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NjY2NjYztcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgIG9wYWNpdHk6IDAuNztcbn1cblxuLmFkZC10YXNrLWJ0bi5kaXNhYmxlZDpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NjY2NjYztcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvdG9kb3MuY3NzXCJdLFwibmFtZXNcIjpbXSxc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Q29udGVudFwiOltcIi5tb2RhbC1vdmVybGF5IHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHotaW5kZXg6IDEwMDA7XFxufVxcblxcbi50b2RvLW1vZGFsIHtcXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XFxuICAgIHBhZGRpbmc6IDJyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgd2lkdGg6IDkwJTtcXG4gICAgbWF4LXdpZHRoOiA1MDBweDtcXG59XFxuXFxuLnRvZG8tZm9ybSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMXJlbTtcXG59XFxuXFxuLmZvcm0tZ3JvdXAge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDAuNXJlbTtcXG59XFxuXFxuLmZvcm0tZ3JvdXAgbGFiZWwge1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmZvcm0tZ3JvdXAgaW5wdXQsXFxuLmZvcm0tZ3JvdXAgdGV4dGFyZWEsXFxuLmZvcm0tZ3JvdXAgc2VsZWN0IHtcXG4gICAgcGFkZGluZzogMC41cmVtO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuLnRvZG8tbGlzdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMC41cmVtO1xcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcbn1cXG5cXG4udG9kby1pdGVtIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBnYXA6IDFyZW07XFxufVxcblxcbi50b2RvLWNoZWNrYm94IHtcXG4gICAgd2lkdGg6IDIwcHg7XFxuICAgIGhlaWdodDogMjBweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udG9kby1jb250ZW50IHtcXG4gICAgZmxleC1ncm93OiAxO1xcbn1cXG5cXG4udG9kby10aXRsZSB7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBtYXJnaW4tYm90dG9tOiAwLjI1cmVtO1xcbn1cXG5cXG4udG9kby1kZXNjcmlwdGlvbiB7XFxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgICBjb2xvcjogIzY2NjtcXG59XFxuXFxuLnRvZG8tbWV0YWRhdGEge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDFyZW07XFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgICBjb2xvcjogIzY2NjtcXG59XFxuXFxuLnRvZG8taXRlbSAudG9kby1hY3Rpb25zIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDAuNXJlbTtcXG4gICAgcmlnaHQ6IDAuNXJlbTtcXG59XFxuXFxuLnRvZG8tbW9kYWwgLnRvZG8tYWN0aW9ucyB7XFxuICAgIHBvc2l0aW9uOiBzdGF0aWM7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMXJlbTtcXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcXG59XFxuXFxuLnRvZG8tYWN0aW9ucyBidXR0b24ge1xcbiAgICBwYWRkaW5nOiAwLjI1cmVtO1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgY29sb3I6ICM2Yzc1N2Q7XFxuICAgIHRyYW5zaXRpb246IGNvbG9yIDAuMnM7XFxufVxcblxcbi50b2RvLWFjdGlvbnMgYnV0dG9uOmhvdmVyIHtcXG4gICAgY29sb3I6ICMwMDdiZmY7XFxufVxcblxcbi5lZGl0LXRvZG8gc3ZnIHtcXG4gICAgd2lkdGg6IDIwcHg7XFxuICAgIGhlaWdodDogMjBweDtcXG59XFxuXFxuLmJ0bi10b2RvIHtcXG4gICAgcGFkZGluZzogMC44cmVtIDEuNXJlbTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcXG4gICAgbWluLXdpZHRoOiAxMDBweDtcXG59XFxuXFxuLmJ0bi10b2RvLmJ0bi1wcmltYXJ5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbn1cXG5cXG4uYnRuLXRvZG8uYnRuLXByaW1hcnk6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1NmIzO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XFxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmJ0bi10b2RvLmJ0bi1zZWNvbmRhcnkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xcbiAgICBjb2xvcjogIzIxMjUyOTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RlZTJlNjtcXG59XFxuXFxuLmJ0bi10b2RvLmJ0bi1zZWNvbmRhcnk6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTJlNmVhO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XFxufVxcblxcbi5wcm9qZWN0LXNlY3Rpb24ge1xcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbn1cXG5cXG4ucHJvamVjdC1oZWFkZXIge1xcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXG4gICAgbWFyZ2luOiAxLjVyZW0gMCAxcmVtIDA7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi5wcm9qZWN0LXNlY3Rpb246Zmlyc3QtY2hpbGQgLnByb2plY3QtaGVhZGVyIHtcXG4gICAgbWFyZ2luLXRvcDogMDtcXG59XFxuXFxuLmFkZC10YXNrLWJ0biB7XFxuICAgIHBhZGRpbmc6IDAuOHJlbSAxLjVyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDdiZmY7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzO1xcbn1cXG5cXG4uYWRkLXRhc2stYnRuOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNTZiMztcXG59XFxuXFxuLmJ0bi10b2RvLmJ0bi1kYW5nZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGMzNTQ1O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxufVxcblxcbi5idG4tdG9kby5idG4tZGFuZ2VyOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2M4MjMzMztcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xcbiAgICBib3gtc2hhZG93OiAwIDRweCA2cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5hYm91dC1jb250ZW50IHtcXG4gICAgbWFyZ2luOiAxLjVyZW0gMDtcXG4gICAgbGluZS1oZWlnaHQ6IDEuNjtcXG59XFxuXFxuLmFib3V0LWNvbnRlbnQgdWwge1xcbiAgICBtYXJnaW46IDFyZW0gMDtcXG4gICAgcGFkZGluZy1sZWZ0OiAxLjVyZW07XFxufVxcblxcbi5hYm91dC1jb250ZW50IC5zaWduYXR1cmUge1xcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICAgIGNvbG9yOiAjNjY2O1xcbiAgICBsaW5lLWhlaWdodDogMS41O1xcbn1cXG5cXG4uYWRkLXRhc2stYnRuLmRpc2FibGVkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NjY2NjYztcXG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG4gICAgb3BhY2l0eTogMC43O1xcbn1cXG5cXG4uYWRkLXRhc2stYnRuLmRpc2FibGVkOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NjY2NjYztcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYmFja2dyb3VuZC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9iYWNrZ3JvdW5kLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9sYXlvdXQuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbGF5b3V0LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL29uYm9hcmRpbmcuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vb25ib2FyZGluZy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcHJvamVjdHMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcHJvamVjdHMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3RvZG9zLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3RvZG9zLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgY29uc3RydWN0RnJvbSB9IGZyb20gXCIuLi9jb25zdHJ1Y3RGcm9tLmpzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVEYXRlcyhjb250ZXh0LCAuLi5kYXRlcykge1xuICBjb25zdCBub3JtYWxpemUgPSBjb25zdHJ1Y3RGcm9tLmJpbmQoXG4gICAgbnVsbCxcbiAgICBjb250ZXh0IHx8IGRhdGVzLmZpbmQoKGRhdGUpID0+IHR5cGVvZiBkYXRlID09PSBcIm9iamVjdFwiKSxcbiAgKTtcbiAgcmV0dXJuIGRhdGVzLm1hcChub3JtYWxpemUpO1xufVxuIiwiLyoqXG4gKiBAbW9kdWxlIGNvbnN0YW50c1xuICogQHN1bW1hcnkgVXNlZnVsIGNvbnN0YW50c1xuICogQGRlc2NyaXB0aW9uXG4gKiBDb2xsZWN0aW9uIG9mIHVzZWZ1bCBkYXRlIGNvbnN0YW50cy5cbiAqXG4gKiBUaGUgY29uc3RhbnRzIGNvdWxkIGJlIGltcG9ydGVkIGZyb20gYGRhdGUtZm5zL2NvbnN0YW50c2A6XG4gKlxuICogYGBgdHNcbiAqIGltcG9ydCB7IG1heFRpbWUsIG1pblRpbWUgfSBmcm9tIFwiLi9jb25zdGFudHMvZGF0ZS1mbnMvY29uc3RhbnRzXCI7XG4gKlxuICogZnVuY3Rpb24gaXNBbGxvd2VkVGltZSh0aW1lKSB7XG4gKiAgIHJldHVybiB0aW1lIDw9IG1heFRpbWUgJiYgdGltZSA+PSBtaW5UaW1lO1xuICogfVxuICogYGBgXG4gKi9cblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIGRheXNJbldlZWtcbiAqIEBzdW1tYXJ5IERheXMgaW4gMSB3ZWVrLlxuICovXG5leHBvcnQgY29uc3QgZGF5c0luV2VlayA9IDc7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBkYXlzSW5ZZWFyXG4gKiBAc3VtbWFyeSBEYXlzIGluIDEgeWVhci5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEhvdyBtYW55IGRheXMgaW4gYSB5ZWFyLlxuICpcbiAqIE9uZSB5ZWFycyBlcXVhbHMgMzY1LjI0MjUgZGF5cyBhY2NvcmRpbmcgdG8gdGhlIGZvcm11bGE6XG4gKlxuICogPiBMZWFwIHllYXIgb2NjdXJzIGV2ZXJ5IDQgeWVhcnMsIGV4Y2VwdCBmb3IgeWVhcnMgdGhhdCBhcmUgZGl2aXNpYmxlIGJ5IDEwMCBhbmQgbm90IGRpdmlzaWJsZSBieSA0MDAuXG4gKiA+IDEgbWVhbiB5ZWFyID0gKDM2NSsxLzQtMS8xMDArMS80MDApIGRheXMgPSAzNjUuMjQyNSBkYXlzXG4gKi9cbmV4cG9ydCBjb25zdCBkYXlzSW5ZZWFyID0gMzY1LjI0MjU7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtYXhUaW1lXG4gKiBAc3VtbWFyeSBNYXhpbXVtIGFsbG93ZWQgdGltZS5cbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgbWF4VGltZSB9IGZyb20gXCIuL2NvbnN0YW50cy9kYXRlLWZucy9jb25zdGFudHNcIjtcbiAqXG4gKiBjb25zdCBpc1ZhbGlkID0gODY0MDAwMDAwMDAwMDAwMSA8PSBtYXhUaW1lO1xuICogLy89PiBmYWxzZVxuICpcbiAqIG5ldyBEYXRlKDg2NDAwMDAwMDAwMDAwMDEpO1xuICogLy89PiBJbnZhbGlkIERhdGVcbiAqL1xuZXhwb3J0IGNvbnN0IG1heFRpbWUgPSBNYXRoLnBvdygxMCwgOCkgKiAyNCAqIDYwICogNjAgKiAxMDAwO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgbWluVGltZVxuICogQHN1bW1hcnkgTWluaW11bSBhbGxvd2VkIHRpbWUuXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IG1pblRpbWUgfSBmcm9tIFwiLi9jb25zdGFudHMvZGF0ZS1mbnMvY29uc3RhbnRzXCI7XG4gKlxuICogY29uc3QgaXNWYWxpZCA9IC04NjQwMDAwMDAwMDAwMDAxID49IG1pblRpbWU7XG4gKiAvLz0+IGZhbHNlXG4gKlxuICogbmV3IERhdGUoLTg2NDAwMDAwMDAwMDAwMDEpXG4gKiAvLz0+IEludmFsaWQgRGF0ZVxuICovXG5leHBvcnQgY29uc3QgbWluVGltZSA9IC1tYXhUaW1lO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgbWlsbGlzZWNvbmRzSW5XZWVrXG4gKiBAc3VtbWFyeSBNaWxsaXNlY29uZHMgaW4gMSB3ZWVrLlxuICovXG5leHBvcnQgY29uc3QgbWlsbGlzZWNvbmRzSW5XZWVrID0gNjA0ODAwMDAwO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgbWlsbGlzZWNvbmRzSW5EYXlcbiAqIEBzdW1tYXJ5IE1pbGxpc2Vjb25kcyBpbiAxIGRheS5cbiAqL1xuZXhwb3J0IGNvbnN0IG1pbGxpc2Vjb25kc0luRGF5ID0gODY0MDAwMDA7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtaWxsaXNlY29uZHNJbk1pbnV0ZVxuICogQHN1bW1hcnkgTWlsbGlzZWNvbmRzIGluIDEgbWludXRlXG4gKi9cbmV4cG9ydCBjb25zdCBtaWxsaXNlY29uZHNJbk1pbnV0ZSA9IDYwMDAwO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgbWlsbGlzZWNvbmRzSW5Ib3VyXG4gKiBAc3VtbWFyeSBNaWxsaXNlY29uZHMgaW4gMSBob3VyXG4gKi9cbmV4cG9ydCBjb25zdCBtaWxsaXNlY29uZHNJbkhvdXIgPSAzNjAwMDAwO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgbWlsbGlzZWNvbmRzSW5TZWNvbmRcbiAqIEBzdW1tYXJ5IE1pbGxpc2Vjb25kcyBpbiAxIHNlY29uZFxuICovXG5leHBvcnQgY29uc3QgbWlsbGlzZWNvbmRzSW5TZWNvbmQgPSAxMDAwO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgbWludXRlc0luWWVhclxuICogQHN1bW1hcnkgTWludXRlcyBpbiAxIHllYXIuXG4gKi9cbmV4cG9ydCBjb25zdCBtaW51dGVzSW5ZZWFyID0gNTI1NjAwO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgbWludXRlc0luTW9udGhcbiAqIEBzdW1tYXJ5IE1pbnV0ZXMgaW4gMSBtb250aC5cbiAqL1xuZXhwb3J0IGNvbnN0IG1pbnV0ZXNJbk1vbnRoID0gNDMyMDA7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtaW51dGVzSW5EYXlcbiAqIEBzdW1tYXJ5IE1pbnV0ZXMgaW4gMSBkYXkuXG4gKi9cbmV4cG9ydCBjb25zdCBtaW51dGVzSW5EYXkgPSAxNDQwO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgbWludXRlc0luSG91clxuICogQHN1bW1hcnkgTWludXRlcyBpbiAxIGhvdXIuXG4gKi9cbmV4cG9ydCBjb25zdCBtaW51dGVzSW5Ib3VyID0gNjA7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtb250aHNJblF1YXJ0ZXJcbiAqIEBzdW1tYXJ5IE1vbnRocyBpbiAxIHF1YXJ0ZXIuXG4gKi9cbmV4cG9ydCBjb25zdCBtb250aHNJblF1YXJ0ZXIgPSAzO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgbW9udGhzSW5ZZWFyXG4gKiBAc3VtbWFyeSBNb250aHMgaW4gMSB5ZWFyLlxuICovXG5leHBvcnQgY29uc3QgbW9udGhzSW5ZZWFyID0gMTI7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBxdWFydGVyc0luWWVhclxuICogQHN1bW1hcnkgUXVhcnRlcnMgaW4gMSB5ZWFyXG4gKi9cbmV4cG9ydCBjb25zdCBxdWFydGVyc0luWWVhciA9IDQ7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBzZWNvbmRzSW5Ib3VyXG4gKiBAc3VtbWFyeSBTZWNvbmRzIGluIDEgaG91ci5cbiAqL1xuZXhwb3J0IGNvbnN0IHNlY29uZHNJbkhvdXIgPSAzNjAwO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgc2Vjb25kc0luTWludXRlXG4gKiBAc3VtbWFyeSBTZWNvbmRzIGluIDEgbWludXRlLlxuICovXG5leHBvcnQgY29uc3Qgc2Vjb25kc0luTWludXRlID0gNjA7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBzZWNvbmRzSW5EYXlcbiAqIEBzdW1tYXJ5IFNlY29uZHMgaW4gMSBkYXkuXG4gKi9cbmV4cG9ydCBjb25zdCBzZWNvbmRzSW5EYXkgPSBzZWNvbmRzSW5Ib3VyICogMjQ7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBzZWNvbmRzSW5XZWVrXG4gKiBAc3VtbWFyeSBTZWNvbmRzIGluIDEgd2Vlay5cbiAqL1xuZXhwb3J0IGNvbnN0IHNlY29uZHNJbldlZWsgPSBzZWNvbmRzSW5EYXkgKiA3O1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgc2Vjb25kc0luWWVhclxuICogQHN1bW1hcnkgU2Vjb25kcyBpbiAxIHllYXIuXG4gKi9cbmV4cG9ydCBjb25zdCBzZWNvbmRzSW5ZZWFyID0gc2Vjb25kc0luRGF5ICogZGF5c0luWWVhcjtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIHNlY29uZHNJbk1vbnRoXG4gKiBAc3VtbWFyeSBTZWNvbmRzIGluIDEgbW9udGhcbiAqL1xuZXhwb3J0IGNvbnN0IHNlY29uZHNJbk1vbnRoID0gc2Vjb25kc0luWWVhciAvIDEyO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgc2Vjb25kc0luUXVhcnRlclxuICogQHN1bW1hcnkgU2Vjb25kcyBpbiAxIHF1YXJ0ZXIuXG4gKi9cbmV4cG9ydCBjb25zdCBzZWNvbmRzSW5RdWFydGVyID0gc2Vjb25kc0luTW9udGggKiAzO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgY29uc3RydWN0RnJvbVN5bWJvbFxuICogQHN1bW1hcnkgU3ltYm9sIGVuYWJsaW5nIERhdGUgZXh0ZW5zaW9ucyB0byBpbmhlcml0IHByb3BlcnRpZXMgZnJvbSB0aGUgcmVmZXJlbmNlIGRhdGUuXG4gKlxuICogVGhlIHN5bWJvbCBpcyB1c2VkIHRvIGVuYWJsZSB0aGUgYGNvbnN0cnVjdEZyb21gIGZ1bmN0aW9uIHRvIGNvbnN0cnVjdCBhIGRhdGVcbiAqIHVzaW5nIGEgcmVmZXJlbmNlIGRhdGUgYW5kIGEgdmFsdWUuIEl0IGFsbG93cyB0byB0cmFuc2ZlciBleHRyYSBwcm9wZXJ0aWVzXG4gKiBmcm9tIHRoZSByZWZlcmVuY2UgZGF0ZSB0byB0aGUgbmV3IGRhdGUuIEl0J3MgdXNlZnVsIGZvciBleHRlbnNpb25zIGxpa2VcbiAqIFtgVFpEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3R6KSB0aGF0IGFjY2VwdCBhIHRpbWUgem9uZSBhc1xuICogYSBjb25zdHJ1Y3RvciBhcmd1bWVudC5cbiAqL1xuZXhwb3J0IGNvbnN0IGNvbnN0cnVjdEZyb21TeW1ib2wgPSBTeW1ib2wuZm9yKFwiY29uc3RydWN0RGF0ZUZyb21cIik7XG4iLCJpbXBvcnQgeyBjb25zdHJ1Y3RGcm9tU3ltYm9sIH0gZnJvbSBcIi4vY29uc3RhbnRzLmpzXCI7XG5cbi8qKlxuICogQG5hbWUgY29uc3RydWN0RnJvbVxuICogQGNhdGVnb3J5IEdlbmVyaWMgSGVscGVyc1xuICogQHN1bW1hcnkgQ29uc3RydWN0cyBhIGRhdGUgdXNpbmcgdGhlIHJlZmVyZW5jZSBkYXRlIGFuZCB0aGUgdmFsdWVcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFRoZSBmdW5jdGlvbiBjb25zdHJ1Y3RzIGEgbmV3IGRhdGUgdXNpbmcgdGhlIGNvbnN0cnVjdG9yIGZyb20gdGhlIHJlZmVyZW5jZVxuICogZGF0ZSBhbmQgdGhlIGdpdmVuIHZhbHVlLiBJdCBoZWxwcyB0byBidWlsZCBnZW5lcmljIGZ1bmN0aW9ucyB0aGF0IGFjY2VwdFxuICogZGF0ZSBleHRlbnNpb25zLlxuICpcbiAqIEl0IGRlZmF1bHRzIHRvIGBEYXRlYCBpZiB0aGUgcGFzc2VkIHJlZmVyZW5jZSBkYXRlIGlzIGEgbnVtYmVyIG9yIGEgc3RyaW5nLlxuICpcbiAqIFN0YXJ0aW5nIGZyb20gdjMuNy4wLCBpdCBhbGxvd3MgdG8gY29uc3RydWN0IGEgZGF0ZSB1c2luZyBgW1N5bWJvbC5mb3IoXCJjb25zdHJ1Y3REYXRlRnJvbVwiKV1gXG4gKiBlbmFibGluZyB0byB0cmFuc2ZlciBleHRyYSBwcm9wZXJ0aWVzIGZyb20gdGhlIHJlZmVyZW5jZSBkYXRlIHRvIHRoZSBuZXcgZGF0ZS5cbiAqIEl0J3MgdXNlZnVsIGZvciBleHRlbnNpb25zIGxpa2UgW2BUWkRhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdHopXG4gKiB0aGF0IGFjY2VwdCBhIHRpbWUgem9uZSBhcyBhIGNvbnN0cnVjdG9yIGFyZ3VtZW50LlxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIHJlZmVyZW5jZSBkYXRlIHRvIHRha2UgY29uc3RydWN0b3IgZnJvbVxuICogQHBhcmFtIHZhbHVlIC0gVGhlIHZhbHVlIHRvIGNyZWF0ZSB0aGUgZGF0ZVxuICpcbiAqIEByZXR1cm5zIERhdGUgaW5pdGlhbGl6ZWQgdXNpbmcgdGhlIGdpdmVuIGRhdGUgYW5kIHZhbHVlXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IGNvbnN0cnVjdEZyb20gfSBmcm9tIFwiLi9jb25zdHJ1Y3RGcm9tL2RhdGUtZm5zXCI7XG4gKlxuICogLy8gQSBmdW5jdGlvbiB0aGF0IGNsb25lcyBhIGRhdGUgcHJlc2VydmluZyB0aGUgb3JpZ2luYWwgdHlwZVxuICogZnVuY3Rpb24gY2xvbmVEYXRlPERhdGVUeXBlIGV4dGVuZHMgRGF0ZT4oZGF0ZTogRGF0ZVR5cGUpOiBEYXRlVHlwZSB7XG4gKiAgIHJldHVybiBjb25zdHJ1Y3RGcm9tKFxuICogICAgIGRhdGUsIC8vIFVzZSBjb25zdHJ1Y3RvciBmcm9tIHRoZSBnaXZlbiBkYXRlXG4gKiAgICAgZGF0ZS5nZXRUaW1lKCkgLy8gVXNlIHRoZSBkYXRlIHZhbHVlIHRvIGNyZWF0ZSBhIG5ldyBkYXRlXG4gKiAgICk7XG4gKiB9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb25zdHJ1Y3RGcm9tKGRhdGUsIHZhbHVlKSB7XG4gIGlmICh0eXBlb2YgZGF0ZSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gZGF0ZSh2YWx1ZSk7XG5cbiAgaWYgKGRhdGUgJiYgdHlwZW9mIGRhdGUgPT09IFwib2JqZWN0XCIgJiYgY29uc3RydWN0RnJvbVN5bWJvbCBpbiBkYXRlKVxuICAgIHJldHVybiBkYXRlW2NvbnN0cnVjdEZyb21TeW1ib2xdKHZhbHVlKTtcblxuICBpZiAoZGF0ZSBpbnN0YW5jZW9mIERhdGUpIHJldHVybiBuZXcgZGF0ZS5jb25zdHJ1Y3Rvcih2YWx1ZSk7XG5cbiAgcmV0dXJuIG5ldyBEYXRlKHZhbHVlKTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBjb25zdHJ1Y3RGcm9tO1xuIiwiaW1wb3J0IHsgY29uc3RydWN0RnJvbSB9IGZyb20gXCIuL2NvbnN0cnVjdEZyb20uanNcIjtcblxuLyoqXG4gKiBAbmFtZSBjb25zdHJ1Y3ROb3dcbiAqIEBjYXRlZ29yeSBHZW5lcmljIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbnN0cnVjdHMgYSBuZXcgY3VycmVudCBkYXRlIHVzaW5nIHRoZSBwYXNzZWQgdmFsdWUgY29uc3RydWN0b3IuXG4gKiBAcHVyZSBmYWxzZVxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogVGhlIGZ1bmN0aW9uIGNvbnN0cnVjdHMgYSBuZXcgY3VycmVudCBkYXRlIHVzaW5nIHRoZSBjb25zdHJ1Y3RvciBmcm9tXG4gKiB0aGUgcmVmZXJlbmNlIGRhdGUuIEl0IGhlbHBzIHRvIGJ1aWxkIGdlbmVyaWMgZnVuY3Rpb25zIHRoYXQgYWNjZXB0IGRhdGVcbiAqIGV4dGVuc2lvbnMgYW5kIHVzZSB0aGUgY3VycmVudCBkYXRlLlxuICpcbiAqIEl0IGRlZmF1bHRzIHRvIGBEYXRlYCBpZiB0aGUgcGFzc2VkIHJlZmVyZW5jZSBkYXRlIGlzIGEgbnVtYmVyIG9yIGEgc3RyaW5nLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIHJlZmVyZW5jZSBkYXRlIHRvIHRha2UgY29uc3RydWN0b3IgZnJvbVxuICpcbiAqIEByZXR1cm5zIEN1cnJlbnQgZGF0ZSBpbml0aWFsaXplZCB1c2luZyB0aGUgZ2l2ZW4gZGF0ZSBjb25zdHJ1Y3RvclxuICpcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgeyBjb25zdHJ1Y3ROb3csIGlzU2FtZURheSB9IGZyb20gJ2RhdGUtZm5zJ1xuICpcbiAqIGZ1bmN0aW9uIGlzVG9kYXk8RGF0ZVR5cGUgZXh0ZW5kcyBEYXRlPihcbiAqICAgZGF0ZTogRGF0ZUFyZzxEYXRlVHlwZT4sXG4gKiApOiBib29sZWFuIHtcbiAqICAgLy8gSWYgd2Ugd2VyZSB0byB1c2UgYG5ldyBEYXRlKClgIGRpcmVjdGx5LCB0aGUgZnVuY3Rpb24gd291bGQgIGJlaGF2ZVxuICogICAvLyBkaWZmZXJlbnRseSBpbiBkaWZmZXJlbnQgdGltZXpvbmVzIGFuZCByZXR1cm4gZmFsc2UgZm9yIHRoZSBzYW1lIGRhdGUuXG4gKiAgIHJldHVybiBpc1NhbWVEYXkoZGF0ZSwgY29uc3RydWN0Tm93KGRhdGUpKTtcbiAqIH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbnN0cnVjdE5vdyhkYXRlKSB7XG4gIHJldHVybiBjb25zdHJ1Y3RGcm9tKGRhdGUsIERhdGUubm93KCkpO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGNvbnN0cnVjdE5vdztcbiIsImltcG9ydCB7IHRvRGF0ZSB9IGZyb20gXCIuL3RvRGF0ZS5qc1wiO1xuXG4vKipcbiAqIEBuYW1lIGlzRnV0dXJlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiBkYXRlIGluIHRoZSBmdXR1cmU/XG4gKiBAcHVyZSBmYWxzZVxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogSXMgdGhlIGdpdmVuIGRhdGUgaW4gdGhlIGZ1dHVyZT9cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBkYXRlIHRvIGNoZWNrXG4gKlxuICogQHJldHVybnMgVGhlIGRhdGUgaXMgaW4gdGhlIGZ1dHVyZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0b2RheSBpcyA2IE9jdG9iZXIgMjAxNCwgaXMgMzEgRGVjZW1iZXIgMjAxNCBpbiB0aGUgZnV0dXJlP1xuICogY29uc3QgcmVzdWx0ID0gaXNGdXR1cmUobmV3IERhdGUoMjAxNCwgMTEsIDMxKSlcbiAqIC8vPT4gdHJ1ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNGdXR1cmUoZGF0ZSkge1xuICByZXR1cm4gK3RvRGF0ZShkYXRlKSA+IERhdGUubm93KCk7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgaXNGdXR1cmU7XG4iLCJpbXBvcnQgeyBub3JtYWxpemVEYXRlcyB9IGZyb20gXCIuL19saWIvbm9ybWFsaXplRGF0ZXMuanNcIjtcbmltcG9ydCB7IHN0YXJ0T2ZEYXkgfSBmcm9tIFwiLi9zdGFydE9mRGF5LmpzXCI7XG5cbi8qKlxuICogVGhlIHtAbGluayBpc1NhbWVEYXl9IGZ1bmN0aW9uIG9wdGlvbnMuXG4gKi9cblxuLyoqXG4gKiBAbmFtZSBpc1NhbWVEYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSBkYXkgKGFuZCB5ZWFyIGFuZCBtb250aCk/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIGRheSAoYW5kIHllYXIgYW5kIG1vbnRoKT9cbiAqXG4gKiBAcGFyYW0gbGF0ZXJEYXRlIC0gVGhlIGZpcnN0IGRhdGUgdG8gY2hlY2tcbiAqIEBwYXJhbSBlYXJsaWVyRGF0ZSAtIFRoZSBzZWNvbmQgZGF0ZSB0byBjaGVja1xuICogQHBhcmFtIG9wdGlvbnMgLSBBbiBvYmplY3Qgd2l0aCBvcHRpb25zXG4gKlxuICogQHJldHVybnMgVGhlIGRhdGVzIGFyZSBpbiB0aGUgc2FtZSBkYXkgKGFuZCB5ZWFyIGFuZCBtb250aClcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDQgU2VwdGVtYmVyIDA2OjAwOjAwIGFuZCA0IFNlcHRlbWJlciAxODowMDowMCBpbiB0aGUgc2FtZSBkYXk/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVEYXkobmV3IERhdGUoMjAxNCwgOCwgNCwgNiwgMCksIG5ldyBEYXRlKDIwMTQsIDgsIDQsIDE4LCAwKSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgNCBTZXB0ZW1iZXIgYW5kIDQgT2N0b2JlciBpbiB0aGUgc2FtZSBkYXk/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVEYXkobmV3IERhdGUoMjAxNCwgOCwgNCksIG5ldyBEYXRlKDIwMTQsIDksIDQpKVxuICogLy89PiBmYWxzZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgNCBTZXB0ZW1iZXIsIDIwMTQgYW5kIDQgU2VwdGVtYmVyLCAyMDE1IGluIHRoZSBzYW1lIGRheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZURheShuZXcgRGF0ZSgyMDE0LCA4LCA0KSwgbmV3IERhdGUoMjAxNSwgOCwgNCkpXG4gKiAvLz0+IGZhbHNlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1NhbWVEYXkobGF0ZXJEYXRlLCBlYXJsaWVyRGF0ZSwgb3B0aW9ucykge1xuICBjb25zdCBbZGF0ZUxlZnRfLCBkYXRlUmlnaHRfXSA9IG5vcm1hbGl6ZURhdGVzKFxuICAgIG9wdGlvbnM/LmluLFxuICAgIGxhdGVyRGF0ZSxcbiAgICBlYXJsaWVyRGF0ZSxcbiAgKTtcbiAgcmV0dXJuICtzdGFydE9mRGF5KGRhdGVMZWZ0XykgPT09ICtzdGFydE9mRGF5KGRhdGVSaWdodF8pO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGlzU2FtZURheTtcbiIsImltcG9ydCB7IGNvbnN0cnVjdEZyb20gfSBmcm9tIFwiLi9jb25zdHJ1Y3RGcm9tLmpzXCI7XG5pbXBvcnQgeyBjb25zdHJ1Y3ROb3cgfSBmcm9tIFwiLi9jb25zdHJ1Y3ROb3cuanNcIjtcbmltcG9ydCB7IGlzU2FtZURheSB9IGZyb20gXCIuL2lzU2FtZURheS5qc1wiO1xuXG4vKipcbiAqIFRoZSB7QGxpbmsgaXNUb2RheX0gZnVuY3Rpb24gb3B0aW9ucy5cbiAqL1xuXG4vKipcbiAqIEBuYW1lIGlzVG9kYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIGRhdGUgdG9kYXk/XG4gKiBAcHVyZSBmYWxzZVxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogSXMgdGhlIGdpdmVuIGRhdGUgdG9kYXk/XG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgZGF0ZSB0byBjaGVja1xuICogQHBhcmFtIG9wdGlvbnMgLSBBbiBvYmplY3Qgd2l0aCBvcHRpb25zXG4gKlxuICogQHJldHVybnMgVGhlIGRhdGUgaXMgdG9kYXlcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdG9kYXkgaXMgNiBPY3RvYmVyIDIwMTQsIGlzIDYgT2N0b2JlciAxNDowMDowMCB0b2RheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzVG9kYXkobmV3IERhdGUoMjAxNCwgOSwgNiwgMTQsIDApKVxuICogLy89PiB0cnVlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1RvZGF5KGRhdGUsIG9wdGlvbnMpIHtcbiAgcmV0dXJuIGlzU2FtZURheShcbiAgICBjb25zdHJ1Y3RGcm9tKG9wdGlvbnM/LmluIHx8IGRhdGUsIGRhdGUpLFxuICAgIGNvbnN0cnVjdE5vdyhvcHRpb25zPy5pbiB8fCBkYXRlKSxcbiAgKTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBpc1RvZGF5O1xuIiwiaW1wb3J0IHtcbiAgbWlsbGlzZWNvbmRzSW5Ib3VyLFxuICBtaWxsaXNlY29uZHNJbk1pbnV0ZSxcbn0gZnJvbSBcIi4vY29uc3RhbnRzLmpzXCI7XG5pbXBvcnQgeyBjb25zdHJ1Y3RGcm9tIH0gZnJvbSBcIi4vY29uc3RydWN0RnJvbS5qc1wiO1xuaW1wb3J0IHsgdG9EYXRlIH0gZnJvbSBcIi4vdG9EYXRlLmpzXCI7XG5cbi8qKlxuICogVGhlIHtAbGluayBwYXJzZUlTT30gZnVuY3Rpb24gb3B0aW9ucy5cbiAqL1xuXG4vKipcbiAqIEBuYW1lIHBhcnNlSVNPXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFBhcnNlIElTTyBzdHJpbmdcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFBhcnNlIHRoZSBnaXZlbiBzdHJpbmcgaW4gSVNPIDg2MDEgZm9ybWF0IGFuZCByZXR1cm4gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBGdW5jdGlvbiBhY2NlcHRzIGNvbXBsZXRlIElTTyA4NjAxIGZvcm1hdHMgYXMgd2VsbCBhcyBwYXJ0aWFsIGltcGxlbWVudGF0aW9ucy5cbiAqIElTTyA4NjAxOiBodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lTT184NjAxXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzbid0IGEgc3RyaW5nLCB0aGUgZnVuY3Rpb24gY2Fubm90IHBhcnNlIHRoZSBzdHJpbmcgb3JcbiAqIHRoZSB2YWx1ZXMgYXJlIGludmFsaWQsIGl0IHJldHVybnMgSW52YWxpZCBEYXRlLlxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICogQHR5cGVQYXJhbSBSZXN1bHREYXRlIC0gVGhlIHJlc3VsdCBgRGF0ZWAgdHlwZSwgaXQgaXMgdGhlIHR5cGUgcmV0dXJuZWQgZnJvbSB0aGUgY29udGV4dCBmdW5jdGlvbiBpZiBpdCBpcyBwYXNzZWQsIG9yIGluZmVycmVkIGZyb20gdGhlIGFyZ3VtZW50cy5cbiAqXG4gKiBAcGFyYW0gYXJndW1lbnQgLSBUaGUgdmFsdWUgdG8gY29udmVydFxuICogQHBhcmFtIG9wdGlvbnMgLSBBbiBvYmplY3Qgd2l0aCBvcHRpb25zXG4gKlxuICogQHJldHVybnMgVGhlIHBhcnNlZCBkYXRlIGluIHRoZSBsb2NhbCB0aW1lIHpvbmVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCBzdHJpbmcgJzIwMTQtMDItMTFUMTE6MzA6MzAnIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBwYXJzZUlTTygnMjAxNC0wMi0xMVQxMTozMDozMCcpXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHN0cmluZyAnKzAyMDE0MTAxJyB0byBkYXRlLFxuICogLy8gaWYgdGhlIGFkZGl0aW9uYWwgbnVtYmVyIG9mIGRpZ2l0cyBpbiB0aGUgZXh0ZW5kZWQgeWVhciBmb3JtYXQgaXMgMTpcbiAqIGNvbnN0IHJlc3VsdCA9IHBhcnNlSVNPKCcrMDIwMTQxMDEnLCB7IGFkZGl0aW9uYWxEaWdpdHM6IDEgfSlcbiAqIC8vPT4gRnJpIEFwciAxMSAyMDE0IDAwOjAwOjAwXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUlTTyhhcmd1bWVudCwgb3B0aW9ucykge1xuICBjb25zdCBpbnZhbGlkRGF0ZSA9ICgpID0+IGNvbnN0cnVjdEZyb20ob3B0aW9ucz8uaW4sIE5hTik7XG5cbiAgY29uc3QgYWRkaXRpb25hbERpZ2l0cyA9IG9wdGlvbnM/LmFkZGl0aW9uYWxEaWdpdHMgPz8gMjtcbiAgY29uc3QgZGF0ZVN0cmluZ3MgPSBzcGxpdERhdGVTdHJpbmcoYXJndW1lbnQpO1xuXG4gIGxldCBkYXRlO1xuICBpZiAoZGF0ZVN0cmluZ3MuZGF0ZSkge1xuICAgIGNvbnN0IHBhcnNlWWVhclJlc3VsdCA9IHBhcnNlWWVhcihkYXRlU3RyaW5ncy5kYXRlLCBhZGRpdGlvbmFsRGlnaXRzKTtcbiAgICBkYXRlID0gcGFyc2VEYXRlKHBhcnNlWWVhclJlc3VsdC5yZXN0RGF0ZVN0cmluZywgcGFyc2VZZWFyUmVzdWx0LnllYXIpO1xuICB9XG5cbiAgaWYgKCFkYXRlIHx8IGlzTmFOKCtkYXRlKSkgcmV0dXJuIGludmFsaWREYXRlKCk7XG5cbiAgY29uc3QgdGltZXN0YW1wID0gK2RhdGU7XG4gIGxldCB0aW1lID0gMDtcbiAgbGV0IG9mZnNldDtcblxuICBpZiAoZGF0ZVN0cmluZ3MudGltZSkge1xuICAgIHRpbWUgPSBwYXJzZVRpbWUoZGF0ZVN0cmluZ3MudGltZSk7XG4gICAgaWYgKGlzTmFOKHRpbWUpKSByZXR1cm4gaW52YWxpZERhdGUoKTtcbiAgfVxuXG4gIGlmIChkYXRlU3RyaW5ncy50aW1lem9uZSkge1xuICAgIG9mZnNldCA9IHBhcnNlVGltZXpvbmUoZGF0ZVN0cmluZ3MudGltZXpvbmUpO1xuICAgIGlmIChpc05hTihvZmZzZXQpKSByZXR1cm4gaW52YWxpZERhdGUoKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCB0bXBEYXRlID0gbmV3IERhdGUodGltZXN0YW1wICsgdGltZSk7XG4gICAgY29uc3QgcmVzdWx0ID0gdG9EYXRlKDAsIG9wdGlvbnM/LmluKTtcbiAgICByZXN1bHQuc2V0RnVsbFllYXIoXG4gICAgICB0bXBEYXRlLmdldFVUQ0Z1bGxZZWFyKCksXG4gICAgICB0bXBEYXRlLmdldFVUQ01vbnRoKCksXG4gICAgICB0bXBEYXRlLmdldFVUQ0RhdGUoKSxcbiAgICApO1xuICAgIHJlc3VsdC5zZXRIb3VycyhcbiAgICAgIHRtcERhdGUuZ2V0VVRDSG91cnMoKSxcbiAgICAgIHRtcERhdGUuZ2V0VVRDTWludXRlcygpLFxuICAgICAgdG1wRGF0ZS5nZXRVVENTZWNvbmRzKCksXG4gICAgICB0bXBEYXRlLmdldFVUQ01pbGxpc2Vjb25kcygpLFxuICAgICk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHJldHVybiB0b0RhdGUodGltZXN0YW1wICsgdGltZSArIG9mZnNldCwgb3B0aW9ucz8uaW4pO1xufVxuXG5jb25zdCBwYXR0ZXJucyA9IHtcbiAgZGF0ZVRpbWVEZWxpbWl0ZXI6IC9bVCBdLyxcbiAgdGltZVpvbmVEZWxpbWl0ZXI6IC9bWiBdL2ksXG4gIHRpbWV6b25lOiAvKFtaKy1dLiopJC8sXG59O1xuXG5jb25zdCBkYXRlUmVnZXggPVxuICAvXi0/KD86KFxcZHszfSl8KFxcZHsyfSkoPzotPyhcXGR7Mn0pKT98VyhcXGR7Mn0pKD86LT8oXFxkezF9KSk/fCkkLztcbmNvbnN0IHRpbWVSZWdleCA9XG4gIC9eKFxcZHsyfSg/OlsuLF1cXGQqKT8pKD86Oj8oXFxkezJ9KD86Wy4sXVxcZCopPykpPyg/Ojo/KFxcZHsyfSg/OlsuLF1cXGQqKT8pKT8kLztcbmNvbnN0IHRpbWV6b25lUmVnZXggPSAvXihbKy1dKShcXGR7Mn0pKD86Oj8oXFxkezJ9KSk/JC87XG5cbmZ1bmN0aW9uIHNwbGl0RGF0ZVN0cmluZyhkYXRlU3RyaW5nKSB7XG4gIGNvbnN0IGRhdGVTdHJpbmdzID0ge307XG4gIGNvbnN0IGFycmF5ID0gZGF0ZVN0cmluZy5zcGxpdChwYXR0ZXJucy5kYXRlVGltZURlbGltaXRlcik7XG4gIGxldCB0aW1lU3RyaW5nO1xuXG4gIC8vIFRoZSByZWdleCBtYXRjaCBzaG91bGQgb25seSByZXR1cm4gYXQgbWF4aW11bSB0d28gYXJyYXkgZWxlbWVudHMuXG4gIC8vIFtkYXRlXSwgW3RpbWVdLCBvciBbZGF0ZSwgdGltZV0uXG4gIGlmIChhcnJheS5sZW5ndGggPiAyKSB7XG4gICAgcmV0dXJuIGRhdGVTdHJpbmdzO1xuICB9XG5cbiAgaWYgKC86Ly50ZXN0KGFycmF5WzBdKSkge1xuICAgIHRpbWVTdHJpbmcgPSBhcnJheVswXTtcbiAgfSBlbHNlIHtcbiAgICBkYXRlU3RyaW5ncy5kYXRlID0gYXJyYXlbMF07XG4gICAgdGltZVN0cmluZyA9IGFycmF5WzFdO1xuICAgIGlmIChwYXR0ZXJucy50aW1lWm9uZURlbGltaXRlci50ZXN0KGRhdGVTdHJpbmdzLmRhdGUpKSB7XG4gICAgICBkYXRlU3RyaW5ncy5kYXRlID0gZGF0ZVN0cmluZy5zcGxpdChwYXR0ZXJucy50aW1lWm9uZURlbGltaXRlcilbMF07XG4gICAgICB0aW1lU3RyaW5nID0gZGF0ZVN0cmluZy5zdWJzdHIoXG4gICAgICAgIGRhdGVTdHJpbmdzLmRhdGUubGVuZ3RoLFxuICAgICAgICBkYXRlU3RyaW5nLmxlbmd0aCxcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHRpbWVTdHJpbmcpIHtcbiAgICBjb25zdCB0b2tlbiA9IHBhdHRlcm5zLnRpbWV6b25lLmV4ZWModGltZVN0cmluZyk7XG4gICAgaWYgKHRva2VuKSB7XG4gICAgICBkYXRlU3RyaW5ncy50aW1lID0gdGltZVN0cmluZy5yZXBsYWNlKHRva2VuWzFdLCBcIlwiKTtcbiAgICAgIGRhdGVTdHJpbmdzLnRpbWV6b25lID0gdG9rZW5bMV07XG4gICAgfSBlbHNlIHtcbiAgICAgIGRhdGVTdHJpbmdzLnRpbWUgPSB0aW1lU3RyaW5nO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBkYXRlU3RyaW5ncztcbn1cblxuZnVuY3Rpb24gcGFyc2VZZWFyKGRhdGVTdHJpbmcsIGFkZGl0aW9uYWxEaWdpdHMpIHtcbiAgY29uc3QgcmVnZXggPSBuZXcgUmVnRXhwKFxuICAgIFwiXig/OihcXFxcZHs0fXxbKy1dXFxcXGR7XCIgK1xuICAgICAgKDQgKyBhZGRpdGlvbmFsRGlnaXRzKSArXG4gICAgICBcIn0pfChcXFxcZHsyfXxbKy1dXFxcXGR7XCIgK1xuICAgICAgKDIgKyBhZGRpdGlvbmFsRGlnaXRzKSArXG4gICAgICBcIn0pJClcIixcbiAgKTtcblxuICBjb25zdCBjYXB0dXJlcyA9IGRhdGVTdHJpbmcubWF0Y2gocmVnZXgpO1xuICAvLyBJbnZhbGlkIElTTy1mb3JtYXR0ZWQgeWVhclxuICBpZiAoIWNhcHR1cmVzKSByZXR1cm4geyB5ZWFyOiBOYU4sIHJlc3REYXRlU3RyaW5nOiBcIlwiIH07XG5cbiAgY29uc3QgeWVhciA9IGNhcHR1cmVzWzFdID8gcGFyc2VJbnQoY2FwdHVyZXNbMV0pIDogbnVsbDtcbiAgY29uc3QgY2VudHVyeSA9IGNhcHR1cmVzWzJdID8gcGFyc2VJbnQoY2FwdHVyZXNbMl0pIDogbnVsbDtcblxuICAvLyBlaXRoZXIgeWVhciBvciBjZW50dXJ5IGlzIG51bGwsIG5vdCBib3RoXG4gIHJldHVybiB7XG4gICAgeWVhcjogY2VudHVyeSA9PT0gbnVsbCA/IHllYXIgOiBjZW50dXJ5ICogMTAwLFxuICAgIHJlc3REYXRlU3RyaW5nOiBkYXRlU3RyaW5nLnNsaWNlKChjYXB0dXJlc1sxXSB8fCBjYXB0dXJlc1syXSkubGVuZ3RoKSxcbiAgfTtcbn1cblxuZnVuY3Rpb24gcGFyc2VEYXRlKGRhdGVTdHJpbmcsIHllYXIpIHtcbiAgLy8gSW52YWxpZCBJU08tZm9ybWF0dGVkIHllYXJcbiAgaWYgKHllYXIgPT09IG51bGwpIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuXG4gIGNvbnN0IGNhcHR1cmVzID0gZGF0ZVN0cmluZy5tYXRjaChkYXRlUmVnZXgpO1xuICAvLyBJbnZhbGlkIElTTy1mb3JtYXR0ZWQgc3RyaW5nXG4gIGlmICghY2FwdHVyZXMpIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuXG4gIGNvbnN0IGlzV2Vla0RhdGUgPSAhIWNhcHR1cmVzWzRdO1xuICBjb25zdCBkYXlPZlllYXIgPSBwYXJzZURhdGVVbml0KGNhcHR1cmVzWzFdKTtcbiAgY29uc3QgbW9udGggPSBwYXJzZURhdGVVbml0KGNhcHR1cmVzWzJdKSAtIDE7XG4gIGNvbnN0IGRheSA9IHBhcnNlRGF0ZVVuaXQoY2FwdHVyZXNbM10pO1xuICBjb25zdCB3ZWVrID0gcGFyc2VEYXRlVW5pdChjYXB0dXJlc1s0XSk7XG4gIGNvbnN0IGRheU9mV2VlayA9IHBhcnNlRGF0ZVVuaXQoY2FwdHVyZXNbNV0pIC0gMTtcblxuICBpZiAoaXNXZWVrRGF0ZSkge1xuICAgIGlmICghdmFsaWRhdGVXZWVrRGF0ZSh5ZWFyLCB3ZWVrLCBkYXlPZldlZWspKSB7XG4gICAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgICB9XG4gICAgcmV0dXJuIGRheU9mSVNPV2Vla1llYXIoeWVhciwgd2VlaywgZGF5T2ZXZWVrKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoMCk7XG4gICAgaWYgKFxuICAgICAgIXZhbGlkYXRlRGF0ZSh5ZWFyLCBtb250aCwgZGF5KSB8fFxuICAgICAgIXZhbGlkYXRlRGF5T2ZZZWFyRGF0ZSh5ZWFyLCBkYXlPZlllYXIpXG4gICAgKSB7XG4gICAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgICB9XG4gICAgZGF0ZS5zZXRVVENGdWxsWWVhcih5ZWFyLCBtb250aCwgTWF0aC5tYXgoZGF5T2ZZZWFyLCBkYXkpKTtcbiAgICByZXR1cm4gZGF0ZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBwYXJzZURhdGVVbml0KHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSA/IHBhcnNlSW50KHZhbHVlKSA6IDE7XG59XG5cbmZ1bmN0aW9uIHBhcnNlVGltZSh0aW1lU3RyaW5nKSB7XG4gIGNvbnN0IGNhcHR1cmVzID0gdGltZVN0cmluZy5tYXRjaCh0aW1lUmVnZXgpO1xuICBpZiAoIWNhcHR1cmVzKSByZXR1cm4gTmFOOyAvLyBJbnZhbGlkIElTTy1mb3JtYXR0ZWQgdGltZVxuXG4gIGNvbnN0IGhvdXJzID0gcGFyc2VUaW1lVW5pdChjYXB0dXJlc1sxXSk7XG4gIGNvbnN0IG1pbnV0ZXMgPSBwYXJzZVRpbWVVbml0KGNhcHR1cmVzWzJdKTtcbiAgY29uc3Qgc2Vjb25kcyA9IHBhcnNlVGltZVVuaXQoY2FwdHVyZXNbM10pO1xuXG4gIGlmICghdmFsaWRhdGVUaW1lKGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzKSkge1xuICAgIHJldHVybiBOYU47XG4gIH1cblxuICByZXR1cm4gKFxuICAgIGhvdXJzICogbWlsbGlzZWNvbmRzSW5Ib3VyICsgbWludXRlcyAqIG1pbGxpc2Vjb25kc0luTWludXRlICsgc2Vjb25kcyAqIDEwMDBcbiAgKTtcbn1cblxuZnVuY3Rpb24gcGFyc2VUaW1lVW5pdCh2YWx1ZSkge1xuICByZXR1cm4gKHZhbHVlICYmIHBhcnNlRmxvYXQodmFsdWUucmVwbGFjZShcIixcIiwgXCIuXCIpKSkgfHwgMDtcbn1cblxuZnVuY3Rpb24gcGFyc2VUaW1lem9uZSh0aW1lem9uZVN0cmluZykge1xuICBpZiAodGltZXpvbmVTdHJpbmcgPT09IFwiWlwiKSByZXR1cm4gMDtcblxuICBjb25zdCBjYXB0dXJlcyA9IHRpbWV6b25lU3RyaW5nLm1hdGNoKHRpbWV6b25lUmVnZXgpO1xuICBpZiAoIWNhcHR1cmVzKSByZXR1cm4gMDtcblxuICBjb25zdCBzaWduID0gY2FwdHVyZXNbMV0gPT09IFwiK1wiID8gLTEgOiAxO1xuICBjb25zdCBob3VycyA9IHBhcnNlSW50KGNhcHR1cmVzWzJdKTtcbiAgY29uc3QgbWludXRlcyA9IChjYXB0dXJlc1szXSAmJiBwYXJzZUludChjYXB0dXJlc1szXSkpIHx8IDA7XG5cbiAgaWYgKCF2YWxpZGF0ZVRpbWV6b25lKGhvdXJzLCBtaW51dGVzKSkge1xuICAgIHJldHVybiBOYU47XG4gIH1cblxuICByZXR1cm4gc2lnbiAqIChob3VycyAqIG1pbGxpc2Vjb25kc0luSG91ciArIG1pbnV0ZXMgKiBtaWxsaXNlY29uZHNJbk1pbnV0ZSk7XG59XG5cbmZ1bmN0aW9uIGRheU9mSVNPV2Vla1llYXIoaXNvV2Vla1llYXIsIHdlZWssIGRheSkge1xuICBjb25zdCBkYXRlID0gbmV3IERhdGUoMCk7XG4gIGRhdGUuc2V0VVRDRnVsbFllYXIoaXNvV2Vla1llYXIsIDAsIDQpO1xuICBjb25zdCBmb3VydGhPZkphbnVhcnlEYXkgPSBkYXRlLmdldFVUQ0RheSgpIHx8IDc7XG4gIGNvbnN0IGRpZmYgPSAod2VlayAtIDEpICogNyArIGRheSArIDEgLSBmb3VydGhPZkphbnVhcnlEYXk7XG4gIGRhdGUuc2V0VVRDRGF0ZShkYXRlLmdldFVUQ0RhdGUoKSArIGRpZmYpO1xuICByZXR1cm4gZGF0ZTtcbn1cblxuLy8gVmFsaWRhdGlvbiBmdW5jdGlvbnNcblxuLy8gRmVicnVhcnkgaXMgbnVsbCB0byBoYW5kbGUgdGhlIGxlYXAgeWVhciAodXNpbmcgfHwpXG5jb25zdCBkYXlzSW5Nb250aHMgPSBbMzEsIG51bGwsIDMxLCAzMCwgMzEsIDMwLCAzMSwgMzEsIDMwLCAzMSwgMzAsIDMxXTtcblxuZnVuY3Rpb24gaXNMZWFwWWVhckluZGV4KHllYXIpIHtcbiAgcmV0dXJuIHllYXIgJSA0MDAgPT09IDAgfHwgKHllYXIgJSA0ID09PSAwICYmIHllYXIgJSAxMDAgIT09IDApO1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZURhdGUoeWVhciwgbW9udGgsIGRhdGUpIHtcbiAgcmV0dXJuIChcbiAgICBtb250aCA+PSAwICYmXG4gICAgbW9udGggPD0gMTEgJiZcbiAgICBkYXRlID49IDEgJiZcbiAgICBkYXRlIDw9IChkYXlzSW5Nb250aHNbbW9udGhdIHx8IChpc0xlYXBZZWFySW5kZXgoeWVhcikgPyAyOSA6IDI4KSlcbiAgKTtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVEYXlPZlllYXJEYXRlKHllYXIsIGRheU9mWWVhcikge1xuICByZXR1cm4gZGF5T2ZZZWFyID49IDEgJiYgZGF5T2ZZZWFyIDw9IChpc0xlYXBZZWFySW5kZXgoeWVhcikgPyAzNjYgOiAzNjUpO1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZVdlZWtEYXRlKF95ZWFyLCB3ZWVrLCBkYXkpIHtcbiAgcmV0dXJuIHdlZWsgPj0gMSAmJiB3ZWVrIDw9IDUzICYmIGRheSA+PSAwICYmIGRheSA8PSA2O1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZVRpbWUoaG91cnMsIG1pbnV0ZXMsIHNlY29uZHMpIHtcbiAgaWYgKGhvdXJzID09PSAyNCkge1xuICAgIHJldHVybiBtaW51dGVzID09PSAwICYmIHNlY29uZHMgPT09IDA7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIHNlY29uZHMgPj0gMCAmJlxuICAgIHNlY29uZHMgPCA2MCAmJlxuICAgIG1pbnV0ZXMgPj0gMCAmJlxuICAgIG1pbnV0ZXMgPCA2MCAmJlxuICAgIGhvdXJzID49IDAgJiZcbiAgICBob3VycyA8IDI1XG4gICk7XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlVGltZXpvbmUoX2hvdXJzLCBtaW51dGVzKSB7XG4gIHJldHVybiBtaW51dGVzID49IDAgJiYgbWludXRlcyA8PSA1OTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBwYXJzZUlTTztcbiIsImltcG9ydCB7IHRvRGF0ZSB9IGZyb20gXCIuL3RvRGF0ZS5qc1wiO1xuXG4vKipcbiAqIFRoZSB7QGxpbmsgc3RhcnRPZkRheX0gZnVuY3Rpb24gb3B0aW9ucy5cbiAqL1xuXG4vKipcbiAqIEBuYW1lIHN0YXJ0T2ZEYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBzdGFydCBvZiBhIGRheSBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgZGF5IGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSByZXN1bHQgd2lsbCBiZSBpbiB0aGUgbG9jYWwgdGltZXpvbmUuXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKiBAdHlwZVBhcmFtIFJlc3VsdERhdGUgLSBUaGUgcmVzdWx0IGBEYXRlYCB0eXBlLCBpdCBpcyB0aGUgdHlwZSByZXR1cm5lZCBmcm9tIHRoZSBjb250ZXh0IGZ1bmN0aW9uIGlmIGl0IGlzIHBhc3NlZCwgb3IgaW5mZXJyZWQgZnJvbSB0aGUgYXJndW1lbnRzLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIG9yaWdpbmFsIGRhdGVcbiAqIEBwYXJhbSBvcHRpb25zIC0gVGhlIG9wdGlvbnNcbiAqXG4gKiBAcmV0dXJucyBUaGUgc3RhcnQgb2YgYSBkYXlcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIHN0YXJ0IG9mIGEgZGF5IGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZkRheShuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApKVxuICogLy89PiBUdWUgU2VwIDAyIDIwMTQgMDA6MDA6MDBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN0YXJ0T2ZEYXkoZGF0ZSwgb3B0aW9ucykge1xuICBjb25zdCBfZGF0ZSA9IHRvRGF0ZShkYXRlLCBvcHRpb25zPy5pbik7XG4gIF9kYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gX2RhdGU7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgc3RhcnRPZkRheTtcbiIsImltcG9ydCB7IGNvbnN0cnVjdEZyb20gfSBmcm9tIFwiLi9jb25zdHJ1Y3RGcm9tLmpzXCI7XG5cbi8qKlxuICogQG5hbWUgdG9EYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBpdHMgY2xvbmUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGEgbnVtYmVyLCBpdCBpcyB0cmVhdGVkIGFzIGEgdGltZXN0YW1wLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBub25lIG9mIHRoZSBhYm92ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgSW52YWxpZCBEYXRlLlxuICpcbiAqIFN0YXJ0aW5nIGZyb20gdjMuNy4wLCBpdCBjbG9uZXMgYSBkYXRlIHVzaW5nIGBbU3ltYm9sLmZvcihcImNvbnN0cnVjdERhdGVGcm9tXCIpXWBcbiAqIGVuYWJsaW5nIHRvIHRyYW5zZmVyIGV4dHJhIHByb3BlcnRpZXMgZnJvbSB0aGUgcmVmZXJlbmNlIGRhdGUgdG8gdGhlIG5ldyBkYXRlLlxuICogSXQncyB1c2VmdWwgZm9yIGV4dGVuc2lvbnMgbGlrZSBbYFRaRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy90eilcbiAqIHRoYXQgYWNjZXB0IGEgdGltZSB6b25lIGFzIGEgY29uc3RydWN0b3IgYXJndW1lbnQuXG4gKlxuICogKipOb3RlKio6ICphbGwqIERhdGUgYXJndW1lbnRzIHBhc3NlZCB0byBhbnkgKmRhdGUtZm5zKiBmdW5jdGlvbiBpcyBwcm9jZXNzZWQgYnkgYHRvRGF0ZWAuXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKiBAdHlwZVBhcmFtIFJlc3VsdERhdGUgLSBUaGUgcmVzdWx0IGBEYXRlYCB0eXBlLCBpdCBpcyB0aGUgdHlwZSByZXR1cm5lZCBmcm9tIHRoZSBjb250ZXh0IGZ1bmN0aW9uIGlmIGl0IGlzIHBhc3NlZCwgb3IgaW5mZXJyZWQgZnJvbSB0aGUgYXJndW1lbnRzLlxuICpcbiAqIEBwYXJhbSBhcmd1bWVudCAtIFRoZSB2YWx1ZSB0byBjb252ZXJ0XG4gKlxuICogQHJldHVybnMgVGhlIHBhcnNlZCBkYXRlIGluIHRoZSBsb2NhbCB0aW1lIHpvbmVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ2xvbmUgdGhlIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUobmV3IERhdGUoMjAxNCwgMSwgMTEsIDExLCAzMCwgMzApKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCB0aGUgdGltZXN0YW1wIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUoMTM5MjA5ODQzMDAwMClcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0b0RhdGUoYXJndW1lbnQsIGNvbnRleHQpIHtcbiAgLy8gW1RPRE9dIEdldCByaWQgb2YgYHRvRGF0ZWAgb3IgYGNvbnN0cnVjdEZyb21gP1xuICByZXR1cm4gY29uc3RydWN0RnJvbShjb250ZXh0IHx8IGFyZ3VtZW50LCBhcmd1bWVudCk7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgdG9EYXRlO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0ICYmIGRvY3VtZW50LmN1cnJlbnRTY3JpcHQudGFnTmFtZS50b1VwcGVyQ2FzZSgpID09PSAnU0NSSVBUJylcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGVzL21haW4uY3NzJztcbmltcG9ydCAnLi9zdHlsZXMvYmFja2dyb3VuZC5jc3MnO1xuaW1wb3J0ICcuL3N0eWxlcy9vbmJvYXJkaW5nLmNzcyc7XG5pbXBvcnQgJy4vc3R5bGVzL2xheW91dC5jc3MnO1xuaW1wb3J0ICcuL3N0eWxlcy9wcm9qZWN0cy5jc3MnO1xuaW1wb3J0ICcuL3N0eWxlcy90b2Rvcy5jc3MnO1xuaW1wb3J0IGJvb3RJY29uIGZyb20gJy4vYXNzZXRzL2Jvb3Quc3ZnJztcbmltcG9ydCBPbmJvYXJkaW5nIGZyb20gJy4vbW9kdWxlcy9vbmJvYXJkaW5nJztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi9tb2R1bGVzL2xheW91dCc7XG5pbXBvcnQgVG9kb01hbmFnZXIgZnJvbSAnLi9tb2R1bGVzL3RvZG9zJztcbmltcG9ydCBQcm9qZWN0TWFuYWdlciBmcm9tICcuL21vZHVsZXMvcHJvamVjdHMnO1xuXG5jb25zdCBib290ID0gbmV3IEltYWdlKCk7XG5ib290LnNyYyA9IGJvb3RJY29uO1xuYm9vdC5jbGFzc0xpc3QuYWRkKCdiYWNrZ3JvdW5kLWJvb3QnKTtcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYm9vdCk7XG5cbmNvbnN0IG9uYm9hcmRpbmcgPSBuZXcgT25ib2FyZGluZygpO1xub25ib2FyZGluZy5pbml0KCkudGhlbih1c2VyRGF0YSA9PiB7XG4gICAgY29uc29sZS5sb2coJ1VzZXIgc2V0dXAgY29tcGxldGU6JywgdXNlckRhdGEpO1xuICAgIFxuICAgIGNvbnN0IHRvZG9NYW5hZ2VyID0gbmV3IFRvZG9NYW5hZ2VyKCk7XG4gICAgY29uc3QgcHJvamVjdE1hbmFnZXIgPSBuZXcgUHJvamVjdE1hbmFnZXIodG9kb01hbmFnZXIpO1xuICAgIFxuICAgIGNvbnN0IGxheW91dCA9IG5ldyBMYXlvdXQodXNlckRhdGEsIHRvZG9NYW5hZ2VyLCBwcm9qZWN0TWFuYWdlcik7XG4gICAgbGF5b3V0LmluaXQoKTtcbiAgICBcbiAgICBjb25zdCBhcHBDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXBwLWNvbnRhaW5lcicpO1xuICAgIGNvbnN0IGV4aXN0aW5nQm9vdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5iYWNrZ3JvdW5kLWJvb3QnKTtcbiAgICBpZiAoZXhpc3RpbmdCb290KSB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZXhpc3RpbmdCb290KTtcbiAgICAgICAgYXBwQ29udGFpbmVyLnByZXBlbmQoYm9vdCk7XG4gICAgfVxufSk7Il0sIm5hbWVzIjpbIlByb2plY3RNYW5hZ2VyIiwiVG9kb01hbmFnZXIiLCJUb2RvIiwiTGF5b3V0IiwidXNlckRhdGEiLCJ0b2RvTWFuYWdlciIsInByb2plY3RNYW5hZ2VyIiwiX2NsYXNzQ2FsbENoZWNrIiwiYWN0aXZlUHJvamVjdElkIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCJjcmVhdGVIZWFkZXIiLCJoZWFkZXIiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJpbm5lckhUTUwiLCJjb25jYXQiLCJuYW1lIiwiY3JlYXRlQXZhdGFyRWxlbWVudCIsImNyZWF0ZVNpZGViYXIiLCJzaWRlYmFyIiwiY3JlYXRlTWFpbiIsIm1haW4iLCJhdmF0YXIiLCJpbml0aWFscyIsInNwbGl0IiwibWFwIiwid29yZCIsImpvaW4iLCJ0b1VwcGVyQ2FzZSIsInNsaWNlIiwiY3JlYXRlVG9kb01vZGFsIiwiX3RoaXMiLCJ0b2RvVG9FZGl0IiwiYXJndW1lbnRzIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwibW9kYWwiLCJwcm9qZWN0cyIsImdldEFsbFByb2plY3RzIiwicHJvamVjdE9wdGlvbnMiLCJwcm9qZWN0IiwiaWQiLCJwcm9qZWN0SWQiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiZHVlRGF0ZSIsInByaW9yaXR5Iiwic2hvd1RvZG9Nb2RhbCIsIl90aGlzMiIsImJvZHkiLCJhcHBlbmRDaGlsZCIsImZvcm0iLCJxdWVyeVNlbGVjdG9yIiwiY2FuY2VsQnV0dG9uIiwiZGVsZXRlQnV0dG9uIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImdldEVsZW1lbnRCeUlkIiwic2VsZWN0ZWRQcm9qZWN0SWQiLCJ0cmltIiwidXBkYXRlVG9kbyIsInRvZG8iLCJhZGRUb2RvIiwicmVuZGVyQ3VycmVudFZpZXciLCJyZW1vdmVDaGlsZCIsImRlbGV0ZVRvZG8iLCJzaG93U2lnbk91dENvbmZpcm1hdGlvbiIsImNvbmZpcm1CdG4iLCJjYW5jZWxCdG4iLCJsb2NhbFN0b3JhZ2UiLCJjbGVhciIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVsb2FkIiwic2hvd0Fib3V0TW9kYWwiLCJjbG9zZUJ0biIsInJlbmRlclRvZG9zIiwiX3RoaXMzIiwidmlldyIsInRhc2tzQ29udGFpbmVyIiwidG9kb3MiLCJnZXRUb2RheVRvZG9zIiwiZ2V0VXBjb21pbmdUb2RvcyIsImdldENvbXBsZXRlZFRvZG9zIiwicHJvamVjdFRvZG9zIiwiZ2V0QWxsVG9kb3MiLCJmaWx0ZXIiLCJnZXRBY3RpdmVUb2RvcyIsInJlbmRlclRvZG9MaXN0IiwidG9kb3NCeVByb2plY3QiLCJNYXAiLCJmb3JFYWNoIiwiZ2V0UHJvamVjdCIsImhhcyIsInNldCIsImdldCIsInB1c2giLCJodG1sIiwiQXJyYXkiLCJmcm9tIiwiZW50cmllcyIsIl9yZWYiLCJfcmVmMiIsIl9zbGljZWRUb0FycmF5IiwiX3RoaXM0IiwiY29tcGxldGVkIiwidXBkYXRlTWFpbkhlYWRlciIsImNvbnRlbnRIZWFkZXIiLCJ0ZXh0Q29udGVudCIsImluaXQiLCJhcHBDb250YWluZXIiLCJyb290Iiwic2V0dXBFdmVudExpc3RlbmVycyIsInNldHVwUHJvamVjdEV2ZW50cyIsInNldHVwVG9kb0V2ZW50cyIsIl90aGlzNSIsIm1lbnVUb2dnbGUiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJpc01vYmlsZSIsImlubmVyV2lkdGgiLCJjb250YWlucyIsInRhcmdldCIsInJlbW92ZSIsInRvdWNoU3RhcnRYIiwidG91Y2hFbmRYIiwiY2hhbmdlZFRvdWNoZXMiLCJzY3JlZW5YIiwiaGFuZGxlU3dpcGUiLCJzd2lwZURpc3RhbmNlIiwibWluU3dpcGVEaXN0YW5jZSIsInVzZXJQcm9maWxlIiwidXNlckRyb3Bkb3duIiwic3R5bGUiLCJkaXNwbGF5Iiwic2lnbk91dEJ0biIsImFib3V0QnRuIiwidmlld0xpbmtzIiwicXVlcnlTZWxlY3RvckFsbCIsImxpbmsiLCJlbCIsImFkZCIsImRhdGFzZXQiLCJfdGhpczYiLCJwcm9qZWN0c0xpc3QiLCJhZGRQcm9qZWN0QnRuIiwiYWRkUHJvamVjdEZvcm0iLCJwcm9qZWN0SW5wdXQiLCJzYXZlUHJvamVjdEJ0biIsInJlbmRlclByb2plY3RzIiwiZm9jdXMiLCJwcm9qZWN0TmFtZSIsIm5ld1Byb2plY3QiLCJjcmVhdGVQcm9qZWN0IiwicHJvamVjdEl0ZW0iLCJjbG9zZXN0IiwiZGVsZXRlUHJvamVjdCIsImFsbFRhc2tzTGluayIsImNsaWNrIiwiX3RoaXM3IiwiYWRkVGFza0J0biIsInRvZG9JdGVtIiwidG9kb0lkIiwidG9nZ2xlVG9kb0NvbXBsZXRlIiwiZ2V0VG9kbyIsImFjdGl2ZUxpbmsiLCJjdXJyZW50VmlldyIsIl90aGlzOCIsImRpc2FibGVkIiwiZGVmYXVsdCIsIk9uYm9hcmRpbmciLCJjcmVhdGVNb2RhbCIsImNyZWF0ZURlZmF1bHRBdmF0YXIiLCJnZXRBdmF0YXJPcHRpb25zIiwiY29sb3JzIiwiY29sb3IiLCJpbmRleCIsIlByb21pc2UiLCJyZXNvbHZlIiwiZXhpc3RpbmdVc2VyIiwiZ2V0SXRlbSIsIkpTT04iLCJwYXJzZSIsIm5hbWVTdGVwIiwiYXZhdGFyU3RlcCIsInVzZXJuYW1lSW5wdXQiLCJuZXh0QnRuIiwiY29tcGxldGVCdG4iLCJmaWxlSW5wdXQiLCJwcmV2aWV3SW1hZ2UiLCJkZWZhdWx0QXZhdGFySFRNTCIsInByZXZpZXdDb250YWluZXIiLCJmaWxlIiwiZmlsZXMiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwib25sb2FkIiwiaW1hZ2VVcmwiLCJyZXN1bHQiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJyZWFkQXNEYXRhVVJMIiwiY29tcGxldGVPbmJvYXJkaW5nIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsIlByb2plY3QiLCJEYXRlIiwibm93IiwidG9TdHJpbmciLCJkZWZhdWx0UHJvamVjdHMiLCJ0YXNrIiwidG9JU09TdHJpbmciLCJsb2FkUHJvamVjdHMiLCJzYXZlZFByb2plY3RzIiwiZGVmYXVsdFByb2plY3QiLCJjcmVhdGVEZWZhdWx0UHJvamVjdCIsInNhdmVQcm9qZWN0cyIsInJhbmRvbUluZGV4IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwicmVtb3ZlUHJvamVjdFRhc2tzIiwiZmluZCIsImlzVG9kYXkiLCJpc0Z1dHVyZSIsInBhcnNlSVNPIiwiY3JlYXRlZEF0IiwibG9hZFRvZG9zIiwic2F2ZWRUb2RvcyIsInRvZG9EYXRhIiwic2F2ZVRvZG9zIiwiX3RvQ29uc3VtYWJsZUFycmF5IiwidXBkYXRlZFRvZG8iLCJmaW5kSW5kZXgiLCJhbGxUb2RvcyIsIl9vYmplY3RTcHJlYWQiLCJzb3J0IiwiYSIsImIiLCJzcGxpY2UiLCJib290SWNvbiIsImJvb3QiLCJJbWFnZSIsInNyYyIsIm9uYm9hcmRpbmciLCJ0aGVuIiwiY29uc29sZSIsImxvZyIsImxheW91dCIsImV4aXN0aW5nQm9vdCIsInByZXBlbmQiXSwic291cmNlUm9vdCI6IiJ9