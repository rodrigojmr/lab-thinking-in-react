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
      searchQuery: '',
    };
  }

  setSearchVal = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  toggleStock = () => {
    this.setState({
      inStock: !this.state.inStock,
    });
  };

  filterList = () => {
    const searchTerm = this.state.searchQuery.toLowerCase();
    return this.state.products.filter((item) => {
      if (this.state.inStock) {
        return item.name.toLowerCase().includes(searchTerm) && item.stocked;
      } else {
        return item.name.toLowerCase().includes(searchTerm);
      }
    });
  };

  render() {
    return (
      <div className="FilterableProductTable">
        <h1>IronStore</h1>
        <SearchBar
          searchVal={this.state.searchQuery}
          search={this.setSearchVal}
          toggleStock={this.toggleStock}
        />
        <ProductTable products={this.filterList()} />
      </div>
    );
  }
}

export default FilterableProductTable;
