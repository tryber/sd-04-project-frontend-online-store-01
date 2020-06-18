import React from 'react';

import EmptyCart from './EmptyCart';
import CartTotals from './CartTotals';

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cartProducts: [],
      isEmpty: true,
    };
  }

  render() {
    if (this.state.isEmpty) {
      return (
        <div>
          <EmptyCart />
        </div>
      );
    }

    return <CartTotals />;
  }
}

export default ShoppingCart;
