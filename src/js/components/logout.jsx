var React = require('react'),
    auth = require('../services/auth');

var Logout = React.createClass({
  componentDidMount: function () {
    auth.logout();
  },
  render: function () {
    return <p>You are now logged out</p>;
  }
});

module.exports = Logout;