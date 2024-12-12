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
            if (projectId !== selectedProjectId) {
              _this2.todoManager.deleteTodo(projectId, todoToEdit.id);
              var newTodo = new _todos__WEBPACK_IMPORTED_MODULE_1__.Todo(title, description, dueDate, priority);
              _this2.todoManager.addTodo(selectedProjectId, newTodo);
            } else {
              _this2.todoManager.updateTodo(projectId, todoToEdit.id, todoToEdit);
            }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sd0ZBQXdGLFlBQVksV0FBVyxVQUFVLE1BQU0sT0FBTyxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZ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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLDRGQUE0RixVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLHVCQUF1QixhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZ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O0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUMsT0FBTyx1RkFBdUYsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxPQUFPLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FB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QVUsR0FBRyxJQUFJekUsMkRBQVUsQ0FBQyxDQUFDO0FBQ25DeUUsVUFBVSxDQUFDdEksSUFBSSxDQUFDLENBQUMsQ0FBQ3VJLElBQUksQ0FBQyxVQUFBclAsUUFBUSxFQUFJO0VBQy9Cc1AsT0FBTyxDQUFDQyxHQUFHLENBQUMsc0JBQXNCLEVBQUV2UCxRQUFRLENBQUM7RUFFN0MsSUFBTUMsV0FBVyxHQUFHLElBQUlKLHNEQUFXLENBQUMsQ0FBQztFQUNyQyxJQUFNSyxjQUFjLEdBQUcsSUFBSU4sMERBQWMsQ0FBQ0ssV0FBVyxDQUFDO0VBRXRELElBQU11UCxNQUFNLEdBQUcsSUFBSXpQLHVEQUFNLENBQUNDLFFBQVEsRUFBRUMsV0FBVyxFQUFFQyxjQUFjLENBQUM7RUFDaEVzUCxNQUFNLENBQUMxSSxJQUFJLENBQUMsQ0FBQztFQUViLElBQU1DLFlBQVksR0FBR3JHLFFBQVEsQ0FBQ3lDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQztFQUM3RCxJQUFNc00sWUFBWSxHQUFHL08sUUFBUSxDQUFDeUMsYUFBYSxDQUFDLGtCQUFrQixDQUFDO0VBQy9ELElBQUlzTSxZQUFZLEVBQUU7SUFDZC9PLFFBQVEsQ0FBQ3NDLElBQUksQ0FBQ2tCLFdBQVcsQ0FBQ3VMLFlBQVksQ0FBQztJQUN2QzFJLFlBQVksQ0FBQzJJLE9BQU8sQ0FBQ1QsSUFBSSxDQUFDO0VBQzlCO0FBQ0osQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2xheW91dC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL29uYm9hcmRpbmcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9wcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3RvZG9zLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL3N0eWxlcy9iYWNrZ3JvdW5kLmNzcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9zdHlsZXMvbGF5b3V0LmNzcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9zdHlsZXMvbWFpbi5jc3MiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvc3R5bGVzL29uYm9hcmRpbmcuY3NzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL3N0eWxlcy9wcm9qZWN0cy5jc3MiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvc3R5bGVzL3RvZG9zLmNzcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9zdHlsZXMvYmFja2dyb3VuZC5jc3M/MzYxNSIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9zdHlsZXMvbGF5b3V0LmNzcz9kODEyIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL3N0eWxlcy9tYWluLmNzcz9lODBhIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL3N0eWxlcy9vbmJvYXJkaW5nLmNzcz9jZDBlIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL3N0eWxlcy9wcm9qZWN0cy5jc3M/MWFhYSIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9zdHlsZXMvdG9kb3MuY3NzPzJiZmUiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9fbGliL25vcm1hbGl6ZURhdGVzLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9jb25zdHJ1Y3RGcm9tLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2NvbnN0cnVjdE5vdy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9pc0Z1dHVyZS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9pc1NhbWVEYXkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvaXNUb2RheS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9wYXJzZUlTTy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9zdGFydE9mRGF5LmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3RvRGF0ZS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9qZWN0TWFuYWdlciBmcm9tICcuL3Byb2plY3RzJztcbmltcG9ydCBUb2RvTWFuYWdlciwgeyBUb2RvIH0gZnJvbSAnLi90b2Rvcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExheW91dCB7XG4gICAgY29uc3RydWN0b3IodXNlckRhdGEsIHRvZG9NYW5hZ2VyLCBwcm9qZWN0TWFuYWdlcikge1xuICAgICAgICB0aGlzLnVzZXJEYXRhID0gdXNlckRhdGE7XG4gICAgICAgIHRoaXMuYWN0aXZlUHJvamVjdElkID0gbnVsbDtcbiAgICAgICAgdGhpcy50b2RvTWFuYWdlciA9IHRvZG9NYW5hZ2VyO1xuICAgICAgICB0aGlzLnByb2plY3RNYW5hZ2VyID0gcHJvamVjdE1hbmFnZXI7XG4gICAgfVxuXG4gICAgY3JlYXRlSGVhZGVyKCkge1xuICAgICAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcbiAgICAgICAgaGVhZGVyLmNsYXNzTmFtZSA9ICdhcHAtaGVhZGVyJztcblxuICAgICAgICBoZWFkZXIuaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRlci1sZWZ0XCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIm1lbnUtdG9nZ2xlXCIgYXJpYS1sYWJlbD1cIlRvZ2dsZSBNZW51XCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj48L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzPVwiYXBwLXRpdGxlXCI+PHNwYW4gY2xhc3M9XCJib290XCI+Qm9vdDwvc3Bhbj48c3BhbiBjbGFzcz1cImRvXCI+ZG88L3NwYW4+PC9oMT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRlci1yaWdodFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1c2VyLXByb2ZpbGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ1c2VyLW5hbWVcIj4ke3RoaXMudXNlckRhdGEubmFtZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1c2VyLWF2YXRhclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgJHt0aGlzLmNyZWF0ZUF2YXRhckVsZW1lbnQoKX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1c2VyLWRyb3Bkb3duXCIgc3R5bGU9XCJkaXNwbGF5OiBub25lO1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRyb3Bkb3duLWl0ZW0gYWJvdXRcIj5BYm91dDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRyb3Bkb3duLWl0ZW0gc2lnbi1vdXRcIj5TaWduIE91dDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICBgO1xuXG4gICAgICAgIHJldHVybiBoZWFkZXI7XG4gICAgfVxuXG4gICAgY3JlYXRlU2lkZWJhcigpIHtcbiAgICAgICAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2FzaWRlJyk7XG4gICAgICAgIHNpZGViYXIuY2xhc3NOYW1lID0gJ2FwcC1zaWRlYmFyJztcblxuICAgICAgICBzaWRlYmFyLmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgIDxuYXYgY2xhc3M9XCJzaWRlYmFyLW5hdlwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzaWRlYmFyLXNlY3Rpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgPGgyPkhvbWU8L2gyPlxuICAgICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIiBjbGFzcz1cImFjdGl2ZVwiIGRhdGEtdmlldz1cImFsbFwiPkFsbCBUYXNrczwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCIgZGF0YS12aWV3PVwidG9kYXlcIj5Ub2RheTwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCIgZGF0YS12aWV3PVwidXBjb21pbmdcIj5VcGNvbWluZzwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCIgZGF0YS12aWV3PVwiY29tcGxldGVkXCI+Q29tcGxldGVkPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNpZGViYXItc2VjdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICA8aDI+UHJvamVjdHM8L2gyPlxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJwcm9qZWN0cy1saXN0XCI+XG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4tYWRkLXByb2plY3RcIiBpZD1cImFkZC1wcm9qZWN0LWJ0blwiPisgQWRkIFByb2plY3Q8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFkZC1wcm9qZWN0LWZvcm1cIiBzdHlsZT1cImRpc3BsYXk6IG5vbmU7XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImFkZC1wcm9qZWN0LWlucHV0XCIgcGxhY2Vob2xkZXI9XCJQcm9qZWN0IG5hbWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9qZWN0LWFjdGlvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuLWFkZC1wcm9qZWN0XCIgaWQ9XCJzYXZlLXByb2plY3QtYnRuXCI+QWRkPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L25hdj5cbiAgICAgICAgYDtcblxuICAgICAgICByZXR1cm4gc2lkZWJhcjtcbiAgICB9XG5cbiAgICBjcmVhdGVNYWluKCkge1xuICAgICAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xuICAgICAgICBtYWluLmNsYXNzTmFtZSA9ICdhcHAtbWFpbic7XG5cbiAgICAgICAgbWFpbi5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudC1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICA8aDI+QWxsIFRhc2tzPC9oMj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYWRkLXRhc2stYnRuXCI+KyBBZGQgVGFzazwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFza3MtY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgYDtcblxuICAgICAgICByZXR1cm4gbWFpbjtcbiAgICB9XG5cbiAgICBjcmVhdGVBdmF0YXJFbGVtZW50KCkge1xuICAgICAgICBpZiAodGhpcy51c2VyRGF0YS5hdmF0YXIgPT09ICdkZWZhdWx0Jykge1xuICAgICAgICAgICAgY29uc3QgaW5pdGlhbHMgPSB0aGlzLnVzZXJEYXRhLm5hbWVcbiAgICAgICAgICAgICAgICAuc3BsaXQoJyAnKVxuICAgICAgICAgICAgICAgIC5tYXAod29yZCA9PiB3b3JkWzBdKVxuICAgICAgICAgICAgICAgIC5qb2luKCcnKVxuICAgICAgICAgICAgICAgIC50b1VwcGVyQ2FzZSgpXG4gICAgICAgICAgICAgICAgLnNsaWNlKDAsIDIpO1xuICAgICAgICAgICAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwiZGVmYXVsdC1hdmF0YXJcIj48c3Bhbj4ke2luaXRpYWxzfTwvc3Bhbj48L2Rpdj5gO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBgPGRpdiBjbGFzcz1cInVzZXItYXZhdGFyLWltZ1wiIHN0eWxlPVwiYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7dGhpcy51c2VyRGF0YS5hdmF0YXJ9KVwiPjwvZGl2PmA7XG4gICAgfVxuXG4gICAgY3JlYXRlVG9kb01vZGFsKHRvZG9Ub0VkaXQgPSBudWxsKSB7XG4gICAgICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG1vZGFsLmNsYXNzTmFtZSA9ICdtb2RhbC1vdmVybGF5JztcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHByb2plY3RzID0gdGhpcy5wcm9qZWN0TWFuYWdlci5nZXRBbGxQcm9qZWN0cygpO1xuICAgICAgICBjb25zdCBwcm9qZWN0T3B0aW9ucyA9IHByb2plY3RzXG4gICAgICAgICAgICAubWFwKHByb2plY3QgPT4gYFxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIke3Byb2plY3QuaWR9XCIgJHtwcm9qZWN0LmlkID09PSAodG9kb1RvRWRpdD8ucHJvamVjdElkIHx8IHRoaXMuYWN0aXZlUHJvamVjdElkKSA/ICdzZWxlY3RlZCcgOiAnJ30+XG4gICAgICAgICAgICAgICAgICAgICR7cHJvamVjdC5uYW1lfVxuICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICAgYClcbiAgICAgICAgICAgIC5qb2luKCcnKTtcbiAgICAgICAgXG4gICAgICAgIG1vZGFsLmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0b2RvLW1vZGFsXCI+XG4gICAgICAgICAgICAgICAgPGgyPiR7dG9kb1RvRWRpdCA/ICdFZGl0IFRhc2snIDogJ0FkZCBOZXcgVGFzayd9PC9oMj5cbiAgICAgICAgICAgICAgICA8Zm9ybSBjbGFzcz1cInRvZG8tZm9ybVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInRvZG8tdGl0bGVcIj5UaXRsZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInRvZG8tdGl0bGVcIiB2YWx1ZT1cIiR7dG9kb1RvRWRpdD8udGl0bGUgfHwgJyd9XCIgcmVxdWlyZWQ+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInRvZG8tcHJvamVjdFwiPlByb2plY3Q8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBpZD1cInRvZG8tcHJvamVjdFwiIHJlcXVpcmVkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7cHJvamVjdE9wdGlvbnN9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwidG9kby1kZXNjcmlwdGlvblwiPkRlc2NyaXB0aW9uPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBpZD1cInRvZG8tZGVzY3JpcHRpb25cIiByb3dzPVwiM1wiPiR7dG9kb1RvRWRpdD8uZGVzY3JpcHRpb24gfHwgJyd9PC90ZXh0YXJlYT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwidG9kby1kdWUtZGF0ZVwiPkR1ZSBEYXRlPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZGF0ZVwiIGlkPVwidG9kby1kdWUtZGF0ZVwiIHZhbHVlPVwiJHt0b2RvVG9FZGl0Py5kdWVEYXRlIHx8ICcnfVwiPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ0b2RvLXByaW9yaXR5XCI+UHJpb3JpdHk8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBpZD1cInRvZG8tcHJpb3JpdHlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibG93XCIgJHt0b2RvVG9FZGl0Py5wcmlvcml0eSA9PT0gJ2xvdycgPyAnc2VsZWN0ZWQnIDogJyd9Pkxvdzwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJtZWRpdW1cIiAkeyF0b2RvVG9FZGl0IHx8IHRvZG9Ub0VkaXQ/LnByaW9yaXR5ID09PSAnbWVkaXVtJyA/ICdzZWxlY3RlZCcgOiAnJ30+TWVkaXVtPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImhpZ2hcIiAke3RvZG9Ub0VkaXQ/LnByaW9yaXR5ID09PSAnaGlnaCcgPyAnc2VsZWN0ZWQnIDogJyd9PkhpZ2g8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRvZG8tYWN0aW9uc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJidG4tdG9kbyBidG4tcHJpbWFyeVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7dG9kb1RvRWRpdCA/ICdVcGRhdGUnIDogJ0FkZCBUYXNrJ31cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgJHt0b2RvVG9FZGl0ID8gJzxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuLXRvZG8gYnRuLWRhbmdlclwiIGlkPVwiZGVsZXRlLXRvZG9cIj5EZWxldGU8L2J1dHRvbj4nIDogJyd9XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0bi10b2RvIGJ0bi1zZWNvbmRhcnlcIiBpZD1cImNhbmNlbC10b2RvXCI+Q2FuY2VsPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICBgO1xuICAgIFxuICAgICAgICByZXR1cm4gbW9kYWw7XG4gICAgfVxuXG4gICAgc2hvd1RvZG9Nb2RhbCh0b2RvVG9FZGl0ID0gbnVsbCwgcHJvamVjdElkID0gbnVsbCkge1xuICAgICAgICBjb25zdCBtb2RhbCA9IHRoaXMuY3JlYXRlVG9kb01vZGFsKHRvZG9Ub0VkaXQpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1vZGFsKTtcbiAgICBcbiAgICAgICAgY29uc3QgZm9ybSA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWZvcm0nKTtcbiAgICAgICAgY29uc3QgY2FuY2VsQnV0dG9uID0gbW9kYWwucXVlcnlTZWxlY3RvcignI2NhbmNlbC10b2RvJyk7XG4gICAgICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJyNkZWxldGUtdG9kbycpO1xuICAgIFxuICAgICAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG8tdGl0bGUnKS52YWx1ZTtcbiAgICAgICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG8tZGVzY3JpcHRpb24nKS52YWx1ZTtcbiAgICAgICAgICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kby1kdWUtZGF0ZScpLnZhbHVlO1xuICAgICAgICAgICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kby1wcmlvcml0eScpLnZhbHVlO1xuICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWRQcm9qZWN0SWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kby1wcm9qZWN0JykudmFsdWU7XG4gICAgXG4gICAgICAgICAgICBpZiAodGl0bGUudHJpbSgpKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRvZG9Ub0VkaXQpIHtcbiAgICAgICAgICAgICAgICAgICAgdG9kb1RvRWRpdC50aXRsZSA9IHRpdGxlO1xuICAgICAgICAgICAgICAgICAgICB0b2RvVG9FZGl0LmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgICAgICAgICAgICAgIHRvZG9Ub0VkaXQuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgICAgICAgICAgICAgICAgIHRvZG9Ub0VkaXQucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGlmIChwcm9qZWN0SWQgIT09IHNlbGVjdGVkUHJvamVjdElkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRvZG9NYW5hZ2VyLmRlbGV0ZVRvZG8ocHJvamVjdElkLCB0b2RvVG9FZGl0LmlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld1RvZG8gPSBuZXcgVG9kbyh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudG9kb01hbmFnZXIuYWRkVG9kbyhzZWxlY3RlZFByb2plY3RJZCwgbmV3VG9kbyk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRvZG9NYW5hZ2VyLnVwZGF0ZVRvZG8ocHJvamVjdElkLCB0b2RvVG9FZGl0LmlkLCB0b2RvVG9FZGl0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvZG8gPSBuZXcgVG9kbyh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b2RvTWFuYWdlci5hZGRUb2RvKHNlbGVjdGVkUHJvamVjdElkLCB0b2RvKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJDdXJyZW50VmlldygpO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQobW9kYWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICBcbiAgICAgICAgY2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChtb2RhbCk7XG4gICAgICAgIH0pO1xuICAgIFxuICAgICAgICBpZiAoZGVsZXRlQnV0dG9uKSB7XG4gICAgICAgICAgICBkZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy50b2RvTWFuYWdlci5kZWxldGVUb2RvKHByb2plY3RJZCwgdG9kb1RvRWRpdC5pZCk7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJDdXJyZW50VmlldygpO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQobW9kYWwpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzaG93U2lnbk91dENvbmZpcm1hdGlvbigpIHtcbiAgICAgICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbW9kYWwuY2xhc3NOYW1lID0gJ21vZGFsLW92ZXJsYXknO1xuICAgICAgICBcbiAgICAgICAgbW9kYWwuaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRvZG8tbW9kYWxcIj5cbiAgICAgICAgICAgICAgICA8aDI+U2lnbiBPdXQ8L2gyPlxuICAgICAgICAgICAgICAgIDxwPkFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBzaWduIG91dD8gVGhpcyB3aWxsIGNsZWFyIGFsbCB5b3VyIGRhdGEuLi48L3A+XG4gICAgICAgICAgICAgICAgPHAgc3R5bGU9XCJmb250LXNpemU6IDAuOWVtOyBjb2xvcjogIzY2NjsgbWFyZ2luLXRvcDogMC41cmVtO1wiPlxuICAgICAgICAgICAgICAgICAgICAoWWVzLCB0aGlzIGlzIGp1c3QgZm9yIHRlc3RpbmcuIEluIGEgcmVhbCBhcHAsIHlvdXIgZGF0YSB3b3VsZCBiZSBzYXZlZCEpXG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0b2RvLWFjdGlvbnNcIiBzdHlsZT1cIm1hcmdpbi10b3A6IDJyZW07XCI+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4tdG9kbyBidG4tcHJpbWFyeVwiIGlkPVwiY29uZmlybS1zaWdub3V0XCI+U2lnbiBPdXQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0bi10b2RvIGJ0bi1zZWNvbmRhcnlcIiBpZD1cImNhbmNlbC1zaWdub3V0XCI+Q2FuY2VsPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgYDtcbiAgICBcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtb2RhbCk7XG4gICAgXG4gICAgICAgIGNvbnN0IGNvbmZpcm1CdG4gPSBtb2RhbC5xdWVyeVNlbGVjdG9yKCcjY29uZmlybS1zaWdub3V0Jyk7XG4gICAgICAgIGNvbnN0IGNhbmNlbEJ0biA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJyNjYW5jZWwtc2lnbm91dCcpO1xuICAgIFxuICAgICAgICBjb25maXJtQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLmNsZWFyKCk7XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgIH0pO1xuICAgIFxuICAgICAgICBjYW5jZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKG1vZGFsKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc2hvd0Fib3V0TW9kYWwoKSB7XG4gICAgICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG1vZGFsLmNsYXNzTmFtZSA9ICdtb2RhbC1vdmVybGF5JztcbiAgICAgICAgXG4gICAgICAgIG1vZGFsLmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0b2RvLW1vZGFsXCI+XG4gICAgICAgICAgICAgICAgPGgyPkFib3V0IEJvb3RkbzwvaDI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFib3V0LWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgPHA+Qm9vdGRvIGlzIGEgcHJvamVjdCBtYW5hZ2VtZW50IGFwcGxpY2F0aW9uIGJ1aWx0IGFzIHBhcnQgb2YgVGhlIE9kaW4gUHJvamVjdCBjdXJyaWN1bHVtLiBJdCdzIGRlc2lnbmVkIHRvIGhlbHAgZGV2ZWxvcGVycyBvcmdhbml6ZSB0aGVpciBwcm9qZWN0cyBhbmQgdGFza3Mgd2l0aCBhIHRvdWNoIG9mIGh1bW9yLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJmZWF0dXJlcy10ZXh0XCI+RmVhdHVyZXMgaW5jbHVkZTo8L3A+XG4gICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5Qcm9qZWN0IG9yZ2FuaXphdGlvbjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+VGFzayBtYW5hZ2VtZW50IHdpdGggcHJpb3JpdGllcyBhbmQgZHVlIGRhdGVzPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5EaWZmZXJlbnQgdGFzayB2aWV3cyAoVG9kYXksIFVwY29taW5nLCBDb21wbGV0ZWQpPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5GdW4gZGVmYXVsdCBwcm9qZWN0IG5hbWVzIGZvciBkZXZlbG9wZXIgaW5zcGlyYXRpb248L2xpPlxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJzaWduYXR1cmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIEVuam95ITxicj48YnI+XG4gICAgICAgICAgICAgICAgICAgICAgICAmbWRhc2g7IEJvb3RzQGxvd3Jlc2Jvb3RzXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidG9kby1hY3Rpb25zXCI+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4tdG9kbyBidG4tcHJpbWFyeVwiIGlkPVwiY2xvc2UtYWJvdXRcIj5DbG9zZTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIGA7XG4gICAgXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobW9kYWwpO1xuICAgIFxuICAgICAgICBjb25zdCBjbG9zZUJ0biA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJyNjbG9zZS1hYm91dCcpO1xuICAgICAgICBjbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQobW9kYWwpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZW5kZXJUb2Rvcyh2aWV3ID0gJ2FsbCcpIHtcbiAgICAgICAgY29uc3QgdGFza3NDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza3MtY29udGFpbmVyJyk7XG4gICAgICAgIGxldCB0b2RvcztcbiAgICBcbiAgICAgICAgc3dpdGNoKHZpZXcpIHtcbiAgICAgICAgICAgIGNhc2UgJ3RvZGF5JzpcbiAgICAgICAgICAgICAgICB0b2RvcyA9IHRoaXMudG9kb01hbmFnZXIuZ2V0VG9kYXlUb2RvcygpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAndXBjb21pbmcnOlxuICAgICAgICAgICAgICAgIHRvZG9zID0gdGhpcy50b2RvTWFuYWdlci5nZXRVcGNvbWluZ1RvZG9zKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdjb21wbGV0ZWQnOlxuICAgICAgICAgICAgICAgIHRvZG9zID0gdGhpcy50b2RvTWFuYWdlci5nZXRDb21wbGV0ZWRUb2RvcygpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5hY3RpdmVQcm9qZWN0SWQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdFRvZG9zID0gdGhpcy50b2RvTWFuYWdlci5nZXRBbGxUb2RvcygpXG4gICAgICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKHRvZG8gPT4gdG9kby5wcm9qZWN0SWQgPT09IHRoaXMuYWN0aXZlUHJvamVjdElkKTtcbiAgICAgICAgICAgICAgICAgICAgdG9kb3MgPSBwcm9qZWN0VG9kb3M7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdG9kb3MgPSB0aGlzLnRvZG9NYW5hZ2VyLmdldEFjdGl2ZVRvZG9zKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgXG4gICAgICAgIGlmICh0aGlzLmFjdGl2ZVByb2plY3RJZCkge1xuICAgICAgICAgICAgdGFza3NDb250YWluZXIuaW5uZXJIVE1MID0gdGhpcy5yZW5kZXJUb2RvTGlzdCh0b2Rvcyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgY29uc3QgdG9kb3NCeVByb2plY3QgPSBuZXcgTWFwKCk7XG4gICAgICAgIFxuICAgICAgICB0b2Rvcy5mb3JFYWNoKHRvZG8gPT4ge1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdElkID0gdG9kby5wcm9qZWN0SWQ7XG4gICAgICAgICAgICBpZiAoIXRoaXMucHJvamVjdE1hbmFnZXIuZ2V0UHJvamVjdChwcm9qZWN0SWQpKSByZXR1cm47XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmICghdG9kb3NCeVByb2plY3QuaGFzKHByb2plY3RJZCkpIHtcbiAgICAgICAgICAgICAgICB0b2Rvc0J5UHJvamVjdC5zZXQocHJvamVjdElkLCBbXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0b2Rvc0J5UHJvamVjdC5nZXQocHJvamVjdElkKS5wdXNoKHRvZG8pO1xuICAgICAgICB9KTtcbiAgICBcbiAgICAgICAgY29uc3QgaHRtbCA9IEFycmF5LmZyb20odG9kb3NCeVByb2plY3QuZW50cmllcygpKS5tYXAoKFtwcm9qZWN0SWQsIHByb2plY3RUb2Rvc10pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3QgPSB0aGlzLnByb2plY3RNYW5hZ2VyLmdldFByb2plY3QocHJvamVjdElkKTtcbiAgICAgICAgICAgIGlmICghcHJvamVjdCkgcmV0dXJuICcnO1xuICAgICAgICAgICAgcmV0dXJuIGBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvamVjdC1zZWN0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cInByb2plY3QtaGVhZGVyXCI+JHtwcm9qZWN0Lm5hbWV9PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgJHt0aGlzLnJlbmRlclRvZG9MaXN0KHByb2plY3RUb2Rvcyl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBgO1xuICAgICAgICB9KS5qb2luKCcnKTtcbiAgICBcbiAgICAgICAgdGFza3NDb250YWluZXIuaW5uZXJIVE1MID0gaHRtbCB8fCAnPHA+Tm8gdGFza3MgeWV0PC9wPic7XG4gICAgfVxuXG4gICAgcmVuZGVyVG9kb0xpc3QodG9kb3MpIHtcbiAgICAgICAgaWYgKCF0b2Rvcy5sZW5ndGgpIHJldHVybiAnJztcbiAgICAgICAgXG4gICAgICAgIHJldHVybiB0b2Rvcy5tYXAodG9kbyA9PiBgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidG9kby1pdGVtICR7dG9kby5jb21wbGV0ZWQgPyAnY29tcGxldGVkJyA6ICcnfVwiIFxuICAgICAgICAgICAgICAgICBkYXRhLWlkPVwiJHt0b2RvLmlkfVwiIFxuICAgICAgICAgICAgICAgICBkYXRhLXByb2plY3QtaWQ9XCIke3RvZG8ucHJvamVjdElkIHx8IHRoaXMuYWN0aXZlUHJvamVjdElkfVwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzcz1cInRvZG8tY2hlY2tib3hcIiAke3RvZG8uY29tcGxldGVkID8gJ2NoZWNrZWQnIDogJyd9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0b2RvLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRvZG8tdGl0bGVcIj4ke3RvZG8udGl0bGV9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICR7dG9kby5kZXNjcmlwdGlvbiA/IGA8ZGl2IGNsYXNzPVwidG9kby1kZXNjcmlwdGlvblwiPiR7dG9kby5kZXNjcmlwdGlvbn08L2Rpdj5gIDogJyd9XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0b2RvLW1ldGFkYXRhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAke3RvZG8uZHVlRGF0ZSA/IGA8c3Bhbj5EdWU6ICR7dG9kby5kdWVEYXRlfTwvc3Bhbj5gIDogJyd9XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5Qcmlvcml0eTogJHt0b2RvLnByaW9yaXR5fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRvZG8tYWN0aW9uc1wiPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiZWRpdC10b2RvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIGNsYXNzPVwiZmVhdGhlciBmZWF0aGVyLWVkaXRcIiBmaWxsPVwibm9uZVwiIGhlaWdodD1cIjE2XCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgc3Ryb2tlLXdpZHRoPVwiMlwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiB3aWR0aD1cIjE2XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxwYXRoIGQ9XCJNMTEgNEg0YTIgMiAwIDAgMC0yIDJ2MTRhMiAyIDAgMCAwIDIgMmgxNGEyIDIgMCAwIDAgMi0ydi03XCIvPjxwYXRoIGQ9XCJNMTguNSAyLjVhMi4xMjEgMi4xMjEgMCAwIDEgMyAzTDEyIDE1bC00IDEgMS00IDkuNS05LjV6XCIvPjwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICBgKS5qb2luKCcnKTtcbiAgICB9XG5cbiAgICB1cGRhdGVNYWluSGVhZGVyKHRpdGxlKSB7XG4gICAgICAgIGNvbnN0IGNvbnRlbnRIZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudC1oZWFkZXIgaDInKTtcbiAgICAgICAgY29udGVudEhlYWRlci50ZXh0Q29udGVudCA9IHRpdGxlO1xuICAgIH1cblxuICAgIGluaXQoKSB7XG4gICAgICAgIGNvbnN0IGFwcENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBhcHBDb250YWluZXIuY2xhc3NOYW1lID0gJ2FwcC1jb250YWluZXInO1xuXG4gICAgICAgIGFwcENvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZUhlYWRlcigpKTtcbiAgICAgICAgYXBwQ29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuY3JlYXRlU2lkZWJhcigpKTtcbiAgICAgICAgYXBwQ29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuY3JlYXRlTWFpbigpKTtcblxuICAgICAgICBjb25zdCByb290ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpO1xuICAgICAgICByb290LmlubmVySFRNTCA9ICcnO1xuICAgICAgICByb290LmFwcGVuZENoaWxkKGFwcENvbnRhaW5lcik7XG5cbiAgICAgICAgdGhpcy5zZXR1cEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgICAgIHRoaXMuc2V0dXBQcm9qZWN0RXZlbnRzKCk7XG4gICAgICAgIHRoaXMuc2V0dXBUb2RvRXZlbnRzKCk7XG4gICAgICAgIHRoaXMucmVuZGVyVG9kb3MoJ2FsbCcpO1xuICAgIH1cblxuICAgIHNldHVwRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICAgIGNvbnN0IG1lbnVUb2dnbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudS10b2dnbGUnKTtcbiAgICAgICAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hcHAtc2lkZWJhcicpO1xuICAgICAgICBtZW51VG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgc2lkZWJhci5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcbiAgICAgICAgfSk7XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGNvbnN0IGlzTW9iaWxlID0gd2luZG93LmlubmVyV2lkdGggPD0gNzY4O1xuICAgICAgICBpZiAoaXNNb2JpbGUgJiYgIXNpZGViYXIuY29udGFpbnMoZS50YXJnZXQpICYmICFtZW51VG9nZ2xlLmNvbnRhaW5zKGUudGFyZ2V0KSkge1xuICAgICAgICAgICAgc2lkZWJhci5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgbGV0IHRvdWNoU3RhcnRYID0gMDtcbiAgICBsZXQgdG91Y2hFbmRYID0gMDtcbiAgICBcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgKGUpID0+IHtcbiAgICAgICAgdG91Y2hTdGFydFggPSBlLmNoYW5nZWRUb3VjaGVzWzBdLnNjcmVlblg7XG4gICAgfSwgZmFsc2UpO1xuICAgIFxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgKGUpID0+IHtcbiAgICAgICAgdG91Y2hFbmRYID0gZS5jaGFuZ2VkVG91Y2hlc1swXS5zY3JlZW5YO1xuICAgICAgICBoYW5kbGVTd2lwZSgpO1xuICAgIH0sIGZhbHNlKTtcbiAgICBcbiAgICBjb25zdCBoYW5kbGVTd2lwZSA9ICgpID0+IHtcbiAgICAgICAgY29uc3Qgc3dpcGVEaXN0YW5jZSA9IHRvdWNoRW5kWCAtIHRvdWNoU3RhcnRYO1xuICAgICAgICBjb25zdCBtaW5Td2lwZURpc3RhbmNlID0gNTA7XG4gICAgICAgIFxuICAgICAgICBpZiAoc3dpcGVEaXN0YW5jZSA8IC1taW5Td2lwZURpc3RhbmNlKSB7XG4gICAgICAgICAgICBzaWRlYmFyLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgICAgICBjb25zdCB1c2VyUHJvZmlsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51c2VyLXByb2ZpbGUnKTtcbiAgICAgICAgY29uc3QgdXNlckRyb3Bkb3duID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVzZXItZHJvcGRvd24nKTtcblxuICAgICAgICB1c2VyUHJvZmlsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHVzZXJEcm9wZG93bi5zdHlsZS5kaXNwbGF5ID0gdXNlckRyb3Bkb3duLnN0eWxlLmRpc3BsYXkgPT09ICdub25lJyA/ICdibG9jaycgOiAnbm9uZSc7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIGlmICghdXNlclByb2ZpbGUuY29udGFpbnMoZS50YXJnZXQpKSB7XG4gICAgICAgICAgICAgICAgdXNlckRyb3Bkb3duLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IHNpZ25PdXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lnbi1vdXQnKTtcbiAgICAgICAgc2lnbk91dEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2hvd1NpZ25PdXRDb25maXJtYXRpb24oKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgYWJvdXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWJvdXQnKTtcbiAgICAgICAgYWJvdXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNob3dBYm91dE1vZGFsKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IHZpZXdMaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zaWRlYmFyLW5hdiBhW2RhdGEtdmlld10nKTtcbiAgICAgICAgdmlld0xpbmtzLmZvckVhY2gobGluayA9PiB7XG4gICAgICAgICAgICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2lkZWJhci1uYXYgYSwgLnByb2plY3QtaXRlbScpLmZvckVhY2goZWwgPT4ge1xuICAgICAgICAgICAgICAgICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGxpbmsuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZVByb2plY3RJZCA9IG51bGw7XG5cbiAgICAgICAgICAgICAgICBjb25zdCB2aWV3ID0gbGluay5kYXRhc2V0LnZpZXc7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVNYWluSGVhZGVyKGxpbmsudGV4dENvbnRlbnQpO1xuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyVG9kb3Modmlldyk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBpc01vYmlsZSA9IHdpbmRvdy5pbm5lcldpZHRoIDw9IDc2ODtcbiAgICAgICAgICAgICAgICBpZiAoaXNNb2JpbGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hcHAtc2lkZWJhcicpO1xuICAgICAgICAgICAgICAgICAgICBzaWRlYmFyLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzZXR1cFByb2plY3RFdmVudHMoKSB7XG4gICAgICAgIGNvbnN0IHByb2plY3RzTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0cy1saXN0Jyk7XG4gICAgICAgIGNvbnN0IGFkZFByb2plY3RCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLXByb2plY3QtYnRuJyk7XG4gICAgICAgIGNvbnN0IGFkZFByb2plY3RGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1wcm9qZWN0LWZvcm0nKTtcbiAgICAgICAgY29uc3QgcHJvamVjdElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1wcm9qZWN0LWlucHV0Jyk7XG4gICAgICAgIGNvbnN0IHNhdmVQcm9qZWN0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NhdmUtcHJvamVjdC1idG4nKTtcbiAgICBcbiAgICAgICAgdGhpcy5yZW5kZXJQcm9qZWN0cyh0aGlzLnByb2plY3RNYW5hZ2VyLmdldEFsbFByb2plY3RzKCkpO1xuICAgIFxuICAgICAgICBhZGRQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgYWRkUHJvamVjdEJ0bi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgYWRkUHJvamVjdEZvcm0uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgICAgICBwcm9qZWN0SW5wdXQuZm9jdXMoKTtcbiAgICAgICAgfSk7XG4gICAgXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIGlmICghYWRkUHJvamVjdEZvcm0uY29udGFpbnMoZS50YXJnZXQpICYmIGUudGFyZ2V0ICE9PSBhZGRQcm9qZWN0QnRuKSB7XG4gICAgICAgICAgICAgICAgYWRkUHJvamVjdEJ0bi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgICAgICAgICBhZGRQcm9qZWN0Rm9ybS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgIHByb2plY3RJbnB1dC52YWx1ZSA9ICcnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICBcbiAgICAgICAgc2F2ZVByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0TmFtZSA9IHByb2plY3RJbnB1dC52YWx1ZS50cmltKCk7XG4gICAgICAgICAgICBpZiAocHJvamVjdE5hbWUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdQcm9qZWN0ID0gdGhpcy5wcm9qZWN0TWFuYWdlci5jcmVhdGVQcm9qZWN0KHByb2plY3ROYW1lKTtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlclByb2plY3RzKHRoaXMucHJvamVjdE1hbmFnZXIuZ2V0QWxsUHJvamVjdHMoKSk7XG4gICAgICAgICAgICAgICAgYWRkUHJvamVjdEJ0bi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgICAgICAgICBhZGRQcm9qZWN0Rm9ybS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgIHByb2plY3RJbnB1dC52YWx1ZSA9ICcnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICBcbiAgICAgICAgcHJvamVjdHNMaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RJdGVtID0gZS50YXJnZXQuY2xvc2VzdCgnLnByb2plY3QtaXRlbScpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdkZWxldGUtcHJvamVjdCcpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdElkID0gZS50YXJnZXQuY2xvc2VzdCgnLnByb2plY3QtaXRlbScpLmRhdGFzZXQuaWQ7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9qZWN0TWFuYWdlci5kZWxldGVQcm9qZWN0KHByb2plY3RJZCk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYWN0aXZlUHJvamVjdElkID09PSBwcm9qZWN0SWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hY3RpdmVQcm9qZWN0SWQgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBhbGxUYXNrc0xpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhci1uYXYgYVtkYXRhLXZpZXc9XCJhbGxcIl0nKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFsbFRhc2tzTGluaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxsVGFza3NMaW5rLmNsaWNrKCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZU1haW5IZWFkZXIoJ0FsbCBUYXNrcycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJUb2RvcygnYWxsJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJQcm9qZWN0cyh0aGlzLnByb2plY3RNYW5hZ2VyLmdldEFsbFByb2plY3RzKCkpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgIGlmIChwcm9qZWN0SXRlbSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHByb2plY3RJZCA9IHByb2plY3RJdGVtLmRhdGFzZXQuaWQ7XG4gICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdCA9IHRoaXMucHJvamVjdE1hbmFnZXIuZ2V0UHJvamVjdChwcm9qZWN0SWQpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlUHJvamVjdElkID0gcHJvamVjdElkO1xuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyUHJvamVjdHModGhpcy5wcm9qZWN0TWFuYWdlci5nZXRBbGxQcm9qZWN0cygpKTtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZU1haW5IZWFkZXIocHJvamVjdC5uYW1lKTtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlclRvZG9zKCk7XG4gICAgXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNpZGViYXItbmF2IGEnKS5mb3JFYWNoKGxpbmsgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsaW5rLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzZXR1cFRvZG9FdmVudHMoKSB7XG4gICAgICAgIGNvbnN0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXRhc2stYnRuJyk7XG4gICAgICAgIGNvbnN0IHRhc2tzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tzLWNvbnRhaW5lcicpO1xuICAgIFxuICAgICAgICBhZGRUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zaG93VG9kb01vZGFsKCk7XG4gICAgICAgIH0pO1xuICAgIFxuICAgICAgICB0YXNrc0NvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0b2RvSXRlbSA9IGUudGFyZ2V0LmNsb3Nlc3QoJy50b2RvLWl0ZW0nKTtcbiAgICAgICAgICAgIGlmICghdG9kb0l0ZW0pIHJldHVybjtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgdG9kb0lkID0gdG9kb0l0ZW0uZGF0YXNldC5pZDtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RJZCA9IHRvZG9JdGVtLmRhdGFzZXQucHJvamVjdElkIHx8IHRoaXMuYWN0aXZlUHJvamVjdElkO1xuICAgIFxuICAgICAgICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygndG9kby1jaGVja2JveCcpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50b2RvTWFuYWdlci50b2dnbGVUb2RvQ29tcGxldGUocHJvamVjdElkLCB0b2RvSWQpO1xuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyQ3VycmVudFZpZXcoKTtcbiAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgIGlmIChlLnRhcmdldC5jbG9zZXN0KCcuZWRpdC10b2RvJykpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0b2RvID0gdGhpcy50b2RvTWFuYWdlci5nZXRUb2RvKHByb2plY3RJZCwgdG9kb0lkKTtcbiAgICAgICAgICAgICAgICBpZiAodG9kbykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dUb2RvTW9kYWwodG9kbywgcHJvamVjdElkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlbmRlckN1cnJlbnRWaWV3KCkge1xuICAgICAgICBjb25zdCBhY3RpdmVMaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGViYXItbmF2IGEuYWN0aXZlJyk7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRWaWV3ID0gYWN0aXZlTGluayA/IGFjdGl2ZUxpbmsuZGF0YXNldC52aWV3IDogJ2FsbCc7XG4gICAgICAgIHRoaXMucmVuZGVyVG9kb3MoY3VycmVudFZpZXcpO1xuICAgIH1cblxuICAgIHJlbmRlclByb2plY3RzKHByb2plY3RzKSB7XG4gICAgICAgIGNvbnN0IHByb2plY3RzTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0cy1saXN0Jyk7XG4gICAgICAgIGNvbnN0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXRhc2stYnRuJyk7XG4gICAgICAgIFxuICAgICAgICBpZiAocHJvamVjdHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBhZGRUYXNrQnRuLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIGFkZFRhc2tCdG4uY2xhc3NMaXN0LmFkZCgnZGlzYWJsZWQnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFkZFRhc2tCdG4uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIGFkZFRhc2tCdG4uY2xhc3NMaXN0LnJlbW92ZSgnZGlzYWJsZWQnKTtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICBwcm9qZWN0c0xpc3QuaW5uZXJIVE1MID0gcHJvamVjdHMubWFwKHByb2plY3QgPT4gYFxuICAgICAgICAgICAgPGxpIGNsYXNzPVwicHJvamVjdC1pdGVtICR7cHJvamVjdC5pZCA9PT0gdGhpcy5hY3RpdmVQcm9qZWN0SWQgPyAnYWN0aXZlJyA6ICcnfVwiIGRhdGEtaWQ9XCIke3Byb2plY3QuaWR9XCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwcm9qZWN0LW5hbWVcIj4ke3Byb2plY3QubmFtZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImRlbGV0ZS1wcm9qZWN0XCIgYXJpYS1sYWJlbD1cIkRlbGV0ZSBwcm9qZWN0XCI+w5c8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgIGApLmpvaW4oJycpO1xuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBPbmJvYXJkaW5nIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy51c2VyRGF0YSA9IHtcbiAgICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgICAgYXZhdGFyOiAnJ1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGNyZWF0ZU1vZGFsKCkge1xuICAgICAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBtb2RhbC5jbGFzc05hbWUgPSAnb3ZlcmxheSc7XG4gICAgICAgIFxuICAgICAgICBtb2RhbC5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwib25ib2FyZGluZy1tb2RhbFwiPlxuICAgICAgICAgICAgICAgIDxoMj5XZWxjb21lIHRvIEJvb3RkbyE8L2gyPlxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJuYW1lLXN0ZXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPHA+V2hhdCdzIHlvdXIgbmFtZT88L3A+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwidXNlcm5hbWVcIiBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgbmFtZVwiIHJlcXVpcmVkPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCIgaWQ9XCJuZXh0LWJ0blwiPk5leHQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiYXZhdGFyLXN0ZXBcIiBzdHlsZT1cImRpc3BsYXk6IG5vbmU7XCI+XG4gICAgICAgICAgICAgICAgICAgIDxwPkNob29zZSBhIHByb2ZpbGUgcGljdHVyZTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImF2YXRhci11cGxvYWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhdmF0YXItcHJldmlld1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJhdmF0YXItcHJldmlldy1pbWFnZVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYXZhdGFyLWFjdGlvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBpZD1cImF2YXRhci11cGxvYWRcIiBhY2NlcHQ9XCJpbWFnZS8qXCIgY2xhc3M9XCJmaWxlLWlucHV0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImF2YXRhci11cGxvYWRcIiBjbGFzcz1cImJ0biBidG4tc2Vjb25kYXJ5XCI+Q2hvb3NlIEZpbGU8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIiBpZD1cImNvbXBsZXRlLWJ0blwiPkNvbXBsZXRlIFNldHVwPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgYDtcbiAgICBcbiAgICAgICAgcmV0dXJuIG1vZGFsO1xuICAgIH1cbiAgICBcbiAgICBjcmVhdGVEZWZhdWx0QXZhdGFyKG5hbWUpIHtcbiAgICAgICAgY29uc3QgaW5pdGlhbHMgPSBuYW1lXG4gICAgICAgICAgICAuc3BsaXQoJyAnKVxuICAgICAgICAgICAgLm1hcCh3b3JkID0+IHdvcmRbMF0pXG4gICAgICAgICAgICAuam9pbignJylcbiAgICAgICAgICAgIC50b1VwcGVyQ2FzZSgpXG4gICAgICAgICAgICAuc2xpY2UoMCwgMik7XG4gICAgXG4gICAgICAgIHJldHVybiBgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGVmYXVsdC1hdmF0YXJcIj5cbiAgICAgICAgICAgICAgICA8c3Bhbj4ke2luaXRpYWxzfTwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICBgO1xuICAgIH1cblxuICAgIGdldEF2YXRhck9wdGlvbnMoKSB7XG4gICAgICAgIGNvbnN0IGNvbG9ycyA9IFsnI0ZGNkI2QicsICcjNEVDREM0JywgJyM0NUI3RDEnLCAnIzk2Q0VCNCcsICcjRkZFRUFEJ107XG4gICAgICAgIHJldHVybiBjb2xvcnMubWFwKChjb2xvciwgaW5kZXgpID0+IGBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhdmF0YXItb3B0aW9uXCIgZGF0YS1hdmF0YXI9XCJhdmF0YXIke2luZGV4ICsgMX1cIj5cbiAgICAgICAgICAgICAgICA8c3ZnIHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjEwMCVcIiB2aWV3Qm94PVwiMCAwIDUwIDUwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxjaXJjbGUgY3g9XCIyNVwiIGN5PVwiMjVcIiByPVwiMjBcIiBmaWxsPVwiJHtjb2xvcn1cIi8+XG4gICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgYCkuam9pbignJyk7XG4gICAgfVxuXG4gICAgaW5pdCgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBleGlzdGluZ1VzZXIgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYm9vdGRvVXNlcicpO1xuICAgICAgICAgICAgaWYgKGV4aXN0aW5nVXNlcikge1xuICAgICAgICAgICAgICAgIHJlc29sdmUoSlNPTi5wYXJzZShleGlzdGluZ1VzZXIpKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICBjb25zdCBtb2RhbCA9IHRoaXMuY3JlYXRlTW9kYWwoKTtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobW9kYWwpO1xuICAgIFxuICAgICAgICAgICAgY29uc3QgbmFtZVN0ZXAgPSBtb2RhbC5xdWVyeVNlbGVjdG9yKCcjbmFtZS1zdGVwJyk7XG4gICAgICAgICAgICBjb25zdCBhdmF0YXJTdGVwID0gbW9kYWwucXVlcnlTZWxlY3RvcignI2F2YXRhci1zdGVwJyk7XG4gICAgICAgICAgICBjb25zdCB1c2VybmFtZUlucHV0ID0gbW9kYWwucXVlcnlTZWxlY3RvcignI3VzZXJuYW1lJyk7XG4gICAgICAgICAgICBjb25zdCBuZXh0QnRuID0gbW9kYWwucXVlcnlTZWxlY3RvcignI25leHQtYnRuJyk7XG4gICAgICAgICAgICBjb25zdCBjb21wbGV0ZUJ0biA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJyNjb21wbGV0ZS1idG4nKTtcbiAgICAgICAgICAgIGNvbnN0IGZpbGVJbnB1dCA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJyNhdmF0YXItdXBsb2FkJyk7XG4gICAgICAgICAgICBjb25zdCBwcmV2aWV3SW1hZ2UgPSBtb2RhbC5xdWVyeVNlbGVjdG9yKCcjYXZhdGFyLXByZXZpZXctaW1hZ2UnKTtcbiAgICBcbiAgICAgICAgICAgIG5leHRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHVzZXJuYW1lSW5wdXQudmFsdWUudHJpbSgpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXNlckRhdGEubmFtZSA9IHVzZXJuYW1lSW5wdXQudmFsdWUudHJpbSgpO1xuICAgICAgICAgICAgICAgICAgICBuYW1lU3RlcC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgICAgICBhdmF0YXJTdGVwLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGVmYXVsdEF2YXRhckhUTUwgPSB0aGlzLmNyZWF0ZURlZmF1bHRBdmF0YXIodGhpcy51c2VyRGF0YS5uYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJldmlld0NvbnRhaW5lciA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJyNhdmF0YXItcHJldmlldy1pbWFnZScpO1xuICAgICAgICAgICAgICAgICAgICBwcmV2aWV3Q29udGFpbmVyLmlubmVySFRNTCA9IGRlZmF1bHRBdmF0YXJIVE1MO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVzZXJEYXRhLmF2YXRhciA9ICdkZWZhdWx0JztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICBcbiAgICAgICAgICAgIGZpbGVJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGZpbGUgPSBlLnRhcmdldC5maWxlc1swXTtcbiAgICAgICAgICAgICAgICBpZiAoZmlsZSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgICAgICAgICAgICAgICByZWFkZXIub25sb2FkID0gKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGltYWdlVXJsID0gZS50YXJnZXQucmVzdWx0O1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJldmlld0NvbnRhaW5lciA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJyNhdmF0YXItcHJldmlldy1pbWFnZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJldmlld0NvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXZpZXdDb250YWluZXIuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke2ltYWdlVXJsfSlgO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51c2VyRGF0YS5hdmF0YXIgPSBpbWFnZVVybDtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZmlsZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgXG4gICAgICAgICAgICBjb21wbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbXBsZXRlT25ib2FyZGluZyhtb2RhbCwgcmVzb2x2ZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29tcGxldGVPbmJvYXJkaW5nKG1vZGFsLCByZXNvbHZlKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdib290ZG9Vc2VyJywgSlNPTi5zdHJpbmdpZnkodGhpcy51c2VyRGF0YSkpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKG1vZGFsKTtcbiAgICAgICAgcmVzb2x2ZSh0aGlzLnVzZXJEYXRhKTtcbiAgICB9XG59IiwiaW1wb3J0IFRvZG9NYW5hZ2VyLCB7IFRvZG8gfSBmcm9tICcuL3RvZG9zJztcblxuZXhwb3J0IGNsYXNzIFByb2plY3Qge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICAgICAgdGhpcy5pZCA9IERhdGUubm93KCkudG9TdHJpbmcoKTtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy50b2RvcyA9IFtdO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdE1hbmFnZXIge1xuICAgIGNvbnN0cnVjdG9yKHRvZG9NYW5hZ2VyKSB7XG4gICAgICAgIHRoaXMucHJvamVjdHMgPSBbXTtcbiAgICAgICAgdGhpcy50b2RvTWFuYWdlciA9IHRvZG9NYW5hZ2VyO1xuICAgICAgICB0aGlzLmRlZmF1bHRQcm9qZWN0cyA9IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcIkRhdGluZyBBcHAgZm9yIERldmVsb3BlcnNcIixcbiAgICAgICAgICAgICAgICB0YXNrOiB7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIkZpeCBidWcgd2hlcmUgYWxsIG1hdGNoZXMgYXJlICd1bmRlZmluZWQnXCIsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIlVzZXJzIGNvbXBsYWluaW5nIHRoZXkgb25seSBtYXRjaCB3aXRoIG51bGwgb3IgdW5kZWZpbmVkLiBOZWVkIHRvIGltcGxlbWVudCBwcm9wZXIgdHlwZSBjaGVja2luZy5cIixcbiAgICAgICAgICAgICAgICAgICAgcHJpb3JpdHk6IFwiaGlnaFwiLFxuICAgICAgICAgICAgICAgICAgICBkdWVEYXRlOiAoKSA9PiBuZXcgRGF0ZShEYXRlLm5vdygpICsgODY0MDAwMDApLnRvSVNPU3RyaW5nKCkuc3BsaXQoJ1QnKVswXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJDYXQgUGljIE5GVCBNYXJrZXRwbGFjZVwiLCBcbiAgICAgICAgICAgICAgICB0YXNrOiB7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIkltcGxlbWVudCBhbnRpLWRvZyBpbWFnZSBmaWx0ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiVXNlcnMga2VlcCB1cGxvYWRpbmcgZG9nIHBpY3MuIE5lZWQgTUwgbW9kZWwgdG8gZGV0ZWN0IGFuZCBibG9jayBub24tZmVsaW5lIGNvbnRlbnQuXCIsXG4gICAgICAgICAgICAgICAgICAgIHByaW9yaXR5OiBcIm1lZGl1bVwiLFxuICAgICAgICAgICAgICAgICAgICBkdWVEYXRlOiAoKSA9PiBuZXcgRGF0ZShEYXRlLm5vdygpICsgMTcyODAwMDAwKS50b0lTT1N0cmluZygpLnNwbGl0KCdUJylbMF1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwiQUkgVGhhdCBNYWtlcyBDb2ZmZWVcIixcbiAgICAgICAgICAgICAgICB0YXNrOiB7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIkRlYnVnIGluZmluaXRlIGNvZmZlZSBsb29wXCIsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkFJIGtlZXBzIGJyZXdpbmcgY29mZmVlIHVudGlsIFJBTSBpcyBmdWxsLiBOZWVkIHRvIGltcGxlbWVudCBwcm9wZXIgYnJldyBjeWNsZSB0ZXJtaW5hdGlvbi5cIixcbiAgICAgICAgICAgICAgICAgICAgcHJpb3JpdHk6IFwiaGlnaFwiLFxuICAgICAgICAgICAgICAgICAgICBkdWVEYXRlOiAoKSA9PiBuZXcgRGF0ZShEYXRlLm5vdygpICsgODY0MDAwMDApLnRvSVNPU3RyaW5nKCkuc3BsaXQoJ1QnKVswXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJTdGFja092ZXJmbG93IEJ1dCBOaWNlclwiLFxuICAgICAgICAgICAgICAgIHRhc2s6IHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiQWRkIG1hbmRhdG9yeSBjb21wbGltZW50c1wiLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJCZWZvcmUgbWFya2luZyBhcyBkdXBsaWNhdGUsIHVzZXJzIG11c3Qgc2F5IHNvbWV0aGluZyBuaWNlIGZpcnN0LlwiLFxuICAgICAgICAgICAgICAgICAgICBwcmlvcml0eTogXCJtZWRpdW1cIiwgXG4gICAgICAgICAgICAgICAgICAgIGR1ZURhdGU6ICgpID0+IG5ldyBEYXRlKERhdGUubm93KCkgKyAyNTkyMDAwMDApLnRvSVNPU3RyaW5nKCkuc3BsaXQoJ1QnKVswXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJTb2NpYWwgTWVkaWEgZm9yIEludHJvdmVydHNcIixcbiAgICAgICAgICAgICAgICB0YXNrOiB7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIkltcGxlbWVudCAnUHJldGVuZCB0byBiZSBPZmZsaW5lJyBmZWF0dXJlXCIsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIlVzZXJzIHJlcXVlc3RpbmcgYWJpbGl0eSB0byBhcHBlYXIgb2ZmbGluZSB3aGlsZSBzdGlsbCBsdXJraW5nLlwiLFxuICAgICAgICAgICAgICAgICAgICBwcmlvcml0eTogXCJoaWdoXCIsXG4gICAgICAgICAgICAgICAgICAgIGR1ZURhdGU6ICgpID0+IG5ldyBEYXRlKERhdGUubm93KCkgKyA0MzIwMDAwMDApLnRvSVNPU3RyaW5nKCkuc3BsaXQoJ1QnKVswXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJCaXRjb2luIGZvciBQZXRzXCIsXG4gICAgICAgICAgICAgICAgdGFzazoge1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJGaXggdHJlYXQtdG8tY3J5cHRvIGNvbnZlcnNpb24gcmF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJDYXRzIGdhbWluZyB0aGUgc3lzdGVtIGJ5IGRvaW5nIG11bHRpcGxlIHRyYW5zYWN0aW9ucyBvZiB0aGUgc2FtZSB0cmljay5cIixcbiAgICAgICAgICAgICAgICAgICAgcHJpb3JpdHk6IFwibWVkaXVtXCIsXG4gICAgICAgICAgICAgICAgICAgIGR1ZURhdGU6ICgpID0+IG5ldyBEYXRlKERhdGUubm93KCkgKyAzNDU2MDAwMDApLnRvSVNPU3RyaW5nKCkuc3BsaXQoJ1QnKVswXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJOZXRmbGl4IGZvciBEb2N1bWVudGF0aW9uXCIsXG4gICAgICAgICAgICAgICAgdGFzazoge1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJBZGQgJ1NraXAgSW50cm8nIGZvciBSRUFETUUgZmlsZXNcIixcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiVXNlcnMgd2FudCB0byBza2lwIHN0cmFpZ2h0IHRvIHRoZSBpbnN0YWxsYXRpb24gY29tbWFuZHMuXCIsXG4gICAgICAgICAgICAgICAgICAgIHByaW9yaXR5OiBcImxvd1wiLFxuICAgICAgICAgICAgICAgICAgICBkdWVEYXRlOiAoKSA9PiBuZXcgRGF0ZShEYXRlLm5vdygpICsgNTE4NDAwMDAwKS50b0lTT1N0cmluZygpLnNwbGl0KCdUJylbMF1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwiVWJlciBmb3IgUnViYmVyIER1Y2tzXCIsXG4gICAgICAgICAgICAgICAgdGFzazoge1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJGaXggZHVjayBzdXJnZSBwcmljaW5nXCIsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIlN1cmdlIHJhdGVzIHNreXJvY2tldGluZyBkdXJpbmcgcGVhayBkZWJ1Z2dpbmcgaG91cnMuXCIsXG4gICAgICAgICAgICAgICAgICAgIHByaW9yaXR5OiBcIm1lZGl1bVwiLFxuICAgICAgICAgICAgICAgICAgICBkdWVEYXRlOiAoKSA9PiBuZXcgRGF0ZShEYXRlLm5vdygpICsgMTcyODAwMDAwKS50b0lTT1N0cmluZygpLnNwbGl0KCdUJylbMF1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwiVGluZGVyIGZvciBEZXNpZ24gUGF0dGVybnNcIixcbiAgICAgICAgICAgICAgICB0YXNrOiB7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIkhhbmRsZSBTaW5nbGV0b24gcmVqZWN0aW9uIGFueGlldHlcIixcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiU2luZ2xldG9uIHBhdHRlcm4gcmVwb3J0aW5nIGZlZWxpbmdzIG9mIGxvbmVsaW5lc3MgYW5kIGFiYW5kb25tZW50LlwiLFxuICAgICAgICAgICAgICAgICAgICBwcmlvcml0eTogXCJoaWdoXCIsXG4gICAgICAgICAgICAgICAgICAgIGR1ZURhdGU6ICgpID0+IG5ldyBEYXRlKERhdGUubm93KCkgKyA4NjQwMDAwMCkudG9JU09TdHJpbmcoKS5zcGxpdCgnVCcpWzBdXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcIkphdmFTY3JpcHQgRnJhbWV3b3JrICM4LDc0MlwiLFxuICAgICAgICAgICAgICAgIHRhc2s6IHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiSW52ZW50IG5ldyBidXp6d29yZHNcIixcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiQ3VycmVudCBtYXJrZXRpbmcgdGVybXMgbm90IGNvbmZ1c2luZyBlbm91Z2guIE5lZWQgbW9yZSBwYXJhZGlnbSBzaGlmdHMuXCIsXG4gICAgICAgICAgICAgICAgICAgIHByaW9yaXR5OiBcImxvd1wiLFxuICAgICAgICAgICAgICAgICAgICBkdWVEYXRlOiAoKSA9PiBuZXcgRGF0ZShEYXRlLm5vdygpICsgNjA0ODAwMDAwKS50b0lTT1N0cmluZygpLnNwbGl0KCdUJylbMF1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwiQW5vdGhlciBUb2RvIEFwcOKEolwiLFxuICAgICAgICAgICAgICAgIHRhc2s6IHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiQWRkIHRvZG8gaXRlbSB0byB0cmFjayB0b2RvIGl0ZW1zXCIsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIk1ldGEtdG9kbyBmdW5jdGlvbmFsaXR5IHJlcXVlc3RlZCBieSBwcm9qZWN0IG1hbmFnZXIuXCIsXG4gICAgICAgICAgICAgICAgICAgIHByaW9yaXR5OiBcIm1lZGl1bVwiLFxuICAgICAgICAgICAgICAgICAgICBkdWVEYXRlOiAoKSA9PiBuZXcgRGF0ZShEYXRlLm5vdygpICsgMjU5MjAwMDAwKS50b0lTT1N0cmluZygpLnNwbGl0KCdUJylbMF1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwiUmVkZGl0IGZvciBPZmZpY2UgUGxhbnRzXCIsXG4gICAgICAgICAgICAgICAgdGFzazoge1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJGaXggb3ZlcndhdGVyaW5nIG5vdGlmaWNhdGlvbiBzcGFtXCIsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkNhY3RpIGNvbXBsYWluaW5nIGFib3V0IGV4Y2Vzc2l2ZSBoeWRyYXRpb24gc3VnZ2VzdGlvbnMuXCIsXG4gICAgICAgICAgICAgICAgICAgIHByaW9yaXR5OiBcImhpZ2hcIixcbiAgICAgICAgICAgICAgICAgICAgZHVlRGF0ZTogKCkgPT4gbmV3IERhdGUoRGF0ZS5ub3coKSArIDg2NDAwMDAwKS50b0lTT1N0cmluZygpLnNwbGl0KCdUJylbMF1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwiR2l0SHViIGZvciBSZWNpcGVzXCIsXG4gICAgICAgICAgICAgICAgdGFzazoge1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJSZXNvbHZlIG1lcmdlIGNvbmZsaWN0cyBpbiBncmFuZG1hJ3MgY29va2llc1wiLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJNdWx0aXBsZSBmb3JrcyBvZiBjaG9jb2xhdGUgY2hpcCByZWNpcGUgY2F1c2luZyBkZXBsb3ltZW50IGlzc3Vlcy5cIixcbiAgICAgICAgICAgICAgICAgICAgcHJpb3JpdHk6IFwibWVkaXVtXCIsXG4gICAgICAgICAgICAgICAgICAgIGR1ZURhdGU6ICgpID0+IG5ldyBEYXRlKERhdGUubm93KCkgKyAxNzI4MDAwMDApLnRvSVNPU3RyaW5nKCkuc3BsaXQoJ1QnKVswXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJEaXNjb3JkIGZvciBSdWJiZXIgRHVja3NcIixcbiAgICAgICAgICAgICAgICB0YXNrOiB7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIkltcGxlbWVudCBxdWFjayByZWFjdGlvbnNcIixcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiTmVlZCBtb3JlIGV4cHJlc3NpdmUgd2F5cyB0byByZXNwb25kIHRvIGRlYnVnZ2luZyBzZXNzaW9ucy5cIixcbiAgICAgICAgICAgICAgICAgICAgcHJpb3JpdHk6IFwibG93XCIsXG4gICAgICAgICAgICAgICAgICAgIGR1ZURhdGU6ICgpID0+IG5ldyBEYXRlKERhdGUubm93KCkgKyAzNDU2MDAwMDApLnRvSVNPU3RyaW5nKCkuc3BsaXQoJ1QnKVswXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJMaW5rZWRJbiBmb3IgQUkgQm90c1wiLFxuICAgICAgICAgICAgICAgIHRhc2s6IHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiRmlsdGVyIG91dCBzcGFtIGZyb20gR1BULTFcIixcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiT2xkZXIgbW9kZWxzIGtlZXAgc2VuZGluZyBjb25uZWN0aW9uIHJlcXVlc3RzIHRvIGV2ZXJ5b25lLlwiLFxuICAgICAgICAgICAgICAgICAgICBwcmlvcml0eTogXCJtZWRpdW1cIixcbiAgICAgICAgICAgICAgICAgICAgZHVlRGF0ZTogKCkgPT4gbmV3IERhdGUoRGF0ZS5ub3coKSArIDI1OTIwMDAwMCkudG9JU09TdHJpbmcoKS5zcGxpdCgnVCcpWzBdXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcIk5ldGZsaXggZm9yIENvZGUgUmV2aWV3c1wiLFxuICAgICAgICAgICAgICAgIHRhc2s6IHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiQWRkICdTa2lwIFdoaXRlc3BhY2UgRHJhbWEnIGJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJSZXZpZXdlcnMgc3BlbmRpbmcgdG9vIG11Y2ggdGltZSBkZWJhdGluZyB0YWJzIHZzIHNwYWNlcy5cIixcbiAgICAgICAgICAgICAgICAgICAgcHJpb3JpdHk6IFwiaGlnaFwiLFxuICAgICAgICAgICAgICAgICAgICBkdWVEYXRlOiAoKSA9PiBuZXcgRGF0ZShEYXRlLm5vdygpICsgODY0MDAwMDApLnRvSVNPU3RyaW5nKCkuc3BsaXQoJ1QnKVswXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJTcG90aWZ5IGZvciBDb21waWxhdGlvbiBFcnJvcnNcIixcbiAgICAgICAgICAgICAgICB0YXNrOiB7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIkNyZWF0ZSAnR3JlYXRlc3QgQnVncycgcGxheWxpc3RcIixcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiVXNlcnMgcmVxdWVzdGluZyBjdXJhdGVkIGNvbGxlY3Rpb24gb2YgbW9zdCBwYWluZnVsIGRlYnVnIHNlc3Npb25zLlwiLFxuICAgICAgICAgICAgICAgICAgICBwcmlvcml0eTogXCJsb3dcIixcbiAgICAgICAgICAgICAgICAgICAgZHVlRGF0ZTogKCkgPT4gbmV3IERhdGUoRGF0ZS5ub3coKSArIDQzMjAwMDAwMCkudG9JU09TdHJpbmcoKS5zcGxpdCgnVCcpWzBdXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcIkluc3RhZ3JhbSBmb3IgVGVybWluYWwgT3V0cHV0XCIsXG4gICAgICAgICAgICAgICAgdGFzazoge1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJBZGQgbW9yZSByZXRybyBmaWx0ZXJzXCIsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIlVzZXJzIHdhbnQgdGhlaXIgc3RhY2sgdHJhY2VzIHRvIGxvb2sgbW9yZSBhZXN0aGV0aWMuXCIsXG4gICAgICAgICAgICAgICAgICAgIHByaW9yaXR5OiBcIm1lZGl1bVwiLFxuICAgICAgICAgICAgICAgICAgICBkdWVEYXRlOiAoKSA9PiBuZXcgRGF0ZShEYXRlLm5vdygpICsgMTcyODAwMDAwKS50b0lTT1N0cmluZygpLnNwbGl0KCdUJylbMF1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwiVGlrVG9rIGZvciBBbGdvcml0aG1zXCIsXG4gICAgICAgICAgICAgICAgdGFzazoge1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJPcHRpbWl6ZSBkYW5jZSBtb3ZlcyBmb3IgTygxKVwiLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJDdXJyZW50IGFsZ29yaXRobWljIGRhbmNlcyB0b28gY29tcHV0YXRpb25hbGx5IGV4cGVuc2l2ZS5cIixcbiAgICAgICAgICAgICAgICAgICAgcHJpb3JpdHk6IFwiaGlnaFwiLFxuICAgICAgICAgICAgICAgICAgICBkdWVEYXRlOiAoKSA9PiBuZXcgRGF0ZShEYXRlLm5vdygpICsgODY0MDAwMDApLnRvSVNPU3RyaW5nKCkuc3BsaXQoJ1QnKVswXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJUd2l0Y2ggZm9yIERlYnVnZ2luZyBTZXNzaW9uc1wiLFxuICAgICAgICAgICAgICAgIHRhc2s6IHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiQWRkIGNvbW1lcmNpYWwgYnJlYWtzIGZvciBjb2ZmZWUgcnVuc1wiLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJTdHJlYW1lcnMgbmVlZCBhdXRvbWF0ZWQgcGF1c2VzIHdoZW4gY2FmZmVpbmUgcnVucyBsb3cuXCIsXG4gICAgICAgICAgICAgICAgICAgIHByaW9yaXR5OiBcIm1lZGl1bVwiLFxuICAgICAgICAgICAgICAgICAgICBkdWVEYXRlOiAoKSA9PiBuZXcgRGF0ZShEYXRlLm5vdygpICsgMjU5MjAwMDAwKS50b0lTT1N0cmluZygpLnNwbGl0KCdUJylbMF1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwiV29yZFByZXNzIGZvciBNZW1lc1wiLFxuICAgICAgICAgICAgICAgIHRhc2s6IHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiSW5zdGFsbCA3MyB1bm5lY2Vzc2FyeSBwbHVnaW5zXCIsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIlNpdGUgbm90IHJ1bm5pbmcgc2xvdyBlbm91Z2gsIG5lZWQgbW9yZSBmZWF0dXJlcyBub2JvZHkgYXNrZWQgZm9yLlwiLFxuICAgICAgICAgICAgICAgICAgICBwcmlvcml0eTogXCJsb3dcIixcbiAgICAgICAgICAgICAgICAgICAgZHVlRGF0ZTogKCkgPT4gbmV3IERhdGUoRGF0ZS5ub3coKSArIDUxODQwMDAwMCkudG9JU09TdHJpbmcoKS5zcGxpdCgnVCcpWzBdXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcIllvdVR1YmUgZm9yIEVycm9yIE1lc3NhZ2VzXCIsXG4gICAgICAgICAgICAgICAgdGFzazoge1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJJbXBsZW1lbnQgJ1NraXAgdG8gU3RhY2sgT3ZlcmZsb3cnIGJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJVc2VycyByZXF1ZXN0aW5nIGRpcmVjdCBsaW5rIHRvIHNvbWVvbmUgd2l0aCBzYW1lIGVycm9yLlwiLFxuICAgICAgICAgICAgICAgICAgICBwcmlvcml0eTogXCJoaWdoXCIsXG4gICAgICAgICAgICAgICAgICAgIGR1ZURhdGU6ICgpID0+IG5ldyBEYXRlKERhdGUubm93KCkgKyA4NjQwMDAwMCkudG9JU09TdHJpbmcoKS5zcGxpdCgnVCcpWzBdXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgXTtcbiAgICAgICAgdGhpcy5sb2FkUHJvamVjdHMoKTtcbiAgICB9XG5cbiAgICBsb2FkUHJvamVjdHMoKSB7XG4gICAgICAgIGNvbnN0IHNhdmVkUHJvamVjdHMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYm9vdGRvUHJvamVjdHMnKTtcbiAgICAgICAgaWYgKHNhdmVkUHJvamVjdHMpIHtcbiAgICAgICAgICAgIHRoaXMucHJvamVjdHMgPSBKU09OLnBhcnNlKHNhdmVkUHJvamVjdHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgZGVmYXVsdFByb2plY3QgPSB0aGlzLmNyZWF0ZURlZmF1bHRQcm9qZWN0KCk7XG4gICAgICAgICAgICB0aGlzLnByb2plY3RzID0gW2RlZmF1bHRQcm9qZWN0XTtcbiAgICAgICAgICAgIHRoaXMuc2F2ZVByb2plY3RzKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzYXZlUHJvamVjdHMoKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdib290ZG9Qcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KHRoaXMucHJvamVjdHMpKTtcbiAgICB9XG5cbiAgICBjcmVhdGVEZWZhdWx0UHJvamVjdCgpIHtcbiAgICAgICAgY29uc3QgcmFuZG9tSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLmRlZmF1bHRQcm9qZWN0cy5sZW5ndGgpO1xuICAgICAgICBjb25zdCBkZWZhdWx0UHJvamVjdCA9IHRoaXMuZGVmYXVsdFByb2plY3RzW3JhbmRvbUluZGV4XTtcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IHRoaXMuY3JlYXRlUHJvamVjdChkZWZhdWx0UHJvamVjdC5uYW1lKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHRvZG8gPSBuZXcgVG9kbyhcbiAgICAgICAgICAgIGRlZmF1bHRQcm9qZWN0LnRhc2sudGl0bGUsXG4gICAgICAgICAgICBkZWZhdWx0UHJvamVjdC50YXNrLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgZGVmYXVsdFByb2plY3QudGFzay5kdWVEYXRlKCksXG4gICAgICAgICAgICBkZWZhdWx0UHJvamVjdC50YXNrLnByaW9yaXR5XG4gICAgICAgICk7XG4gICAgICAgIHRoaXMudG9kb01hbmFnZXIuYWRkVG9kbyhwcm9qZWN0LmlkLCB0b2RvKTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiBwcm9qZWN0O1xuICAgIH1cblxuICAgIGNyZWF0ZVByb2plY3QobmFtZSkge1xuICAgICAgICBjb25zdCBwcm9qZWN0ID0gbmV3IFByb2plY3QobmFtZSk7XG4gICAgICAgIHRoaXMucHJvamVjdHMucHVzaChwcm9qZWN0KTtcbiAgICAgICAgdGhpcy5zYXZlUHJvamVjdHMoKTtcbiAgICAgICAgcmV0dXJuIHByb2plY3Q7XG4gICAgfVxuXG4gICAgZGVsZXRlUHJvamVjdChwcm9qZWN0SWQpIHtcbiAgICAgICAgdGhpcy5wcm9qZWN0cyA9IHRoaXMucHJvamVjdHMuZmlsdGVyKHByb2plY3QgPT4gcHJvamVjdC5pZCAhPT0gcHJvamVjdElkKTtcbiAgICAgICAgdGhpcy5zYXZlUHJvamVjdHMoKTtcbiAgICBcbiAgICAgICAgdGhpcy50b2RvTWFuYWdlci5yZW1vdmVQcm9qZWN0VGFza3MocHJvamVjdElkKTtcbiAgICB9XG5cbiAgICBnZXRQcm9qZWN0KHByb2plY3RJZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9qZWN0cy5maW5kKHByb2plY3QgPT4gcHJvamVjdC5pZCA9PT0gcHJvamVjdElkKTtcbiAgICB9XG5cbiAgICBnZXRBbGxQcm9qZWN0cygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvamVjdHM7XG4gICAgfVxufSIsImltcG9ydCB7IGlzVG9kYXksIGlzRnV0dXJlLCBwYXJzZUlTTyB9IGZyb20gJ2RhdGUtZm5zJztcblxuZXhwb3J0IGNsYXNzIFRvZG8ge1xuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiA9ICcnLCBkdWVEYXRlID0gbnVsbCwgcHJpb3JpdHkgPSAnbWVkaXVtJykge1xuICAgICAgICB0aGlzLmlkID0gRGF0ZS5ub3coKS50b1N0cmluZygpO1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgICAgICB0aGlzLmNvbXBsZXRlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmNyZWF0ZWRBdCA9IG5ldyBEYXRlKCk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb2RvTWFuYWdlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMudG9kb3MgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMubG9hZFRvZG9zKCk7XG4gICAgfVxuXG4gICAgbG9hZFRvZG9zKCkge1xuICAgICAgICBjb25zdCBzYXZlZFRvZG9zID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2Jvb3Rkb1RvZG9zJyk7XG4gICAgICAgIGlmIChzYXZlZFRvZG9zKSB7XG4gICAgICAgICAgICBjb25zdCB0b2RvRGF0YSA9IEpTT04ucGFyc2Uoc2F2ZWRUb2Rvcyk7XG4gICAgICAgICAgICB0aGlzLnRvZG9zID0gbmV3IE1hcCh0b2RvRGF0YSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzYXZlVG9kb3MoKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdib290ZG9Ub2RvcycsIEpTT04uc3RyaW5naWZ5KFsuLi50aGlzLnRvZG9zXSkpO1xuICAgIH1cblxuICAgIGFkZFRvZG8ocHJvamVjdElkLCB0b2RvKSB7XG4gICAgICAgIGlmICghdGhpcy50b2Rvcy5oYXMocHJvamVjdElkKSkge1xuICAgICAgICAgICAgdGhpcy50b2Rvcy5zZXQocHJvamVjdElkLCBbXSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50b2Rvcy5nZXQocHJvamVjdElkKS5wdXNoKHRvZG8pO1xuICAgICAgICB0aGlzLnNhdmVUb2RvcygpO1xuICAgIH1cblxuICAgIGdldFRvZG8ocHJvamVjdElkLCB0b2RvSWQpIHtcbiAgICAgICAgY29uc3QgcHJvamVjdFRvZG9zID0gdGhpcy50b2Rvcy5nZXQocHJvamVjdElkKTtcbiAgICAgICAgaWYgKHByb2plY3RUb2Rvcykge1xuICAgICAgICAgICAgcmV0dXJuIHByb2plY3RUb2Rvcy5maW5kKHRvZG8gPT4gdG9kby5pZCA9PT0gdG9kb0lkKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgXG4gICAgdXBkYXRlVG9kbyhwcm9qZWN0SWQsIHRvZG9JZCwgdXBkYXRlZFRvZG8pIHtcbiAgICAgICAgY29uc3QgcHJvamVjdFRvZG9zID0gdGhpcy50b2Rvcy5nZXQocHJvamVjdElkKTtcbiAgICAgICAgaWYgKHByb2plY3RUb2Rvcykge1xuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBwcm9qZWN0VG9kb3MuZmluZEluZGV4KHRvZG8gPT4gdG9kby5pZCA9PT0gdG9kb0lkKTtcbiAgICAgICAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICBwcm9qZWN0VG9kb3NbaW5kZXhdID0gdXBkYXRlZFRvZG87XG4gICAgICAgICAgICAgICAgdGhpcy5zYXZlVG9kb3MoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldEFsbFRvZG9zKCkge1xuICAgICAgICBjb25zdCBhbGxUb2RvcyA9IFtdO1xuICAgICAgICB0aGlzLnRvZG9zLmZvckVhY2goKHRvZG9zLCBwcm9qZWN0SWQpID0+IHtcbiAgICAgICAgICAgIHRvZG9zLmZvckVhY2godG9kbyA9PiB7XG4gICAgICAgICAgICAgICAgYWxsVG9kb3MucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIC4uLnRvZG8sXG4gICAgICAgICAgICAgICAgICAgIHByb2plY3RJZFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gYWxsVG9kb3M7XG4gICAgfVxuXG4gICAgZ2V0VG9kYXlUb2RvcygpIHtcbiAgICAgICAgY29uc3QgYWxsVG9kb3MgPSB0aGlzLmdldEFsbFRvZG9zKCk7XG4gICAgICAgIHJldHVybiBhbGxUb2Rvcy5maWx0ZXIodG9kbyA9PiB7XG4gICAgICAgICAgICBpZiAoIXRvZG8uZHVlRGF0ZSB8fCB0b2RvLmNvbXBsZXRlZCkgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgcmV0dXJuIGlzVG9kYXkocGFyc2VJU08odG9kby5kdWVEYXRlKSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdldFVwY29taW5nVG9kb3MoKSB7XG4gICAgICAgIGNvbnN0IGFsbFRvZG9zID0gdGhpcy5nZXRBbGxUb2RvcygpO1xuICAgICAgICByZXR1cm4gYWxsVG9kb3MuZmlsdGVyKHRvZG8gPT4ge1xuICAgICAgICAgICAgaWYgKCF0b2RvLmR1ZURhdGUgfHwgdG9kby5jb21wbGV0ZWQpIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIHJldHVybiBpc0Z1dHVyZShwYXJzZUlTTyh0b2RvLmR1ZURhdGUpKTtcbiAgICAgICAgfSkuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHBhcnNlSVNPKGEuZHVlRGF0ZSkgLSBwYXJzZUlTTyhiLmR1ZURhdGUpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBkZWxldGVUb2RvKHByb2plY3RJZCwgdG9kb0lkKSB7XG4gICAgICAgIGNvbnN0IHByb2plY3RUb2RvcyA9IHRoaXMudG9kb3MuZ2V0KHByb2plY3RJZCk7XG4gICAgICAgIGlmIChwcm9qZWN0VG9kb3MpIHtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gcHJvamVjdFRvZG9zLmZpbmRJbmRleCh0b2RvID0+IHRvZG8uaWQgPT09IHRvZG9JZCk7XG4gICAgICAgICAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgcHJvamVjdFRvZG9zLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zYXZlVG9kb3MoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRvZ2dsZVRvZG9Db21wbGV0ZShwcm9qZWN0SWQsIHRvZG9JZCkge1xuICAgICAgICBjb25zdCBwcm9qZWN0VG9kb3MgPSB0aGlzLnRvZG9zLmdldChwcm9qZWN0SWQpO1xuICAgICAgICBpZiAocHJvamVjdFRvZG9zKSB7XG4gICAgICAgICAgICBjb25zdCB0b2RvID0gcHJvamVjdFRvZG9zLmZpbmQodG9kbyA9PiB0b2RvLmlkID09PSB0b2RvSWQpO1xuICAgICAgICAgICAgaWYgKHRvZG8pIHtcbiAgICAgICAgICAgICAgICB0b2RvLmNvbXBsZXRlZCA9ICF0b2RvLmNvbXBsZXRlZDtcbiAgICAgICAgICAgICAgICB0aGlzLnNhdmVUb2RvcygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0Q29tcGxldGVkVG9kb3MoKSB7XG4gICAgICAgIGNvbnN0IGFsbFRvZG9zID0gdGhpcy5nZXRBbGxUb2RvcygpO1xuICAgICAgICByZXR1cm4gYWxsVG9kb3MuZmlsdGVyKHRvZG8gPT4gdG9kby5jb21wbGV0ZWQpO1xuICAgIH1cblxuICAgIGdldEFjdGl2ZVRvZG9zKCkge1xuICAgICAgICBjb25zdCBhbGxUb2RvcyA9IHRoaXMuZ2V0QWxsVG9kb3MoKTtcbiAgICAgICAgcmV0dXJuIGFsbFRvZG9zLmZpbHRlcih0b2RvID0+ICF0b2RvLmNvbXBsZXRlZCk7XG4gICAgfVxuXG4gICAgcmVtb3ZlUHJvamVjdFRhc2tzKHByb2plY3RJZCkge1xuICAgICAgICB0aGlzLnRvZG9zLmRlbGV0ZShwcm9qZWN0SWQpO1xuICAgICAgICB0aGlzLnNhdmVUb2RvcygpO1xuICAgIH1cbn0iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLmJhY2tncm91bmQtYm9vdCB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHotaW5kZXg6IC0xO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICB3aWR0aDogNzB2aDtcbiAgICBoZWlnaHQ6IDcwdmg7XG4gICAgb3BhY2l0eTogMC4wMztcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgZWFzZTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvYmFja2dyb3VuZC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxlQUFlO0lBQ2YsV0FBVztJQUNYLFFBQVE7SUFDUixTQUFTO0lBQ1QsZ0NBQWdDO0lBQ2hDLFdBQVc7SUFDWCxZQUFZO0lBQ1osYUFBYTtJQUNiLG9CQUFvQjtJQUNwQiw2QkFBNkI7QUFDakNcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmJhY2tncm91bmQtYm9vdCB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgei1pbmRleDogLTE7XFxuICAgIHRvcDogNTAlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICB3aWR0aDogNzB2aDtcXG4gICAgaGVpZ2h0OiA3MHZoO1xcbiAgICBvcGFjaXR5OiAwLjAzO1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2U7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLmFwcC1jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiAxO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcbiAgICAgICAgXCJoZWFkZXIgaGVhZGVyXCJcbiAgICAgICAgXCJzaWRlYmFyIG1haW5cIjtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI1MHB4IDFmcjtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyO1xuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbG9yKTtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XG59XG5cbi5hcHAtaGVhZGVyIHtcbiAgICBncmlkLWFyZWE6IGhlYWRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDFyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhZGVyLWJnKTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcbn1cblxuLmhlYWRlci1sZWZ0LCAuaGVhZGVyLXJpZ2h0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAxcmVtO1xufVxuXG4ubWVudS10b2dnbGUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDRweDtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcGFkZGluZzogNHB4O1xufVxuXG4ubWVudS10b2dnbGUgc3BhbiB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDI0cHg7XG4gICAgaGVpZ2h0OiAycHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XG4gICAgdHJhbnNpdGlvbjogMC4zcztcbn1cblxuLmFwcC1zaWRlYmFyIHtcbiAgICBncmlkLWFyZWE6IHNpZGViYXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZWJhci1iZyk7XG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG59XG5cbi5zaWRlYmFyLXNlY3Rpb24ge1xuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG59XG5cbi5zaWRlYmFyLXNlY3Rpb24gaDIge1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG59XG5cbi5zaWRlYmFyLW5hdiB1bCB7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBwYWRkaW5nOiAwO1xufVxuXG4uc2lkZWJhci1uYXYgYSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcGFkZGluZzogMC41cmVtO1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycztcbn1cblxuLnNpZGViYXItbmF2IGE6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyLWJnKTtcbn1cblxuLnNpZGViYXItbmF2IGEuYWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ob3Zlci1iZyk7XG4gICAgY29sb3I6ICMwMDdiZmY7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5hcHAtbWFpbiB7XG4gICAgZ3JpZC1hcmVhOiBtYWluO1xuICAgIHBhZGRpbmc6IDJyZW07XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbn1cblxuLmNvbnRlbnQtaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG59XG5cbi51c2VyLXByb2ZpbGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDAuNXJlbTtcbn1cblxuLnVzZXItYXZhdGFyIHtcbiAgICB3aWR0aDogMzJweDtcbiAgICBoZWlnaHQ6IDMycHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi51c2VyLW5hbWUge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnVzZXItbmFtZTpob3ZlciB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbi51c2VyLWF2YXRhciAuZGVmYXVsdC1hdmF0YXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YmZmO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG4udXNlci1hdmF0YXItaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG59XG5cbi51c2VyLXByb2ZpbGUge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi51c2VyLWRyb3Bkb3duIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxMDAlO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZWUyZTY7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGJveC1zaGFkb3c6IDAgMnB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgIG1pbi13aWR0aDogMTUwcHg7XG4gICAgbWFyZ2luLXRvcDogMC41cmVtO1xuICAgIHotaW5kZXg6IDEwMDA7XG59XG5cbi5kcm9wZG93bi1pdGVtIHtcbiAgICBwYWRkaW5nOiAwLjc1cmVtIDFyZW07XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzO1xufVxuXG4uZHJvcGRvd24taXRlbTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXItYmcpO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAuYXBwLWNvbnRhaW5lciB7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XG4gICAgICAgICAgICBcImhlYWRlclwiXG4gICAgICAgICAgICBcIm1haW5cIjtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgfVxuXG4gICAgLm1lbnUtdG9nZ2xlIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICB9XG5cbiAgICAuYXBwLXNpZGViYXIge1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIGxlZnQ6IC0yNTBweDtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICB3aWR0aDogMjUwcHg7XG4gICAgICAgIHRyYW5zaXRpb246IDAuM3M7XG4gICAgICAgIHotaW5kZXg6IDEwMDA7XG4gICAgfVxuXG4gICAgLmFwcC1zaWRlYmFyLmFjdGl2ZSB7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgfVxufVxuXG4uYXBwLXRpdGxlIHtcbiAgICBtYXJnaW46IDA7XG4gICAgZm9udC1zaXplOiAxLjhyZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XG59XG5cbi5hcHAtdGl0bGUgLmJvb3Qge1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgY29sb3I6ICMyYzNlNTA7XG59XG5cbi5hcHAtdGl0bGUgLmRvIHtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGNvbG9yOiAjMDA3YmZmO1xufVxuXG4ucHJvamVjdC1pdGVtLmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXItYmcpO1xuICAgIGNvbG9yOiAjMDA3YmZmO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uYWJvdXQtY29udGVudCAuZmVhdHVyZXMtdGV4dCB7XG4gICAgbWFyZ2luLXRvcDogMnJlbTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvbGF5b3V0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aUI7QUFDckI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmFwcC1jb250YWluZXIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgICAgICBcXFwiaGVhZGVyIGhlYWRlclxcXCJcXG4gICAgICAgIFxcXCJzaWRlYmFyIG1haW5cXFwiO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI1MHB4IDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmcjtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbG9yKTtcXG4gICAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xcbn1cXG5cXG4uYXBwLWhlYWRlciB7XFxuICAgIGdyaWQtYXJlYTogaGVhZGVyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRlci1iZyk7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xcbn1cXG5cXG4uaGVhZGVyLWxlZnQsIC5oZWFkZXItcmlnaHQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDFyZW07XFxufVxcblxcbi5tZW51LXRvZ2dsZSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogNHB4O1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgcGFkZGluZzogNHB4O1xcbn1cXG5cXG4ubWVudS10b2dnbGUgc3BhbiB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogMjRweDtcXG4gICAgaGVpZ2h0OiAycHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xcbn1cXG5cXG4uYXBwLXNpZGViYXIge1xcbiAgICBncmlkLWFyZWE6IHNpZGViYXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXItYmcpO1xcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG5cXG4uc2lkZWJhci1zZWN0aW9uIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG59XFxuXFxuLnNpZGViYXItc2VjdGlvbiBoMiB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gICAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XFxufVxcblxcbi5zaWRlYmFyLW5hdiB1bCB7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbi5zaWRlYmFyLW5hdiBhIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXG4gICAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzO1xcbn1cXG5cXG4uc2lkZWJhci1uYXYgYTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyLWJnKTtcXG59XFxuXFxuLnNpZGViYXItbmF2IGEuYWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXItYmcpO1xcbiAgICBjb2xvcjogIzAwN2JmZjtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5hcHAtbWFpbiB7XFxuICAgIGdyaWQtYXJlYTogbWFpbjtcXG4gICAgcGFkZGluZzogMnJlbTtcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG59XFxuXFxuLmNvbnRlbnQtaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbn1cXG5cXG4udXNlci1wcm9maWxlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAwLjVyZW07XFxufVxcblxcbi51c2VyLWF2YXRhciB7XFxuICAgIHdpZHRoOiAzMnB4O1xcbiAgICBoZWlnaHQ6IDMycHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLnVzZXItbmFtZSB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnVzZXItbmFtZTpob3ZlciB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG4udXNlci1hdmF0YXIgLmRlZmF1bHQtYXZhdGFyIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbi51c2VyLWF2YXRhci1pbWcge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxufVxcblxcbi51c2VyLXByb2ZpbGUge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnVzZXItZHJvcGRvd24ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMTAwJTtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGVlMmU2O1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgICBtaW4td2lkdGg6IDE1MHB4O1xcbiAgICBtYXJnaW4tdG9wOiAwLjVyZW07XFxuICAgIHotaW5kZXg6IDEwMDA7XFxufVxcblxcbi5kcm9wZG93bi1pdGVtIHtcXG4gICAgcGFkZGluZzogMC43NXJlbSAxcmVtO1xcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnM7XFxufVxcblxcbi5kcm9wZG93bi1pdGVtOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXItYmcpO1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcXG4gICAgLmFwcC1jb250YWluZXIge1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgICAgICAgICBcXFwiaGVhZGVyXFxcIlxcbiAgICAgICAgICAgIFxcXCJtYWluXFxcIjtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICB9XFxuXFxuICAgIC5tZW51LXRvZ2dsZSB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB9XFxuXFxuICAgIC5hcHAtc2lkZWJhciB7XFxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgICAgICBsZWZ0OiAtMjUwcHg7XFxuICAgICAgICB0b3A6IDA7XFxuICAgICAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICAgICAgd2lkdGg6IDI1MHB4O1xcbiAgICAgICAgdHJhbnNpdGlvbjogMC4zcztcXG4gICAgICAgIHotaW5kZXg6IDEwMDA7XFxuICAgIH1cXG5cXG4gICAgLmFwcC1zaWRlYmFyLmFjdGl2ZSB7XFxuICAgICAgICBsZWZ0OiAwO1xcbiAgICB9XFxufVxcblxcbi5hcHAtdGl0bGUge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XFxufVxcblxcbi5hcHAtdGl0bGUgLmJvb3Qge1xcbiAgICBmb250LXdlaWdodDogMzAwO1xcbiAgICBjb2xvcjogIzJjM2U1MDtcXG59XFxuXFxuLmFwcC10aXRsZSAuZG8ge1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBjb2xvcjogIzAwN2JmZjtcXG59XFxuXFxuLnByb2plY3QtaXRlbS5hY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ob3Zlci1iZyk7XFxuICAgIGNvbG9yOiAjMDA3YmZmO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmFib3V0LWNvbnRlbnQgLmZlYXR1cmVzLXRleHQge1xcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290IHtcbiAgICAtLWJnLWNvbG9yOiAjZmZmZmZmO1xuICAgIC0taGVhZGVyLWJnOiAjZmZmZmZmO1xuICAgIC0tc2lkZWJhci1iZzogI2Y4ZjlmYTtcbiAgICAtLXRleHQtY29sb3I6ICMyMTI1Mjk7XG4gICAgLS10ZXh0LW11dGVkOiAjNmM3NTdkO1xuICAgIC0tYm9yZGVyLWNvbG9yOiAjZGVlMmU2O1xuICAgIC0taG92ZXItYmc6IHJnYmEoMCwgMTIzLCAyNTUsIDAuMSk7XG59XG5cbioge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmJvZHkge1xuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICBsaW5lLWhlaWdodDogMS42O1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9tYWluLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFDckIsdUJBQXVCO0lBQ3ZCLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksOEJBQThCO0lBQzlCLGdCQUFnQjtBQUNwQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAgIC0tYmctY29sb3I6ICNmZmZmZmY7XFxuICAgIC0taGVhZGVyLWJnOiAjZmZmZmZmO1xcbiAgICAtLXNpZGViYXItYmc6ICNmOGY5ZmE7XFxuICAgIC0tdGV4dC1jb2xvcjogIzIxMjUyOTtcXG4gICAgLS10ZXh0LW11dGVkOiAjNmM3NTdkO1xcbiAgICAtLWJvcmRlci1jb2xvcjogI2RlZTJlNjtcXG4gICAgLS1ob3Zlci1iZzogcmdiYSgwLCAxMjMsIDI1NSwgMC4xKTtcXG59XFxuXFxuKiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgc2Fucy1zZXJpZjtcXG4gICAgbGluZS1oZWlnaHQ6IDEuNjtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAub3ZlcmxheSB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHotaW5kZXg6IDEwMDA7XG59XG5cbi5vbmJvYXJkaW5nLW1vZGFsIHtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAycmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBib3gtc2hhZG93OiAwIDJweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICB3aWR0aDogOTAlO1xuICAgIG1heC13aWR0aDogNTAwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ub25ib2FyZGluZy1tb2RhbCBoMiB7XG4gICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xuICAgIGNvbG9yOiAjMzMzO1xufVxuXG4ub25ib2FyZGluZy1tb2RhbCBpbnB1dCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMC44cmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbi5hdmF0YXItdXBsb2FkIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDJyZW07XG4gICAgbWFyZ2luOiAxLjVyZW0gMDtcbn1cblxuLmF2YXRhci1wcmV2aWV3IHtcbiAgICB3aWR0aDogMTUwcHg7XG4gICAgaGVpZ2h0OiAxNTBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZGRkO1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG5cbiNhdmF0YXItcHJldmlldy1pbWFnZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xufVxuXG4uYXZhdGFyLWFjdGlvbnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiAxcmVtO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5vbmJvYXJkaW5nLW1vZGFsIC5hdmF0YXItcHJldmlldyAuZGVmYXVsdC1hdmF0YXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YmZmO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiA0cmVtOyAvKiBvciB3aGF0ZXZlciBzaXplIHlvdSBwcmVmZXIgKi9cbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cbi5maWxlLWlucHV0IHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4uYnRuIHtcbiAgICBwYWRkaW5nOiAwLjhyZW0gMS41cmVtO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcbn1cblxuLmJ0bi1wcmltYXJ5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YmZmO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuXG4uYnRuLXByaW1hcnk6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDU2YjM7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xuICAgIGJveC1zaGFkb3c6IDAgNHB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5cbi5idG4tc2Vjb25kYXJ5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xuICAgIGNvbG9yOiAjMjEyNTI5O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZWUyZTY7XG59XG5cbi5idG4tc2Vjb25kYXJ5OmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTJlNmVhO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvb25ib2FyZGluZy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxlQUFlO0lBQ2YsTUFBTTtJQUNOLE9BQU87SUFDUCxXQUFXO0lBQ1gsWUFBWTtJQUNaLDhCQUE4QjtJQUM5QixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIseUNBQXlDO0lBQ3pDLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLHNCQUFzQjtJQUN0QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHNCQUFzQjtJQUN0QiwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsU0FBUztJQUNULG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsV0FBVztBQUNmOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGVBQWUsRUFBRSxnQ0FBZ0M7SUFDakQsaUJBQWlCO0lBQ2pCLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWix3Q0FBd0M7QUFDNUM7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsMkJBQTJCO0lBQzNCLHdDQUF3QztBQUM1Qzs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2QseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLDJCQUEyQjtBQUMvQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIub3ZlcmxheSB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB6LWluZGV4OiAxMDAwO1xcbn1cXG5cXG4ub25ib2FyZGluZy1tb2RhbCB7XFxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiAycmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgICB3aWR0aDogOTAlO1xcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5vbmJvYXJkaW5nLW1vZGFsIGgyIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xcbiAgICBjb2xvcjogIzMzMztcXG59XFxuXFxuLm9uYm9hcmRpbmctbW9kYWwgaW5wdXQge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogMC44cmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxufVxcblxcbi5hdmF0YXItdXBsb2FkIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAycmVtO1xcbiAgICBtYXJnaW46IDEuNXJlbSAwO1xcbn1cXG5cXG4uYXZhdGFyLXByZXZpZXcge1xcbiAgICB3aWR0aDogMTUwcHg7XFxuICAgIGhlaWdodDogMTUwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgYm9yZGVyOiAycHggc29saWQgI2RkZDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG59XFxuXFxuI2F2YXRhci1wcmV2aWV3LWltYWdlIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbn1cXG5cXG4uYXZhdGFyLWFjdGlvbnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDFyZW07XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLm9uYm9hcmRpbmctbW9kYWwgLmF2YXRhci1wcmV2aWV3IC5kZWZhdWx0LWF2YXRhciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDdiZmY7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogNHJlbTsgLyogb3Igd2hhdGV2ZXIgc2l6ZSB5b3UgcHJlZmVyICovXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuLmZpbGUtaW5wdXQge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uYnRuIHtcXG4gICAgcGFkZGluZzogMC44cmVtIDEuNXJlbTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcXG59XFxuXFxuLmJ0bi1wcmltYXJ5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbn1cXG5cXG4uYnRuLXByaW1hcnk6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1NmIzO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XFxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxufVxcblxcbi5idG4tc2Vjb25kYXJ5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcXG4gICAgY29sb3I6ICMyMTI1Mjk7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZWUyZTY7XFxufVxcblxcbi5idG4tc2Vjb25kYXJ5OmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UyZTZlYTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5wcm9qZWN0cy1saXN0IHtcbiAgICBtYXJnaW46IDFyZW0gMDtcbn1cblxuLnByb2plY3QtaXRlbSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBwYWRkaW5nOiAwLjVyZW07XG4gICAgbWFyZ2luOiAwLjI1cmVtIDA7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnM7XG59XG5cbi5wcm9qZWN0LWl0ZW06aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyLWJnKTtcbn1cblxuLnNpZGViYXItbmF2IGEuYWN0aXZlLFxuLnByb2plY3QtaXRlbS5hY3RpdmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyLWJnKTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnByb2plY3QtbmFtZSB7XG4gICAgZmxleC1ncm93OiAxO1xuICAgIG1hcmdpbi1yaWdodDogMC41cmVtO1xufVxuXG4uZGVsZXRlLXByb2plY3Qge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgY29sb3I6ICMyMTI1Mjk7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHBhZGRpbmc6IDAuMjVyZW07XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzO1xufVxuXG4ucHJvamVjdC1pdGVtOmhvdmVyIC5kZWxldGUtcHJvamVjdCB7XG4gICAgb3BhY2l0eTogMTtcbn1cblxuLmFkZC1wcm9qZWN0LWZvcm0ge1xuICAgIG1hcmdpbi10b3A6IDFyZW07XG59XG5cbi5hZGQtcHJvamVjdC1pbnB1dCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMC41cmVtO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbn1cblxuLnByb2plY3QtYWN0aW9ucyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDAuNXJlbTtcbn1cblxuLmJ0bi1hZGQtcHJvamVjdCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMC41cmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDdiZmY7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzO1xufVxuXG4uYnRuLWFkZC1wcm9qZWN0OmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1NmIzO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9wcm9qZWN0cy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw4QkFBOEI7SUFDOUIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLGlDQUFpQztBQUNyQzs7QUFFQTs7SUFFSSxpQ0FBaUM7SUFDakMsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGNBQWM7SUFDZCxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxlQUFlO0lBQ2YscUNBQXFDO0lBQ3JDLGtCQUFrQjtJQUNsQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsV0FBVztBQUNmOztBQUVBO0lBQ0ksV0FBVztJQUNYLGVBQWU7SUFDZix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnByb2plY3RzLWxpc3Qge1xcbiAgICBtYXJnaW46IDFyZW0gMDtcXG59XFxuXFxuLnByb2plY3QtaXRlbSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgcGFkZGluZzogMC41cmVtO1xcbiAgICBtYXJnaW46IDAuMjVyZW0gMDtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycztcXG59XFxuXFxuLnByb2plY3QtaXRlbTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyLWJnKTtcXG59XFxuXFxuLnNpZGViYXItbmF2IGEuYWN0aXZlLFxcbi5wcm9qZWN0LWl0ZW0uYWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXItYmcpO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLnByb2plY3QtbmFtZSB7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG4gICAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XFxufVxcblxcbi5kZWxldGUtcHJvamVjdCB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY29sb3I6ICMyMTI1Mjk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgcGFkZGluZzogMC4yNXJlbTtcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzO1xcbn1cXG5cXG4ucHJvamVjdC1pdGVtOmhvdmVyIC5kZWxldGUtcHJvamVjdCB7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcblxcbi5hZGQtcHJvamVjdC1mb3JtIHtcXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcXG59XFxuXFxuLmFkZC1wcm9qZWN0LWlucHV0IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XFxufVxcblxcbi5wcm9qZWN0LWFjdGlvbnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDAuNXJlbTtcXG59XFxuXFxuLmJ0bi1hZGQtcHJvamVjdCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDdiZmY7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzO1xcbn1cXG5cXG4uYnRuLWFkZC1wcm9qZWN0OmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNTZiMztcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAubW9kYWwtb3ZlcmxheSB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHotaW5kZXg6IDEwMDA7XG59XG5cbi50b2RvLW1vZGFsIHtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAycmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICB3aWR0aDogOTAlO1xuICAgIG1heC13aWR0aDogNTAwcHg7XG59XG5cbi50b2RvLWZvcm0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDFyZW07XG59XG5cbi5mb3JtLWdyb3VwIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAwLjVyZW07XG59XG5cbi5mb3JtLWdyb3VwIGxhYmVsIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmZvcm0tZ3JvdXAgaW5wdXQsXG4uZm9ybS1ncm91cCB0ZXh0YXJlYSxcbi5mb3JtLWdyb3VwIHNlbGVjdCB7XG4gICAgcGFkZGluZzogMC41cmVtO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbn1cblxuLnRvZG8tbGlzdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMC41cmVtO1xuICAgIG1hcmdpbi10b3A6IDFyZW07XG59XG5cbi50b2RvLWl0ZW0ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMXJlbTtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBnYXA6IDFyZW07XG59XG5cbi50b2RvLWNoZWNrYm94IHtcbiAgICB3aWR0aDogMjBweDtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4udG9kby1jb250ZW50IHtcbiAgICBmbGV4LWdyb3c6IDE7XG59XG5cbi50b2RvLXRpdGxlIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjI1cmVtO1xufVxuXG4udG9kby1kZXNjcmlwdGlvbiB7XG4gICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgY29sb3I6ICM2NjY7XG59XG5cbi50b2RvLW1ldGFkYXRhIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogMXJlbTtcbiAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICBjb2xvcjogIzY2Njtcbn1cblxuLnRvZG8taXRlbSAudG9kby1hY3Rpb25zIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwLjVyZW07XG4gICAgcmlnaHQ6IDAuNXJlbTtcbn1cblxuLnRvZG8tbW9kYWwgLnRvZG8tYWN0aW9ucyB7XG4gICAgcG9zaXRpb246IHN0YXRpYztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogMXJlbTtcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xufVxuXG4udG9kby1hY3Rpb25zIGJ1dHRvbiB7XG4gICAgcGFkZGluZzogMC4yNXJlbTtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgY29sb3I6ICM2Yzc1N2Q7XG4gICAgdHJhbnNpdGlvbjogY29sb3IgMC4ycztcbn1cblxuLnRvZG8tYWN0aW9ucyBidXR0b246aG92ZXIge1xuICAgIGNvbG9yOiAjMDA3YmZmO1xufVxuXG4uZWRpdC10b2RvIHN2ZyB7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgaGVpZ2h0OiAyMHB4O1xufVxuXG4uYnRuLXRvZG8ge1xuICAgIHBhZGRpbmc6IDAuOHJlbSAxLjVyZW07XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuICAgIG1pbi13aWR0aDogMTAwcHg7XG59XG5cbi5idG4tdG9kby5idG4tcHJpbWFyeSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cblxuLmJ0bi10b2RvLmJ0bi1wcmltYXJ5OmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1NmIzO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcbiAgICBib3gtc2hhZG93OiAwIDRweCA2cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmJ0bi10b2RvLmJ0bi1zZWNvbmRhcnkge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XG4gICAgY29sb3I6ICMyMTI1Mjk7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RlZTJlNjtcbn1cblxuLmJ0bi10b2RvLmJ0bi1zZWNvbmRhcnk6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlMmU2ZWE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xufVxuXG4ucHJvamVjdC1zZWN0aW9uIHtcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xufVxuXG4ucHJvamVjdC1oZWFkZXIge1xuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgIG1hcmdpbjogMS41cmVtIDAgMXJlbSAwO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5wcm9qZWN0LXNlY3Rpb246Zmlyc3QtY2hpbGQgLnByb2plY3QtaGVhZGVyIHtcbiAgICBtYXJnaW4tdG9wOiAwO1xufVxuXG4uYWRkLXRhc2stYnRuIHtcbiAgICBwYWRkaW5nOiAwLjhyZW0gMS41cmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDdiZmY7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzO1xufVxuXG4uYWRkLXRhc2stYnRuOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1NmIzO1xufVxuXG4uYnRuLXRvZG8uYnRuLWRhbmdlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RjMzU0NTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cblxuLmJ0bi10b2RvLmJ0bi1kYW5nZXI6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNjODIzMzM7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xuICAgIGJveC1zaGFkb3c6IDAgNHB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4uYWJvdXQtY29udGVudCB7XG4gICAgbWFyZ2luOiAxLjVyZW0gMDtcbiAgICBsaW5lLWhlaWdodDogMS42O1xufVxuXG4uYWJvdXQtY29udGVudCB1bCB7XG4gICAgbWFyZ2luOiAxcmVtIDA7XG4gICAgcGFkZGluZy1sZWZ0OiAxLjVyZW07XG59XG5cbi5hYm91dC1jb250ZW50IC5zaWduYXR1cmUge1xuICAgIG1hcmdpbi10b3A6IDJyZW07XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgIGNvbG9yOiAjNjY2O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG59XG5cbi5hZGQtdGFzay1idG4uZGlzYWJsZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2NjY2M7XG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgICBvcGFjaXR5OiAwLjc7XG59XG5cbi5hZGQtdGFzay1idG4uZGlzYWJsZWQ6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2NjY2M7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3RvZG9zLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGVBQWU7SUFDZixNQUFNO0lBQ04sT0FBTztJQUNQLFFBQVE7SUFDUixTQUFTO0lBQ1QsOEJBQThCO0lBQzlCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTs7O0lBR0ksZUFBZTtJQUNmLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsV0FBVztJQUNYLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsU0FBUztJQUNULGlCQUFpQjtJQUNqQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLFNBQVM7SUFDVCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixlQUFlO0lBQ2YsY0FBYztJQUNkLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osd0NBQXdDO0FBQzVDOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLDJCQUEyQjtJQUMzQix3Q0FBd0M7SUFDeEMsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2QseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQix1QkFBdUI7SUFDdkIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0Qix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLHdDQUF3QztBQUM1Qzs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QiwyQkFBMkI7SUFDM0Isd0NBQXdDO0lBQ3hDLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksY0FBYztJQUNkLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIubW9kYWwtb3ZlcmxheSB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB6LWluZGV4OiAxMDAwO1xcbn1cXG5cXG4udG9kby1tb2RhbCB7XFxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiAycmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIHdpZHRoOiA5MCU7XFxuICAgIG1heC13aWR0aDogNTAwcHg7XFxufVxcblxcbi50b2RvLWZvcm0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDFyZW07XFxufVxcblxcbi5mb3JtLWdyb3VwIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAwLjVyZW07XFxufVxcblxcbi5mb3JtLWdyb3VwIGxhYmVsIHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5mb3JtLWdyb3VwIGlucHV0LFxcbi5mb3JtLWdyb3VwIHRleHRhcmVhLFxcbi5mb3JtLWdyb3VwIHNlbGVjdCB7XFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbi50b2RvLWxpc3Qge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDAuNXJlbTtcXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcXG59XFxuXFxuLnRvZG8taXRlbSB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4udG9kby1jaGVja2JveCB7XFxuICAgIHdpZHRoOiAyMHB4O1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRvZG8tY29udGVudCB7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG59XFxuXFxuLnRvZG8tdGl0bGUge1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMC4yNXJlbTtcXG59XFxuXFxuLnRvZG8tZGVzY3JpcHRpb24ge1xcbiAgICBmb250LXNpemU6IDAuOXJlbTtcXG4gICAgY29sb3I6ICM2NjY7XFxufVxcblxcbi50b2RvLW1ldGFkYXRhIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICBmb250LXNpemU6IDAuOHJlbTtcXG4gICAgY29sb3I6ICM2NjY7XFxufVxcblxcbi50b2RvLWl0ZW0gLnRvZG8tYWN0aW9ucyB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwLjVyZW07XFxuICAgIHJpZ2h0OiAwLjVyZW07XFxufVxcblxcbi50b2RvLW1vZGFsIC50b2RvLWFjdGlvbnMge1xcbiAgICBwb3NpdGlvbjogc3RhdGljO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDFyZW07XFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxufVxcblxcbi50b2RvLWFjdGlvbnMgYnV0dG9uIHtcXG4gICAgcGFkZGluZzogMC4yNXJlbTtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGNvbG9yOiAjNmM3NTdkO1xcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjJzO1xcbn1cXG5cXG4udG9kby1hY3Rpb25zIGJ1dHRvbjpob3ZlciB7XFxuICAgIGNvbG9yOiAjMDA3YmZmO1xcbn1cXG5cXG4uZWRpdC10b2RvIHN2ZyB7XFxuICAgIHdpZHRoOiAyMHB4O1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxufVxcblxcbi5idG4tdG9kbyB7XFxuICAgIHBhZGRpbmc6IDAuOHJlbSAxLjVyZW07XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XFxuICAgIG1pbi13aWR0aDogMTAwcHg7XFxufVxcblxcbi5idG4tdG9kby5idG4tcHJpbWFyeSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDdiZmY7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG59XFxuXFxuLmJ0bi10b2RvLmJ0bi1wcmltYXJ5OmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNTZiMztcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xcbiAgICBib3gtc2hhZG93OiAwIDRweCA2cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5idG4tdG9kby5idG4tc2Vjb25kYXJ5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcXG4gICAgY29sb3I6ICMyMTI1Mjk7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZWUyZTY7XFxufVxcblxcbi5idG4tdG9kby5idG4tc2Vjb25kYXJ5OmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UyZTZlYTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xcbn1cXG5cXG4ucHJvamVjdC1zZWN0aW9uIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG59XFxuXFxuLnByb2plY3QtaGVhZGVyIHtcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxuICAgIG1hcmdpbjogMS41cmVtIDAgMXJlbSAwO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4ucHJvamVjdC1zZWN0aW9uOmZpcnN0LWNoaWxkIC5wcm9qZWN0LWhlYWRlciB7XFxuICAgIG1hcmdpbi10b3A6IDA7XFxufVxcblxcbi5hZGQtdGFzay1idG4ge1xcbiAgICBwYWRkaW5nOiAwLjhyZW0gMS41cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YmZmO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycztcXG59XFxuXFxuLmFkZC10YXNrLWJ0bjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDU2YjM7XFxufVxcblxcbi5idG4tdG9kby5idG4tZGFuZ2VyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RjMzU0NTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbn1cXG5cXG4uYnRuLXRvZG8uYnRuLWRhbmdlcjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjODIzMzM7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcXG4gICAgYm94LXNoYWRvdzogMCA0cHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uYWJvdXQtY29udGVudCB7XFxuICAgIG1hcmdpbjogMS41cmVtIDA7XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjY7XFxufVxcblxcbi5hYm91dC1jb250ZW50IHVsIHtcXG4gICAgbWFyZ2luOiAxcmVtIDA7XFxuICAgIHBhZGRpbmctbGVmdDogMS41cmVtO1xcbn1cXG5cXG4uYWJvdXQtY29udGVudCAuc2lnbmF0dXJlIHtcXG4gICAgbWFyZ2luLXRvcDogMnJlbTtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgICBjb2xvcjogIzY2NjtcXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcXG59XFxuXFxuLmFkZC10YXNrLWJ0bi5kaXNhYmxlZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2NjY2M7XFxuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxuICAgIG9wYWNpdHk6IDAuNztcXG59XFxuXFxuLmFkZC10YXNrLWJ0bi5kaXNhYmxlZDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2NjY2M7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2JhY2tncm91bmQuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYmFja2dyb3VuZC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbGF5b3V0LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2xheW91dC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9vbmJvYXJkaW5nLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL29uYm9hcmRpbmcuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Byb2plY3RzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Byb2plY3RzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi90b2Rvcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi90b2Rvcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGNvbnN0cnVjdEZyb20gfSBmcm9tIFwiLi4vY29uc3RydWN0RnJvbS5qc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplRGF0ZXMoY29udGV4dCwgLi4uZGF0ZXMpIHtcbiAgY29uc3Qgbm9ybWFsaXplID0gY29uc3RydWN0RnJvbS5iaW5kKFxuICAgIG51bGwsXG4gICAgY29udGV4dCB8fCBkYXRlcy5maW5kKChkYXRlKSA9PiB0eXBlb2YgZGF0ZSA9PT0gXCJvYmplY3RcIiksXG4gICk7XG4gIHJldHVybiBkYXRlcy5tYXAobm9ybWFsaXplKTtcbn1cbiIsIi8qKlxuICogQG1vZHVsZSBjb25zdGFudHNcbiAqIEBzdW1tYXJ5IFVzZWZ1bCBjb25zdGFudHNcbiAqIEBkZXNjcmlwdGlvblxuICogQ29sbGVjdGlvbiBvZiB1c2VmdWwgZGF0ZSBjb25zdGFudHMuXG4gKlxuICogVGhlIGNvbnN0YW50cyBjb3VsZCBiZSBpbXBvcnRlZCBmcm9tIGBkYXRlLWZucy9jb25zdGFudHNgOlxuICpcbiAqIGBgYHRzXG4gKiBpbXBvcnQgeyBtYXhUaW1lLCBtaW5UaW1lIH0gZnJvbSBcIi4vY29uc3RhbnRzL2RhdGUtZm5zL2NvbnN0YW50c1wiO1xuICpcbiAqIGZ1bmN0aW9uIGlzQWxsb3dlZFRpbWUodGltZSkge1xuICogICByZXR1cm4gdGltZSA8PSBtYXhUaW1lICYmIHRpbWUgPj0gbWluVGltZTtcbiAqIH1cbiAqIGBgYFxuICovXG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBkYXlzSW5XZWVrXG4gKiBAc3VtbWFyeSBEYXlzIGluIDEgd2Vlay5cbiAqL1xuZXhwb3J0IGNvbnN0IGRheXNJbldlZWsgPSA3O1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgZGF5c0luWWVhclxuICogQHN1bW1hcnkgRGF5cyBpbiAxIHllYXIuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBIb3cgbWFueSBkYXlzIGluIGEgeWVhci5cbiAqXG4gKiBPbmUgeWVhcnMgZXF1YWxzIDM2NS4yNDI1IGRheXMgYWNjb3JkaW5nIHRvIHRoZSBmb3JtdWxhOlxuICpcbiAqID4gTGVhcCB5ZWFyIG9jY3VycyBldmVyeSA0IHllYXJzLCBleGNlcHQgZm9yIHllYXJzIHRoYXQgYXJlIGRpdmlzaWJsZSBieSAxMDAgYW5kIG5vdCBkaXZpc2libGUgYnkgNDAwLlxuICogPiAxIG1lYW4geWVhciA9ICgzNjUrMS80LTEvMTAwKzEvNDAwKSBkYXlzID0gMzY1LjI0MjUgZGF5c1xuICovXG5leHBvcnQgY29uc3QgZGF5c0luWWVhciA9IDM2NS4yNDI1O1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgbWF4VGltZVxuICogQHN1bW1hcnkgTWF4aW11bSBhbGxvd2VkIHRpbWUuXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IG1heFRpbWUgfSBmcm9tIFwiLi9jb25zdGFudHMvZGF0ZS1mbnMvY29uc3RhbnRzXCI7XG4gKlxuICogY29uc3QgaXNWYWxpZCA9IDg2NDAwMDAwMDAwMDAwMDEgPD0gbWF4VGltZTtcbiAqIC8vPT4gZmFsc2VcbiAqXG4gKiBuZXcgRGF0ZSg4NjQwMDAwMDAwMDAwMDAxKTtcbiAqIC8vPT4gSW52YWxpZCBEYXRlXG4gKi9cbmV4cG9ydCBjb25zdCBtYXhUaW1lID0gTWF0aC5wb3coMTAsIDgpICogMjQgKiA2MCAqIDYwICogMTAwMDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1pblRpbWVcbiAqIEBzdW1tYXJ5IE1pbmltdW0gYWxsb3dlZCB0aW1lLlxuICpcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgeyBtaW5UaW1lIH0gZnJvbSBcIi4vY29uc3RhbnRzL2RhdGUtZm5zL2NvbnN0YW50c1wiO1xuICpcbiAqIGNvbnN0IGlzVmFsaWQgPSAtODY0MDAwMDAwMDAwMDAwMSA+PSBtaW5UaW1lO1xuICogLy89PiBmYWxzZVxuICpcbiAqIG5ldyBEYXRlKC04NjQwMDAwMDAwMDAwMDAxKVxuICogLy89PiBJbnZhbGlkIERhdGVcbiAqL1xuZXhwb3J0IGNvbnN0IG1pblRpbWUgPSAtbWF4VGltZTtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1pbGxpc2Vjb25kc0luV2Vla1xuICogQHN1bW1hcnkgTWlsbGlzZWNvbmRzIGluIDEgd2Vlay5cbiAqL1xuZXhwb3J0IGNvbnN0IG1pbGxpc2Vjb25kc0luV2VlayA9IDYwNDgwMDAwMDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1pbGxpc2Vjb25kc0luRGF5XG4gKiBAc3VtbWFyeSBNaWxsaXNlY29uZHMgaW4gMSBkYXkuXG4gKi9cbmV4cG9ydCBjb25zdCBtaWxsaXNlY29uZHNJbkRheSA9IDg2NDAwMDAwO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgbWlsbGlzZWNvbmRzSW5NaW51dGVcbiAqIEBzdW1tYXJ5IE1pbGxpc2Vjb25kcyBpbiAxIG1pbnV0ZVxuICovXG5leHBvcnQgY29uc3QgbWlsbGlzZWNvbmRzSW5NaW51dGUgPSA2MDAwMDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1pbGxpc2Vjb25kc0luSG91clxuICogQHN1bW1hcnkgTWlsbGlzZWNvbmRzIGluIDEgaG91clxuICovXG5leHBvcnQgY29uc3QgbWlsbGlzZWNvbmRzSW5Ib3VyID0gMzYwMDAwMDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1pbGxpc2Vjb25kc0luU2Vjb25kXG4gKiBAc3VtbWFyeSBNaWxsaXNlY29uZHMgaW4gMSBzZWNvbmRcbiAqL1xuZXhwb3J0IGNvbnN0IG1pbGxpc2Vjb25kc0luU2Vjb25kID0gMTAwMDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1pbnV0ZXNJblllYXJcbiAqIEBzdW1tYXJ5IE1pbnV0ZXMgaW4gMSB5ZWFyLlxuICovXG5leHBvcnQgY29uc3QgbWludXRlc0luWWVhciA9IDUyNTYwMDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1pbnV0ZXNJbk1vbnRoXG4gKiBAc3VtbWFyeSBNaW51dGVzIGluIDEgbW9udGguXG4gKi9cbmV4cG9ydCBjb25zdCBtaW51dGVzSW5Nb250aCA9IDQzMjAwO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgbWludXRlc0luRGF5XG4gKiBAc3VtbWFyeSBNaW51dGVzIGluIDEgZGF5LlxuICovXG5leHBvcnQgY29uc3QgbWludXRlc0luRGF5ID0gMTQ0MDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1pbnV0ZXNJbkhvdXJcbiAqIEBzdW1tYXJ5IE1pbnV0ZXMgaW4gMSBob3VyLlxuICovXG5leHBvcnQgY29uc3QgbWludXRlc0luSG91ciA9IDYwO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgbW9udGhzSW5RdWFydGVyXG4gKiBAc3VtbWFyeSBNb250aHMgaW4gMSBxdWFydGVyLlxuICovXG5leHBvcnQgY29uc3QgbW9udGhzSW5RdWFydGVyID0gMztcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1vbnRoc0luWWVhclxuICogQHN1bW1hcnkgTW9udGhzIGluIDEgeWVhci5cbiAqL1xuZXhwb3J0IGNvbnN0IG1vbnRoc0luWWVhciA9IDEyO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgcXVhcnRlcnNJblllYXJcbiAqIEBzdW1tYXJ5IFF1YXJ0ZXJzIGluIDEgeWVhclxuICovXG5leHBvcnQgY29uc3QgcXVhcnRlcnNJblllYXIgPSA0O1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgc2Vjb25kc0luSG91clxuICogQHN1bW1hcnkgU2Vjb25kcyBpbiAxIGhvdXIuXG4gKi9cbmV4cG9ydCBjb25zdCBzZWNvbmRzSW5Ib3VyID0gMzYwMDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIHNlY29uZHNJbk1pbnV0ZVxuICogQHN1bW1hcnkgU2Vjb25kcyBpbiAxIG1pbnV0ZS5cbiAqL1xuZXhwb3J0IGNvbnN0IHNlY29uZHNJbk1pbnV0ZSA9IDYwO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgc2Vjb25kc0luRGF5XG4gKiBAc3VtbWFyeSBTZWNvbmRzIGluIDEgZGF5LlxuICovXG5leHBvcnQgY29uc3Qgc2Vjb25kc0luRGF5ID0gc2Vjb25kc0luSG91ciAqIDI0O1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgc2Vjb25kc0luV2Vla1xuICogQHN1bW1hcnkgU2Vjb25kcyBpbiAxIHdlZWsuXG4gKi9cbmV4cG9ydCBjb25zdCBzZWNvbmRzSW5XZWVrID0gc2Vjb25kc0luRGF5ICogNztcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIHNlY29uZHNJblllYXJcbiAqIEBzdW1tYXJ5IFNlY29uZHMgaW4gMSB5ZWFyLlxuICovXG5leHBvcnQgY29uc3Qgc2Vjb25kc0luWWVhciA9IHNlY29uZHNJbkRheSAqIGRheXNJblllYXI7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBzZWNvbmRzSW5Nb250aFxuICogQHN1bW1hcnkgU2Vjb25kcyBpbiAxIG1vbnRoXG4gKi9cbmV4cG9ydCBjb25zdCBzZWNvbmRzSW5Nb250aCA9IHNlY29uZHNJblllYXIgLyAxMjtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIHNlY29uZHNJblF1YXJ0ZXJcbiAqIEBzdW1tYXJ5IFNlY29uZHMgaW4gMSBxdWFydGVyLlxuICovXG5leHBvcnQgY29uc3Qgc2Vjb25kc0luUXVhcnRlciA9IHNlY29uZHNJbk1vbnRoICogMztcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIGNvbnN0cnVjdEZyb21TeW1ib2xcbiAqIEBzdW1tYXJ5IFN5bWJvbCBlbmFibGluZyBEYXRlIGV4dGVuc2lvbnMgdG8gaW5oZXJpdCBwcm9wZXJ0aWVzIGZyb20gdGhlIHJlZmVyZW5jZSBkYXRlLlxuICpcbiAqIFRoZSBzeW1ib2wgaXMgdXNlZCB0byBlbmFibGUgdGhlIGBjb25zdHJ1Y3RGcm9tYCBmdW5jdGlvbiB0byBjb25zdHJ1Y3QgYSBkYXRlXG4gKiB1c2luZyBhIHJlZmVyZW5jZSBkYXRlIGFuZCBhIHZhbHVlLiBJdCBhbGxvd3MgdG8gdHJhbnNmZXIgZXh0cmEgcHJvcGVydGllc1xuICogZnJvbSB0aGUgcmVmZXJlbmNlIGRhdGUgdG8gdGhlIG5ldyBkYXRlLiBJdCdzIHVzZWZ1bCBmb3IgZXh0ZW5zaW9ucyBsaWtlXG4gKiBbYFRaRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy90eikgdGhhdCBhY2NlcHQgYSB0aW1lIHpvbmUgYXNcbiAqIGEgY29uc3RydWN0b3IgYXJndW1lbnQuXG4gKi9cbmV4cG9ydCBjb25zdCBjb25zdHJ1Y3RGcm9tU3ltYm9sID0gU3ltYm9sLmZvcihcImNvbnN0cnVjdERhdGVGcm9tXCIpO1xuIiwiaW1wb3J0IHsgY29uc3RydWN0RnJvbVN5bWJvbCB9IGZyb20gXCIuL2NvbnN0YW50cy5qc1wiO1xuXG4vKipcbiAqIEBuYW1lIGNvbnN0cnVjdEZyb21cbiAqIEBjYXRlZ29yeSBHZW5lcmljIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbnN0cnVjdHMgYSBkYXRlIHVzaW5nIHRoZSByZWZlcmVuY2UgZGF0ZSBhbmQgdGhlIHZhbHVlXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBUaGUgZnVuY3Rpb24gY29uc3RydWN0cyBhIG5ldyBkYXRlIHVzaW5nIHRoZSBjb25zdHJ1Y3RvciBmcm9tIHRoZSByZWZlcmVuY2VcbiAqIGRhdGUgYW5kIHRoZSBnaXZlbiB2YWx1ZS4gSXQgaGVscHMgdG8gYnVpbGQgZ2VuZXJpYyBmdW5jdGlvbnMgdGhhdCBhY2NlcHRcbiAqIGRhdGUgZXh0ZW5zaW9ucy5cbiAqXG4gKiBJdCBkZWZhdWx0cyB0byBgRGF0ZWAgaWYgdGhlIHBhc3NlZCByZWZlcmVuY2UgZGF0ZSBpcyBhIG51bWJlciBvciBhIHN0cmluZy5cbiAqXG4gKiBTdGFydGluZyBmcm9tIHYzLjcuMCwgaXQgYWxsb3dzIHRvIGNvbnN0cnVjdCBhIGRhdGUgdXNpbmcgYFtTeW1ib2wuZm9yKFwiY29uc3RydWN0RGF0ZUZyb21cIildYFxuICogZW5hYmxpbmcgdG8gdHJhbnNmZXIgZXh0cmEgcHJvcGVydGllcyBmcm9tIHRoZSByZWZlcmVuY2UgZGF0ZSB0byB0aGUgbmV3IGRhdGUuXG4gKiBJdCdzIHVzZWZ1bCBmb3IgZXh0ZW5zaW9ucyBsaWtlIFtgVFpEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3R6KVxuICogdGhhdCBhY2NlcHQgYSB0aW1lIHpvbmUgYXMgYSBjb25zdHJ1Y3RvciBhcmd1bWVudC5cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSByZWZlcmVuY2UgZGF0ZSB0byB0YWtlIGNvbnN0cnVjdG9yIGZyb21cbiAqIEBwYXJhbSB2YWx1ZSAtIFRoZSB2YWx1ZSB0byBjcmVhdGUgdGhlIGRhdGVcbiAqXG4gKiBAcmV0dXJucyBEYXRlIGluaXRpYWxpemVkIHVzaW5nIHRoZSBnaXZlbiBkYXRlIGFuZCB2YWx1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgeyBjb25zdHJ1Y3RGcm9tIH0gZnJvbSBcIi4vY29uc3RydWN0RnJvbS9kYXRlLWZuc1wiO1xuICpcbiAqIC8vIEEgZnVuY3Rpb24gdGhhdCBjbG9uZXMgYSBkYXRlIHByZXNlcnZpbmcgdGhlIG9yaWdpbmFsIHR5cGVcbiAqIGZ1bmN0aW9uIGNsb25lRGF0ZTxEYXRlVHlwZSBleHRlbmRzIERhdGU+KGRhdGU6IERhdGVUeXBlKTogRGF0ZVR5cGUge1xuICogICByZXR1cm4gY29uc3RydWN0RnJvbShcbiAqICAgICBkYXRlLCAvLyBVc2UgY29uc3RydWN0b3IgZnJvbSB0aGUgZ2l2ZW4gZGF0ZVxuICogICAgIGRhdGUuZ2V0VGltZSgpIC8vIFVzZSB0aGUgZGF0ZSB2YWx1ZSB0byBjcmVhdGUgYSBuZXcgZGF0ZVxuICogICApO1xuICogfVxuICovXG5leHBvcnQgZnVuY3Rpb24gY29uc3RydWN0RnJvbShkYXRlLCB2YWx1ZSkge1xuICBpZiAodHlwZW9mIGRhdGUgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIGRhdGUodmFsdWUpO1xuXG4gIGlmIChkYXRlICYmIHR5cGVvZiBkYXRlID09PSBcIm9iamVjdFwiICYmIGNvbnN0cnVjdEZyb21TeW1ib2wgaW4gZGF0ZSlcbiAgICByZXR1cm4gZGF0ZVtjb25zdHJ1Y3RGcm9tU3ltYm9sXSh2YWx1ZSk7XG5cbiAgaWYgKGRhdGUgaW5zdGFuY2VvZiBEYXRlKSByZXR1cm4gbmV3IGRhdGUuY29uc3RydWN0b3IodmFsdWUpO1xuXG4gIHJldHVybiBuZXcgRGF0ZSh2YWx1ZSk7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgY29uc3RydWN0RnJvbTtcbiIsImltcG9ydCB7IGNvbnN0cnVjdEZyb20gfSBmcm9tIFwiLi9jb25zdHJ1Y3RGcm9tLmpzXCI7XG5cbi8qKlxuICogQG5hbWUgY29uc3RydWN0Tm93XG4gKiBAY2F0ZWdvcnkgR2VuZXJpYyBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb25zdHJ1Y3RzIGEgbmV3IGN1cnJlbnQgZGF0ZSB1c2luZyB0aGUgcGFzc2VkIHZhbHVlIGNvbnN0cnVjdG9yLlxuICogQHB1cmUgZmFsc2VcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFRoZSBmdW5jdGlvbiBjb25zdHJ1Y3RzIGEgbmV3IGN1cnJlbnQgZGF0ZSB1c2luZyB0aGUgY29uc3RydWN0b3IgZnJvbVxuICogdGhlIHJlZmVyZW5jZSBkYXRlLiBJdCBoZWxwcyB0byBidWlsZCBnZW5lcmljIGZ1bmN0aW9ucyB0aGF0IGFjY2VwdCBkYXRlXG4gKiBleHRlbnNpb25zIGFuZCB1c2UgdGhlIGN1cnJlbnQgZGF0ZS5cbiAqXG4gKiBJdCBkZWZhdWx0cyB0byBgRGF0ZWAgaWYgdGhlIHBhc3NlZCByZWZlcmVuY2UgZGF0ZSBpcyBhIG51bWJlciBvciBhIHN0cmluZy5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSByZWZlcmVuY2UgZGF0ZSB0byB0YWtlIGNvbnN0cnVjdG9yIGZyb21cbiAqXG4gKiBAcmV0dXJucyBDdXJyZW50IGRhdGUgaW5pdGlhbGl6ZWQgdXNpbmcgdGhlIGdpdmVuIGRhdGUgY29uc3RydWN0b3JcbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgY29uc3RydWN0Tm93LCBpc1NhbWVEYXkgfSBmcm9tICdkYXRlLWZucydcbiAqXG4gKiBmdW5jdGlvbiBpc1RvZGF5PERhdGVUeXBlIGV4dGVuZHMgRGF0ZT4oXG4gKiAgIGRhdGU6IERhdGVBcmc8RGF0ZVR5cGU+LFxuICogKTogYm9vbGVhbiB7XG4gKiAgIC8vIElmIHdlIHdlcmUgdG8gdXNlIGBuZXcgRGF0ZSgpYCBkaXJlY3RseSwgdGhlIGZ1bmN0aW9uIHdvdWxkICBiZWhhdmVcbiAqICAgLy8gZGlmZmVyZW50bHkgaW4gZGlmZmVyZW50IHRpbWV6b25lcyBhbmQgcmV0dXJuIGZhbHNlIGZvciB0aGUgc2FtZSBkYXRlLlxuICogICByZXR1cm4gaXNTYW1lRGF5KGRhdGUsIGNvbnN0cnVjdE5vdyhkYXRlKSk7XG4gKiB9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb25zdHJ1Y3ROb3coZGF0ZSkge1xuICByZXR1cm4gY29uc3RydWN0RnJvbShkYXRlLCBEYXRlLm5vdygpKTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBjb25zdHJ1Y3ROb3c7XG4iLCJpbXBvcnQgeyB0b0RhdGUgfSBmcm9tIFwiLi90b0RhdGUuanNcIjtcblxuLyoqXG4gKiBAbmFtZSBpc0Z1dHVyZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gZGF0ZSBpbiB0aGUgZnV0dXJlP1xuICogQHB1cmUgZmFsc2VcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIElzIHRoZSBnaXZlbiBkYXRlIGluIHRoZSBmdXR1cmU/XG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgZGF0ZSB0byBjaGVja1xuICpcbiAqIEByZXR1cm5zIFRoZSBkYXRlIGlzIGluIHRoZSBmdXR1cmVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdG9kYXkgaXMgNiBPY3RvYmVyIDIwMTQsIGlzIDMxIERlY2VtYmVyIDIwMTQgaW4gdGhlIGZ1dHVyZT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzRnV0dXJlKG5ldyBEYXRlKDIwMTQsIDExLCAzMSkpXG4gKiAvLz0+IHRydWVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzRnV0dXJlKGRhdGUpIHtcbiAgcmV0dXJuICt0b0RhdGUoZGF0ZSkgPiBEYXRlLm5vdygpO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGlzRnV0dXJlO1xuIiwiaW1wb3J0IHsgbm9ybWFsaXplRGF0ZXMgfSBmcm9tIFwiLi9fbGliL25vcm1hbGl6ZURhdGVzLmpzXCI7XG5pbXBvcnQgeyBzdGFydE9mRGF5IH0gZnJvbSBcIi4vc3RhcnRPZkRheS5qc1wiO1xuXG4vKipcbiAqIFRoZSB7QGxpbmsgaXNTYW1lRGF5fSBmdW5jdGlvbiBvcHRpb25zLlxuICovXG5cbi8qKlxuICogQG5hbWUgaXNTYW1lRGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgZGF5IChhbmQgeWVhciBhbmQgbW9udGgpP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSBkYXkgKGFuZCB5ZWFyIGFuZCBtb250aCk/XG4gKlxuICogQHBhcmFtIGxhdGVyRGF0ZSAtIFRoZSBmaXJzdCBkYXRlIHRvIGNoZWNrXG4gKiBAcGFyYW0gZWFybGllckRhdGUgLSBUaGUgc2Vjb25kIGRhdGUgdG8gY2hlY2tcbiAqIEBwYXJhbSBvcHRpb25zIC0gQW4gb2JqZWN0IHdpdGggb3B0aW9uc1xuICpcbiAqIEByZXR1cm5zIFRoZSBkYXRlcyBhcmUgaW4gdGhlIHNhbWUgZGF5IChhbmQgeWVhciBhbmQgbW9udGgpXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSA0IFNlcHRlbWJlciAwNjowMDowMCBhbmQgNCBTZXB0ZW1iZXIgMTg6MDA6MDAgaW4gdGhlIHNhbWUgZGF5P1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDQsIDYsIDApLCBuZXcgRGF0ZSgyMDE0LCA4LCA0LCAxOCwgMCkpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDQgU2VwdGVtYmVyIGFuZCA0IE9jdG9iZXIgaW4gdGhlIHNhbWUgZGF5P1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDQpLCBuZXcgRGF0ZSgyMDE0LCA5LCA0KSlcbiAqIC8vPT4gZmFsc2VcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDQgU2VwdGVtYmVyLCAyMDE0IGFuZCA0IFNlcHRlbWJlciwgMjAxNSBpbiB0aGUgc2FtZSBkYXk/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVEYXkobmV3IERhdGUoMjAxNCwgOCwgNCksIG5ldyBEYXRlKDIwMTUsIDgsIDQpKVxuICogLy89PiBmYWxzZVxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNTYW1lRGF5KGxhdGVyRGF0ZSwgZWFybGllckRhdGUsIG9wdGlvbnMpIHtcbiAgY29uc3QgW2RhdGVMZWZ0XywgZGF0ZVJpZ2h0X10gPSBub3JtYWxpemVEYXRlcyhcbiAgICBvcHRpb25zPy5pbixcbiAgICBsYXRlckRhdGUsXG4gICAgZWFybGllckRhdGUsXG4gICk7XG4gIHJldHVybiArc3RhcnRPZkRheShkYXRlTGVmdF8pID09PSArc3RhcnRPZkRheShkYXRlUmlnaHRfKTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBpc1NhbWVEYXk7XG4iLCJpbXBvcnQgeyBjb25zdHJ1Y3RGcm9tIH0gZnJvbSBcIi4vY29uc3RydWN0RnJvbS5qc1wiO1xuaW1wb3J0IHsgY29uc3RydWN0Tm93IH0gZnJvbSBcIi4vY29uc3RydWN0Tm93LmpzXCI7XG5pbXBvcnQgeyBpc1NhbWVEYXkgfSBmcm9tIFwiLi9pc1NhbWVEYXkuanNcIjtcblxuLyoqXG4gKiBUaGUge0BsaW5rIGlzVG9kYXl9IGZ1bmN0aW9uIG9wdGlvbnMuXG4gKi9cblxuLyoqXG4gKiBAbmFtZSBpc1RvZGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiBkYXRlIHRvZGF5P1xuICogQHB1cmUgZmFsc2VcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIElzIHRoZSBnaXZlbiBkYXRlIHRvZGF5P1xuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIGRhdGUgdG8gY2hlY2tcbiAqIEBwYXJhbSBvcHRpb25zIC0gQW4gb2JqZWN0IHdpdGggb3B0aW9uc1xuICpcbiAqIEByZXR1cm5zIFRoZSBkYXRlIGlzIHRvZGF5XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRvZGF5IGlzIDYgT2N0b2JlciAyMDE0LCBpcyA2IE9jdG9iZXIgMTQ6MDA6MDAgdG9kYXk/XG4gKiBjb25zdCByZXN1bHQgPSBpc1RvZGF5KG5ldyBEYXRlKDIwMTQsIDksIDYsIDE0LCAwKSlcbiAqIC8vPT4gdHJ1ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNUb2RheShkYXRlLCBvcHRpb25zKSB7XG4gIHJldHVybiBpc1NhbWVEYXkoXG4gICAgY29uc3RydWN0RnJvbShvcHRpb25zPy5pbiB8fCBkYXRlLCBkYXRlKSxcbiAgICBjb25zdHJ1Y3ROb3cob3B0aW9ucz8uaW4gfHwgZGF0ZSksXG4gICk7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgaXNUb2RheTtcbiIsImltcG9ydCB7XG4gIG1pbGxpc2Vjb25kc0luSG91cixcbiAgbWlsbGlzZWNvbmRzSW5NaW51dGUsXG59IGZyb20gXCIuL2NvbnN0YW50cy5qc1wiO1xuaW1wb3J0IHsgY29uc3RydWN0RnJvbSB9IGZyb20gXCIuL2NvbnN0cnVjdEZyb20uanNcIjtcbmltcG9ydCB7IHRvRGF0ZSB9IGZyb20gXCIuL3RvRGF0ZS5qc1wiO1xuXG4vKipcbiAqIFRoZSB7QGxpbmsgcGFyc2VJU099IGZ1bmN0aW9uIG9wdGlvbnMuXG4gKi9cblxuLyoqXG4gKiBAbmFtZSBwYXJzZUlTT1xuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBQYXJzZSBJU08gc3RyaW5nXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBQYXJzZSB0aGUgZ2l2ZW4gc3RyaW5nIGluIElTTyA4NjAxIGZvcm1hdCBhbmQgcmV0dXJuIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogRnVuY3Rpb24gYWNjZXB0cyBjb21wbGV0ZSBJU08gODYwMSBmb3JtYXRzIGFzIHdlbGwgYXMgcGFydGlhbCBpbXBsZW1lbnRhdGlvbnMuXG4gKiBJU08gODYwMTogaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fODYwMVxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpc24ndCBhIHN0cmluZywgdGhlIGZ1bmN0aW9uIGNhbm5vdCBwYXJzZSB0aGUgc3RyaW5nIG9yXG4gKiB0aGUgdmFsdWVzIGFyZSBpbnZhbGlkLCBpdCByZXR1cm5zIEludmFsaWQgRGF0ZS5cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqIEB0eXBlUGFyYW0gUmVzdWx0RGF0ZSAtIFRoZSByZXN1bHQgYERhdGVgIHR5cGUsIGl0IGlzIHRoZSB0eXBlIHJldHVybmVkIGZyb20gdGhlIGNvbnRleHQgZnVuY3Rpb24gaWYgaXQgaXMgcGFzc2VkLCBvciBpbmZlcnJlZCBmcm9tIHRoZSBhcmd1bWVudHMuXG4gKlxuICogQHBhcmFtIGFyZ3VtZW50IC0gVGhlIHZhbHVlIHRvIGNvbnZlcnRcbiAqIEBwYXJhbSBvcHRpb25zIC0gQW4gb2JqZWN0IHdpdGggb3B0aW9uc1xuICpcbiAqIEByZXR1cm5zIFRoZSBwYXJzZWQgZGF0ZSBpbiB0aGUgbG9jYWwgdGltZSB6b25lXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgc3RyaW5nICcyMDE0LTAyLTExVDExOjMwOjMwJyB0byBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gcGFyc2VJU08oJzIwMTQtMDItMTFUMTE6MzA6MzAnKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCBzdHJpbmcgJyswMjAxNDEwMScgdG8gZGF0ZSxcbiAqIC8vIGlmIHRoZSBhZGRpdGlvbmFsIG51bWJlciBvZiBkaWdpdHMgaW4gdGhlIGV4dGVuZGVkIHllYXIgZm9ybWF0IGlzIDE6XG4gKiBjb25zdCByZXN1bHQgPSBwYXJzZUlTTygnKzAyMDE0MTAxJywgeyBhZGRpdGlvbmFsRGlnaXRzOiAxIH0pXG4gKiAvLz0+IEZyaSBBcHIgMTEgMjAxNCAwMDowMDowMFxuICovXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VJU08oYXJndW1lbnQsIG9wdGlvbnMpIHtcbiAgY29uc3QgaW52YWxpZERhdGUgPSAoKSA9PiBjb25zdHJ1Y3RGcm9tKG9wdGlvbnM/LmluLCBOYU4pO1xuXG4gIGNvbnN0IGFkZGl0aW9uYWxEaWdpdHMgPSBvcHRpb25zPy5hZGRpdGlvbmFsRGlnaXRzID8/IDI7XG4gIGNvbnN0IGRhdGVTdHJpbmdzID0gc3BsaXREYXRlU3RyaW5nKGFyZ3VtZW50KTtcblxuICBsZXQgZGF0ZTtcbiAgaWYgKGRhdGVTdHJpbmdzLmRhdGUpIHtcbiAgICBjb25zdCBwYXJzZVllYXJSZXN1bHQgPSBwYXJzZVllYXIoZGF0ZVN0cmluZ3MuZGF0ZSwgYWRkaXRpb25hbERpZ2l0cyk7XG4gICAgZGF0ZSA9IHBhcnNlRGF0ZShwYXJzZVllYXJSZXN1bHQucmVzdERhdGVTdHJpbmcsIHBhcnNlWWVhclJlc3VsdC55ZWFyKTtcbiAgfVxuXG4gIGlmICghZGF0ZSB8fCBpc05hTigrZGF0ZSkpIHJldHVybiBpbnZhbGlkRGF0ZSgpO1xuXG4gIGNvbnN0IHRpbWVzdGFtcCA9ICtkYXRlO1xuICBsZXQgdGltZSA9IDA7XG4gIGxldCBvZmZzZXQ7XG5cbiAgaWYgKGRhdGVTdHJpbmdzLnRpbWUpIHtcbiAgICB0aW1lID0gcGFyc2VUaW1lKGRhdGVTdHJpbmdzLnRpbWUpO1xuICAgIGlmIChpc05hTih0aW1lKSkgcmV0dXJuIGludmFsaWREYXRlKCk7XG4gIH1cblxuICBpZiAoZGF0ZVN0cmluZ3MudGltZXpvbmUpIHtcbiAgICBvZmZzZXQgPSBwYXJzZVRpbWV6b25lKGRhdGVTdHJpbmdzLnRpbWV6b25lKTtcbiAgICBpZiAoaXNOYU4ob2Zmc2V0KSkgcmV0dXJuIGludmFsaWREYXRlKCk7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgdG1wRGF0ZSA9IG5ldyBEYXRlKHRpbWVzdGFtcCArIHRpbWUpO1xuICAgIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZSgwLCBvcHRpb25zPy5pbik7XG4gICAgcmVzdWx0LnNldEZ1bGxZZWFyKFxuICAgICAgdG1wRGF0ZS5nZXRVVENGdWxsWWVhcigpLFxuICAgICAgdG1wRGF0ZS5nZXRVVENNb250aCgpLFxuICAgICAgdG1wRGF0ZS5nZXRVVENEYXRlKCksXG4gICAgKTtcbiAgICByZXN1bHQuc2V0SG91cnMoXG4gICAgICB0bXBEYXRlLmdldFVUQ0hvdXJzKCksXG4gICAgICB0bXBEYXRlLmdldFVUQ01pbnV0ZXMoKSxcbiAgICAgIHRtcERhdGUuZ2V0VVRDU2Vjb25kcygpLFxuICAgICAgdG1wRGF0ZS5nZXRVVENNaWxsaXNlY29uZHMoKSxcbiAgICApO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICByZXR1cm4gdG9EYXRlKHRpbWVzdGFtcCArIHRpbWUgKyBvZmZzZXQsIG9wdGlvbnM/LmluKTtcbn1cblxuY29uc3QgcGF0dGVybnMgPSB7XG4gIGRhdGVUaW1lRGVsaW1pdGVyOiAvW1QgXS8sXG4gIHRpbWVab25lRGVsaW1pdGVyOiAvW1ogXS9pLFxuICB0aW1lem9uZTogLyhbWistXS4qKSQvLFxufTtcblxuY29uc3QgZGF0ZVJlZ2V4ID1cbiAgL14tPyg/OihcXGR7M30pfChcXGR7Mn0pKD86LT8oXFxkezJ9KSk/fFcoXFxkezJ9KSg/Oi0/KFxcZHsxfSkpP3wpJC87XG5jb25zdCB0aW1lUmVnZXggPVxuICAvXihcXGR7Mn0oPzpbLixdXFxkKik/KSg/Ojo/KFxcZHsyfSg/OlsuLF1cXGQqKT8pKT8oPzo6PyhcXGR7Mn0oPzpbLixdXFxkKik/KSk/JC87XG5jb25zdCB0aW1lem9uZVJlZ2V4ID0gL14oWystXSkoXFxkezJ9KSg/Ojo/KFxcZHsyfSkpPyQvO1xuXG5mdW5jdGlvbiBzcGxpdERhdGVTdHJpbmcoZGF0ZVN0cmluZykge1xuICBjb25zdCBkYXRlU3RyaW5ncyA9IHt9O1xuICBjb25zdCBhcnJheSA9IGRhdGVTdHJpbmcuc3BsaXQocGF0dGVybnMuZGF0ZVRpbWVEZWxpbWl0ZXIpO1xuICBsZXQgdGltZVN0cmluZztcblxuICAvLyBUaGUgcmVnZXggbWF0Y2ggc2hvdWxkIG9ubHkgcmV0dXJuIGF0IG1heGltdW0gdHdvIGFycmF5IGVsZW1lbnRzLlxuICAvLyBbZGF0ZV0sIFt0aW1lXSwgb3IgW2RhdGUsIHRpbWVdLlxuICBpZiAoYXJyYXkubGVuZ3RoID4gMikge1xuICAgIHJldHVybiBkYXRlU3RyaW5ncztcbiAgfVxuXG4gIGlmICgvOi8udGVzdChhcnJheVswXSkpIHtcbiAgICB0aW1lU3RyaW5nID0gYXJyYXlbMF07XG4gIH0gZWxzZSB7XG4gICAgZGF0ZVN0cmluZ3MuZGF0ZSA9IGFycmF5WzBdO1xuICAgIHRpbWVTdHJpbmcgPSBhcnJheVsxXTtcbiAgICBpZiAocGF0dGVybnMudGltZVpvbmVEZWxpbWl0ZXIudGVzdChkYXRlU3RyaW5ncy5kYXRlKSkge1xuICAgICAgZGF0ZVN0cmluZ3MuZGF0ZSA9IGRhdGVTdHJpbmcuc3BsaXQocGF0dGVybnMudGltZVpvbmVEZWxpbWl0ZXIpWzBdO1xuICAgICAgdGltZVN0cmluZyA9IGRhdGVTdHJpbmcuc3Vic3RyKFxuICAgICAgICBkYXRlU3RyaW5ncy5kYXRlLmxlbmd0aCxcbiAgICAgICAgZGF0ZVN0cmluZy5sZW5ndGgsXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIGlmICh0aW1lU3RyaW5nKSB7XG4gICAgY29uc3QgdG9rZW4gPSBwYXR0ZXJucy50aW1lem9uZS5leGVjKHRpbWVTdHJpbmcpO1xuICAgIGlmICh0b2tlbikge1xuICAgICAgZGF0ZVN0cmluZ3MudGltZSA9IHRpbWVTdHJpbmcucmVwbGFjZSh0b2tlblsxXSwgXCJcIik7XG4gICAgICBkYXRlU3RyaW5ncy50aW1lem9uZSA9IHRva2VuWzFdO1xuICAgIH0gZWxzZSB7XG4gICAgICBkYXRlU3RyaW5ncy50aW1lID0gdGltZVN0cmluZztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZGF0ZVN0cmluZ3M7XG59XG5cbmZ1bmN0aW9uIHBhcnNlWWVhcihkYXRlU3RyaW5nLCBhZGRpdGlvbmFsRGlnaXRzKSB7XG4gIGNvbnN0IHJlZ2V4ID0gbmV3IFJlZ0V4cChcbiAgICBcIl4oPzooXFxcXGR7NH18WystXVxcXFxke1wiICtcbiAgICAgICg0ICsgYWRkaXRpb25hbERpZ2l0cykgK1xuICAgICAgXCJ9KXwoXFxcXGR7Mn18WystXVxcXFxke1wiICtcbiAgICAgICgyICsgYWRkaXRpb25hbERpZ2l0cykgK1xuICAgICAgXCJ9KSQpXCIsXG4gICk7XG5cbiAgY29uc3QgY2FwdHVyZXMgPSBkYXRlU3RyaW5nLm1hdGNoKHJlZ2V4KTtcbiAgLy8gSW52YWxpZCBJU08tZm9ybWF0dGVkIHllYXJcbiAgaWYgKCFjYXB0dXJlcykgcmV0dXJuIHsgeWVhcjogTmFOLCByZXN0RGF0ZVN0cmluZzogXCJcIiB9O1xuXG4gIGNvbnN0IHllYXIgPSBjYXB0dXJlc1sxXSA/IHBhcnNlSW50KGNhcHR1cmVzWzFdKSA6IG51bGw7XG4gIGNvbnN0IGNlbnR1cnkgPSBjYXB0dXJlc1syXSA/IHBhcnNlSW50KGNhcHR1cmVzWzJdKSA6IG51bGw7XG5cbiAgLy8gZWl0aGVyIHllYXIgb3IgY2VudHVyeSBpcyBudWxsLCBub3QgYm90aFxuICByZXR1cm4ge1xuICAgIHllYXI6IGNlbnR1cnkgPT09IG51bGwgPyB5ZWFyIDogY2VudHVyeSAqIDEwMCxcbiAgICByZXN0RGF0ZVN0cmluZzogZGF0ZVN0cmluZy5zbGljZSgoY2FwdHVyZXNbMV0gfHwgY2FwdHVyZXNbMl0pLmxlbmd0aCksXG4gIH07XG59XG5cbmZ1bmN0aW9uIHBhcnNlRGF0ZShkYXRlU3RyaW5nLCB5ZWFyKSB7XG4gIC8vIEludmFsaWQgSVNPLWZvcm1hdHRlZCB5ZWFyXG4gIGlmICh5ZWFyID09PSBudWxsKSByZXR1cm4gbmV3IERhdGUoTmFOKTtcblxuICBjb25zdCBjYXB0dXJlcyA9IGRhdGVTdHJpbmcubWF0Y2goZGF0ZVJlZ2V4KTtcbiAgLy8gSW52YWxpZCBJU08tZm9ybWF0dGVkIHN0cmluZ1xuICBpZiAoIWNhcHR1cmVzKSByZXR1cm4gbmV3IERhdGUoTmFOKTtcblxuICBjb25zdCBpc1dlZWtEYXRlID0gISFjYXB0dXJlc1s0XTtcbiAgY29uc3QgZGF5T2ZZZWFyID0gcGFyc2VEYXRlVW5pdChjYXB0dXJlc1sxXSk7XG4gIGNvbnN0IG1vbnRoID0gcGFyc2VEYXRlVW5pdChjYXB0dXJlc1syXSkgLSAxO1xuICBjb25zdCBkYXkgPSBwYXJzZURhdGVVbml0KGNhcHR1cmVzWzNdKTtcbiAgY29uc3Qgd2VlayA9IHBhcnNlRGF0ZVVuaXQoY2FwdHVyZXNbNF0pO1xuICBjb25zdCBkYXlPZldlZWsgPSBwYXJzZURhdGVVbml0KGNhcHR1cmVzWzVdKSAtIDE7XG5cbiAgaWYgKGlzV2Vla0RhdGUpIHtcbiAgICBpZiAoIXZhbGlkYXRlV2Vla0RhdGUoeWVhciwgd2VlaywgZGF5T2ZXZWVrKSkge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gICAgfVxuICAgIHJldHVybiBkYXlPZklTT1dlZWtZZWFyKHllYXIsIHdlZWssIGRheU9mV2Vlayk7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKDApO1xuICAgIGlmIChcbiAgICAgICF2YWxpZGF0ZURhdGUoeWVhciwgbW9udGgsIGRheSkgfHxcbiAgICAgICF2YWxpZGF0ZURheU9mWWVhckRhdGUoeWVhciwgZGF5T2ZZZWFyKVxuICAgICkge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gICAgfVxuICAgIGRhdGUuc2V0VVRDRnVsbFllYXIoeWVhciwgbW9udGgsIE1hdGgubWF4KGRheU9mWWVhciwgZGF5KSk7XG4gICAgcmV0dXJuIGRhdGU7XG4gIH1cbn1cblxuZnVuY3Rpb24gcGFyc2VEYXRlVW5pdCh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgPyBwYXJzZUludCh2YWx1ZSkgOiAxO1xufVxuXG5mdW5jdGlvbiBwYXJzZVRpbWUodGltZVN0cmluZykge1xuICBjb25zdCBjYXB0dXJlcyA9IHRpbWVTdHJpbmcubWF0Y2godGltZVJlZ2V4KTtcbiAgaWYgKCFjYXB0dXJlcykgcmV0dXJuIE5hTjsgLy8gSW52YWxpZCBJU08tZm9ybWF0dGVkIHRpbWVcblxuICBjb25zdCBob3VycyA9IHBhcnNlVGltZVVuaXQoY2FwdHVyZXNbMV0pO1xuICBjb25zdCBtaW51dGVzID0gcGFyc2VUaW1lVW5pdChjYXB0dXJlc1syXSk7XG4gIGNvbnN0IHNlY29uZHMgPSBwYXJzZVRpbWVVbml0KGNhcHR1cmVzWzNdKTtcblxuICBpZiAoIXZhbGlkYXRlVGltZShob3VycywgbWludXRlcywgc2Vjb25kcykpIHtcbiAgICByZXR1cm4gTmFOO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICBob3VycyAqIG1pbGxpc2Vjb25kc0luSG91ciArIG1pbnV0ZXMgKiBtaWxsaXNlY29uZHNJbk1pbnV0ZSArIHNlY29uZHMgKiAxMDAwXG4gICk7XG59XG5cbmZ1bmN0aW9uIHBhcnNlVGltZVVuaXQodmFsdWUpIHtcbiAgcmV0dXJuICh2YWx1ZSAmJiBwYXJzZUZsb2F0KHZhbHVlLnJlcGxhY2UoXCIsXCIsIFwiLlwiKSkpIHx8IDA7XG59XG5cbmZ1bmN0aW9uIHBhcnNlVGltZXpvbmUodGltZXpvbmVTdHJpbmcpIHtcbiAgaWYgKHRpbWV6b25lU3RyaW5nID09PSBcIlpcIikgcmV0dXJuIDA7XG5cbiAgY29uc3QgY2FwdHVyZXMgPSB0aW1lem9uZVN0cmluZy5tYXRjaCh0aW1lem9uZVJlZ2V4KTtcbiAgaWYgKCFjYXB0dXJlcykgcmV0dXJuIDA7XG5cbiAgY29uc3Qgc2lnbiA9IGNhcHR1cmVzWzFdID09PSBcIitcIiA/IC0xIDogMTtcbiAgY29uc3QgaG91cnMgPSBwYXJzZUludChjYXB0dXJlc1syXSk7XG4gIGNvbnN0IG1pbnV0ZXMgPSAoY2FwdHVyZXNbM10gJiYgcGFyc2VJbnQoY2FwdHVyZXNbM10pKSB8fCAwO1xuXG4gIGlmICghdmFsaWRhdGVUaW1lem9uZShob3VycywgbWludXRlcykpIHtcbiAgICByZXR1cm4gTmFOO1xuICB9XG5cbiAgcmV0dXJuIHNpZ24gKiAoaG91cnMgKiBtaWxsaXNlY29uZHNJbkhvdXIgKyBtaW51dGVzICogbWlsbGlzZWNvbmRzSW5NaW51dGUpO1xufVxuXG5mdW5jdGlvbiBkYXlPZklTT1dlZWtZZWFyKGlzb1dlZWtZZWFyLCB3ZWVrLCBkYXkpIHtcbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKDApO1xuICBkYXRlLnNldFVUQ0Z1bGxZZWFyKGlzb1dlZWtZZWFyLCAwLCA0KTtcbiAgY29uc3QgZm91cnRoT2ZKYW51YXJ5RGF5ID0gZGF0ZS5nZXRVVENEYXkoKSB8fCA3O1xuICBjb25zdCBkaWZmID0gKHdlZWsgLSAxKSAqIDcgKyBkYXkgKyAxIC0gZm91cnRoT2ZKYW51YXJ5RGF5O1xuICBkYXRlLnNldFVUQ0RhdGUoZGF0ZS5nZXRVVENEYXRlKCkgKyBkaWZmKTtcbiAgcmV0dXJuIGRhdGU7XG59XG5cbi8vIFZhbGlkYXRpb24gZnVuY3Rpb25zXG5cbi8vIEZlYnJ1YXJ5IGlzIG51bGwgdG8gaGFuZGxlIHRoZSBsZWFwIHllYXIgKHVzaW5nIHx8KVxuY29uc3QgZGF5c0luTW9udGhzID0gWzMxLCBudWxsLCAzMSwgMzAsIDMxLCAzMCwgMzEsIDMxLCAzMCwgMzEsIDMwLCAzMV07XG5cbmZ1bmN0aW9uIGlzTGVhcFllYXJJbmRleCh5ZWFyKSB7XG4gIHJldHVybiB5ZWFyICUgNDAwID09PSAwIHx8ICh5ZWFyICUgNCA9PT0gMCAmJiB5ZWFyICUgMTAwICE9PSAwKTtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVEYXRlKHllYXIsIG1vbnRoLCBkYXRlKSB7XG4gIHJldHVybiAoXG4gICAgbW9udGggPj0gMCAmJlxuICAgIG1vbnRoIDw9IDExICYmXG4gICAgZGF0ZSA+PSAxICYmXG4gICAgZGF0ZSA8PSAoZGF5c0luTW9udGhzW21vbnRoXSB8fCAoaXNMZWFwWWVhckluZGV4KHllYXIpID8gMjkgOiAyOCkpXG4gICk7XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlRGF5T2ZZZWFyRGF0ZSh5ZWFyLCBkYXlPZlllYXIpIHtcbiAgcmV0dXJuIGRheU9mWWVhciA+PSAxICYmIGRheU9mWWVhciA8PSAoaXNMZWFwWWVhckluZGV4KHllYXIpID8gMzY2IDogMzY1KTtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVXZWVrRGF0ZShfeWVhciwgd2VlaywgZGF5KSB7XG4gIHJldHVybiB3ZWVrID49IDEgJiYgd2VlayA8PSA1MyAmJiBkYXkgPj0gMCAmJiBkYXkgPD0gNjtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVUaW1lKGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzKSB7XG4gIGlmIChob3VycyA9PT0gMjQpIHtcbiAgICByZXR1cm4gbWludXRlcyA9PT0gMCAmJiBzZWNvbmRzID09PSAwO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICBzZWNvbmRzID49IDAgJiZcbiAgICBzZWNvbmRzIDwgNjAgJiZcbiAgICBtaW51dGVzID49IDAgJiZcbiAgICBtaW51dGVzIDwgNjAgJiZcbiAgICBob3VycyA+PSAwICYmXG4gICAgaG91cnMgPCAyNVxuICApO1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZVRpbWV6b25lKF9ob3VycywgbWludXRlcykge1xuICByZXR1cm4gbWludXRlcyA+PSAwICYmIG1pbnV0ZXMgPD0gNTk7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgcGFyc2VJU087XG4iLCJpbXBvcnQgeyB0b0RhdGUgfSBmcm9tIFwiLi90b0RhdGUuanNcIjtcblxuLyoqXG4gKiBUaGUge0BsaW5rIHN0YXJ0T2ZEYXl9IGZ1bmN0aW9uIG9wdGlvbnMuXG4gKi9cblxuLyoqXG4gKiBAbmFtZSBzdGFydE9mRGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgc3RhcnQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBzdGFydCBvZiBhIGRheSBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICogQHR5cGVQYXJhbSBSZXN1bHREYXRlIC0gVGhlIHJlc3VsdCBgRGF0ZWAgdHlwZSwgaXQgaXMgdGhlIHR5cGUgcmV0dXJuZWQgZnJvbSB0aGUgY29udGV4dCBmdW5jdGlvbiBpZiBpdCBpcyBwYXNzZWQsIG9yIGluZmVycmVkIGZyb20gdGhlIGFyZ3VtZW50cy5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcGFyYW0gb3B0aW9ucyAtIFRoZSBvcHRpb25zXG4gKlxuICogQHJldHVybnMgVGhlIHN0YXJ0IG9mIGEgZGF5XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhIGRheSBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZEYXkobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSlcbiAqIC8vPT4gVHVlIFNlcCAwMiAyMDE0IDAwOjAwOjAwXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdGFydE9mRGF5KGRhdGUsIG9wdGlvbnMpIHtcbiAgY29uc3QgX2RhdGUgPSB0b0RhdGUoZGF0ZSwgb3B0aW9ucz8uaW4pO1xuICBfZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIF9kYXRlO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IHN0YXJ0T2ZEYXk7XG4iLCJpbXBvcnQgeyBjb25zdHJ1Y3RGcm9tIH0gZnJvbSBcIi4vY29uc3RydWN0RnJvbS5qc1wiO1xuXG4vKipcbiAqIEBuYW1lIHRvRGF0ZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgaXRzIGNsb25lLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhIG51bWJlciwgaXQgaXMgdHJlYXRlZCBhcyBhIHRpbWVzdGFtcC5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgbm9uZSBvZiB0aGUgYWJvdmUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIEludmFsaWQgRGF0ZS5cbiAqXG4gKiBTdGFydGluZyBmcm9tIHYzLjcuMCwgaXQgY2xvbmVzIGEgZGF0ZSB1c2luZyBgW1N5bWJvbC5mb3IoXCJjb25zdHJ1Y3REYXRlRnJvbVwiKV1gXG4gKiBlbmFibGluZyB0byB0cmFuc2ZlciBleHRyYSBwcm9wZXJ0aWVzIGZyb20gdGhlIHJlZmVyZW5jZSBkYXRlIHRvIHRoZSBuZXcgZGF0ZS5cbiAqIEl0J3MgdXNlZnVsIGZvciBleHRlbnNpb25zIGxpa2UgW2BUWkRhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdHopXG4gKiB0aGF0IGFjY2VwdCBhIHRpbWUgem9uZSBhcyBhIGNvbnN0cnVjdG9yIGFyZ3VtZW50LlxuICpcbiAqICoqTm90ZSoqOiAqYWxsKiBEYXRlIGFyZ3VtZW50cyBwYXNzZWQgdG8gYW55ICpkYXRlLWZucyogZnVuY3Rpb24gaXMgcHJvY2Vzc2VkIGJ5IGB0b0RhdGVgLlxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICogQHR5cGVQYXJhbSBSZXN1bHREYXRlIC0gVGhlIHJlc3VsdCBgRGF0ZWAgdHlwZSwgaXQgaXMgdGhlIHR5cGUgcmV0dXJuZWQgZnJvbSB0aGUgY29udGV4dCBmdW5jdGlvbiBpZiBpdCBpcyBwYXNzZWQsIG9yIGluZmVycmVkIGZyb20gdGhlIGFyZ3VtZW50cy5cbiAqXG4gKiBAcGFyYW0gYXJndW1lbnQgLSBUaGUgdmFsdWUgdG8gY29udmVydFxuICpcbiAqIEByZXR1cm5zIFRoZSBwYXJzZWQgZGF0ZSBpbiB0aGUgbG9jYWwgdGltZSB6b25lXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENsb25lIHRoZSBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKG5ldyBEYXRlKDIwMTQsIDEsIDExLCAxMSwgMzAsIDMwKSlcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgdGhlIHRpbWVzdGFtcCB0byBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKDEzOTIwOTg0MzAwMDApXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICovXG5leHBvcnQgZnVuY3Rpb24gdG9EYXRlKGFyZ3VtZW50LCBjb250ZXh0KSB7XG4gIC8vIFtUT0RPXSBHZXQgcmlkIG9mIGB0b0RhdGVgIG9yIGBjb25zdHJ1Y3RGcm9tYD9cbiAgcmV0dXJuIGNvbnN0cnVjdEZyb20oY29udGV4dCB8fCBhcmd1bWVudCwgYXJndW1lbnQpO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IHRvRGF0ZTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdCAmJiBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnRhZ05hbWUudG9VcHBlckNhc2UoKSA9PT0gJ1NDUklQVCcpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICghc2NyaXB0VXJsIHx8ICEvXmh0dHAocz8pOi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlcy9tYWluLmNzcyc7XG5pbXBvcnQgJy4vc3R5bGVzL2JhY2tncm91bmQuY3NzJztcbmltcG9ydCAnLi9zdHlsZXMvb25ib2FyZGluZy5jc3MnO1xuaW1wb3J0ICcuL3N0eWxlcy9sYXlvdXQuY3NzJztcbmltcG9ydCAnLi9zdHlsZXMvcHJvamVjdHMuY3NzJztcbmltcG9ydCAnLi9zdHlsZXMvdG9kb3MuY3NzJztcbmltcG9ydCBib290SWNvbiBmcm9tICcuL2Fzc2V0cy9ib290LnN2Zyc7XG5pbXBvcnQgT25ib2FyZGluZyBmcm9tICcuL21vZHVsZXMvb25ib2FyZGluZyc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4vbW9kdWxlcy9sYXlvdXQnO1xuaW1wb3J0IFRvZG9NYW5hZ2VyIGZyb20gJy4vbW9kdWxlcy90b2Rvcyc7XG5pbXBvcnQgUHJvamVjdE1hbmFnZXIgZnJvbSAnLi9tb2R1bGVzL3Byb2plY3RzJztcblxuY29uc3QgYm9vdCA9IG5ldyBJbWFnZSgpO1xuYm9vdC5zcmMgPSBib290SWNvbjtcbmJvb3QuY2xhc3NMaXN0LmFkZCgnYmFja2dyb3VuZC1ib290Jyk7XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGJvb3QpO1xuXG5jb25zdCBvbmJvYXJkaW5nID0gbmV3IE9uYm9hcmRpbmcoKTtcbm9uYm9hcmRpbmcuaW5pdCgpLnRoZW4odXNlckRhdGEgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdVc2VyIHNldHVwIGNvbXBsZXRlOicsIHVzZXJEYXRhKTtcbiAgICBcbiAgICBjb25zdCB0b2RvTWFuYWdlciA9IG5ldyBUb2RvTWFuYWdlcigpO1xuICAgIGNvbnN0IHByb2plY3RNYW5hZ2VyID0gbmV3IFByb2plY3RNYW5hZ2VyKHRvZG9NYW5hZ2VyKTtcbiAgICBcbiAgICBjb25zdCBsYXlvdXQgPSBuZXcgTGF5b3V0KHVzZXJEYXRhLCB0b2RvTWFuYWdlciwgcHJvamVjdE1hbmFnZXIpO1xuICAgIGxheW91dC5pbml0KCk7XG4gICAgXG4gICAgY29uc3QgYXBwQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFwcC1jb250YWluZXInKTtcbiAgICBjb25zdCBleGlzdGluZ0Jvb3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmFja2dyb3VuZC1ib290Jyk7XG4gICAgaWYgKGV4aXN0aW5nQm9vdCkge1xuICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGV4aXN0aW5nQm9vdCk7XG4gICAgICAgIGFwcENvbnRhaW5lci5wcmVwZW5kKGJvb3QpO1xuICAgIH1cbn0pOyJdLCJuYW1lcyI6WyJQcm9qZWN0TWFuYWdlciIsIlRvZG9NYW5hZ2VyIiwiVG9kbyIsIkxheW91dCIsInVzZXJEYXRhIiwidG9kb01hbmFnZXIiLCJwcm9qZWN0TWFuYWdlciIsIl9jbGFzc0NhbGxDaGVjayIsImFjdGl2ZVByb2plY3RJZCIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwiY3JlYXRlSGVhZGVyIiwiaGVhZGVyIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiaW5uZXJIVE1MIiwiY29uY2F0IiwibmFtZSIsImNyZWF0ZUF2YXRhckVsZW1lbnQiLCJjcmVhdGVTaWRlYmFyIiwic2lkZWJhciIsImNyZWF0ZU1haW4iLCJtYWluIiwiYXZhdGFyIiwiaW5pdGlhbHMiLCJzcGxpdCIsIm1hcCIsIndvcmQiLCJqb2luIiwidG9VcHBlckNhc2UiLCJzbGljZSIsImNyZWF0ZVRvZG9Nb2RhbCIsIl90aGlzIiwidG9kb1RvRWRpdCIsImFyZ3VtZW50cyIsImxlbmd0aCIsInVuZGVmaW5lZCIsIm1vZGFsIiwicHJvamVjdHMiLCJnZXRBbGxQcm9qZWN0cyIsInByb2plY3RPcHRpb25zIiwicHJvamVjdCIsImlkIiwicHJvamVjdElkIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImR1ZURhdGUiLCJwcmlvcml0eSIsInNob3dUb2RvTW9kYWwiLCJfdGhpczIiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJmb3JtIiwicXVlcnlTZWxlY3RvciIsImNhbmNlbEJ1dHRvbiIsImRlbGV0ZUJ1dHRvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJnZXRFbGVtZW50QnlJZCIsInNlbGVjdGVkUHJvamVjdElkIiwidHJpbSIsImRlbGV0ZVRvZG8iLCJuZXdUb2RvIiwiYWRkVG9kbyIsInVwZGF0ZVRvZG8iLCJ0b2RvIiwicmVuZGVyQ3VycmVudFZpZXciLCJyZW1vdmVDaGlsZCIsInNob3dTaWduT3V0Q29uZmlybWF0aW9uIiwiY29uZmlybUJ0biIsImNhbmNlbEJ0biIsImxvY2FsU3RvcmFnZSIsImNsZWFyIiwid2luZG93IiwibG9jYXRpb24iLCJyZWxvYWQiLCJzaG93QWJvdXRNb2RhbCIsImNsb3NlQnRuIiwicmVuZGVyVG9kb3MiLCJfdGhpczMiLCJ2aWV3IiwidGFza3NDb250YWluZXIiLCJ0b2RvcyIsImdldFRvZGF5VG9kb3MiLCJnZXRVcGNvbWluZ1RvZG9zIiwiZ2V0Q29tcGxldGVkVG9kb3MiLCJwcm9qZWN0VG9kb3MiLCJnZXRBbGxUb2RvcyIsImZpbHRlciIsImdldEFjdGl2ZVRvZG9zIiwicmVuZGVyVG9kb0xpc3QiLCJ0b2Rvc0J5UHJvamVjdCIsIk1hcCIsImZvckVhY2giLCJnZXRQcm9qZWN0IiwiaGFzIiwic2V0IiwiZ2V0IiwicHVzaCIsImh0bWwiLCJBcnJheSIsImZyb20iLCJlbnRyaWVzIiwiX3JlZiIsIl9yZWYyIiwiX3NsaWNlZFRvQXJyYXkiLCJfdGhpczQiLCJjb21wbGV0ZWQiLCJ1cGRhdGVNYWluSGVhZGVyIiwiY29udGVudEhlYWRlciIsInRleHRDb250ZW50IiwiaW5pdCIsImFwcENvbnRhaW5lciIsInJvb3QiLCJzZXR1cEV2ZW50TGlzdGVuZXJzIiwic2V0dXBQcm9qZWN0RXZlbnRzIiwic2V0dXBUb2RvRXZlbnRzIiwiX3RoaXM1IiwibWVudVRvZ2dsZSIsImNsYXNzTGlzdCIsInRvZ2dsZSIsImlzTW9iaWxlIiwiaW5uZXJXaWR0aCIsImNvbnRhaW5zIiwidGFyZ2V0IiwicmVtb3ZlIiwidG91Y2hTdGFydFgiLCJ0b3VjaEVuZFgiLCJjaGFuZ2VkVG91Y2hlcyIsInNjcmVlblgiLCJoYW5kbGVTd2lwZSIsInN3aXBlRGlzdGFuY2UiLCJtaW5Td2lwZURpc3RhbmNlIiwidXNlclByb2ZpbGUiLCJ1c2VyRHJvcGRvd24iLCJzdHlsZSIsImRpc3BsYXkiLCJzaWduT3V0QnRuIiwiYWJvdXRCdG4iLCJ2aWV3TGlua3MiLCJxdWVyeVNlbGVjdG9yQWxsIiwibGluayIsImVsIiwiYWRkIiwiZGF0YXNldCIsIl90aGlzNiIsInByb2plY3RzTGlzdCIsImFkZFByb2plY3RCdG4iLCJhZGRQcm9qZWN0Rm9ybSIsInByb2plY3RJbnB1dCIsInNhdmVQcm9qZWN0QnRuIiwicmVuZGVyUHJvamVjdHMiLCJmb2N1cyIsInByb2plY3ROYW1lIiwibmV3UHJvamVjdCIsImNyZWF0ZVByb2plY3QiLCJwcm9qZWN0SXRlbSIsImNsb3Nlc3QiLCJkZWxldGVQcm9qZWN0IiwiYWxsVGFza3NMaW5rIiwiY2xpY2siLCJfdGhpczciLCJhZGRUYXNrQnRuIiwidG9kb0l0ZW0iLCJ0b2RvSWQiLCJ0b2dnbGVUb2RvQ29tcGxldGUiLCJnZXRUb2RvIiwiYWN0aXZlTGluayIsImN1cnJlbnRWaWV3IiwiX3RoaXM4IiwiZGlzYWJsZWQiLCJkZWZhdWx0IiwiT25ib2FyZGluZyIsImNyZWF0ZU1vZGFsIiwiY3JlYXRlRGVmYXVsdEF2YXRhciIsImdldEF2YXRhck9wdGlvbnMiLCJjb2xvcnMiLCJjb2xvciIsImluZGV4IiwiUHJvbWlzZSIsInJlc29sdmUiLCJleGlzdGluZ1VzZXIiLCJnZXRJdGVtIiwiSlNPTiIsInBhcnNlIiwibmFtZVN0ZXAiLCJhdmF0YXJTdGVwIiwidXNlcm5hbWVJbnB1dCIsIm5leHRCdG4iLCJjb21wbGV0ZUJ0biIsImZpbGVJbnB1dCIsInByZXZpZXdJbWFnZSIsImRlZmF1bHRBdmF0YXJIVE1MIiwicHJldmlld0NvbnRhaW5lciIsImZpbGUiLCJmaWxlcyIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJvbmxvYWQiLCJpbWFnZVVybCIsInJlc3VsdCIsImJhY2tncm91bmRJbWFnZSIsInJlYWRBc0RhdGFVUkwiLCJjb21wbGV0ZU9uYm9hcmRpbmciLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwiUHJvamVjdCIsIkRhdGUiLCJub3ciLCJ0b1N0cmluZyIsImRlZmF1bHRQcm9qZWN0cyIsInRhc2siLCJ0b0lTT1N0cmluZyIsImxvYWRQcm9qZWN0cyIsInNhdmVkUHJvamVjdHMiLCJkZWZhdWx0UHJvamVjdCIsImNyZWF0ZURlZmF1bHRQcm9qZWN0Iiwic2F2ZVByb2plY3RzIiwicmFuZG9tSW5kZXgiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJyZW1vdmVQcm9qZWN0VGFza3MiLCJmaW5kIiwiaXNUb2RheSIsImlzRnV0dXJlIiwicGFyc2VJU08iLCJjcmVhdGVkQXQiLCJsb2FkVG9kb3MiLCJzYXZlZFRvZG9zIiwidG9kb0RhdGEiLCJzYXZlVG9kb3MiLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJ1cGRhdGVkVG9kbyIsImZpbmRJbmRleCIsImFsbFRvZG9zIiwiX29iamVjdFNwcmVhZCIsInNvcnQiLCJhIiwiYiIsInNwbGljZSIsImJvb3RJY29uIiwiYm9vdCIsIkltYWdlIiwic3JjIiwib25ib2FyZGluZyIsInRoZW4iLCJjb25zb2xlIiwibG9nIiwibGF5b3V0IiwiZXhpc3RpbmdCb290IiwicHJlcGVuZCJdLCJzb3VyY2VSb290IjoiIn0=