import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import ShoppingCart from './pages/ShoppingCart/ShoppingCart';
import Checkout from './pages/Checkout/Checkout';
import ProductDetails from './pages/ProductDetails/ProductDetails';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cartProducts: [] };
    this.addToCartHandler = this.addToCartHandler.bind(this);
  }

  addToCartHandler(newProduct) {
    this.setState((state) => ({
      cartProducts: [...state.cartProducts, newProduct],
    }));
  }

  render() {
    const { cartProducts } = this.state;
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route
              path="/product/:produtctID"
              render={() => (
                <ProductDetails addToCart={this.addToCartHandler} />
              )}
            />
            <Route
              path="/checkout"
              render={() => (
                <Checkout
                  addToCart={this.addToCartHandler}
                  cartProducts={cartProducts}
                />
              )}
            />
            <Route
              path="/shoppingcart"
              render={() => (
                <ShoppingCart
                  addToCart={this.addToCartHandler}
                  cartProducts={cartProducts}
                />
              )}
            />
            <Route
              path="/"
              render={() => (
                <Home
                  addToCart={this.addToCartHandler}
                  cartProducts={cartProducts}
                />
              )}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
