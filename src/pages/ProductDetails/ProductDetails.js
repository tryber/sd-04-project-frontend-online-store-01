import React from 'react';
import { Link } from 'react-router-dom';

class ProductDetails extends React.Component {
  render() {
    return (
      <Link data-testid="shopping-cart-button" to="/shoppingcart">
        Carrinho de compras
      </Link>
    );
  }
}

export default ProductDetails;
