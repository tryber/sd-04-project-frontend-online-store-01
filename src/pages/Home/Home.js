import React, { Component } from 'react';

import './Home.css';

import * as api from '../../services/api';

import Categories from './Categories';
import ProductList from './ProductList';

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

  componentDidMount() {
    if (this.props.location.state) {
      this.apiRequestFunc();
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { category } = this.state;
    if (prevProps !== this.props && this.props.location.state) {
      this.apiRequestFunc();
    }
    if (prevState.category !== category) {
      api
        .getProductsFromCategoryAndQuery(null, category)
        .then((categoryProducts) => {
          this.setState({ products: categoryProducts.results });
        });
    }
  }

  async getProducts() {
    const { inputValue } = this.state;
    const products = await api.getProductsFromCategoryAndQuery(inputValue);
    console.log(products);
    this.setState({ products: products.results });
  }

  apiRequestFunc() {
    const { category } = this.state;
    const { location: { state: { inputValue } } } = this.props;
    api
      .getProductsFromCategoryAndQuery(inputValue, category)
      .then((categoryProducts) => {
        this.setState({ products: categoryProducts.results });
      });
  }

  changeCategory(event) {
    this.setState({ category: event.target.value });
  }

  changeHandle(event) {
    this.setState({ inputValue: event.target.value });
  }

  render() {
    const { addToCart } = this.props;
    const { products } = this.state;
    return (
      <div>
        <div className="main-container">
          <div className="categories">
            <Categories changeCategory={this.changeCategory} />
          </div>
          <div className="products-list">
            <ProductList products={products} addToCart={addToCart} />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
