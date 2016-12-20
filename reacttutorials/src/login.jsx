var React = require('react');
var ReactRouter = require('react-router');
var browserHistory = ReactRouter.browserHistory;
class Login extends React.Component {
      constructor() {
            super();
            this.state = { username: "", userpass: "", isValidLogin: false };
      }
      render() {
            return (
                  <div className="wrapper">
                        <form className="form-signin" onSubmit={this.handleLoginSubmit.bind(this)}>
                              <div >
                                    <h2 className="form-signin-heading">FA Messenger</h2>
                                    <input type="text" className="form-control" name="username" placeholder="Email Address" required onChange={this.handleNameChange.bind(this)} />
                                    <input type="password" className="form-control" name="password" required onChange={this.handlePasswordChange.bind(this)} />
                                    <button className="btn btn-lg btn-primary btn-block" type="submit">Login</button>
                                    {this.state.isValidLogin}
                              </div>
                        </form>
                  </div>
            );
      }
      handleLoginSubmit(e) {
            console.log(this.state);
            if (this.state.username === "mantu.nigam" && this.state.userpass === "test") {
                  this.setState({
                        isValidLogin: true
                  });
                  this.props.history.push('/contact');
            }
            else {
                  this.setState({
                        isValidLogin: false
                  });
            }
            e.preventDefault();
      }
      handlePasswordChange(e) {
            this.setState({
                  userpass: e.target.value
            });
      }
      handleNameChange(e) {
            this.setState({
                  username: e.target.value
            });
      }
}

module.exports = Login;