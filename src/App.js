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
    this.setState((state) => ({ cartProducts: [...state.cartProducts, newProduct] }));
  }

  routeMaker(element, path) {
    const ElementName = element;
    const { cartProducts } = this.state;
    return (
      <Route
        path={path}
        render={() => <ElementName addToCart={this.addToCartHandler} cartProducts={cartProducts} />}
      />
    );
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            {this.routeMaker(ProductDetails, '/product/:produtctID')}
            {this.routeMaker(Checkout, '/checkout')}
            {this.routeMaker(ShoppingCart, '/shoppingCart')}
            {this.routeMaker(Home)}
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
