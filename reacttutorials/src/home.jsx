var React = require('react');

class Home extends React.Component {
      render() {
            return (
                  <div className="wrapper">
                        <form className="form-signin">
                              <div >
                                    <h2 className="form-signin-heading">FA Messenger</h2>
                                    <input type="text" className="form-control" name="username" placeholder="Email Address" required />
                                    <input type="password" className="form-control" name="password" required />
                                    <button className="btn btn-lg btn-primary btn-block" type="submit">Login</button>
                              </div>
                        </form>
                  </div>
            );
      }
}

module.exports = Home;