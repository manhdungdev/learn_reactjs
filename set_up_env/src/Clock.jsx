import React from 'react';
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: {
        created: new Date().toLocaleTimeString()
      },
      seconds: {
        created: new Date().getSeconds()
      }
    };

    this.date = '14/3/2024';
  }

  getTime = () =>  {
    const newState = {
      ...this.state,
      time: {
        created: new Date().toLocaleTimeString()
      },
      seconds: {
        ...this.state.seconds,
        created: new Date().getSeconds()
      }
    };
    this.setState(newState);
  };

  render() {
    return (
      <div>
        <h1>Hello world</h1>
        <h2>It is {this.state.time.created}</h2>
        <h3>Today is {this.state.seconds.created}</h3>
        <button onClick={this.getTime}>Get time</button>
      </div>
    );
  }
}

export default Clock;
