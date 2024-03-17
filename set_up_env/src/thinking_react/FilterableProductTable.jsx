import React, { Component } from 'react';
import './FilterTable.css';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

const productList = [
  { category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football' },
  { category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball' },
  { category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball' },
  { category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch' },
  { category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5' },
  { category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7' }
];

const fetchAPI = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productList);
    }, 2000);
  });
};

export class FilterableProductTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      productList: [],
      textSeach: '',
      isStocked: false
    };
  }

  componentDidMount() {
    fetchAPI().then((res) => {
      this.setState({
        productList: res
      });
    });
  }

  handleChange = (event) => {
    const { name } = event.target;
    if (name === 'textSeach') {
      this.setState({
        textSeach: event.target.value
      });
    } else if (name === 'stock') {
      this.setState({
        isStocked: event.target.checked
      });
    }
  };

  render() {
    const { productList, textSeach, isStocked } = this.state;
    return (
      <div className='table'>
        <SearchBar textSeach={textSeach} isStocked={isStocked} handleChange={this.handleChange} />
        <ProductTable productList={productList} textSeach={textSeach} isStocked={isStocked} />
      </div>
    );
  }
}

export default FilterableProductTable;
