import React, { Component } from 'react';

import EmptyCart from './EmptyCart';
import CartProduct from './CartProduct';

class CartProductsList extends Component {
  render() {
    const { cartProducts, productQuantity, increaseQuantity, decreaseQuantity } = this.props;

    if (cartProducts.length < 1) {
      return (
        <div>
          <EmptyCart />
        </div>
      );
    }

    return (
      <div>
        {cartProducts.map((cartProduct) => (
          <CartProduct
            cartProduct={cartProduct}
            productQuantity={productQuantity}
            increaseQuantity={increaseQuantity}
            decreaseQuantity={decreaseQuantity}
          />
        ))}
      </div>
    );
  }
}

export default CartProductsList;
