var Contact = React.createClass({
  propTypes: {
    item: React.PropTypes.object.isRequired
  },

  render: function() {
    return React.createElement(
      "div",
      { className: "contactItem" },
      React.createElement("img", {
        className: "contactImage",
        src:
          "https://cdn2.iconfinder.com/data/icons/picons-basic-1/57/basic1-039_address_book-512.png"
      }),
      React.createElement(
        "p",
        { className: "contactLabel" },
        "Imię: " + this.props.item.firstName
      ),
      React.createElement(
        "p",
        { className: "contactLabel" },
        "Nazwisko: " + this.props.item.lastName
      ),
      React.createElement(
        "a",
        { className: "contactEmail", href: "mailto:" + this.props.item.email },
        this.props.item.email
      )
    );
  }
});
