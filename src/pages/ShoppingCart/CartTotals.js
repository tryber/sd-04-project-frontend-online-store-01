import React from 'react';
import { Link } from 'react-router-dom';

function CartTotals() {
  return (
    <Link to="/checkout">
      <button type="button" data-testid="checkout-products">Finalizar Compra</button>
    </Link>
  );
}

export default CartTotals;
