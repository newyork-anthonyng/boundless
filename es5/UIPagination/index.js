'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _lodash = require('lodash.omit');

var _lodash2 = _interopRequireDefault(_lodash);

var _UISegmentedControl = require('../UISegmentedControl');

var _UISegmentedControl2 = _interopRequireDefault(_UISegmentedControl);

var _UIArrowKeyNavigation = require('../UIArrowKeyNavigation');

var _UIArrowKeyNavigation2 = _interopRequireDefault(_UIArrowKeyNavigation);

var _isFunction = require('../UIUtils/isFunction');

var _isFunction2 = _interopRequireDefault(_isFunction);

var _noop = require('../UIUtils/noop');

var _noop2 = _interopRequireDefault(_noop);

var _uuid = require('../UIUtils/uuid');

var _uuid2 = _interopRequireDefault(_uuid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * A utility view for paging the display of many data items of varying sizes.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @class UIPagination
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var Item = function (_React$Component) {
    _inherits(Item, _React$Component);

    function Item() {
        var _temp, _this, _ret;

        _classCallCheck(this, Item);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
            data: _this.props.data
        }, _this.mounted = false, _temp), _possibleConstructorReturn(_this, _ret);
    }

    Item.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        if (nextProps.data !== this.props.data) {
            this.setState({ data: nextProps.data });
        }
    };

    Item.prototype.waitForContentIfNecessary = function waitForContentIfNecessary() {
        if (this.state.data instanceof Promise) {
            this.state.data.then(function cautiouslySetItemData(promise, value) {
                if (this.mounted && this.state.data === promise) {
                    this.setState({ data: value });
                } // only replace if we're looking at the same promise, otherwise do nothing
            }.bind(this, this.state.data));
        }
    };

    Item.prototype.componentDidMount = function componentDidMount() {
        this.mounted = true;
        this.waitForContentIfNecessary();
    };

    Item.prototype.componentDidUpdate = function componentDidUpdate() {
        this.waitForContentIfNecessary();
    };

    Item.prototype.componentWillUnmount = function componentWillUnmount() {
        this.mounted = false;
    };

    Item.prototype.getClasses = function getClasses(extraClasses) {
        return (0, _classnames2.default)({
            'ui-pagination-item': true,
            'ui-pagination-item-even': this.props.even,
            'ui-pagination-item-odd': !this.props.even,
            'ui-pagination-item-loading': this.state.data instanceof Promise
        }) + (extraClasses ? ' ' + extraClasses : '');
    };

    Item.prototype.render = function render() {
        if (this.state.data instanceof Promise) {
            return _react2.default.createElement(
                'div',
                _extends({}, (0, _lodash2.default)(this.props, Item.internalKeys), { className: this.getClasses() }),
                this.props.loadingContent
            );
        }

        var jsx = this.props.dataToJSXConverterFunc(this.state.data, this.props.index);

        return _react2.default.cloneElement(jsx, _extends({}, (0, _lodash2.default)(this.props, Item.internalKeys), {
            className: this.getClasses(jsx.props.className),
            'data-index': this.props.index
        }));
    };

    return Item;
}(_react2.default.Component);

Item.propTypes = {
    even: _react.PropTypes.bool,
    data: _react.PropTypes.object,
    dataToJSXConverterFunc: _react.PropTypes.func,
    index: _react.PropTypes.number,
    loadingContent: _react.PropTypes.node
};
Item.internalKeys = Object.keys(Item.propTypes);

