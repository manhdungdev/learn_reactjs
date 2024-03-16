import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Boiling extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.celcius >= 100 ? 'The water would boil' : 'The water would not boil'}</h2>
      </div>
    );
  }
}

Boiling.propTypes = {
  celcius: PropTypes.number.isRequired
}

export default Boiling;
