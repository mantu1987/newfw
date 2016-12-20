var React = require('react');
var ReactRouter = require('react-router');
var ReactDOM = require('react-dom');
var browserHistory=ReactRouter.browserHistory;
var Home = require('./home');
var Stuff = require('./stuff');
var Contact = require('./contact');
var Custom = require('./custom');
var DefaultRoute = ReactRouter.DefaultRoute;
var Link = ReactRouter.Link;
var Router=ReactRouter.Router;
var Route = ReactRouter.Route;
var RouteHandler = ReactRouter.RouteHandler;
var IndexRoute = ReactRouter.IndexRoute
class App extends React.Component {
   render() {
          return (
            <div>
		        <h1>Test</h1>
		        <ul className="header">
		          <li><Link activeClassName="active" to="/">Home</Link></li>
              <li><Link activeClassName="active" to="/stuff" component={Stuff}>Stuff</Link></li>
              <li><Link activeClassName="active" to="/contact" >Contact</Link></li>
		        </ul>
		        <div className="content">
               {this.props.children}
		        </div>
      		</div>
          );
   }
}

var destination = document.querySelector("#content");
/*ReactDOM.render(
  <App/>,
  document.getElementById('content')
);*/
/*ReactDOM.render(
  <div>
    <App/>
  </div>,
  destination
);*/
//http://stackoverflow.com/questions/32303221/react-router-nested-routes-not-working
ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="contact" component={Contact} >

      </Route>
      <Route path="contact/custom" component={Custom} />
      <Route path="stuff" component={Stuff} />
    </Route>
  </Router>,
  destination
);