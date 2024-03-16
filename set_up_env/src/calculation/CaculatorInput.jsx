import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Calculator from './Calculator';

export class CaculatorInput extends Component {
  handleChange = (event) => {
    this.props.handleTemperatureChange(event.target.value);
  };

  render() {
    const { title, temperature } = this.props;
    return (
      <div>
        <fieldset>
          <legend>Enter temperature in {title}</legend>
          <input type='text' value={temperature} onChange={this.handleChange} />
        </fieldset>
      </div>
    );
  }
}

CaculatorInput.propTypes = {
  title: PropTypes.string.isRequired,
  temperature: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  handleTemperatureChange: PropTypes.func.isRequired
};

export default CaculatorInput;
