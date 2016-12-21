var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var RouteHandler = ReactRouter.RouteHandler;
var Custom = require('./custom');
var SidebarList = require('./sidebarlist');
class Sidebar extends React.Component {
  render() {
    console.log(this,'mantu');
    return (
       <div id="sidebarDiv" style={{marginTop: '-6px', top: 0, height: 668}}>
        <div className="aside-wrap">
          <div className="navi-wrap" id="navbarcontainer">
            <SidebarList></SidebarList>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = Sidebar;

