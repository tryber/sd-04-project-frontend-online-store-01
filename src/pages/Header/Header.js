import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faHome } from '@fortawesome/free-solid-svg-icons';

import SearchBar from './SearchBar';

class Header extends React.Component {
  cartSizeHandler() {
    const { cartProducts } = this.props;
    const total = cartProducts.reduce((acc, cur) => acc + cur.cartQuantity, 0);
    return <span data-testid="shopping-cart-size">{total}</span>;
  }

  render() {
    return (
      <div className="search-and-cart">
        <div className="home-icon ">
          <Link to="/">
            <FontAwesomeIcon icon={faHome} className="faHome" />
          </Link>
        </div>
        <SearchBar />
        <div className="shopping-cart-icon ">
          {this.cartSizeHandler()}
          <Link data-testid="shopping-cart-button" to="/shoppingcart">
            <FontAwesomeIcon icon={faShoppingCart} className="faShoppingCart" />
          </Link>
        </div>
      </div>
    );
  }
}

export default Header;
