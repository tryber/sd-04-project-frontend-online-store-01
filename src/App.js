import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import ProductList from './pages/Home/ProductList';
import Home from './pages/Home/Home';
import ShoppingCart from './pages/ShoppingCart/ShoppingCart';
import Checkout from './pages/Checkout/Checkout';
import ProductDetails from './pages/ProductDetails/ProductDetails';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cartProducts: [],
    };
    this.addToCartHandler = this.addToCartHandler.bind(this);
  }

  addToCartHandler(newProduct) {
    this.setState((state) => ({
      cartProducts: [...state.cartProducts, newProduct],
    }));
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route
              path="/product/:produtctID"
              render={(props) => (
                <ProductDetails {...props} addToCart={this.addToCartHandler} />
              )}
            />
            <Route
              path="/checkout"
              render={(props) => (
                <Checkout
                  {...props}
                  addToCart={this.addToCartHandler}
                  cartProducts={this.state.cartProducts}
                />
              )}
            />
            <Route
              path="/shoppingcart"
              render={(props) => (
                <ShoppingCart
                  {...props}
                  addToCart={this.addToCartHandler}
                  cartProducts={this.state.cartProducts}
                />
              )}
            />
            <Route
              path="/"
              render={(props) => (
                <Home
                  {...props}
                  addToCart={this.addToCartHandler}
                  cartProducts={this.state.cartProducts}
                />
              )}
            />
            <ProductList />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