var UIPagination = function (_React$PureComponent) {
    _inherits(UIPagination, _React$PureComponent);

    function UIPagination() {
        var _temp2, _this2, _ret2;

        _classCallCheck(this, UIPagination);

        for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
        }

        return _ret2 = (_temp2 = (_this2 = _possibleConstructorReturn(this, _React$PureComponent.call.apply(_React$PureComponent, [this].concat(args))), _this2), _this2.state = {
            currentPage: _this2.props.initialPage,
            targetIndex: (_this2.props.initialPage - 1) * _this2.props.numItemsPerPage
        }, _this2.currentPage = function () {
            return _this2.state.currentPage;
        }, _this2.getPageForIndex = function (index) {
            var itemsPerPage = arguments.length <= 1 || arguments[1] === undefined ? _this2.props.numItemsPerPage : arguments[1];
            return Math.ceil((index + 1) / itemsPerPage);
        }, _this2.totalPages = function () {
            return Math.ceil(_this2.props.totalItems / _this2.props.numItemsPerPage);
        }, _this2.firstVisibleItemIndex = function () {
            return (_this2.currentPage() - 1) * _this2.props.numItemsPerPage;
        }, _this2.pageToIndex = function (i) {
            if (i < 0 || i >= _this2.props.totalItems) {
                return new Error('Cannot page to invalid index ' + i + '.');
            }

            _this2.setState({
                currentPage: _this2.getPageForIndex(i),
                targetIndex: i
            });
        }, _this2.handleClick = function (value) {
            var nextTargetIndex = void 0;

            switch (value) {
                case UIPagination.controls.FIRST:
                    nextTargetIndex = 0;
                    break;
                case UIPagination.controls.PREVIOUS:
                    nextTargetIndex = _this2.firstVisibleItemIndex() - _this2.props.numItemsPerPage;
                    break;
                case UIPagination.controls.NEXT:
                    nextTargetIndex = _this2.firstVisibleItemIndex() + _this2.props.numItemsPerPage;
                    break;
                case UIPagination.controls.LAST:
                    nextTargetIndex = _this2.props.totalItems - 1;
                    break;
                default:
                    nextTargetIndex = parseInt(value, 10) * _this2.props.numItemsPerPage - 1;
            }

            _this2.setState({
                currentPage: _this2.getPageForIndex(nextTargetIndex),
                targetIndex: nextTargetIndex
            });
        }, _temp2), _possibleConstructorReturn(_this2, _ret2);
    }

    UIPagination.prototype.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
        if (prevState.currentPage !== this.currentPage()) {
            (0, _reactDom.findDOMNode)(this.refs.item_0).focus();
        }
    };

    UIPagination.prototype.componentWillReceiveProps = function componentWillReceiveProps() {
        var _this3 = this;

        var oldProps = this.props;

        // use transactional `setState()` syntax to ensure that pending state updates are honored,
        // like those from `pageToIndex()`
        this.setState(function (state, props) {
            // NOTE: `props` here is technically the `nextProps` you'd receive from the first cWRP argument
            // so that's why we're caching `oldProps` outside the `setState`
            if (props.identifier !== oldProps.identifier) {
                return {
                    currentPage: 1,
                    targetIndex: 0
                };
            }

            return {
                currentPage: _this3.getPageForIndex(state.targetIndex, props.numItemsPerPage),
                targetIndex: state.targetIndex
            };
        });
    };

    UIPagination.prototype.createPageButtonOptions = function createPageButtonOptions() {
        var options = [];
        var currentPage = this.currentPage();
        var numPageToggles = this.props.numPageToggles;
        var totalPages = this.totalPages();
        var startPage = currentPage - (currentPage - 1) % numPageToggles;
        var endPage = Math.min(startPage + numPageToggles - 1, totalPages);

        if (this.props.showPaginationState) {
            options.push({
                selected: false,
                content: (0, _isFunction2.default)(this.props.showPaginationState) ? this.props.showPaginationState(currentPage, totalPages) : currentPage + ' of ' + totalPages,
                value: '',
                disabled: true,
                className: 'ui-pagination-control ui-pagination-control-state'
            });
        }

        if (this.props.showJumpToFirst) {
            options.push({
                selected: false,
                content: this.props.jumpToFirstControlContent,
                value: UIPagination.controls.FIRST,
                disabled: this.currentPage() === 1,
                className: 'ui-pagination-control ui-pagination-control-first'
            });
        }

        options.push({
            selected: false,
            content: this.props.previousPageControlContent,
            value: UIPagination.controls.PREVIOUS,
            disabled: this.currentPage() === 1,
            className: 'ui-pagination-control ui-pagination-control-previous'
        });

        for (var i = startPage; i <= endPage; i++) {
            options.push({
                className: 'ui-pagination-control',
                'data-page-number': i,
                selected: i === this.currentPage(),
                content: i,
                value: i
            });
        }

        options.push({
            selected: false,
            content: this.props.nextPageControlContent,
            value: UIPagination.controls.NEXT,
            disabled: this.currentPage() === totalPages,
            className: 'ui-pagination-control ui-pagination-control-next'
        });

        if (this.props.showJumpToLast) {
            options.push({
                selected: false,
                content: this.props.jumpToLastControlContent,
                value: UIPagination.controls.LAST,
                disabled: this.currentPage() === totalPages,
                className: 'ui-pagination-control ui-pagination-control-last'
            });
        }

        if (this.props.customControlContent) {
            options.push({
                selected: false,
                content: this.props.customControlContent,
                value: (0, _uuid2.default)(),
                disabled: true,
                className: 'ui-pagination-control ui-pagination-control-custom'
            });
        }

        return options;
    };

    UIPagination.prototype.generateItems = function generateItems() {
        var generatedItems = [];
        var firstItemIndex = this.firstVisibleItemIndex();
        var lastItemIndex = Math.min(this.props.totalItems, firstItemIndex + this.props.numItemsPerPage) - 1;

        for (var i = firstItemIndex; i <= lastItemIndex; i += 1) {
            generatedItems.push({ data: this.props.getItem(i) });
        }

        return generatedItems;
    };

    UIPagination.prototype.renderItems = function renderItems() {
        var _cx,
            _this4 = this;

        var props = this.props.listWrapperProps;
        var indexOffset = this.props.numItemsPerPage * (this.currentPage() - 1);

        return _react2.default.createElement(
            _UIArrowKeyNavigation2.default,
            _extends({}, props, {
                ref: 'itemList',
                className: (0, _classnames2.default)((_cx = {
                    'ui-pagination-items': true
                }, _cx[props.className] = !!props.className, _cx)) }),
            this.generateItems().map(function (item, index) {
                return _react2.default.createElement(Item, {
                    ref: 'item_' + index,
                    key: index,
                    data: item.data,
                    dataToJSXConverterFunc: _this4.props.itemToJSXConverterFunc,
                    even: index % 2 === 0,
                    index: indexOffset + index,
                    loadingContent: _this4.props.itemLoadingContent });
            })
        );
    };

    UIPagination.prototype.renderControls = function renderControls(position) {
        var _cx2;

        if (this.props.hidePagerIfNotNeeded && this.props.totalItems <= this.props.numItemsPerPage) {
            return;
        }

        var props = this.props.toggleWrapperProps;
        var positionLower = position.toLowerCase();
        var positionCapitalized = positionLower[0].toUpperCase() + positionLower.slice(1);

        return _react2.default.createElement(_UISegmentedControl2.default, _extends({}, props, {
            ref: 'segmentedControl' + positionCapitalized,
            className: (0, _classnames2.default)((_cx2 = {
                'ui-pagination-controls': true
            }, _cx2['ui-pagination-controls-' + positionLower] = true, _cx2[props.className] = !!props.className, _cx2)),
            options: this.createPageButtonOptions(),
            onOptionSelected: this.handleClick }));
    };

    UIPagination.prototype.renderView = function renderView() {
        var props = this.props;

        var position = UIPagination.positions;

        return _react2.default.createElement(
            'div',
            {
                ref: 'paginatedView',
                className: 'ui-pagination' },
            props.position === position.ABOVE || props.position === position.BOTH ? this.renderControls(position.ABOVE) : _noop2.default,
            this.renderItems(),
            props.position === position.BELOW || props.position === position.BOTH ? this.renderControls(position.BELOW) : _noop2.default
        );
    };

    UIPagination.prototype.render = function render() {
        var _cx3;

        return _react2.default.createElement(
            'div',
            _extends({}, (0, _lodash2.default)(this.props, UIPagination.internalKeys), {
                ref: 'wrapper',
                className: (0, _classnames2.default)((_cx3 = {
                    'ui-pagination-wrapper': true
                }, _cx3[this.props.className] = !!this.props.className, _cx3)) }),
            this.renderView()
        );
    };

    return UIPagination;
}(_react2.default.PureComponent);

