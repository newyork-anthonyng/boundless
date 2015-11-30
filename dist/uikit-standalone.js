require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
'use strict';

function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }

var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
            }
        }
    }return target;
};

var _createClass = (function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
})();

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _UIView2 = require('../UIView');

var _UIView3 = _interopRequireDefault(_UIView2);

var _react = typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null;

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _noop = require('../UIUtils/noop');

var _noop2 = _interopRequireDefault(_noop);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
    } else {
        obj[key] = value;
    }return obj;
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var UIButton = (function (_UIView) {
    _inherits(UIButton, _UIView);

    function UIButton() {
        _classCallCheck(this, UIButton);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(UIButton).apply(this, arguments));
    }

    _createClass(UIButton, [{
        key: 'toggleState',
        value: function toggleState() {
            if (typeof this.props.pressed !== 'undefined') {
                this.props[this.props.pressed ? 'onUnpressed' : 'onPressed']();
            }
        }
    }, {
        key: 'handleClick',
        value: function handleClick() {
            this.toggleState();
            this.props.onClick();
        }
    }, {
        key: 'handleKeyDown',
        value: function handleKeyDown(event) {
            switch (event.key) {
                case 'Enter':
                case 'Space':
                    event.preventDefault();
                    this.toggleState();

                    if (typeof this.props.pressed === 'undefined') {
                        this.props.onClick();
                    }
            }

            if (typeof this.props.onKeyDown === 'function') {
                event.persist();
                this.props.onKeyDown(event);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement('button', _extends({}, this.props, {
                ref: 'button',
                className: (0, _classnames2.default)(_defineProperty({
                    'ui-button': true,
                    'ui-button-pressable': typeof this.props.pressed !== 'undefined',
                    'ui-button-pressed': this.props.pressed
                }, this.props.className, !!this.props.className)),
                'aria-pressed': this.props.pressed,
                onKeyDown: this.handleKeyDown.bind(this),
                onClick: this.handleClick.bind(this) }), this.props.children);
        }
    }]);

    return UIButton;
})(_UIView3.default);

UIButton.propTypes = {
    children: _react2.default.PropTypes.node,
    onClick: _react2.default.PropTypes.func,
    onPressed: _react2.default.PropTypes.func,
    onUnpressed: _react2.default.PropTypes.func,
    pressed: _react2.default.PropTypes.bool
};

UIButton.defaultProps = {
    onClick: _noop2.default,
    onPressed: _noop2.default,
    onUnpressed: _noop2.default
};

exports.default = UIButton;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"../UIUtils/noop":20,"../UIView":23,"classnames":24}],2:[function(require,module,exports){
(function (global){
'use strict';

function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }

var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
            }
        }
    }return target;
};

var _createClass = (function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
})();

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null;

var _react2 = _interopRequireDefault(_react);

var _UIView2 = require('../UIView');

var _UIView3 = _interopRequireDefault(_UIView2);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _noop = require('../UIUtils/noop');

var _noop2 = _interopRequireDefault(_noop);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
    } else {
        obj[key] = value;
    }return obj;
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
} /**
   * An accessible checkbox with indeterminate support.
   * @class UICheckbox
   */

var UICheckbox = (function (_UIView) {
    _inherits(UICheckbox, _UIView);

    function UICheckbox() {
        _classCallCheck(this, UICheckbox);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(UICheckbox).apply(this, arguments));
    }

    _createClass(UICheckbox, [{
        key: 'initialState',
        value: function initialState() {
            return {
                id: this.props.inputProps.id || this.uuid()
            };
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            if (this.props.indeterminate) {
                this.setIndeterminate();
            }
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps) {
            if (prevProps.indeterminate !== this.props.indeterminate) {
                this.setIndeterminate();
            }
        }
    }, {
        key: 'setIndeterminate',
        value: function setIndeterminate() {
            this.refs.input.indeterminate = !!this.props.indeterminate;
        }
    }, {
        key: 'ariaState',
        value: function ariaState() {
            return this.props.indeterminate ? 'mixed' : String(this.props.checked);
        }
    }, {
        key: 'handleChange',
        value: function handleChange() {
            // Send the opposite signal from what was passed to toggle the data
            this.props[!this.props.checked ? 'onChecked' : 'onUnchecked'](this.props.name);
        }
    }, {
        key: 'renderInput',
        value: function renderInput() {
            return _react2.default.createElement('input', _extends({}, this.props.inputProps, {
                ref: 'input',
                type: 'checkbox',
                id: this.state.id,
                className: (0, _classnames2.default)(_defineProperty({
                    'ui-checkbox': true,
                    'ui-checkbox-mixed': this.props.indeterminate,
                    'ui-checkbox-checked': this.props.checked,
                    'ui-checkbox-unchecked': !this.props.indeterminate && !this.props.checked
                }, this.props.inputProps.className, !!this.props.inputProps.className)),
                name: this.props.name,
                checked: this.props.checked,
                'aria-checked': this.ariaState(),
                onChange: this.handleChange.bind(this),
                value: this.props.value }));
        }
    }, {
        key: 'renderLabel',
        value: function renderLabel() {
            if (this.props.label) {
                return _react2.default.createElement('label', _extends({}, this.props.labelProps, {
                    ref: 'label',
                    className: (0, _classnames2.default)(_defineProperty({
                        'ui-checkbox-label': true
                    }, this.props.labelProps.className, !!this.props.labelProps.className)),
                    htmlFor: this.state.id }), this.props.label);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement('div', _extends({}, this.props, {
                ref: 'wrapper',
                className: (0, _classnames2.default)(_defineProperty({
                    'ui-checkbox-wrapper': true
                }, this.props.className, !!this.props.className)) }), this.renderInput(), this.renderLabel());
        }
    }]);

    return UICheckbox;
})(_UIView3.default);

UICheckbox.propTypes = {
    checked: _react2.default.PropTypes.bool,
    indeterminate: _react2.default.PropTypes.bool,
    inputProps: _react2.default.PropTypes.object,
    label: _react2.default.PropTypes.node,
    labelProps: _react2.default.PropTypes.object,
    name: _react2.default.PropTypes.string.isRequired,
    onChecked: _react2.default.PropTypes.func,
    onUnchecked: _react2.default.PropTypes.func,
    value: _react2.default.PropTypes.string
};

UICheckbox.defaultProps = {
    checked: false,
    indeterminate: false,
    inputProps: {},
    labelProps: {},
    onChecked: _noop2.default,
    onUnchecked: _noop2.default
};

exports.default = UICheckbox;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"../UIUtils/noop":20,"../UIView":23,"classnames":24}],3:[function(require,module,exports){
(function (global){
'use strict';

function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }

var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
            }
        }
    }return target;
};

var _createClass = (function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
})();

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null;

var _react2 = _interopRequireDefault(_react);

var _UIView2 = require('../UIView');

var _UIView3 = _interopRequireDefault(_UIView2);

var _UICheckbox = require('../UICheckbox');

var _UICheckbox2 = _interopRequireDefault(_UICheckbox);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _noop = require('../UIUtils/noop');

var _noop2 = _interopRequireDefault(_noop);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
    } else {
        obj[key] = value;
    }return obj;
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
} /**
   * A controller view for managing the aggregate state of multiple, related checkboxes.
   * @class UICheckboxGroup
   */

var UICheckboxGroup = (function (_UIView) {
    _inherits(UICheckboxGroup, _UIView);

    function UICheckboxGroup() {
        _classCallCheck(this, UICheckboxGroup);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(UICheckboxGroup).apply(this, arguments));
    }

    _createClass(UICheckboxGroup, [{
        key: 'allItemsChecked',
        value: function allItemsChecked() {
            return this.props.items.every(function (item) {
                return item.checked === true;
            });
        }
    }, {
        key: 'anyItemsChecked',
        value: function anyItemsChecked() {
            return this.props.items.some(function (item) {
                return item.checked === true;
            });
        }
    }, {
        key: 'renderSelectAll',
        value: function renderSelectAll() {
            if (this.props.selectAll) {
                var allChecked = this.allItemsChecked();

                return _react2.default.createElement(_UICheckbox2.default, _extends({}, this.props.selectAllProps, {
                    ref: 'select_all',
                    name: 'cb_select_all',
                    key: 'cb_select_all',
                    checked: allChecked,
                    className: (0, _classnames2.default)(_defineProperty({
                        'ui-checkbox-group-selectall': true
                    }, this.props.selectAllProps.className, !!this.props.selectAllProps.className)),
                    indeterminate: !allChecked && this.anyItemsChecked(),
                    label: this.props.selectAllLabel,
                    onChecked: this.props.onAllChecked,
                    onUnchecked: this.props.onAllUnchecked }));
            }
        }
    }, {
        key: 'renderCheckboxes',
        value: function renderCheckboxes() {
            var _this2 = this;

            return this.props.items.map(function (item) {
                return _react2.default.createElement(_UICheckbox2.default, _extends({}, item, {
                    ref: 'cb_item.name',
                    key: item.name,
                    onChecked: _this2.props.onChildChecked,
                    onUnchecked: _this2.props.onChildUnchecked }));
            });
        }
    }, {
        key: 'renderChildren',
        value: function renderChildren() {
            var toBeRendered = [this.renderCheckboxes()];

            if (this.props.selectAll && this.props.selectAllPosition) {
                switch (this.props.selectAllPosition) {
                    case UICheckboxGroup.Constants.SELECT_ALL_BEFORE:
                        toBeRendered.unshift(this.renderSelectAll());
                        break;

                    case UICheckboxGroup.Constants.SELECT_ALL_AFTER:
                        toBeRendered.push(this.renderSelectAll());
                        break;
                }
            }

            return toBeRendered;
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement('div', _extends({}, this.props, {
                ref: 'group',
                className: (0, _classnames2.default)(_defineProperty({
                    'ui-checkbox-group': true
                }, this.props.className, !!this.props.className)) }), this.renderChildren());
        }
    }]);

    return UICheckboxGroup;
})(_UIView3.default);

UICheckboxGroup.Constants = {
    SELECT_ALL_BEFORE: 'SELECT_ALL_BEFORE',
    SELECT_ALL_AFTER: 'SELECT_ALL_AFTER'
};

UICheckboxGroup.propTypes = {
    items: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.shape({
        checked: _react2.default.PropTypes.bool.isRequired,
        label: _react2.default.PropTypes.string,
        name: _react2.default.PropTypes.string.isRequired,
        value: _react2.default.PropTypes.string
    })).isRequired,
    onAllChecked: _react2.default.PropTypes.func,
    onAllUnchecked: _react2.default.PropTypes.func,
    onChildChecked: _react2.default.PropTypes.func,
    onChildUnchecked: _react2.default.PropTypes.func,
    selectAll: _react2.default.PropTypes.bool,
    selectAllProps: _react2.default.PropTypes.object,
    selectAllLabel: _react2.default.PropTypes.string,
    selectAllPosition: _react2.default.PropTypes.oneOf([UICheckboxGroup.Constants.SELECT_ALL_BEFORE, UICheckboxGroup.Constants.SELECT_ALL_AFTER])
};

UICheckboxGroup.defaultProps = {
    items: [],
    onAllChecked: _noop2.default,
    onAllUnchecked: _noop2.default,
    onChildChecked: _noop2.default,
    onChildUnchecked: _noop2.default,
    selectAllProps: {},
    selectAllLabel: 'Select All',
    selectAllPosition: UICheckboxGroup.Constants.SELECT_ALL_BEFORE
};

exports.default = UICheckboxGroup;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"../UICheckbox":2,"../UIUtils/noop":20,"../UIView":23,"classnames":24}],4:[function(require,module,exports){
(function (global){
'use strict';

function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }

var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
            }
        }
    }return target;
};

var _createClass = (function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
})();

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null;

var _react2 = _interopRequireDefault(_react);

var _UIView2 = require('../UIView');

var _UIView3 = _interopRequireDefault(_UIView2);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _noop = require('../UIUtils/noop');

var _noop2 = _interopRequireDefault(_noop);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
    } else {
        obj[key] = value;
    }return obj;
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
} /**
   * A non-blocking, focus-stealing container.
   * @class UIDialog
   */

var UIDialog = (function (_UIView) {
    _inherits(UIDialog, _UIView);

    function UIDialog() {
        _classCallCheck(this, UIDialog);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(UIDialog).apply(this, arguments));
    }

    _createClass(UIDialog, [{
        key: 'initialState',
        value: function initialState() {
            return {
                headerUUID: this.uuid(),
                bodyUUID: this.uuid()
            };
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            if (this.props.captureFocus && !this.isPartOfDialog(document.activeElement)) {
                this.refs.dialog.focus();
            }

            if (this.props.closeOnOutsideClick) {
                this.handleOutsideClick = this.handleOutsideClick.bind(this);

                window.addEventListener('click', this.handleOutsideClick, true);
            }

            this.handleFocus = this.handleFocus.bind(this);

            window.addEventListener('focus', this.handleFocus, true);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            if (this.props.closeOnOutsideClick) {
                window.removeEventListener('click', this.handleOutsideClick, true);
            }

            window.removeEventListener('focus', this.handleFocus, true);
        }
    }, {
        key: 'isPartOfDialog',
        value: function isPartOfDialog(node) {
            return this.refs.dialog.contains(node);
        }
    }, {
        key: 'handleFocus',
        value: function handleFocus(nativeEvent) {
            if (!this.props.captureFocus) {
                return;
            }

            // explicitOriginalTarget is for Firefox, as it doesn't support relatedTarget
            var previous = nativeEvent.explicitOriginalTarget || nativeEvent.relatedTarget;

            return previous;

            if (this.isPartOfDialog(previous) && !this.isPartOfDialog(nativeEvent.target)) {
                nativeEvent.preventDefault();
                previous.focus(); // restore focus
            }
        }
    }, {
        key: 'handleKeyDown',
        value: function handleKeyDown(event) {
            if (this.props.closeOnEscKey && event.key === 'Escape') {
                this.props.onClose();
            }

            if (typeof this.props.onKeyDown === 'function') {
                event.persist();
                this.props.onKeyDown(event);
            }
        }
    }, {
        key: 'handleOutsideClick',
        value: function handleOutsideClick(nativeEvent) {
            if (!this.isPartOfDialog(nativeEvent.target)) {
                this.props.onClose();
            }
        }
    }, {
        key: 'renderBody',
        value: function renderBody() {
            if (this.props.body) {
                return _react2.default.createElement('div', _extends({}, this.props.bodyProps, {
                    ref: 'body',
                    id: this.state.bodyUUID,
                    className: (0, _classnames2.default)(_defineProperty({
                        'ui-dialog-body': true
                    }, this.props.bodyProps.className, !!this.props.bodyProps.className)) }), this.props.body);
            }
        }
    }, {
        key: 'renderFooter',
        value: function renderFooter() {
            if (this.props.footer) {
                return _react2.default.createElement('footer', _extends({}, this.props.footerProps, {
                    ref: 'footer',
                    className: (0, _classnames2.default)(_defineProperty({
                        'ui-dialog-footer': true
                    }, this.props.footerProps.className, !!this.props.footerProps.className)) }), this.props.footer);
            }
        }
    }, {
        key: 'renderHeader',
        value: function renderHeader() {
            if (this.props.header) {
                return _react2.default.createElement('header', _extends({}, this.props.headerProps, {
                    ref: 'header',
                    id: this.state.headerUUID,
                    className: (0, _classnames2.default)(_defineProperty({
                        'ui-dialog-header': true
                    }, this.props.headerProps.className, !!this.props.headerProps.className)) }), this.props.header);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement('div', _extends({}, this.props, {
                ref: 'dialog',
                className: (0, _classnames2.default)(_defineProperty({
                    'ui-dialog': true
                }, this.props.className, !!this.props.className)),
                onKeyDown: this.handleKeyDown.bind(this),
                role: 'dialog',
                'aria-labelledby': this.state.headerUUID,
                'aria-describedby': this.state.bodyUUID,
                tabIndex: '0' }), this.renderHeader(), this.props.children || this.renderBody(), this.renderFooter());
        }
    }]);

    return UIDialog;
})(_UIView3.default);

UIDialog.propTypes = {
    body: _react2.default.PropTypes.node,
    bodyProps: _react2.default.PropTypes.object,
    captureFocus: _react2.default.PropTypes.bool,
    children: _react2.default.PropTypes.node,
    closeOnEscKey: _react2.default.PropTypes.bool,
    closeOnOutsideClick: _react2.default.PropTypes.bool,
    footer: _react2.default.PropTypes.node,
    footerProps: _react2.default.PropTypes.object,
    header: _react2.default.PropTypes.node,
    headerProps: _react2.default.PropTypes.object,
    onClose: _react2.default.PropTypes.func
};

UIDialog.defaultProps = {
    bodyProps: {},
    captureFocus: true,
    footerProps: {},
    headerProps: {},
    onClose: _noop2.default
};

exports.default = UIDialog;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"../UIUtils/noop":20,"../UIView":23,"classnames":24}],5:[function(require,module,exports){
(function (global){
'use strict';

function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }

var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
            }
        }
    }return target;
};

var _createClass = (function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
})();

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null;

var _react2 = _interopRequireDefault(_react);

var _reactDom = typeof window !== "undefined" ? window['ReactDOM'] : typeof global !== "undefined" ? global['ReactDOM'] : null;

var _reactDom2 = _interopRequireDefault(_reactDom);

var _UIView2 = require('../UIView');

var _UIView3 = _interopRequireDefault(_UIView2);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
    } else {
        obj[key] = value;
    }return obj;
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
} /**
   * Fit given text inside a parent container, obeying implict and explicit constraints.
   * @class UIFittedText
   */

function toI(stringNumber) {
    return parseInt(stringNumber, 10);
}

var UIFittedText = (function (_UIView) {
    _inherits(UIFittedText, _UIView);

    function UIFittedText() {
        _classCallCheck(this, UIFittedText);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(UIFittedText).apply(this, arguments));
    }

    _createClass(UIFittedText, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.rescale = this.rescale.bind(this);
            this.rescale();

            window.addEventListener('resize', this.rescale, true);
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            this.rescale();
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            window.removeEventListener('resize', this.rescale, true);
        }
    }, {
        key: 'rescale',
        value: function rescale() {
            var node = _reactDom2.default.findDOMNode(this);
            var container = node.parentNode;
            var containerBox = window.getComputedStyle(container);
            var containerHeight = toI(containerBox.height);
            var containerWidth = toI(containerBox.width);
            var fontSize = toI(window.getComputedStyle(node).fontSize);

            if (containerBox.boxSizing === 'border-box' || containerBox.boxSizing === 'padding-box') {
                // need to account for padding
                containerHeight -= toI(containerBox.paddingTop) + toI(containerBox.paddingBottom);
                containerWidth -= toI(containerBox.paddingLeft) + toI(containerBox.paddingRight);
            }

            var optimizeForHeight = Math.floor(fontSize / node.offsetHeight * containerHeight);
            var optimizeForWidth = Math.floor(fontSize / node.offsetWidth * containerWidth);

            node.style.fontSize = Math.min(this.props.maxFontSize, optimizeForHeight, optimizeForWidth) + 'px';
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement('span', _extends({}, this.props, {
                className: (0, _classnames2.default)(_defineProperty({
                    'ui-text': true
                }, this.props.className, !!this.props.className)) }), this.props.children);
        }
    }]);

    return UIFittedText;
})(_UIView3.default);

UIFittedText.defaultProps = {
    maxFontSize: Number.MAX_VALUE
};

UIFittedText.propTypes = {
    children: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.number]),
    maxFontSize: _react2.default.PropTypes.number
};

exports.default = UIFittedText;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"../UIView":23,"classnames":24}],6:[function(require,module,exports){
(function (global){
'use strict';

function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }

var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
            }
        }
    }return target;
};

var _createClass = (function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
})();

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null;

var _react2 = _interopRequireDefault(_react);

var _UIView2 = require('../UIView');

var _UIView3 = _interopRequireDefault(_UIView2);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _noop = require('../UIUtils/noop');

var _noop2 = _interopRequireDefault(_noop);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
    } else {
        obj[key] = value;
    }return obj;
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
} /**
   * An image block with placeholder support for loading and fallback scenarios.
   * @class UIImage
   */

var UIImage = (function (_UIView) {
    _inherits(UIImage, _UIView);

    function UIImage() {
        _classCallCheck(this, UIImage);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(UIImage).apply(this, arguments));
    }

    _createClass(UIImage, [{
        key: 'initialState',
        value: function initialState() {
            return {
                status: UIImage.status.LOADING
            };
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (nextProps.src !== this.props.src) {
                this.resetPreloader();
                this.setState({ status: UIImage.status.LOADING });
            }
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.preload();
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps) {
            this.preload();
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.resetPreloader();
        }
    }, {
        key: 'resetPreloader',
        value: function resetPreloader() {
            this.loader.onload = null;
            this.loader.onerror = null;
            this.loader = null;
        }
    }, {
        key: 'preload',
        value: function preload() {
            var _this2 = this;

            if (this.loader) {
                return;
            }

            this.loader = document.createElement('img');

            this.loader.onload = function () {
                return _this2.setState({ status: UIImage.status.LOADED });
            };
            this.loader.onerror = function () {
                return _this2.setState({ status: UIImage.status.ERROR });
            };

            this.loader.src = this.props.src;
        }
    }, {
        key: 'renderImage',
        value: function renderImage() {
            if (this.props.displayAsBackgroundImage) {
                return _react2.default.createElement('div', _extends({}, this.props.imageProps, {
                    ref: 'image',
                    className: (0, _classnames2.default)(_defineProperty({
                        'ui-image': true
                    }, this.props.imageProps.className, !!this.props.imageProps.className)),
                    title: this.props.alt,
                    style: _extends({}, this.props.imageProps.style, {
                        backgroundImage: 'url(' + this.props.src + ')'
                    }) }));
            }

            return _react2.default.createElement('img', _extends({}, this.props.imageProps, {
                ref: 'image',
                className: (0, _classnames2.default)(_defineProperty({
                    'ui-image': true
                }, this.props.imageProps.className, !!this.props.imageProps.className)),
                src: this.props.src,
                alt: this.props.alt,
                onLoad: _noop2.default,
                onError: _noop2.default }));
        }
    }, {
        key: 'renderStatus',
        value: function renderStatus() {
            return _react2.default.createElement('div', _extends({}, this.props.statusProps, {
                ref: 'status',
                className: (0, _classnames2.default)(_defineProperty({
                    'ui-image-status': true,
                    'ui-image-loading': this.state.status === UIImage.status.LOADING,
                    'ui-image-loaded': this.state.status === UIImage.status.LOADED,
                    'ui-image-error': this.state.status === UIImage.status.ERROR
                }, this.props.statusProps.className, !!this.props.statusProps.className)),
                role: 'presentation' }));
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement('div', _extends({}, this.props, {
                alt: null,
                src: null,
                ref: 'wrapper',
                className: (0, _classnames2.default)(_defineProperty({
                    'ui-image-wrapper': true
                }, this.props.className, !!this.props.className)) }), this.renderImage(), this.renderStatus());
        }
    }]);

    return UIImage;
})(_UIView3.default);

UIImage.status = {
    LOADING: 'LOADING',
    LOADED: 'LOADED',
    ERROR: 'ERROR'
};

UIImage.propTypes = {
    alt: _react2.default.PropTypes.string,
    displayAsBackgroundImage: _react2.default.PropTypes.bool,
    imageProps: _react2.default.PropTypes.object,
    src: _react2.default.PropTypes.string.isRequired,
    statusProps: _react2.default.PropTypes.object
};

UIImage.defaultProps = {
    imageProps: {},
    statusProps: {}
};

exports.default = UIImage;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"../UIUtils/noop":20,"../UIView":23,"classnames":24}],7:[function(require,module,exports){
(function (global){
'use strict';

function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }

var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
            }
        }
    }return target;
};

var _createClass = (function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
})();

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null;

var _react2 = _interopRequireDefault(_react);

var _UIView2 = require('../UIView');

var _UIView3 = _interopRequireDefault(_UIView2);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
    } else {
        obj[key] = value;
    }return obj;
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
} /**
   * A generic list view, supporting unstyled, bulleted and numbered output.
   * @class UIList
   */

var UIList = (function (_UIView) {
    _inherits(UIList, _UIView);

    function UIList() {
        _classCallCheck(this, UIList);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(UIList).apply(this, arguments));
    }

    _createClass(UIList, [{
        key: 'initialState',
        value: function initialState() {
            return {
                activeItem: null
            };
        }
    }, {
        key: 'setFocus',
        value: function setFocus(index) {
            this.refs['item_' + index].focus();
        }
    }, {
        key: 'getNextItemIndex',
        value: function getNextItemIndex(currentItem) {
            var next = this.props.items.indexOf(currentItem) + 1;

            return next < this.props.items.length ? next : 0;
        }
    }, {
        key: 'getPreviousItemIndex',
        value: function getPreviousItemIndex(currentItem) {
            var previous = this.props.items.indexOf(currentItem) - 1;

            return previous < 0 ? this.props.items.length - 1 : previous;
        }
    }, {
        key: 'handleKeyDown',
        value: function handleKeyDown(event) {
            var _this2 = this;

            var key = event.key;
            var hasType = !!this.props.type;
            var items = this.props.items;
            var activeItem = this.state.activeItem;

            var next = function next() {
                _this2.setFocus(_this2.getNextItemIndex(activeItem));
                event.preventDefault();
            };

            var prev = function prev() {
                event.preventDefault();
                _this2.setFocus(_this2.getPreviousItemIndex(activeItem));
            };

            if (key === 'Tab') {
                var activeItemIndex = items.indexOf(activeItem);

                if (event.shiftKey && activeItemIndex !== 0) {
                    prev();
                } else if (!event.shiftKey && activeItemIndex !== items.length - 1) {
                    next();
                }
            } else {
                switch (key) {
                    case 'ArrowUp':
                    case 'ArrowLeft':
                        prev();
                        break;

                    case 'ArrowDown':
                    case 'ArrowRight':
                        next();
                        break;
                }
            }

            if (typeof this.props.onKeyDown === 'function') {
                event.persist();
                this.props.onKeyDown(event);
            }
        }
    }, {
        key: 'renderContent',
        value: function renderContent() {
            var _this3 = this;

            var nodeType = this.props.type ? 'li' : 'span';

            return this.props.items.map(function (item, index) {
                return _react2.default.createElement(nodeType, {
                    className: 'ui-list-item',
                    ref: 'item_' + index,
                    key: _this3.createHashedKey(item) + index, // in case 2 pieces of content are identical
                    tabIndex: 0,
                    onBlur: function onBlur() {
                        return _this3.state.activeItem === item && _this3.setState({ activeItem: null });
                    },
                    onFocus: function onFocus() {
                        return _this3.setState({ activeItem: item });
                    },
                    children: item
                });
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var nodeType = 'div';

            switch (this.props.type) {
                case 'bullet':
                    nodeType = 'ul';
                    break;

                case 'number':
                    nodeType = 'ol';
                    break;
            }

            return _react2.default.createElement(nodeType, _extends({}, this.props, {
                ref: 'list',
                className: (0, _classnames2.default)(_defineProperty({
                    'ui-list': true,
                    'ui-list-bulleted': this.props.type === 'bullet',
                    'ui-list-numbered': this.props.type === 'number',
                    'ui-list-plain': this.props.type !== 'bullet' && this.props.type !== 'number'
                }, this.props.className, !!this.props.className)),
                onKeyDown: this.handleKeyDown.bind(this),
                children: this.renderContent()
            }));
        }
    }]);

    return UIList;
})(_UIView3.default);

UIList.propTypes = {
    items: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.node),
    type: _react2.default.PropTypes.oneOf(['bullet', 'number'])
};

UIList.defaultProps = {
    items: []
};

exports.default = UIList;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"../UIView":23,"classnames":24}],8:[function(require,module,exports){
(function (global){
'use strict';

function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }

var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
            }
        }
    }return target;
};

var _createClass = (function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
})();

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null;

var _react2 = _interopRequireDefault(_react);

var _UIDialog = require('../UIDialog');

var _UIDialog2 = _interopRequireDefault(_UIDialog);

var _UIView2 = require('../UIView');

var _UIView3 = _interopRequireDefault(_UIView2);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
    } else {
        obj[key] = value;
    }return obj;
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
} /**
   * A blocking, focus-stealing container.
   * @class UIModal
   */

var UIModal = (function (_UIView) {
    _inherits(UIModal, _UIView);

    function UIModal() {
        _classCallCheck(this, UIModal);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(UIModal).apply(this, arguments));
    }

    _createClass(UIModal, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var dialogSpecificProps = Object.keys(_UIDialog2.default.propTypes).reduce(function (props, key) {
                props[key] = _this2.props[key];

                return props;
            }, {});

            return _react2.default.createElement('div', _extends({}, this.props, {
                ref: 'wrapper',
                className: (0, _classnames2.default)(_defineProperty({
                    'ui-modal-wrapper': true
                }, this.props.className, !!this.props.className)) }), _react2.default.createElement('div', _extends({}, this.props.maskProps, {
                ref: 'mask',
                className: (0, _classnames2.default)(_defineProperty({
                    'ui-modal-mask': true
                }, this.props.maskProps.className, !!this.props.maskProps.className)) })), _react2.default.createElement(_UIDialog2.default, _extends({}, dialogSpecificProps, this.props.modalProps, {
                ref: 'dialog',
                className: (0, _classnames2.default)(_defineProperty({
                    'ui-modal': true
                }, this.props.modalProps.className, !!this.props.modalProps.className)) })));
        }
    }]);

    return UIModal;
})(_UIView3.default);

UIModal.propTypes = _extends({}, _UIDialog2.default.propTypes, {
    maskProps: _react2.default.PropTypes.object,
    modalProps: _react2.default.PropTypes.object
});

UIModal.defaultProps = _extends({}, _UIDialog2.default.defaultProps, {
    maskProps: {},
    modalProps: {}
});

exports.default = UIModal;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"../UIDialog":4,"../UIView":23,"classnames":24}],9:[function(require,module,exports){
(function (global){
'use strict';

function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }

var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
            }
        }
    }return target;
};

var _createClass = (function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
})();

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null;

var _react2 = _interopRequireDefault(_react);

var _reactDom = typeof window !== "undefined" ? window['ReactDOM'] : typeof global !== "undefined" ? global['ReactDOM'] : null;

var _reactDom2 = _interopRequireDefault(_reactDom);

var _UIDialog = require('../UIDialog');

var _UIDialog2 = _interopRequireDefault(_UIDialog);

var _UIView2 = require('../UIView');

var _UIView3 = _interopRequireDefault(_UIView2);

var _transform = require('../UIUtils/transform');

var _transform2 = _interopRequireDefault(_transform);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
    } else {
        obj[key] = value;
    }return obj;
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
} /**
   * A non-blocking container positioned to a specific anchor element.
   * @class UIPopover
   */

/*
    A nuance about this component: since it only renders a simple <div>, the main render() function
    never changes. Therefore, we need to manually call `componentDidUpdate` after `setState` to trigger
    a full re-render of the child dialog.
 */

var UIPopover = (function (_UIView) {
    _inherits(UIPopover, _UIView);

    function UIPopover() {
        _classCallCheck(this, UIPopover);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(UIPopover).apply(this, arguments));
    }

    _createClass(UIPopover, [{
        key: 'initialState',
        value: function initialState() {
            return {
                anchorXAlign: this.props.anchorXAlign,
                anchorYAlign: this.props.anchorYAlign,
                selfXAlign: this.props.selfXAlign,
                selfYAlign: this.props.selfYAlign
            };
        }
    }, {
        key: 'componentWillMount',
        value: function componentWillMount() {
            document.body.appendChild(this.container = document.createElement('div'));

            // this is bad, don't do this anywhere else :-x.
            this.refs = {};
            this.refs.dialog = this.renderDialog();
            this.node = _reactDom2.default.findDOMNode(this.refs.dialog);

            this.align = this.align.bind(this);
            this.align();

            window.addEventListener('resize', this.align, true);
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            this.renderDialog();
            this.align();
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            _reactDom2.default.unmountComponentAtNode(this.container);
            document.body.removeChild(this.container);

            window.removeEventListener('resize', this.align, true);
        }
    }, {
        key: 'getNextXPosition',
        value: function getNextXPosition(anchor, dialog) {
            var state = this.state;
            var position = UIPopover.position;

            var nextX = anchor.getBoundingClientRect().left + document.body.scrollLeft;

            switch (state.anchorXAlign) {
                case position.MIDDLE:
                    nextX += anchor.offsetWidth / 2;
                    break;

                case position.END:
                    nextX += anchor.offsetWidth;
                    break;
            }

            switch (state.selfXAlign) {
                case position.MIDDLE:
                    nextX -= dialog.clientWidth / 2;
                    break;

                case position.END:
                    nextX -= dialog.clientWidth;
                    break;
            }

            return nextX;
        }
    }, {
        key: 'getNextYPosition',
        value: function getNextYPosition(anchor, dialog) {
            var state = this.state;
            var position = UIPopover.position;
            var anchorY = anchor.getBoundingClientRect().top + document.body.scrollTop;
            var anchorHeight = anchor.offsetHeight;

            var nextY = anchorY + anchorHeight;

            switch (state.anchorYAlign) {
                case position.START:
                    nextY = anchorY;
                    break;

                case position.MIDDLE:
                    nextY = anchorY + anchorHeight / 2;
                    break;
            }

            switch (state.selfYAlign) {
                case position.MIDDLE:
                    nextY -= dialog.clientHeight / 2;
                    break;

                case position.END:
                    nextY -= dialog.clientHeight;
                    break;
            }

            return nextY;
        }
    }, {
        key: 'getAlignmentCorrectionIfOverflowing',
        value: function getAlignmentCorrectionIfOverflowing(node, x, y) {
            if (!this.props.autoReposition) {
                return false;
            }

            var corrections = {};

            var width = node.clientWidth;
            var height = node.clientHeight;
            var xMax = document.body.scrollWidth;
            var yMax = document.body.scrollHeight;

            if (x + width > xMax) {
                // overflowing off to the right
                corrections.anchorXAlign = UIPopover.position.END;
                corrections.selfXAlign = UIPopover.position.END;
            } else if (x < 0) {
                // overflowing off to the left
                corrections.anchorXAlign = UIPopover.position.START;
                corrections.selfXAlign = UIPopover.position.START;
            } else if (y + height > yMax) {
                // overflowing below
                corrections.anchorYAlign = UIPopover.position.START;
                corrections.selfYAlign = UIPopover.position.END;
            } else if (y < 0) {
                // overflowing above
                corrections.anchorYAlign = UIPopover.position.END;
                corrections.anchorXAlign = UIPopover.position.MIDDLE;
                corrections.selfYAlign = UIPopover.position.START;
                corrections.selfXAlign = UIPopover.position.MIDDLE;
            }

            return corrections;
        }
    }, {
        key: 'applyTranslation',
        value: function applyTranslation(node, x, y) {
            if (_transform2.default) {
                node.style[_transform2.default] = 'translate(' + x + 'px, ' + y + 'px)';
            } else {
                node.style.left = x + 'px';
                node.style.top = y + 'px';
            }
        }
    }, {
        key: 'align',
        value: function align() {
            var _this2 = this;

            var anchor = this.props.anchor instanceof HTMLElement ? this.props.anchor : _reactDom2.default.findDOMNode(this.props.anchor);

            var x = this.getNextXPosition(anchor, this.node);
            var y = this.getNextYPosition(anchor, this.node);

            var alignmentCorrection = this.getAlignmentCorrectionIfOverflowing(this.node, x, y);

            if (alignmentCorrection && Object.keys(alignmentCorrection).length) {
                return this.setState(alignmentCorrection, function () {
                    return _this2.componentDidUpdate();
                });
            }

            this.applyTranslation(this.node, x, y);
        }
    }, {
        key: 'getClassAlignmentFragment',
        value: function getClassAlignmentFragment(constant) {
            var position = UIPopover.position;

            switch (constant) {
                case position.START:
                    return 'start';

                case position.MIDDLE:
                    return 'middle';

                case position.END:
                    return 'end';
            }
        }
    }, {
        key: 'renderDialog',
        value: function renderDialog() {
            var _cx;

            var state = this.state;
            var getFrag = this.getClassAlignmentFragment;

            return _reactDom2.default.render(_react2.default.createElement(_UIDialog2.default, _extends({}, this.props, {
                captureFocus: false,
                className: (0, _classnames2.default)((_cx = {
                    'ui-popover': true
                }, _defineProperty(_cx, 'ui-popover-anchor-x-' + getFrag(state.anchorXAlign), true), _defineProperty(_cx, 'ui-popover-anchor-y-' + getFrag(state.anchorYAlign), true), _defineProperty(_cx, 'ui-popover-self-x-' + getFrag(state.selfXAlign), true), _defineProperty(_cx, 'ui-popover-self-y-' + getFrag(state.selfYAlign), true), _defineProperty(_cx, this.props.className, !!this.props.className), _cx)),
                style: _extends({}, this.props.style, {
                    position: 'absolute',
                    top: '0px',
                    left: '0px'
                }) })), this.container);
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement('div', null);
        }
    }]);

    return UIPopover;
})(_UIView3.default);

UIPopover.position = {
    START: 'START',
    MIDDLE: 'MIDDLE',
    END: 'END'
};

UIPopover.propTypes = _extends({}, _UIDialog2.default.propTypes, {
    anchor: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.instanceOf(HTMLElement), _react2.default.PropTypes.shape({
        props: _react2.default.PropTypes.object,
        state: _react2.default.PropTypes.object
    })]). // a react element of some fashion, React.PropTypes.element wasn't working
    isRequired,
    anchorXAlign: _react2.default.PropTypes.oneOf([UIPopover.position.START, UIPopover.position.MIDDLE, UIPopover.position.END]),
    anchorYAlign: _react2.default.PropTypes.oneOf([UIPopover.position.START, UIPopover.position.MIDDLE, UIPopover.position.END]),
    autoReposition: _react2.default.PropTypes.bool,
    selfXAlign: _react2.default.PropTypes.oneOf([UIPopover.position.START, UIPopover.position.MIDDLE, UIPopover.position.END]),
    selfYAlign: _react2.default.PropTypes.oneOf([UIPopover.position.START, UIPopover.position.MIDDLE, UIPopover.position.END])
});

UIPopover.defaultProps = _extends({}, _UIDialog2.default.defaultProps, {
    anchorXAlign: UIPopover.position.START,
    anchorYAlign: UIPopover.position.END,
    autoReposition: true,
    selfXAlign: UIPopover.position.START,
    selfYAlign: UIPopover.position.START
});

exports.default = UIPopover;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"../UIDialog":4,"../UIUtils/transform":22,"../UIView":23,"classnames":24}],10:[function(require,module,exports){
(function (global){
'use strict';

function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }

var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
            }
        }
    }return target;
};

var _createClass = (function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
})();

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null;

var _react2 = _interopRequireDefault(_react);

var _UIButton = require('../UIButton');

var _UIButton2 = _interopRequireDefault(_UIButton);

var _UIView2 = require('../UIView');

var _UIView3 = _interopRequireDefault(_UIView2);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
    } else {
        obj[key] = value;
    }return obj;
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
} /**
   * An unopinionated progress implementation that allows for a variety of shapes and effects.
   * @class UIProgress
   */

var UIProgress = (function (_UIView) {
    _inherits(UIProgress, _UIView);

    function UIProgress() {
        _classCallCheck(this, UIProgress);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(UIProgress).apply(this, arguments));
    }

    _createClass(UIProgress, [{
        key: 'renderLabel',
        value: function renderLabel() {
            if (this.props.label) {
                return _react2.default.createElement('div', _extends({}, this.props.labelProps, {
                    ref: 'label',
                    className: (0, _classnames2.default)(_defineProperty({
                        'ui-progress-label': true
                    }, this.props.labelProps.className, !!this.props.labelProps.className)) }), this.props.label);
            }
        }
    }, {
        key: 'renderCancel',
        value: function renderCancel() {
            if (this.props.onCancel) {
                return _react2.default.createElement(_UIButton2.default, _extends({}, this.props.cancelProps, {
                    ref: 'cancel',
                    className: (0, _classnames2.default)(_defineProperty({
                        'ui-progress-cancel': true
                    }, this.props.cancelProps.className, !!this.props.cancelProps.className)),
                    onClick: this.props.onCancel }));
            }
        }
    }, {
        key: 'renderProgress',
        value: function renderProgress() {
            return _react2.default.createElement('div', _extends({}, this.props.progressProps, {
                ref: 'progress',
                className: (0, _classnames2.default)(_defineProperty({
                    'ui-progress': true,
                    'ui-progress-indeterminate': typeof this.props.progress === 'undefined'
                }, this.props.progressProps.className, !!this.props.progressProps.className)),
                role: 'presentation',
                style: _extends({}, this.props.progressProps.style, _defineProperty({}, this.props.tweenProperty, this.props.progress)) }));
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement('div', _extends({}, this.props, {
                ref: 'wrapper',
                className: (0, _classnames2.default)(_defineProperty({
                    'ui-progress-wrapper': true
                }, this.props.className, !!this.props.className)) }), this.renderProgress(), this.renderLabel(), this.renderCancel());
        }
    }]);

    return UIProgress;
})(_UIView3.default);

UIProgress.defaultProps = {
    cancelProps: {},
    labelProps: {},
    progressProps: {},
    tweenProperty: 'width'
};

UIProgress.propTypes = {
    cancelProps: _react2.default.PropTypes.object,
    label: _react2.default.PropTypes.node,
    labelProps: _react2.default.PropTypes.object,
    onCancel: _react2.default.PropTypes.func,
    progress: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.number]),
    progressProps: _react2.default.PropTypes.object,
    tweenProperty: _react2.default.PropTypes.string
};

exports.default = UIProgress;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"../UIButton":1,"../UIView":23,"classnames":24}],11:[function(require,module,exports){
(function (global){
'use strict';

function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }

var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
            }
        }
    }return target;
};

var _createClass = (function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
})();

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null;

var _react2 = _interopRequireDefault(_react);

var _UIView2 = require('../UIView');

var _UIView3 = _interopRequireDefault(_UIView2);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _noop = require('../UIUtils/noop');

var _noop2 = _interopRequireDefault(_noop);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
    } else {
        obj[key] = value;
    }return obj;
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
} /**
   * Hide content until it's needed.
   * @class UIProgressiveDisclosure
   */

var UIProgressiveDisclosure = (function (_UIView) {
    _inherits(UIProgressiveDisclosure, _UIView);

    function UIProgressiveDisclosure() {
        _classCallCheck(this, UIProgressiveDisclosure);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(UIProgressiveDisclosure).apply(this, arguments));
    }

    _createClass(UIProgressiveDisclosure, [{
        key: 'initialState',
        value: function initialState() {
            return {
                expanded: this.props.expanded
            };
        }
    }, {
        key: 'dispatchCallback',
        value: function dispatchCallback() {
            this.props[this.state.expanded ? 'onExpand' : 'onHide']();
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(newProps) {
            var _this2 = this;

            if (newProps.expanded !== this.props.expanded) {
                this.setState({ expanded: newProps.expanded }, function () {
                    return _this2.dispatchCallback();
                });
            }
        }
    }, {
        key: 'handleClick',
        value: function handleClick() {
            var _this3 = this;

            this.setState({ expanded: !this.state.expanded }, function () {
                return _this3.dispatchCallback();
            });

            if (typeof this.props.toggleProps.onClick === 'function') {
                event.persist();
                this.props.toggleProps.onClick(event);
            }
        }
    }, {
        key: 'handleKeyDown',
        value: function handleKeyDown(event) {
            var _this4 = this;

            switch (event.key) {
                case 'Enter':
                    event.preventDefault();
                    this.setState({ expanded: !this.state.expanded }, function () {
                        return _this4.dispatchCallback();
                    });
            }

            if (typeof this.props.toggleProps.onKeyDown === 'function') {
                event.persist();
                this.props.toggleProps.onKeyDown(event);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement('div', _extends({}, this.props, {
                ref: 'wrapper',
                className: (0, _classnames2.default)(_defineProperty({
                    'ui-disclosure': true,
                    'ui-disclosure-expanded': this.state.expanded
                }, this.props.className, !!this.props.className)) }), _react2.default.createElement('div', _extends({}, this.props.toggleProps, {
                ref: 'toggle',
                className: (0, _classnames2.default)(_defineProperty({
                    'ui-disclosure-toggle': true
                }, this.props.toggleProps.className, !!this.props.toggleProps.className)),
                onClick: this.handleClick.bind(this),
                onKeyDown: this.handleKeyDown.bind(this),
                tabIndex: '0' }), this.props.teaser), _react2.default.createElement('div', { ref: 'content',
                className: 'ui-disclosure-content' }, this.props.children));
        }
    }]);

    return UIProgressiveDisclosure;
})(_UIView3.default);

exports.default = UIProgressiveDisclosure;

UIProgressiveDisclosure.propTypes = {
    children: _react2.default.PropTypes.node,
    expanded: _react2.default.PropTypes.bool,
    onExpand: _react2.default.PropTypes.func,
    onHide: _react2.default.PropTypes.func,
    teaser: _react2.default.PropTypes.node,
    toggleProps: _react2.default.PropTypes.object
};

UIProgressiveDisclosure.defaultProps = {
    expanded: false,
    onExpand: _noop2.default,
    onHide: _noop2.default,
    toggleProps: {}
};

exports.default = UIProgressiveDisclosure;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"../UIUtils/noop":20,"../UIView":23,"classnames":24}],12:[function(require,module,exports){
(function (global){
'use strict';

function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }

var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
            }
        }
    }return target;
};

var _createClass = (function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
})();

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null;

var _react2 = _interopRequireDefault(_react);

var _UIView2 = require('../UIView');

var _UIView3 = _interopRequireDefault(_UIView2);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _noop = require('../UIUtils/noop');

var _noop2 = _interopRequireDefault(_noop);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
    } else {
        obj[key] = value;
    }return obj;
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
} /**
   * An accessible radio form control.
   * @class UIRadio
   */

var UIRadio = (function (_UIView) {
    _inherits(UIRadio, _UIView);

    function UIRadio() {
        _classCallCheck(this, UIRadio);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(UIRadio).apply(this, arguments));
    }

    _createClass(UIRadio, [{
        key: 'initialState',
        value: function initialState() {
            return {
                id: this.props.inputProps.id || this.uuid()
            };
        }
    }, {
        key: 'handleChange',
        value: function handleChange(event) {
            if (event.target.checked) {
                this.props.onSelected(event.target.value);
            }

            if (typeof this.props.inputProps.onChange === 'function') {
                event.persist();
                this.props.inputProps.onChange(event);
            }
        }
    }, {
        key: 'renderInput',
        value: function renderInput() {
            return _react2.default.createElement('input', _extends({}, this.props.inputProps, {
                ref: 'input',
                type: 'radio',
                id: this.state.id,
                className: (0, _classnames2.default)(_defineProperty({
                    'ui-radio': true,
                    'ui-radio-selected': this.props.selected
                }, this.props.inputProps.className, !!this.props.inputProps.className)),
                name: this.props.name,
                value: this.props.value,
                checked: this.props.selected,
                'aria-checked': String(this.props.selected),
                onChange: this.handleChange.bind(this) }));
        }
    }, {
        key: 'renderLabel',
        value: function renderLabel() {
            if (this.props.label) {
                return _react2.default.createElement('label', _extends({}, this.props.labelProps, {
                    ref: 'label',
                    className: (0, _classnames2.default)(_defineProperty({
                        'ui-radio-label': true
                    }, this.props.labelProps.className, !!this.props.labelProps.className)),
                    htmlFor: this.state.id }), this.props.label);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement('div', _extends({}, this.props, {
                ref: 'wrapper',
                className: (0, _classnames2.default)(_defineProperty({
                    'ui-radio-wrapper': true
                }, this.props.className, !!this.props.className)) }), this.renderInput(), this.renderLabel());
        }
    }]);

    return UIRadio;
})(_UIView3.default);

UIRadio.propTypes = {
    inputProps: _react2.default.PropTypes.object,
    label: _react2.default.PropTypes.node,
    labelProps: _react2.default.PropTypes.object,
    name: _react2.default.PropTypes.string.isRequired,
    onSelected: _react2.default.PropTypes.func,
    selected: _react2.default.PropTypes.bool,
    value: _react2.default.PropTypes.string.isRequired
};

UIRadio.defaultProps = {
    inputProps: {},
    labelProps: {},
    onSelected: _noop2.default,
    selected: false
};

exports.default = UIRadio;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"../UIUtils/noop":20,"../UIView":23,"classnames":24}],13:[function(require,module,exports){
(function (global){
'use strict';

function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }

var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
            }
        }
    }return target;
};

var _createClass = (function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
})();

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _UIView2 = require('../UIView');

var _UIView3 = _interopRequireDefault(_UIView2);

var _react = typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null;

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _noop = require('../UIUtils/noop');

var _noop2 = _interopRequireDefault(_noop);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
    } else {
        obj[key] = value;
    }return obj;
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
} /**
   * A controller view for managing the aggregate state of multiple, related radio-style buttons.
   * @class UISegmentedControl
   */

var UISegmentedControl = (function (_UIView) {
    _inherits(UISegmentedControl, _UIView);

    function UISegmentedControl() {
        _classCallCheck(this, UISegmentedControl);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(UISegmentedControl).apply(this, arguments));
    }

    _createClass(UISegmentedControl, [{
        key: 'currentValue',
        value: function currentValue() {
            var value = undefined;

            this.props.options.some(function (option) {
                if (option.selected) {
                    value = option.value;

                    return true;
                }
            });

            return value;
        }
    }, {
        key: 'setFocus',
        value: function setFocus(index) {
            this.refs['option_$' + index].focus();
        }
    }, {
        key: 'getNextOptionIndex',
        value: function getNextOptionIndex(currentOptionIndex) {
            var next = currentOptionIndex + 1;

            return next < this.props.options.length ? next : 0;
        }
    }, {
        key: 'getPreviousOptionIndex',
        value: function getPreviousOptionIndex(currentOptionIndex) {
            var previous = currentOptionIndex - 1;

            return previous < 0 ? this.props.options.length - 1 : previous;
        }
    }, {
        key: 'handleBlur',
        value: function handleBlur(option, event) {
            if (this.state.indexOfOptionInFocus === option) {
                this.setState({ indexOfOptionInFocus: null });
            }

            if (typeof option.onBlur === 'function') {
                event.persist();
                option.onBlur(event);
            }
        }
    }, {
        key: 'handleClick',
        value: function handleClick(option, event) {
            this.props.onOptionSelected(option.value);

            if (typeof option.onClick === 'function') {
                event.persist();
                option.onClick(event);
            }
        }
    }, {
        key: 'handleFocus',
        value: function handleFocus(option, event) {
            this.setState({ indexOfOptionInFocus: this.props.options.indexOf(option) });

            if (typeof option.onFocus === 'function') {
                event.persist();
                option.onFocus(event);
            }
        }
    }, {
        key: 'handleKeyDown',
        value: function handleKeyDown(event) {
            var key = event.key;
            var activeItemIndex = this.state.indexOfOptionInFocus;

            if (key === 'ArrowLeft') {
                this.setFocus(this.getPreviousOptionIndex(activeItemIndex));
                event.preventDefault();
            } else if (key === 'ArrowRight') {
                this.setFocus(this.getNextOptionIndex(activeItemIndex));
                event.preventDefault();
            } else if (key === 'Enter') {
                this.handleClick(this.props.options[activeItemIndex]);
                event.preventDefault();
            }

            if (typeof this.props.onKeyDown === 'function') {
                event.persist();
                this.props.onKeyDown(event);
            }
        }
    }, {
        key: 'renderOptions',
        value: function renderOptions() {
            var _this2 = this;

            return this.props.options.map(function (definition, index) {
                return _react2.default.createElement('div', _extends({}, definition, {
                    role: 'radio',
                    'aria-checked': String(definition.selected),
                    ref: 'option_$' + index,
                    key: definition.value,
                    className: (0, _classnames2.default)({
                        'ui-segmented-control-option': true,
                        'ui-segmented-control-option-selected': definition.selected
                    }),
                    tabIndex: definition.selected ? 0 : -1,
                    onBlur: _this2.handleBlur.bind(_this2, definition),
                    onClick: _this2.handleClick.bind(_this2, definition),
                    onFocus: _this2.handleFocus.bind(_this2, definition) }), definition.content);
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement('div', _extends({}, this.props, {
                ref: 'wrapper',
                'aria-required': 'radiogroup',
                className: (0, _classnames2.default)(_defineProperty({
                    'ui-segmented-control': true
                }, this.props.className, !!this.props.className)),
                onKeyDown: this.handleKeyDown.bind(this) }), this.renderOptions());
        }
    }]);

    return UISegmentedControl;
})(_UIView3.default);

UISegmentedControl.propTypes = {
    onOptionSelected: _react2.default.PropTypes.func,
    options: function options(props, propName, componentName) {
        if (props.options.length < 2) {
            return new Error('Must provide at least two options.');
        }

        var missingSelected = props.options.some(function (option) {
            if (!('selected' in option)) {
                return true;
            }
        });

        if (missingSelected) {
            return new Error('Must provide a `selected` prop for each option.');
        }

        var missingValue = props.options.some(function (option) {
            if (!('value' in option)) {
                return true;
            }
        });

        if (missingValue) {
            return new Error('Must provide a `value` prop for each option.');
        }

        var seenSelected = false;
        var multipleSelected = props.options.some(function (option) {
            if (option.selected) {
                if (seenSelected) {
                    return true;
                }

                seenSelected = true;
            }
        });

        if (multipleSelected) {
            return new Error('Encountered multiple options with `selected: true`. There can be only one.');
        }
    }
};

UISegmentedControl.defaultProps = {
    options: [],
    onOptionSelected: _noop2.default
};

exports.default = UISegmentedControl;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"../UIUtils/noop":20,"../UIView":23,"classnames":24}],14:[function(require,module,exports){
(function (global){
'use strict';

function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }

var _createClass = (function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
})();

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null;

var _react2 = _interopRequireDefault(_react);

var _UIView2 = require('../UIView');

var _UIView3 = _interopRequireDefault(_UIView2);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var UITableCell = (function (_UIView) {
    _inherits(UITableCell, _UIView);

    function UITableCell() {
        var _Object$getPrototypeO;

        _classCallCheck(this, UITableCell);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        var _this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(UITableCell)).call.apply(_Object$getPrototypeO, [this].concat(args)));

        _this.handleClick = _this.handleClick.bind(_this);
        return _this;
    }

    _createClass(UITableCell, [{
        key: 'handleClick',
        value: function handleClick(event) {
            if (this.props.onInteract) {
                event.persist();

                this.props.onInteract(event, this.props.row, this.props.content);
            }
        }
    }, {
        key: 'renderContent',
        value: function renderContent() {
            if (typeof this.props.width === 'number') {
                return _react2.default.createElement('div', { className: 'ui-table-cell-inner' }, _react2.default.createElement('span', { className: 'ui-table-cell-inner-text' }, this.props.content));
            }

            return this.props.content;
        }
    }, {
        key: 'render',
        value: function render() {
            var addTitle = typeof this.props.content === 'string';

            return _react2.default.createElement('div', { className: 'ui-table-cell',
                title: addTitle ? this.props.content : null,
                style: { width: this.props.width ? this.props.width + 'px' : null },
                onClick: this.handleClick }, this.renderContent());
        }
    }]);

    return UITableCell;
})(_UIView3.default);

UITableCell.propTypes = {
    content: _react2.default.PropTypes.node,
    width: _react2.default.PropTypes.number,
    onInteract: _react2.default.PropTypes.func,
    row: _react2.default.PropTypes.object
};

exports.default = UITableCell;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"../UIView":23}],15:[function(require,module,exports){
(function (global){
'use strict';

function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }

var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
            }
        }
    }return target;
};

var _createClass = (function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
})();

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null;

var _react2 = _interopRequireDefault(_react);

var _UIView2 = require('../UIView');

var _UIView3 = _interopRequireDefault(_UIView2);

var _row = require('./row');

var _row2 = _interopRequireDefault(_row);

var _transform = require('../UIUtils/transform');

var _transform2 = _interopRequireDefault(_transform);

var _noop = require('../UIUtils/noop');

var _noop2 = _interopRequireDefault(_noop);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
    } else {
        obj[key] = value;
    }return obj;
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
} /**
   * A high-performance, infinite table view.
   * @class UITable
   */

/**
 * FOR FUTURE EYES
 *
 * There are a lot of places where shared this.{name} variables have been
 * used where they don't seem to be needed. This is completely on purpose to
 * reduce memory pressure during scroll operations. If you change them back to
 * normal vars, you'll see the sawtoothing in your JS profiler... so don't do it!
 */

/**
 * ORDER OF OPERATIONS
 *
 * 1. initial render w/ one row of cells
 * 2. capture table & cell sizing metrics
 * 3. apply widths to column definitions
 * 4. render pass 2 w/ column heads and the rest of the cells
 */

/** @ignore */
var findWhere = function findWhere(array, property, value) {
    var index = array.length - 1;

    while (index > -1) {
        if (array[index][property] === value) {
            return array[index];
        }

        index -= 1;
    }
}; // optimized specifically to only look for a single key:value match

var UITable = (function (_UIView) {
    _inherits(UITable, _UIView);

    function UITable() {
        var _Object$getPrototypeO;

        _classCallCheck(this, UITable);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        var _this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(UITable)).call.apply(_Object$getPrototypeO, [this].concat(args)));

        _this.handleRowClick = _this.handleRowClick.bind(_this);
        _this.handleKeyDown = _this.handleKeyDown.bind(_this);
        _this.handleDragMove = _this.handleDragMove.bind(_this);
        _this.handleDragEnd = _this.handleDragEnd.bind(_this);
        _this.handleMoveIntent = _this.handleMoveIntent.bind(_this);

        _this.handleXScrollerDragStart = _this.handleXScrollerDragStart.bind(_this);
        _this.handleYScrollerDragStart = _this.handleYScrollerDragStart.bind(_this);
        _this.handleColumnDragStart = _this.handleColumnDragStart.bind(_this);
        return _this;
    }

    _createClass(UITable, [{
        key: 'initialState',
        value: function initialState() {
            return {
                ariaSpokenOutput: '',
                chokeRender: true,
                currentActiveRowIndex: -1,
                rows: [{
                    data: this.props.getRow(0),
                    setIndex: 0,
                    y: 0
                }],
                rowsOrderedByY: [0],
                columns: this.props.columns.slice(0),
                xScrollerNubSize: null,
                yScrollerNubSize: null
            };
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.xCurrent = this.yCurrent = 0;
            this.xNext = this.yNext = null;
            this.yScrollNubPosition = 0;

            // temporary variables in various calculations
            this.cache_iterator = null;
            this.cache_nextActiveRow = null;
            this.cache_nRowsToShift = null;
            this.cache_orderedYArrayTargetIndex = null;
            this.cache_rowPointer = null;
            this.cache_shiftDelta = null;
            this.cache_targetIndex = null;

            this.captureDimensions();
        }
    }, {
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate() {
            /* so we can reuse state.rows to avoid extra array allocations in the scroll handlers - in this case a few more CPU cycles are far cheaper than running up against the GC */
            return true;
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            if (this.refs.head && typeof this.minimumColumnWidth === 'undefined') {
                var node = this.refs.wrapper.getElementsByClassName('ui-table-header-cell')[0];

                if (node) {
                    var nodeStyle = window.getComputedStyle(node);

                    // will be NaN if not a pixel value
                    this.maximumColumnWidth = parseInt(nodeStyle.maxWidth, 10);
                    this.minimumColumnWidth = parseInt(nodeStyle.minWidth, 10);
                }
            }
        }
    }, {
        key: 'calculateXScrollerNubSize',
        value: function calculateXScrollerNubSize() {
            var px = this.containerWidth - Math.abs(this.xMaximumTranslation);

            return px < 12 ? 12 : px;
        }
    }, {
        key: 'calculateYScrollerNubSize',
        value: function calculateYScrollerNubSize() {
            var px = this.rowEndIndex / this.props.totalRows;

            return px < 12 ? 12 : px;
        }
    }, {
        key: 'captureDimensions',
        value: function captureDimensions() {
            var firstRow = this.refs.body.getElementsByClassName('ui-table-row')[0];
            var firstRowCells = firstRow.getElementsByClassName('ui-table-cell');
            var container = this.refs.wrapper;

            /* The fallback amounts are for unit testing, the browser will always have
            an actual number. */

            this.cellHeight = firstRowCells[0].clientHeight || 40;
            this.containerHeight = container.clientHeight || 150;
            this.containerWidth = container.clientWidth || 500;

            this.nRowsToRender = Math.ceil(this.containerHeight * 1.3 / this.cellHeight);

            this.rowStartIndex = 0;
            this.rowEndIndex = this.nRowsToRender;

            var tableWidth = firstRow.clientWidth || 500;

            this.xMaximumTranslation = this.containerWidth > tableWidth ? 0 : this.containerWidth - tableWidth;

            this.yUpperBound = 0;
            this.yLowerBound = this.containerHeight - this.nRowsToRender * this.cellHeight;

            var adjustedColumns = this.state.columns.map(function discoverWidth(column, index) {
                return _extends({}, column, {
                    width: Math.ceil(firstRowCells[index].getBoundingClientRect().width)
                });
            });

            var generatedRows = [];
            var rowsOrderedByY = [];

            for (var i = 0; i < this.nRowsToRender; i += 1) {
                generatedRows.push({
                    data: this.props.getRow(i),
                    setIndex: i,
                    y: this.cellHeight * i
                });

                rowsOrderedByY.push(i);
            }

            this.setState({
                chokeRender: false,
                columns: adjustedColumns,
                rows: generatedRows,
                rowsOrderedByY: rowsOrderedByY,
                xScrollerNubSize: this.calculateXScrollerNubSize(),
                yScrollerNubSize: this.calculateYScrollerNubSize()
            });
        }
    }, {
        key: 'handleScrollDown',
        value: function handleScrollDown() {
            if (this.rowEndIndex === this.props.totalRows || this.yNext >= this.yLowerBound) {
                return;
            }

            /* Scrolling down, so we want to move the lowest Y value to the yLowerBound and request the next row. Scale appropriately if a big delta and migrate as many rows as are necessary. */

            this.cache_nRowsToShift = Math.ceil(Math.abs(this.yNext - this.yLowerBound) / this.cellHeight);

            if (this.cache_nRowsToShift + this.rowEndIndex > this.props.totalRows) {
                /* more rows than there is data available, truncate */
                this.cache_nRowsToShift = this.props.totalRows - this.rowEndIndex;
            }

            if (this.cache_nRowsToShift > 0) {
                if (this.cache_nRowsToShift > this.nRowsToRender) {
                    /* a very large scroll delta, calculate where the boundaries should be */
                    this.cache_shiftDelta = this.cache_nRowsToShift - this.nRowsToRender;

                    this.yUpperBound -= this.cache_shiftDelta * this.cellHeight;
                    this.yLowerBound -= this.cache_shiftDelta * this.cellHeight;

                    this.rowStartIndex += this.cache_shiftDelta;
                    this.rowEndIndex += this.cache_shiftDelta;

                    this.cache_nRowsToShift = this.nRowsToRender;
                }

                if (this.cache_nRowsToShift > 0) {
                    /* move the lowest Y-value rows to the bottom of the ordering array */
                    this.cache_orderedYArrayTargetIndex = 0;

                    for (this.cache_iterator = 0; this.cache_iterator < this.cache_nRowsToShift; this.cache_iterator++) {
                        this.cache_targetIndex = this.rowEndIndex + this.cache_iterator;

                        this.cache_rowPointer = this.state.rows[this.state.rowsOrderedByY[this.cache_orderedYArrayTargetIndex]];
                        this.cache_rowPointer.data = this.props.getRow(this.cache_targetIndex);
                        this.cache_rowPointer.setIndex = this.cache_targetIndex;
                        this.cache_rowPointer.y = this.cache_targetIndex * this.cellHeight;

                        this.state.rowsOrderedByY.push(this.state.rowsOrderedByY.shift());
                    }

                    this.rowStartIndex += this.cache_nRowsToShift;
                    this.rowEndIndex += this.cache_nRowsToShift;

                    this.yUpperBound -= this.cache_nRowsToShift * this.cellHeight;
                    this.yLowerBound -= this.cache_nRowsToShift * this.cellHeight;

                    this.setState({ rows: this.state.rows });
                }
            }
        }
    }, {
        key: 'handleScrollUp',
        value: function handleScrollUp() {
            if (this.rowStartIndex === 0 || this.yNext <= this.yUpperBound) {
                return;
            }

            /* Scrolling up, so we want to move the highest Y value to the yUpperBound and request the previous row. Scale appropriately if a big delta and migrate as many rows as are necessary. */

            this.cache_nRowsToShift = Math.ceil(Math.abs(this.yNext - this.yUpperBound) / this.cellHeight);

            if (this.rowStartIndex - this.cache_nRowsToShift < 0) {
                this.cache_nRowsToShift = this.rowStartIndex;
            }

            if (this.cache_nRowsToShift > 0) {
                if (this.cache_nRowsToShift > this.nRowsToRender) {
                    /* a very large scroll delta, calculate where the boundaries should be */
                    this.cache_shiftDelta = this.cache_nRowsToShift - this.nRowsToRender;

                    this.yUpperBound += this.cache_shiftDelta * this.cellHeight;
                    this.yLowerBound += this.cache_shiftDelta * this.cellHeight;

                    this.rowStartIndex -= this.cache_shiftDelta;
                    this.rowEndIndex -= this.cache_shiftDelta;

                    this.cache_nRowsToShift = this.nRowsToRender;
                }

                if (this.cache_nRowsToShift > 0) {
                    /* move the highest Y-value rows to the top of the ordering array */
                    this.cache_orderedYArrayTargetIndex = this.state.rowsOrderedByY.length - 1;

                    for (this.cache_iterator = 0; this.cache_iterator < this.cache_nRowsToShift; this.cache_iterator++) {
                        this.cache_targetIndex = this.rowStartIndex - this.cache_iterator - 1;

                        this.cache_rowPointer = this.state.rows[this.state.rowsOrderedByY[this.cache_orderedYArrayTargetIndex]];
                        this.cache_rowPointer.data = this.props.getRow(this.cache_targetIndex);
                        this.cache_rowPointer.setIndex = this.cache_targetIndex;
                        this.cache_rowPointer.y = this.cache_targetIndex * this.cellHeight;

                        this.state.rowsOrderedByY.unshift(this.state.rowsOrderedByY.pop());
                    }

                    this.rowStartIndex -= this.cache_nRowsToShift;
                    this.rowEndIndex -= this.cache_nRowsToShift;

                    this.yUpperBound += this.cache_nRowsToShift * this.cellHeight;
                    this.yLowerBound += this.cache_nRowsToShift * this.cellHeight;

                    this.setState({ rows: this.state.rows });
                }
            }
        }
    }, {
        key: 'handleMoveIntent',
        value: function handleMoveIntent(event) {
            event.preventDefault();

            if (event.deltaX === 0 && event.deltaY === 0 || this.manuallyScrollingY && event.deltaY === 0 || this.manuallyScrollingX && event.deltaX === 0) {
                return;
            }

            /* lock the translation axis if the user is manipulating the synthetic scrollbars */
            this.xNext = this.manuallyScrollingY ? 0 : this.xCurrent - event.deltaX;

            if (this.xNext > 0) {
                this.xNext = 0;
            } else if (this.xNext < this.xMaximumTranslation) {
                this.xNext = this.xMaximumTranslation;
            }

            this.yNext = this.manuallyScrollingX ? 0 : this.yCurrent - event.deltaY;

            if (this.yNext < this.yCurrent) {
                this.handleScrollDown();
            } else if (this.yNext > this.yCurrent) {
                this.handleScrollUp();
            }

            if (this.yNext > 0) {
                this.yNext = 0;
            } else if (this.yNext < this.yLowerBound) {
                this.yNext = this.yLowerBound;
            }

            if (this.xNext !== this.xCurrent) {
                this.refs.head.style[_transform2.default] = 'translate3d(' + this.xNext + 'px, 0px, 0px)';
            }

            /* Move wrapper */
            this.refs.body.style[_transform2.default] = 'translate3d(' + this.xNext + 'px, ' + this.yNext + 'px, 0px)';

            /* move scrollbar nubs */
            this.refs.xScrollerNub.style[_transform2.default] = 'translate3d(' + Math.abs(this.xNext) + 'px, 0px, 0px)';

            this.yScrollNubPosition = this.rowStartIndex / this.props.totalRows * this.containerHeight;

            if (this.yScrollNubPosition + this.state.yScrollerNubSize > this.containerHeight) {
                this.yScrollNubPosition = this.containerHeight - this.state.yScrollerNubSize;
            }

            this.refs.yScrollerNub.style[_transform2.default] = 'translate3d(0px, ' + this.yScrollNubPosition + 'px, 0px)';

            this.xCurrent = this.xNext;
            this.yCurrent = this.yNext;
        }
    }, {
        key: 'handleColumnResize',
        value: function handleColumnResize(delta) {
            var _this2 = this;

            if (delta === 0) {
                return;
            }

            var adjustedDelta = delta;
            var newTableWidth = 0;

            var copy = this.state.columns.map(function (definition) {
                if (definition.mapping !== _this2.manuallyResizingColumn.mapping) {
                    newTableWidth += definition.width;

                    return definition;
                }

                /* Before any measurements are applied, first we need to compare the delta to the known cell width thresholds and scale appropriately. */

                if (adjustedDelta < 0 && !isNaN(_this2.minimumColumnWidth) && definition.width + adjustedDelta < _this2.minimumColumnWidth) {
                    adjustedDelta = _this2.minimumColumnWidth - definition.width;
                } else if (!isNaN(_this2.maximumColumnWidth) && definition.width + adjustedDelta > _this2.maximumColumnWidth) {
                    adjustedDelta = _this2.maximumColumnWidth - definition.width;
                }

                newTableWidth += definition.width + adjustedDelta;

                return _extends({}, definition, {
                    width: definition.width + adjustedDelta
                });
            });

            if (newTableWidth <= this.containerWidth) {
                this.xMaximumTranslation = 0;
            } else {
                this.xMaximumTranslation -= adjustedDelta;
            }

            this.setState({
                columns: copy,
                xScrollerNubSize: this.calculateXScrollerNubSize()
            }, function () {
                /* If a column shrinks, the wrapper X translation needs to be adjusted accordingly or
                we'll see unwanted whitespace on the right side. If the table width becomes smaller than the overall container, whitespace will appear regardless. */
                if (adjustedDelta < 0) {
                    _this2.handleMoveIntent({
                        deltaX: adjustedDelta,
                        deltaY: 0,
                        preventDefault: _noop2.default
                    });
                }
            });
        }
    }, {
        key: 'handleColumnDragStart',
        value: function handleColumnDragStart(event) {
            if (event.button === 0) {
                this.lastColumnX = event.clientX;
                this.manuallyResizingColumn = this.state.columns[event.target.getAttribute('data-column-index')];
            }
        }
    }, {
        key: 'handleXScrollerDragStart',
        value: function handleXScrollerDragStart(event) {
            if (event.button === 0) {
                this.lastXScroll = event.clientX;
                this.manuallyScrollingX = true;
            }
        }
    }, {
        key: 'handleYScrollerDragStart',
        value: function handleYScrollerDragStart(event) {
            if (event.button === 0) {
                this.lastYScroll = event.clientY;
                this.manuallyScrollingY = true;
            }
        }
    }, {
        key: 'handleDragMove',
        value: function handleDragMove(event) {
            if (event.button === 0) {
                if (this.manuallyResizingColumn) {
                    this.handleColumnResize(event.clientX - this.lastColumnX);

                    this.lastColumnX = event.clientX;
                }

                if (this.manuallyScrollingX) {
                    this.handleMoveIntent({
                        deltaX: event.clientX - this.lastXScroll,
                        deltaY: 0,
                        preventDefault: _noop2.default
                    });

                    this.lastXScroll = event.clientX;
                }

                if (this.manuallyScrollingY) {
                    this.handleMoveIntent({
                        deltaX: 0,
                        deltaY: (event.clientY - this.lastYScroll) / this.containerHeight * this.props.totalRows * this.cellHeight,
                        preventDefault: _noop2.default
                    });

                    this.lastYScroll = event.clientY;
                }
            }
        }
    }, {
        key: 'handleDragEnd',
        value: function handleDragEnd() {
            if (this.manuallyResizingColumn) {
                this.manuallyResizingColumn = null;
            }

            if (this.manuallyScrollingX) {
                this.manuallyScrollingX = false;
            }

            if (this.manuallyScrollingY) {
                this.manuallyScrollingY = false;
            }
        }
    }, {
        key: 'handleRowClick',
        value: function handleRowClick(event, clickedRowData) {
            if (this.props.onRowInteract) {
                event.persist();
                this.props.onRowInteract(event, clickedRowData);
            }

            this.setState({
                currentActiveRowIndex: findWhere(this.state.rows, 'data', clickedRowData).setIndex
            });
        }
    }, {
        key: 'renderRows',
        value: function renderRows() {
            var _this3 = this;

            return this.state.rows.map(function (row, index) {
                return _react2.default.createElement(_row2.default, { key: index,
                    active: row.setIndex === _this3.state.currentActiveRowIndex,
                    columns: _this3.state.columns,
                    data: row.data,
                    even: row.setIndex % 2 === 0,
                    y: row.y,
                    onInteract: _this3.handleRowClick,
                    onCellInteract: _this3.props.onCellInteract });
            });
        }
    }, {
        key: 'renderBody',
        value: function renderBody() {
            return _react2.default.createElement('div', { ref: 'body',
                className: 'ui-table-body' }, this.renderRows());
        }
    }, {
        key: 'renderHead',
        value: function renderHead() {
            var _this4 = this;

            if (!this.state.chokeRender) {
                return _react2.default.createElement('div', { ref: 'head', className: 'ui-table-header' }, _react2.default.createElement('div', { className: 'ui-table-row ui-table-header-row' }, this.state.columns.map(function (column, index) {
                    return _react2.default.createElement('div', { key: index,
                        className: 'ui-table-cell ui-table-header-cell',
                        style: { width: typeof column.width === 'number' ? column.width : null } }, _react2.default.createElement('div', { className: 'ui-table-cell-inner' }, _react2.default.createElement('span', { className: 'ui-table-cell-inner-text' }, column.title)), _react2.default.createElement('div', { className: 'ui-table-header-cell-resize-handle',
                        'data-column-index': index,
                        onMouseDown: _this4.handleColumnDragStart }));
                })));
            }
        }
    }, {
        key: 'renderScrollbars',
        value: function renderScrollbars() {
            return _react2.default.createElement('div', null, _react2.default.createElement('div', { className: 'ui-table-x-scroller',
                onMouseDown: this.handleXScrollerDragStart }, _react2.default.createElement('div', { ref: 'xScrollerNub',
                className: 'ui-table-x-scroller-nub',
                style: { width: this.state.xScrollerNubSize } })), _react2.default.createElement('div', { className: 'ui-table-y-scroller',
                onMouseDown: this.handleYScrollerDragStart }, _react2.default.createElement('div', { ref: 'yScrollerNub',
                className: 'ui-table-y-scroller-nub',
                style: { height: this.state.yScrollerNubSize } })));
        }
    }, {
        key: 'changeActiveRow',
        value: function changeActiveRow(delta) {
            var _this5 = this;

            this.cache_nextActiveRow = findWhere(this.state.rows, 'setIndex', this.state.currentActiveRowIndex + delta);

            if (this.cache_nextActiveRow) {
                this.setState({
                    ariaSpokenOutput: this.cache_nextActiveRow.data[this.state.columns[0].mapping],
                    currentActiveRowIndex: this.cache_nextActiveRow.setIndex
                });

                if (delta === -1 && this.cache_nextActiveRow.y * -1 > this.yCurrent || delta === 1 && this.cache_nextActiveRow.y * -1 - this.cellHeight < this.yCurrent - this.containerHeight + this.cellHeight // 1 unit of cellHeight is removed to compensate for the header row
                ) {
                        // Destination row is outside the viewport, so simulate a scroll
                        this.handleMoveIntent({
                            deltaX: 0,
                            deltaY: this.cellHeight * delta,
                            preventDefault: _noop2.default
                        });
                    }
            } else if (delta === -1 && this.state.currentActiveRowIndex > 0 || delta === 1 && this.state.currentActiveRowIndex < this.props.totalRows) {
                /*
                    The destination row isn't rendered, so we need to translate enough rows for it to feasibly be shown
                    in the viewport.
                 */
                this.handleMoveIntent({
                    deltaX: 0,
                    deltaY: (this.rowStartIndex > this.state.currentActiveRowIndex && this.state.currentActiveRowIndex - this.rowStartIndex || (this.rowStartIndex < this.state.currentActiveRowIndex && this.state.currentActiveRowIndex - this.rowStartIndex) + delta) * this.cellHeight,
                    preventDefault: _noop2.default
                });

                // start the process again, now that the row is available
                window.requestAnimationFrame(function () {
                    return _this5.changeActiveRow(delta);
                });
            }

            this.cache_nextActiveRow = null;
        }
    }, {
        key: 'ariaExposeFullRowData',
        value: function ariaExposeFullRowData() {
            var row = findWhere(this.state.rows, 'setIndex', this.state.currentActiveRowIndex);

            if (row) {
                this.setState({
                    ariaSpokenOutput: this.state.columns.map(function (column) {
                        return column.title + ': ' + row.data[column.mapping];
                    }).join('\n')
                });
            }
        }
    }, {
        key: 'handleKeyDown',
        value: function handleKeyDown(event) {
            switch (event.key) {
                case 'ArrowDown':
                    this.changeActiveRow(1);
                    event.preventDefault();
                    break;
                case 'ArrowUp':
                    this.changeActiveRow(-1);
                    event.preventDefault();
                    break;
                case 'Enter':
                    this.ariaExposeFullRowData();
                    event.preventDefault();
                    break;
            }

            if (typeof this.props.onKeyDown === 'function') {
                event.persist();
                this.props.onKeyDown(event);
            }
        }
    }, {
        key: 'renderNotification',
        value: function renderNotification() {
            return _react2.default.createElement('div', { ref: 'aria',
                className: this.props.offscreenClass,
                'aria-live': 'polite' }, this.state.ariaSpokenOutput);
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement('div', _extends({}, this.props, {
                ref: 'wrapper',
                className: (0, _classnames2.default)(_defineProperty({
                    'ui-table-wrapper': true
                }, this.props.className, !!this.props.className)),
                onKeyDown: this.handleKeyDown,
                onMouseMove: this.handleDragMove,
                onMouseUp: this.handleDragEnd,
                onWheel: this.handleMoveIntent,
                tabIndex: '0' }), _react2.default.createElement('div', { ref: 'table',
                className: 'ui-table' }, this.renderHead(), this.renderBody()), this.renderNotification(), this.renderScrollbars());
        }
    }]);

    return UITable;
})(_UIView3.default);

UITable.propTypes = {
    columns: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.shape({
        mapping: _react2.default.PropTypes.string,
        resizable: _react2.default.PropTypes.bool,
        title: _react2.default.PropTypes.string,
        width: _react2.default.PropTypes.number
    })),
    getRow: _react2.default.PropTypes.func,
    offscreenClass: _react2.default.PropTypes.string,
    onCellInteract: _react2.default.PropTypes.func,
    onRowInteract: _react2.default.PropTypes.func,
    totalRows: _react2.default.PropTypes.number
};

UITable.defaultProps = {
    columns: [],
    getRow: _noop2.default,
    offscreenClass: 'ui-offscreen'
};

exports.default = UITable;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"../UIUtils/noop":20,"../UIUtils/transform":22,"../UIView":23,"./row":16,"classnames":24}],16:[function(require,module,exports){
(function (global){
'use strict';

function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }

var _createClass = (function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
})();

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null;

var _react2 = _interopRequireDefault(_react);

var _UIView2 = require('../UIView');

var _UIView3 = _interopRequireDefault(_UIView2);

var _cell = require('./cell');

var _cell2 = _interopRequireDefault(_cell);

var _transform = require('../UIUtils/transform');

var _transform2 = _interopRequireDefault(_transform);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
    } else {
        obj[key] = value;
    }return obj;
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var UITableRow = (function (_UIView) {
    _inherits(UITableRow, _UIView);

    function UITableRow() {
        var _Object$getPrototypeO;

        _classCallCheck(this, UITableRow);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        var _this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(UITableRow)).call.apply(_Object$getPrototypeO, [this].concat(args)));

        _this.handleClick = _this.handleClick.bind(_this);
        return _this;
    }

    _createClass(UITableRow, [{
        key: 'initialState',
        value: function initialState() {
            return {
                data: this.props.data
            };
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (nextProps.data !== this.props.data) {
                this.setState({ data: nextProps.data });
            }
        }
    }, {
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate() {
            return true;
        }
    }, {
        key: 'waitForContentIfNecessary',
        value: function waitForContentIfNecessary() {
            if (this.state.data instanceof Promise) {
                this.state.data.then((function cautiouslySetRowData(promise, value) {
                    if (this.state.data === promise) {
                        this.setState({ data: value });
                    } // only replace if we're looking at the same promise, otherwise do nothing
                }).bind(this, this.state.data));
            }
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.waitForContentIfNecessary();
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            this.waitForContentIfNecessary();
        }
    }, {
        key: 'getClasses',
        value: function getClasses() {
            var classes = 'ui-table-row';

            if (this.props.even) {
                classes += ' ui-table-row-even';
            } else {
                classes += ' ui-table-row-odd';
            }

            if (this.state.data instanceof Promise) {
                classes += ' ui-table-row-loading';
            }

            if (this.props.active) {
                classes += ' ui-table-row-active';
            }

            return classes;
        }
    }, {
        key: 'renderCells',
        value: function renderCells() {
            var _this2 = this;

            var data = this.state.data instanceof Promise ? {} : this.state.data;

            if (data) {
                return this.props.columns.map(function (definition, index) {
                    return _react2.default.createElement(_cell2.default, { key: index,
                        content: data[definition.mapping],
                        width: definition.width,
                        onInteract: _this2.props.onCellInteract,
                        row: _this2.state.data });
                });
            }
        }
    }, {
        key: 'handleClick',
        value: function handleClick(event) {
            if (this.props.onInteract) {
                event.persist();
                this.props.onInteract(event, this.state.data);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement('div', { className: this.getClasses(),
                style: _defineProperty({}, _transform2.default, this.props.y ? 'translate3d(0px, ' + this.props.y + 'px, 0px)' : null),
                onClick: this.handleClick }, this.renderCells());
        }
    }]);

    return UITableRow;
})(_UIView3.default);

UITableRow.propTypes = {
    columns: _react2.default.PropTypes.array,
    even: _react2.default.PropTypes.bool,
    data: _react2.default.PropTypes.object,
    onCellInteract: _react2.default.PropTypes.func,
    onInteract: _react2.default.PropTypes.func,
    y: _react2.default.PropTypes.number
};

exports.default = UITableRow;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"../UIUtils/transform":22,"../UIView":23,"./cell":14}],17:[function(require,module,exports){
(function (global){
'use strict';

function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }

var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
            }
        }
    }return target;
};

var _createClass = (function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
})();

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null;

var _react2 = _interopRequireDefault(_react);

var _UITypeaheadInput = require('../UITypeaheadInput');

var _UITypeaheadInput2 = _interopRequireDefault(_UITypeaheadInput);

var _UIView2 = require('../UIView');

var _UIView3 = _interopRequireDefault(_UIView2);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _noop = require('../UIUtils/noop');

var _noop2 = _interopRequireDefault(_noop);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
    } else {
        obj[key] = value;
    }return obj;
}

function _toConsumableArray(arr) {
    if (Array.isArray(arr)) {
        for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
            arr2[i] = arr[i];
        }return arr2;
    } else {
        return Array.from(arr);
    }
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
} /**
   * Distill rich entity data matched via typeahead input into simple visual abstractions.
   * @class UITokenizedInput
   */

var first = function getFirstArrayItem(array) {
    return array[0];
};

var last = function getLastArrayItem(array) {
    return array[array.length - 1];
};

var without = function rejectSomeArrayItems(baseArray) {
    for (var _len = arguments.length, toBeExcluded = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        toBeExcluded[_key - 1] = arguments[_key];
    }

    return baseArray.filter(function rejectSome(item) {
        return toBeExcluded.indexOf(item) === -1;
    });
};

var UITokenizedInput = (function (_UIView) {
    _inherits(UITokenizedInput, _UIView);

    function UITokenizedInput() {
        _classCallCheck(this, UITokenizedInput);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(UITokenizedInput).apply(this, arguments));
    }

    _createClass(UITokenizedInput, [{
        key: 'initialState',
        value: function initialState() {
            return {
                tokenizedEntityIndicesSelected: [],
                tokenizedEntityIndices: []
            };
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps, prevState) {
            var _this2 = this;

            var previousIndices = prevState.tokenizedEntityIndices;
            var previousSelectedIndices = prevState.tokenizedEntityIndicesSelected;
            var currentIndices = this.state.tokenizedEntityIndices;
            var currentSelectedIndices = this.state.tokenizedEntityIndicesSelected;

            if (previousIndices !== currentIndices) {
                this.props.onTokenChange(currentSelectedIndices.map(function (index) {
                    return _this2.props.entities[index];
                }));
            }

            if (previousSelectedIndices !== currentSelectedIndices) {
                // move focus
                if (currentSelectedIndices.length === 0) {
                    return;
                } else if (currentSelectedIndices.length === 1 || currentSelectedIndices[0] !== previousSelectedIndices[0] /* multi selection, leftward */) {
                        this.refs['token_' + currentSelectedIndices[0]].focus();
                    } else if (last(currentSelectedIndices) !== last(previousSelectedIndices) /* multi selection, rightward */) {
                        this.refs['token_' + last(currentSelectedIndices)].focus();
                    }
            }
        }
    }, {
        key: 'handleEntitySelected',
        value: function handleEntitySelected(index) {
            if (this.state.tokenizedEntityIndices.indexOf(index) === -1) {
                this.setState({ tokenizedEntityIndices: this.state.tokenizedEntityIndices.concat(index) });
            }
        }
    }, {
        key: 'handleInputFocus',
        value: function handleInputFocus(event) {
            this.setState({ tokenizedEntityIndicesSelected: [] });

            if (typeof this.props.inputProps.onFocus === 'function') {
                event.persist();
                this.props.inputProps.onFocus(event);
            }
        }
    }, {
        key: 'selectPreviousToken',
        value: function selectPreviousToken(append) {
            var selected = this.state.tokenizedEntityIndicesSelected;
            var indices = this.state.tokenizedEntityIndices;

            if (selected.length === 1 && first(selected) === first(indices)) {
                return; // already at leftmost bound
            }

            if (selected.length === 0) {
                // pick the rightmost
                this.setState({
                    tokenizedEntityIndicesSelected: [last(indices)]
                });
            } else {
                // add the next leftmost to a reconstructed "selected" array
                var previousToken = indices[indices.indexOf(first(selected)) - 1];

                this.setState({
                    tokenizedEntityIndicesSelected: append ? [previousToken].concat(selected) : [previousToken]
                });
            }
        }
    }, {
        key: 'selectNextToken',
        value: function selectNextToken(append) {
            var selected = this.state.tokenizedEntityIndicesSelected;
            var indices = this.state.tokenizedEntityIndices;

            if (selected.length === 0) {
                return;
            }

            if (last(selected) === last(indices)) {
                this.setState({
                    tokenizedEntityIndicesSelected: []
                });

                this.refs.typeahead.focusInput();
            } else {
                var nextToken = indices[indices.indexOf(last(selected)) + 1];

                this.setState({
                    tokenizedEntityIndicesSelected: append ? selected.concat(nextToken) : [nextToken]
                });
            }
        }
    }, {
        key: 'handleKeyDown',
        value: function handleKeyDown(event) {
            switch (event.key) {
                case 'ArrowLeft':
                    this.selectPreviousToken(event.shiftKey);
                    break;

                case 'ArrowRight':
                    this.selectNextToken(event.shiftKey);
                    break;

                case 'Backspace':
                    if (this.state.tokenizedEntityIndicesSelected.length) {
                        event.preventDefault();
                        this.setState({
                            tokenizedEntityIndices: without.apply(undefined, [this.state.tokenizedEntityIndices].concat(_toConsumableArray(this.state.tokenizedEntityIndicesSelected))),
                            tokenizedEntityIndicesSelected: []
                        });

                        this.refs.typeahead.focusInput();
                    }

                    break;
            }

            if (typeof this.props.onKeyDown === 'function') {
                event.persist();
                this.props.onKeyDown(event);
            }
        }
    }, {
        key: 'handleTokenCloseClick',
        value: function handleTokenCloseClick(index) {
            this.setState({
                tokenizedEntityIndices: without(this.state.tokenizedEntityIndices, index),
                tokenizedEntityIndicesSelected: without(this.state.tokenizedEntityIndicesSelected, index)
            });
        }
    }, {
        key: 'renderTokenClose',
        value: function renderTokenClose(index) {
            if (this.props.showTokenClose) {
                return _react2.default.createElement('div', { className: 'ui-tokenfield-token-close',
                    onClick: this.handleTokenCloseClick.bind(this, index) });
            }
        }
    }, {
        key: 'selectSingleToken',
        value: function selectSingleToken(index) {
            if (this.state.tokenizedEntityIndicesSelected.indexOf(index) === -1 || this.state.tokenizedEntityIndicesSelected.length > 1) {
                this.setState({
                    tokenizedEntityIndicesSelected: [index]
                });
            }
        }
    }, {
        key: 'handleTokenKeyDown',
        value: function handleTokenKeyDown(index, event) {
            switch (event.key) {
                case 'Enter':
                case 'Space':
                    this.selectSingleToken(index);
            }
        }
    }, {
        key: 'renderTokens',
        value: function renderTokens() {
            var _this3 = this;

            return _react2.default.createElement('div', { className: 'ui-tokenfield-tokens' }, this.state.tokenizedEntityIndices.map(function (index) {
                return _react2.default.createElement('div', { ref: 'token_' + index,
                    key: index,
                    className: (0, _classnames2.default)({
                        'ui-tokenfield-token': true,
                        'ui-tokenfield-token-selected': _this3.state.tokenizedEntityIndicesSelected.indexOf(index) !== -1
                    }),
                    onClick: _this3.selectSingleToken.bind(_this3, index),
                    onKeyDown: _this3.handleTokenKeyDown.bind(_this3, index),
                    tabIndex: '0' }, _this3.props.entities[index].content, _this3.renderTokenClose(index));
            }));
        }
    }, {
        key: 'render',
        value: function render() {
            var _this4 = this;

            var descendants = Object.keys(_UITypeaheadInput2.default.propTypes).reduce(function (props, key) {
                props[key] = _this4.props[key];

                return props;
            }, {});

            return _react2.default.createElement('div', _extends({}, this.props, {
                ref: 'wrapper',
                className: (0, _classnames2.default)(_defineProperty({
                    'ui-tokenfield-wrapper': true
                }, this.props.className, !!this.props.className)),
                onKeyDown: this.handleKeyDown.bind(this) }), this.renderTokens(), _react2.default.createElement(_UITypeaheadInput2.default, _extends({}, descendants, {
                ref: 'typeahead',
                className: 'ui-tokenfield',
                onEntitySelected: this.handleEntitySelected.bind(this),
                onFocus: this.handleInputFocus.bind(this),
                clearPartialInputOnSelection: true })));
        }
    }]);

    return UITokenizedInput;
})(_UIView3.default);

UITokenizedInput.propTypes = _extends({}, _UITypeaheadInput2.default.propTypes, {
    onTokenChange: _react2.default.PropTypes.func,
    showTokenClose: _react2.default.PropTypes.bool
});

UITokenizedInput.defaultProps = _extends({}, _UITypeaheadInput2.default.defaultProps, {
    onTokenChange: _noop2.default,
    showTokenClose: true
});

exports.default = UITokenizedInput;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"../UITypeaheadInput":19,"../UIUtils/noop":20,"../UIView":23,"classnames":24}],18:[function(require,module,exports){
(function (global){
'use strict';

function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }

var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
            }
        }
    }return target;
};

var _createClass = (function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
})();

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null;

var _react2 = _interopRequireDefault(_react);

var _reactDom = typeof window !== "undefined" ? window['ReactDOM'] : typeof global !== "undefined" ? global['ReactDOM'] : null;

var _reactDom2 = _interopRequireDefault(_reactDom);

var _UIView2 = require('../UIView');

var _UIView3 = _interopRequireDefault(_UIView2);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
    } else {
        obj[key] = value;
    }return obj;
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
} /**
   * A wrapper that displays provided text on hover.
   * @class UITooltip
   */

var UITooltip = (function (_UIView) {
    _inherits(UITooltip, _UIView);

    function UITooltip() {
        _classCallCheck(this, UITooltip);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(UITooltip).apply(this, arguments));
    }

    _createClass(UITooltip, [{
        key: 'render',
        value: function render() {
            var position = this.props.position;

            return _react2.default.createElement('div', _extends({}, this.props, {
                className: (0, _classnames2.default)(_defineProperty({
                    'ui-tooltip': true,
                    'ui-tooltip-position-above': position === UITooltip.position.ABOVE,
                    'ui-tooltip-position-below': position === UITooltip.position.BELOW,
                    'ui-tooltip-position-before': position === UITooltip.position.BEFORE,
                    'ui-tooltip-position-after': position === UITooltip.position.AFTER
                }, this.props.className, !!this.props.className)),
                'data-tooltip': this.props.text,
                'aria-label': this.props['aria-label'] || this.props.text }), this.props.children);
        }
    }]);

    return UITooltip;
})(_UIView3.default);

UITooltip.position = {
    ABOVE: 'ABOVE',
    BELOW: 'BELOW',
    BEFORE: 'BEFORE',
    AFTER: 'AFTER'
};

UITooltip.propTypes = {
    position: _react2.default.PropTypes.oneOf(Object.keys(UITooltip.position)),
    text: _react2.default.PropTypes.string
};

UITooltip.defaultProps = {
    position: UITooltip.position.ABOVE
};

exports.default = UITooltip;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"../UIView":23,"classnames":24}],19:[function(require,module,exports){
(function (global){
'use strict';

function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }

var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
            }
        }
    }return target;
};

var _createClass = (function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
})();

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null;

var _react2 = _interopRequireDefault(_react);

var _UIView2 = require('../UIView');

var _UIView3 = _interopRequireDefault(_UIView2);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _noop = require('../UIUtils/noop');

var _noop2 = _interopRequireDefault(_noop);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
    } else {
        obj[key] = value;
    }return obj;
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
} /**
   * Intelligently recommend entities via customizable, fuzzy recognition.
   * @class UITypeaheadInput
   */

var UITypeaheadInput = (function (_UIView) {
    _inherits(UITypeaheadInput, _UIView);

    function UITypeaheadInput() {
        _classCallCheck(this, UITypeaheadInput);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(UITypeaheadInput).apply(this, arguments));
    }

    _createClass(UITypeaheadInput, [{
        key: 'initialState',
        value: function initialState() {
            return {
                entityMatchIndices: [],
                selectedEntityIndex: -1,
                id: this.uuid()
            };
        }
    }, {
        key: 'componentWillMount',
        value: function componentWillMount() {
            if (this.props.defaultValue) {
                this.computeMatches(this.props.defaultValue);
            }
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (nextProps.entities !== this.props.entities) {
                this.computeMatches(this.state.userInput, nextProps.entities);
            }
        }
    }, {
        key: 'getSelectedEntityContent',
        value: function getSelectedEntityContent() {
            var entity = this.props.entities[this.state.selectedEntityIndex];

            return entity ? entity.content : '';
        }
    }, {
        key: 'renderNotification',
        value: function renderNotification() {
            return _react2.default.createElement('div', { ref: 'aria',
                id: this.state.id,
                className: this.props.offscreenClass,
                'aria-live': 'polite' }, this.getSelectedEntityContent());
        }
    }, {
        key: 'renderHint',
        value: function renderHint() {
            if (this.props.hint) {
                var userText = this.state.userInput;
                var raw = this.getSelectedEntityContent();
                var processed = '';

                if (raw && raw.toLowerCase().indexOf(userText.toLowerCase()) === 0) {
                    processed = raw.replace(new RegExp(userText, 'i'), userText);
                }

                return _react2.default.createElement('input', _extends({}, this.props.hintProps, {
                    ref: 'hint',
                    type: 'text',
                    className: (0, _classnames2.default)(_defineProperty({
                        'ui-typeahead-hint': true
                    }, this.props.hintProps.className, !!this.props.hintProps.className)),
                    value: processed,
                    disabled: true,
                    tabIndex: '-1' }));
            }
        }
    }, {
        key: 'handleMatchClick',
        value: function handleMatchClick(index) {
            var _this2 = this;

            this.setState({ selectedEntityIndex: index }, function () {
                return _this2.setValueWithSelectedEntity();
            });
        }
    }, {
        key: 'markMatchSubstring',
        value: function markMatchSubstring(entityContent, userInput) {
            if (this.props.markFunc) {
                return this.props.markFunc(entityContent, userInput);
            }

            var seekValue = userInput.toLowerCase();
            var indexStart = entityContent.toLowerCase().indexOf(seekValue);
            var indexEnd = indexStart + seekValue.length;

            return [_react2.default.createElement('span', { key: '0' }, entityContent.slice(0, indexStart)), _react2.default.createElement('mark', { key: '1', className: 'ui-typeahead-match-highlight' }, entityContent.slice(indexStart, indexEnd)), _react2.default.createElement('span', { key: '2' }, entityContent.slice(indexEnd))];
        }
    }, {
        key: 'renderMatches',
        value: function renderMatches() {
            var _this3 = this;

            if (this.state.entityMatchIndices.length) {
                return _react2.default.createElement('div', _extends({}, this.props.matchWrapperProps, {
                    ref: 'matches',
                    className: (0, _classnames2.default)(_defineProperty({
                        'ui-typeahead-match-wrapper': true
                    }, this.props.matchWrapperProps.className, !!this.props.matchWrapperProps.className)) }), this.state.entityMatchIndices.map(function (index) {
                    var entity = _this3.props.entities[index];

                    return _react2.default.createElement('div', _extends({}, entity, {
                        className: (0, _classnames2.default)(_defineProperty({
                            'ui-typeahead-match': true,
                            'ui-typeahead-match-selected': _this3.state.selectedEntityIndex === index
                        }, entity.className, !!entity.className)),
                        key: _this3.createHashedKey(entity.content),
                        onClick: _this3.handleMatchClick.bind(_this3, index) }), _this3.markMatchSubstring(entity.content, _this3.state.userInput));
                }));
            }
        }
    }, {
        key: 'selectMatch',
        value: function selectMatch(delta) {
            var matches = this.state.entityMatchIndices;
            var totalMatches = matches.length;
            var nextIndex = matches.indexOf(this.state.selectedEntityIndex) + delta;

            if (totalMatches) {
                if (nextIndex < 0) {
                    nextIndex = totalMatches - 1; // reverse loop
                } else if (nextIndex >= totalMatches) {
                        nextIndex = 0; // loop
                    }

                this.setState({ selectedEntityIndex: matches[nextIndex] });
            }
        }
    }, {
        key: 'resetMatches',
        value: function resetMatches() {
            this.setState({
                selectedEntityIndex: -1,
                entityMatchIndices: []
            });
        }
    }, {
        key: 'getInputNode',
        value: function getInputNode() {
            return this.refs.input;
        }
    }, {
        key: 'focusInput',
        value: function focusInput() {
            this.getInputNode().focus();
        }
    }, {
        key: 'setValue',
        value: function setValue(newValue) {
            this.getInputNode().value = newValue;

            this.setState({ userInput: newValue });
            this.resetMatches();
            this.focusInput();
        }
    }, {
        key: 'cursorAtEndOfInput',
        value: function cursorAtEndOfInput() {
            var node = this.getInputNode();

            return node.selectionStart === node.selectionEnd && node.selectionEnd === node.value.length;
        }
    }, {
        key: 'setValueWithSelectedEntity',
        value: function setValueWithSelectedEntity() {
            this.props.onEntitySelected(this.state.selectedEntityIndex);

            if (this.props.clearPartialInputOnSelection) {
                this.setValue('');
            } else {
                this.setValue(this.getSelectedEntityContent());
            }
        }
    }, {
        key: 'handleKeyDown',
        value: function handleKeyDown(event) {
            switch (event.key) {
                case 'ArrowLeft':
                    if (event.target.selectionStart > 1) {
                        event.stopPropagation();
                    }

                    break;

                case 'Tab':
                case 'ArrowRight':
                    if (this.state.selectedEntityIndex !== -1 && this.cursorAtEndOfInput() && this.getInputNode() === event.target) {
                        event.nativeEvent.preventDefault();
                        this.setValueWithSelectedEntity();
                    }

                    break;

                case 'ArrowUp':
                    event.nativeEvent.preventDefault(); // block cursor movement
                    this.selectMatch(-1);
                    this.focusInput();
                    break;

                case 'ArrowDown':
                    event.nativeEvent.preventDefault(); // block cursor movement
                    this.selectMatch(1);
                    this.focusInput();
                    break;

                case 'Escape':
                    if (this.state.selectedEntityIndex !== -1 && this.getInputNode() === event.target) {
                        this.resetMatches();
                    }

                    break;

                case 'Enter':
                    if (this.state.selectedEntityIndex !== -1 && this.getInputNode() === event.target) {
                        event.nativeEvent.preventDefault();
                        this.setValueWithSelectedEntity();
                    } else {
                        this.props.onComplete(this.state.userInput);
                    }

                    break;
            }

            if (typeof this.props.onKeyDown === 'function') {
                event.persist();
                this.props.onKeyDown(event);
            }
        }

        // The default implementation is a simple "starts-with" search

    }, {
        key: 'getMatchIndices',
        value: function getMatchIndices(currentValue, entities) {
            if (this.props.matchFunc) {
                return this.props.matchFunc(currentValue, entities);
            }

            var seekValue = currentValue.toLowerCase();

            return entities.reduce(function seekMatch(result, entity, index) {
                return entity.content.toLowerCase().indexOf(seekValue) === 0 ? result.push(index) && result : result;
            }, []);
        }
    }, {
        key: 'computeMatches',
        value: function computeMatches(currentValue) {
            var entities = arguments.length <= 1 || arguments[1] === undefined ? this.props.entities : arguments[1];

            var matches = currentValue === '' ? [] : this.getMatchIndices(currentValue, entities);

            this.setState({
                userInput: currentValue,
                selectedEntityIndex: matches.length ? matches[0] : -1,
                entityMatchIndices: matches
            });
        }
    }, {
        key: 'handleInput',
        value: function handleInput(event) {
            this.computeMatches(event.target.value);

            if (this.props.onInput) {
                event.persist();
                this.props.onInput(event);
            }

            if (typeof this.props.inputProps.onInput === 'function') {
                event.persist();
                this.props.inputProps.onInput(event);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement('div', _extends({}, this.props, {
                defaultValue: undefined,
                name: undefined,
                type: undefined,
                ref: 'wrapper',
                className: (0, _classnames2.default)(_defineProperty({
                    'ui-typeahead-wrapper': true
                }, this.props.className, !!this.props.className)),
                onKeyDown: this.handleKeyDown.bind(this) }), this.renderNotification(), this.renderHint(), _react2.default.createElement('input', _extends({}, this.props.inputProps, {
                ref: 'input',
                className: (0, _classnames2.default)(_defineProperty({
                    'ui-typeahead': true
                }, this.props.inputProps.className, !!this.props.inputProps.className)),
                defaultValue: this.props.defaultValue || this.props.inputProps.defaultValue,
                name: this.props.name || this.props.inputProps.name,
                type: this.props.type || this.props.inputProps.type || 'text',
                'aria-controls': this.state.id,
                onInput: this.handleInput.bind(this) })), this.renderMatches());
        }
    }]);

    return UITypeaheadInput;
})(_UIView3.default);

UITypeaheadInput.propTypes = {
    clearPartialInputOnSelection: _react2.default.PropTypes.bool,
    defaultValue: _react2.default.PropTypes.string,
    entities: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.shape({
        content: _react2.default.PropTypes.string
    })),
    hint: _react2.default.PropTypes.bool,
    hintProps: _react2.default.PropTypes.object,
    inputProps: _react2.default.PropTypes.object,
    markFunc: _react2.default.PropTypes.func,
    matchFunc: _react2.default.PropTypes.func,
    matchWrapperProps: _react2.default.PropTypes.object,
    name: _react2.default.PropTypes.string,
    offscreenClass: _react2.default.PropTypes.string,
    onComplete: _react2.default.PropTypes.func,
    onInput: _react2.default.PropTypes.func,
    onEntitySelected: _react2.default.PropTypes.func,
    type: _react2.default.PropTypes.string
};

UITypeaheadInput.defaultProps = {
    clearPartialInputOnSelection: false,
    entities: [],
    hintProps: {},
    inputProps: {},
    matchWrapperProps: {},
    offscreenClass: 'ui-offscreen',
    onComplete: _noop2.default,
    onEntitySelected: _noop2.default
};

exports.default = UITypeaheadInput;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"../UIUtils/noop":20,"../UIView":23,"classnames":24}],20:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = noop;
/**
 * A dummy function with no side effects. Commonly used when mocking interfaces.
 * @module UIKit/utils/noop
 */
function noop() {}

},{}],21:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = checkShallowEquality;
var getExactType = function retrieveDeepType(object) {
    return Object.prototype.toString.call(object);
};

var compareObjectKeys = function compareObjectKeys(key, baseArray) {
    return typeof this[key] !== 'undefined' && baseArray[key] === this[key];
}; // `this` is set to the comparison array

function checkShallowEquality(a, b) {
    if (a === b) {
        return true;
    }

    var type = getExactType(a);

    if (type !== getExactType(b) // type mismatches can't be compared
     || type !== '[object Object]' && type !== '[object Array]') {
        // functions, Promises, etc cannot be directly compared
        return false;
    }

    if (type === '[object Object]') {
        return Object.keys(a).every(compareObjectKeys, b) && Object.keys(b).every(compareObjectKeys, a);
    }

    return a.every(function (item) {
        return b.indexOf(item) !== -1;
    }) && b.every(function (item) {
        return a.indexOf(item) !== -1;
    });
};

},{}],22:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * Returns the appropriate vendor-prefixed property for use in programmatic transform style manipulation.
 * @module UIKit/utils/transform
 *
 * @return {String} the property key (e.g. `WebkitTransform`, `msTransform`)
 */

exports.default = (function detectTransformProperty() {
    var props = ['transform', 'WebkitTransform', 'MozTransform', 'OTransform', 'msTransform'];

    for (var i = 0, len = props.length; i < len; i++) {
        if (props[i] in document.documentElement.style) {
            return props[i];
        }
    }

    return false;
})();

},{}],23:[function(require,module,exports){
(function (global){
'use strict';

function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }

var _createClass = (function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
})();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null;

var _react2 = _interopRequireDefault(_react);

var _shallowEqual = require('../UIUtils/shallowEqual');

var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

/**
 * An augmented version of `React.Component` with some helpful abstractions added to smooth
 * the component development process.
 *
 * All UIKit components are based on UIView.
 *
 * @augments {React.Component}
 */

var UIView = (function (_React$Component) {
  _inherits(UIView, _React$Component);

  /**
   * @param {object} props data passed on to the end component
   */

  function UIView() {
    var _Object$getPrototypeO;

    _classCallCheck(this, UIView);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(UIView)).call.apply(_Object$getPrototypeO, [this].concat(args)));

    _this.state = _this.initialState ? _this.initialState() : {};
    return _this;
  }

  /**
   * In any type of list, unique keys are required to keep React re-renders efficient. This
   * method consumes a list item's content and returns an appropriate key to be used.
   *
   * Based on the implementation by esmiralha {@link http://stackoverflow.com/a/7616484/1141611 on StackOverflow}
   *
   * @example
   * this.createHashedKey('abcd'); // 2987074
   *
   * @param  {string} baseString The content to be hashed into a consistent key.
   * @return {string} The built, unique hash.
   */

  _createClass(UIView, [{
    key: 'createHashedKey',
    value: function createHashedKey(baseString) {
      return baseString.split('').reduce(function hasher(a, b) {
        var c = (a << 5) - a + b.charCodeAt(0);

        return c & c;
      }, 0);
    }

    /**
     * Approximates the @link{PureRenderMixin https://facebook.github.io/react/docs/pure-render-mixin.html} from ES5 React. Implement shouldComponentUpdate in your subclass to override this functionality.
     *
     * @param  {Object} nextProps the incoming props definition, may differ from current props
     * @param  {Object} nextState the incoming state definition, may differ from current state
     * @return {Boolean}          Informs React to re-render the component.
     *
     * @example
     * shouldComponentUpdate(nextProps, nextState) {
     *     // some logic here, eventually `return` true or false
     *     // current props & state are available for comparison at `this.props`, `this.state`
     * }
     */

  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      return !(0, _shallowEqual2.default)(nextProps, this.props) || !(0, _shallowEqual2.default)(nextState, this.state);
    }

    /**
     * Generates a unique ID. Based on {@link https://gist.github.com/jed/982883 this implementation}.
     * @return {string} a unique identifier
     *
     * @example
     * this.uuid(); // 1f2cd27f-0754-4344-9d20-436a201b2f80
     */

  }, {
    key: 'uuid',
    value: function uuid() {
      /* eslint-disable */
      return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, function (a) {
        return (a ^ Math.random() * 16 >> a / 4).toString(16);
      });
      /* eslint-enable */
    }

    /**
     * Emulates the (now removed) React interface `getInitialState`. It's a convenience, but allows
     * for this functionality to work without having to provide a constructor function.
     *
     * @virtual
     * @name UIView#initialState
     *
     * @example
     * initialState() {
     *     return {
     *          items: []
     *     }
     * }
     */

  }]);

  return UIView;
})(_react2.default.Component);

exports.default = UIView;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"../UIUtils/shallowEqual":21}],24:[function(require,module,exports){
/*!
  Copyright (c) 2015 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = '';

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes += ' ' + arg;
			} else if (Array.isArray(arg)) {
				classes += ' ' + classNames.apply(null, arg);
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes += ' ' + key;
					}
				}
			}
		}

		return classes.substr(1);
	}

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = classNames;
	} else if (typeof define === 'function' && typeof define.amd === 'object' && define.amd) {
		// register as 'classnames', consistent with npm package name
		define('classnames', [], function () {
			return classNames;
		});
	} else {
		window.classNames = classNames;
	}
}());

},{}],"enigma-uikit":[function(require,module,exports){
(function (global){
'use strict'

/**
 * Used to create an ES5-compatible standalone build, and so it's possible to `require('enigma-uikit')``
 * and directly use a component like: `require('enigma-uikit').UIButton`
 */

;
global.UIKit = {};

module.exports = {
    UIButton: global.UIKit.UIButton = require('./UIButton').default,
    UICheckbox: global.UIKit.UICheckbox = require('./UICheckbox').default,
    UICheckboxGroup: global.UIKit.UICheckboxGroup = require('./UICheckboxGroup').default,
    UIDialog: global.UIKit.UIDialog = require('./UIDialog').default,
    UIFittedText: global.UIKit.UIFittedText = require('./UIFittedText').default,
    UIImage: global.UIKit.UIImage = require('./UIImage').default,
    UIList: global.UIKit.UIList = require('./UIList').default,
    UIModal: global.UIKit.UIModal = require('./UIModal').default,
    UIPopover: global.UIKit.UIPopover = require('./UIPopover').default,
    UIProgress: global.UIKit.UIProgress = require('./UIProgress').default,
    UIProgressiveDisclosure: global.UIKit.UIProgressiveDisclosure = require('./UIProgressiveDisclosure').default,
    UIRadio: global.UIKit.UIRadio = require('./UIRadio').default,
    UISegmentedControl: global.UIKit.UISegmentedControl = require('./UISegmentedControl').default,
    UITable: global.UIKit.UITable = require('./UITable').default,
    UITokenizedInput: global.UIKit.UITokenizedInput = require('./UITokenizedInput').default,
    UITooltip: global.UIKit.UITooltip = require('./UITooltip').default,
    UITypeaheadInput: global.UIKit.UITypeaheadInput = require('./UITypeaheadInput').default,
    UIView: global.UIKit.UIView = require('./UIView').default
};

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./UIButton":1,"./UICheckbox":2,"./UICheckboxGroup":3,"./UIDialog":4,"./UIFittedText":5,"./UIImage":6,"./UIList":7,"./UIModal":8,"./UIPopover":9,"./UIProgress":10,"./UIProgressiveDisclosure":11,"./UIRadio":12,"./UISegmentedControl":13,"./UITable":15,"./UITokenizedInput":17,"./UITooltip":18,"./UITypeaheadInput":19,"./UIView":23}]},{},["enigma-uikit"])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJVSUJ1dHRvbi9pbmRleC5qcyIsIlVJQ2hlY2tib3gvaW5kZXguanMiLCJVSUNoZWNrYm94R3JvdXAvaW5kZXguanMiLCJVSURpYWxvZy9pbmRleC5qcyIsIlVJRml0dGVkVGV4dC9pbmRleC5qcyIsIlVJSW1hZ2UvaW5kZXguanMiLCJVSUxpc3QvaW5kZXguanMiLCJVSU1vZGFsL2luZGV4LmpzIiwiVUlQb3BvdmVyL2luZGV4LmpzIiwiVUlQcm9ncmVzcy9pbmRleC5qcyIsIlVJUHJvZ3Jlc3NpdmVEaXNjbG9zdXJlL2luZGV4LmpzIiwiVUlSYWRpby9pbmRleC5qcyIsIlVJU2VnbWVudGVkQ29udHJvbC9pbmRleC5qcyIsIlVJVGFibGUvY2VsbC5qcyIsIlVJVGFibGUvaW5kZXguanMiLCJVSVRhYmxlL3Jvdy5qcyIsIlVJVG9rZW5pemVkSW5wdXQvaW5kZXguanMiLCJVSVRvb2x0aXAvaW5kZXguanMiLCJVSVR5cGVhaGVhZElucHV0L2luZGV4LmpzIiwiVUlVdGlscy9ub29wL2luZGV4LmpzIiwiVUlVdGlscy9zaGFsbG93RXF1YWwvaW5kZXguanMiLCJVSVV0aWxzL3RyYW5zZm9ybS9pbmRleC5qcyIsIlVJVmlldy9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9jbGFzc25hbWVzL2luZGV4LmpzIiwiZXhwb3J0cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ0tNLFFBQVE7Y0FBUixRQUFROzthQUFSLFFBQVE7OEJBQVIsUUFBUTs7c0VBQVIsUUFBUTs7O2lCQUFSLFFBQVE7O3NDQUNJLEFBQ1Y7Z0JBQUksT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sS0FBSyxXQUFXLEVBQUUsQUFDM0M7b0JBQUksQ0FBQyxLQUFLLENB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RyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsT0FBTyxBQUFDLEFBQzlEO3NCQUFrQixFQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsa0JBQWtCLEdBQUcsT0FBTyxDQUFDLHNCQUFzQixDQUFDLENBQUMsT0FBTyxBQUFDLEFBQy9GO1dBQU8sRUFBRyxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsT0FBTyxBQUFDLEFBQzlEO29CQUFnQixFQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLEdBQUcsT0FBTyxDQUFDLG9CQUFvQixDQUFDLENBQUMsT0FBTyxBQUFDLEFBQ3pGO2FBQVMsRUFBRyxNQUFNLENBQUMsS0FBSyxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUMsT0FBTyxBQUFDLEFBQ3BFO29CQUFnQixFQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLEdBQUcsT0FBTyxDQUFDLG9CQUFvQixDQUFDLENBQUMsT0FBTyxBQUFDLEFBQ3pGO1VBQU0sRUFBRyxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUMsT0FBTyxBQUFDO0NBQzlELENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IFVJVmlldyBmcm9tICcuLi9VSVZpZXcnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjeCBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBub29wIGZyb20gJy4uL1VJVXRpbHMvbm9vcCc7XG5cbmNsYXNzIFVJQnV0dG9uIGV4dGVuZHMgVUlWaWV3IHtcbiAgICB0b2dnbGVTdGF0ZSgpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnByb3BzLnByZXNzZWQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzW3RoaXMucHJvcHMucHJlc3NlZCA/ICdvblVucHJlc3NlZCcgOiAnb25QcmVzc2VkJ10oKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhhbmRsZUNsaWNrKCkge1xuICAgICAgICB0aGlzLnRvZ2dsZVN0YXRlKCk7XG4gICAgICAgIHRoaXMucHJvcHMub25DbGljaygpO1xuICAgIH1cblxuICAgIGhhbmRsZUtleURvd24oZXZlbnQpIHtcbiAgICAgICAgc3dpdGNoIChldmVudC5rZXkpIHtcbiAgICAgICAgY2FzZSAnRW50ZXInOlxuICAgICAgICBjYXNlICdTcGFjZSc6XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdGhpcy50b2dnbGVTdGF0ZSgpO1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMucHJvcHMucHJlc3NlZCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm9uQ2xpY2soKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5wcm9wcy5vbktleURvd24gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGV2ZW50LnBlcnNpc3QoKTtcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25LZXlEb3duKGV2ZW50KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxidXR0b24gey4uLnRoaXMucHJvcHN9XG4gICAgICAgICAgICAgICAgICAgIHJlZj0nYnV0dG9uJ1xuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2N4KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICd1aS1idXR0b24nOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ3VpLWJ1dHRvbi1wcmVzc2FibGUnOiB0eXBlb2YgdGhpcy5wcm9wcy5wcmVzc2VkICE9PSAndW5kZWZpbmVkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICd1aS1idXR0b24tcHJlc3NlZCc6IHRoaXMucHJvcHMucHJlc3NlZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFt0aGlzLnByb3BzLmNsYXNzTmFtZV06ICEhdGhpcy5wcm9wcy5jbGFzc05hbWUsXG4gICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICBhcmlhLXByZXNzZWQ9e3RoaXMucHJvcHMucHJlc3NlZH1cbiAgICAgICAgICAgICAgICAgICAgb25LZXlEb3duPXt0aGlzLmhhbmRsZUtleURvd24uYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMpfT5cbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICApO1xuICAgIH1cbn1cblxuVUlCdXR0b24ucHJvcFR5cGVzID0ge1xuICAgIGNoaWxkcmVuOiBSZWFjdC5Qcm9wVHlwZXMubm9kZSxcbiAgICBvbkNsaWNrOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgICBvblByZXNzZWQ6IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuICAgIG9uVW5wcmVzc2VkOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgICBwcmVzc2VkOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbCxcbn07XG5cblVJQnV0dG9uLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBvbkNsaWNrOiBub29wLFxuICAgIG9uUHJlc3NlZDogbm9vcCxcbiAgICBvblVucHJlc3NlZDogbm9vcCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFVJQnV0dG9uO1xuIiwiLyoqXG4gKiBBbiBhY2Nlc3NpYmxlIGNoZWNrYm94IHdpdGggaW5kZXRlcm1pbmF0ZSBzdXBwb3J0LlxuICogQGNsYXNzIFVJQ2hlY2tib3hcbiAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFVJVmlldyBmcm9tICcuLi9VSVZpZXcnO1xuaW1wb3J0IGN4IGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IG5vb3AgZnJvbSAnLi4vVUlVdGlscy9ub29wJztcblxuY2xhc3MgVUlDaGVja2JveCBleHRlbmRzIFVJVmlldyB7XG4gICAgaW5pdGlhbFN0YXRlKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaWQ6IHRoaXMucHJvcHMuaW5wdXRQcm9wcy5pZCB8fCB0aGlzLnV1aWQoKSxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuaW5kZXRlcm1pbmF0ZSkge1xuICAgICAgICAgICAgdGhpcy5zZXRJbmRldGVybWluYXRlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XG4gICAgICAgIGlmIChwcmV2UHJvcHMuaW5kZXRlcm1pbmF0ZSAhPT0gdGhpcy5wcm9wcy5pbmRldGVybWluYXRlKSB7XG4gICAgICAgICAgICB0aGlzLnNldEluZGV0ZXJtaW5hdGUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNldEluZGV0ZXJtaW5hdGUoKSB7XG4gICAgICAgIHRoaXMucmVmcy5pbnB1dC5pbmRldGVybWluYXRlID0gISF0aGlzLnByb3BzLmluZGV0ZXJtaW5hdGU7XG4gICAgfVxuXG4gICAgYXJpYVN0YXRlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy5pbmRldGVybWluYXRlID8gJ21peGVkJyA6IFN0cmluZyh0aGlzLnByb3BzLmNoZWNrZWQpO1xuICAgIH1cblxuICAgIGhhbmRsZUNoYW5nZSgpIHsgLy8gU2VuZCB0aGUgb3Bwb3NpdGUgc2lnbmFsIGZyb20gd2hhdCB3YXMgcGFzc2VkIHRvIHRvZ2dsZSB0aGUgZGF0YVxuICAgICAgICB0aGlzLnByb3BzWyF0aGlzLnByb3BzLmNoZWNrZWQgPyAnb25DaGVja2VkJyA6ICdvblVuY2hlY2tlZCddKHRoaXMucHJvcHMubmFtZSk7XG4gICAgfVxuXG4gICAgcmVuZGVySW5wdXQoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8aW5wdXQgey4uLnRoaXMucHJvcHMuaW5wdXRQcm9wc31cbiAgICAgICAgICAgICAgICAgICByZWY9J2lucHV0J1xuICAgICAgICAgICAgICAgICAgIHR5cGU9J2NoZWNrYm94J1xuICAgICAgICAgICAgICAgICAgIGlkPXt0aGlzLnN0YXRlLmlkfVxuICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y3goe1xuICAgICAgICAgICAgICAgICAgICAgICAndWktY2hlY2tib3gnOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAndWktY2hlY2tib3gtbWl4ZWQnOiB0aGlzLnByb3BzLmluZGV0ZXJtaW5hdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICd1aS1jaGVja2JveC1jaGVja2VkJzogdGhpcy5wcm9wcy5jaGVja2VkLFxuICAgICAgICAgICAgICAgICAgICAgICAndWktY2hlY2tib3gtdW5jaGVja2VkJzogIXRoaXMucHJvcHMuaW5kZXRlcm1pbmF0ZSAmJiAhdGhpcy5wcm9wcy5jaGVja2VkLFxuICAgICAgICAgICAgICAgICAgICAgICBbdGhpcy5wcm9wcy5pbnB1dFByb3BzLmNsYXNzTmFtZV06ICEhdGhpcy5wcm9wcy5pbnB1dFByb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICBuYW1lPXt0aGlzLnByb3BzLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgY2hlY2tlZD17dGhpcy5wcm9wcy5jaGVja2VkfVxuICAgICAgICAgICAgICAgICAgIGFyaWEtY2hlY2tlZD17dGhpcy5hcmlhU3RhdGUoKX1cbiAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5wcm9wcy52YWx1ZX0gLz5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICByZW5kZXJMYWJlbCgpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMubGFiZWwpIHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGxhYmVsIHsuLi50aGlzLnByb3BzLmxhYmVsUHJvcHN9XG4gICAgICAgICAgICAgICAgICAgICAgIHJlZj0nbGFiZWwnXG4gICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y3goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd1aS1jaGVja2JveC1sYWJlbCc6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW3RoaXMucHJvcHMubGFiZWxQcm9wcy5jbGFzc05hbWVdOiAhIXRoaXMucHJvcHMubGFiZWxQcm9wcy5jbGFzc05hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICBodG1sRm9yPXt0aGlzLnN0YXRlLmlkfT5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMubGFiZWx9XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IHsuLi50aGlzLnByb3BzfVxuICAgICAgICAgICAgICAgICByZWY9J3dyYXBwZXInXG4gICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y3goe1xuICAgICAgICAgICAgICAgICAgICAndWktY2hlY2tib3gtd3JhcHBlcic6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIFt0aGlzLnByb3BzLmNsYXNzTmFtZV06ICEhdGhpcy5wcm9wcy5jbGFzc05hbWUsXG4gICAgICAgICAgICAgICAgIH0pfT5cbiAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJJbnB1dCgpfVxuICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlckxhYmVsKCl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblVJQ2hlY2tib3gucHJvcFR5cGVzID0ge1xuICAgIGNoZWNrZWQ6IFJlYWN0LlByb3BUeXBlcy5ib29sLFxuICAgIGluZGV0ZXJtaW5hdGU6IFJlYWN0LlByb3BUeXBlcy5ib29sLFxuICAgIGlucHV0UHJvcHM6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QsXG4gICAgbGFiZWw6IFJlYWN0LlByb3BUeXBlcy5ub2RlLFxuICAgIGxhYmVsUHJvcHM6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QsXG4gICAgbmFtZTogUmVhY3QuUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIG9uQ2hlY2tlZDogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25VbmNoZWNrZWQ6IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuICAgIHZhbHVlOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxufTtcblxuVUlDaGVja2JveC5kZWZhdWx0UHJvcHMgPSB7XG4gICAgY2hlY2tlZDogZmFsc2UsXG4gICAgaW5kZXRlcm1pbmF0ZTogZmFsc2UsXG4gICAgaW5wdXRQcm9wczoge30sXG4gICAgbGFiZWxQcm9wczoge30sXG4gICAgb25DaGVja2VkOiBub29wLFxuICAgIG9uVW5jaGVja2VkOiBub29wLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgVUlDaGVja2JveDtcbiIsIi8qKlxuICogQSBjb250cm9sbGVyIHZpZXcgZm9yIG1hbmFnaW5nIHRoZSBhZ2dyZWdhdGUgc3RhdGUgb2YgbXVsdGlwbGUsIHJlbGF0ZWQgY2hlY2tib3hlcy5cbiAqIEBjbGFzcyBVSUNoZWNrYm94R3JvdXBcbiAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFVJVmlldyBmcm9tICcuLi9VSVZpZXcnO1xuaW1wb3J0IFVJQ2hlY2tib3ggZnJvbSAnLi4vVUlDaGVja2JveCc7XG5pbXBvcnQgY3ggZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgbm9vcCBmcm9tICcuLi9VSVV0aWxzL25vb3AnO1xuXG5jbGFzcyBVSUNoZWNrYm94R3JvdXAgZXh0ZW5kcyBVSVZpZXcge1xuICAgIGFsbEl0ZW1zQ2hlY2tlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMuaXRlbXMuZXZlcnkoaXRlbSA9PiBpdGVtLmNoZWNrZWQgPT09IHRydWUpO1xuICAgIH1cblxuICAgIGFueUl0ZW1zQ2hlY2tlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMuaXRlbXMuc29tZShpdGVtID0+IGl0ZW0uY2hlY2tlZCA9PT0gdHJ1ZSk7XG4gICAgfVxuXG4gICAgcmVuZGVyU2VsZWN0QWxsKCkge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5zZWxlY3RBbGwpIHtcbiAgICAgICAgICAgIGxldCBhbGxDaGVja2VkID0gdGhpcy5hbGxJdGVtc0NoZWNrZWQoKTtcblxuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8VUlDaGVja2JveCB7Li4udGhpcy5wcm9wcy5zZWxlY3RBbGxQcm9wc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9J3NlbGVjdF9hbGwnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0nY2Jfc2VsZWN0X2FsbCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9J2NiX3NlbGVjdF9hbGwnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17YWxsQ2hlY2tlZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2N4KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3VpLWNoZWNrYm94LWdyb3VwLXNlbGVjdGFsbCc6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFt0aGlzLnByb3BzLnNlbGVjdEFsbFByb3BzLmNsYXNzTmFtZV06ICEhdGhpcy5wcm9wcy5zZWxlY3RBbGxQcm9wcy5jbGFzc05hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXRlcm1pbmF0ZT17IWFsbENoZWNrZWQgJiYgdGhpcy5hbnlJdGVtc0NoZWNrZWQoKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17dGhpcy5wcm9wcy5zZWxlY3RBbGxMYWJlbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoZWNrZWQ9e3RoaXMucHJvcHMub25BbGxDaGVja2VkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uVW5jaGVja2VkPXt0aGlzLnByb3BzLm9uQWxsVW5jaGVja2VkfSAvPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlckNoZWNrYm94ZXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByb3BzLml0ZW1zLm1hcChpdGVtID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPFVJQ2hlY2tib3ggey4uLml0ZW19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXtgY2JfaXRlbS5uYW1lYH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2l0ZW0ubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoZWNrZWQ9e3RoaXMucHJvcHMub25DaGlsZENoZWNrZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25VbmNoZWNrZWQ9e3RoaXMucHJvcHMub25DaGlsZFVuY2hlY2tlZH0gLz5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlbmRlckNoaWxkcmVuKCkge1xuICAgICAgICBsZXQgdG9CZVJlbmRlcmVkID0gW3RoaXMucmVuZGVyQ2hlY2tib3hlcygpXTtcblxuICAgICAgICBpZiAodGhpcy5wcm9wcy5zZWxlY3RBbGwgJiYgdGhpcy5wcm9wcy5zZWxlY3RBbGxQb3NpdGlvbikge1xuICAgICAgICAgICAgc3dpdGNoICh0aGlzLnByb3BzLnNlbGVjdEFsbFBvc2l0aW9uKSB7XG4gICAgICAgICAgICBjYXNlIFVJQ2hlY2tib3hHcm91cC5Db25zdGFudHMuU0VMRUNUX0FMTF9CRUZPUkU6XG4gICAgICAgICAgICAgICAgdG9CZVJlbmRlcmVkLnVuc2hpZnQodGhpcy5yZW5kZXJTZWxlY3RBbGwoKSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgVUlDaGVja2JveEdyb3VwLkNvbnN0YW50cy5TRUxFQ1RfQUxMX0FGVEVSOlxuICAgICAgICAgICAgICAgIHRvQmVSZW5kZXJlZC5wdXNoKHRoaXMucmVuZGVyU2VsZWN0QWxsKCkpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRvQmVSZW5kZXJlZDtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IHsuLi50aGlzLnByb3BzfVxuICAgICAgICAgICAgICAgICByZWY9J2dyb3VwJ1xuICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2N4KHtcbiAgICAgICAgICAgICAgICAgICAgJ3VpLWNoZWNrYm94LWdyb3VwJzogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgW3RoaXMucHJvcHMuY2xhc3NOYW1lXTogISF0aGlzLnByb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgICAgICAgICAgfSl9PlxuICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlckNoaWxkcmVuKCl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblVJQ2hlY2tib3hHcm91cC5Db25zdGFudHMgPSB7XG4gICAgU0VMRUNUX0FMTF9CRUZPUkU6ICdTRUxFQ1RfQUxMX0JFRk9SRScsXG4gICAgU0VMRUNUX0FMTF9BRlRFUjogJ1NFTEVDVF9BTExfQUZURVInLFxufTtcblxuVUlDaGVja2JveEdyb3VwLnByb3BUeXBlcyA9IHtcbiAgICBpdGVtczogUmVhY3QuUHJvcFR5cGVzLmFycmF5T2YoXG4gICAgICAgIFJlYWN0LlByb3BUeXBlcy5zaGFwZSh7XG4gICAgICAgICAgICBjaGVja2VkOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICAgICAgICAgICAgbGFiZWw6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgICAgICBuYW1lOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICAgICAgICB2YWx1ZTogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgfSlcbiAgICApLmlzUmVxdWlyZWQsXG4gICAgb25BbGxDaGVja2VkOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgICBvbkFsbFVuY2hlY2tlZDogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25DaGlsZENoZWNrZWQ6IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuICAgIG9uQ2hpbGRVbmNoZWNrZWQ6IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuICAgIHNlbGVjdEFsbDogUmVhY3QuUHJvcFR5cGVzLmJvb2wsXG4gICAgc2VsZWN0QWxsUHJvcHM6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QsXG4gICAgc2VsZWN0QWxsTGFiZWw6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gICAgc2VsZWN0QWxsUG9zaXRpb246IFJlYWN0LlByb3BUeXBlcy5vbmVPZihbXG4gICAgICAgIFVJQ2hlY2tib3hHcm91cC5Db25zdGFudHMuU0VMRUNUX0FMTF9CRUZPUkUsXG4gICAgICAgIFVJQ2hlY2tib3hHcm91cC5Db25zdGFudHMuU0VMRUNUX0FMTF9BRlRFUixcbiAgICBdKSxcbn07XG5cblVJQ2hlY2tib3hHcm91cC5kZWZhdWx0UHJvcHMgPSB7XG4gICAgaXRlbXM6IFtdLFxuICAgIG9uQWxsQ2hlY2tlZDogbm9vcCxcbiAgICBvbkFsbFVuY2hlY2tlZDogbm9vcCxcbiAgICBvbkNoaWxkQ2hlY2tlZDogbm9vcCxcbiAgICBvbkNoaWxkVW5jaGVja2VkOiBub29wLFxuICAgIHNlbGVjdEFsbFByb3BzOiB7fSxcbiAgICBzZWxlY3RBbGxMYWJlbDogJ1NlbGVjdCBBbGwnLFxuICAgIHNlbGVjdEFsbFBvc2l0aW9uOiBVSUNoZWNrYm94R3JvdXAuQ29uc3RhbnRzLlNFTEVDVF9BTExfQkVGT1JFLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgVUlDaGVja2JveEdyb3VwO1xuIiwiLyoqXG4gKiBBIG5vbi1ibG9ja2luZywgZm9jdXMtc3RlYWxpbmcgY29udGFpbmVyLlxuICogQGNsYXNzIFVJRGlhbG9nXG4gKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBVSVZpZXcgZnJvbSAnLi4vVUlWaWV3JztcbmltcG9ydCBjeCBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBub29wIGZyb20gJy4uL1VJVXRpbHMvbm9vcCc7XG5cbmNsYXNzIFVJRGlhbG9nIGV4dGVuZHMgVUlWaWV3IHtcbiAgICBpbml0aWFsU3RhdGUoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBoZWFkZXJVVUlEOiB0aGlzLnV1aWQoKSxcbiAgICAgICAgICAgIGJvZHlVVUlEOiB0aGlzLnV1aWQoKSxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuY2FwdHVyZUZvY3VzICYmICF0aGlzLmlzUGFydE9mRGlhbG9nKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpKSB7XG4gICAgICAgICAgICB0aGlzLnJlZnMuZGlhbG9nLmZvY3VzKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5wcm9wcy5jbG9zZU9uT3V0c2lkZUNsaWNrKSB7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZU91dHNpZGVDbGljayA9IHRoaXMuaGFuZGxlT3V0c2lkZUNsaWNrLmJpbmQodGhpcyk7XG5cbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGFuZGxlT3V0c2lkZUNsaWNrLCB0cnVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaGFuZGxlRm9jdXMgPSB0aGlzLmhhbmRsZUZvY3VzLmJpbmQodGhpcyk7XG5cbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgdGhpcy5oYW5kbGVGb2N1cywgdHJ1ZSk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLmNsb3NlT25PdXRzaWRlQ2xpY2spIHtcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGFuZGxlT3V0c2lkZUNsaWNrLCB0cnVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdmb2N1cycsIHRoaXMuaGFuZGxlRm9jdXMsIHRydWUpO1xuICAgIH1cblxuICAgIGlzUGFydE9mRGlhbG9nKG5vZGUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVmcy5kaWFsb2cuY29udGFpbnMobm9kZSk7XG4gICAgfVxuXG4gICAgaGFuZGxlRm9jdXMobmF0aXZlRXZlbnQpIHtcbiAgICAgICAgaWYgKCF0aGlzLnByb3BzLmNhcHR1cmVGb2N1cykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gZXhwbGljaXRPcmlnaW5hbFRhcmdldCBpcyBmb3IgRmlyZWZveCwgYXMgaXQgZG9lc24ndCBzdXBwb3J0IHJlbGF0ZWRUYXJnZXRcbiAgICAgICAgbGV0IHByZXZpb3VzID0gbmF0aXZlRXZlbnQuZXhwbGljaXRPcmlnaW5hbFRhcmdldCB8fCBuYXRpdmVFdmVudC5yZWxhdGVkVGFyZ2V0O1xuXG4gICAgICAgIHJldHVybiBwcmV2aW91cztcblxuICAgICAgICBpZiAoICAgdGhpcy5pc1BhcnRPZkRpYWxvZyhwcmV2aW91cylcbiAgICAgICAgICAgICYmICF0aGlzLmlzUGFydE9mRGlhbG9nKG5hdGl2ZUV2ZW50LnRhcmdldCkpIHtcbiAgICAgICAgICAgIG5hdGl2ZUV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBwcmV2aW91cy5mb2N1cygpOyAvLyByZXN0b3JlIGZvY3VzXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoYW5kbGVLZXlEb3duKGV2ZW50KSB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLmNsb3NlT25Fc2NLZXkgJiYgZXZlbnQua2V5ID09PSAnRXNjYXBlJykge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkNsb3NlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIHRoaXMucHJvcHMub25LZXlEb3duID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBldmVudC5wZXJzaXN0KCk7XG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uS2V5RG93bihldmVudCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoYW5kbGVPdXRzaWRlQ2xpY2sobmF0aXZlRXZlbnQpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzUGFydE9mRGlhbG9nKG5hdGl2ZUV2ZW50LnRhcmdldCkpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25DbG9zZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyQm9keSgpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuYm9keSkge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2IHsuLi50aGlzLnByb3BzLmJvZHlQcm9wc31cbiAgICAgICAgICAgICAgICAgICAgIHJlZj0nYm9keSdcbiAgICAgICAgICAgICAgICAgICAgIGlkPXt0aGlzLnN0YXRlLmJvZHlVVUlEfVxuICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjeCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAndWktZGlhbG9nLWJvZHknOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgW3RoaXMucHJvcHMuYm9keVByb3BzLmNsYXNzTmFtZV06ICEhdGhpcy5wcm9wcy5ib2R5UHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgfSl9PlxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5ib2R5fVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlckZvb3RlcigpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuZm9vdGVyKSB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxmb290ZXIgey4uLnRoaXMucHJvcHMuZm9vdGVyUHJvcHN9XG4gICAgICAgICAgICAgICAgICAgICAgICByZWY9J2Zvb3RlcidcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y3goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd1aS1kaWFsb2ctZm9vdGVyJzogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbdGhpcy5wcm9wcy5mb290ZXJQcm9wcy5jbGFzc05hbWVdOiAhIXRoaXMucHJvcHMuZm9vdGVyUHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9PlxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5mb290ZXJ9XG4gICAgICAgICAgICAgICAgPC9mb290ZXI+XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVySGVhZGVyKCkge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5oZWFkZXIpIHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGhlYWRlciB7Li4udGhpcy5wcm9wcy5oZWFkZXJQcm9wc31cbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZj0naGVhZGVyJ1xuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e3RoaXMuc3RhdGUuaGVhZGVyVVVJRH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y3goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd1aS1kaWFsb2ctaGVhZGVyJzogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbdGhpcy5wcm9wcy5oZWFkZXJQcm9wcy5jbGFzc05hbWVdOiAhIXRoaXMucHJvcHMuaGVhZGVyUHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9PlxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5oZWFkZXJ9XG4gICAgICAgICAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiB7Li4udGhpcy5wcm9wc31cbiAgICAgICAgICAgICAgICAgcmVmPSdkaWFsb2cnXG4gICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y3goe1xuICAgICAgICAgICAgICAgICAgICAndWktZGlhbG9nJzogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgW3RoaXMucHJvcHMuY2xhc3NOYW1lXTogISF0aGlzLnByb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgIG9uS2V5RG93bj17dGhpcy5oYW5kbGVLZXlEb3duLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgIHJvbGU9J2RpYWxvZydcbiAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PXt0aGlzLnN0YXRlLmhlYWRlclVVSUR9XG4gICAgICAgICAgICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9e3RoaXMuc3RhdGUuYm9keVVVSUR9XG4gICAgICAgICAgICAgICAgIHRhYkluZGV4PScwJz5cbiAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJIZWFkZXIoKX1cbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbiB8fCB0aGlzLnJlbmRlckJvZHkoKX1cbiAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJGb290ZXIoKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuVUlEaWFsb2cucHJvcFR5cGVzID0ge1xuICAgIGJvZHk6IFJlYWN0LlByb3BUeXBlcy5ub2RlLFxuICAgIGJvZHlQcm9wczogUmVhY3QuUHJvcFR5cGVzLm9iamVjdCxcbiAgICBjYXB0dXJlRm9jdXM6IFJlYWN0LlByb3BUeXBlcy5ib29sLFxuICAgIGNoaWxkcmVuOiBSZWFjdC5Qcm9wVHlwZXMubm9kZSxcbiAgICBjbG9zZU9uRXNjS2V5OiBSZWFjdC5Qcm9wVHlwZXMuYm9vbCxcbiAgICBjbG9zZU9uT3V0c2lkZUNsaWNrOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbCxcbiAgICBmb290ZXI6IFJlYWN0LlByb3BUeXBlcy5ub2RlLFxuICAgIGZvb3RlclByb3BzOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LFxuICAgIGhlYWRlcjogUmVhY3QuUHJvcFR5cGVzLm5vZGUsXG4gICAgaGVhZGVyUHJvcHM6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QsXG4gICAgb25DbG9zZTogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG59O1xuXG5VSURpYWxvZy5kZWZhdWx0UHJvcHMgPSB7XG4gICAgYm9keVByb3BzOiB7fSxcbiAgICBjYXB0dXJlRm9jdXM6IHRydWUsXG4gICAgZm9vdGVyUHJvcHM6IHt9LFxuICAgIGhlYWRlclByb3BzOiB7fSxcbiAgICBvbkNsb3NlOiBub29wLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgVUlEaWFsb2c7XG4iLCIvKipcbiAqIEZpdCBnaXZlbiB0ZXh0IGluc2lkZSBhIHBhcmVudCBjb250YWluZXIsIG9iZXlpbmcgaW1wbGljdCBhbmQgZXhwbGljaXQgY29uc3RyYWludHMuXG4gKiBAY2xhc3MgVUlGaXR0ZWRUZXh0XG4gKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IFVJVmlldyBmcm9tICcuLi9VSVZpZXcnO1xuaW1wb3J0IGN4IGZyb20gJ2NsYXNzbmFtZXMnO1xuXG5mdW5jdGlvbiB0b0koc3RyaW5nTnVtYmVyKSB7XG4gICAgcmV0dXJuIHBhcnNlSW50KHN0cmluZ051bWJlciwgMTApO1xufVxuXG5jbGFzcyBVSUZpdHRlZFRleHQgZXh0ZW5kcyBVSVZpZXcge1xuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLnJlc2NhbGUgPSB0aGlzLnJlc2NhbGUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5yZXNjYWxlKCk7XG5cbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMucmVzY2FsZSwgdHJ1ZSk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgICAgICB0aGlzLnJlc2NhbGUoKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMucmVzY2FsZSwgdHJ1ZSk7XG4gICAgfVxuXG4gICAgcmVzY2FsZSgpIHtcbiAgICAgICAgbGV0IG5vZGUgPSBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzKTtcbiAgICAgICAgbGV0IGNvbnRhaW5lciA9IG5vZGUucGFyZW50Tm9kZTtcbiAgICAgICAgbGV0IGNvbnRhaW5lckJveCA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGNvbnRhaW5lcik7XG4gICAgICAgIGxldCBjb250YWluZXJIZWlnaHQgPSB0b0koY29udGFpbmVyQm94LmhlaWdodCk7XG4gICAgICAgIGxldCBjb250YWluZXJXaWR0aCA9IHRvSShjb250YWluZXJCb3gud2lkdGgpO1xuICAgICAgICBsZXQgZm9udFNpemUgPSB0b0kod2luZG93LmdldENvbXB1dGVkU3R5bGUobm9kZSkuZm9udFNpemUpO1xuXG4gICAgICAgIGlmICggICBjb250YWluZXJCb3guYm94U2l6aW5nID09PSAnYm9yZGVyLWJveCdcbiAgICAgICAgICAgIHx8IGNvbnRhaW5lckJveC5ib3hTaXppbmcgPT09ICdwYWRkaW5nLWJveCcpIHsgLy8gbmVlZCB0byBhY2NvdW50IGZvciBwYWRkaW5nXG4gICAgICAgICAgICBjb250YWluZXJIZWlnaHQgLT0gdG9JKGNvbnRhaW5lckJveC5wYWRkaW5nVG9wKSArIHRvSShjb250YWluZXJCb3gucGFkZGluZ0JvdHRvbSk7XG4gICAgICAgICAgICBjb250YWluZXJXaWR0aCAtPSB0b0koY29udGFpbmVyQm94LnBhZGRpbmdMZWZ0KSArIHRvSShjb250YWluZXJCb3gucGFkZGluZ1JpZ2h0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBvcHRpbWl6ZUZvckhlaWdodCA9IE1hdGguZmxvb3IoKGZvbnRTaXplIC8gbm9kZS5vZmZzZXRIZWlnaHQpICogY29udGFpbmVySGVpZ2h0KTtcbiAgICAgICAgbGV0IG9wdGltaXplRm9yV2lkdGggPSBNYXRoLmZsb29yKChmb250U2l6ZSAvIG5vZGUub2Zmc2V0V2lkdGgpICogY29udGFpbmVyV2lkdGgpO1xuXG4gICAgICAgIG5vZGUuc3R5bGUuZm9udFNpemUgPSBNYXRoLm1pbih0aGlzLnByb3BzLm1heEZvbnRTaXplLCBvcHRpbWl6ZUZvckhlaWdodCwgb3B0aW1pemVGb3JXaWR0aCkgKyAncHgnO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxzcGFuIHsuLi50aGlzLnByb3BzfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjeCh7XG4gICAgICAgICAgICAgICAgICAgICAgJ3VpLXRleHQnOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgIFt0aGlzLnByb3BzLmNsYXNzTmFtZV06ICEhdGhpcy5wcm9wcy5jbGFzc05hbWUsXG4gICAgICAgICAgICAgICAgICB9KX0+XG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5VSUZpdHRlZFRleHQuZGVmYXVsdFByb3BzID0ge1xuICAgIG1heEZvbnRTaXplOiBOdW1iZXIuTUFYX1ZBTFVFLFxufTtcblxuVUlGaXR0ZWRUZXh0LnByb3BUeXBlcyA9IHtcbiAgICBjaGlsZHJlbjogUmVhY3QuUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICAgIFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIFJlYWN0LlByb3BUeXBlcy5udW1iZXIsXG4gICAgXSksXG4gICAgbWF4Rm9udFNpemU6IFJlYWN0LlByb3BUeXBlcy5udW1iZXIsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBVSUZpdHRlZFRleHQ7XG4iLCIvKipcbiAqIEFuIGltYWdlIGJsb2NrIHdpdGggcGxhY2Vob2xkZXIgc3VwcG9ydCBmb3IgbG9hZGluZyBhbmQgZmFsbGJhY2sgc2NlbmFyaW9zLlxuICogQGNsYXNzIFVJSW1hZ2VcbiAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFVJVmlldyBmcm9tICcuLi9VSVZpZXcnO1xuaW1wb3J0IGN4IGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IG5vb3AgZnJvbSAnLi4vVUlVdGlscy9ub29wJztcblxuY2xhc3MgVUlJbWFnZSBleHRlbmRzIFVJVmlldyB7XG4gICAgaW5pdGlhbFN0YXRlKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc3RhdHVzOiBVSUltYWdlLnN0YXR1cy5MT0FESU5HLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICAgIGlmIChuZXh0UHJvcHMuc3JjICE9PSB0aGlzLnByb3BzLnNyYykge1xuICAgICAgICAgICAgdGhpcy5yZXNldFByZWxvYWRlcigpO1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c3RhdHVzOiBVSUltYWdlLnN0YXR1cy5MT0FESU5HfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5wcmVsb2FkKCk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xuICAgICAgICB0aGlzLnByZWxvYWQoKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgdGhpcy5yZXNldFByZWxvYWRlcigpO1xuICAgIH1cblxuICAgIHJlc2V0UHJlbG9hZGVyKCkge1xuICAgICAgICB0aGlzLmxvYWRlci5vbmxvYWQgPSBudWxsO1xuICAgICAgICB0aGlzLmxvYWRlci5vbmVycm9yID0gbnVsbDtcbiAgICAgICAgdGhpcy5sb2FkZXIgPSBudWxsO1xuICAgIH1cblxuICAgIHByZWxvYWQoKSB7XG4gICAgICAgIGlmICh0aGlzLmxvYWRlcikgeyByZXR1cm47IH1cblxuICAgICAgICB0aGlzLmxvYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuXG4gICAgICAgIHRoaXMubG9hZGVyLm9ubG9hZCA9ICgpID0+IHRoaXMuc2V0U3RhdGUoe3N0YXR1czogVUlJbWFnZS5zdGF0dXMuTE9BREVEfSk7XG4gICAgICAgIHRoaXMubG9hZGVyLm9uZXJyb3IgPSAoKSA9PiB0aGlzLnNldFN0YXRlKHtzdGF0dXM6IFVJSW1hZ2Uuc3RhdHVzLkVSUk9SfSk7XG5cbiAgICAgICAgdGhpcy5sb2FkZXIuc3JjID0gdGhpcy5wcm9wcy5zcmM7XG4gICAgfVxuXG4gICAgcmVuZGVySW1hZ2UoKSB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLmRpc3BsYXlBc0JhY2tncm91bmRJbWFnZSkge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2IHsuLi50aGlzLnByb3BzLmltYWdlUHJvcHN9XG4gICAgICAgICAgICAgICAgICAgICByZWY9J2ltYWdlJ1xuICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjeCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgJ3VpLWltYWdlJzogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICBbdGhpcy5wcm9wcy5pbWFnZVByb3BzLmNsYXNzTmFtZV06ICEhdGhpcy5wcm9wcy5pbWFnZVByb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e3RoaXMucHJvcHMuYWx0fVxuICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAuLi50aGlzLnByb3BzLmltYWdlUHJvcHMuc3R5bGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7dGhpcy5wcm9wcy5zcmN9KWAsXG4gICAgICAgICAgICAgICAgICAgICB9fSAvPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8aW1nIHsuLi50aGlzLnByb3BzLmltYWdlUHJvcHN9XG4gICAgICAgICAgICAgICAgIHJlZj0naW1hZ2UnXG4gICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y3goe1xuICAgICAgICAgICAgICAgICAgICAndWktaW1hZ2UnOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBbdGhpcy5wcm9wcy5pbWFnZVByb3BzLmNsYXNzTmFtZV06ICEhdGhpcy5wcm9wcy5pbWFnZVByb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgIHNyYz17dGhpcy5wcm9wcy5zcmN9XG4gICAgICAgICAgICAgICAgIGFsdD17dGhpcy5wcm9wcy5hbHR9XG4gICAgICAgICAgICAgICAgIG9uTG9hZD17bm9vcH1cbiAgICAgICAgICAgICAgICAgb25FcnJvcj17bm9vcH0gLz5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICByZW5kZXJTdGF0dXMoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IHsuLi50aGlzLnByb3BzLnN0YXR1c1Byb3BzfVxuICAgICAgICAgICAgICAgICByZWY9J3N0YXR1cydcbiAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjeCh7XG4gICAgICAgICAgICAgICAgICAgICd1aS1pbWFnZS1zdGF0dXMnOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAndWktaW1hZ2UtbG9hZGluZyc6IHRoaXMuc3RhdGUuc3RhdHVzID09PSBVSUltYWdlLnN0YXR1cy5MT0FESU5HLFxuICAgICAgICAgICAgICAgICAgICAndWktaW1hZ2UtbG9hZGVkJzogdGhpcy5zdGF0ZS5zdGF0dXMgPT09IFVJSW1hZ2Uuc3RhdHVzLkxPQURFRCxcbiAgICAgICAgICAgICAgICAgICAgJ3VpLWltYWdlLWVycm9yJzogdGhpcy5zdGF0ZS5zdGF0dXMgPT09IFVJSW1hZ2Uuc3RhdHVzLkVSUk9SLFxuICAgICAgICAgICAgICAgICAgICBbdGhpcy5wcm9wcy5zdGF0dXNQcm9wcy5jbGFzc05hbWVdOiAhIXRoaXMucHJvcHMuc3RhdHVzUHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgcm9sZT0ncHJlc2VudGF0aW9uJyAvPlxuICAgICAgICApO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgey4uLnRoaXMucHJvcHN9XG4gICAgICAgICAgICAgICAgIGFsdD17bnVsbH1cbiAgICAgICAgICAgICAgICAgc3JjPXtudWxsfVxuICAgICAgICAgICAgICAgICByZWY9J3dyYXBwZXInXG4gICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y3goe1xuICAgICAgICAgICAgICAgICAgICAndWktaW1hZ2Utd3JhcHBlcic6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIFt0aGlzLnByb3BzLmNsYXNzTmFtZV06ICEhdGhpcy5wcm9wcy5jbGFzc05hbWUsXG4gICAgICAgICAgICAgICAgIH0pfT5cbiAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJJbWFnZSgpfVxuICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlclN0YXR1cygpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5VSUltYWdlLnN0YXR1cyA9IHtcbiAgICBMT0FESU5HOiAnTE9BRElORycsXG4gICAgTE9BREVEOiAnTE9BREVEJyxcbiAgICBFUlJPUjogJ0VSUk9SJyxcbn07XG5cblVJSW1hZ2UucHJvcFR5cGVzID0ge1xuICAgIGFsdDogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgICBkaXNwbGF5QXNCYWNrZ3JvdW5kSW1hZ2U6IFJlYWN0LlByb3BUeXBlcy5ib29sLFxuICAgIGltYWdlUHJvcHM6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QsXG4gICAgc3JjOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgc3RhdHVzUHJvcHM6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QsXG59O1xuXG5VSUltYWdlLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBpbWFnZVByb3BzOiB7fSxcbiAgICBzdGF0dXNQcm9wczoge30sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBVSUltYWdlO1xuIiwiLyoqXG4gKiBBIGdlbmVyaWMgbGlzdCB2aWV3LCBzdXBwb3J0aW5nIHVuc3R5bGVkLCBidWxsZXRlZCBhbmQgbnVtYmVyZWQgb3V0cHV0LlxuICogQGNsYXNzIFVJTGlzdFxuICovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgVUlWaWV3IGZyb20gJy4uL1VJVmlldyc7XG5pbXBvcnQgY3ggZnJvbSAnY2xhc3NuYW1lcyc7XG5cbmNsYXNzIFVJTGlzdCBleHRlbmRzIFVJVmlldyB7XG4gICAgaW5pdGlhbFN0YXRlKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYWN0aXZlSXRlbTogbnVsbCxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBzZXRGb2N1cyhpbmRleCkge1xuICAgICAgICB0aGlzLnJlZnNbYGl0ZW1fJHtpbmRleH1gXS5mb2N1cygpO1xuICAgIH1cblxuICAgIGdldE5leHRJdGVtSW5kZXgoY3VycmVudEl0ZW0pIHtcbiAgICAgICAgbGV0IG5leHQgPSB0aGlzLnByb3BzLml0ZW1zLmluZGV4T2YoY3VycmVudEl0ZW0pICsgMTtcblxuICAgICAgICByZXR1cm4gbmV4dCA8IHRoaXMucHJvcHMuaXRlbXMubGVuZ3RoID8gbmV4dCA6IDA7XG4gICAgfVxuXG4gICAgZ2V0UHJldmlvdXNJdGVtSW5kZXgoY3VycmVudEl0ZW0pIHtcbiAgICAgICAgbGV0IHByZXZpb3VzID0gdGhpcy5wcm9wcy5pdGVtcy5pbmRleE9mKGN1cnJlbnRJdGVtKSAtIDE7XG5cbiAgICAgICAgcmV0dXJuIHByZXZpb3VzIDwgMCA/IHRoaXMucHJvcHMuaXRlbXMubGVuZ3RoIC0gMSA6IHByZXZpb3VzO1xuICAgIH1cblxuICAgIGhhbmRsZUtleURvd24oZXZlbnQpIHtcbiAgICAgICAgY29uc3Qga2V5ID0gZXZlbnQua2V5O1xuICAgICAgICBjb25zdCBoYXNUeXBlID0gISF0aGlzLnByb3BzLnR5cGU7XG4gICAgICAgIGNvbnN0IGl0ZW1zID0gdGhpcy5wcm9wcy5pdGVtcztcbiAgICAgICAgY29uc3QgYWN0aXZlSXRlbSA9IHRoaXMuc3RhdGUuYWN0aXZlSXRlbTtcblxuICAgICAgICBjb25zdCBuZXh0ID0gKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZXRGb2N1cyh0aGlzLmdldE5leHRJdGVtSW5kZXgoYWN0aXZlSXRlbSkpO1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBwcmV2ID0gKCkgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHRoaXMuc2V0Rm9jdXModGhpcy5nZXRQcmV2aW91c0l0ZW1JbmRleChhY3RpdmVJdGVtKSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKGtleSA9PT0gJ1RhYicpIHtcbiAgICAgICAgICAgIGNvbnN0IGFjdGl2ZUl0ZW1JbmRleCA9IGl0ZW1zLmluZGV4T2YoYWN0aXZlSXRlbSk7XG5cbiAgICAgICAgICAgIGlmIChldmVudC5zaGlmdEtleSAmJiBhY3RpdmVJdGVtSW5kZXggIT09IDApIHtcbiAgICAgICAgICAgICAgICBwcmV2KCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKCFldmVudC5zaGlmdEtleSAmJiBhY3RpdmVJdGVtSW5kZXggIT09IGl0ZW1zLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICBuZXh0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzd2l0Y2ggKGtleSkge1xuICAgICAgICAgICAgY2FzZSAnQXJyb3dVcCc6XG4gICAgICAgICAgICBjYXNlICdBcnJvd0xlZnQnOlxuICAgICAgICAgICAgICAgIHByZXYoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAnQXJyb3dEb3duJzpcbiAgICAgICAgICAgIGNhc2UgJ0Fycm93UmlnaHQnOlxuICAgICAgICAgICAgICAgIG5leHQoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5wcm9wcy5vbktleURvd24gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGV2ZW50LnBlcnNpc3QoKTtcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25LZXlEb3duKGV2ZW50KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlckNvbnRlbnQoKSB7XG4gICAgICAgIGNvbnN0IG5vZGVUeXBlID0gdGhpcy5wcm9wcy50eXBlID8gJ2xpJyA6ICdzcGFuJztcblxuICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy5pdGVtcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChub2RlVHlwZSwge1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogJ3VpLWxpc3QtaXRlbScsXG4gICAgICAgICAgICAgICAgcmVmOiBgaXRlbV8ke2luZGV4fWAsXG4gICAgICAgICAgICAgICAga2V5OiB0aGlzLmNyZWF0ZUhhc2hlZEtleShpdGVtKSArIGluZGV4LCAvLyBpbiBjYXNlIDIgcGllY2VzIG9mIGNvbnRlbnQgYXJlIGlkZW50aWNhbFxuICAgICAgICAgICAgICAgIHRhYkluZGV4OiAwLFxuICAgICAgICAgICAgICAgIG9uQmx1cjogKCkgPT4gdGhpcy5zdGF0ZS5hY3RpdmVJdGVtID09PSBpdGVtICYmIHRoaXMuc2V0U3RhdGUoe2FjdGl2ZUl0ZW06IG51bGx9KSxcbiAgICAgICAgICAgICAgICBvbkZvY3VzOiAoKSA9PiB0aGlzLnNldFN0YXRlKHthY3RpdmVJdGVtOiBpdGVtfSksXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IGl0ZW0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgbm9kZVR5cGUgPSAnZGl2JztcblxuICAgICAgICBzd2l0Y2ggKHRoaXMucHJvcHMudHlwZSkge1xuICAgICAgICBjYXNlICdidWxsZXQnOlxuICAgICAgICAgICAgbm9kZVR5cGUgPSAndWwnO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgICAgICAgIG5vZGVUeXBlID0gJ29sJztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQobm9kZVR5cGUsIHtcbiAgICAgICAgICAgIC4uLnRoaXMucHJvcHMsXG4gICAgICAgICAgICByZWY6ICdsaXN0JyxcbiAgICAgICAgICAgIGNsYXNzTmFtZTogY3goe1xuICAgICAgICAgICAgICAgICd1aS1saXN0JzogdHJ1ZSxcbiAgICAgICAgICAgICAgICAndWktbGlzdC1idWxsZXRlZCc6IHRoaXMucHJvcHMudHlwZSA9PT0gJ2J1bGxldCcsXG4gICAgICAgICAgICAgICAgJ3VpLWxpc3QtbnVtYmVyZWQnOiB0aGlzLnByb3BzLnR5cGUgPT09ICdudW1iZXInLFxuICAgICAgICAgICAgICAgICd1aS1saXN0LXBsYWluJzogdGhpcy5wcm9wcy50eXBlICE9PSAnYnVsbGV0JyAmJiB0aGlzLnByb3BzLnR5cGUgIT09ICdudW1iZXInLFxuICAgICAgICAgICAgICAgIFt0aGlzLnByb3BzLmNsYXNzTmFtZV06ICEhdGhpcy5wcm9wcy5jbGFzc05hbWUsXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIG9uS2V5RG93bjogdGhpcy5oYW5kbGVLZXlEb3duLmJpbmQodGhpcyksXG4gICAgICAgICAgICBjaGlsZHJlbjogdGhpcy5yZW5kZXJDb250ZW50KCksXG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuVUlMaXN0LnByb3BUeXBlcyA9IHtcbiAgICBpdGVtczogUmVhY3QuUHJvcFR5cGVzLmFycmF5T2YoUmVhY3QuUHJvcFR5cGVzLm5vZGUpLFxuICAgIHR5cGU6IFJlYWN0LlByb3BUeXBlcy5vbmVPZihbJ2J1bGxldCcsICdudW1iZXInXSksXG59O1xuXG5VSUxpc3QuZGVmYXVsdFByb3BzID0ge1xuICAgIGl0ZW1zOiBbXSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFVJTGlzdDtcbiIsIi8qKlxuICogQSBibG9ja2luZywgZm9jdXMtc3RlYWxpbmcgY29udGFpbmVyLlxuICogQGNsYXNzIFVJTW9kYWxcbiAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFVJRGlhbG9nIGZyb20gJy4uL1VJRGlhbG9nJztcbmltcG9ydCBVSVZpZXcgZnJvbSAnLi4vVUlWaWV3JztcbmltcG9ydCBjeCBmcm9tICdjbGFzc25hbWVzJztcblxuY2xhc3MgVUlNb2RhbCBleHRlbmRzIFVJVmlldyB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBkaWFsb2dTcGVjaWZpY1Byb3BzID0gT2JqZWN0LmtleXMoVUlEaWFsb2cucHJvcFR5cGVzKS5yZWR1Y2UoKHByb3BzLCBrZXkpID0+IHtcbiAgICAgICAgICAgIHByb3BzW2tleV0gPSB0aGlzLnByb3BzW2tleV07XG5cbiAgICAgICAgICAgIHJldHVybiBwcm9wcztcbiAgICAgICAgfSwge30pO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IHsuLi50aGlzLnByb3BzfVxuICAgICAgICAgICAgICAgICByZWY9J3dyYXBwZXInXG4gICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y3goe1xuICAgICAgICAgICAgICAgICAgICAndWktbW9kYWwtd3JhcHBlcic6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIFt0aGlzLnByb3BzLmNsYXNzTmFtZV06ICEhdGhpcy5wcm9wcy5jbGFzc05hbWUsXG4gICAgICAgICAgICAgICAgIH0pfT5cbiAgICAgICAgICAgICAgICA8ZGl2IHsuLi50aGlzLnByb3BzLm1hc2tQcm9wc31cbiAgICAgICAgICAgICAgICAgICAgIHJlZj0nbWFzaydcbiAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y3goe1xuICAgICAgICAgICAgICAgICAgICAgICAgJ3VpLW1vZGFsLW1hc2snOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgW3RoaXMucHJvcHMubWFza1Byb3BzLmNsYXNzTmFtZV06ICEhdGhpcy5wcm9wcy5tYXNrUHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgfSl9IC8+XG4gICAgICAgICAgICAgICAgPFVJRGlhbG9nIHsuLi5kaWFsb2dTcGVjaWZpY1Byb3BzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4udGhpcy5wcm9wcy5tb2RhbFByb3BzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9J2RpYWxvZydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjeCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3VpLW1vZGFsJzogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbdGhpcy5wcm9wcy5tb2RhbFByb3BzLmNsYXNzTmFtZV06ICEhdGhpcy5wcm9wcy5tb2RhbFByb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblVJTW9kYWwucHJvcFR5cGVzID0ge1xuICAgIC4uLlVJRGlhbG9nLnByb3BUeXBlcyxcbiAgICBtYXNrUHJvcHM6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QsXG4gICAgbW9kYWxQcm9wczogUmVhY3QuUHJvcFR5cGVzLm9iamVjdCxcbn07XG5cblVJTW9kYWwuZGVmYXVsdFByb3BzID0ge1xuICAgIC4uLlVJRGlhbG9nLmRlZmF1bHRQcm9wcyxcbiAgICBtYXNrUHJvcHM6IHt9LFxuICAgIG1vZGFsUHJvcHM6IHt9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgVUlNb2RhbDtcbiIsIi8qKlxuICogQSBub24tYmxvY2tpbmcgY29udGFpbmVyIHBvc2l0aW9uZWQgdG8gYSBzcGVjaWZpYyBhbmNob3IgZWxlbWVudC5cbiAqIEBjbGFzcyBVSVBvcG92ZXJcbiAqL1xuXG4vKlxuICAgIEEgbnVhbmNlIGFib3V0IHRoaXMgY29tcG9uZW50OiBzaW5jZSBpdCBvbmx5IHJlbmRlcnMgYSBzaW1wbGUgPGRpdj4sIHRoZSBtYWluIHJlbmRlcigpIGZ1bmN0aW9uXG4gICAgbmV2ZXIgY2hhbmdlcy4gVGhlcmVmb3JlLCB3ZSBuZWVkIHRvIG1hbnVhbGx5IGNhbGwgYGNvbXBvbmVudERpZFVwZGF0ZWAgYWZ0ZXIgYHNldFN0YXRlYCB0byB0cmlnZ2VyXG4gICAgYSBmdWxsIHJlLXJlbmRlciBvZiB0aGUgY2hpbGQgZGlhbG9nLlxuICovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBVSURpYWxvZyBmcm9tICcuLi9VSURpYWxvZyc7XG5pbXBvcnQgVUlWaWV3IGZyb20gJy4uL1VJVmlldyc7XG5pbXBvcnQgdHJhbnNmb3JtUHJvcCBmcm9tICcuLi9VSVV0aWxzL3RyYW5zZm9ybSc7XG5pbXBvcnQgY3ggZnJvbSAnY2xhc3NuYW1lcyc7XG5cbmNsYXNzIFVJUG9wb3ZlciBleHRlbmRzIFVJVmlldyB7XG4gICAgaW5pdGlhbFN0YXRlKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYW5jaG9yWEFsaWduOiB0aGlzLnByb3BzLmFuY2hvclhBbGlnbixcbiAgICAgICAgICAgIGFuY2hvcllBbGlnbjogdGhpcy5wcm9wcy5hbmNob3JZQWxpZ24sXG4gICAgICAgICAgICBzZWxmWEFsaWduOiB0aGlzLnByb3BzLnNlbGZYQWxpZ24sXG4gICAgICAgICAgICBzZWxmWUFsaWduOiB0aGlzLnByb3BzLnNlbGZZQWxpZ24sXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKCh0aGlzLmNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpKSk7XG5cbiAgICAgICAgLy8gdGhpcyBpcyBiYWQsIGRvbid0IGRvIHRoaXMgYW55d2hlcmUgZWxzZSA6LXguXG4gICAgICAgIHRoaXMucmVmcyA9IHt9O1xuICAgICAgICB0aGlzLnJlZnMuZGlhbG9nID0gdGhpcy5yZW5kZXJEaWFsb2coKTtcbiAgICAgICAgdGhpcy5ub2RlID0gUmVhY3RET00uZmluZERPTU5vZGUodGhpcy5yZWZzLmRpYWxvZyk7XG5cbiAgICAgICAgdGhpcy5hbGlnbiA9IHRoaXMuYWxpZ24uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5hbGlnbigpO1xuXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLmFsaWduLCB0cnVlKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgICAgIHRoaXMucmVuZGVyRGlhbG9nKCk7XG4gICAgICAgIHRoaXMuYWxpZ24oKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgUmVhY3RET00udW5tb3VudENvbXBvbmVudEF0Tm9kZSh0aGlzLmNvbnRhaW5lcik7XG4gICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodGhpcy5jb250YWluZXIpO1xuXG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLmFsaWduLCB0cnVlKTtcbiAgICB9XG5cbiAgICBnZXROZXh0WFBvc2l0aW9uKGFuY2hvciwgZGlhbG9nKSB7XG4gICAgICAgIGNvbnN0IHN0YXRlID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgY29uc3QgcG9zaXRpb24gPSBVSVBvcG92ZXIucG9zaXRpb247XG5cbiAgICAgICAgbGV0IG5leHRYID0gYW5jaG9yLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQgKyBkb2N1bWVudC5ib2R5LnNjcm9sbExlZnQ7XG5cbiAgICAgICAgc3dpdGNoIChzdGF0ZS5hbmNob3JYQWxpZ24pIHtcbiAgICAgICAgY2FzZSBwb3NpdGlvbi5NSURETEU6XG4gICAgICAgICAgICBuZXh0WCArPSBhbmNob3Iub2Zmc2V0V2lkdGggLyAyO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBwb3NpdGlvbi5FTkQ6XG4gICAgICAgICAgICBuZXh0WCArPSBhbmNob3Iub2Zmc2V0V2lkdGg7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIHN3aXRjaCAoc3RhdGUuc2VsZlhBbGlnbikge1xuICAgICAgICBjYXNlIHBvc2l0aW9uLk1JRERMRTpcbiAgICAgICAgICAgIG5leHRYIC09IGRpYWxvZy5jbGllbnRXaWR0aCAvIDI7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIHBvc2l0aW9uLkVORDpcbiAgICAgICAgICAgIG5leHRYIC09IGRpYWxvZy5jbGllbnRXaWR0aDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5leHRYO1xuICAgIH1cblxuICAgIGdldE5leHRZUG9zaXRpb24oYW5jaG9yLCBkaWFsb2cpIHtcbiAgICAgICAgY29uc3Qgc3RhdGUgPSB0aGlzLnN0YXRlO1xuICAgICAgICBjb25zdCBwb3NpdGlvbiA9IFVJUG9wb3Zlci5wb3NpdGlvbjtcbiAgICAgICAgY29uc3QgYW5jaG9yWSA9IGFuY2hvci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgKyBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcDtcbiAgICAgICAgY29uc3QgYW5jaG9ySGVpZ2h0ID0gYW5jaG9yLm9mZnNldEhlaWdodDtcblxuICAgICAgICBsZXQgbmV4dFkgPSBhbmNob3JZICsgYW5jaG9ySGVpZ2h0O1xuXG4gICAgICAgIHN3aXRjaCAoc3RhdGUuYW5jaG9yWUFsaWduKSB7XG4gICAgICAgIGNhc2UgcG9zaXRpb24uU1RBUlQ6XG4gICAgICAgICAgICBuZXh0WSA9IGFuY2hvclk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIHBvc2l0aW9uLk1JRERMRTpcbiAgICAgICAgICAgIG5leHRZID0gYW5jaG9yWSArIGFuY2hvckhlaWdodCAvIDI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIHN3aXRjaCAoc3RhdGUuc2VsZllBbGlnbikge1xuICAgICAgICBjYXNlIHBvc2l0aW9uLk1JRERMRTpcbiAgICAgICAgICAgIG5leHRZIC09IGRpYWxvZy5jbGllbnRIZWlnaHQgLyAyO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBwb3NpdGlvbi5FTkQ6XG4gICAgICAgICAgICBuZXh0WSAtPSBkaWFsb2cuY2xpZW50SGVpZ2h0O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmV4dFk7XG4gICAgfVxuXG4gICAgZ2V0QWxpZ25tZW50Q29ycmVjdGlvbklmT3ZlcmZsb3dpbmcobm9kZSwgeCwgeSkge1xuICAgICAgICBpZiAoIXRoaXMucHJvcHMuYXV0b1JlcG9zaXRpb24pIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNvcnJlY3Rpb25zID0ge307XG5cbiAgICAgICAgY29uc3Qgd2lkdGggPSBub2RlLmNsaWVudFdpZHRoO1xuICAgICAgICBjb25zdCBoZWlnaHQgPSBub2RlLmNsaWVudEhlaWdodDtcbiAgICAgICAgY29uc3QgeE1heCA9IGRvY3VtZW50LmJvZHkuc2Nyb2xsV2lkdGg7XG4gICAgICAgIGNvbnN0IHlNYXggPSBkb2N1bWVudC5ib2R5LnNjcm9sbEhlaWdodDtcblxuICAgICAgICBpZiAoeCArIHdpZHRoID4geE1heCkgeyAvLyBvdmVyZmxvd2luZyBvZmYgdG8gdGhlIHJpZ2h0XG4gICAgICAgICAgICBjb3JyZWN0aW9ucy5hbmNob3JYQWxpZ24gPSBVSVBvcG92ZXIucG9zaXRpb24uRU5EO1xuICAgICAgICAgICAgY29ycmVjdGlvbnMuc2VsZlhBbGlnbiA9IFVJUG9wb3Zlci5wb3NpdGlvbi5FTkQ7XG4gICAgICAgIH0gZWxzZSBpZiAoeCA8IDApIHsgLy8gb3ZlcmZsb3dpbmcgb2ZmIHRvIHRoZSBsZWZ0XG4gICAgICAgICAgICBjb3JyZWN0aW9ucy5hbmNob3JYQWxpZ24gPSBVSVBvcG92ZXIucG9zaXRpb24uU1RBUlQ7XG4gICAgICAgICAgICBjb3JyZWN0aW9ucy5zZWxmWEFsaWduID0gVUlQb3BvdmVyLnBvc2l0aW9uLlNUQVJUO1xuICAgICAgICB9IGVsc2UgaWYgKHkgKyBoZWlnaHQgPiB5TWF4KSB7IC8vIG92ZXJmbG93aW5nIGJlbG93XG4gICAgICAgICAgICBjb3JyZWN0aW9ucy5hbmNob3JZQWxpZ24gPSBVSVBvcG92ZXIucG9zaXRpb24uU1RBUlQ7XG4gICAgICAgICAgICBjb3JyZWN0aW9ucy5zZWxmWUFsaWduID0gVUlQb3BvdmVyLnBvc2l0aW9uLkVORDtcbiAgICAgICAgfSBlbHNlIGlmICh5IDwgMCkgeyAvLyBvdmVyZmxvd2luZyBhYm92ZVxuICAgICAgICAgICAgY29ycmVjdGlvbnMuYW5jaG9yWUFsaWduID0gVUlQb3BvdmVyLnBvc2l0aW9uLkVORDtcbiAgICAgICAgICAgIGNvcnJlY3Rpb25zLmFuY2hvclhBbGlnbiA9IFVJUG9wb3Zlci5wb3NpdGlvbi5NSURETEU7XG4gICAgICAgICAgICBjb3JyZWN0aW9ucy5zZWxmWUFsaWduID0gVUlQb3BvdmVyLnBvc2l0aW9uLlNUQVJUO1xuICAgICAgICAgICAgY29ycmVjdGlvbnMuc2VsZlhBbGlnbiA9IFVJUG9wb3Zlci5wb3NpdGlvbi5NSURETEU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY29ycmVjdGlvbnM7XG4gICAgfVxuXG4gICAgYXBwbHlUcmFuc2xhdGlvbihub2RlLCB4LCB5KSB7XG4gICAgICAgIGlmICh0cmFuc2Zvcm1Qcm9wKSB7XG4gICAgICAgICAgICBub2RlLnN0eWxlW3RyYW5zZm9ybVByb3BdID0gYHRyYW5zbGF0ZSgke3h9cHgsICR7eX1weClgO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbm9kZS5zdHlsZS5sZWZ0ID0geCArICdweCc7XG4gICAgICAgICAgICBub2RlLnN0eWxlLnRvcCA9IHkgKyAncHgnO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYWxpZ24oKSB7XG4gICAgICAgIGNvbnN0IGFuY2hvciA9ICAgdGhpcy5wcm9wcy5hbmNob3IgaW5zdGFuY2VvZiBIVE1MRWxlbWVudFxuICAgICAgICAgICAgICAgICAgICAgICA/IHRoaXMucHJvcHMuYW5jaG9yXG4gICAgICAgICAgICAgICAgICAgICAgIDogUmVhY3RET00uZmluZERPTU5vZGUodGhpcy5wcm9wcy5hbmNob3IpO1xuXG4gICAgICAgIGNvbnN0IHggPSB0aGlzLmdldE5leHRYUG9zaXRpb24oYW5jaG9yLCB0aGlzLm5vZGUpO1xuICAgICAgICBjb25zdCB5ID0gdGhpcy5nZXROZXh0WVBvc2l0aW9uKGFuY2hvciwgdGhpcy5ub2RlKTtcblxuICAgICAgICBjb25zdCBhbGlnbm1lbnRDb3JyZWN0aW9uID0gdGhpcy5nZXRBbGlnbm1lbnRDb3JyZWN0aW9uSWZPdmVyZmxvd2luZyh0aGlzLm5vZGUsIHgsIHkpO1xuXG4gICAgICAgIGlmIChhbGlnbm1lbnRDb3JyZWN0aW9uICYmIE9iamVjdC5rZXlzKGFsaWdubWVudENvcnJlY3Rpb24pLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2V0U3RhdGUoYWxpZ25tZW50Q29ycmVjdGlvbiwgKCkgPT4gdGhpcy5jb21wb25lbnREaWRVcGRhdGUoKSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmFwcGx5VHJhbnNsYXRpb24odGhpcy5ub2RlLCB4LCB5KTtcbiAgICB9XG5cbiAgICBnZXRDbGFzc0FsaWdubWVudEZyYWdtZW50KGNvbnN0YW50KSB7XG4gICAgICAgIGNvbnN0IHBvc2l0aW9uID0gVUlQb3BvdmVyLnBvc2l0aW9uO1xuXG4gICAgICAgIHN3aXRjaCAoY29uc3RhbnQpIHtcbiAgICAgICAgY2FzZSBwb3NpdGlvbi5TVEFSVDpcbiAgICAgICAgICAgIHJldHVybiAnc3RhcnQnO1xuXG4gICAgICAgIGNhc2UgcG9zaXRpb24uTUlERExFOlxuICAgICAgICAgICAgcmV0dXJuICdtaWRkbGUnO1xuXG4gICAgICAgIGNhc2UgcG9zaXRpb24uRU5EOlxuICAgICAgICAgICAgcmV0dXJuICdlbmQnO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyRGlhbG9nKCkge1xuICAgICAgICBjb25zdCBzdGF0ZSA9IHRoaXMuc3RhdGU7XG4gICAgICAgIGNvbnN0IGdldEZyYWcgPSB0aGlzLmdldENsYXNzQWxpZ25tZW50RnJhZ21lbnQ7XG5cbiAgICAgICAgcmV0dXJuIFJlYWN0RE9NLnJlbmRlcihcbiAgICAgICAgICAgIDxVSURpYWxvZyB7Li4udGhpcy5wcm9wc31cbiAgICAgICAgICAgICAgICAgICAgICBjYXB0dXJlRm9jdXM9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y3goe1xuICAgICAgICAgICAgICAgICAgICAgICAgJ3VpLXBvcG92ZXInOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgW2B1aS1wb3BvdmVyLWFuY2hvci14LSR7Z2V0RnJhZyhzdGF0ZS5hbmNob3JYQWxpZ24pfWBdOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgW2B1aS1wb3BvdmVyLWFuY2hvci15LSR7Z2V0RnJhZyhzdGF0ZS5hbmNob3JZQWxpZ24pfWBdOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgW2B1aS1wb3BvdmVyLXNlbGYteC0ke2dldEZyYWcoc3RhdGUuc2VsZlhBbGlnbil9YF06IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBbYHVpLXBvcG92ZXItc2VsZi15LSR7Z2V0RnJhZyhzdGF0ZS5zZWxmWUFsaWduKX1gXTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFt0aGlzLnByb3BzLmNsYXNzTmFtZV06ICEhdGhpcy5wcm9wcy5jbGFzc05hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLi4udGhpcy5wcm9wcy5zdHlsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogJzBweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6ICcwcHgnLFxuICAgICAgICAgICAgICAgICAgICAgIH19IC8+XG4gICAgICAgICwgdGhpcy5jb250YWluZXIpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgLz5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblVJUG9wb3Zlci5wb3NpdGlvbiA9IHtcbiAgICBTVEFSVDogJ1NUQVJUJyxcbiAgICBNSURETEU6ICdNSURETEUnLFxuICAgIEVORDogJ0VORCcsXG59O1xuXG5VSVBvcG92ZXIucHJvcFR5cGVzID0ge1xuICAgIC4uLlVJRGlhbG9nLnByb3BUeXBlcyxcbiAgICBhbmNob3I6IFJlYWN0LlByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgICBSZWFjdC5Qcm9wVHlwZXMuaW5zdGFuY2VPZihIVE1MRWxlbWVudCksXG4gICAgICAgIFJlYWN0LlByb3BUeXBlcy5zaGFwZSh7XG4gICAgICAgICAgICBwcm9wczogUmVhY3QuUHJvcFR5cGVzLm9iamVjdCxcbiAgICAgICAgICAgIHN0YXRlOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LFxuICAgICAgICB9KSwgLy8gYSByZWFjdCBlbGVtZW50IG9mIHNvbWUgZmFzaGlvbiwgUmVhY3QuUHJvcFR5cGVzLmVsZW1lbnQgd2Fzbid0IHdvcmtpbmdcbiAgICBdKS5pc1JlcXVpcmVkLFxuICAgIGFuY2hvclhBbGlnbjogUmVhY3QuUHJvcFR5cGVzLm9uZU9mKFtcbiAgICAgICAgVUlQb3BvdmVyLnBvc2l0aW9uLlNUQVJULFxuICAgICAgICBVSVBvcG92ZXIucG9zaXRpb24uTUlERExFLFxuICAgICAgICBVSVBvcG92ZXIucG9zaXRpb24uRU5ELFxuICAgIF0pLFxuICAgIGFuY2hvcllBbGlnbjogUmVhY3QuUHJvcFR5cGVzLm9uZU9mKFtcbiAgICAgICAgVUlQb3BvdmVyLnBvc2l0aW9uLlNUQVJULFxuICAgICAgICBVSVBvcG92ZXIucG9zaXRpb24uTUlERExFLFxuICAgICAgICBVSVBvcG92ZXIucG9zaXRpb24uRU5ELFxuICAgIF0pLFxuICAgIGF1dG9SZXBvc2l0aW9uOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbCxcbiAgICBzZWxmWEFsaWduOiBSZWFjdC5Qcm9wVHlwZXMub25lT2YoW1xuICAgICAgICBVSVBvcG92ZXIucG9zaXRpb24uU1RBUlQsXG4gICAgICAgIFVJUG9wb3Zlci5wb3NpdGlvbi5NSURETEUsXG4gICAgICAgIFVJUG9wb3Zlci5wb3NpdGlvbi5FTkQsXG4gICAgXSksXG4gICAgc2VsZllBbGlnbjogUmVhY3QuUHJvcFR5cGVzLm9uZU9mKFtcbiAgICAgICAgVUlQb3BvdmVyLnBvc2l0aW9uLlNUQVJULFxuICAgICAgICBVSVBvcG92ZXIucG9zaXRpb24uTUlERExFLFxuICAgICAgICBVSVBvcG92ZXIucG9zaXRpb24uRU5ELFxuICAgIF0pLFxufTtcblxuVUlQb3BvdmVyLmRlZmF1bHRQcm9wcyA9IHtcbiAgICAuLi5VSURpYWxvZy5kZWZhdWx0UHJvcHMsXG4gICAgYW5jaG9yWEFsaWduOiBVSVBvcG92ZXIucG9zaXRpb24uU1RBUlQsXG4gICAgYW5jaG9yWUFsaWduOiBVSVBvcG92ZXIucG9zaXRpb24uRU5ELFxuICAgIGF1dG9SZXBvc2l0aW9uOiB0cnVlLFxuICAgIHNlbGZYQWxpZ246IFVJUG9wb3Zlci5wb3NpdGlvbi5TVEFSVCxcbiAgICBzZWxmWUFsaWduOiBVSVBvcG92ZXIucG9zaXRpb24uU1RBUlQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBVSVBvcG92ZXI7XG4iLCIvKipcbiAqIEFuIHVub3BpbmlvbmF0ZWQgcHJvZ3Jlc3MgaW1wbGVtZW50YXRpb24gdGhhdCBhbGxvd3MgZm9yIGEgdmFyaWV0eSBvZiBzaGFwZXMgYW5kIGVmZmVjdHMuXG4gKiBAY2xhc3MgVUlQcm9ncmVzc1xuICovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgVUlCdXR0b24gZnJvbSAnLi4vVUlCdXR0b24nO1xuaW1wb3J0IFVJVmlldyBmcm9tICcuLi9VSVZpZXcnO1xuaW1wb3J0IGN4IGZyb20gJ2NsYXNzbmFtZXMnO1xuXG5jbGFzcyBVSVByb2dyZXNzIGV4dGVuZHMgVUlWaWV3IHtcbiAgICByZW5kZXJMYWJlbCgpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMubGFiZWwpIHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdiB7Li4udGhpcy5wcm9wcy5sYWJlbFByb3BzfVxuICAgICAgICAgICAgICAgICAgICAgcmVmPSdsYWJlbCdcbiAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y3goe1xuICAgICAgICAgICAgICAgICAgICAgICAgJ3VpLXByb2dyZXNzLWxhYmVsJzogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFt0aGlzLnByb3BzLmxhYmVsUHJvcHMuY2xhc3NOYW1lXTogISF0aGlzLnByb3BzLmxhYmVsUHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgfSl9PlxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5sYWJlbH1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXJDYW5jZWwoKSB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLm9uQ2FuY2VsKSB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxVSUJ1dHRvbiB7Li4udGhpcy5wcm9wcy5jYW5jZWxQcm9wc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPSdjYW5jZWwnXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y3goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3VpLXByb2dyZXNzLWNhbmNlbCc6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbdGhpcy5wcm9wcy5jYW5jZWxQcm9wcy5jbGFzc05hbWVdOiAhIXRoaXMucHJvcHMuY2FuY2VsUHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5wcm9wcy5vbkNhbmNlbH0gLz5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXJQcm9ncmVzcygpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgey4uLnRoaXMucHJvcHMucHJvZ3Jlc3NQcm9wc31cbiAgICAgICAgICAgICAgICAgcmVmPSdwcm9ncmVzcydcbiAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjeCh7XG4gICAgICAgICAgICAgICAgICAgICd1aS1wcm9ncmVzcyc6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICd1aS1wcm9ncmVzcy1pbmRldGVybWluYXRlJzogdHlwZW9mIHRoaXMucHJvcHMucHJvZ3Jlc3MgPT09ICd1bmRlZmluZWQnLFxuICAgICAgICAgICAgICAgICAgICBbdGhpcy5wcm9wcy5wcm9ncmVzc1Byb3BzLmNsYXNzTmFtZV06ICEhdGhpcy5wcm9wcy5wcm9ncmVzc1Byb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgIHJvbGU9J3ByZXNlbnRhdGlvbidcbiAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgIC4uLnRoaXMucHJvcHMucHJvZ3Jlc3NQcm9wcy5zdHlsZSxcbiAgICAgICAgICAgICAgICAgICAgIFt0aGlzLnByb3BzLnR3ZWVuUHJvcGVydHldOiB0aGlzLnByb3BzLnByb2dyZXNzLFxuICAgICAgICAgICAgICAgICB9fSAvPlxuICAgICAgICApO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgey4uLnRoaXMucHJvcHN9XG4gICAgICAgICAgICAgICAgIHJlZj0nd3JhcHBlcidcbiAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjeCh7XG4gICAgICAgICAgICAgICAgICAgICd1aS1wcm9ncmVzcy13cmFwcGVyJzogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgW3RoaXMucHJvcHMuY2xhc3NOYW1lXTogISF0aGlzLnByb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgICAgICAgICAgfSl9PlxuICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlclByb2dyZXNzKCl9XG4gICAgICAgICAgICAgICAge3RoaXMucmVuZGVyTGFiZWwoKX1cbiAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJDYW5jZWwoKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuVUlQcm9ncmVzcy5kZWZhdWx0UHJvcHMgPSB7XG4gICAgY2FuY2VsUHJvcHM6IHt9LFxuICAgIGxhYmVsUHJvcHM6IHt9LFxuICAgIHByb2dyZXNzUHJvcHM6IHt9LFxuICAgIHR3ZWVuUHJvcGVydHk6ICd3aWR0aCcsXG59O1xuXG5VSVByb2dyZXNzLnByb3BUeXBlcyA9IHtcbiAgICBjYW5jZWxQcm9wczogUmVhY3QuUHJvcFR5cGVzLm9iamVjdCxcbiAgICBsYWJlbDogUmVhY3QuUHJvcFR5cGVzLm5vZGUsXG4gICAgbGFiZWxQcm9wczogUmVhY3QuUHJvcFR5cGVzLm9iamVjdCxcbiAgICBvbkNhbmNlbDogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gICAgcHJvZ3Jlc3M6IFJlYWN0LlByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgIFJlYWN0LlByb3BUeXBlcy5udW1iZXIsXG4gICAgXSksXG4gICAgcHJvZ3Jlc3NQcm9wczogUmVhY3QuUHJvcFR5cGVzLm9iamVjdCxcbiAgICB0d2VlblByb3BlcnR5OiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgVUlQcm9ncmVzcztcbiIsIi8qKlxuICogSGlkZSBjb250ZW50IHVudGlsIGl0J3MgbmVlZGVkLlxuICogQGNsYXNzIFVJUHJvZ3Jlc3NpdmVEaXNjbG9zdXJlXG4gKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBVSVZpZXcgZnJvbSAnLi4vVUlWaWV3JztcbmltcG9ydCBjeCBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBub29wIGZyb20gJy4uL1VJVXRpbHMvbm9vcCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVJUHJvZ3Jlc3NpdmVEaXNjbG9zdXJlIGV4dGVuZHMgVUlWaWV3IHtcbiAgICBpbml0aWFsU3RhdGUoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBleHBhbmRlZDogdGhpcy5wcm9wcy5leHBhbmRlZCxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBkaXNwYXRjaENhbGxiYWNrKCkge1xuICAgICAgICB0aGlzLnByb3BzW3RoaXMuc3RhdGUuZXhwYW5kZWQgPyAnb25FeHBhbmQnIDogJ29uSGlkZSddKCk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXdQcm9wcykge1xuICAgICAgICBpZiAobmV3UHJvcHMuZXhwYW5kZWQgIT09IHRoaXMucHJvcHMuZXhwYW5kZWQpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2V4cGFuZGVkOiBuZXdQcm9wcy5leHBhbmRlZH0sICgpID0+IHRoaXMuZGlzcGF0Y2hDYWxsYmFjaygpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhhbmRsZUNsaWNrKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtleHBhbmRlZDogIXRoaXMuc3RhdGUuZXhwYW5kZWR9LCAoKSA9PiB0aGlzLmRpc3BhdGNoQ2FsbGJhY2soKSk7XG5cbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnByb3BzLnRvZ2dsZVByb3BzLm9uQ2xpY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGV2ZW50LnBlcnNpc3QoKTtcbiAgICAgICAgICAgIHRoaXMucHJvcHMudG9nZ2xlUHJvcHMub25DbGljayhldmVudCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoYW5kbGVLZXlEb3duKGV2ZW50KSB7XG4gICAgICAgIHN3aXRjaCAoZXZlbnQua2V5KSB7XG4gICAgICAgIGNhc2UgJ0VudGVyJzpcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtleHBhbmRlZDogIXRoaXMuc3RhdGUuZXhwYW5kZWR9LCAoKSA9PiB0aGlzLmRpc3BhdGNoQ2FsbGJhY2soKSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIHRoaXMucHJvcHMudG9nZ2xlUHJvcHMub25LZXlEb3duID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBldmVudC5wZXJzaXN0KCk7XG4gICAgICAgICAgICB0aGlzLnByb3BzLnRvZ2dsZVByb3BzLm9uS2V5RG93bihldmVudCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IHsuLi50aGlzLnByb3BzfVxuICAgICAgICAgICAgICAgICByZWY9J3dyYXBwZXInXG4gICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y3goe1xuICAgICAgICAgICAgICAgICAgICAndWktZGlzY2xvc3VyZSc6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICd1aS1kaXNjbG9zdXJlLWV4cGFuZGVkJzogdGhpcy5zdGF0ZS5leHBhbmRlZCxcbiAgICAgICAgICAgICAgICAgICAgW3RoaXMucHJvcHMuY2xhc3NOYW1lXTogISF0aGlzLnByb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgICAgICAgICAgfSl9PlxuICAgICAgICAgICAgICAgIDxkaXYgey4uLnRoaXMucHJvcHMudG9nZ2xlUHJvcHN9XG4gICAgICAgICAgICAgICAgICAgICByZWY9J3RvZ2dsZSdcbiAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y3goe1xuICAgICAgICAgICAgICAgICAgICAgICAgJ3VpLWRpc2Nsb3N1cmUtdG9nZ2xlJzogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFt0aGlzLnByb3BzLnRvZ2dsZVByb3BzLmNsYXNzTmFtZV06ICEhdGhpcy5wcm9wcy50b2dnbGVQcm9wcy5jbGFzc05hbWUsXG4gICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2suYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgIG9uS2V5RG93bj17dGhpcy5oYW5kbGVLZXlEb3duLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICB0YWJJbmRleD0nMCc+XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLnRlYXNlcn1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IHJlZj0nY29udGVudCdcbiAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0ndWktZGlzY2xvc3VyZS1jb250ZW50Jz5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblVJUHJvZ3Jlc3NpdmVEaXNjbG9zdXJlLnByb3BUeXBlcyA9IHtcbiAgICBjaGlsZHJlbjogUmVhY3QuUHJvcFR5cGVzLm5vZGUsXG4gICAgZXhwYW5kZWQ6IFJlYWN0LlByb3BUeXBlcy5ib29sLFxuICAgIG9uRXhwYW5kOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgICBvbkhpZGU6IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuICAgIHRlYXNlcjogUmVhY3QuUHJvcFR5cGVzLm5vZGUsXG4gICAgdG9nZ2xlUHJvcHM6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QsXG59O1xuXG5VSVByb2dyZXNzaXZlRGlzY2xvc3VyZS5kZWZhdWx0UHJvcHMgPSB7XG4gICAgZXhwYW5kZWQ6IGZhbHNlLFxuICAgIG9uRXhwYW5kOiBub29wLFxuICAgIG9uSGlkZTogbm9vcCxcbiAgICB0b2dnbGVQcm9wczoge30sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBVSVByb2dyZXNzaXZlRGlzY2xvc3VyZTtcbiIsIi8qKlxuICogQW4gYWNjZXNzaWJsZSByYWRpbyBmb3JtIGNvbnRyb2wuXG4gKiBAY2xhc3MgVUlSYWRpb1xuICovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgVUlWaWV3IGZyb20gJy4uL1VJVmlldyc7XG5pbXBvcnQgY3ggZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgbm9vcCBmcm9tICcuLi9VSVV0aWxzL25vb3AnO1xuXG5jbGFzcyBVSVJhZGlvIGV4dGVuZHMgVUlWaWV3IHtcbiAgICBpbml0aWFsU3RhdGUoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpZDogdGhpcy5wcm9wcy5pbnB1dFByb3BzLmlkIHx8IHRoaXMudXVpZCgpLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGhhbmRsZUNoYW5nZShldmVudCkge1xuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0LmNoZWNrZWQpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25TZWxlY3RlZChldmVudC50YXJnZXQudmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnByb3BzLmlucHV0UHJvcHMub25DaGFuZ2UgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGV2ZW50LnBlcnNpc3QoKTtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuaW5wdXRQcm9wcy5vbkNoYW5nZShldmVudCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXJJbnB1dCgpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxpbnB1dCB7Li4udGhpcy5wcm9wcy5pbnB1dFByb3BzfVxuICAgICAgICAgICAgICAgICAgIHJlZj0naW5wdXQnXG4gICAgICAgICAgICAgICAgICAgdHlwZT0ncmFkaW8nXG4gICAgICAgICAgICAgICAgICAgaWQ9e3RoaXMuc3RhdGUuaWR9XG4gICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjeCh7XG4gICAgICAgICAgICAgICAgICAgICAgICd1aS1yYWRpbyc6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICd1aS1yYWRpby1zZWxlY3RlZCc6IHRoaXMucHJvcHMuc2VsZWN0ZWQsXG4gICAgICAgICAgICAgICAgICAgICAgIFt0aGlzLnByb3BzLmlucHV0UHJvcHMuY2xhc3NOYW1lXTogISF0aGlzLnByb3BzLmlucHV0UHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgIG5hbWU9e3RoaXMucHJvcHMubmFtZX1cbiAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5wcm9wcy52YWx1ZX1cbiAgICAgICAgICAgICAgICAgICBjaGVja2VkPXt0aGlzLnByb3BzLnNlbGVjdGVkfVxuICAgICAgICAgICAgICAgICAgIGFyaWEtY2hlY2tlZD17U3RyaW5nKHRoaXMucHJvcHMuc2VsZWN0ZWQpfVxuICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpfSAvPlxuICAgICAgICApO1xuICAgIH1cblxuICAgIHJlbmRlckxhYmVsKCkge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5sYWJlbCkge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8bGFiZWwgey4uLnRoaXMucHJvcHMubGFiZWxQcm9wc31cbiAgICAgICAgICAgICAgICAgICAgICAgcmVmPSdsYWJlbCdcbiAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjeCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAndWktcmFkaW8tbGFiZWwnOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgW3RoaXMucHJvcHMubGFiZWxQcm9wcy5jbGFzc05hbWVdOiAhIXRoaXMucHJvcHMubGFiZWxQcm9wcy5jbGFzc05hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICBodG1sRm9yPXt0aGlzLnN0YXRlLmlkfT5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMubGFiZWx9XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IHsuLi50aGlzLnByb3BzfVxuICAgICAgICAgICAgICAgICByZWY9J3dyYXBwZXInXG4gICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y3goe1xuICAgICAgICAgICAgICAgICAgICAgJ3VpLXJhZGlvLXdyYXBwZXInOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgW3RoaXMucHJvcHMuY2xhc3NOYW1lXTogISF0aGlzLnByb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgICAgICAgICAgfSl9PlxuICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlcklucHV0KCl9XG4gICAgICAgICAgICAgICAge3RoaXMucmVuZGVyTGFiZWwoKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuVUlSYWRpby5wcm9wVHlwZXMgPSB7XG4gICAgaW5wdXRQcm9wczogUmVhY3QuUHJvcFR5cGVzLm9iamVjdCxcbiAgICBsYWJlbDogUmVhY3QuUHJvcFR5cGVzLm5vZGUsXG4gICAgbGFiZWxQcm9wczogUmVhY3QuUHJvcFR5cGVzLm9iamVjdCxcbiAgICBuYW1lOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgb25TZWxlY3RlZDogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gICAgc2VsZWN0ZWQ6IFJlYWN0LlByb3BUeXBlcy5ib29sLFxuICAgIHZhbHVlOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG59O1xuXG5VSVJhZGlvLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBpbnB1dFByb3BzOiB7fSxcbiAgICBsYWJlbFByb3BzOiB7fSxcbiAgICBvblNlbGVjdGVkOiBub29wLFxuICAgIHNlbGVjdGVkOiBmYWxzZSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFVJUmFkaW87XG4iLCIvKipcbiAqIEEgY29udHJvbGxlciB2aWV3IGZvciBtYW5hZ2luZyB0aGUgYWdncmVnYXRlIHN0YXRlIG9mIG11bHRpcGxlLCByZWxhdGVkIHJhZGlvLXN0eWxlIGJ1dHRvbnMuXG4gKiBAY2xhc3MgVUlTZWdtZW50ZWRDb250cm9sXG4gKi9cblxuaW1wb3J0IFVJVmlldyBmcm9tICcuLi9VSVZpZXcnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjeCBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBub29wIGZyb20gJy4uL1VJVXRpbHMvbm9vcCc7XG5cbmNsYXNzIFVJU2VnbWVudGVkQ29udHJvbCBleHRlbmRzIFVJVmlldyB7XG4gICAgY3VycmVudFZhbHVlKCkge1xuICAgICAgICBsZXQgdmFsdWU7XG5cbiAgICAgICAgdGhpcy5wcm9wcy5vcHRpb25zLnNvbWUob3B0aW9uID0+IHtcbiAgICAgICAgICAgIGlmIChvcHRpb24uc2VsZWN0ZWQpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IG9wdGlvbi52YWx1ZTtcblxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuXG4gICAgc2V0Rm9jdXMoaW5kZXgpIHtcbiAgICAgICAgdGhpcy5yZWZzWydvcHRpb25fJCcgKyBpbmRleF0uZm9jdXMoKTtcbiAgICB9XG5cbiAgICBnZXROZXh0T3B0aW9uSW5kZXgoY3VycmVudE9wdGlvbkluZGV4KSB7XG4gICAgICAgIGxldCBuZXh0ID0gY3VycmVudE9wdGlvbkluZGV4ICsgMTtcblxuICAgICAgICByZXR1cm4gbmV4dCA8IHRoaXMucHJvcHMub3B0aW9ucy5sZW5ndGggPyBuZXh0IDogMDtcbiAgICB9XG5cbiAgICBnZXRQcmV2aW91c09wdGlvbkluZGV4KGN1cnJlbnRPcHRpb25JbmRleCkge1xuICAgICAgICBsZXQgcHJldmlvdXMgPSBjdXJyZW50T3B0aW9uSW5kZXggLSAxO1xuXG4gICAgICAgIHJldHVybiBwcmV2aW91cyA8IDAgPyB0aGlzLnByb3BzLm9wdGlvbnMubGVuZ3RoIC0gMSA6IHByZXZpb3VzO1xuICAgIH1cblxuICAgIGhhbmRsZUJsdXIob3B0aW9uLCBldmVudCkge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5pbmRleE9mT3B0aW9uSW5Gb2N1cyA9PT0gb3B0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtpbmRleE9mT3B0aW9uSW5Gb2N1czogbnVsbH0pXG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIG9wdGlvbi5vbkJsdXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGV2ZW50LnBlcnNpc3QoKTtcbiAgICAgICAgICAgIG9wdGlvbi5vbkJsdXIoZXZlbnQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaGFuZGxlQ2xpY2sob3B0aW9uLCBldmVudCkge1xuICAgICAgICB0aGlzLnByb3BzLm9uT3B0aW9uU2VsZWN0ZWQob3B0aW9uLnZhbHVlKTtcblxuICAgICAgICBpZiAodHlwZW9mIG9wdGlvbi5vbkNsaWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBldmVudC5wZXJzaXN0KCk7XG4gICAgICAgICAgICBvcHRpb24ub25DbGljayhldmVudCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoYW5kbGVGb2N1cyhvcHRpb24sIGV2ZW50KSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2luZGV4T2ZPcHRpb25JbkZvY3VzOiB0aGlzLnByb3BzLm9wdGlvbnMuaW5kZXhPZihvcHRpb24pfSk7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBvcHRpb24ub25Gb2N1cyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgZXZlbnQucGVyc2lzdCgpO1xuICAgICAgICAgICAgb3B0aW9uLm9uRm9jdXMoZXZlbnQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaGFuZGxlS2V5RG93bihldmVudCkge1xuICAgICAgICBjb25zdCBrZXkgPSBldmVudC5rZXk7XG4gICAgICAgIGNvbnN0IGFjdGl2ZUl0ZW1JbmRleCA9IHRoaXMuc3RhdGUuaW5kZXhPZk9wdGlvbkluRm9jdXM7XG5cbiAgICAgICAgaWYgKGtleSA9PT0gJ0Fycm93TGVmdCcpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0Rm9jdXModGhpcy5nZXRQcmV2aW91c09wdGlvbkluZGV4KGFjdGl2ZUl0ZW1JbmRleCkpO1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSBlbHNlIGlmIChrZXkgPT09ICdBcnJvd1JpZ2h0Jykge1xuICAgICAgICAgICAgdGhpcy5zZXRGb2N1cyh0aGlzLmdldE5leHRPcHRpb25JbmRleChhY3RpdmVJdGVtSW5kZXgpKTtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnRW50ZXInKSB7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZUNsaWNrKHRoaXMucHJvcHMub3B0aW9uc1thY3RpdmVJdGVtSW5kZXhdKVxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5wcm9wcy5vbktleURvd24gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGV2ZW50LnBlcnNpc3QoKTtcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25LZXlEb3duKGV2ZW50KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlck9wdGlvbnMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByb3BzLm9wdGlvbnMubWFwKChkZWZpbml0aW9uLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2IHsuLi5kZWZpbml0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgcm9sZT0ncmFkaW8nXG4gICAgICAgICAgICAgICAgICAgICBhcmlhLWNoZWNrZWQ9e1N0cmluZyhkZWZpbml0aW9uLnNlbGVjdGVkKX1cbiAgICAgICAgICAgICAgICAgICAgIHJlZj17J29wdGlvbl8kJyArIGluZGV4fVxuICAgICAgICAgICAgICAgICAgICAga2V5PXtkZWZpbml0aW9uLnZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjeCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAndWktc2VnbWVudGVkLWNvbnRyb2wtb3B0aW9uJzogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICd1aS1zZWdtZW50ZWQtY29udHJvbC1vcHRpb24tc2VsZWN0ZWQnOiBkZWZpbml0aW9uLnNlbGVjdGVkXG4gICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgIHRhYkluZGV4PXtkZWZpbml0aW9uLnNlbGVjdGVkID8gMCA6IC0xfVxuICAgICAgICAgICAgICAgICAgICAgb25CbHVyPXt0aGlzLmhhbmRsZUJsdXIuYmluZCh0aGlzLCBkZWZpbml0aW9uKX1cbiAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2suYmluZCh0aGlzLCBkZWZpbml0aW9uKX1cbiAgICAgICAgICAgICAgICAgICAgIG9uRm9jdXM9e3RoaXMuaGFuZGxlRm9jdXMuYmluZCh0aGlzLCBkZWZpbml0aW9uKX0+XG4gICAgICAgICAgICAgICAge2RlZmluaXRpb24uY29udGVudH1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgey4uLnRoaXMucHJvcHN9XG4gICAgICAgICAgICAgICAgIHJlZj0nd3JhcHBlcidcbiAgICAgICAgICAgICAgICAgYXJpYS1yZXF1aXJlZD0ncmFkaW9ncm91cCdcbiAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjeCh7XG4gICAgICAgICAgICAgICAgICAgICd1aS1zZWdtZW50ZWQtY29udHJvbCc6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIFt0aGlzLnByb3BzLmNsYXNzTmFtZV06ICEhdGhpcy5wcm9wcy5jbGFzc05hbWUsXG4gICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICBvbktleURvd249e3RoaXMuaGFuZGxlS2V5RG93bi5iaW5kKHRoaXMpfT5cbiAgICAgICAgICAgICAgICAge3RoaXMucmVuZGVyT3B0aW9ucygpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5VSVNlZ21lbnRlZENvbnRyb2wucHJvcFR5cGVzID0ge1xuICAgIG9uT3B0aW9uU2VsZWN0ZWQ6IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuICAgIG9wdGlvbnM6IGZ1bmN0aW9uKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSkge1xuICAgICAgICBpZiAocHJvcHMub3B0aW9ucy5sZW5ndGggPCAyKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEVycm9yKCdNdXN0IHByb3ZpZGUgYXQgbGVhc3QgdHdvIG9wdGlvbnMuJyk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgbWlzc2luZ1NlbGVjdGVkID0gcHJvcHMub3B0aW9ucy5zb21lKG9wdGlvbiA9PiB7XG4gICAgICAgICAgICBpZiAoISgnc2VsZWN0ZWQnIGluIG9wdGlvbikpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKG1pc3NpbmdTZWxlY3RlZCkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBFcnJvcignTXVzdCBwcm92aWRlIGEgYHNlbGVjdGVkYCBwcm9wIGZvciBlYWNoIG9wdGlvbi4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBtaXNzaW5nVmFsdWUgPSBwcm9wcy5vcHRpb25zLnNvbWUob3B0aW9uID0+IHtcbiAgICAgICAgICAgIGlmICghKCd2YWx1ZScgaW4gb3B0aW9uKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAobWlzc2luZ1ZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEVycm9yKCdNdXN0IHByb3ZpZGUgYSBgdmFsdWVgIHByb3AgZm9yIGVhY2ggb3B0aW9uLicpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHNlZW5TZWxlY3RlZCA9IGZhbHNlO1xuICAgICAgICBsZXQgbXVsdGlwbGVTZWxlY3RlZCA9IHByb3BzLm9wdGlvbnMuc29tZShvcHRpb24gPT4ge1xuICAgICAgICAgICAgaWYgKG9wdGlvbi5zZWxlY3RlZCkge1xuICAgICAgICAgICAgICAgIGlmIChzZWVuU2VsZWN0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgc2VlblNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKG11bHRpcGxlU2VsZWN0ZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgRXJyb3IoJ0VuY291bnRlcmVkIG11bHRpcGxlIG9wdGlvbnMgd2l0aCBgc2VsZWN0ZWQ6IHRydWVgLiBUaGVyZSBjYW4gYmUgb25seSBvbmUuJyk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5VSVNlZ21lbnRlZENvbnRyb2wuZGVmYXVsdFByb3BzID0ge1xuICAgIG9wdGlvbnM6IFtdLFxuICAgIG9uT3B0aW9uU2VsZWN0ZWQ6IG5vb3Bcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFVJU2VnbWVudGVkQ29udHJvbDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgVUlWaWV3IGZyb20gJy4uL1VJVmlldyc7XG5cbmNsYXNzIFVJVGFibGVDZWxsIGV4dGVuZHMgVUlWaWV3IHtcbiAgICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3MpO1xuXG4gICAgICAgIHRoaXMuaGFuZGxlQ2xpY2sgPSB0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgaGFuZGxlQ2xpY2soZXZlbnQpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMub25JbnRlcmFjdCkge1xuICAgICAgICAgICAgZXZlbnQucGVyc2lzdCgpO1xuXG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uSW50ZXJhY3QoZXZlbnQsIHRoaXMucHJvcHMucm93LCB0aGlzLnByb3BzLmNvbnRlbnQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyQ29udGVudCgpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnByb3BzLndpZHRoID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndWktdGFibGUtY2VsbC1pbm5lcic+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0ndWktdGFibGUtY2VsbC1pbm5lci10ZXh0Jz57dGhpcy5wcm9wcy5jb250ZW50fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy5jb250ZW50O1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IGFkZFRpdGxlID0gdHlwZW9mIHRoaXMucHJvcHMuY29udGVudCA9PT0gJ3N0cmluZyc7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd1aS10YWJsZS1jZWxsJ1xuICAgICAgICAgICAgICAgICB0aXRsZT17YWRkVGl0bGUgPyB0aGlzLnByb3BzLmNvbnRlbnQgOiBudWxsfVxuICAgICAgICAgICAgICAgICBzdHlsZT17e3dpZHRoOiB0aGlzLnByb3BzLndpZHRoID8gdGhpcy5wcm9wcy53aWR0aCArICdweCcgOiBudWxsfX1cbiAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVDbGlja30+XG4gICAgICAgICAgICAgICAge3RoaXMucmVuZGVyQ29udGVudCgpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5VSVRhYmxlQ2VsbC5wcm9wVHlwZXMgPSB7XG4gICAgY29udGVudDogUmVhY3QuUHJvcFR5cGVzLm5vZGUsXG4gICAgd2lkdGg6IFJlYWN0LlByb3BUeXBlcy5udW1iZXIsXG4gICAgb25JbnRlcmFjdDogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gICAgcm93OiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgVUlUYWJsZUNlbGw7XG4iLCIvKipcbiAqIEEgaGlnaC1wZXJmb3JtYW5jZSwgaW5maW5pdGUgdGFibGUgdmlldy5cbiAqIEBjbGFzcyBVSVRhYmxlXG4gKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBVSVZpZXcgZnJvbSAnLi4vVUlWaWV3JztcbmltcG9ydCBSb3cgZnJvbSAnLi9yb3cnO1xuaW1wb3J0IHRyYW5zZm9ybVByb3AgZnJvbSAnLi4vVUlVdGlscy90cmFuc2Zvcm0nO1xuaW1wb3J0IG5vb3AgZnJvbSAnLi4vVUlVdGlscy9ub29wJztcbmltcG9ydCBjeCBmcm9tICdjbGFzc25hbWVzJztcblxuLyoqXG4gKiBGT1IgRlVUVVJFIEVZRVNcbiAqXG4gKiBUaGVyZSBhcmUgYSBsb3Qgb2YgcGxhY2VzIHdoZXJlIHNoYXJlZCB0aGlzLntuYW1lfSB2YXJpYWJsZXMgaGF2ZSBiZWVuXG4gKiB1c2VkIHdoZXJlIHRoZXkgZG9uJ3Qgc2VlbSB0byBiZSBuZWVkZWQuIFRoaXMgaXMgY29tcGxldGVseSBvbiBwdXJwb3NlIHRvXG4gKiByZWR1Y2UgbWVtb3J5IHByZXNzdXJlIGR1cmluZyBzY3JvbGwgb3BlcmF0aW9ucy4gSWYgeW91IGNoYW5nZSB0aGVtIGJhY2sgdG9cbiAqIG5vcm1hbCB2YXJzLCB5b3UnbGwgc2VlIHRoZSBzYXd0b290aGluZyBpbiB5b3VyIEpTIHByb2ZpbGVyLi4uIHNvIGRvbid0IGRvIGl0IVxuICovXG5cbi8qKlxuICogT1JERVIgT0YgT1BFUkFUSU9OU1xuICpcbiAqIDEuIGluaXRpYWwgcmVuZGVyIHcvIG9uZSByb3cgb2YgY2VsbHNcbiAqIDIuIGNhcHR1cmUgdGFibGUgJiBjZWxsIHNpemluZyBtZXRyaWNzXG4gKiAzLiBhcHBseSB3aWR0aHMgdG8gY29sdW1uIGRlZmluaXRpb25zXG4gKiA0LiByZW5kZXIgcGFzcyAyIHcvIGNvbHVtbiBoZWFkcyBhbmQgdGhlIHJlc3Qgb2YgdGhlIGNlbGxzXG4gKi9cblxuLyoqIEBpZ25vcmUgKi9cbmNvbnN0IGZpbmRXaGVyZSA9IGZ1bmN0aW9uIGZpbmRXaGVyZShhcnJheSwgcHJvcGVydHksIHZhbHVlKSB7XG4gICAgbGV0IGluZGV4ID0gYXJyYXkubGVuZ3RoIC0gMTtcblxuICAgIHdoaWxlIChpbmRleCA+IC0xKSB7XG4gICAgICAgIGlmIChhcnJheVtpbmRleF1bcHJvcGVydHldID09PSB2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIGFycmF5W2luZGV4XTtcbiAgICAgICAgfVxuXG4gICAgICAgIGluZGV4IC09IDE7XG4gICAgfVxufTsgLy8gb3B0aW1pemVkIHNwZWNpZmljYWxseSB0byBvbmx5IGxvb2sgZm9yIGEgc2luZ2xlIGtleTp2YWx1ZSBtYXRjaFxuXG5jbGFzcyBVSVRhYmxlIGV4dGVuZHMgVUlWaWV3IHtcbiAgICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3MpO1xuXG4gICAgICAgIHRoaXMuaGFuZGxlUm93Q2xpY2sgPSB0aGlzLmhhbmRsZVJvd0NsaWNrLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuaGFuZGxlS2V5RG93biA9IHRoaXMuaGFuZGxlS2V5RG93bi5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmhhbmRsZURyYWdNb3ZlID0gdGhpcy5oYW5kbGVEcmFnTW92ZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmhhbmRsZURyYWdFbmQgPSB0aGlzLmhhbmRsZURyYWdFbmQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5oYW5kbGVNb3ZlSW50ZW50ID0gdGhpcy5oYW5kbGVNb3ZlSW50ZW50LmJpbmQodGhpcyk7XG5cbiAgICAgICAgdGhpcy5oYW5kbGVYU2Nyb2xsZXJEcmFnU3RhcnQgPSB0aGlzLmhhbmRsZVhTY3JvbGxlckRyYWdTdGFydC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmhhbmRsZVlTY3JvbGxlckRyYWdTdGFydCA9IHRoaXMuaGFuZGxlWVNjcm9sbGVyRHJhZ1N0YXJ0LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuaGFuZGxlQ29sdW1uRHJhZ1N0YXJ0ID0gdGhpcy5oYW5kbGVDb2x1bW5EcmFnU3RhcnQuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBpbml0aWFsU3RhdGUoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhcmlhU3Bva2VuT3V0cHV0OiAnJyxcbiAgICAgICAgICAgIGNob2tlUmVuZGVyOiB0cnVlLFxuICAgICAgICAgICAgY3VycmVudEFjdGl2ZVJvd0luZGV4OiAtMSxcbiAgICAgICAgICAgIHJvd3M6IFt7XG4gICAgICAgICAgICAgICAgZGF0YTogdGhpcy5wcm9wcy5nZXRSb3coMCksXG4gICAgICAgICAgICAgICAgc2V0SW5kZXg6IDAsXG4gICAgICAgICAgICAgICAgeTogMCxcbiAgICAgICAgICAgIH1dLFxuICAgICAgICAgICAgcm93c09yZGVyZWRCeVk6IFswXSxcbiAgICAgICAgICAgIGNvbHVtbnM6IHRoaXMucHJvcHMuY29sdW1ucy5zbGljZSgwKSxcbiAgICAgICAgICAgIHhTY3JvbGxlck51YlNpemU6IG51bGwsXG4gICAgICAgICAgICB5U2Nyb2xsZXJOdWJTaXplOiBudWxsLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLnhDdXJyZW50ID0gdGhpcy55Q3VycmVudCA9IDA7XG4gICAgICAgIHRoaXMueE5leHQgPSB0aGlzLnlOZXh0ID0gbnVsbDtcbiAgICAgICAgdGhpcy55U2Nyb2xsTnViUG9zaXRpb24gPSAwO1xuXG4gICAgICAgIC8vIHRlbXBvcmFyeSB2YXJpYWJsZXMgaW4gdmFyaW91cyBjYWxjdWxhdGlvbnNcbiAgICAgICAgdGhpcy5jYWNoZV9pdGVyYXRvciA9IG51bGw7XG4gICAgICAgIHRoaXMuY2FjaGVfbmV4dEFjdGl2ZVJvdyA9IG51bGw7XG4gICAgICAgIHRoaXMuY2FjaGVfblJvd3NUb1NoaWZ0ID0gbnVsbDtcbiAgICAgICAgdGhpcy5jYWNoZV9vcmRlcmVkWUFycmF5VGFyZ2V0SW5kZXggPSBudWxsO1xuICAgICAgICB0aGlzLmNhY2hlX3Jvd1BvaW50ZXIgPSBudWxsO1xuICAgICAgICB0aGlzLmNhY2hlX3NoaWZ0RGVsdGEgPSBudWxsO1xuICAgICAgICB0aGlzLmNhY2hlX3RhcmdldEluZGV4ID0gbnVsbDtcblxuICAgICAgICB0aGlzLmNhcHR1cmVEaW1lbnNpb25zKCk7XG4gICAgfVxuXG4gICAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKCkge1xuICAgICAgICAvKiBzbyB3ZSBjYW4gcmV1c2Ugc3RhdGUucm93cyB0byBhdm9pZCBleHRyYSBhcnJheSBhbGxvY2F0aW9ucyBpbiB0aGUgc2Nyb2xsIGhhbmRsZXJzIC0gaW4gdGhpcyBjYXNlIGEgZmV3IG1vcmUgQ1BVIGN5Y2xlcyBhcmUgZmFyIGNoZWFwZXIgdGhhbiBydW5uaW5nIHVwIGFnYWluc3QgdGhlIEdDICovXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMucmVmcy5oZWFkICYmIHR5cGVvZiB0aGlzLm1pbmltdW1Db2x1bW5XaWR0aCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIGNvbnN0IG5vZGUgPSB0aGlzLnJlZnMud3JhcHBlci5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd1aS10YWJsZS1oZWFkZXItY2VsbCcpWzBdO1xuXG4gICAgICAgICAgICBpZiAobm9kZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5vZGVTdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKG5vZGUpO1xuXG4gICAgICAgICAgICAgICAgLy8gd2lsbCBiZSBOYU4gaWYgbm90IGEgcGl4ZWwgdmFsdWVcbiAgICAgICAgICAgICAgICB0aGlzLm1heGltdW1Db2x1bW5XaWR0aCA9IHBhcnNlSW50KG5vZGVTdHlsZS5tYXhXaWR0aCwgMTApO1xuICAgICAgICAgICAgICAgIHRoaXMubWluaW11bUNvbHVtbldpZHRoID0gcGFyc2VJbnQobm9kZVN0eWxlLm1pbldpZHRoLCAxMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjYWxjdWxhdGVYU2Nyb2xsZXJOdWJTaXplKCkge1xuICAgICAgICBjb25zdCBweCA9IHRoaXMuY29udGFpbmVyV2lkdGggLSBNYXRoLmFicyh0aGlzLnhNYXhpbXVtVHJhbnNsYXRpb24pO1xuXG4gICAgICAgIHJldHVybiBweCA8IDEyID8gMTIgOiBweDtcbiAgICB9XG5cbiAgICBjYWxjdWxhdGVZU2Nyb2xsZXJOdWJTaXplKCkge1xuICAgICAgICBjb25zdCBweCA9IHRoaXMucm93RW5kSW5kZXggLyB0aGlzLnByb3BzLnRvdGFsUm93cztcblxuICAgICAgICByZXR1cm4gcHggPCAxMiA/IDEyIDogcHg7XG4gICAgfVxuXG4gICAgY2FwdHVyZURpbWVuc2lvbnMoKSB7XG4gICAgICAgIGNvbnN0IGZpcnN0Um93ID0gdGhpcy5yZWZzLmJvZHkuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndWktdGFibGUtcm93JylbMF07XG4gICAgICAgIGNvbnN0IGZpcnN0Um93Q2VsbHMgPSBmaXJzdFJvdy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd1aS10YWJsZS1jZWxsJyk7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IHRoaXMucmVmcy53cmFwcGVyO1xuXG4gICAgICAgIC8qIFRoZSBmYWxsYmFjayBhbW91bnRzIGFyZSBmb3IgdW5pdCB0ZXN0aW5nLCB0aGUgYnJvd3NlciB3aWxsIGFsd2F5cyBoYXZlXG4gICAgICAgIGFuIGFjdHVhbCBudW1iZXIuICovXG5cbiAgICAgICAgdGhpcy5jZWxsSGVpZ2h0ID0gZmlyc3RSb3dDZWxsc1swXS5jbGllbnRIZWlnaHQgfHwgNDA7XG4gICAgICAgIHRoaXMuY29udGFpbmVySGVpZ2h0ID0gY29udGFpbmVyLmNsaWVudEhlaWdodCB8fCAxNTA7XG4gICAgICAgIHRoaXMuY29udGFpbmVyV2lkdGggPSBjb250YWluZXIuY2xpZW50V2lkdGggfHwgNTAwO1xuXG4gICAgICAgIHRoaXMublJvd3NUb1JlbmRlciA9IE1hdGguY2VpbCgodGhpcy5jb250YWluZXJIZWlnaHQgKiAxLjMpIC8gdGhpcy5jZWxsSGVpZ2h0KTtcblxuICAgICAgICB0aGlzLnJvd1N0YXJ0SW5kZXggPSAwO1xuICAgICAgICB0aGlzLnJvd0VuZEluZGV4ID0gdGhpcy5uUm93c1RvUmVuZGVyO1xuXG4gICAgICAgIGNvbnN0IHRhYmxlV2lkdGggPSBmaXJzdFJvdy5jbGllbnRXaWR0aCB8fCA1MDA7XG5cbiAgICAgICAgdGhpcy54TWF4aW11bVRyYW5zbGF0aW9uID0gICB0aGlzLmNvbnRhaW5lcldpZHRoID4gdGFibGVXaWR0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB0aGlzLmNvbnRhaW5lcldpZHRoIC0gdGFibGVXaWR0aDtcblxuICAgICAgICB0aGlzLnlVcHBlckJvdW5kID0gMDtcbiAgICAgICAgdGhpcy55TG93ZXJCb3VuZCA9IHRoaXMuY29udGFpbmVySGVpZ2h0IC0gKHRoaXMublJvd3NUb1JlbmRlciAqIHRoaXMuY2VsbEhlaWdodCk7XG5cbiAgICAgICAgY29uc3QgYWRqdXN0ZWRDb2x1bW5zID0gdGhpcy5zdGF0ZS5jb2x1bW5zLm1hcChmdW5jdGlvbiBkaXNjb3ZlcldpZHRoKGNvbHVtbiwgaW5kZXgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uY29sdW1uLFxuICAgICAgICAgICAgICAgIHdpZHRoOiBNYXRoLmNlaWwoZmlyc3RSb3dDZWxsc1tpbmRleF0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGgpLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgZ2VuZXJhdGVkUm93cyA9IFtdO1xuICAgICAgICBjb25zdCByb3dzT3JkZXJlZEJ5WSA9IFtdO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5uUm93c1RvUmVuZGVyOyBpICs9IDEpIHtcbiAgICAgICAgICAgIGdlbmVyYXRlZFJvd3MucHVzaCh7XG4gICAgICAgICAgICAgICAgZGF0YTogdGhpcy5wcm9wcy5nZXRSb3coaSksXG4gICAgICAgICAgICAgICAgc2V0SW5kZXg6IGksXG4gICAgICAgICAgICAgICAgeTogdGhpcy5jZWxsSGVpZ2h0ICogaSxcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByb3dzT3JkZXJlZEJ5WS5wdXNoKGkpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBjaG9rZVJlbmRlcjogZmFsc2UsXG4gICAgICAgICAgICBjb2x1bW5zOiBhZGp1c3RlZENvbHVtbnMsXG4gICAgICAgICAgICByb3dzOiBnZW5lcmF0ZWRSb3dzLFxuICAgICAgICAgICAgcm93c09yZGVyZWRCeVk6IHJvd3NPcmRlcmVkQnlZLFxuICAgICAgICAgICAgeFNjcm9sbGVyTnViU2l6ZTogdGhpcy5jYWxjdWxhdGVYU2Nyb2xsZXJOdWJTaXplKCksXG4gICAgICAgICAgICB5U2Nyb2xsZXJOdWJTaXplOiB0aGlzLmNhbGN1bGF0ZVlTY3JvbGxlck51YlNpemUoKSxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaGFuZGxlU2Nyb2xsRG93bigpIHtcbiAgICAgICAgaWYgKCAgIHRoaXMucm93RW5kSW5kZXggPT09IHRoaXMucHJvcHMudG90YWxSb3dzXG4gICAgICAgICAgICB8fCB0aGlzLnlOZXh0ID49IHRoaXMueUxvd2VyQm91bmQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qIFNjcm9sbGluZyBkb3duLCBzbyB3ZSB3YW50IHRvIG1vdmUgdGhlIGxvd2VzdCBZIHZhbHVlIHRvIHRoZSB5TG93ZXJCb3VuZCBhbmQgcmVxdWVzdCB0aGUgbmV4dCByb3cuIFNjYWxlIGFwcHJvcHJpYXRlbHkgaWYgYSBiaWcgZGVsdGEgYW5kIG1pZ3JhdGUgYXMgbWFueSByb3dzIGFzIGFyZSBuZWNlc3NhcnkuICovXG5cbiAgICAgICAgdGhpcy5jYWNoZV9uUm93c1RvU2hpZnQgPSBNYXRoLmNlaWwoXG4gICAgICAgICAgICBNYXRoLmFicyh0aGlzLnlOZXh0IC0gdGhpcy55TG93ZXJCb3VuZCkgLyB0aGlzLmNlbGxIZWlnaHRcbiAgICAgICAgKTtcblxuICAgICAgICBpZiAodGhpcy5jYWNoZV9uUm93c1RvU2hpZnQgKyB0aGlzLnJvd0VuZEluZGV4ID4gdGhpcy5wcm9wcy50b3RhbFJvd3MpIHtcbiAgICAgICAgICAgIC8qIG1vcmUgcm93cyB0aGFuIHRoZXJlIGlzIGRhdGEgYXZhaWxhYmxlLCB0cnVuY2F0ZSAqL1xuICAgICAgICAgICAgdGhpcy5jYWNoZV9uUm93c1RvU2hpZnQgPSB0aGlzLnByb3BzLnRvdGFsUm93cyAtIHRoaXMucm93RW5kSW5kZXg7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5jYWNoZV9uUm93c1RvU2hpZnQgPiAwKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5jYWNoZV9uUm93c1RvU2hpZnQgPiB0aGlzLm5Sb3dzVG9SZW5kZXIpIHtcbiAgICAgICAgICAgICAgICAvKiBhIHZlcnkgbGFyZ2Ugc2Nyb2xsIGRlbHRhLCBjYWxjdWxhdGUgd2hlcmUgdGhlIGJvdW5kYXJpZXMgc2hvdWxkIGJlICovXG4gICAgICAgICAgICAgICAgdGhpcy5jYWNoZV9zaGlmdERlbHRhID0gdGhpcy5jYWNoZV9uUm93c1RvU2hpZnQgLSB0aGlzLm5Sb3dzVG9SZW5kZXI7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnlVcHBlckJvdW5kIC09IHRoaXMuY2FjaGVfc2hpZnREZWx0YSAqIHRoaXMuY2VsbEhlaWdodDtcbiAgICAgICAgICAgICAgICB0aGlzLnlMb3dlckJvdW5kIC09IHRoaXMuY2FjaGVfc2hpZnREZWx0YSAqIHRoaXMuY2VsbEhlaWdodDtcblxuICAgICAgICAgICAgICAgIHRoaXMucm93U3RhcnRJbmRleCArPSB0aGlzLmNhY2hlX3NoaWZ0RGVsdGE7XG4gICAgICAgICAgICAgICAgdGhpcy5yb3dFbmRJbmRleCArPSB0aGlzLmNhY2hlX3NoaWZ0RGVsdGE7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmNhY2hlX25Sb3dzVG9TaGlmdCA9IHRoaXMublJvd3NUb1JlbmRlcjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMuY2FjaGVfblJvd3NUb1NoaWZ0ID4gMCkge1xuICAgICAgICAgICAgICAgIC8qIG1vdmUgdGhlIGxvd2VzdCBZLXZhbHVlIHJvd3MgdG8gdGhlIGJvdHRvbSBvZiB0aGUgb3JkZXJpbmcgYXJyYXkgKi9cbiAgICAgICAgICAgICAgICB0aGlzLmNhY2hlX29yZGVyZWRZQXJyYXlUYXJnZXRJbmRleCA9IDA7XG5cbiAgICAgICAgICAgICAgICBmb3IgKHRoaXMuY2FjaGVfaXRlcmF0b3IgPSAwOyB0aGlzLmNhY2hlX2l0ZXJhdG9yIDwgdGhpcy5jYWNoZV9uUm93c1RvU2hpZnQ7IHRoaXMuY2FjaGVfaXRlcmF0b3IrKykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhY2hlX3RhcmdldEluZGV4ID0gdGhpcy5yb3dFbmRJbmRleCArIHRoaXMuY2FjaGVfaXRlcmF0b3I7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYWNoZV9yb3dQb2ludGVyID0gdGhpcy5zdGF0ZS5yb3dzW3RoaXMuc3RhdGUucm93c09yZGVyZWRCeVlbdGhpcy5jYWNoZV9vcmRlcmVkWUFycmF5VGFyZ2V0SW5kZXhdXTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYWNoZV9yb3dQb2ludGVyLmRhdGEgPSB0aGlzLnByb3BzLmdldFJvdyh0aGlzLmNhY2hlX3RhcmdldEluZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYWNoZV9yb3dQb2ludGVyLnNldEluZGV4ID0gdGhpcy5jYWNoZV90YXJnZXRJbmRleDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYWNoZV9yb3dQb2ludGVyLnkgPSB0aGlzLmNhY2hlX3RhcmdldEluZGV4ICogdGhpcy5jZWxsSGVpZ2h0O1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUucm93c09yZGVyZWRCeVkucHVzaCh0aGlzLnN0YXRlLnJvd3NPcmRlcmVkQnlZLnNoaWZ0KCkpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMucm93U3RhcnRJbmRleCArPSB0aGlzLmNhY2hlX25Sb3dzVG9TaGlmdDtcbiAgICAgICAgICAgICAgICB0aGlzLnJvd0VuZEluZGV4ICs9IHRoaXMuY2FjaGVfblJvd3NUb1NoaWZ0O1xuXG4gICAgICAgICAgICAgICAgdGhpcy55VXBwZXJCb3VuZCAtPSB0aGlzLmNhY2hlX25Sb3dzVG9TaGlmdCAqIHRoaXMuY2VsbEhlaWdodDtcbiAgICAgICAgICAgICAgICB0aGlzLnlMb3dlckJvdW5kIC09IHRoaXMuY2FjaGVfblJvd3NUb1NoaWZ0ICogdGhpcy5jZWxsSGVpZ2h0O1xuXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7cm93czogdGhpcy5zdGF0ZS5yb3dzfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoYW5kbGVTY3JvbGxVcCgpIHtcbiAgICAgICAgaWYgKHRoaXMucm93U3RhcnRJbmRleCA9PT0gMCB8fCB0aGlzLnlOZXh0IDw9IHRoaXMueVVwcGVyQm91bmQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qIFNjcm9sbGluZyB1cCwgc28gd2Ugd2FudCB0byBtb3ZlIHRoZSBoaWdoZXN0IFkgdmFsdWUgdG8gdGhlIHlVcHBlckJvdW5kIGFuZCByZXF1ZXN0IHRoZSBwcmV2aW91cyByb3cuIFNjYWxlIGFwcHJvcHJpYXRlbHkgaWYgYSBiaWcgZGVsdGEgYW5kIG1pZ3JhdGUgYXMgbWFueSByb3dzIGFzIGFyZSBuZWNlc3NhcnkuICovXG5cbiAgICAgICAgdGhpcy5jYWNoZV9uUm93c1RvU2hpZnQgPSBNYXRoLmNlaWwoXG4gICAgICAgICAgICBNYXRoLmFicyh0aGlzLnlOZXh0IC0gdGhpcy55VXBwZXJCb3VuZCkgLyB0aGlzLmNlbGxIZWlnaHRcbiAgICAgICAgKTtcblxuICAgICAgICBpZiAodGhpcy5yb3dTdGFydEluZGV4IC0gdGhpcy5jYWNoZV9uUm93c1RvU2hpZnQgPCAwKSB7XG4gICAgICAgICAgICB0aGlzLmNhY2hlX25Sb3dzVG9TaGlmdCA9IHRoaXMucm93U3RhcnRJbmRleDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmNhY2hlX25Sb3dzVG9TaGlmdCA+IDApIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmNhY2hlX25Sb3dzVG9TaGlmdCA+IHRoaXMublJvd3NUb1JlbmRlcikge1xuICAgICAgICAgICAgICAgIC8qIGEgdmVyeSBsYXJnZSBzY3JvbGwgZGVsdGEsIGNhbGN1bGF0ZSB3aGVyZSB0aGUgYm91bmRhcmllcyBzaG91bGQgYmUgKi9cbiAgICAgICAgICAgICAgICB0aGlzLmNhY2hlX3NoaWZ0RGVsdGEgPSB0aGlzLmNhY2hlX25Sb3dzVG9TaGlmdCAtIHRoaXMublJvd3NUb1JlbmRlcjtcblxuICAgICAgICAgICAgICAgIHRoaXMueVVwcGVyQm91bmQgKz0gdGhpcy5jYWNoZV9zaGlmdERlbHRhICogdGhpcy5jZWxsSGVpZ2h0O1xuICAgICAgICAgICAgICAgIHRoaXMueUxvd2VyQm91bmQgKz0gdGhpcy5jYWNoZV9zaGlmdERlbHRhICogdGhpcy5jZWxsSGVpZ2h0O1xuXG4gICAgICAgICAgICAgICAgdGhpcy5yb3dTdGFydEluZGV4IC09IHRoaXMuY2FjaGVfc2hpZnREZWx0YTtcbiAgICAgICAgICAgICAgICB0aGlzLnJvd0VuZEluZGV4IC09IHRoaXMuY2FjaGVfc2hpZnREZWx0YTtcblxuICAgICAgICAgICAgICAgIHRoaXMuY2FjaGVfblJvd3NUb1NoaWZ0ID0gdGhpcy5uUm93c1RvUmVuZGVyO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy5jYWNoZV9uUm93c1RvU2hpZnQgPiAwKSB7XG4gICAgICAgICAgICAgICAgLyogbW92ZSB0aGUgaGlnaGVzdCBZLXZhbHVlIHJvd3MgdG8gdGhlIHRvcCBvZiB0aGUgb3JkZXJpbmcgYXJyYXkgKi9cbiAgICAgICAgICAgICAgICB0aGlzLmNhY2hlX29yZGVyZWRZQXJyYXlUYXJnZXRJbmRleCA9IHRoaXMuc3RhdGUucm93c09yZGVyZWRCeVkubGVuZ3RoIC0gMTtcblxuICAgICAgICAgICAgICAgIGZvciAodGhpcy5jYWNoZV9pdGVyYXRvciA9IDA7IHRoaXMuY2FjaGVfaXRlcmF0b3IgPCB0aGlzLmNhY2hlX25Sb3dzVG9TaGlmdDsgdGhpcy5jYWNoZV9pdGVyYXRvcisrKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FjaGVfdGFyZ2V0SW5kZXggPSB0aGlzLnJvd1N0YXJ0SW5kZXggLSB0aGlzLmNhY2hlX2l0ZXJhdG9yIC0gMTtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhY2hlX3Jvd1BvaW50ZXIgPSB0aGlzLnN0YXRlLnJvd3NbdGhpcy5zdGF0ZS5yb3dzT3JkZXJlZEJ5WVt0aGlzLmNhY2hlX29yZGVyZWRZQXJyYXlUYXJnZXRJbmRleF1dO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhY2hlX3Jvd1BvaW50ZXIuZGF0YSA9IHRoaXMucHJvcHMuZ2V0Um93KHRoaXMuY2FjaGVfdGFyZ2V0SW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhY2hlX3Jvd1BvaW50ZXIuc2V0SW5kZXggPSB0aGlzLmNhY2hlX3RhcmdldEluZGV4O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhY2hlX3Jvd1BvaW50ZXIueSA9IHRoaXMuY2FjaGVfdGFyZ2V0SW5kZXggKiB0aGlzLmNlbGxIZWlnaHQ7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5yb3dzT3JkZXJlZEJ5WS51bnNoaWZ0KHRoaXMuc3RhdGUucm93c09yZGVyZWRCeVkucG9wKCkpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMucm93U3RhcnRJbmRleCAtPSB0aGlzLmNhY2hlX25Sb3dzVG9TaGlmdDtcbiAgICAgICAgICAgICAgICB0aGlzLnJvd0VuZEluZGV4IC09IHRoaXMuY2FjaGVfblJvd3NUb1NoaWZ0O1xuXG4gICAgICAgICAgICAgICAgdGhpcy55VXBwZXJCb3VuZCArPSB0aGlzLmNhY2hlX25Sb3dzVG9TaGlmdCAqIHRoaXMuY2VsbEhlaWdodDtcbiAgICAgICAgICAgICAgICB0aGlzLnlMb3dlckJvdW5kICs9IHRoaXMuY2FjaGVfblJvd3NUb1NoaWZ0ICogdGhpcy5jZWxsSGVpZ2h0O1xuXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7cm93czogdGhpcy5zdGF0ZS5yb3dzfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoYW5kbGVNb3ZlSW50ZW50KGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgaWYgKChldmVudC5kZWx0YVggPT09IDAgJiYgZXZlbnQuZGVsdGFZID09PSAwKVxuICAgICAgICAgICAgfHwgdGhpcy5tYW51YWxseVNjcm9sbGluZ1kgJiYgZXZlbnQuZGVsdGFZID09PSAwXG4gICAgICAgICAgICB8fCB0aGlzLm1hbnVhbGx5U2Nyb2xsaW5nWCAmJiBldmVudC5kZWx0YVggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qIGxvY2sgdGhlIHRyYW5zbGF0aW9uIGF4aXMgaWYgdGhlIHVzZXIgaXMgbWFuaXB1bGF0aW5nIHRoZSBzeW50aGV0aWMgc2Nyb2xsYmFycyAqL1xuICAgICAgICB0aGlzLnhOZXh0ID0gdGhpcy5tYW51YWxseVNjcm9sbGluZ1kgPyAwIDogdGhpcy54Q3VycmVudCAtIGV2ZW50LmRlbHRhWDtcblxuICAgICAgICBpZiAodGhpcy54TmV4dCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMueE5leHQgPSAwO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMueE5leHQgPCB0aGlzLnhNYXhpbXVtVHJhbnNsYXRpb24pIHtcbiAgICAgICAgICAgIHRoaXMueE5leHQgPSB0aGlzLnhNYXhpbXVtVHJhbnNsYXRpb247XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnlOZXh0ID0gdGhpcy5tYW51YWxseVNjcm9sbGluZ1ggPyAwIDogdGhpcy55Q3VycmVudCAtIGV2ZW50LmRlbHRhWTtcblxuICAgICAgICBpZiAodGhpcy55TmV4dCA8IHRoaXMueUN1cnJlbnQpIHtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlU2Nyb2xsRG93bigpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMueU5leHQgPiB0aGlzLnlDdXJyZW50KSB7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZVNjcm9sbFVwKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy55TmV4dCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMueU5leHQgPSAwO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMueU5leHQgPCB0aGlzLnlMb3dlckJvdW5kKSB7XG4gICAgICAgICAgICB0aGlzLnlOZXh0ID0gdGhpcy55TG93ZXJCb3VuZDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnhOZXh0ICE9PSB0aGlzLnhDdXJyZW50KSB7XG4gICAgICAgICAgICB0aGlzLnJlZnMuaGVhZC5zdHlsZVt0cmFuc2Zvcm1Qcm9wXSA9IGB0cmFuc2xhdGUzZCgke3RoaXMueE5leHR9cHgsIDBweCwgMHB4KWA7XG4gICAgICAgIH1cblxuICAgICAgICAvKiBNb3ZlIHdyYXBwZXIgKi9cbiAgICAgICAgdGhpcy5yZWZzLmJvZHkuc3R5bGVbdHJhbnNmb3JtUHJvcF0gPSBgdHJhbnNsYXRlM2QoJHt0aGlzLnhOZXh0fXB4LCAke3RoaXMueU5leHR9cHgsIDBweClgO1xuXG4gICAgICAgIC8qIG1vdmUgc2Nyb2xsYmFyIG51YnMgKi9cbiAgICAgICAgdGhpcy5yZWZzLnhTY3JvbGxlck51Yi5zdHlsZVt0cmFuc2Zvcm1Qcm9wXSA9IGB0cmFuc2xhdGUzZCgke01hdGguYWJzKHRoaXMueE5leHQpfXB4LCAwcHgsIDBweClgO1xuXG4gICAgICAgIHRoaXMueVNjcm9sbE51YlBvc2l0aW9uID0gKHRoaXMucm93U3RhcnRJbmRleCAvIHRoaXMucHJvcHMudG90YWxSb3dzKSAqIHRoaXMuY29udGFpbmVySGVpZ2h0O1xuXG4gICAgICAgIGlmICh0aGlzLnlTY3JvbGxOdWJQb3NpdGlvbiArIHRoaXMuc3RhdGUueVNjcm9sbGVyTnViU2l6ZSA+IHRoaXMuY29udGFpbmVySGVpZ2h0KSB7XG4gICAgICAgICAgICB0aGlzLnlTY3JvbGxOdWJQb3NpdGlvbiA9IHRoaXMuY29udGFpbmVySGVpZ2h0IC0gdGhpcy5zdGF0ZS55U2Nyb2xsZXJOdWJTaXplO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5yZWZzLnlTY3JvbGxlck51Yi5zdHlsZVt0cmFuc2Zvcm1Qcm9wXSA9IGB0cmFuc2xhdGUzZCgwcHgsICR7dGhpcy55U2Nyb2xsTnViUG9zaXRpb259cHgsIDBweClgO1xuXG4gICAgICAgIHRoaXMueEN1cnJlbnQgPSB0aGlzLnhOZXh0O1xuICAgICAgICB0aGlzLnlDdXJyZW50ID0gdGhpcy55TmV4dDtcbiAgICB9XG5cbiAgICBoYW5kbGVDb2x1bW5SZXNpemUoZGVsdGEpIHtcbiAgICAgICAgaWYgKGRlbHRhID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgYWRqdXN0ZWREZWx0YSA9IGRlbHRhO1xuICAgICAgICBsZXQgbmV3VGFibGVXaWR0aCA9IDA7XG5cbiAgICAgICAgbGV0IGNvcHkgPSB0aGlzLnN0YXRlLmNvbHVtbnMubWFwKGRlZmluaXRpb24gPT4ge1xuICAgICAgICAgICAgaWYgKGRlZmluaXRpb24ubWFwcGluZyAhPT0gdGhpcy5tYW51YWxseVJlc2l6aW5nQ29sdW1uLm1hcHBpbmcpIHtcbiAgICAgICAgICAgICAgICBuZXdUYWJsZVdpZHRoICs9IGRlZmluaXRpb24ud2lkdGg7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gZGVmaW5pdGlvbjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLyogQmVmb3JlIGFueSBtZWFzdXJlbWVudHMgYXJlIGFwcGxpZWQsIGZpcnN0IHdlIG5lZWQgdG8gY29tcGFyZSB0aGUgZGVsdGEgdG8gdGhlIGtub3duIGNlbGwgd2lkdGggdGhyZXNob2xkcyBhbmQgc2NhbGUgYXBwcm9wcmlhdGVseS4gKi9cblxuICAgICAgICAgICAgaWYgKCAgIGFkanVzdGVkRGVsdGEgPCAwXG4gICAgICAgICAgICAgICAgJiYgIWlzTmFOKHRoaXMubWluaW11bUNvbHVtbldpZHRoKVxuICAgICAgICAgICAgICAgICYmIGRlZmluaXRpb24ud2lkdGggKyBhZGp1c3RlZERlbHRhIDwgdGhpcy5taW5pbXVtQ29sdW1uV2lkdGgpIHtcbiAgICAgICAgICAgICAgICAgICAgYWRqdXN0ZWREZWx0YSA9IHRoaXMubWluaW11bUNvbHVtbldpZHRoIC0gZGVmaW5pdGlvbi53aWR0aDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIWlzTmFOKHRoaXMubWF4aW11bUNvbHVtbldpZHRoKVxuICAgICAgICAgICAgICAgICAgICAgICAmJiBkZWZpbml0aW9uLndpZHRoICsgYWRqdXN0ZWREZWx0YSA+IHRoaXMubWF4aW11bUNvbHVtbldpZHRoKSB7XG4gICAgICAgICAgICAgICAgYWRqdXN0ZWREZWx0YSA9IHRoaXMubWF4aW11bUNvbHVtbldpZHRoIC0gZGVmaW5pdGlvbi53aWR0aDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbmV3VGFibGVXaWR0aCArPSBkZWZpbml0aW9uLndpZHRoICsgYWRqdXN0ZWREZWx0YTtcblxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5kZWZpbml0aW9uLFxuICAgICAgICAgICAgICAgIHdpZHRoOiBkZWZpbml0aW9uLndpZHRoICsgYWRqdXN0ZWREZWx0YSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChuZXdUYWJsZVdpZHRoIDw9IHRoaXMuY29udGFpbmVyV2lkdGgpIHtcbiAgICAgICAgICAgIHRoaXMueE1heGltdW1UcmFuc2xhdGlvbiA9IDA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnhNYXhpbXVtVHJhbnNsYXRpb24gLT0gYWRqdXN0ZWREZWx0YTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgY29sdW1uczogY29weSxcbiAgICAgICAgICAgIHhTY3JvbGxlck51YlNpemU6IHRoaXMuY2FsY3VsYXRlWFNjcm9sbGVyTnViU2l6ZSgpLFxuICAgICAgICB9LCAoKSA9PiB7XG4gICAgICAgICAgICAvKiBJZiBhIGNvbHVtbiBzaHJpbmtzLCB0aGUgd3JhcHBlciBYIHRyYW5zbGF0aW9uIG5lZWRzIHRvIGJlIGFkanVzdGVkIGFjY29yZGluZ2x5IG9yXG4gICAgICAgICAgICB3ZSdsbCBzZWUgdW53YW50ZWQgd2hpdGVzcGFjZSBvbiB0aGUgcmlnaHQgc2lkZS4gSWYgdGhlIHRhYmxlIHdpZHRoIGJlY29tZXMgc21hbGxlciB0aGFuIHRoZSBvdmVyYWxsIGNvbnRhaW5lciwgd2hpdGVzcGFjZSB3aWxsIGFwcGVhciByZWdhcmRsZXNzLiAqL1xuICAgICAgICAgICAgaWYgKGFkanVzdGVkRGVsdGEgPCAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVNb3ZlSW50ZW50KHtcbiAgICAgICAgICAgICAgICAgICAgZGVsdGFYOiBhZGp1c3RlZERlbHRhLFxuICAgICAgICAgICAgICAgICAgICBkZWx0YVk6IDAsXG4gICAgICAgICAgICAgICAgICAgIHByZXZlbnREZWZhdWx0OiBub29wLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBoYW5kbGVDb2x1bW5EcmFnU3RhcnQoZXZlbnQpIHtcbiAgICAgICAgaWYgKGV2ZW50LmJ1dHRvbiA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5sYXN0Q29sdW1uWCA9IGV2ZW50LmNsaWVudFg7XG4gICAgICAgICAgICB0aGlzLm1hbnVhbGx5UmVzaXppbmdDb2x1bW4gPSB0aGlzLnN0YXRlLmNvbHVtbnNbZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1jb2x1bW4taW5kZXgnKV07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoYW5kbGVYU2Nyb2xsZXJEcmFnU3RhcnQoZXZlbnQpIHtcbiAgICAgICAgaWYgKGV2ZW50LmJ1dHRvbiA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5sYXN0WFNjcm9sbCA9IGV2ZW50LmNsaWVudFg7XG4gICAgICAgICAgICB0aGlzLm1hbnVhbGx5U2Nyb2xsaW5nWCA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoYW5kbGVZU2Nyb2xsZXJEcmFnU3RhcnQoZXZlbnQpIHtcbiAgICAgICAgaWYgKGV2ZW50LmJ1dHRvbiA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5sYXN0WVNjcm9sbCA9IGV2ZW50LmNsaWVudFk7XG4gICAgICAgICAgICB0aGlzLm1hbnVhbGx5U2Nyb2xsaW5nWSA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoYW5kbGVEcmFnTW92ZShldmVudCkge1xuICAgICAgICBpZiAoZXZlbnQuYnV0dG9uID09PSAwKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5tYW51YWxseVJlc2l6aW5nQ29sdW1uKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVDb2x1bW5SZXNpemUoZXZlbnQuY2xpZW50WCAtIHRoaXMubGFzdENvbHVtblgpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5sYXN0Q29sdW1uWCA9IGV2ZW50LmNsaWVudFg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLm1hbnVhbGx5U2Nyb2xsaW5nWCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlTW92ZUludGVudCh7XG4gICAgICAgICAgICAgICAgICAgIGRlbHRhWDogZXZlbnQuY2xpZW50WCAtIHRoaXMubGFzdFhTY3JvbGwsXG4gICAgICAgICAgICAgICAgICAgIGRlbHRhWTogMCxcbiAgICAgICAgICAgICAgICAgICAgcHJldmVudERlZmF1bHQ6IG5vb3AsXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmxhc3RYU2Nyb2xsID0gZXZlbnQuY2xpZW50WDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMubWFudWFsbHlTY3JvbGxpbmdZKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVNb3ZlSW50ZW50KHtcbiAgICAgICAgICAgICAgICAgICAgZGVsdGFYOiAwLFxuICAgICAgICAgICAgICAgICAgICBkZWx0YVk6ICgoZXZlbnQuY2xpZW50WSAtIHRoaXMubGFzdFlTY3JvbGwpIC8gdGhpcy5jb250YWluZXJIZWlnaHQpICogdGhpcy5wcm9wcy50b3RhbFJvd3MgKiB0aGlzLmNlbGxIZWlnaHQsXG4gICAgICAgICAgICAgICAgICAgIHByZXZlbnREZWZhdWx0OiBub29wLFxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5sYXN0WVNjcm9sbCA9IGV2ZW50LmNsaWVudFk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoYW5kbGVEcmFnRW5kKCkge1xuICAgICAgICBpZiAodGhpcy5tYW51YWxseVJlc2l6aW5nQ29sdW1uKSB7XG4gICAgICAgICAgICB0aGlzLm1hbnVhbGx5UmVzaXppbmdDb2x1bW4gPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMubWFudWFsbHlTY3JvbGxpbmdYKSB7XG4gICAgICAgICAgICB0aGlzLm1hbnVhbGx5U2Nyb2xsaW5nWCA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMubWFudWFsbHlTY3JvbGxpbmdZKSB7XG4gICAgICAgICAgICB0aGlzLm1hbnVhbGx5U2Nyb2xsaW5nWSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaGFuZGxlUm93Q2xpY2soZXZlbnQsIGNsaWNrZWRSb3dEYXRhKSB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLm9uUm93SW50ZXJhY3QpIHtcbiAgICAgICAgICAgIGV2ZW50LnBlcnNpc3QoKTtcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25Sb3dJbnRlcmFjdChldmVudCwgY2xpY2tlZFJvd0RhdGEpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBjdXJyZW50QWN0aXZlUm93SW5kZXg6IGZpbmRXaGVyZShcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnJvd3MsICdkYXRhJywgY2xpY2tlZFJvd0RhdGFcbiAgICAgICAgICAgICkuc2V0SW5kZXhcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVuZGVyUm93cygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUucm93cy5tYXAoKHJvdywgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPFJvdyBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICAgICAgICAgYWN0aXZlPXtyb3cuc2V0SW5kZXggPT09IHRoaXMuc3RhdGUuY3VycmVudEFjdGl2ZVJvd0luZGV4fVxuICAgICAgICAgICAgICAgICAgICAgY29sdW1ucz17dGhpcy5zdGF0ZS5jb2x1bW5zfVxuICAgICAgICAgICAgICAgICAgICAgZGF0YT17cm93LmRhdGF9XG4gICAgICAgICAgICAgICAgICAgICBldmVuPXsocm93LnNldEluZGV4KSAlIDIgPT09IDB9XG4gICAgICAgICAgICAgICAgICAgICB5PXtyb3cueX1cbiAgICAgICAgICAgICAgICAgICAgIG9uSW50ZXJhY3Q9e3RoaXMuaGFuZGxlUm93Q2xpY2t9XG4gICAgICAgICAgICAgICAgICAgICBvbkNlbGxJbnRlcmFjdD17dGhpcy5wcm9wcy5vbkNlbGxJbnRlcmFjdH0gLz5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlbmRlckJvZHkoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IHJlZj0nYm9keSdcbiAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSd1aS10YWJsZS1ib2R5Jz5cbiAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJSb3dzKCl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICByZW5kZXJIZWFkKCkge1xuICAgICAgICBpZiAoIXRoaXMuc3RhdGUuY2hva2VSZW5kZXIpIHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdiByZWY9J2hlYWQnIGNsYXNzTmFtZT0ndWktdGFibGUtaGVhZGVyJz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3VpLXRhYmxlLXJvdyB1aS10YWJsZS1oZWFkZXItcm93Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmNvbHVtbnMubWFwKChjb2x1bW4sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0ndWktdGFibGUtY2VsbCB1aS10YWJsZS1oZWFkZXItY2VsbCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3dpZHRoOiB0eXBlb2YgY29sdW1uLndpZHRoID09PSAnbnVtYmVyJyA/IGNvbHVtbi53aWR0aCA6IG51bGx9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd1aS10YWJsZS1jZWxsLWlubmVyJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3VpLXRhYmxlLWNlbGwtaW5uZXItdGV4dCc+e2NvbHVtbi50aXRsZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd1aS10YWJsZS1oZWFkZXItY2VsbC1yZXNpemUtaGFuZGxlJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWNvbHVtbi1pbmRleD17aW5kZXh9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VEb3duPXt0aGlzLmhhbmRsZUNvbHVtbkRyYWdTdGFydH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXJTY3JvbGxiYXJzKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndWktdGFibGUteC1zY3JvbGxlcidcbiAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VEb3duPXt0aGlzLmhhbmRsZVhTY3JvbGxlckRyYWdTdGFydH0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgcmVmPSd4U2Nyb2xsZXJOdWInXG4gICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSd1aS10YWJsZS14LXNjcm9sbGVyLW51YidcbiAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3dpZHRoOiB0aGlzLnN0YXRlLnhTY3JvbGxlck51YlNpemV9fSAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd1aS10YWJsZS15LXNjcm9sbGVyJ1xuICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZURvd249e3RoaXMuaGFuZGxlWVNjcm9sbGVyRHJhZ1N0YXJ0fT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiByZWY9J3lTY3JvbGxlck51YidcbiAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3VpLXRhYmxlLXktc2Nyb2xsZXItbnViJ1xuICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7aGVpZ2h0OiB0aGlzLnN0YXRlLnlTY3JvbGxlck51YlNpemV9fSAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgY2hhbmdlQWN0aXZlUm93KGRlbHRhKSB7XG4gICAgICAgIHRoaXMuY2FjaGVfbmV4dEFjdGl2ZVJvdyA9IGZpbmRXaGVyZSh0aGlzLnN0YXRlLnJvd3MsICdzZXRJbmRleCcsIHRoaXMuc3RhdGUuY3VycmVudEFjdGl2ZVJvd0luZGV4ICsgZGVsdGEpO1xuXG4gICAgICAgIGlmICh0aGlzLmNhY2hlX25leHRBY3RpdmVSb3cpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGFyaWFTcG9rZW5PdXRwdXQ6IHRoaXMuY2FjaGVfbmV4dEFjdGl2ZVJvdy5kYXRhW3RoaXMuc3RhdGUuY29sdW1uc1swXS5tYXBwaW5nXSxcbiAgICAgICAgICAgICAgICBjdXJyZW50QWN0aXZlUm93SW5kZXg6IHRoaXMuY2FjaGVfbmV4dEFjdGl2ZVJvdy5zZXRJbmRleCxcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgKGRlbHRhID09PSAtMSAmJiB0aGlzLmNhY2hlX25leHRBY3RpdmVSb3cueSAqIC0xID4gdGhpcy55Q3VycmVudClcbiAgICAgICAgICAgICAgICB8fCAoZGVsdGEgPT09IDEgJiYgdGhpcy5jYWNoZV9uZXh0QWN0aXZlUm93LnkgKiAtMSAtIHRoaXMuY2VsbEhlaWdodCA8IHRoaXMueUN1cnJlbnQgLSB0aGlzLmNvbnRhaW5lckhlaWdodCArIHRoaXMuY2VsbEhlaWdodCkgLy8gMSB1bml0IG9mIGNlbGxIZWlnaHQgaXMgcmVtb3ZlZCB0byBjb21wZW5zYXRlIGZvciB0aGUgaGVhZGVyIHJvd1xuICAgICAgICAgICAgKSB7IC8vIERlc3RpbmF0aW9uIHJvdyBpcyBvdXRzaWRlIHRoZSB2aWV3cG9ydCwgc28gc2ltdWxhdGUgYSBzY3JvbGxcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZU1vdmVJbnRlbnQoe1xuICAgICAgICAgICAgICAgICAgICBkZWx0YVg6IDAsXG4gICAgICAgICAgICAgICAgICAgIGRlbHRhWTogdGhpcy5jZWxsSGVpZ2h0ICogZGVsdGEsXG4gICAgICAgICAgICAgICAgICAgIHByZXZlbnREZWZhdWx0OiBub29wLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKCAgIChkZWx0YSA9PT0gLTEgJiYgdGhpcy5zdGF0ZS5jdXJyZW50QWN0aXZlUm93SW5kZXggPiAwKVxuICAgICAgICAgICAgICAgICAgIHx8IChkZWx0YSA9PT0gMSAmJiB0aGlzLnN0YXRlLmN1cnJlbnRBY3RpdmVSb3dJbmRleCA8IHRoaXMucHJvcHMudG90YWxSb3dzKSkge1xuICAgICAgICAgICAgLypcbiAgICAgICAgICAgICAgICBUaGUgZGVzdGluYXRpb24gcm93IGlzbid0IHJlbmRlcmVkLCBzbyB3ZSBuZWVkIHRvIHRyYW5zbGF0ZSBlbm91Z2ggcm93cyBmb3IgaXQgdG8gZmVhc2libHkgYmUgc2hvd25cbiAgICAgICAgICAgICAgICBpbiB0aGUgdmlld3BvcnQuXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHRoaXMuaGFuZGxlTW92ZUludGVudCh7XG4gICAgICAgICAgICAgICAgZGVsdGFYOiAwLFxuICAgICAgICAgICAgICAgIGRlbHRhWTogKCAgICggICAgdGhpcy5yb3dTdGFydEluZGV4ID4gdGhpcy5zdGF0ZS5jdXJyZW50QWN0aXZlUm93SW5kZXhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICYmIHRoaXMuc3RhdGUuY3VycmVudEFjdGl2ZVJvd0luZGV4IC0gdGhpcy5yb3dTdGFydEluZGV4KVxuICAgICAgICAgICAgICAgICAgICAgICAgIHx8ICggICAgdGhpcy5yb3dTdGFydEluZGV4IDwgdGhpcy5zdGF0ZS5jdXJyZW50QWN0aXZlUm93SW5kZXhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICYmIHRoaXMuc3RhdGUuY3VycmVudEFjdGl2ZVJvd0luZGV4IC0gdGhpcy5yb3dTdGFydEluZGV4KVxuICAgICAgICAgICAgICAgICAgICAgICAgICsgZGVsdGEpICogdGhpcy5jZWxsSGVpZ2h0LFxuICAgICAgICAgICAgICAgIHByZXZlbnREZWZhdWx0OiBub29wLFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIHN0YXJ0IHRoZSBwcm9jZXNzIGFnYWluLCBub3cgdGhhdCB0aGUgcm93IGlzIGF2YWlsYWJsZVxuICAgICAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB0aGlzLmNoYW5nZUFjdGl2ZVJvdyhkZWx0YSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jYWNoZV9uZXh0QWN0aXZlUm93ID0gbnVsbDtcbiAgICB9XG5cbiAgICBhcmlhRXhwb3NlRnVsbFJvd0RhdGEoKSB7XG4gICAgICAgIGxldCByb3cgPSBmaW5kV2hlcmUodGhpcy5zdGF0ZS5yb3dzLCAnc2V0SW5kZXgnLCB0aGlzLnN0YXRlLmN1cnJlbnRBY3RpdmVSb3dJbmRleCk7XG5cbiAgICAgICAgaWYgKHJvdykge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgYXJpYVNwb2tlbk91dHB1dDogdGhpcy5zdGF0ZS5jb2x1bW5zLm1hcChjb2x1bW4gPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYCR7Y29sdW1uLnRpdGxlfTogJHtyb3cuZGF0YVtjb2x1bW4ubWFwcGluZ119YDtcbiAgICAgICAgICAgICAgICB9KS5qb2luKCdcXG4nKSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaGFuZGxlS2V5RG93bihldmVudCkge1xuICAgICAgICBzd2l0Y2ggKGV2ZW50LmtleSkge1xuICAgICAgICBjYXNlICdBcnJvd0Rvd24nOlxuICAgICAgICAgICAgdGhpcy5jaGFuZ2VBY3RpdmVSb3coMSk7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ0Fycm93VXAnOlxuICAgICAgICAgICAgdGhpcy5jaGFuZ2VBY3RpdmVSb3coLTEpO1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdFbnRlcic6XG4gICAgICAgICAgICB0aGlzLmFyaWFFeHBvc2VGdWxsUm93RGF0YSgpO1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnByb3BzLm9uS2V5RG93biA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgZXZlbnQucGVyc2lzdCgpO1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5vbktleURvd24oZXZlbnQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyTm90aWZpY2F0aW9uKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiByZWY9J2FyaWEnXG4gICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17dGhpcy5wcm9wcy5vZmZzY3JlZW5DbGFzc31cbiAgICAgICAgICAgICAgICAgYXJpYS1saXZlPSdwb2xpdGUnPlxuICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmFyaWFTcG9rZW5PdXRwdXR9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IHsuLi50aGlzLnByb3BzfVxuICAgICAgICAgICAgICAgICByZWY9J3dyYXBwZXInXG4gICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y3goe1xuICAgICAgICAgICAgICAgICAgICAndWktdGFibGUtd3JhcHBlcic6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIFt0aGlzLnByb3BzLmNsYXNzTmFtZV06ICEhdGhpcy5wcm9wcy5jbGFzc05hbWUsXG4gICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICBvbktleURvd249e3RoaXMuaGFuZGxlS2V5RG93bn1cbiAgICAgICAgICAgICAgICAgb25Nb3VzZU1vdmU9e3RoaXMuaGFuZGxlRHJhZ01vdmV9XG4gICAgICAgICAgICAgICAgIG9uTW91c2VVcD17dGhpcy5oYW5kbGVEcmFnRW5kfVxuICAgICAgICAgICAgICAgICBvbldoZWVsPXt0aGlzLmhhbmRsZU1vdmVJbnRlbnR9XG4gICAgICAgICAgICAgICAgIHRhYkluZGV4PScwJz5cbiAgICAgICAgICAgICAgICA8ZGl2IHJlZj0ndGFibGUnXG4gICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3VpLXRhYmxlJz5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMucmVuZGVySGVhZCgpfVxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJCb2R5KCl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAge3RoaXMucmVuZGVyTm90aWZpY2F0aW9uKCl9XG4gICAgICAgICAgICAgICAge3RoaXMucmVuZGVyU2Nyb2xsYmFycygpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5VSVRhYmxlLnByb3BUeXBlcyA9IHtcbiAgICBjb2x1bW5zOiBSZWFjdC5Qcm9wVHlwZXMuYXJyYXlPZihcbiAgICAgICAgUmVhY3QuUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgICAgICAgIG1hcHBpbmc6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgICAgICByZXNpemFibGU6IFJlYWN0LlByb3BUeXBlcy5ib29sLFxuICAgICAgICAgICAgdGl0bGU6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgICAgICB3aWR0aDogUmVhY3QuUHJvcFR5cGVzLm51bWJlcixcbiAgICAgICAgfSlcbiAgICApLFxuICAgIGdldFJvdzogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gICAgb2Zmc2NyZWVuQ2xhc3M6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gICAgb25DZWxsSW50ZXJhY3Q6IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuICAgIG9uUm93SW50ZXJhY3Q6IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuICAgIHRvdGFsUm93czogUmVhY3QuUHJvcFR5cGVzLm51bWJlcixcbn07XG5cblVJVGFibGUuZGVmYXVsdFByb3BzID0ge1xuICAgIGNvbHVtbnM6IFtdLFxuICAgIGdldFJvdzogbm9vcCxcbiAgICBvZmZzY3JlZW5DbGFzczogJ3VpLW9mZnNjcmVlbicsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBVSVRhYmxlO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBVSVZpZXcgZnJvbSAnLi4vVUlWaWV3JztcbmltcG9ydCBDZWxsIGZyb20gJy4vY2VsbCc7XG5pbXBvcnQgdHJhbnNmb3JtUHJvcCBmcm9tICcuLi9VSVV0aWxzL3RyYW5zZm9ybSc7XG5cbmNsYXNzIFVJVGFibGVSb3cgZXh0ZW5kcyBVSVZpZXcge1xuICAgIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICAgICAgdGhpcy5oYW5kbGVDbGljayA9IHRoaXMuaGFuZGxlQ2xpY2suYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBpbml0aWFsU3RhdGUoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBkYXRhOiB0aGlzLnByb3BzLmRhdGEsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgICAgaWYgKG5leHRQcm9wcy5kYXRhICE9PSB0aGlzLnByb3BzLmRhdGEpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkYXRhOiBuZXh0UHJvcHMuZGF0YSB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNob3VsZENvbXBvbmVudFVwZGF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgd2FpdEZvckNvbnRlbnRJZk5lY2Vzc2FyeSgpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuZGF0YSBpbnN0YW5jZW9mIFByb21pc2UpIHtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuZGF0YS50aGVuKGZ1bmN0aW9uIGNhdXRpb3VzbHlTZXRSb3dEYXRhKHByb21pc2UsIHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUuZGF0YSA9PT0gcHJvbWlzZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtkYXRhOiB2YWx1ZX0pO1xuICAgICAgICAgICAgICAgIH0gLy8gb25seSByZXBsYWNlIGlmIHdlJ3JlIGxvb2tpbmcgYXQgdGhlIHNhbWUgcHJvbWlzZSwgb3RoZXJ3aXNlIGRvIG5vdGhpbmdcbiAgICAgICAgICAgIH0uYmluZCh0aGlzLCB0aGlzLnN0YXRlLmRhdGEpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLndhaXRGb3JDb250ZW50SWZOZWNlc3NhcnkoKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgICAgIHRoaXMud2FpdEZvckNvbnRlbnRJZk5lY2Vzc2FyeSgpO1xuICAgIH1cblxuICAgIGdldENsYXNzZXMoKSB7XG4gICAgICAgIGxldCBjbGFzc2VzID0gJ3VpLXRhYmxlLXJvdyc7XG5cbiAgICAgICAgaWYgKHRoaXMucHJvcHMuZXZlbikge1xuICAgICAgICAgICAgY2xhc3NlcyArPSAnIHVpLXRhYmxlLXJvdy1ldmVuJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNsYXNzZXMgKz0gJyB1aS10YWJsZS1yb3ctb2RkJztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmRhdGEgaW5zdGFuY2VvZiBQcm9taXNlKSB7XG4gICAgICAgICAgICBjbGFzc2VzICs9ICcgdWktdGFibGUtcm93LWxvYWRpbmcnO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMucHJvcHMuYWN0aXZlKSB7XG4gICAgICAgICAgICBjbGFzc2VzICs9ICcgdWktdGFibGUtcm93LWFjdGl2ZSc7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY2xhc3NlcztcbiAgICB9XG5cbiAgICByZW5kZXJDZWxscygpIHtcbiAgICAgICAgbGV0IGRhdGEgPSB0aGlzLnN0YXRlLmRhdGEgaW5zdGFuY2VvZiBQcm9taXNlID8ge30gOiB0aGlzLnN0YXRlLmRhdGE7XG5cbiAgICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnByb3BzLmNvbHVtbnMubWFwKChkZWZpbml0aW9uLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxDZWxsIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e2RhdGFbZGVmaW5pdGlvbi5tYXBwaW5nXX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9e2RlZmluaXRpb24ud2lkdGh9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uSW50ZXJhY3Q9e3RoaXMucHJvcHMub25DZWxsSW50ZXJhY3R9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJvdz17dGhpcy5zdGF0ZS5kYXRhfSAvPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhhbmRsZUNsaWNrKGV2ZW50KSB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLm9uSW50ZXJhY3QpIHtcbiAgICAgICAgICAgIGV2ZW50LnBlcnNpc3QoKTtcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25JbnRlcmFjdChldmVudCwgdGhpcy5zdGF0ZS5kYXRhKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLmdldENsYXNzZXMoKX1cbiAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgW3RyYW5zZm9ybVByb3BdOiAgIHRoaXMucHJvcHMueVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gYHRyYW5zbGF0ZTNkKDBweCwgJHt0aGlzLnByb3BzLnl9cHgsIDBweClgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsXG4gICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2t9PlxuICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlckNlbGxzKCl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblVJVGFibGVSb3cucHJvcFR5cGVzID0ge1xuICAgIGNvbHVtbnM6IFJlYWN0LlByb3BUeXBlcy5hcnJheSxcbiAgICBldmVuOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbCxcbiAgICBkYXRhOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LFxuICAgIG9uQ2VsbEludGVyYWN0OiBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgICBvbkludGVyYWN0OiBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgICB5OiBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgVUlUYWJsZVJvdztcbiIsIi8qKlxuICogRGlzdGlsbCByaWNoIGVudGl0eSBkYXRhIG1hdGNoZWQgdmlhIHR5cGVhaGVhZCBpbnB1dCBpbnRvIHNpbXBsZSB2aXN1YWwgYWJzdHJhY3Rpb25zLlxuICogQGNsYXNzIFVJVG9rZW5pemVkSW5wdXRcbiAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFVJVHlwZWFoZWFkSW5wdXQgZnJvbSAnLi4vVUlUeXBlYWhlYWRJbnB1dCc7XG5pbXBvcnQgVUlWaWV3IGZyb20gJy4uL1VJVmlldyc7XG5pbXBvcnQgY3ggZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgbm9vcCBmcm9tICcuLi9VSVV0aWxzL25vb3AnO1xuXG5jb25zdCBmaXJzdCA9IGZ1bmN0aW9uIGdldEZpcnN0QXJyYXlJdGVtKGFycmF5KSB7XG4gICAgcmV0dXJuIGFycmF5WzBdO1xufTtcblxuY29uc3QgbGFzdCA9IGZ1bmN0aW9uIGdldExhc3RBcnJheUl0ZW0oYXJyYXkpIHtcbiAgICByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gMV07XG59O1xuXG5jb25zdCB3aXRob3V0ID0gZnVuY3Rpb24gcmVqZWN0U29tZUFycmF5SXRlbXMoYmFzZUFycmF5LCAuLi50b0JlRXhjbHVkZWQpIHtcbiAgICByZXR1cm4gYmFzZUFycmF5LmZpbHRlcihmdW5jdGlvbiByZWplY3RTb21lKGl0ZW0pIHtcbiAgICAgICAgcmV0dXJuIHRvQmVFeGNsdWRlZC5pbmRleE9mKGl0ZW0pID09PSAtMTtcbiAgICB9KTtcbn07XG5cbmNsYXNzIFVJVG9rZW5pemVkSW5wdXQgZXh0ZW5kcyBVSVZpZXcge1xuICAgIGluaXRpYWxTdGF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHRva2VuaXplZEVudGl0eUluZGljZXNTZWxlY3RlZDogW10sXG4gICAgICAgICAgICB0b2tlbml6ZWRFbnRpdHlJbmRpY2VzOiBbXSxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUpIHtcbiAgICAgICAgbGV0IHByZXZpb3VzSW5kaWNlcyA9IHByZXZTdGF0ZS50b2tlbml6ZWRFbnRpdHlJbmRpY2VzO1xuICAgICAgICBsZXQgcHJldmlvdXNTZWxlY3RlZEluZGljZXMgPSBwcmV2U3RhdGUudG9rZW5pemVkRW50aXR5SW5kaWNlc1NlbGVjdGVkO1xuICAgICAgICBsZXQgY3VycmVudEluZGljZXMgPSB0aGlzLnN0YXRlLnRva2VuaXplZEVudGl0eUluZGljZXM7XG4gICAgICAgIGxldCBjdXJyZW50U2VsZWN0ZWRJbmRpY2VzID0gdGhpcy5zdGF0ZS50b2tlbml6ZWRFbnRpdHlJbmRpY2VzU2VsZWN0ZWQ7XG5cbiAgICAgICAgaWYgKHByZXZpb3VzSW5kaWNlcyAhPT0gY3VycmVudEluZGljZXMpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25Ub2tlbkNoYW5nZShcbiAgICAgICAgICAgICAgICBjdXJyZW50U2VsZWN0ZWRJbmRpY2VzLm1hcChpbmRleCA9PiB0aGlzLnByb3BzLmVudGl0aWVzW2luZGV4XSlcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocHJldmlvdXNTZWxlY3RlZEluZGljZXMgIT09IGN1cnJlbnRTZWxlY3RlZEluZGljZXMpIHsgLy8gbW92ZSBmb2N1c1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRTZWxlY3RlZEluZGljZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfSBlbHNlIGlmICggICBjdXJyZW50U2VsZWN0ZWRJbmRpY2VzLmxlbmd0aCA9PT0gMVxuICAgICAgICAgICAgICAgICAgICAgICB8fCBjdXJyZW50U2VsZWN0ZWRJbmRpY2VzWzBdICE9PSBwcmV2aW91c1NlbGVjdGVkSW5kaWNlc1swXSAvKiBtdWx0aSBzZWxlY3Rpb24sIGxlZnR3YXJkICovKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWZzW2B0b2tlbl8ke2N1cnJlbnRTZWxlY3RlZEluZGljZXNbMF19YF0uZm9jdXMoKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobGFzdChjdXJyZW50U2VsZWN0ZWRJbmRpY2VzKSAhPT0gbGFzdChwcmV2aW91c1NlbGVjdGVkSW5kaWNlcykgLyogbXVsdGkgc2VsZWN0aW9uLCByaWdodHdhcmQgKi8pIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlZnNbYHRva2VuXyR7bGFzdChjdXJyZW50U2VsZWN0ZWRJbmRpY2VzKX1gXS5mb2N1cygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaGFuZGxlRW50aXR5U2VsZWN0ZWQoaW5kZXgpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUudG9rZW5pemVkRW50aXR5SW5kaWNlcy5pbmRleE9mKGluZGV4KSA9PT0gLTEpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3Rva2VuaXplZEVudGl0eUluZGljZXM6IHRoaXMuc3RhdGUudG9rZW5pemVkRW50aXR5SW5kaWNlcy5jb25jYXQoaW5kZXgpfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoYW5kbGVJbnB1dEZvY3VzKGV2ZW50KSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3Rva2VuaXplZEVudGl0eUluZGljZXNTZWxlY3RlZDogW119KTtcblxuICAgICAgICBpZiAodHlwZW9mIHRoaXMucHJvcHMuaW5wdXRQcm9wcy5vbkZvY3VzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBldmVudC5wZXJzaXN0KCk7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmlucHV0UHJvcHMub25Gb2N1cyhldmVudCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZWxlY3RQcmV2aW91c1Rva2VuKGFwcGVuZCkge1xuICAgICAgICBsZXQgc2VsZWN0ZWQgPSB0aGlzLnN0YXRlLnRva2VuaXplZEVudGl0eUluZGljZXNTZWxlY3RlZDtcbiAgICAgICAgbGV0IGluZGljZXMgPSB0aGlzLnN0YXRlLnRva2VuaXplZEVudGl0eUluZGljZXM7XG5cbiAgICAgICAgaWYgKCAgIHNlbGVjdGVkLmxlbmd0aCA9PT0gMVxuICAgICAgICAgICAgJiYgZmlyc3Qoc2VsZWN0ZWQpID09PSBmaXJzdChpbmRpY2VzKSkge1xuICAgICAgICAgICAgcmV0dXJuOyAvLyBhbHJlYWR5IGF0IGxlZnRtb3N0IGJvdW5kXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2VsZWN0ZWQubGVuZ3RoID09PSAwKSB7IC8vIHBpY2sgdGhlIHJpZ2h0bW9zdFxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgdG9rZW5pemVkRW50aXR5SW5kaWNlc1NlbGVjdGVkOiBbbGFzdChpbmRpY2VzKV0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHsgLy8gYWRkIHRoZSBuZXh0IGxlZnRtb3N0IHRvIGEgcmVjb25zdHJ1Y3RlZCBcInNlbGVjdGVkXCIgYXJyYXlcbiAgICAgICAgICAgIGxldCBwcmV2aW91c1Rva2VuID0gaW5kaWNlc1tpbmRpY2VzLmluZGV4T2YoZmlyc3Qoc2VsZWN0ZWQpKSAtIDFdO1xuXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICB0b2tlbml6ZWRFbnRpdHlJbmRpY2VzU2VsZWN0ZWQ6IGFwcGVuZCA/IFtwcmV2aW91c1Rva2VuXS5jb25jYXQoc2VsZWN0ZWQpIDogW3ByZXZpb3VzVG9rZW5dLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZWxlY3ROZXh0VG9rZW4oYXBwZW5kKSB7XG4gICAgICAgIGxldCBzZWxlY3RlZCA9IHRoaXMuc3RhdGUudG9rZW5pemVkRW50aXR5SW5kaWNlc1NlbGVjdGVkO1xuICAgICAgICBsZXQgaW5kaWNlcyA9IHRoaXMuc3RhdGUudG9rZW5pemVkRW50aXR5SW5kaWNlcztcblxuICAgICAgICBpZiAoc2VsZWN0ZWQubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobGFzdChzZWxlY3RlZCkgPT09IGxhc3QoaW5kaWNlcykpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIHRva2VuaXplZEVudGl0eUluZGljZXNTZWxlY3RlZDogW10sXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgdGhpcy5yZWZzLnR5cGVhaGVhZC5mb2N1c0lucHV0KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgbmV4dFRva2VuID0gaW5kaWNlc1tpbmRpY2VzLmluZGV4T2YobGFzdChzZWxlY3RlZCkpICsgMV07XG5cbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIHRva2VuaXplZEVudGl0eUluZGljZXNTZWxlY3RlZDogYXBwZW5kID8gc2VsZWN0ZWQuY29uY2F0KG5leHRUb2tlbikgOiBbbmV4dFRva2VuXSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaGFuZGxlS2V5RG93bihldmVudCkge1xuICAgICAgICBzd2l0Y2ggKGV2ZW50LmtleSkge1xuICAgICAgICBjYXNlICdBcnJvd0xlZnQnOlxuICAgICAgICAgICAgdGhpcy5zZWxlY3RQcmV2aW91c1Rva2VuKGV2ZW50LnNoaWZ0S2V5KTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ0Fycm93UmlnaHQnOlxuICAgICAgICAgICAgdGhpcy5zZWxlY3ROZXh0VG9rZW4oZXZlbnQuc2hpZnRLZXkpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnQmFja3NwYWNlJzpcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLnRva2VuaXplZEVudGl0eUluZGljZXNTZWxlY3RlZC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICB0b2tlbml6ZWRFbnRpdHlJbmRpY2VzOiB3aXRob3V0KHRoaXMuc3RhdGUudG9rZW5pemVkRW50aXR5SW5kaWNlcywgLi4udGhpcy5zdGF0ZS50b2tlbml6ZWRFbnRpdHlJbmRpY2VzU2VsZWN0ZWQpLFxuICAgICAgICAgICAgICAgICAgICB0b2tlbml6ZWRFbnRpdHlJbmRpY2VzU2VsZWN0ZWQ6IFtdLFxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5yZWZzLnR5cGVhaGVhZC5mb2N1c0lucHV0KCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnByb3BzLm9uS2V5RG93biA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgZXZlbnQucGVyc2lzdCgpO1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5vbktleURvd24oZXZlbnQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaGFuZGxlVG9rZW5DbG9zZUNsaWNrKGluZGV4KSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgdG9rZW5pemVkRW50aXR5SW5kaWNlczogd2l0aG91dCh0aGlzLnN0YXRlLnRva2VuaXplZEVudGl0eUluZGljZXMsIGluZGV4KSxcbiAgICAgICAgICAgIHRva2VuaXplZEVudGl0eUluZGljZXNTZWxlY3RlZDogd2l0aG91dCh0aGlzLnN0YXRlLnRva2VuaXplZEVudGl0eUluZGljZXNTZWxlY3RlZCwgaW5kZXgpLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZW5kZXJUb2tlbkNsb3NlKGluZGV4KSB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLnNob3dUb2tlbkNsb3NlKSB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd1aS10b2tlbmZpZWxkLXRva2VuLWNsb3NlJ1xuICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVUb2tlbkNsb3NlQ2xpY2suYmluZCh0aGlzLCBpbmRleCl9IC8+XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2VsZWN0U2luZ2xlVG9rZW4oaW5kZXgpIHtcbiAgICAgICAgaWYgKCAgIHRoaXMuc3RhdGUudG9rZW5pemVkRW50aXR5SW5kaWNlc1NlbGVjdGVkLmluZGV4T2YoaW5kZXgpID09PSAtMVxuICAgICAgICAgICAgfHwgdGhpcy5zdGF0ZS50b2tlbml6ZWRFbnRpdHlJbmRpY2VzU2VsZWN0ZWQubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgdG9rZW5pemVkRW50aXR5SW5kaWNlc1NlbGVjdGVkOiBbaW5kZXhdLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoYW5kbGVUb2tlbktleURvd24oaW5kZXgsIGV2ZW50KSB7XG4gICAgICAgIHN3aXRjaCAoZXZlbnQua2V5KSB7XG4gICAgICAgIGNhc2UgJ0VudGVyJzpcbiAgICAgICAgY2FzZSAnU3BhY2UnOlxuICAgICAgICAgICAgdGhpcy5zZWxlY3RTaW5nbGVUb2tlbihpbmRleCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXJUb2tlbnMoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndWktdG9rZW5maWVsZC10b2tlbnMnPlxuICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnRva2VuaXplZEVudGl0eUluZGljZXMubWFwKGluZGV4ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgcmVmPXtgdG9rZW5fJHtpbmRleH1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2N4KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3VpLXRva2VuZmllbGQtdG9rZW4nOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndWktdG9rZW5maWVsZC10b2tlbi1zZWxlY3RlZCc6IHRoaXMuc3RhdGUudG9rZW5pemVkRW50aXR5SW5kaWNlc1NlbGVjdGVkLmluZGV4T2YoaW5kZXgpICE9PSAtMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuc2VsZWN0U2luZ2xlVG9rZW4uYmluZCh0aGlzLCBpbmRleCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uS2V5RG93bj17dGhpcy5oYW5kbGVUb2tlbktleURvd24uYmluZCh0aGlzLCBpbmRleCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYkluZGV4PScwJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5lbnRpdGllc1tpbmRleF0uY29udGVudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJUb2tlbkNsb3NlKGluZGV4KX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBkZXNjZW5kYW50cyA9IE9iamVjdC5rZXlzKFVJVHlwZWFoZWFkSW5wdXQucHJvcFR5cGVzKS5yZWR1Y2UoKHByb3BzLCBrZXkpID0+IHtcbiAgICAgICAgICAgIHByb3BzW2tleV0gPSB0aGlzLnByb3BzW2tleV07XG5cbiAgICAgICAgICAgIHJldHVybiBwcm9wcztcbiAgICAgICAgfSwge30pO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IHsuLi50aGlzLnByb3BzfVxuICAgICAgICAgICAgICAgICByZWY9J3dyYXBwZXInXG4gICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y3goe1xuICAgICAgICAgICAgICAgICAgICAgJ3VpLXRva2VuZmllbGQtd3JhcHBlcic6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICBbdGhpcy5wcm9wcy5jbGFzc05hbWVdOiAhIXRoaXMucHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgb25LZXlEb3duPXt0aGlzLmhhbmRsZUtleURvd24uYmluZCh0aGlzKX0+XG4gICAgICAgICAgICAgICAge3RoaXMucmVuZGVyVG9rZW5zKCl9XG5cbiAgICAgICAgICAgICAgICA8VUlUeXBlYWhlYWRJbnB1dCB7Li4uZGVzY2VuZGFudHN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPSd0eXBlYWhlYWQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSd1aS10b2tlbmZpZWxkJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRW50aXR5U2VsZWN0ZWQ9e3RoaXMuaGFuZGxlRW50aXR5U2VsZWN0ZWQuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkZvY3VzPXt0aGlzLmhhbmRsZUlucHV0Rm9jdXMuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGVhclBhcnRpYWxJbnB1dE9uU2VsZWN0aW9uPXt0cnVlfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5VSVRva2VuaXplZElucHV0LnByb3BUeXBlcyA9IHtcbiAgICAuLi5VSVR5cGVhaGVhZElucHV0LnByb3BUeXBlcyxcbiAgICBvblRva2VuQ2hhbmdlOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgICBzaG93VG9rZW5DbG9zZTogUmVhY3QuUHJvcFR5cGVzLmJvb2wsXG59O1xuXG5VSVRva2VuaXplZElucHV0LmRlZmF1bHRQcm9wcyA9IHtcbiAgICAuLi5VSVR5cGVhaGVhZElucHV0LmRlZmF1bHRQcm9wcyxcbiAgICBvblRva2VuQ2hhbmdlOiBub29wLFxuICAgIHNob3dUb2tlbkNsb3NlOiB0cnVlLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgVUlUb2tlbml6ZWRJbnB1dDtcbiIsIi8qKlxuICogQSB3cmFwcGVyIHRoYXQgZGlzcGxheXMgcHJvdmlkZWQgdGV4dCBvbiBob3Zlci5cbiAqIEBjbGFzcyBVSVRvb2x0aXBcbiAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgVUlWaWV3IGZyb20gJy4uL1VJVmlldyc7XG5pbXBvcnQgY3ggZnJvbSAnY2xhc3NuYW1lcyc7XG5cbmNsYXNzIFVJVG9vbHRpcCBleHRlbmRzIFVJVmlldyB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBwb3NpdGlvbiA9IHRoaXMucHJvcHMucG9zaXRpb247XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgey4uLnRoaXMucHJvcHN9XG4gICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y3goe1xuICAgICAgICAgICAgICAgICAgICAgJ3VpLXRvb2x0aXAnOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgJ3VpLXRvb2x0aXAtcG9zaXRpb24tYWJvdmUnOiBwb3NpdGlvbiA9PT0gVUlUb29sdGlwLnBvc2l0aW9uLkFCT1ZFLFxuICAgICAgICAgICAgICAgICAgICAgJ3VpLXRvb2x0aXAtcG9zaXRpb24tYmVsb3cnOiBwb3NpdGlvbiA9PT0gVUlUb29sdGlwLnBvc2l0aW9uLkJFTE9XLFxuICAgICAgICAgICAgICAgICAgICAgJ3VpLXRvb2x0aXAtcG9zaXRpb24tYmVmb3JlJzogcG9zaXRpb24gPT09IFVJVG9vbHRpcC5wb3NpdGlvbi5CRUZPUkUsXG4gICAgICAgICAgICAgICAgICAgICAndWktdG9vbHRpcC1wb3NpdGlvbi1hZnRlcic6IHBvc2l0aW9uID09PSBVSVRvb2x0aXAucG9zaXRpb24uQUZURVIsXG4gICAgICAgICAgICAgICAgICAgICBbdGhpcy5wcm9wcy5jbGFzc05hbWVdOiAhIXRoaXMucHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgZGF0YS10b29sdGlwPXt0aGlzLnByb3BzLnRleHR9XG4gICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9e3RoaXMucHJvcHNbJ2FyaWEtbGFiZWwnXSB8fCB0aGlzLnByb3BzLnRleHR9PlxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5VSVRvb2x0aXAucG9zaXRpb24gPSB7XG4gICAgQUJPVkU6ICdBQk9WRScsXG4gICAgQkVMT1c6ICdCRUxPVycsXG4gICAgQkVGT1JFOiAnQkVGT1JFJyxcbiAgICBBRlRFUjogJ0FGVEVSJyxcbn07XG5cblVJVG9vbHRpcC5wcm9wVHlwZXMgPSB7XG4gICAgcG9zaXRpb246IFJlYWN0LlByb3BUeXBlcy5vbmVPZihPYmplY3Qua2V5cyhVSVRvb2x0aXAucG9zaXRpb24pKSxcbiAgICB0ZXh0OiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxufTtcblxuVUlUb29sdGlwLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBwb3NpdGlvbjogVUlUb29sdGlwLnBvc2l0aW9uLkFCT1ZFLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgVUlUb29sdGlwO1xuIiwiLyoqXG4gKiBJbnRlbGxpZ2VudGx5IHJlY29tbWVuZCBlbnRpdGllcyB2aWEgY3VzdG9taXphYmxlLCBmdXp6eSByZWNvZ25pdGlvbi5cbiAqIEBjbGFzcyBVSVR5cGVhaGVhZElucHV0XG4gKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBVSVZpZXcgZnJvbSAnLi4vVUlWaWV3JztcbmltcG9ydCBjeCBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBub29wIGZyb20gJy4uL1VJVXRpbHMvbm9vcCc7XG5cbmNsYXNzIFVJVHlwZWFoZWFkSW5wdXQgZXh0ZW5kcyBVSVZpZXcge1xuICAgIGluaXRpYWxTdGF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGVudGl0eU1hdGNoSW5kaWNlczogW10sXG4gICAgICAgICAgICBzZWxlY3RlZEVudGl0eUluZGV4OiAtMSxcbiAgICAgICAgICAgIGlkOiB0aGlzLnV1aWQoKSxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLmRlZmF1bHRWYWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5jb21wdXRlTWF0Y2hlcyh0aGlzLnByb3BzLmRlZmF1bHRWYWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgICAgICBpZiAobmV4dFByb3BzLmVudGl0aWVzICE9PSB0aGlzLnByb3BzLmVudGl0aWVzKSB7XG4gICAgICAgICAgICB0aGlzLmNvbXB1dGVNYXRjaGVzKHRoaXMuc3RhdGUudXNlcklucHV0LCBuZXh0UHJvcHMuZW50aXRpZXMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0U2VsZWN0ZWRFbnRpdHlDb250ZW50KCkge1xuICAgICAgICBsZXQgZW50aXR5ID0gdGhpcy5wcm9wcy5lbnRpdGllc1t0aGlzLnN0YXRlLnNlbGVjdGVkRW50aXR5SW5kZXhdO1xuXG4gICAgICAgIHJldHVybiBlbnRpdHkgPyBlbnRpdHkuY29udGVudCA6ICcnO1xuICAgIH1cblxuICAgIHJlbmRlck5vdGlmaWNhdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgcmVmPSdhcmlhJ1xuICAgICAgICAgICAgICAgICBpZD17dGhpcy5zdGF0ZS5pZH1cbiAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXt0aGlzLnByb3BzLm9mZnNjcmVlbkNsYXNzfVxuICAgICAgICAgICAgICAgICBhcmlhLWxpdmU9J3BvbGl0ZSc+XG4gICAgICAgICAgICAgICAge3RoaXMuZ2V0U2VsZWN0ZWRFbnRpdHlDb250ZW50KCl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICByZW5kZXJIaW50KCkge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5oaW50KSB7XG4gICAgICAgICAgICBsZXQgdXNlclRleHQgPSB0aGlzLnN0YXRlLnVzZXJJbnB1dDtcbiAgICAgICAgICAgIGxldCByYXcgPSB0aGlzLmdldFNlbGVjdGVkRW50aXR5Q29udGVudCgpO1xuICAgICAgICAgICAgbGV0IHByb2Nlc3NlZCA9ICcnO1xuXG4gICAgICAgICAgICBpZiAoICAgcmF3XG4gICAgICAgICAgICAgICAgJiYgcmF3LnRvTG93ZXJDYXNlKCkuaW5kZXhPZih1c2VyVGV4dC50b0xvd2VyQ2FzZSgpKSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHByb2Nlc3NlZCA9IHJhdy5yZXBsYWNlKG5ldyBSZWdFeHAodXNlclRleHQsICdpJyksIHVzZXJUZXh0KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8aW5wdXQgey4uLnRoaXMucHJvcHMuaGludFByb3BzfVxuICAgICAgICAgICAgICAgICAgICAgICByZWY9J2hpbnQnXG4gICAgICAgICAgICAgICAgICAgICAgIHR5cGU9J3RleHQnXG4gICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y3goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3VpLXR5cGVhaGVhZC1oaW50JzogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFt0aGlzLnByb3BzLmhpbnRQcm9wcy5jbGFzc05hbWVdOiAhIXRoaXMucHJvcHMuaGludFByb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwcm9jZXNzZWR9XG4gICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAgICB0YWJJbmRleD0nLTEnIC8+XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaGFuZGxlTWF0Y2hDbGljayhpbmRleCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtzZWxlY3RlZEVudGl0eUluZGV4OiBpbmRleH0sICgpID0+IHRoaXMuc2V0VmFsdWVXaXRoU2VsZWN0ZWRFbnRpdHkoKSk7XG4gICAgfVxuXG4gICAgbWFya01hdGNoU3Vic3RyaW5nKGVudGl0eUNvbnRlbnQsIHVzZXJJbnB1dCkge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5tYXJrRnVuYykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMubWFya0Z1bmMoZW50aXR5Q29udGVudCwgdXNlcklucHV0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBzZWVrVmFsdWUgPSB1c2VySW5wdXQudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgbGV0IGluZGV4U3RhcnQgPSBlbnRpdHlDb250ZW50LnRvTG93ZXJDYXNlKCkuaW5kZXhPZihzZWVrVmFsdWUpO1xuICAgICAgICBsZXQgaW5kZXhFbmQgPSBpbmRleFN0YXJ0ICsgc2Vla1ZhbHVlLmxlbmd0aDtcblxuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgPHNwYW4ga2V5PScwJz57ZW50aXR5Q29udGVudC5zbGljZSgwLCBpbmRleFN0YXJ0KX08L3NwYW4+LFxuICAgICAgICAgICAgPG1hcmsga2V5PScxJyBjbGFzc05hbWU9J3VpLXR5cGVhaGVhZC1tYXRjaC1oaWdobGlnaHQnPntlbnRpdHlDb250ZW50LnNsaWNlKGluZGV4U3RhcnQsIGluZGV4RW5kKX08L21hcms+LFxuICAgICAgICAgICAgPHNwYW4ga2V5PScyJz57ZW50aXR5Q29udGVudC5zbGljZShpbmRleEVuZCl9PC9zcGFuPixcbiAgICAgICAgXTtcbiAgICB9XG5cbiAgICByZW5kZXJNYXRjaGVzKCkge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5lbnRpdHlNYXRjaEluZGljZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXYgey4uLnRoaXMucHJvcHMubWF0Y2hXcmFwcGVyUHJvcHN9XG4gICAgICAgICAgICAgICAgICAgICByZWY9J21hdGNoZXMnXG4gICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2N4KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAndWktdHlwZWFoZWFkLW1hdGNoLXdyYXBwZXInOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgIFt0aGlzLnByb3BzLm1hdGNoV3JhcHBlclByb3BzLmNsYXNzTmFtZV06ICEhdGhpcy5wcm9wcy5tYXRjaFdyYXBwZXJQcm9wcy5jbGFzc05hbWUsXG4gICAgICAgICAgICAgICAgICAgICB9KX0+XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmVudGl0eU1hdGNoSW5kaWNlcy5tYXAoaW5kZXggPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGVudGl0eSA9IHRoaXMucHJvcHMuZW50aXRpZXNbaW5kZXhdO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgey4uLmVudGl0eX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y3goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd1aS10eXBlYWhlYWQtbWF0Y2gnOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd1aS10eXBlYWhlYWQtbWF0Y2gtc2VsZWN0ZWQnOiB0aGlzLnN0YXRlLnNlbGVjdGVkRW50aXR5SW5kZXggPT09IGluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtlbnRpdHkuY2xhc3NOYW1lXTogISFlbnRpdHkuY2xhc3NOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3RoaXMuY3JlYXRlSGFzaGVkS2V5KGVudGl0eS5jb250ZW50KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlTWF0Y2hDbGljay5iaW5kKHRoaXMsIGluZGV4KX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLm1hcmtNYXRjaFN1YnN0cmluZyhlbnRpdHkuY29udGVudCwgdGhpcy5zdGF0ZS51c2VySW5wdXQpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2VsZWN0TWF0Y2goZGVsdGEpIHtcbiAgICAgICAgbGV0IG1hdGNoZXMgPSB0aGlzLnN0YXRlLmVudGl0eU1hdGNoSW5kaWNlcztcbiAgICAgICAgbGV0IHRvdGFsTWF0Y2hlcyA9IG1hdGNoZXMubGVuZ3RoO1xuICAgICAgICBsZXQgbmV4dEluZGV4ID0gbWF0Y2hlcy5pbmRleE9mKHRoaXMuc3RhdGUuc2VsZWN0ZWRFbnRpdHlJbmRleCkgKyBkZWx0YTtcblxuICAgICAgICBpZiAodG90YWxNYXRjaGVzKSB7XG4gICAgICAgICAgICBpZiAobmV4dEluZGV4IDwgMCkge1xuICAgICAgICAgICAgICAgIG5leHRJbmRleCA9IHRvdGFsTWF0Y2hlcyAtIDE7IC8vIHJldmVyc2UgbG9vcFxuICAgICAgICAgICAgfSBlbHNlIGlmIChuZXh0SW5kZXggPj0gdG90YWxNYXRjaGVzKSB7XG4gICAgICAgICAgICAgICAgbmV4dEluZGV4ID0gMDsgLy8gbG9vcFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWRFbnRpdHlJbmRleDogbWF0Y2hlc1tuZXh0SW5kZXhdIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVzZXRNYXRjaGVzKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHNlbGVjdGVkRW50aXR5SW5kZXg6IC0xLFxuICAgICAgICAgICAgZW50aXR5TWF0Y2hJbmRpY2VzOiBbXSxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ2V0SW5wdXROb2RlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5yZWZzLmlucHV0O1xuICAgIH1cblxuICAgIGZvY3VzSW5wdXQoKSB7XG4gICAgICAgIHRoaXMuZ2V0SW5wdXROb2RlKCkuZm9jdXMoKTtcbiAgICB9XG5cbiAgICBzZXRWYWx1ZShuZXdWYWx1ZSkge1xuICAgICAgICB0aGlzLmdldElucHV0Tm9kZSgpLnZhbHVlID0gbmV3VmFsdWU7XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHVzZXJJbnB1dDogbmV3VmFsdWUgfSk7XG4gICAgICAgIHRoaXMucmVzZXRNYXRjaGVzKCk7XG4gICAgICAgIHRoaXMuZm9jdXNJbnB1dCgpO1xuICAgIH1cblxuICAgIGN1cnNvckF0RW5kT2ZJbnB1dCgpIHtcbiAgICAgICAgbGV0IG5vZGUgPSB0aGlzLmdldElucHV0Tm9kZSgpO1xuXG4gICAgICAgIHJldHVybiBub2RlLnNlbGVjdGlvblN0YXJ0ID09PSBub2RlLnNlbGVjdGlvbkVuZCAmJiBub2RlLnNlbGVjdGlvbkVuZCA9PT0gbm9kZS52YWx1ZS5sZW5ndGg7XG4gICAgfVxuXG4gICAgc2V0VmFsdWVXaXRoU2VsZWN0ZWRFbnRpdHkoKSB7XG4gICAgICAgIHRoaXMucHJvcHMub25FbnRpdHlTZWxlY3RlZCh0aGlzLnN0YXRlLnNlbGVjdGVkRW50aXR5SW5kZXgpO1xuXG4gICAgICAgIGlmICh0aGlzLnByb3BzLmNsZWFyUGFydGlhbElucHV0T25TZWxlY3Rpb24pIHtcbiAgICAgICAgICAgIHRoaXMuc2V0VmFsdWUoJycpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZXRWYWx1ZSh0aGlzLmdldFNlbGVjdGVkRW50aXR5Q29udGVudCgpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhhbmRsZUtleURvd24oZXZlbnQpIHtcbiAgICAgICAgc3dpdGNoIChldmVudC5rZXkpIHtcbiAgICAgICAgY2FzZSAnQXJyb3dMZWZ0JzpcbiAgICAgICAgICAgIGlmIChldmVudC50YXJnZXQuc2VsZWN0aW9uU3RhcnQgPiAxKSB7XG4gICAgICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ1RhYic6XG4gICAgICAgIGNhc2UgJ0Fycm93UmlnaHQnOlxuICAgICAgICAgICAgaWYgKCAgIHRoaXMuc3RhdGUuc2VsZWN0ZWRFbnRpdHlJbmRleCAhPT0gLTFcbiAgICAgICAgICAgICAgICAmJiB0aGlzLmN1cnNvckF0RW5kT2ZJbnB1dCgpXG4gICAgICAgICAgICAgICAgJiYgdGhpcy5nZXRJbnB1dE5vZGUoKSA9PT0gZXZlbnQudGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgZXZlbnQubmF0aXZlRXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFZhbHVlV2l0aFNlbGVjdGVkRW50aXR5KCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ0Fycm93VXAnOlxuICAgICAgICAgICAgZXZlbnQubmF0aXZlRXZlbnQucHJldmVudERlZmF1bHQoKTsgLy8gYmxvY2sgY3Vyc29yIG1vdmVtZW50XG4gICAgICAgICAgICB0aGlzLnNlbGVjdE1hdGNoKC0xKTtcbiAgICAgICAgICAgIHRoaXMuZm9jdXNJbnB1dCgpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnQXJyb3dEb3duJzpcbiAgICAgICAgICAgIGV2ZW50Lm5hdGl2ZUV2ZW50LnByZXZlbnREZWZhdWx0KCk7IC8vIGJsb2NrIGN1cnNvciBtb3ZlbWVudFxuICAgICAgICAgICAgdGhpcy5zZWxlY3RNYXRjaCgxKTtcbiAgICAgICAgICAgIHRoaXMuZm9jdXNJbnB1dCgpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnRXNjYXBlJzpcbiAgICAgICAgICAgIGlmICggICB0aGlzLnN0YXRlLnNlbGVjdGVkRW50aXR5SW5kZXggIT09IC0xXG4gICAgICAgICAgICAgICAgJiYgdGhpcy5nZXRJbnB1dE5vZGUoKSA9PT0gZXZlbnQudGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXNldE1hdGNoZXMoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnRW50ZXInOlxuICAgICAgICAgICAgaWYgKCAgIHRoaXMuc3RhdGUuc2VsZWN0ZWRFbnRpdHlJbmRleCAhPT0gLTFcbiAgICAgICAgICAgICAgICAmJiB0aGlzLmdldElucHV0Tm9kZSgpID09PSBldmVudC50YXJnZXQpIHtcbiAgICAgICAgICAgICAgICBldmVudC5uYXRpdmVFdmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0VmFsdWVXaXRoU2VsZWN0ZWRFbnRpdHkoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkNvbXBsZXRlKHRoaXMuc3RhdGUudXNlcklucHV0KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIHRoaXMucHJvcHMub25LZXlEb3duID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBldmVudC5wZXJzaXN0KCk7XG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uS2V5RG93bihldmVudCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBUaGUgZGVmYXVsdCBpbXBsZW1lbnRhdGlvbiBpcyBhIHNpbXBsZSBcInN0YXJ0cy13aXRoXCIgc2VhcmNoXG4gICAgZ2V0TWF0Y2hJbmRpY2VzKGN1cnJlbnRWYWx1ZSwgZW50aXRpZXMpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMubWF0Y2hGdW5jKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy5tYXRjaEZ1bmMoY3VycmVudFZhbHVlLCBlbnRpdGllcyk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgc2Vla1ZhbHVlID0gY3VycmVudFZhbHVlLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgICAgcmV0dXJuIGVudGl0aWVzLnJlZHVjZShmdW5jdGlvbiBzZWVrTWF0Y2gocmVzdWx0LCBlbnRpdHksIGluZGV4KSB7XG4gICAgICAgICAgICByZXR1cm4gZW50aXR5LmNvbnRlbnQudG9Mb3dlckNhc2UoKS5pbmRleE9mKHNlZWtWYWx1ZSkgPT09IDAgPyAocmVzdWx0LnB1c2goaW5kZXgpICYmIHJlc3VsdCkgOiByZXN1bHQ7XG4gICAgICAgIH0sIFtdKTtcbiAgICB9XG5cbiAgICBjb21wdXRlTWF0Y2hlcyhjdXJyZW50VmFsdWUsIGVudGl0aWVzID0gdGhpcy5wcm9wcy5lbnRpdGllcykge1xuICAgICAgICBsZXQgbWF0Y2hlcyA9IGN1cnJlbnRWYWx1ZSA9PT0gJycgPyBbXSA6IHRoaXMuZ2V0TWF0Y2hJbmRpY2VzKGN1cnJlbnRWYWx1ZSwgZW50aXRpZXMpO1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgdXNlcklucHV0OiBjdXJyZW50VmFsdWUsXG4gICAgICAgICAgICBzZWxlY3RlZEVudGl0eUluZGV4OiBtYXRjaGVzLmxlbmd0aCA/IG1hdGNoZXNbMF0gOiAtMSxcbiAgICAgICAgICAgIGVudGl0eU1hdGNoSW5kaWNlczogbWF0Y2hlcyxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaGFuZGxlSW5wdXQoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5jb21wdXRlTWF0Y2hlcyhldmVudC50YXJnZXQudmFsdWUpO1xuXG4gICAgICAgIGlmICh0aGlzLnByb3BzLm9uSW5wdXQpIHtcbiAgICAgICAgICAgIGV2ZW50LnBlcnNpc3QoKTtcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25JbnB1dChldmVudCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIHRoaXMucHJvcHMuaW5wdXRQcm9wcy5vbklucHV0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBldmVudC5wZXJzaXN0KCk7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmlucHV0UHJvcHMub25JbnB1dChldmVudCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IHsuLi50aGlzLnByb3BzfVxuICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e3VuZGVmaW5lZH1cbiAgICAgICAgICAgICAgICAgbmFtZT17dW5kZWZpbmVkfVxuICAgICAgICAgICAgICAgICB0eXBlPXt1bmRlZmluZWR9XG4gICAgICAgICAgICAgICAgIHJlZj0nd3JhcHBlcidcbiAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjeCh7XG4gICAgICAgICAgICAgICAgICAgICd1aS10eXBlYWhlYWQtd3JhcHBlcic6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIFt0aGlzLnByb3BzLmNsYXNzTmFtZV06ICEhdGhpcy5wcm9wcy5jbGFzc05hbWUsXG4gICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICBvbktleURvd249e3RoaXMuaGFuZGxlS2V5RG93bi5iaW5kKHRoaXMpfT5cbiAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJOb3RpZmljYXRpb24oKX1cbiAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJIaW50KCl9XG5cbiAgICAgICAgICAgICAgICA8aW5wdXQgey4uLnRoaXMucHJvcHMuaW5wdXRQcm9wc31cbiAgICAgICAgICAgICAgICAgICAgICAgcmVmPSdpbnB1dCdcbiAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjeCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAndWktdHlwZWFoZWFkJzogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFt0aGlzLnByb3BzLmlucHV0UHJvcHMuY2xhc3NOYW1lXTogISF0aGlzLnByb3BzLmlucHV0UHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXt0aGlzLnByb3BzLmRlZmF1bHRWYWx1ZSB8fCB0aGlzLnByb3BzLmlucHV0UHJvcHMuZGVmYXVsdFZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXt0aGlzLnByb3BzLm5hbWUgfHwgdGhpcy5wcm9wcy5pbnB1dFByb3BzLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgIHR5cGU9e3RoaXMucHJvcHMudHlwZSB8fCB0aGlzLnByb3BzLmlucHV0UHJvcHMudHlwZSB8fCAndGV4dCd9XG4gICAgICAgICAgICAgICAgICAgICAgIGFyaWEtY29udHJvbHM9e3RoaXMuc3RhdGUuaWR9XG4gICAgICAgICAgICAgICAgICAgICAgIG9uSW5wdXQ9e3RoaXMuaGFuZGxlSW5wdXQuYmluZCh0aGlzKX0gLz5cblxuICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlck1hdGNoZXMoKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuVUlUeXBlYWhlYWRJbnB1dC5wcm9wVHlwZXMgPSB7XG4gICAgY2xlYXJQYXJ0aWFsSW5wdXRPblNlbGVjdGlvbjogUmVhY3QuUHJvcFR5cGVzLmJvb2wsXG4gICAgZGVmYXVsdFZhbHVlOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgIGVudGl0aWVzOiBSZWFjdC5Qcm9wVHlwZXMuYXJyYXlPZihcbiAgICAgICAgUmVhY3QuUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgICAgICAgIGNvbnRlbnQ6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIH0pXG4gICAgKSxcbiAgICBoaW50OiBSZWFjdC5Qcm9wVHlwZXMuYm9vbCxcbiAgICBoaW50UHJvcHM6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QsXG4gICAgaW5wdXRQcm9wczogUmVhY3QuUHJvcFR5cGVzLm9iamVjdCxcbiAgICBtYXJrRnVuYzogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gICAgbWF0Y2hGdW5jOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgICBtYXRjaFdyYXBwZXJQcm9wczogUmVhY3QuUHJvcFR5cGVzLm9iamVjdCxcbiAgICBuYW1lOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgIG9mZnNjcmVlbkNsYXNzOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgIG9uQ29tcGxldGU6IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuICAgIG9uSW5wdXQ6IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuICAgIG9uRW50aXR5U2VsZWN0ZWQ6IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuICAgIHR5cGU6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG59O1xuXG5VSVR5cGVhaGVhZElucHV0LmRlZmF1bHRQcm9wcyA9IHtcbiAgICBjbGVhclBhcnRpYWxJbnB1dE9uU2VsZWN0aW9uOiBmYWxzZSxcbiAgICBlbnRpdGllczogW10sXG4gICAgaGludFByb3BzOiB7fSxcbiAgICBpbnB1dFByb3BzOiB7fSxcbiAgICBtYXRjaFdyYXBwZXJQcm9wczoge30sXG4gICAgb2Zmc2NyZWVuQ2xhc3M6ICd1aS1vZmZzY3JlZW4nLFxuICAgIG9uQ29tcGxldGU6IG5vb3AsXG4gICAgb25FbnRpdHlTZWxlY3RlZDogbm9vcCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFVJVHlwZWFoZWFkSW5wdXQ7XG4iLCIvKipcbiAqIEEgZHVtbXkgZnVuY3Rpb24gd2l0aCBubyBzaWRlIGVmZmVjdHMuIENvbW1vbmx5IHVzZWQgd2hlbiBtb2NraW5nIGludGVyZmFjZXMuXG4gKiBAbW9kdWxlIFVJS2l0L3V0aWxzL25vb3BcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbm9vcCgpIHt9XG4iLCJjb25zdCBnZXRFeGFjdFR5cGUgPSBmdW5jdGlvbiByZXRyaWV2ZURlZXBUeXBlKG9iamVjdCkge1xuICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqZWN0KTtcbn07XG5cbmNvbnN0IGNvbXBhcmVPYmplY3RLZXlzID0gZnVuY3Rpb24gY29tcGFyZU9iamVjdEtleXMoa2V5LCBiYXNlQXJyYXkpIHtcbiAgICByZXR1cm4gdHlwZW9mIHRoaXNba2V5XSAhPT0gJ3VuZGVmaW5lZCcgJiYgYmFzZUFycmF5W2tleV0gPT09IHRoaXNba2V5XTtcbn07IC8vIGB0aGlzYCBpcyBzZXQgdG8gdGhlIGNvbXBhcmlzb24gYXJyYXlcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY2hlY2tTaGFsbG93RXF1YWxpdHkoYSwgYikge1xuICAgIGlmIChhID09PSBiKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGNvbnN0IHR5cGUgPSBnZXRFeGFjdFR5cGUoYSk7XG5cbiAgICBpZiAoICAgIHR5cGUgIT09IGdldEV4YWN0VHlwZShiKSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHR5cGUgbWlzbWF0Y2hlcyBjYW4ndCBiZSBjb21wYXJlZFxuICAgICAgICB8fCAodHlwZSAhPT0gJ1tvYmplY3QgT2JqZWN0XScgJiYgdHlwZSAhPT0gJ1tvYmplY3QgQXJyYXldJykpIHsgLy8gZnVuY3Rpb25zLCBQcm9taXNlcywgZXRjIGNhbm5vdCBiZSBkaXJlY3RseSBjb21wYXJlZFxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKHR5cGUgPT09ICdbb2JqZWN0IE9iamVjdF0nKSB7XG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyhhKS5ldmVyeShjb21wYXJlT2JqZWN0S2V5cywgYikgJiYgT2JqZWN0LmtleXMoYikuZXZlcnkoY29tcGFyZU9iamVjdEtleXMsIGEpO1xuICAgIH1cblxuICAgIHJldHVybiAgICBhLmV2ZXJ5KGZ1bmN0aW9uKGl0ZW0pIHsgcmV0dXJuIGIuaW5kZXhPZihpdGVtKSAhPT0gLTE7IH0pXG4gICAgICAgICAgICYmIGIuZXZlcnkoZnVuY3Rpb24oaXRlbSkgeyByZXR1cm4gYS5pbmRleE9mKGl0ZW0pICE9PSAtMTsgfSk7XG59O1xuIiwiLyoqXG4gKiBSZXR1cm5zIHRoZSBhcHByb3ByaWF0ZSB2ZW5kb3ItcHJlZml4ZWQgcHJvcGVydHkgZm9yIHVzZSBpbiBwcm9ncmFtbWF0aWMgdHJhbnNmb3JtIHN0eWxlIG1hbmlwdWxhdGlvbi5cbiAqIEBtb2R1bGUgVUlLaXQvdXRpbHMvdHJhbnNmb3JtXG4gKlxuICogQHJldHVybiB7U3RyaW5nfSB0aGUgcHJvcGVydHkga2V5IChlLmcuIGBXZWJraXRUcmFuc2Zvcm1gLCBgbXNUcmFuc2Zvcm1gKVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IChmdW5jdGlvbiBkZXRlY3RUcmFuc2Zvcm1Qcm9wZXJ0eSgpIHtcbiAgICBsZXQgcHJvcHMgPSBbXG4gICAgICAgICd0cmFuc2Zvcm0nLFxuICAgICAgICAnV2Via2l0VHJhbnNmb3JtJyxcbiAgICAgICAgJ01velRyYW5zZm9ybScsXG4gICAgICAgICdPVHJhbnNmb3JtJyxcbiAgICAgICAgJ21zVHJhbnNmb3JtJyxcbiAgICBdO1xuXG4gICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHByb3BzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIGlmIChwcm9wc1tpXSBpbiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUpIHtcbiAgICAgICAgICAgIHJldHVybiBwcm9wc1tpXTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbn0pKCk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHNoYWxsb3dFcXVhbCBmcm9tICcuLi9VSVV0aWxzL3NoYWxsb3dFcXVhbCc7XG5cbi8qKlxuICogQW4gYXVnbWVudGVkIHZlcnNpb24gb2YgYFJlYWN0LkNvbXBvbmVudGAgd2l0aCBzb21lIGhlbHBmdWwgYWJzdHJhY3Rpb25zIGFkZGVkIHRvIHNtb290aFxuICogdGhlIGNvbXBvbmVudCBkZXZlbG9wbWVudCBwcm9jZXNzLlxuICpcbiAqIEFsbCBVSUtpdCBjb21wb25lbnRzIGFyZSBiYXNlZCBvbiBVSVZpZXcuXG4gKlxuICogQGF1Z21lbnRzIHtSZWFjdC5Db21wb25lbnR9XG4gKi9cbmNsYXNzIFVJVmlldyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHByb3BzIGRhdGEgcGFzc2VkIG9uIHRvIHRoZSBlbmQgY29tcG9uZW50XG4gICAgICovXG4gICAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgICAgICBzdXBlciguLi5hcmdzKTtcblxuICAgICAgICB0aGlzLnN0YXRlID0gdGhpcy5pbml0aWFsU3RhdGUgPyB0aGlzLmluaXRpYWxTdGF0ZSgpIDoge307XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW4gYW55IHR5cGUgb2YgbGlzdCwgdW5pcXVlIGtleXMgYXJlIHJlcXVpcmVkIHRvIGtlZXAgUmVhY3QgcmUtcmVuZGVycyBlZmZpY2llbnQuIFRoaXNcbiAgICAgKiBtZXRob2QgY29uc3VtZXMgYSBsaXN0IGl0ZW0ncyBjb250ZW50IGFuZCByZXR1cm5zIGFuIGFwcHJvcHJpYXRlIGtleSB0byBiZSB1c2VkLlxuICAgICAqXG4gICAgICogQmFzZWQgb24gdGhlIGltcGxlbWVudGF0aW9uIGJ5IGVzbWlyYWxoYSB7QGxpbmsgaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNzYxNjQ4NC8xMTQxNjExIG9uIFN0YWNrT3ZlcmZsb3d9XG4gICAgICpcbiAgICAgKiBAZXhhbXBsZVxuICAgICAqIHRoaXMuY3JlYXRlSGFzaGVkS2V5KCdhYmNkJyk7IC8vIDI5ODcwNzRcbiAgICAgKlxuICAgICAqIEBwYXJhbSAge3N0cmluZ30gYmFzZVN0cmluZyBUaGUgY29udGVudCB0byBiZSBoYXNoZWQgaW50byBhIGNvbnNpc3RlbnQga2V5LlxuICAgICAqIEByZXR1cm4ge3N0cmluZ30gVGhlIGJ1aWx0LCB1bmlxdWUgaGFzaC5cbiAgICAgKi9cbiAgICBjcmVhdGVIYXNoZWRLZXkoYmFzZVN0cmluZykge1xuICAgICAgICByZXR1cm4gYmFzZVN0cmluZy5zcGxpdCgnJykucmVkdWNlKGZ1bmN0aW9uIGhhc2hlcihhLCBiKSB7XG4gICAgICAgICAgICBsZXQgYyA9ICgoYSA8PCA1KSAtIGEpICsgYi5jaGFyQ29kZUF0KDApO1xuXG4gICAgICAgICAgICByZXR1cm4gYyAmIGM7XG4gICAgICAgIH0sIDApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFwcHJveGltYXRlcyB0aGUgQGxpbmt7UHVyZVJlbmRlck1peGluIGh0dHBzOi8vZmFjZWJvb2suZ2l0aHViLmlvL3JlYWN0L2RvY3MvcHVyZS1yZW5kZXItbWl4aW4uaHRtbH0gZnJvbSBFUzUgUmVhY3QuIEltcGxlbWVudCBzaG91bGRDb21wb25lbnRVcGRhdGUgaW4geW91ciBzdWJjbGFzcyB0byBvdmVycmlkZSB0aGlzIGZ1bmN0aW9uYWxpdHkuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtPYmplY3R9IG5leHRQcm9wcyB0aGUgaW5jb21pbmcgcHJvcHMgZGVmaW5pdGlvbiwgbWF5IGRpZmZlciBmcm9tIGN1cnJlbnQgcHJvcHNcbiAgICAgKiBAcGFyYW0gIHtPYmplY3R9IG5leHRTdGF0ZSB0aGUgaW5jb21pbmcgc3RhdGUgZGVmaW5pdGlvbiwgbWF5IGRpZmZlciBmcm9tIGN1cnJlbnQgc3RhdGVcbiAgICAgKiBAcmV0dXJuIHtCb29sZWFufSAgICAgICAgICBJbmZvcm1zIFJlYWN0IHRvIHJlLXJlbmRlciB0aGUgY29tcG9uZW50LlxuICAgICAqXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzLCBuZXh0U3RhdGUpIHtcbiAgICAgKiAgICAgLy8gc29tZSBsb2dpYyBoZXJlLCBldmVudHVhbGx5IGByZXR1cm5gIHRydWUgb3IgZmFsc2VcbiAgICAgKiAgICAgLy8gY3VycmVudCBwcm9wcyAmIHN0YXRlIGFyZSBhdmFpbGFibGUgZm9yIGNvbXBhcmlzb24gYXQgYHRoaXMucHJvcHNgLCBgdGhpcy5zdGF0ZWBcbiAgICAgKiB9XG4gICAgICovXG4gICAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcywgbmV4dFN0YXRlKSB7XG4gICAgICAgIHJldHVybiAhc2hhbGxvd0VxdWFsKG5leHRQcm9wcywgdGhpcy5wcm9wcykgfHwgIXNoYWxsb3dFcXVhbChuZXh0U3RhdGUsIHRoaXMuc3RhdGUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdlbmVyYXRlcyBhIHVuaXF1ZSBJRC4gQmFzZWQgb24ge0BsaW5rIGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL2plZC85ODI4ODMgdGhpcyBpbXBsZW1lbnRhdGlvbn0uXG4gICAgICogQHJldHVybiB7c3RyaW5nfSBhIHVuaXF1ZSBpZGVudGlmaWVyXG4gICAgICpcbiAgICAgKiBAZXhhbXBsZVxuICAgICAqIHRoaXMudXVpZCgpOyAvLyAxZjJjZDI3Zi0wNzU0LTQzNDQtOWQyMC00MzZhMjAxYjJmODBcbiAgICAgKi9cbiAgICB1dWlkKCkge1xuICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZSAqL1xuICAgICAgICByZXR1cm4gKFsxZTddKy0xZTMrLTRlMystOGUzKy0xZTExKS5yZXBsYWNlKC9bMDE4XS9nLGE9PihhXk1hdGgucmFuZG9tKCkqMTY+PmEvNCkudG9TdHJpbmcoMTYpKTtcbiAgICAgICAgLyogZXNsaW50LWVuYWJsZSAqL1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEVtdWxhdGVzIHRoZSAobm93IHJlbW92ZWQpIFJlYWN0IGludGVyZmFjZSBgZ2V0SW5pdGlhbFN0YXRlYC4gSXQncyBhIGNvbnZlbmllbmNlLCBidXQgYWxsb3dzXG4gICAgICogZm9yIHRoaXMgZnVuY3Rpb25hbGl0eSB0byB3b3JrIHdpdGhvdXQgaGF2aW5nIHRvIHByb3ZpZGUgYSBjb25zdHJ1Y3RvciBmdW5jdGlvbi5cbiAgICAgKlxuICAgICAqIEB2aXJ0dWFsXG4gICAgICogQG5hbWUgVUlWaWV3I2luaXRpYWxTdGF0ZVxuICAgICAqXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiBpbml0aWFsU3RhdGUoKSB7XG4gICAgICogICAgIHJldHVybiB7XG4gICAgICogICAgICAgICAgaXRlbXM6IFtdXG4gICAgICogICAgIH1cbiAgICAgKiB9XG4gICAgICovXG59XG5cbmV4cG9ydCBkZWZhdWx0IFVJVmlldztcbiIsIi8qIVxuICBDb3B5cmlnaHQgKGMpIDIwMTUgSmVkIFdhdHNvbi5cbiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCBzZWVcbiAgaHR0cDovL2plZHdhdHNvbi5naXRodWIuaW8vY2xhc3NuYW1lc1xuKi9cbi8qIGdsb2JhbCBkZWZpbmUgKi9cblxuKGZ1bmN0aW9uICgpIHtcblx0J3VzZSBzdHJpY3QnO1xuXG5cdHZhciBoYXNPd24gPSB7fS5oYXNPd25Qcm9wZXJ0eTtcblxuXHRmdW5jdGlvbiBjbGFzc05hbWVzICgpIHtcblx0XHR2YXIgY2xhc3NlcyA9ICcnO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBhcmcgPSBhcmd1bWVudHNbaV07XG5cdFx0XHRpZiAoIWFyZykgY29udGludWU7XG5cblx0XHRcdHZhciBhcmdUeXBlID0gdHlwZW9mIGFyZztcblxuXHRcdFx0aWYgKGFyZ1R5cGUgPT09ICdzdHJpbmcnIHx8IGFyZ1R5cGUgPT09ICdudW1iZXInKSB7XG5cdFx0XHRcdGNsYXNzZXMgKz0gJyAnICsgYXJnO1xuXHRcdFx0fSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGFyZykpIHtcblx0XHRcdFx0Y2xhc3NlcyArPSAnICcgKyBjbGFzc05hbWVzLmFwcGx5KG51bGwsIGFyZyk7XG5cdFx0XHR9IGVsc2UgaWYgKGFyZ1R5cGUgPT09ICdvYmplY3QnKSB7XG5cdFx0XHRcdGZvciAodmFyIGtleSBpbiBhcmcpIHtcblx0XHRcdFx0XHRpZiAoaGFzT3duLmNhbGwoYXJnLCBrZXkpICYmIGFyZ1trZXldKSB7XG5cdFx0XHRcdFx0XHRjbGFzc2VzICs9ICcgJyArIGtleTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gY2xhc3Nlcy5zdWJzdHIoMSk7XG5cdH1cblxuXHRpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGNsYXNzTmFtZXM7XG5cdH0gZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgZGVmaW5lLmFtZCA9PT0gJ29iamVjdCcgJiYgZGVmaW5lLmFtZCkge1xuXHRcdC8vIHJlZ2lzdGVyIGFzICdjbGFzc25hbWVzJywgY29uc2lzdGVudCB3aXRoIG5wbSBwYWNrYWdlIG5hbWVcblx0XHRkZWZpbmUoJ2NsYXNzbmFtZXMnLCBbXSwgZnVuY3Rpb24gKCkge1xuXHRcdFx0cmV0dXJuIGNsYXNzTmFtZXM7XG5cdFx0fSk7XG5cdH0gZWxzZSB7XG5cdFx0d2luZG93LmNsYXNzTmFtZXMgPSBjbGFzc05hbWVzO1xuXHR9XG59KCkpO1xuIiwiLyoqXG4gKiBVc2VkIHRvIGNyZWF0ZSBhbiBFUzUtY29tcGF0aWJsZSBzdGFuZGFsb25lIGJ1aWxkLCBhbmQgc28gaXQncyBwb3NzaWJsZSB0byBgcmVxdWlyZSgnZW5pZ21hLXVpa2l0JylgYFxuICogYW5kIGRpcmVjdGx5IHVzZSBhIGNvbXBvbmVudCBsaWtlOiBgcmVxdWlyZSgnZW5pZ21hLXVpa2l0JykuVUlCdXR0b25gXG4gKi9cblxuZ2xvYmFsLlVJS2l0ID0ge307XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIFVJQnV0dG9uOiAoZ2xvYmFsLlVJS2l0LlVJQnV0dG9uID0gcmVxdWlyZSgnLi9VSUJ1dHRvbicpLmRlZmF1bHQpLFxuICAgIFVJQ2hlY2tib3g6IChnbG9iYWwuVUlLaXQuVUlDaGVja2JveCA9IHJlcXVpcmUoJy4vVUlDaGVja2JveCcpLmRlZmF1bHQpLFxuICAgIFVJQ2hlY2tib3hHcm91cDogKGdsb2JhbC5VSUtpdC5VSUNoZWNrYm94R3JvdXAgPSByZXF1aXJlKCcuL1VJQ2hlY2tib3hHcm91cCcpLmRlZmF1bHQpLFxuICAgIFVJRGlhbG9nOiAoZ2xvYmFsLlVJS2l0LlVJRGlhbG9nID0gcmVxdWlyZSgnLi9VSURpYWxvZycpLmRlZmF1bHQpLFxuICAgIFVJRml0dGVkVGV4dDogKGdsb2JhbC5VSUtpdC5VSUZpdHRlZFRleHQgPSByZXF1aXJlKCcuL1VJRml0dGVkVGV4dCcpLmRlZmF1bHQpLFxuICAgIFVJSW1hZ2U6IChnbG9iYWwuVUlLaXQuVUlJbWFnZSA9IHJlcXVpcmUoJy4vVUlJbWFnZScpLmRlZmF1bHQpLFxuICAgIFVJTGlzdDogKGdsb2JhbC5VSUtpdC5VSUxpc3QgPSByZXF1aXJlKCcuL1VJTGlzdCcpLmRlZmF1bHQpLFxuICAgIFVJTW9kYWw6IChnbG9iYWwuVUlLaXQuVUlNb2RhbCA9IHJlcXVpcmUoJy4vVUlNb2RhbCcpLmRlZmF1bHQpLFxuICAgIFVJUG9wb3ZlcjogKGdsb2JhbC5VSUtpdC5VSVBvcG92ZXIgPSByZXF1aXJlKCcuL1VJUG9wb3ZlcicpLmRlZmF1bHQpLFxuICAgIFVJUHJvZ3Jlc3M6IChnbG9iYWwuVUlLaXQuVUlQcm9ncmVzcyA9IHJlcXVpcmUoJy4vVUlQcm9ncmVzcycpLmRlZmF1bHQpLFxuICAgIFVJUHJvZ3Jlc3NpdmVEaXNjbG9zdXJlOiAoZ2xvYmFsLlVJS2l0LlVJUHJvZ3Jlc3NpdmVEaXNjbG9zdXJlID0gcmVxdWlyZSgnLi9VSVByb2dyZXNzaXZlRGlzY2xvc3VyZScpLmRlZmF1bHQpLFxuICAgIFVJUmFkaW86IChnbG9iYWwuVUlLaXQuVUlSYWRpbyA9IHJlcXVpcmUoJy4vVUlSYWRpbycpLmRlZmF1bHQpLFxuICAgIFVJU2VnbWVudGVkQ29udHJvbDogKGdsb2JhbC5VSUtpdC5VSVNlZ21lbnRlZENvbnRyb2wgPSByZXF1aXJlKCcuL1VJU2VnbWVudGVkQ29udHJvbCcpLmRlZmF1bHQpLFxuICAgIFVJVGFibGU6IChnbG9iYWwuVUlLaXQuVUlUYWJsZSA9IHJlcXVpcmUoJy4vVUlUYWJsZScpLmRlZmF1bHQpLFxuICAgIFVJVG9rZW5pemVkSW5wdXQ6IChnbG9iYWwuVUlLaXQuVUlUb2tlbml6ZWRJbnB1dCA9IHJlcXVpcmUoJy4vVUlUb2tlbml6ZWRJbnB1dCcpLmRlZmF1bHQpLFxuICAgIFVJVG9vbHRpcDogKGdsb2JhbC5VSUtpdC5VSVRvb2x0aXAgPSByZXF1aXJlKCcuL1VJVG9vbHRpcCcpLmRlZmF1bHQpLFxuICAgIFVJVHlwZWFoZWFkSW5wdXQ6IChnbG9iYWwuVUlLaXQuVUlUeXBlYWhlYWRJbnB1dCA9IHJlcXVpcmUoJy4vVUlUeXBlYWhlYWRJbnB1dCcpLmRlZmF1bHQpLFxuICAgIFVJVmlldzogKGdsb2JhbC5VSUtpdC5VSVZpZXcgPSByZXF1aXJlKCcuL1VJVmlldycpLmRlZmF1bHQpLFxufTtcbiJdfQ==
