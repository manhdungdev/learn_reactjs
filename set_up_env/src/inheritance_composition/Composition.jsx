import React, { Component } from 'react';

class Button extends React.Component {
  handleClick = (e) => {
    console.log(e.target);
  };
  render() {
    const { className = '', children } = this.props;
    return (
      <button className={`btn ${className}`} onClick={this.handleClick}>
        {children} Button
      </button>
    );
  }
}

export default class Composition extends Component {
  render() {
    return (
      <React.Fragment>
        <Button />
        <Button className='btn-yellow'>Yellow</Button>
      </React.Fragment>
    );
  }
}
