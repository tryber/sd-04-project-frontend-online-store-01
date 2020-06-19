import React, { Component } from 'react';

class CartProduct extends Component {
  constructor(props) {
    super(props);

    this.state = {
      productQuantity: 1,
    };
  }

  increaseQuantity() {
    this.setState((state) => ({ productQuantity: state.productQuantity + 1 }));
  }

  decreaseQuantity() {
    if (this.state.productQuantity > 1) {
      this.setState((state) => ({ productQuantity: state.productQuantity - 1 }));
    }
  }

  render() {
    const { productQuantity } = this.state;
    const { cartProduct } = this.props;
    const { title, price, thumbnail } = cartProduct;

    return (
      <div>
        <img src={thumbnail} alt={title} />
        <p data-testid="shopping-cart-product-name">{title}</p>
        <button data-testid="product-decrease-quantity" onClick={() => this.decreaseQuantity()}>
          -
        </button>
        <p data-testid="shopping-cart-product-quantity">{productQuantity}</p>
        <button data-testid="product-increase-quantity" onClick={() => this.increaseQuantity()}>
          +
        </button>
        <p>{price * productQuantity}</p>
      </div>
    );
  }
}

export default CartProduct;
