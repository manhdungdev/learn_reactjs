import React, { Children } from 'react';
import PropTypes from 'prop-types';
class Layout extends React.Component {
  render() {
    return <div className='layout'>{this.props.children}</div>;
  }
}

// function Layout(props) {
//   return <div className='layout'>{props.children}</div>;
// }

export default Layout;

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)])
};
