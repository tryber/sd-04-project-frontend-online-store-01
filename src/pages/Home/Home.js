import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Categories from './Categories';
import ProductList from './ProductList';
import SearchBar from './SearchBar';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userTyped: null,
      search: false,
      products: null,
    }
  }


  handleInputChangeTyped(event) {
    this.setState({
      userTyped: event.target.value,
    })
  }

  toSearch() {
    this.setState({
      search: true,
    })
  }

  searchUserTypedONsearchbar(query){
    api.getProductsFromQuery(query).then((products) =>)
  }

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
