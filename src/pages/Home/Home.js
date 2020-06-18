import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Categories from './Categories';
import ProductList from './ProductList';
import SearchBar from './SearchBar';

class Home extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <Link data-testid="shopping-cart-button" to="/shoppingcart">
          Carrinho de compras
        </Link>
        <Categories />
        <ProductList />
      </div>
    );
  }
}

export default Home;
