import React from 'react';

class LogInButton extends React.Component {
  render() {
    return <button onClick={this.props.handleClick}>Log in</button>;
  }
}

class LogOutButton extends React.Component {
  render() {
    return <button onClick={this.props.handleClick}>Log out</button>;
  }
}

class LoginController extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    const { isLogined } = this.props;
    this.state = {
      isLogined
    };
  }

  handleClick = () => {
    this.setState((prevState) => ({
      isLogined: !prevState.isLogined
    }));
  };

  render() {
    const { isLogined } = this.state;
    const { isHidden } = this.props;
    console.log(isLogined, isHidden);
    if (isHidden) {
      return null;
    }

    if (isLogined) {
    }
    return (
      <div className='login'>
        {isLogined ? <LogOutButton handleClick={this.handleClick} /> : <LogInButton handleClick={this.handleClick} />}
      </div>
    );
  }
}

export default LoginController;
