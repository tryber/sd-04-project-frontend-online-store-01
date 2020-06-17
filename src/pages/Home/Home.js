import React, { Component } from 'react';

import Categories from './Categories';
import ProductList from './ProductList';
import SearchBar from './SearchBar';

class Home extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <Categories />
        <ProductList />
      </div>
    );
  }
}

export default Home;
