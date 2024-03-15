import React from 'react';
class BareButton extends React.Component {
  constructor(props) {
    super(props);
    // this.handleClick = this.handleClick.bind(this);
  }

  //   handleClick(event) {
  //     console.log(event);
  //   }

  //   handleClick = (value) => {
  //     console.log('value =====>', value);
  //     return () => {
  //       console.log(value);
  //     };
  //   };

  // handleClick = (value) => () => {
  //   console.log(value);
  // };

  handleClick = (event, value) => {
    console.log(event);
    console.log(value);
  };
  render() {
    return (
      <div>
        <button
          onClick={(event) => {
            this.handleClick(event, 'Add');
          }}
        >
          Add
        </button>
        <button
          onClick={(event) => {
            this.handleClick(event, 'Edit');
          }}
        >
          Edit
        </button>
        <button
          onClick={(event) => {
            this.handleClick(event, 'Delete');
          }}
        >
          Delete
        </button>
      </div>
    );
  }
}

export default BareButton;
