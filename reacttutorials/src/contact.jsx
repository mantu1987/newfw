var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var Router=ReactRouter.Router;
var Route = ReactRouter.Route;
var RouteHandler = ReactRouter.RouteHandler;
var Custom = require('./custom');
class Contact extends React.Component {
   render() {
         return (
            <div>
              <h2>GOT QUESTIONS?</h2>
              <p>The easiest thing to do is post on
              our &nbsp;
                <Link to="contact/custom" >forums</Link>
              </p>
            </div>
      );
   }
}

module.exports = Contact;