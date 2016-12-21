var React = require('react');
var ReactRouter = require('react-router');
var ReactDOM = require('react-dom');
var Login = require('./login');
var Stuff = require('./stuff');
var Contact = require('./contact');
var Container = require("./container");
var Custom = require('./custom');
var Details = require('./details');
var browserHistory = ReactRouter.browserHistory;
var DefaultRoute = ReactRouter.DefaultRoute;
var Link = ReactRouter.Link;
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var RouteHandler = ReactRouter.RouteHandler;
var IndexRoute = ReactRouter.IndexRoute
class App extends React.Component {
  constructor() {
    super();
    console.log(this, "test user");
  }
  render() {
    return (

      <div>{this.props.children}</div>);
  }
}

var destination = document.querySelector("#root");
//http://stackoverflow.com/questions/34343085/react-router-creating-nested-routes-with-no-component-nesting
ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Login} />
      <Route path="contact" component={Container}>
        <IndexRoute components={{sidebar:Contact,main:Custom}} />
        <Route path=":custom" components={{sidebar:Contact,main:Details}} />
      </Route>
      <Route path="stuff" component={Stuff} />
    </Route>
  </Router>,
  destination
);