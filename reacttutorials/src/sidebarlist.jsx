var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var RouteHandler = ReactRouter.RouteHandler;
var SidebarItem = require('./sidebaritem');
class SidebarList extends React.Component {
    constructor() {
        super();
        this.numbers = [1, 2, 3, 4, 5];
    }
    render() {
        var NumberList=this.NumberList.bind(this);
        return (
            <div>
                <div className="fa-company-name">
                    FieldAware
                </div>
                <ul className="list-group no-bg no-borders pull-in m-b-sm m-t-8 userStatus">
                    <li className="list-group-item">
                        <a className="pull-left thumb-sm avatar m-r hide">
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
                    <NumberList></NumberList>
                </div>
            </div>
        );
    }
    NumberList() {
        const numbers = this.numbers;
        console.log("test",0);
        const listItems = numbers.map((number) => {
            return <li className="list-group-item clear"  key={number.toString()} value={number}>
                        <SidebarItem  ></SidebarItem>
                   </li>
        });
        return (
            <ul className="list-group no-bg no-borders pull-in conversationList">
                {listItems}
            </ul>
        );
    }
    listItem(props) {
        return <li>{props.value}</li>;
    }
}

module.exports = SidebarList;

/*
function ListItem(props) {
  // Correct! There is no need to specify the key here:
  return <li>{props.value}</li>;
}

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    // Correct! Key should be specified inside the array.
    <ListItem key={number.toString()}
              value={number} />
  );
  return (
    <ul>
      {listItems}
    </ul>
  );
}

const numbers = [1, 2, 3, 4, 5];
 */
