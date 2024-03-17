import React, { Component } from 'react';
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';

export class ProductTable extends Component {
  render() {
    const { isStocked, textSeach } = this.props;
    const { productList } = this.props;
    let productCatefory = null;
    const rows = [];
    productList.forEach((product) => {
      if (isStocked && !product.stocked) {
        return;
      }

      if (product.name.toLowerCase().indexOf(textSeach.toLowerCase()) === -1) {
        return;
      }

      if (productCatefory !== product.category) {
        rows.push(<ProductCategoryRow key={product.category} category={product.category} />);
      }
      rows.push(<ProductRow key={product.name} name={product.name} price={product.price} />);
      productCatefory = product.category;
    });
    console.log(rows);
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

export default ProductTable;
