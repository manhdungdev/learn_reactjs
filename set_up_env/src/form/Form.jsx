import React, { Component } from 'react';

export class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: '',
      address: '',
      fruits: 'orange',
      choice: false
    };
  }

  handleChange = (event) => {
    const { target } = event;
    const data = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [target.name]: data
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <form action='' onSubmit={this.handleSubmit}>
          <textarea
            value={this.state.address}
            name='address'
            id=''
            cols='30'
            rows='10'
            onChange={this.handleChange}
          ></textarea>

          <label>
            Name
            <input type='text' name='input' value={this.state.input} onChange={this.handleChange} />
          </label>

          <input type='checkbox' name='choice' checked={this.state.choice} onChange={this.handleChange} />

          <select name='fruits' value={this.state.fruits} onChange={this.handleChange}>
            <option value='grapefruit'>Grapefruit</option>
            <option value='orange'>Orange</option>
            <option value='apple'>Apple</option>
            <option value='strawberry'>Strawberry</option>
          </select>

          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;
