import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.increment = this.increment.bind(this);
  }

  increment() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <button onClick={this.increment}>
        Click me! Number of clicks: {this.state.count}
      </button>
    );
  }
}

export default Counter;