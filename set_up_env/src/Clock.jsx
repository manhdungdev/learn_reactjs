import React from 'react';

const lists = ['BMW', 'Mercedes', 'Porsche'];

const fetchAPI = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(lists);
    }, 2000);
  });
};
class Clock extends React.Component {
  constructor(props) {
    super(props);
    console.log('constructor');
    this.state = {
      time: {
        created: new Date().toLocaleTimeString()
      },
      seconds: {
        created: new Date().getSeconds()
      },
      lists: [],
      darkMode: false
    };

    this.date = '14/3/2024';
  }

  toggleDarkMode = () => {
    this.setState((prevState) => ({
      ...prevState,
      darkMode: !prevState.darkMode
    }));
  };

  componentDidMount() {
    console.log('componentDidMount');
    const seconds = document.getElementById('seconds');
    fetchAPI().then((res) => this.setState((prevState) => ({ ...prevState, lists: res })));
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  componentWillUnmount(){
    console.log('componentWillUnmount');
  }

  getTime = () => {
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
    console.log('render');
    return (
      <div>
        <h1>Hello world</h1>
        <h2>It is {this.state.time.created}</h2>
        <h3 id='seconds'>Today is {this.state.seconds.created}</h3>
        <h3>List: {this.state.lists}</h3>
        <button onClick={this.getTime}>Get time</button>
        <button onClick={this.toggleDarkMode}>Toggle</button>
        {this.state.darkMode && <input value={this.state.darkMode} type='text' />}
      </div>
    );
  }
}

export default Clock;
