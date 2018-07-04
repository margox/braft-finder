(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("react")) : factory(root["react"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function(__WEBPACK_EXTERNAL_MODULE__1__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var UniqueIndex = exports.UniqueIndex = function UniqueIndex() {

  if (isNaN(window.__BRAFT_MM_UNIQUE_INDEX__)) {
    window.__BRAFT_MM_UNIQUE_INDEX__ = 1;
  } else {
    window.__BRAFT_MM_UNIQUE_INDEX__ += 1;
  }

  return window.__BRAFT_MM_UNIQUE_INDEX__;
};

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__1__;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  remove: '删除',
  cancel: '取消',
  confirm: '确认',
  insert: '插入所选项目',
  width: '宽度',
  height: '高度',
  image: '图片',
  video: '视频',
  audio: '音频',
  embed: '嵌入式媒体',
  caption: '媒体库',
  dragTip: '点击或拖动文件至此',
  dropTip: '放开鼠标以上传',
  selectAll: '选择全部',
  deselect: '取消选择',
  removeSelected: '删除选中项目',
  externalInputPlaceHolder: '资源名称|资源地址',
  externalInputTip: '使用“|”分隔资源名称和资源地址',
  addLocalFile: '添加本地资源',
  addExternalSource: '添加网络资源',
  unnamedItem: '未命名项目',
  confirmInsert: '插入选中项目'
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  remove: '删除',
  cancel: '取消',
  confirm: '确认',
  insert: '插入所选项目',
  width: '宽度',
  height: '高度',
  image: '图片',
  video: '视频',
  audio: '音频',
  embed: '嵌入式媒体',
  caption: '媒体库',
  dragTip: '点击或拖动文件至此',
  dropTip: '放开鼠标以上传',
  selectAll: '选择全部',
  deselect: '取消选择',
  removeSelected: '删除选中项目',
  externalInputPlaceHolder: '资源名称|资源地址',
  externalInputTip: '使用“|”分隔资源名称和资源地址',
  addLocalFile: '添加本地资源',
  addExternalSource: '添加网络资源',
  unnamedItem: '未命名项目',
  confirmInsert: '插入选中项目'
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  remove: 'Remove',
  cancel: 'Cancel',
  confirm: 'Confirm',
  insert: 'Insert Selected Items',
  width: 'Width',
  height: 'Height',
  image: 'Image',
  video: 'Video',
  audio: 'Audio',
  embed: 'Embed',
  caption: 'Media Library',
  dragTip: 'Click Or Drag Files Here',
  dropTip: 'Drop To Upload',
  selectAll: 'Select All',
  deselect: 'Deselect',
  removeSelected: 'Remove Selected Items',
  externalInputPlaceHolder: 'Source Name|Source URL',
  externalInputTip: 'Split source name and source URL with "|", confirm by hit Enter.',
  addLocalFile: 'Add from local',
  addExternalSource: 'Add from Internet',
  unnamedItem: 'Unnamed Item',
  confirmInsert: 'Insert selected items'
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _en = __webpack_require__(4);

var _en2 = _interopRequireDefault(_en);

var _zh = __webpack_require__(3);

var _zh2 = _interopRequireDefault(_zh);

var _zhHant = __webpack_require__(2);

var _zhHant2 = _interopRequireDefault(_zhHant);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  "en": _en2.default,
  "zh": _zh2.default,
  "zh-hant": _zhHant2.default
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(12);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _base = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var defaultAccepts = {
  'image': 'image/png,image/jpeg,image/gif,image/webp,image/apng,image/svg',
  'video': 'video/mp4',
  'audio': 'audio/mp3'
};

var BraftFinderView = function (_React$Component) {
  _inherits(BraftFinderView, _React$Component);

  function BraftFinderView(props) {
    _classCallCheck(this, BraftFinderView);

    var _this = _possibleConstructorReturn(this, (BraftFinderView.__proto__ || Object.getPrototypeOf(BraftFinderView)).call(this, props));

    _this.toggleSelectItem = function (event) {

      var itemId = event.currentTarget.dataset.id;
      var item = _this.controller.getMediaItem(itemId);

      if (!item) {
        return false;
      }

      if (item.selected) {

        if (!_this.props.onBeforeDeselect || _this.props.onBeforeDeselect([item], _this.controller.getItems()) !== false) {
          _this.controller.deselectMediaItem(itemId);
          _this.props.onDeselect && _this.props.onDeselect([item], _this.controller.getItems());
        }
      } else {

        if (!_this.props.onBeforeSelect || _this.props.onBeforeSelect([item], _this.controller.getItems()) !== false) {
          _this.controller.selectMediaItem(itemId);
          _this.props.onSelect && _this.props.onSelect([item], _this.controller.getItems());
        }
      }
    };

    _this.removeItem = function (event) {

      var itemId = event.currentTarget.dataset.id;
      var item = _this.controller.getMediaItem(itemId);

      if (!item) {
        return false;
      }

      if (!_this.props.onBeforeRemove || _this.props.onBeforeRemove([item], _this.controller.getItems()) !== false) {
        _this.controller.removeMediaItem(itemId);
        _this.props.onRemove && _this.props.onRemove([item], _this.controller.getItems());
      }

      event.stopPropagation();
    };

    _this.removeSelectedItems = function () {

      var selectedItems = _this.controller.getSelectedItems();

      if (!_this.props.onBeforeRemove || _this.props.onBeforeRemove(selectedItems, _this.controller.getItems()) !== false) {
        _this.controller.removeSelectedItems();
        _this.props.onRemove && _this.props.onRemove(selectedItems, _this.controller.getItems());
      }
    };

    _this.handleDragLeave = function (event) {
      _this.dragCounter--;
      _this.dragCounter === 0 && _this.setState({
        draging: false
      });
    };

    _this.handleDragDrop = function (event) {
      _this.dragCounter = 0;
      _this.setState({ draging: false });
    };

    _this.handleDragEnter = function (event) {
      e.preventDefault();
      _this.dragCounter++;
      _this.setState({ draging: true });
    };

    _this.reslovePickedFiles = function (event) {

      event.persist();

      var files = event.target.files;

      if (_this.props.onFileSelect) {
        var result = _this.props.onFileSelect(files);
        if (result === false) {
          return false;
        } else if (result instanceof FileList || result instanceof Array) {
          files = result;
        }
      }

      _this.controller.resolveFiles({
        files: files,
        onItemReady: function onItemReady(_ref) {
          var id = _ref.id;
          return _this.controller.selectMediaItem(id);
        },
        onAllReady: function onAllReady() {
          return event.target.value = null;
        }
      }, 0, _this.props.accepts);
    };

    _this.inputExternal = function (event) {
      _this.setState({
        external: _extends({}, _this.state.external, {
          url: event.target.value
        })
      });
    };

    _this.switchExternalType = function (event) {
      _this.setState({
        external: _extends({}, _this.state.external, { type: event.target.dataset.type })
      });
    };

    _this.confirmAddExternal = function (event) {

      if (event.target.nodeName.toLowerCase() === 'button' || event.keyCode === 13) {
        var _this$state$external = _this.state.external,
            url = _this$state$external.url,
            type = _this$state$external.type;

        url = url.split('|');
        var name = url.length > 1 ? url[0] : _this.props.language.unnamedItem;
        url = url.length > 1 ? url[1] : url[0];
        var thumbnail = type === 'IMAGE' ? url : null;

        _this.controller.addItems([{
          thumbnail: thumbnail, url: url, name: name, type: type,
          id: new Date().getTime() + '_' + (0, _base.UniqueIndex)(),
          uploading: false,
          uploadProgress: 1,
          selected: true
        }]);

        _this.setState({
          showExternalForm: false,
          external: {
            url: '',
            type: 'IMAGE'
          }
        });
      }
    };

    _this.toggleExternalForm = function () {
      _this.setState({
        showExternalForm: !_this.state.showExternalForm
      });
    };

    _this.cancelInsert = function () {
      _this.props.onCancel && _this.props.onCancel();
    };

    _this.confirmInsert = function () {

      var selectedItems = _this.controller.getSelectedItems();

      if (_this.props.onBeforeInsert) {

        var filteredItems = _this.props.onBeforeInsert(selectedItems);

        if (filteredItems && filteredItems instanceof Array) {
          _this.props.onInsert && _this.props.onInsert(filteredItems);
        } else if (filteredItems !== false) {
          _this.props.onInsert && _this.props.onInsert(selectedItems);
        }
      } else {
        _this.props.onInsert && _this.props.onInsert(selectedItems);
      }
    };

    _this.state = {
      draging: false,
      error: false,
      confirmable: false,
      external: {
        url: '',
        type: 'IMAGE'
      },
      showExternalForm: false,
      allowExternal: false,
      items: []
    };

    _this.dragCounter = 0;
    _this.controller = _this.props.controller;

    _this.changeListenerId = _this.controller.onChange(function (items) {
      _this.setState({ items: items, confirmable: items.filter(function (_ref2) {
          var selected = _ref2.selected;
          return selected;
        }).length });
      _this.props.onChange && _this.props.onChange(items);
    });

    return _this;
  }

  _createClass(BraftFinderView, [{
    key: 'mapPropsToState',
    value: function mapPropsToState(props) {
      var accepts = props.accepts,
          externals = props.externals;


      var fileAccept = !accepts ? [defaultAccepts.image, defaultAccepts.video, defaultAccepts.audio].join(',') : [accepts.image ? accepts.image.accept || defaultAccepts.image : '', accepts.video ? accepts.image.accept || defaultAccepts.video : '', accepts.audio ? accepts.image.accept || defaultAccepts.audio : ''].join(',');

      var external = {
        url: '',
        type: externals.image ? 'IMAGE' : externals.audio ? 'AUDIO' : externals.video ? 'VIDEO' : externals.embed ? 'EMBED' : ''
      };

      return {
        fileAccept: fileAccept,
        external: external,
        allowExternal: externals && (externals.image || externals.audio || externals.video || externals.embed)
      };
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {

      this.setState(this.mapPropsToState(this.props));
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.setState(this.mapPropsToState(nextProps));
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.controller.offChange(this.changeListenerId);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          language = _props.language,
          externals = _props.externals,
          accepts = _props.accepts;
      var _state = this.state,
          items = _state.items,
          draging = _state.draging,
          confirmable = _state.confirmable,
          external = _state.external,
          showExternalForm = _state.showExternalForm,
          allowExternal = _state.allowExternal;


      return _react2.default.createElement(
        'div',
        { className: 'braft-finder' },
        _react2.default.createElement(
          'div',
          {
            onDragEnter: this.handleDragEnter,
            onDragLeave: this.handleDragLeave,
            onDrop: this.handleDragDrop,
            className: 'bf-uploader'
          },
          _react2.default.createElement(
            'div',
            { className: "bf-drag-uploader " + (draging || !items.length ? 'active ' : ' ') + (draging ? 'draging' : '') },
            _react2.default.createElement(
              'span',
              { className: 'bf-drag-tip' },
              _react2.default.createElement('input', { accept: this.fileAccept, onChange: this.reslovePickedFiles, multiple: true, type: 'file' }),
              draging ? language.dropTip : language.dragTip
            )
          ),
          items.length ? _react2.default.createElement(
            'div',
            { className: 'bf-list-wrap' },
            _react2.default.createElement(
              'div',
              { className: 'bf-list-tools' },
              _react2.default.createElement(
                'span',
                { onClick: this.controller.selectAllItems, className: 'bf-select-all' },
                _react2.default.createElement('i', { className: 'braft-icon-done' }),
                ' ',
                language.selectAll
              ),
              _react2.default.createElement(
                'span',
                { onClick: this.controller.deselectAllItems, disabled: !confirmable, className: 'bf-deselect-all' },
                _react2.default.createElement('i', { className: 'braft-icon-close' }),
                ' ',
                language.deselect
              ),
              _react2.default.createElement(
                'span',
                { onClick: this.removeSelectedItems, disabled: !confirmable, className: 'bf-remove-selected' },
                _react2.default.createElement('i', { className: 'braft-icon-bin' }),
                ' ',
                language.removeSelected
              )
            ),
            this.buildMediaList()
          ) : null,
          showExternalForm && allowExternal ? _react2.default.createElement(
            'div',
            { className: 'bf-add-external' },
            _react2.default.createElement(
              'div',
              { className: 'bf-external-form' },
              _react2.default.createElement(
                'div',
                { className: 'bf-external-input' },
                _react2.default.createElement(
                  'div',
                  null,
                  _react2.default.createElement('input', { onKeyDown: this.confirmAddExternal, value: external.url, onChange: this.inputExternal, placeholder: language.externalInputPlaceHolder })
                ),
                _react2.default.createElement(
                  'button',
                  { type: 'button', onClick: this.confirmAddExternal, disabled: !external.url.trim().length },
                  language.confirm
                )
              ),
              _react2.default.createElement(
                'div',
                { 'data-type': external.type, className: 'bf-switch-external-type' },
                externals.image ? _react2.default.createElement(
                  'button',
                  { type: 'button', onClick: this.switchExternalType, 'data-type': 'IMAGE' },
                  language.image
                ) : null,
                externals.audio ? _react2.default.createElement(
                  'button',
                  { type: 'button', onClick: this.switchExternalType, 'data-type': 'AUDIO' },
                  language.audio
                ) : null,
                externals.video ? _react2.default.createElement(
                  'button',
                  { type: 'button', onClick: this.switchExternalType, 'data-type': 'VIDEO' },
                  language.video
                ) : null,
                externals.embed ? _react2.default.createElement(
                  'button',
                  { type: 'button', onClick: this.switchExternalType, 'data-type': 'EMBED' },
                  language.embed
                ) : null
              ),
              _react2.default.createElement(
                'span',
                { className: 'bf-external-tip' },
                language.externalInputTip
              )
            )
          ) : null
        ),
        _react2.default.createElement(
          'footer',
          { className: 'bf-manager-footer' },
          _react2.default.createElement(
            'div',
            { className: 'pull-left' },
            allowExternal ? _react2.default.createElement(
              'span',
              {
                onClick: this.toggleExternalForm,
                className: 'bf-toggle-external-form'
              },
              showExternalForm ? _react2.default.createElement(
                'span',
                { className: 'bf-bottom-text' },
                _react2.default.createElement('i', { className: 'braft-icon-add' }),
                ' ',
                language.addLocalFile
              ) : _react2.default.createElement(
                'span',
                { className: 'bf-bottom-text' },
                _react2.default.createElement('i', { className: 'braft-icon-add' }),
                ' ',
                language.addExternalSource
              )
            ) : null
          ),
          _react2.default.createElement(
            'div',
            { className: 'pull-right' },
            _react2.default.createElement(
              'button',
              { onClick: this.confirmInsert, className: 'button button-insert', disabled: !confirmable },
              language.insert
            ),
            _react2.default.createElement(
              'button',
              { onClick: this.cancelInsert, className: 'button button-cancel' },
              language.cancel
            )
          )
        )
      );
    }
  }, {
    key: 'buildMediaList',
    value: function buildMediaList() {
      var _this2 = this;

      return _react2.default.createElement(
        'ul',
        { className: 'bf-list' },
        _react2.default.createElement(
          'li',
          { className: 'bf-add-item' },
          _react2.default.createElement('i', { className: 'braft-icon-add' }),
          _react2.default.createElement('input', { accept: this.fileAccept, onChange: this.reslovePickedFiles, multiple: true, type: 'file' })
        ),
        this.state.items.map(function (item, index) {

          var previewerComponents = null;
          var progressMarker = item.uploading && !_this2.props.hideProgress ? _react2.default.createElement(
            'div',
            { className: 'bf-item-uploading' },
            _react2.default.createElement('div', { className: 'bf-item-uploading-bar', style: { width: item.uploadProgress / 1 + '%' } })
          ) : '';

          switch (item.type) {
            case 'IMAGE':
              previewerComponents = _react2.default.createElement(
                'div',
                { className: 'bf-image' },
                progressMarker,
                _react2.default.createElement('img', { src: item.thumbnail || item.url })
              );
              break;
            case 'VIDEO':
              previewerComponents = _react2.default.createElement(
                'div',
                { className: 'bf-icon bf-video', title: item.url },
                progressMarker,
                _react2.default.createElement('i', { className: 'braft-icon-film' }),
                _react2.default.createElement(
                  'span',
                  null,
                  item.name || item.url
                )
              );
              break;
            case 'AUDIO':
              previewerComponents = _react2.default.createElement(
                'div',
                { className: 'bf-icon bf-audio', title: item.url },
                progressMarker,
                _react2.default.createElement('i', { className: 'braft-icon-music' }),
                _react2.default.createElement(
                  'span',
                  null,
                  item.name || item.url
                )
              );
              break;
            case 'EMBED':
              previewerComponents = _react2.default.createElement(
                'div',
                { className: 'bf-icon bf-embed', title: item.url },
                progressMarker,
                _react2.default.createElement('i', { className: 'braft-icon-code' }),
                _react2.default.createElement(
                  'span',
                  null,
                  item.name || _this2.props.language.embed
                )
              );
              break;
            default:
              previewerComponents = _react2.default.createElement(
                'a',
                { className: 'bf-icon bf-file', title: item.url, href: item.url },
                progressMarker,
                _react2.default.createElement('i', { className: 'braft-icon-file-text' }),
                _react2.default.createElement(
                  'span',
                  null,
                  item.name || item.url
                )
              );
              break;
          }

          var className = ['bf-item'];
          item.selected && className.push('active');
          item.uploading && className.push('uploading');
          item.error && className.push('error');

          return _react2.default.createElement(
            'li',
            {
              key: index,
              title: item.name,
              'data-id': item.id,
              className: className.join(' '),
              onClick: _this2.toggleSelectItem
            },
            previewerComponents,
            _react2.default.createElement('span', { 'data-id': item.id, onClick: _this2.removeItem, className: 'bf-item-remove braft-icon-close' }),
            _react2.default.createElement(
              'span',
              { className: 'bf-item-title' },
              item.name
            )
          );
        })
      );
    }
  }]);

  return BraftFinderView;
}(_react2.default.Component);

BraftFinderView.defaultProps = {
  accepts: {
    image: true,
    video: true,
    audio: true,
    embed: true
  },
  externals: {
    image: true,
    video: true,
    audio: true,
    embed: true
  }
};
exports.default = BraftFinderView;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _base = __webpack_require__(0);

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var defaultValidator = function defaultValidator() {
  return true;
};

var BraftFinderController = function BraftFinderController() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  _classCallCheck(this, BraftFinderController);

  _initialiseProps.call(this);

  this.items = props.items || [];
  this.uploadFn = props.uploader;
  this.validateFn = props.validator || defaultValidator;

  this.changeListeners = [];
}

// resolvePastedFiles ({ clipboardData }, callback) {

//   if (clipboardData && clipboardData.items && clipboardData.items[0].type.indexOf('image') > -1) {
//     this.uploadImage(clipboardData.items[0].getAsFile(), callback)
//   }

// }

;

var _initialiseProps = function _initialiseProps() {
  var _this = this;

  this.setProps = function () {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};


    _this.items = props.items || _this.items || [];
    _this.uploadFn = props.uploader;
    _this.validateFn = props.validator || defaultValidator;
  };

  this.getMediaItem = function (id) {
    return _this.items.find(function (item) {
      return item.id === id;
    });
  };

  this.getSelectedItems = function () {
    return _this.items.filter(function (item) {
      return item.selected;
    });
  };

  this.getItems = function () {
    return _this.items;
  };

  this.setItems = function (items) {
    _this.items = items.map(function (item) {
      return _extends({}, item, { id: item.id.toString() });
    }) || [];
    _this.applyChange();
    _this.uploadItems();
  };

  this.addMediaItem = function (item) {
    _this.addItems([item]);
  };

  this.addItems = function (items) {
    _this.items = [].concat(_toConsumableArray(_this.items), _toConsumableArray(items.map(function (item) {
      return _extends({}, item, { id: item.id.toString() });
    })));
    _this.applyChange();
    _this.uploadItems();
  };

  this.selectMediaItem = function (id) {
    var item = _this.getMediaItem(id);
    if (item && (item.uploading || item.error)) {
      return false;
    }
    _this.setMediaItemState(id, {
      selected: true
    });
  };

  this.selectAllItems = function () {
    _this.items = _this.items.filter(function (item) {
      return !item.error && !item.uploading;
    }).map(function (item) {
      return _extends({}, item, { selected: true });
    });
    _this.applyChange();
  };

  this.deselectMediaItem = function (id) {
    _this.setMediaItemState(id, {
      selected: false
    });
  };

  this.deselectAllItems = function () {
    _this.items = _this.items.map(function (item) {
      return _extends({}, item, { selected: false });
    });
    _this.applyChange();
  };

  this.removeMediaItem = function (id) {
    _this.items = _this.items.filter(function (item) {
      return item.id !== id;
    });
    _this.applyChange();
  };

  this.removeItems = function () {
    var ids = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    _this.items = _this.items.filter(function (item) {
      return !ids.includes(item.id);
    });
    _this.applyChange();
  };

  this.removeSelectedItems = function () {
    _this.items = _this.items.filter(function (item) {
      return !item.selected;
    });
    _this.applyChange();
  };

  this.removeErrorItems = function () {
    _this.items = _this.items.filter(function (item) {
      return !item.error;
    });
    _this.applyChange();
  };

  this.removeAllItems = function () {
    _this.items = [];
    _this.applyChange();
  };

  this.setMediaItemState = function (id, state) {
    _this.items = _this.items.map(function (item) {
      return item.id === id ? _extends({}, item, state) : item;
    });
    _this.applyChange();
  };

  this.reuploadErrorItems = function () {
    _this.uploadItems(true);
  };

  this.uploadItems = function () {
    var ignoreError = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;


    _this.items.forEach(function (item, index) {

      if (item.uploading || item.url) {
        return false;
      }

      if (!ignoreError && item.error) {
        return false;
      }

      if (item.type === 'IMAGE') {
        _this.createThumbnail(item);
        _this.uploadFn = _this.uploadFn || _this.createInlineImage;
      } else if (!_this.uploadFn) {
        _this.setMediaItemState(item.id, { error: 1 });
        return false;
      }

      _this.setMediaItemState(item.id, {
        uploading: true,
        uploadProgress: 0,
        error: 0
      });

      _this.uploadFn({
        id: item.id,
        file: item.file,
        success: function success(res) {
          _this.handleUploadSuccess(item.id, res);
        },
        progress: function progress(_progress) {
          _this.setMediaItemState(item.id, {
            uploading: true,
            uploadProgress: _progress
          });
        },
        error: function error(_error) {
          _this.setMediaItemState(item.id, {
            uploading: false,
            error: 2
          });
        }
      });
    });
  };

  this.createThumbnail = function (_ref) {
    var id = _ref.id,
        file = _ref.file;


    _this.compressImage({
      url: URL.createObjectURL(file),
      width: 226,
      height: 226,
      success: function success(result) {
        _this.setMediaItemState(id, { thumbnail: result.url });
      }
    });
  };

  this.createInlineImage = function (param) {

    _this.compressImage({
      url: URL.createObjectURL(param.file),
      width: 1280,
      height: 800,
      success: function success(result) {
        param.success({ url: result.url });
      },
      error: function error(_error2) {
        param.error(_error2);
      }
    });
  };

  this.handleUploadSuccess = function (id, data) {

    _this.setMediaItemState(id, _extends({}, data, {
      file: null,
      uploadProgress: 1,
      uploading: false,
      selected: false
    }));

    var item = _this.getMediaItem(data.id || id);
    item.onReady && item.onReady(item);
  };

  this.compressImage = function (param) {

    var image = new Image();
    var compressCanvas = document.createElement('canvas');

    image.src = param.url;
    image.onload = function () {

      var scale = 1;

      if (this.width > param.width || this.height > param.height) {
        scale = this.width > this.height ? param.width / this.width : param.height / this.height;
      } else {
        param.success({
          url: param.url,
          width: this.width,
          height: this.height
        });
        return false;
      }

      compressCanvas.width = this.width * scale;
      compressCanvas.height = this.height * scale;

      var ctx = compressCanvas.getContext('2d');
      ctx.drawImage(this, 0, 0, compressCanvas.width, compressCanvas.height);

      param.success({
        url: compressCanvas.toDataURL('image/png', 1),
        width: compressCanvas.width,
        height: compressCanvas.height
      });
    };

    image.onerror = function (error) {
      param.error && param.error(error);
    };
  };

  this.applyChange = function () {
    _this.changeListeners.forEach(function (_ref2) {
      var callback = _ref2.callback;
      return callback(_this.items);
    });
  };

  this.uploadImage = function (file, callback) {

    var fileId = new Date().getTime() + '_' + (0, _base.UniqueIndex)();

    _this.addMediaItem({
      type: 'IMAGE',
      id: fileId,
      file: file,
      name: fileId,
      size: file.size,
      uploadProgress: 0,
      uploading: false,
      selected: false,
      error: 0,
      onReady: callback
    });
  };

  this.uploadImageRecursively = function (files, callback) {
    var index = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;


    if (files[index] && files[index].type.indexOf('image') > -1) {
      _this.uploadImage(files[index], function (image) {
        callback && callback(image);
        index < files.length - 1 && _this.uploadImageRecursively(files, callback, index + 1);
      });
    } else {
      index < files.length - 1 && _this.uploadImageRecursively(files, callback, index + 1);
    }
  };

  this.resolveFiles = function (param, index, accepts) {

    if (index < param.files.length) {

      if (_this.validateFn(param.files[index])) {

        var data = {
          id: new Date().getTime() + '_' + (0, _base.UniqueIndex)(),
          file: param.files[index],
          name: param.files[index].name,
          size: param.files[index].size,
          uploadProgress: 0,
          uploading: false,
          selected: false,
          error: 0,
          onReady: function onReady(item) {
            param.onItemReady && param.onItemReady(item);
          }
        };

        if (param.files[index].type.indexOf('image/') === 0 && accepts.image) {
          data.type = 'IMAGE';
          _this.addMediaItem(data);
        } else if (param.files[index].type.indexOf('video/') === 0 && accepts.video) {
          data.type = 'VIDEO';
          _this.addMediaItem(data);
        } else if (param.files[index].type.indexOf('audio/') === 0 && accepts.audio) {
          data.type = 'AUDIO';
          _this.addMediaItem(data);
        }
      }

      setTimeout(function () {
        _this.resolveFiles(param, index + 1, accepts);
      }, 60);
    } else {
      param.onAllReady && param.onAllReady();
    }
  };

  this.onChange = function (callback) {

    var listenerId = (0, _base.UniqueIndex)();

    _this.changeListeners.push({
      id: listenerId,
      callback: callback
    });

    return listenerId;
  };

  this.offChange = function (listenerId) {
    _this.changeListeners = _this.changeListeners.filter(function (_ref3) {
      var id = _ref3.id;
      return id !== listenerId;
    });
  };
};

exports.default = BraftFinderController;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _controller = __webpack_require__(7);

var _controller2 = _interopRequireDefault(_controller);

var _view = __webpack_require__(6);

var _view2 = _interopRequireDefault(_view);

var _languages = __webpack_require__(5);

var _languages2 = _interopRequireDefault(_languages);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BraftFinder = function (_FinderController) {
  _inherits(BraftFinder, _FinderController);

  function BraftFinder(props) {
    _classCallCheck(this, BraftFinder);

    var _this = _possibleConstructorReturn(this, (BraftFinder.__proto__ || Object.getPrototypeOf(BraftFinder)).call(this, props));

    _initialiseProps.call(_this);

    _this.superProps = props;
    return _this;
  }

  return BraftFinder;
}(_controller2.default);

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.ReactComponent = function () {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};


    var componentProps = _extends({}, _this2.superProps, props);

    var language = componentProps.language ? _languages2.default[componentProps.language] || _languages2.default['zh'] : _languages2.default['zh'];

    return _react2.default.createElement(_view2.default, _extends({}, componentProps, {
      language: language,
      controller: _this2
    }));
  };
};

exports.default = BraftFinder;

/***/ }),
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
});