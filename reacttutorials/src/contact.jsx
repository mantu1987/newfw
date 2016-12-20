var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var RouteHandler = ReactRouter.RouteHandler;
var Custom = require('./custom');
class Contact extends React.Component {
  render() {
    console.log(this,'mantu');
    return (
      <div className="app-content">
       temp
      </div>
    );
  }
}

module.exports = Contact;