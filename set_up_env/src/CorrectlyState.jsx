import React, { Component } from 'react';

const fetchAPI = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([1, 2, 3, 4, 5]);
    }, 3000);
  });
};

export class CorrectlyState extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      comments: []
    };
  }

  componentDidMount() {
    console.log('componentDidMount');
    this.setState((prevState) => ({
      count: prevState.count + 5
    }));
    console.log(this.state.count);
    console.log('hello');
    this.setState((prevState) => ({
      count: prevState.count + 1
    }));

    fetchAPI().then((res) => {
      this.setState((prevState) => ({
        ...prevState,
        comments: res
      }));
    });
  }

  render() {
    console.log(this.state);
    return <div> CorrectlyState. Count: {this.state.count}</div>;
  }
}

export default CorrectlyState;
