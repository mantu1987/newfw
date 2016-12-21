var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var RouteHandler = ReactRouter.RouteHandler;
class SidebarItem extends React.Component {
    render() {
        return (
            <div>
                <div className="badge presenceIcon bg-online pull-right m-r-12 online" />
                <div className="clear">
                    <div>
                        <a title="name" className="conversationDisplayName">User</a>
                        <div className="userActions">
                            <i className="fa fa-comment" title="title}" />
                            <i className="fa fa-phone icoCall" title="Audio Call name" />
                            <i className="fa fa-desktop" title="Video Call name" />
                        </div>
                    </div>
                </div>
                <div style={{ width: 240 }}>
                    <ul className="list-group no-bg no-borders pull-in conversationList">
                        <li className="list-group-item clear">
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

module.exports = SidebarItem;

