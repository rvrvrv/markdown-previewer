"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var exampleText = "# Heading\n\n![Random image](https://unsplash.it/50 'Random image')\n\n## Sub-heading\n### Another deeper heading\n \nParagraphs are separated\nby a blank line.\n\nText attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ .\n\nShopping list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n\n> > This is a blockquote.\n\n```\n// This is an example of code\nconst greeting = 'Hello!';\n```\n\nMarkdown parser courtesy of [marked.js](https://github.com/chjj/marked)\n";

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this));

    _this.handleChange = function (e) {
      _this.setState({ text: e.target.value, editing: true });
    };

    _this.state = { text: exampleText, editing: false };
    return _this;
  }

  // Call markdown function from external API

  App.prototype.markIt = function markIt() {
    return { __html: marked(this.state.text, { sanitize: true }) };
  };

  // Upon text change, update state and highlight preview box

  App.prototype.render = function render() {
    var _this2 = this;

    var editingStyle = { boxShadow: '0 0 40px #aaf' };
    return React.createElement(
      "div",
      null,
      React.createElement(
        "h2",
        { className: "title" },
        React.createElement(
          "span",
          { role: "img", "aria-label": "document" },
          "📝"
        ),
        " Markdown Previewer ",
        React.createElement(
          "span",
          { role: "img", "aria-label": "glasses" },
          "👓"
        )
      ),
      React.createElement(
        "div",
        { className: "container" },
        React.createElement("textarea", {
          className: "editor",
          onChange: this.handleChange,
          onBlur: function onBlur() {
            return _this2.setState({ editing: false });
          },
          defaultValue: this.state.text,
          rows: "30",
          cols: "50"
        }),
        React.createElement("p", { className: "preview", dangerouslySetInnerHTML: this.markIt(), style: this.state.editing ? editingStyle : null })
      )
    );
  };

  return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));
