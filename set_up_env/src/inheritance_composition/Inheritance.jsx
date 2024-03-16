import React, { Component } from 'react';

class Button extends React.Component {
  handleClick = (e) => {
    console.log(e.target);
  };
  render() {
    return (
      <button className='btn' onClick={this.handleClick}>
        Button
      </button>
    );
  }
}

class YellowButton extends Button {
  render() {
    return (
      <button className='btn btn-yellow' onClick={this.handleClick}>
        Yellow Button
      </button>
    );
  }
}

export default class Inheritance extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        Inheritance
        <Button />
        <YellowButton />
      </div>
    );
  }
}
