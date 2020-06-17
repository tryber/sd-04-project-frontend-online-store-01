
import React from 'react';
import logo from './logo.svg';
import './App.css';
import * as api from './services/api';
import ProductList from './pages/Home/ProductList';

function App() {
  api.getCategories().then(categories => { console.log(categories) });
  return (
    <div className="App">
    <ProductList />
    </div>
  );
}

export default App;
