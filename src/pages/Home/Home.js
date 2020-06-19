import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Home.css';

import * as api from '../../services/api';

import Categories from './Categories';
import ProductList from './ProductList';
import SearchBar from './SearchBar';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: '',
      products: [],
      category: '',
    };

    this.changeHandle = this.changeHandle.bind(this);
    this.getProducts = this.getProducts.bind(this);
    this.changeCategory = this.changeCategory.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.category !== this.state.category) {
      api
        .getProductsFromCategories(this.state.category)
        .then((categoryProducts) => {
          this.setState({ products: categoryProducts.results });
        });
    }
  }

  getProducts() {
    const { inputValue } = this.state;
    api.getProductsFromQuery(inputValue)
      .then((products) => this.setState({ products: products.results }));
  }

  changeCategory(event) {
    this.setState({ category: event.target.value });
  }

  changeHandle(event) {
    this.setState({ inputValue: event.target.value });
  }

  render() {
    const { inputValue, products } = this.state;
    return (
      <div>
        <div className="search-and-cart">
          <SearchBar
            inputValue={inputValue}
            changeHandle={this.changeHandle}
            getProducts={this.getProducts}
          />
          <div className="shopping-cart-icon ">
            <Link data-testid="shopping-cart-button" to="/shoppingcart">
              <FontAwesomeIcon
                icon={faShoppingCart}
                className="faShoppingCart"
              />
            </Link>
          </div>
        </div>
        <div className="main-container">
          <div className="categories">
            <Categories changeCategory={this.changeCategory} />
          </div>
          <div className="products-list">
            <ProductList products={products} />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
