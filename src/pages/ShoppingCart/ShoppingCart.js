import React from 'react';
import EmptyCart from './EmptyCart';
import CartTotals from './CartTotals';

class ShoppingCart extends React.Component {
  render() {
    if (true) {
      return <EmptyCart />;
    }
    return <CartTotals />;
  }
}

export default ShoppingCart;
