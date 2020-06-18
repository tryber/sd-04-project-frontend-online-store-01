import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

class ProductDetails extends React.Component {
  render() {
    return (
      <>
        <div>
          <Link data-testid="shopping-cart-button" to="/shoppingcart">
            <FontAwesomeIcon icon={faShoppingCart} />
            Carrinho de compras
          </Link>
        </div>
        <div className="product-details-wrapper">
          <h2 data-testid="product-datail-name">Nome do produto</h2>
        </div>
      </>
    );
  }
}

export default ProductDetails;
