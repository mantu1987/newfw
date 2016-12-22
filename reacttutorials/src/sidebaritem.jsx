var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var RouteHandler = ReactRouter.RouteHandler;
class SidebarItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = { presence: props.value };
    }
    render() {
        let presenceStatus = null;
        if (this.state.presence.availability == "online") {
            presenceStatus = <div className="badge presenceIcon bg-online pull-right m-r-12 online" />
        }
        else if (this.state.presence.availability == "incall") {
            presenceStatus = <div className="badge presenceIcon bg-incall pull-right m-r-12 incall" />
        }
        else if (this.state.presence.availability == "offline") {
            presenceStatus = <div className="badge presenceIcon bg-offline pull-right m-r-12 offline" />
        }
        else if (this.state.presence.availability == "away") {
            presenceStatus = <div className="badge presenceIcon bg-away pull-right m-r-12 away" />
        }
        return (
            <div>
                {presenceStatus}
                <div className="clear">
                    <div>
                        <a title="name" className="conversationDisplayName">{this.state.presence.userName}</a>
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

