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
        this.state={'presenceList':this.getPresenceList()};
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
        const presenceList = this.state.presenceList;
        console.log("test",0);
        const listItems = presenceList.map((presence) => {
            return <li  style={{ height: 50 }} className="list-group-item clear"  key={presence.id.toString()} value={presence}>
                        <SidebarItem value={presence} ></SidebarItem>
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
    getPresenceList(){
        return [{"userName":"Pankaj Dave","availability":"online","name":"Pankaj Dave","location":{},"image":"","state":{},"id":"Pan.Dav9831","lastAccessTime":1482392310995,"presence":{}},{"userName":"Monish Hirudkar","availability":"online","name":"Monish Hirudkar","location":{},"image":"","state":{},"id":"Mon.Hir10967","lastAccessTime":1482392310995,"presence":{}},{"userName":"Kundaan1 Deotale","availability":"offline","name":"Kundaan1 Deotale","location":{},"image":"","state":{},"id":"Kun.Deo7809","lastAccessTime":1482392310995,"presence":{}},{"userName":"Ajit Singh","availability":"online","name":"Ajit Singh","location":{},"image":"","state":{},"id":"Aji.Sin8769","lastAccessTime":1482392310995,"presence":{}},{"userName":"Swapnil Bendekar","availability":"online","name":"Swapnil Bendekar","location":{},"image":"https://api.miteldev.com:443/miec/client/v1/image/1390c337-531d-11e6-8004-005056859d23","state":{},"id":"Swa.Ben10124","lastAccessTime":1482392310995,"presence":{}},{"userName":"Dnyaneshwar1 Dalvi","availability":"online","name":"Dnyaneshwar1 Dalvi","location":{},"image":"","state":{},"id":"Dny.Dal5911","lastAccessTime":1482392310995,"presence":{}},{"userName":"Neernay Khairkar","availability":"offline","name":"Neernay Khairkar","location":{},"image":"","state":{},"id":"Nee.Kha9890","lastAccessTime":1482392310995,"presence":{}},{"userName":"Vishal Varade","availability":"offline","name":"Vishal Varade","location":{},"image":"","state":{},"id":"Vis.Var5811","lastAccessTime":1482392310995,"presence":{}},{"userName":"Ashish Ambolikar","availability":"online","name":"Ashish Ambolikar","location":{},"image":"","state":{},"id":"Ash.Amb5986","lastAccessTime":1482392310995,"presence":{}},{"userName":"Nikhil Mude","availability":"online","name":"Nikhil Mude","location":{},"image":"","state":{},"id":"Nik.Mud5843","lastAccessTime":1482392310995,"presence":{}},{"userName":"Nikhil2 Mude","availability":"online","name":"Nikhil2 Mude","location":{},"image":"","state":{},"id":"Nik.Mud2805","lastAccessTime":1482392310995,"presence":{}},{"userName":"Ashish Panpaliya","availability":"online","name":"Ashish Panpaliya","location":{},"image":"","state":{},"id":"Ash.Pan5134","lastAccessTime":1482392310995,"presence":{}},{"userName":"Nikhilesh Ramteke","availability":"online","name":"Nikhilesh Ramteke","location":{},"image":"","state":{},"id":"Nik.Ram4482","lastAccessTime":1482392310995,"presence":{}},{"userName":"Mitesh1 Agarwal","name":"Mitesh1 Agarwal","location":{},"image":"","state":{},"id":"Mit.Aga10412","lastAccessTime":1482392310995,"presence":{}},{"userName":"Dnyaneshwar Dalvi","availability":"online","name":"Dnyaneshwar Dalvi","location":{},"image":"","state":{},"id":"Dny.Dal8770","lastAccessTime":1482392310995,"presence":{}},{"userName":"Priyanka Singh","availability":"online","name":"Priyanka Singh","location":{},"image":"","state":{},"id":"Pri.Sin6191","lastAccessTime":1482392310995,"presence":{}},{"userName":"Nikhilesh1 Ramteke","availability":"offline","name":"Nikhilesh1 Ramteke","location":{},"image":"","state":{},"id":"Nik.Ram6350","lastAccessTime":1482392310995,"presence":{}},{"userName":"Dnyaneshwar Sonawane","availability":"online","name":"Dnyaneshwar Sonawane","location":{},"image":"","state":{},"id":"Dny.Son7436","lastAccessTime":1482392310995,"presence":{}},{"userName":"Mitesh1 Agarwal","availability":"offline","name":"Mitesh1 Agarwal","location":{},"image":"","state":{},"id":"Mit.Aga1174","lastAccessTime":1482392310995,"presence":{}},{"userName":"Rajiv Ranjan","availability":"online","name":"Rajiv Ranjan","location":{},"image":"https://api.miteldev.com:443/miec/client/v1/image/7ed9c74b-531c-11e6-8004-005056859d23","state":{},"id":"Raj.Ran9103","lastAccessTime":1482392310995,"presence":{}},{"userName":"Kundan Deotale","availability":"online","name":"Kundan Deotale","location":{},"image":"","state":{},"id":"Kun.Deo4941","lastAccessTime":1482392310995,"presence":{}},{"userName":"Sanat Budholiya","availability":"online","name":"Sanat Budholiya","location":{},"image":"","state":{},"id":"San.Bud4302","lastAccessTime":1482392310995,"presence":{}},{"userName":"Ahmed Hussain","availability":"online","name":"Ahmed Hussain","location":{},"image":"","state":{},"id":"Ahm.Hus5406","lastAccessTime":1482392310995,"presence":{}},{"userName":"Amit Parkhad","availability":"online","name":"Amit Parkhad","location":{},"image":"","state":{},"id":"Ami.Par7657","lastAccessTime":1482392310995,"presence":{}},{"userName":"Lankesh Kapse","availability":"online","name":"Lankesh Kapse","location":{},"image":"","state":{},"id":"Lan.Kap6032","lastAccessTime":1482392310995,"presence":{}},{"userName":"Pankaj Sule","availability":"online","name":"Pankaj Sule","location":{},"image":"","state":{},"id":"Pan.Sul8433","lastAccessTime":1482392310995,"presence":{}},{"userName":"Shantanu Rohankar","availability":"online","name":"Shantanu Rohankar","location":{},"image":"","state":{},"id":"Sha.Roh3726","lastAccessTime":1482392310995,"presence":{}},{"userName":"Mitesh Agarwal","availability":"online","name":"Mitesh Agarwal","location":{},"image":"","state":{},"id":"Mit.Aga10581","lastAccessTime":1482392310995,"presence":{}},{"userName":"Amit Kale","availability":"online","name":"Amit Kale","location":{},"image":"","state":{},"id":"Ami.Kal2177","lastAccessTime":1482392310995,"presence":{}},{"userName":"Ashish1 Panpaliya1","availability":"online","name":"Ashish1 Panpaliya1","location":{},"image":"","state":{},"id":"Ash.Pan5533","lastAccessTime":1482392310995,"presence":{}},{"userName":"Smitha Harish","availability":"offline","name":"Smitha Harish","location":{},"image":"","state":{},"id":"Smi.Har8127","lastAccessTime":1482392310995,"presence":{}},{"userName":"Subodh Ghulaxe","availability":"online","name":"Subodh Ghulaxe","location":{},"image":"","state":{},"id":"Sub.Ghu3280","lastAccessTime":1482392310995,"presence":{}},{"userName":"Mehjabeen Bari","availability":"offline","name":"Mehjabeen Bari","location":{},"image":"","state":{},"id":"Meh.Bar4466","lastAccessTime":1482392310995,"presence":{}},{"userName":"Ankush Bambole","availability":"online","name":"Ankush Bambole","location":{},"image":"","state":{},"id":"Ank.Bam4695","lastAccessTime":1482392310995,"presence":{}},{"userName":"Suhail Khaki","availability":"online","name":"Suhail Khaki","location":{},"image":"","state":{},"id":"Suh.Kha9178","lastAccessTime":1482392310995,"presence":{}}];
    }
}

module.exports = SidebarList;

