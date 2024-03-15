import React, { Component } from 'react';

export class ProductItem extends Component {
  render() {
    const {product} = this.props;
    return (
      <div className='product-item' >
        <input type='text' />
        <span>
          {product.name} - {product.avatar}
        </span>
      </div>
    );
  }
}

export default ProductItem;
