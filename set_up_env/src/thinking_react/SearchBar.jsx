import React, { Component } from 'react';

export class SearchBar extends Component {
  render() {
    const { textSeach, isStocked, handleChange } = this.props;
    return (
      <form action=''>
        <input type='text' name='textSeach' value={textSeach} onChange={handleChange} />
        <div>
          <input name='stock' type='checkbox' checked={isStocked} onChange={handleChange} />
          Only show products in stocks
        </div>
      </form>
    );
  }
}

export default SearchBar;
