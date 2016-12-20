var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var RouteHandler = ReactRouter.RouteHandler;
class Container extends React.Component {
    constructor() {
        super()
        console.log(this);
    }
    render() {
        console.log(this, 'mantu');
        return (
            <div className="app-content">
                <a href="#" className="off-screen-toggle-btn" data-target=".app-content" >
                    <i className="glyphicon glyphicon-align-justify"></i>
                </a>
                <Link to="/contact/custom" >forums</Link>
                <div className="app-content-body fade-in-up" >
                    <div>{this.props.children}</div>
                </div>
            </div>
        );
    }
}

module.exports = Container;