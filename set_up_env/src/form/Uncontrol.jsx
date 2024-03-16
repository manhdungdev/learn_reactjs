import React, { Component } from 'react';

export class Uncontrol extends Component {
  constructor(props) {
    super(props);
    this.input = React.createRef();
    this.state = {
      selectedFile: null
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('myFile', this.state.selectedFile, this.state.selectedFile.name);
    console.log(this.state.selectedFile);

    // axios.post('url/upload', formData);
  };

  handleFileChange = (e) => {
    this.setState({
      selectedFile: e.target.files[0]
    });
  };

  render() {
    return (
      <div>
        <form action='' onSubmit={this.handleSubmit}>
          <label>
            Ten
            <input type='text' defaultValue='DungHm' ref={this.input} onChange={this.handleInputChange} />
          </label>
          <input type='file' name='avtar' onChange={this.handleFileChange} />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default Uncontrol;
