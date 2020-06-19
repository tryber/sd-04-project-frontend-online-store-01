import React, { Component } from 'react';

class Product extends Component {
  render() {
    const { product } = this.props;
    const { title, price, thumbnail } = product;
    return (
      <div data-testid="product">
        <h4>title</h4>
        <img src={thumbnail} alt={title} />
        <p>{`Preço: ${price}`}</p>
      </div>
    );
  }
}

export default Product;
