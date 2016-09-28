var Child = React.createClass({
  displayName: "Child",

  render: function () {
    return React.createElement(
      "div",
      null,
      "and this is the ",
      React.createElement(
        "b",
        null,
        this.props.name
      ),
      "."
    );
  }
});

var Parent = React.createClass({
  displayName: "Parent",

  render: function () {
    return React.createElement(
      "div",
      null,
      React.createElement(
        "div",
        null,
        " This is the parent. "
      ),
      React.createElement(Child, { name: "child" })
    );
  }
});

ReactDOM.render(React.createElement(Parent, null), document.getElementById('app'));