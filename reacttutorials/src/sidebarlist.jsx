var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var RouteHandler = ReactRouter.RouteHandler;
var Custom = require('./custom');
class SidebarList extends React.Component {
    render() {
        console.log(this, 'mantu');
        return (
            <div>
                <div className="fa-company-name">
                    FieldAware
                </div>
                <ul className="list-group no-bg no-borders pull-in m-b-sm m-t-8 userStatus">
                    <li className="list-group-item">
                        <a herf className="pull-left thumb-sm avatar m-r hide">
                            <img src="img/user.png" alt="..." className="img-circle" />
                            <i className="on b-white bottom" />
                        </a>
                        <div className="clear userProfileSection">
                            <div className="truncated-username">
                                <a>Mantu Nigam</a>
                            </div>
                            <small className="text-muted m-l-15"><i>Online</i></small>
                            <div className="badge presenceIcon bg-online pull-right m-r-12" />
                        </div>
                    </li>
                </ul>
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

module.exports = SidebarList;
