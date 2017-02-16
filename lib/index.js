'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactInlinesvg = require('react-inlinesvg');

var _reactInlinesvg2 = _interopRequireDefault(_reactInlinesvg);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MadeWithLove = function (_Component) {
  _inherits(MadeWithLove, _Component);

  function MadeWithLove() {
    _classCallCheck(this, MadeWithLove);

    return _possibleConstructorReturn(this, (MadeWithLove.__proto__ || Object.getPrototypeOf(MadeWithLove)).apply(this, arguments));
  }

  _createClass(MadeWithLove, [{
    key: 'getBaseMessage',
    value: function getBaseMessage(props) {
      var emoji = props.emoji,
          by = props.by,
          link = props.link,
          icons = props.icons;

      var messageBase = 'Made with <3';
      var author = by;

      if (emoji) {
        messageBase = this.emojify(messageBase, emoji);
      }

      if (by) {
        if (link) {
          author = _react2.default.createElement(
            'a',
            { href: '' + link },
            by
          );
        }
        return _react2.default.createElement(
          'span',
          null,
          messageBase + ' by ',
          author
        );
      }

      return _react2.default.createElement(
        'span',
        null,
        messageBase
      );
    }
  }, {
    key: 'getIconMessage',
    value: function getIconMessage(props) {
      var by = props.by,
          link = props.link,
          icons = props.icons;

      var messageBase = 'Made with <3';
      var author = by;

      messageBase = this.iconify(messageBase, icons);

      if (by) {
        if (link) {
          author = _react2.default.createElement(
            'a',
            { href: '' + link },
            by
          );
        }
        return _react2.default.createElement(
          'span',
          null,
          messageBase,
          ' by ',
          author
        );
      }

      return _react2.default.createElement(
        'span',
        null,
        messageBase
      );
    }
  }, {
    key: 'iconify',
    value: function iconify(messageBase, icons) {
      var made = 'Made';
      var join = ' with ';
      var using = '<3';

      // Required for center alignment with text
      var style = {
        'vertical-align': 'sub'
      };

      if (icons.verb) {
        made = _react2.default.createElement(
          'span',
          { style: style },
          _react2.default.createElement(_reactInlinesvg2.default, { src: icons.verb })
        );
      }

      if (icons.using) {
        using = _react2.default.createElement(
          'span',
          { style: style },
          _react2.default.createElement(_reactInlinesvg2.default, { src: icons.using })
        );
      }

      return _react2.default.createElement(
        'span',
        { 'text-anchor': 'middle' },
        made,
        join,
        using
      );
    }
  }, {
    key: 'emojify',
    value: function emojify(messageBase, emoji) {
      if (emoji.verb) {
        messageBase = messageBase.replace('Made', emoji.verb);
      }
      if (emoji.using) {
        messageBase = messageBase.replace('<3', emoji.using);
      } else {
        messageBase = messageBase.replace('<3', '❤️');
      }
      return messageBase;
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      var icons = this.props.icons;

      this.message = icons ? this.getIconMessage(this.props) : this.getBaseMessage(this.props);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'made-with-love' },
        this.message
      );
    }
  }]);

  return MadeWithLove;
}(_react.Component);

exports.default = MadeWithLove;
