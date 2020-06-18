import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import ProductList from './pages/Home/ProductList';
import SearchBar from './pages/Home/SearchBar';
import Home from './pages/Home/Home';
import ShoppingCart from './pages/ShoppingCart/ShoppingCart';
import Checkout from './pages/Checkout/Checkout';
import ProductDetails from './pages/ProductDetails/ProductDetails';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/product/:produtctID" component={ProductDetails} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/shoppingcart" component={ShoppingCart} />
          <Route path="/" component={Home} />
          <ProductList />
          <SearchBar />
        </Switch>
      </Router>
    </div>
  );
}

export default App;