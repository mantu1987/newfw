var React = require('react');

class Stuff extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: props.location.state
    }
  }
  componentWillReceiveProps(newprops) {
    this.setState({
      mode: newprops.location.state
    });
  }
  render() {
    return (
      <div>
        I am detail Custom Component
          </div>
    );
  }
}

module.exports = Stuff;