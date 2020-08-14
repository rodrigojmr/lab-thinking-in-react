import React, { Component } from 'react';
import ProductRow from './ProductRow';

class ProductTable extends Component {
  generateId = () => Math.random().toString();
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {this.props.products.map((product) => {
            return (
              <ProductRow
                key={this.generateId()}
                name={product.name}
                price={product.price}
                stocked={product.stocked}
              />
            );
          })}
        </tbody>
      </table>
    );
  }
}

export default ProductTable;
