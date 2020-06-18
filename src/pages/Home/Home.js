import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Home.css';

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
        <div className="search-and-cart">
          <SearchBar />
          <div className="shopping-cart-icon ">
            <Link data-testid="shopping-cart-button" to="/shoppingcart">
              <FontAwesomeIcon icon={faShoppingCart} className="faShoppingCart" />
            </Link>
          </div>
        </div>
        <div className="main-container">
          <div className="categories">
            <Categories />
          </div>
          <div className="products-list">
            <ProductList />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
