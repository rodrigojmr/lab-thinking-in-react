import React, { Component } from 'react';

import SearchBar from './SearchBar';
import ProductTable from './ProductTable';
import './Table.css';

class FilterableProductTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: this.props.products.data,
      inStock: false,
      searchVal: '',
    };
  }

  handleSearch = (value) => {
    if (!value && !this.state.inStock) {
      this.setState({
        products: this.props.products.data,
        searchVal: value,
      });
    } else {
      let filteredProducts;
      if (!value && this.state.inStock) {
        filteredProducts = this.props.products.data.filter(
          (product) => product.stocked
        );
      } else if (value && this.state.inStock) {
        filteredProducts = this.props.products.data.filter(
          (product) =>
            product.name.toLowerCase().includes(value.toLowerCase()) &&
            product.stocked
        );
      } else if (value) {
        filteredProducts = this.props.products.data.filter((product) =>
          product.name.toLowerCase().includes(value.toLowerCase())
        );
      }
      this.setState({
        products: filteredProducts,
        searchVal: value,
      });
    }
  };

  toggleStock = () => {
    this.setState({
      inStock: !this.state.inStock,
    });
    setTimeout(() => {
      this.handleSearch(this.state.searchVal);
    }, 100);
  };

  render() {
    return (
      <div className="FilterableProductTable">
        <h1>IronStore</h1>
        <SearchBar search={this.handleSearch} toggleStock={this.toggleStock} />
        <ProductTable products={this.state.products} />
      </div>
    );
  }
}

export default FilterableProductTable;
