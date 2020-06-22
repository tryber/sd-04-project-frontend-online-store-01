import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faHome } from '@fortawesome/free-solid-svg-icons';

import SearchBar from './SearchBar';

function Header(props) {
  const { inputValue, changeHandle, getProducts } = props;
  return (
    <div className="search-and-cart">
      <div className="home-icon ">
        <Link to="/">
          <FontAwesomeIcon icon={faHome} className="faHome" />
        </Link>
      </div>
      <SearchBar
        inputValue={inputValue}
        changeHandle={changeHandle}
        getProducts={getProducts}
      />
      <div className="shopping-cart-icon ">
        <Link data-testid="shopping-cart-button" to="/shoppingcart">
          <FontAwesomeIcon icon={faShoppingCart} className="faShoppingCart" />
        </Link>
      </div>
    </div>
  );
}

export default Header;
