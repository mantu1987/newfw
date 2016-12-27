var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var RouteHandler = ReactRouter.RouteHandler;
class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = { mode: props.location.state };
    }
    componentWillReceiveProps(newprops){
        console.log(newprops)
    }
    render() {
        console.log(this, 'mantu',this.props.location.state);
        return (
            <div>
                <div className="app-aside off-screen bg-black" >
                    {this.props.sidebar}
                </div>
                <div className="app-content">
                    <a href="#" className="off-screen-toggle-btn" data-target=".app-content" >
                        <i className="glyphicon glyphicon-align-justify"></i>
                    </a>
                    <div className="app-content-body fade-in-up" >
                        <div>{this.props.children || this.props.main}</div>
                    </div>
                </div>
            </div>
        );
    }
}

module.exports = Container;