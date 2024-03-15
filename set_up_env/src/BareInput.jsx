import React from 'react';
import PropTypes from 'prop-types';

class BareInput extends React.Component {
  render() {
    const { type: typeInput, ...rest } = this.props;
    return <input {...rest} type='text' />;
  }
}

// function BareInput(props) {
//   return <input {...props} autoFocus={false} />;
// }

export default BareInput;

BareInput.propTypes = {
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
  autoFocus: PropTypes.bool,
  value: PropTypes.number
};
