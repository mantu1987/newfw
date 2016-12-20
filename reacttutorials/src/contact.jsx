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
        <a href="#" className="off-screen-toggle-btn" data-target=".app-content" >
          <i className="glyphicon glyphicon-align-justify"></i>
        </a>
          <Link to="contact/custom" >forums</Link>
        <div className="app-content-body fade-in-up" >
          {React.cloneElement(this.props.children, {siteData: this.props.siteData})}
        </div>
      </div>
    );
  }
}

module.exports = Contact;