UIPagination.controls = {
    FIRST: 'FIRST',
    PREVIOUS: 'PREVIOUS',
    NEXT: 'NEXT',
    LAST: 'LAST'
};
UIPagination.positions = {
    ABOVE: 'ABOVE',
    BELOW: 'BELOW',
    BOTH: 'BOTH'
};
UIPagination.propTypes = {
    customControlContent: _react.PropTypes.node,
    getItem: _react.PropTypes.func,
    hidePagerIfNotNeeded: _react.PropTypes.bool,
    identifier: _react.PropTypes.string.isRequired,

    initialPage: function validateInitialPage(props) {
        if (!Number.isInteger(props.initialPage)) {
            return new Error('`initialPage` must be an integer.');
        }

        var numberOfPages = Math.ceil(props.totalItems / props.numItemsPerPage);

        if (props.initialPage < 1 || props.initialPage > numberOfPages) {
            return new Error('`initialPage` must be between 1 and ' + numberOfPages + '.');
        }
    },

    itemLoadingContent: _react.PropTypes.node,
    itemToJSXConverterFunc: _react.PropTypes.func,
    jumpToFirstControlContent: _react.PropTypes.node,
    jumpToLastControlContent: _react.PropTypes.node,
    listWrapperProps: _react.PropTypes.object,
    nextPageControlContent: _react.PropTypes.node,

    numItemsPerPage: function validateNumItemsPerPage(props) {
        if (!Number.isInteger(props.numItemsPerPage)) {
            return new Error('`numItemsPerPage` must be an integer.');
        } else if (props.numItemsPerPage < 1) {
            return new Error('`numItemsPerPage` must be greater than zero.');
        }
    },

    numPageToggles: _react.PropTypes.number,
    position: _react.PropTypes.oneOf(Object.keys(UIPagination.positions)),
    previousPageControlContent: _react.PropTypes.node,
    showJumpToFirst: _react.PropTypes.bool,
    showJumpToLast: _react.PropTypes.bool,
    showPaginationState: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.func]),
    toggleWrapperProps: _react.PropTypes.object,
    totalItems: _react.PropTypes.number.isRequired
};
UIPagination.internalKeys = Object.keys(UIPagination.propTypes);
UIPagination.defaultProps = {
    getItem: _noop2.default,
    hidePagerIfNotNeeded: false,
    initialPage: 1,
    itemToJSXConverterFunc: function itemToJSXConverterFunc(data) {
        return data;
    },
    jumpToFirstControlContent: '« First',
    jumpToLastControlContent: 'Last »',
    listWrapperProps: {},
    nextPageControlContent: 'Next ›',
    numItemsPerPage: 10,
    numPageToggles: 5,
    position: UIPagination.positions.ABOVE,
    previousPageControlContent: '‹ Previous',
    showJumpToFirst: true,
    showJumpToLast: true,
    toggleWrapperProps: {}
};
exports.default = UIPagination;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL1VJUGFnaW5hdGlvbi9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFLQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7OytlQWRBOzs7OztJQWdCTSxJOzs7Ozs7Ozs7Ozs7NEpBV0YsSyxHQUFRO0FBQ0osa0JBQU0sTUFBSyxLQUFMLENBQVc7QUFEYixTLFFBSVIsTyxHQUFVLEs7OzttQkFFVix5QixzQ0FBMEIsUyxFQUFXO0FBQ2pDLFlBQUksVUFBVSxJQUFWLEtBQW1CLEtBQUssS0FBTCxDQUFXLElBQWxDLEVBQXdDO0FBQ3BDLGlCQUFLLFFBQUwsQ0FBYyxFQUFDLE1BQU0sVUFBVSxJQUFqQixFQUFkO0FBQ0g7QUFDSixLOzttQkFFRCx5Qix3Q0FBNEI7QUFDeEIsWUFBSSxLQUFLLEtBQUwsQ0FBVyxJQUFYLFlBQTJCLE9BQS9CLEVBQXdDO0FBQ3BDLGlCQUFLLEtBQUwsQ0FBVyxJQUFYLENBQWdCLElBQWhCLENBQXFCLFNBQVMscUJBQVQsQ0FBK0IsT0FBL0IsRUFBd0MsS0FBeEMsRUFBK0M7QUFDaEUsb0JBQUksS0FBSyxPQUFMLElBQWdCLEtBQUssS0FBTCxDQUFXLElBQVgsS0FBb0IsT0FBeEMsRUFBaUQ7QUFDN0MseUJBQUssUUFBTCxDQUFjLEVBQUMsTUFBTSxLQUFQLEVBQWQ7QUFDSCxpQkFIK0QsQ0FHOUQ7QUFDTCxhQUpvQixDQUluQixJQUptQixDQUlkLElBSmMsRUFJUixLQUFLLEtBQUwsQ0FBVyxJQUpILENBQXJCO0FBS0g7QUFDSixLOzttQkFFRCxpQixnQ0FBb0I7QUFDaEIsYUFBSyxPQUFMLEdBQWUsSUFBZjtBQUNBLGFBQUsseUJBQUw7QUFDSCxLOzttQkFFRCxrQixpQ0FBcUI7QUFDakIsYUFBSyx5QkFBTDtBQUNILEs7O21CQUVELG9CLG1DQUF1QjtBQUNuQixhQUFLLE9BQUwsR0FBZSxLQUFmO0FBQ0gsSzs7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QVYsQ0FBUDtBQUNIO0FBQ0osS0EvQmM7O0FBaUNmLG9CQUFnQixpQkFBVSxNQWpDWDtBQWtDZixjQUFVLGlCQUFVLEtBQVYsQ0FBZ0IsT0FBTyxJQUFQLENBQVksYUFBYSxTQUF6QixDQUFoQixDQWxDSztBQW1DZixnQ0FBNEIsaUJBQVUsSUFuQ3ZCO0FBb0NmLHFCQUFpQixpQkFBVSxJQXBDWjtBQXFDZixvQkFBZ0IsaUJBQVUsSUFyQ1g7QUFzQ2YseUJBQXFCLGlCQUFVLFNBQVYsQ0FBb0IsQ0FDckMsaUJBQVUsSUFEMkIsRUFFckMsaUJBQVUsSUFGMkIsQ0FBcEIsQ0F0Q047QUEwQ2Ysd0JBQW9CLGlCQUFVLE1BMUNmO0FBMkNmLGdCQUFZLGlCQUFVLE1BQVYsQ0FBaUI7QUEzQ2QsQztBQWRGLFksQ0E0RFYsWSxHQUFlLE9BQU8sSUFBUCxDQUFZLGFBQWEsU0FBekIsQztBQTVETCxZLENBOERWLFksR0FBZTtBQUNsQiwyQkFEa0I7QUFFbEIsMEJBQXNCLEtBRko7QUFHbEIsaUJBQWEsQ0FISztBQUlsQiw0QkFBd0I7QUFBQSxlQUFRLElBQVI7QUFBQSxLQUpOO0FBS2xCLCtCQUEyQixTQUxUO0FBTWxCLDhCQUEwQixRQU5SO0FBT2xCLHNCQUFrQixFQVBBO0FBUWxCLDRCQUF3QixRQVJOO0FBU2xCLHFCQUFpQixFQVRDO0FBVWxCLG9CQUFnQixDQVZFO0FBV2xCLGNBQVUsYUFBYSxTQUFiLENBQXVCLEtBWGY7QUFZbEIsZ0NBQTRCLFlBWlY7QUFhbEIscUJBQWlCLElBYkM7QUFjbEIsb0JBQWdCLElBZEU7QUFlbEIsd0JBQW9CO0FBZkYsQztrQkE5REwsWSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQSB1dGlsaXR5IHZpZXcgZm9yIHBhZ2luZyB0aGUgZGlzcGxheSBvZiBtYW55IGRhdGEgaXRlbXMgb2YgdmFyeWluZyBzaXplcy5cbiAqIEBjbGFzcyBVSVBhZ2luYXRpb25cbiAqL1xuXG5pbXBvcnQgUmVhY3QsIHtQcm9wVHlwZXN9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7ZmluZERPTU5vZGV9IGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgY3ggZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgb21pdCBmcm9tICdsb2Rhc2gub21pdCc7XG5cbmltcG9ydCBVSVNlZ21lbnRlZENvbnRyb2wgZnJvbSAnLi4vVUlTZWdtZW50ZWRDb250cm9sJztcbmltcG9ydCBVSUFycm93S2V5TmF2aWdhdGlvbiBmcm9tICcuLi9VSUFycm93S2V5TmF2aWdhdGlvbic7XG5pbXBvcnQgaXNGdW5jdGlvbiBmcm9tICcuLi9VSVV0aWxzL2lzRnVuY3Rpb24nO1xuaW1wb3J0IG5vb3AgZnJvbSAnLi4vVUlVdGlscy9ub29wJztcbmltcG9ydCB1dWlkIGZyb20gJy4uL1VJVXRpbHMvdXVpZCc7XG5cbmNsYXNzIEl0ZW0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgICAgIGV2ZW46IFByb3BUeXBlcy5ib29sLFxuICAgICAgICBkYXRhOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgICAgICBkYXRhVG9KU1hDb252ZXJ0ZXJGdW5jOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAgICAgaW5kZXg6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgICAgIGxvYWRpbmdDb250ZW50OiBQcm9wVHlwZXMubm9kZSxcbiAgICB9XG5cbiAgICBzdGF0aWMgaW50ZXJuYWxLZXlzID0gT2JqZWN0LmtleXMoSXRlbS5wcm9wVHlwZXMpXG5cbiAgICBzdGF0ZSA9IHtcbiAgICAgICAgZGF0YTogdGhpcy5wcm9wcy5kYXRhLFxuICAgIH1cblxuICAgIG1vdW50ZWQgPSBmYWxzZVxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgICAgaWYgKG5leHRQcm9wcy5kYXRhICE9PSB0aGlzLnByb3BzLmRhdGEpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2RhdGE6IG5leHRQcm9wcy5kYXRhfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB3YWl0Rm9yQ29udGVudElmTmVjZXNzYXJ5KCkge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5kYXRhIGluc3RhbmNlb2YgUHJvbWlzZSkge1xuICAgICAgICAgICAgdGhpcy5zdGF0ZS5kYXRhLnRoZW4oZnVuY3Rpb24gY2F1dGlvdXNseVNldEl0ZW1EYXRhKHByb21pc2UsIHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubW91bnRlZCAmJiB0aGlzLnN0YXRlLmRhdGEgPT09IHByb21pc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZGF0YTogdmFsdWV9KTtcbiAgICAgICAgICAgICAgICB9IC8vIG9ubHkgcmVwbGFjZSBpZiB3ZSdyZSBsb29raW5nIGF0IHRoZSBzYW1lIHByb21pc2UsIG90aGVyd2lzZSBkbyBub3RoaW5nXG4gICAgICAgICAgICB9LmJpbmQodGhpcywgdGhpcy5zdGF0ZS5kYXRhKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5tb3VudGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy53YWl0Rm9yQ29udGVudElmTmVjZXNzYXJ5KCk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgICAgICB0aGlzLndhaXRGb3JDb250ZW50SWZOZWNlc3NhcnkoKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgdGhpcy5tb3VudGVkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgZ2V0Q2xhc3NlcyhleHRyYUNsYXNzZXMpIHtcbiAgICAgICAgcmV0dXJuIGN4KHtcbiAgICAgICAgICAgICd1aS1wYWdpbmF0aW9uLWl0ZW0nOiB0cnVlLFxuICAgICAgICAgICAgJ3VpLXBhZ2luYXRpb24taXRlbS1ldmVuJzogdGhpcy5wcm9wcy5ldmVuLFxuICAgICAgICAgICAgJ3VpLXBhZ2luYXRpb24taXRlbS1vZGQnOiAhdGhpcy5wcm9wcy5ldmVuLFxuICAgICAgICAgICAgJ3VpLXBhZ2luYXRpb24taXRlbS1sb2FkaW5nJzogdGhpcy5zdGF0ZS5kYXRhIGluc3RhbmNlb2YgUHJvbWlzZSxcbiAgICAgICAgfSkgKyAoZXh0cmFDbGFzc2VzID8gJyAnICsgZXh0cmFDbGFzc2VzIDogJycpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuZGF0YSBpbnN0YW5jZW9mIFByb21pc2UpIHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdiB7Li4ub21pdCh0aGlzLnByb3BzLCBJdGVtLmludGVybmFsS2V5cyl9IGNsYXNzTmFtZT17dGhpcy5nZXRDbGFzc2VzKCl9PlxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5sb2FkaW5nQ29udGVudH1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBqc3ggPSB0aGlzLnByb3BzLmRhdGFUb0pTWENvbnZlcnRlckZ1bmModGhpcy5zdGF0ZS5kYXRhLCB0aGlzLnByb3BzLmluZGV4KTtcblxuICAgICAgICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGpzeCwge1xuICAgICAgICAgICAgLi4ub21pdCh0aGlzLnByb3BzLCBJdGVtLmludGVybmFsS2V5cyksXG4gICAgICAgICAgICBjbGFzc05hbWU6IHRoaXMuZ2V0Q2xhc3Nlcyhqc3gucHJvcHMuY2xhc3NOYW1lKSxcbiAgICAgICAgICAgICdkYXRhLWluZGV4JzogdGhpcy5wcm9wcy5pbmRleCxcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVSVBhZ2luYXRpb24gZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgY29udHJvbHMgPSB7XG4gICAgICAgIEZJUlNUOiAnRklSU1QnLFxuICAgICAgICBQUkVWSU9VUzogJ1BSRVZJT1VTJyxcbiAgICAgICAgTkVYVDogJ05FWFQnLFxuICAgICAgICBMQVNUOiAnTEFTVCcsXG4gICAgfVxuXG4gICAgc3RhdGljIHBvc2l0aW9ucyA9IHtcbiAgICAgICAgQUJPVkU6ICdBQk9WRScsXG4gICAgICAgIEJFTE9XOiAnQkVMT1cnLFxuICAgICAgICBCT1RIOiAnQk9USCcsXG4gICAgfVxuXG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgICAgY3VzdG9tQ29udHJvbENvbnRlbnQ6IFByb3BUeXBlcy5ub2RlLFxuICAgICAgICBnZXRJdGVtOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAgICAgaGlkZVBhZ2VySWZOb3ROZWVkZWQ6IFByb3BUeXBlcy5ib29sLFxuICAgICAgICBpZGVudGlmaWVyOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG5cbiAgICAgICAgaW5pdGlhbFBhZ2U6IGZ1bmN0aW9uIHZhbGlkYXRlSW5pdGlhbFBhZ2UocHJvcHMpIHtcbiAgICAgICAgICAgIGlmICghTnVtYmVyLmlzSW50ZWdlcihwcm9wcy5pbml0aWFsUGFnZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEVycm9yKCdgaW5pdGlhbFBhZ2VgIG11c3QgYmUgYW4gaW50ZWdlci4nKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgbnVtYmVyT2ZQYWdlcyA9IE1hdGguY2VpbChwcm9wcy50b3RhbEl0ZW1zIC8gcHJvcHMubnVtSXRlbXNQZXJQYWdlKTtcblxuICAgICAgICAgICAgaWYgKHByb3BzLmluaXRpYWxQYWdlIDwgMSB8fCBwcm9wcy5pbml0aWFsUGFnZSA+IG51bWJlck9mUGFnZXMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEVycm9yKCdgaW5pdGlhbFBhZ2VgIG11c3QgYmUgYmV0d2VlbiAxIGFuZCAnICsgbnVtYmVyT2ZQYWdlcyArICcuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgaXRlbUxvYWRpbmdDb250ZW50OiBQcm9wVHlwZXMubm9kZSxcbiAgICAgICAgaXRlbVRvSlNYQ29udmVydGVyRnVuYzogUHJvcFR5cGVzLmZ1bmMsXG4gICAgICAgIGp1bXBUb0ZpcnN0Q29udHJvbENvbnRlbnQ6IFByb3BUeXBlcy5ub2RlLFxuICAgICAgICBqdW1wVG9MYXN0Q29udHJvbENvbnRlbnQ6IFByb3BUeXBlcy5ub2RlLFxuICAgICAgICBsaXN0V3JhcHBlclByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgICAgICBuZXh0UGFnZUNvbnRyb2xDb250ZW50OiBQcm9wVHlwZXMubm9kZSxcblxuICAgICAgICBudW1JdGVtc1BlclBhZ2U6IGZ1bmN0aW9uIHZhbGlkYXRlTnVtSXRlbXNQZXJQYWdlKHByb3BzKSB7XG4gICAgICAgICAgICBpZiAoIU51bWJlci5pc0ludGVnZXIocHJvcHMubnVtSXRlbXNQZXJQYWdlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRXJyb3IoJ2BudW1JdGVtc1BlclBhZ2VgIG11c3QgYmUgYW4gaW50ZWdlci4nKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocHJvcHMubnVtSXRlbXNQZXJQYWdlIDwgMSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRXJyb3IoJ2BudW1JdGVtc1BlclBhZ2VgIG11c3QgYmUgZ3JlYXRlciB0aGFuIHplcm8uJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgbnVtUGFnZVRvZ2dsZXM6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgICAgIHBvc2l0aW9uOiBQcm9wVHlwZXMub25lT2YoT2JqZWN0LmtleXMoVUlQYWdpbmF0aW9uLnBvc2l0aW9ucykpLFxuICAgICAgICBwcmV2aW91c1BhZ2VDb250cm9sQ29udGVudDogUHJvcFR5cGVzLm5vZGUsXG4gICAgICAgIHNob3dKdW1wVG9GaXJzdDogUHJvcFR5cGVzLmJvb2wsXG4gICAgICAgIHNob3dKdW1wVG9MYXN0OiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgICAgc2hvd1BhZ2luYXRpb25TdGF0ZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICAgICAgICBQcm9wVHlwZXMuYm9vbCxcbiAgICAgICAgICAgIFByb3BUeXBlcy5mdW5jLFxuICAgICAgICBdKSxcbiAgICAgICAgdG9nZ2xlV3JhcHBlclByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgICAgICB0b3RhbEl0ZW1zOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgfVxuXG4gICAgc3RhdGljIGludGVybmFsS2V5cyA9IE9iamVjdC5rZXlzKFVJUGFnaW5hdGlvbi5wcm9wVHlwZXMpXG5cbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgICAgICBnZXRJdGVtOiBub29wLFxuICAgICAgICBoaWRlUGFnZXJJZk5vdE5lZWRlZDogZmFsc2UsXG4gICAgICAgIGluaXRpYWxQYWdlOiAxLFxuICAgICAgICBpdGVtVG9KU1hDb252ZXJ0ZXJGdW5jOiBkYXRhID0+IGRhdGEsXG4gICAgICAgIGp1bXBUb0ZpcnN0Q29udHJvbENvbnRlbnQ6ICfCqyBGaXJzdCcsXG4gICAgICAgIGp1bXBUb0xhc3RDb250cm9sQ29udGVudDogJ0xhc3QgwrsnLFxuICAgICAgICBsaXN0V3JhcHBlclByb3BzOiB7fSxcbiAgICAgICAgbmV4dFBhZ2VDb250cm9sQ29udGVudDogJ05leHQg4oC6JyxcbiAgICAgICAgbnVtSXRlbXNQZXJQYWdlOiAxMCxcbiAgICAgICAgbnVtUGFnZVRvZ2dsZXM6IDUsXG4gICAgICAgIHBvc2l0aW9uOiBVSVBhZ2luYXRpb24ucG9zaXRpb25zLkFCT1ZFLFxuICAgICAgICBwcmV2aW91c1BhZ2VDb250cm9sQ29udGVudDogJ+KAuSBQcmV2aW91cycsXG4gICAgICAgIHNob3dKdW1wVG9GaXJzdDogdHJ1ZSxcbiAgICAgICAgc2hvd0p1bXBUb0xhc3Q6IHRydWUsXG4gICAgICAgIHRvZ2dsZVdyYXBwZXJQcm9wczoge30sXG4gICAgfVxuXG4gICAgc3RhdGUgPSB7XG4gICAgICAgIGN1cnJlbnRQYWdlOiB0aGlzLnByb3BzLmluaXRpYWxQYWdlLFxuICAgICAgICB0YXJnZXRJbmRleDogKHRoaXMucHJvcHMuaW5pdGlhbFBhZ2UgLSAxKSAqIHRoaXMucHJvcHMubnVtSXRlbXNQZXJQYWdlLFxuICAgIH1cblxuICAgIGN1cnJlbnRQYWdlID0gKCkgPT4gdGhpcy5zdGF0ZS5jdXJyZW50UGFnZVxuICAgIGdldFBhZ2VGb3JJbmRleCA9IChpbmRleCwgaXRlbXNQZXJQYWdlID0gdGhpcy5wcm9wcy5udW1JdGVtc1BlclBhZ2UpID0+IE1hdGguY2VpbCgoaW5kZXggKyAxKSAvIGl0ZW1zUGVyUGFnZSlcbiAgICB0b3RhbFBhZ2VzID0gKCkgPT4gTWF0aC5jZWlsKHRoaXMucHJvcHMudG90YWxJdGVtcyAvIHRoaXMucHJvcHMubnVtSXRlbXNQZXJQYWdlKVxuXG4gICAgZmlyc3RWaXNpYmxlSXRlbUluZGV4ID0gKCkgPT4gKHRoaXMuY3VycmVudFBhZ2UoKSAtIDEpICogdGhpcy5wcm9wcy5udW1JdGVtc1BlclBhZ2VcblxuICAgIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSkge1xuICAgICAgICBpZiAocHJldlN0YXRlLmN1cnJlbnRQYWdlICE9PSB0aGlzLmN1cnJlbnRQYWdlKCkpIHtcbiAgICAgICAgICAgIGZpbmRET01Ob2RlKHRoaXMucmVmcy5pdGVtXzApLmZvY3VzKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKCkge1xuICAgICAgICBjb25zdCBvbGRQcm9wcyA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgLy8gdXNlIHRyYW5zYWN0aW9uYWwgYHNldFN0YXRlKClgIHN5bnRheCB0byBlbnN1cmUgdGhhdCBwZW5kaW5nIHN0YXRlIHVwZGF0ZXMgYXJlIGhvbm9yZWQsXG4gICAgICAgIC8vIGxpa2UgdGhvc2UgZnJvbSBgcGFnZVRvSW5kZXgoKWBcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSgoc3RhdGUsIHByb3BzKSA9PiB7XG4gICAgICAgICAgICAvLyBOT1RFOiBgcHJvcHNgIGhlcmUgaXMgdGVjaG5pY2FsbHkgdGhlIGBuZXh0UHJvcHNgIHlvdSdkIHJlY2VpdmUgZnJvbSB0aGUgZmlyc3QgY1dSUCBhcmd1bWVudFxuICAgICAgICAgICAgLy8gc28gdGhhdCdzIHdoeSB3ZSdyZSBjYWNoaW5nIGBvbGRQcm9wc2Agb3V0c2lkZSB0aGUgYHNldFN0YXRlYFxuICAgICAgICAgICAgaWYgKHByb3BzLmlkZW50aWZpZXIgIT09IG9sZFByb3BzLmlkZW50aWZpZXIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50UGFnZTogMSxcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0SW5kZXg6IDAsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UGFnZTogdGhpcy5nZXRQYWdlRm9ySW5kZXgoc3RhdGUudGFyZ2V0SW5kZXgsIHByb3BzLm51bUl0ZW1zUGVyUGFnZSksXG4gICAgICAgICAgICAgICAgdGFyZ2V0SW5kZXg6IHN0YXRlLnRhcmdldEluZGV4LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcGFnZVRvSW5kZXggPSBpID0+IHtcbiAgICAgICAgaWYgKGkgPCAwIHx8IGkgPj0gdGhpcy5wcm9wcy50b3RhbEl0ZW1zKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEVycm9yKGBDYW5ub3QgcGFnZSB0byBpbnZhbGlkIGluZGV4ICR7aX0uYCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGN1cnJlbnRQYWdlOiB0aGlzLmdldFBhZ2VGb3JJbmRleChpKSxcbiAgICAgICAgICAgIHRhcmdldEluZGV4OiBpLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjcmVhdGVQYWdlQnV0dG9uT3B0aW9ucygpIHtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IFtdO1xuICAgICAgICBjb25zdCBjdXJyZW50UGFnZSA9IHRoaXMuY3VycmVudFBhZ2UoKTtcbiAgICAgICAgY29uc3QgbnVtUGFnZVRvZ2dsZXMgPSB0aGlzLnByb3BzLm51bVBhZ2VUb2dnbGVzO1xuICAgICAgICBjb25zdCB0b3RhbFBhZ2VzID0gdGhpcy50b3RhbFBhZ2VzKCk7XG4gICAgICAgIGNvbnN0IHN0YXJ0UGFnZSA9IGN1cnJlbnRQYWdlIC0gKChjdXJyZW50UGFnZSAtIDEpICUgbnVtUGFnZVRvZ2dsZXMpO1xuICAgICAgICBjb25zdCBlbmRQYWdlID0gTWF0aC5taW4oc3RhcnRQYWdlICsgbnVtUGFnZVRvZ2dsZXMgLSAxLCB0b3RhbFBhZ2VzKTtcblxuICAgICAgICBpZiAodGhpcy5wcm9wcy5zaG93UGFnaW5hdGlvblN0YXRlKSB7XG4gICAgICAgICAgICBvcHRpb25zLnB1c2goe1xuICAgICAgICAgICAgICAgIHNlbGVjdGVkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBjb250ZW50OiAgIGlzRnVuY3Rpb24odGhpcy5wcm9wcy5zaG93UGFnaW5hdGlvblN0YXRlKVxuICAgICAgICAgICAgICAgICAgICAgICAgID8gdGhpcy5wcm9wcy5zaG93UGFnaW5hdGlvblN0YXRlKGN1cnJlbnRQYWdlLCB0b3RhbFBhZ2VzKVxuICAgICAgICAgICAgICAgICAgICAgICAgIDogYCR7Y3VycmVudFBhZ2V9IG9mICR7dG90YWxQYWdlc31gLFxuICAgICAgICAgICAgICAgIHZhbHVlOiAnJyxcbiAgICAgICAgICAgICAgICBkaXNhYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU6ICd1aS1wYWdpbmF0aW9uLWNvbnRyb2wgdWktcGFnaW5hdGlvbi1jb250cm9sLXN0YXRlJyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMucHJvcHMuc2hvd0p1bXBUb0ZpcnN0KSB7XG4gICAgICAgICAgICBvcHRpb25zLnB1c2goe1xuICAgICAgICAgICAgICAgIHNlbGVjdGVkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBjb250ZW50OiB0aGlzLnByb3BzLmp1bXBUb0ZpcnN0Q29udHJvbENvbnRlbnQsXG4gICAgICAgICAgICAgICAgdmFsdWU6IFVJUGFnaW5hdGlvbi5jb250cm9scy5GSVJTVCxcbiAgICAgICAgICAgICAgICBkaXNhYmxlZDogdGhpcy5jdXJyZW50UGFnZSgpID09PSAxLFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogJ3VpLXBhZ2luYXRpb24tY29udHJvbCB1aS1wYWdpbmF0aW9uLWNvbnRyb2wtZmlyc3QnLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBvcHRpb25zLnB1c2goe1xuICAgICAgICAgICAgc2VsZWN0ZWQ6IGZhbHNlLFxuICAgICAgICAgICAgY29udGVudDogdGhpcy5wcm9wcy5wcmV2aW91c1BhZ2VDb250cm9sQ29udGVudCxcbiAgICAgICAgICAgIHZhbHVlOiBVSVBhZ2luYXRpb24uY29udHJvbHMuUFJFVklPVVMsXG4gICAgICAgICAgICBkaXNhYmxlZDogdGhpcy5jdXJyZW50UGFnZSgpID09PSAxLFxuICAgICAgICAgICAgY2xhc3NOYW1lOiAndWktcGFnaW5hdGlvbi1jb250cm9sIHVpLXBhZ2luYXRpb24tY29udHJvbC1wcmV2aW91cycsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSBzdGFydFBhZ2U7IGkgPD0gZW5kUGFnZTsgaSsrKSB7XG4gICAgICAgICAgICBvcHRpb25zLnB1c2goe1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogJ3VpLXBhZ2luYXRpb24tY29udHJvbCcsXG4gICAgICAgICAgICAgICAgJ2RhdGEtcGFnZS1udW1iZXInOiBpLFxuICAgICAgICAgICAgICAgIHNlbGVjdGVkOiBpID09PSB0aGlzLmN1cnJlbnRQYWdlKCksXG4gICAgICAgICAgICAgICAgY29udGVudDogaSxcbiAgICAgICAgICAgICAgICB2YWx1ZTogaSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgb3B0aW9ucy5wdXNoKHtcbiAgICAgICAgICAgIHNlbGVjdGVkOiBmYWxzZSxcbiAgICAgICAgICAgIGNvbnRlbnQ6IHRoaXMucHJvcHMubmV4dFBhZ2VDb250cm9sQ29udGVudCxcbiAgICAgICAgICAgIHZhbHVlOiBVSVBhZ2luYXRpb24uY29udHJvbHMuTkVYVCxcbiAgICAgICAgICAgIGRpc2FibGVkOiB0aGlzLmN1cnJlbnRQYWdlKCkgPT09IHRvdGFsUGFnZXMsXG4gICAgICAgICAgICBjbGFzc05hbWU6ICd1aS1wYWdpbmF0aW9uLWNvbnRyb2wgdWktcGFnaW5hdGlvbi1jb250cm9sLW5leHQnLFxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAodGhpcy5wcm9wcy5zaG93SnVtcFRvTGFzdCkge1xuICAgICAgICAgICAgb3B0aW9ucy5wdXNoKHtcbiAgICAgICAgICAgICAgICBzZWxlY3RlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgY29udGVudDogdGhpcy5wcm9wcy5qdW1wVG9MYXN0Q29udHJvbENvbnRlbnQsXG4gICAgICAgICAgICAgICAgdmFsdWU6IFVJUGFnaW5hdGlvbi5jb250cm9scy5MQVNULFxuICAgICAgICAgICAgICAgIGRpc2FibGVkOiB0aGlzLmN1cnJlbnRQYWdlKCkgPT09IHRvdGFsUGFnZXMsXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAndWktcGFnaW5hdGlvbi1jb250cm9sIHVpLXBhZ2luYXRpb24tY29udHJvbC1sYXN0JyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMucHJvcHMuY3VzdG9tQ29udHJvbENvbnRlbnQpIHtcbiAgICAgICAgICAgIG9wdGlvbnMucHVzaCh7XG4gICAgICAgICAgICAgICAgc2VsZWN0ZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IHRoaXMucHJvcHMuY3VzdG9tQ29udHJvbENvbnRlbnQsXG4gICAgICAgICAgICAgICAgdmFsdWU6IHV1aWQoKSxcbiAgICAgICAgICAgICAgICBkaXNhYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU6ICd1aS1wYWdpbmF0aW9uLWNvbnRyb2wgdWktcGFnaW5hdGlvbi1jb250cm9sLWN1c3RvbScsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBvcHRpb25zO1xuICAgIH1cblxuICAgIGdlbmVyYXRlSXRlbXMoKSB7XG4gICAgICAgIGNvbnN0IGdlbmVyYXRlZEl0ZW1zID0gW107XG4gICAgICAgIGNvbnN0IGZpcnN0SXRlbUluZGV4ID0gdGhpcy5maXJzdFZpc2libGVJdGVtSW5kZXgoKTtcbiAgICAgICAgY29uc3QgbGFzdEl0ZW1JbmRleCA9IE1hdGgubWluKHRoaXMucHJvcHMudG90YWxJdGVtcywgZmlyc3RJdGVtSW5kZXggKyB0aGlzLnByb3BzLm51bUl0ZW1zUGVyUGFnZSkgLSAxO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSBmaXJzdEl0ZW1JbmRleDsgaSA8PSBsYXN0SXRlbUluZGV4OyBpICs9IDEpIHtcbiAgICAgICAgICAgIGdlbmVyYXRlZEl0ZW1zLnB1c2goe2RhdGE6IHRoaXMucHJvcHMuZ2V0SXRlbShpKX0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGdlbmVyYXRlZEl0ZW1zO1xuICAgIH1cblxuICAgIGhhbmRsZUNsaWNrID0gKHZhbHVlKSA9PiB7XG4gICAgICAgIGxldCBuZXh0VGFyZ2V0SW5kZXg7XG5cbiAgICAgICAgc3dpdGNoICh2YWx1ZSkge1xuICAgICAgICBjYXNlIFVJUGFnaW5hdGlvbi5jb250cm9scy5GSVJTVDpcbiAgICAgICAgICAgIG5leHRUYXJnZXRJbmRleCA9IDA7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBVSVBhZ2luYXRpb24uY29udHJvbHMuUFJFVklPVVM6XG4gICAgICAgICAgICBuZXh0VGFyZ2V0SW5kZXggPSB0aGlzLmZpcnN0VmlzaWJsZUl0ZW1JbmRleCgpIC0gdGhpcy5wcm9wcy5udW1JdGVtc1BlclBhZ2U7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBVSVBhZ2luYXRpb24uY29udHJvbHMuTkVYVDpcbiAgICAgICAgICAgIG5leHRUYXJnZXRJbmRleCA9IHRoaXMuZmlyc3RWaXNpYmxlSXRlbUluZGV4KCkgKyB0aGlzLnByb3BzLm51bUl0ZW1zUGVyUGFnZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFVJUGFnaW5hdGlvbi5jb250cm9scy5MQVNUOlxuICAgICAgICAgICAgbmV4dFRhcmdldEluZGV4ID0gdGhpcy5wcm9wcy50b3RhbEl0ZW1zIC0gMTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgbmV4dFRhcmdldEluZGV4ID0gcGFyc2VJbnQodmFsdWUsIDEwKSAqIHRoaXMucHJvcHMubnVtSXRlbXNQZXJQYWdlIC0gMTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgY3VycmVudFBhZ2U6IHRoaXMuZ2V0UGFnZUZvckluZGV4KG5leHRUYXJnZXRJbmRleCksXG4gICAgICAgICAgICB0YXJnZXRJbmRleDogbmV4dFRhcmdldEluZGV4LFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZW5kZXJJdGVtcygpIHtcbiAgICAgICAgY29uc3QgcHJvcHMgPSB0aGlzLnByb3BzLmxpc3RXcmFwcGVyUHJvcHM7XG4gICAgICAgIGNvbnN0IGluZGV4T2Zmc2V0ID0gdGhpcy5wcm9wcy5udW1JdGVtc1BlclBhZ2UgKiAodGhpcy5jdXJyZW50UGFnZSgpIC0gMSk7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxVSUFycm93S2V5TmF2aWdhdGlvblxuICAgICAgICAgICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgICAgICAgICByZWY9J2l0ZW1MaXN0J1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y3goe1xuICAgICAgICAgICAgICAgICAgICAndWktcGFnaW5hdGlvbi1pdGVtcyc6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIFtwcm9wcy5jbGFzc05hbWVdOiAhIXByb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgICAgICAgICB9KX0+XG4gICAgICAgICAgICAgICAge3RoaXMuZ2VuZXJhdGVJdGVtcygpLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXtgaXRlbV8ke2luZGV4fWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhPXtpdGVtLmRhdGF9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVRvSlNYQ29udmVydGVyRnVuYz17dGhpcy5wcm9wcy5pdGVtVG9KU1hDb252ZXJ0ZXJGdW5jfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW49e2luZGV4ICUgMiA9PT0gMH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleD17aW5kZXhPZmZzZXQgKyBpbmRleH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nQ29udGVudD17dGhpcy5wcm9wcy5pdGVtTG9hZGluZ0NvbnRlbnR9IC8+XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L1VJQXJyb3dLZXlOYXZpZ2F0aW9uPlxuICAgICAgICApO1xuICAgIH1cblxuICAgIHJlbmRlckNvbnRyb2xzKHBvc2l0aW9uKSB7XG4gICAgICAgIGlmICggICB0aGlzLnByb3BzLmhpZGVQYWdlcklmTm90TmVlZGVkXG4gICAgICAgICAgICAmJiB0aGlzLnByb3BzLnRvdGFsSXRlbXMgPD0gdGhpcy5wcm9wcy5udW1JdGVtc1BlclBhZ2UpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHByb3BzID0gdGhpcy5wcm9wcy50b2dnbGVXcmFwcGVyUHJvcHM7XG4gICAgICAgIGNvbnN0IHBvc2l0aW9uTG93ZXIgPSBwb3NpdGlvbi50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBjb25zdCBwb3NpdGlvbkNhcGl0YWxpemVkID0gcG9zaXRpb25Mb3dlclswXS50b1VwcGVyQ2FzZSgpICsgcG9zaXRpb25Mb3dlci5zbGljZSgxKTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFVJU2VnbWVudGVkQ29udHJvbFxuICAgICAgICAgICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgICAgICAgICByZWY9e2BzZWdtZW50ZWRDb250cm9sJHtwb3NpdGlvbkNhcGl0YWxpemVkfWB9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjeCh7XG4gICAgICAgICAgICAgICAgICAgICd1aS1wYWdpbmF0aW9uLWNvbnRyb2xzJzogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgW2B1aS1wYWdpbmF0aW9uLWNvbnRyb2xzLSR7cG9zaXRpb25Mb3dlcn1gXTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgW3Byb3BzLmNsYXNzTmFtZV06ICEhcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgIG9wdGlvbnM9e3RoaXMuY3JlYXRlUGFnZUJ1dHRvbk9wdGlvbnMoKX1cbiAgICAgICAgICAgICAgICBvbk9wdGlvblNlbGVjdGVkPXt0aGlzLmhhbmRsZUNsaWNrfSAvPlxuICAgICAgICApO1xuICAgIH1cblxuICAgIHJlbmRlclZpZXcoKSB7XG4gICAgICAgIGNvbnN0IHtwcm9wc30gPSB0aGlzO1xuICAgICAgICBjb25zdCBwb3NpdGlvbiA9IFVJUGFnaW5hdGlvbi5wb3NpdGlvbnM7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICByZWY9J3BhZ2luYXRlZFZpZXcnXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSd1aS1wYWdpbmF0aW9uJz5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgKHByb3BzLnBvc2l0aW9uID09PSBwb3NpdGlvbi5BQk9WRSB8fCBwcm9wcy5wb3NpdGlvbiA9PT0gcG9zaXRpb24uQk9USClcbiAgICAgICAgICAgICAgICAgICAgPyB0aGlzLnJlbmRlckNvbnRyb2xzKHBvc2l0aW9uLkFCT1ZFKVxuICAgICAgICAgICAgICAgICAgICA6IG5vb3BcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJJdGVtcygpfVxuXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIChwcm9wcy5wb3NpdGlvbiA9PT0gcG9zaXRpb24uQkVMT1cgfHwgcHJvcHMucG9zaXRpb24gPT09IHBvc2l0aW9uLkJPVEgpXG4gICAgICAgICAgICAgICAgICAgID8gdGhpcy5yZW5kZXJDb250cm9scyhwb3NpdGlvbi5CRUxPVylcbiAgICAgICAgICAgICAgICAgICAgOiBub29wXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIHsuLi5vbWl0KHRoaXMucHJvcHMsIFVJUGFnaW5hdGlvbi5pbnRlcm5hbEtleXMpfVxuICAgICAgICAgICAgICAgIHJlZj0nd3JhcHBlcidcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2N4KHtcbiAgICAgICAgICAgICAgICAgICAgJ3VpLXBhZ2luYXRpb24td3JhcHBlcic6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIFt0aGlzLnByb3BzLmNsYXNzTmFtZV06ICEhdGhpcy5wcm9wcy5jbGFzc05hbWUsXG4gICAgICAgICAgICAgICAgfSl9PlxuICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlclZpZXcoKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cbiJdfQ==