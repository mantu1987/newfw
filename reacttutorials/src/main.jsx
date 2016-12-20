var React = require('react');
var ReactRouter = require('react-router');
var ReactDOM = require('react-dom');
var Home = require('./home');
var Stuff = require('./stuff');
var Contact = require('./contact');
var Custom = require('./custom');
var browserHistory = ReactRouter.browserHistory;
var DefaultRoute = ReactRouter.DefaultRoute;
var Link = ReactRouter.Link;
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var RouteHandler = ReactRouter.RouteHandler;
var IndexRoute = ReactRouter.IndexRoute
class App extends React.Component {
  render() {
    return (
      /* <div>
       <h1>Test</h1>
       <ul className="header">
         <li><Link activeClassName="active" to="/">Home</Link></li>
         <li><Link activeClassName="active" to="/stuff" >Stuff</Link></li>
         <li><Link activeClassName="active" to="/contact" >Contact</Link></li>
       </ul>
       <div className="content">
          {this.props.children}
       </div>
      </div>*/
      /*<div className="app-content">
        <a href="#" className="off-screen-toggle-btn" data-target=".app-content" >
          <i className="glyphicon glyphicon-align-justify"></i>
        </a>

        <div className="app-content-body fade-in-up" >
           {this.props.children}
        </div>
      </div>*/
       <div>{this.props.children}</div>
    );
  }
}

var destination = document.querySelector("#root");
/*Plain App
ReactDOM.render(
  <App/>,
  document.getElementById('content')
);*/

/*
ReactDOM.render(
  <div>
    <App/>
  </div>,
  destination
);*/

//--with router
//http://stackoverflow.com/questions/34343085/react-router-creating-nested-routes-with-no-component-nesting
ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="contact" >
        <IndexRoute component={Contact} />
        <Route path="custom" component={Custom} />
      </Route>
      <Route path="stuff" component={Stuff} />
    </Route>
  </Router>,
  destination
);