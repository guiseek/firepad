(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _angular = require('angular');

var _angular2 = _interopRequireDefault(_angular);

var _module = require('./src/app/module.js');

var _module2 = _interopRequireDefault(_module);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_angular2.default.bootstrap(document, ['app']);

},{"./src/app/module.js":5,"angular":"angular"}],2:[function(require,module,exports){
module.exports={
  "apiKey": "AIzaSyDibWo4Tnx5DPRUJYeY-xgbRC0kKvlGY50",
  "authDomain": "fastpad-5064d.firebaseapp.com",
  "databaseURL": "https://fastpad-5064d.firebaseio.com",
  "storageBucket": "fastpad-5064d.appspot.com",
  "messagingSenderId": "134136061072"
}
},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = AppConfig;
function AppConfig($urlRouterProvider) {
  // $httpProvider.interceptors.push('HttpInterceptor')
  $urlRouterProvider.otherwise('/#');
}

},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AppController = function AppController(ConfigFirebase, firebase) {
  _classCallCheck(this, AppController);

  firebase.initializeApp(ConfigFirebase);
};

exports.default = AppController;


AppController.$inject = ['ConfigFirebase', 'firebase'];

},{}],5:[function(require,module,exports){
'use strict';

var _angularUiRouter = require('angular-ui-router');

var _angularUiRouter2 = _interopRequireDefault(_angularUiRouter);

var _firebase = require('firebase');

var _firebase2 = _interopRequireDefault(_firebase);

var _angularfire = require('angularfire');

var _angularfire2 = _interopRequireDefault(_angularfire);

var _angularSanitize = require('angular-sanitize');

var _angularSanitize2 = _interopRequireDefault(_angularSanitize);

var _configFirebase = require('./config.firebase.json');

var _configFirebase2 = _interopRequireDefault(_configFirebase);

var _config = require('./config.js');

var _config2 = _interopRequireDefault(_config);

var _controller = require('./controller.js');

var _controller2 = _interopRequireDefault(_controller);

var _module = require('./../editor/module.js');

var _module2 = _interopRequireDefault(_module);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

angular.module('app', [, _angularUiRouter2.default, 'ngSanitize', 'firebase.utils', 'firebase.config', 'firebase.auth', 'firebase.database', 'editor']).config(_config2.default).constant('ConfigFirebase', _configFirebase2.default).controller('AppController', _controller2.default).value('Firebase', _firebase2.default).value('firebase', _firebase2.default);

},{"./../editor/module.js":8,"./config.firebase.json":2,"./config.js":3,"./controller.js":4,"angular-sanitize":"angular-sanitize","angular-ui-router":"angular-ui-router","angularfire":"angularfire","firebase":"firebase"}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = EditorConfig;
function EditorConfig($stateProvider) {
  $stateProvider.state('editor', {
    url: '/*key',
    templateUrl: './src/editor/view/editor.html',
    controller: 'Editor',
    controllerAs: 'ctrl'
  });
}

},{}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Editor = function Editor($stateParams, firebase, $firebaseObject) {
  var _this = this;

  _classCallCheck(this, Editor);

  var route = $stateParams.key,
      key = 'messages/' + route,
      ref = firebase.database().ref(key);
  this.editor = $firebaseObject(ref);
  this.route = route == '' ? '/#' : '/#/' + route;
  var children = [];
  ref.once('value', function (response) {
    Object.keys(response.val()).map(function (k) {
      if (k != 'text') children.push(k);
    });
    _this.children = children;
  });
  this.save = function () {
    return _this.editor.$save();
  };
};

exports.default = Editor;


Editor.$inject = ['$stateParams', 'firebase', '$firebaseObject'];

},{}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _config = require('./config.js');

var _config2 = _interopRequireDefault(_config);

var _editor = require('./controller/editor.js');

var _editor2 = _interopRequireDefault(_editor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = angular.module('editor', []).config(_config2.default).controller('Editor', _editor2.default);

},{"./config.js":6,"./controller/editor.js":7}]},{},[1]);
