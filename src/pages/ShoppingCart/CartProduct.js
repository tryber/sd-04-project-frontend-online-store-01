import React, { Component } from 'react';

class CartProduct extends Component {
  render() {
    const { cartProduct, productQuantity, increaseQuantity, decreaseQuantity } = this.props;
    const { title, price, thumbnail } = cartProduct;

    return (
      <div>
        <img src={thumbnail} alt={title} />
        <p data-testid="shopping-cart-product-name">{title}</p>
        <button data-testid="product-decrease-quantity" onClick={() => decreaseQuantity()}>
          -
        </button>
        <p data-testid="shopping-cart-product-quantity">{productQuantity}</p>
        <button data-testid="product-increase-quantity" onClick={() => increaseQuantity()}>
          +
        </button>
        <p>{price}</p>
      </div>
    );
  }
}

export default CartProduct;
