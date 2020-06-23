import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import ShoppingCart from './pages/ShoppingCart/ShoppingCart';
import Checkout from './pages/Checkout/Checkout';
import ProductDetails from './pages/ProductDetails/ProductDetails';
import Header from './pages/Header/Header';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cartProducts: [] };
    this.addToCartHandler = this.addToCartHandler.bind(this);
    this.subFromCartHandler = this.subFromCartHandler.bind(this);
    this.removeFromCart = this.removeFromCart.bind(this);
  }

  componentDidMount() {
    if (localStorage.products) {
      this.updateWithStorage();
    }
  }

  componentDidUpdate() {
    const { cartProducts } = this.state;
    localStorage.setItem('products', JSON.stringify(cartProducts));
  }

  updateWithStorage() {
    const storageItems = localStorage.getItem('products');
    this.setState({ cartProducts: JSON.parse(storageItems) });
  }

  addToCartHandler(newProduct) {
    this.setState((state) => ({
      cartProducts: state.cartProducts.some(
        (product) => product.id === newProduct.id,
      )
        ? state.cartProducts.map((product) => {
          if (product.id === newProduct.id) {
            const {
              available_quantity: availableQuantity,
              cartQuantity,
            } = product;
            return {
              ...product,
              cartQuantity:
                availableQuantity <= cartQuantity
                  ? availableQuantity
                  : product.cartQuantity + 1,
            };
          }
          return product;
        })
        : [...state.cartProducts, { ...newProduct, cartQuantity: 1 }],
    }));
  }

  subFromCartHandler(subProduct) {
    this.setState((state) => ({
      cartProducts: state.cartProducts.some(
        (product) => product.id === subProduct.id,
      )
        ? state.cartProducts.map((product) => {
          if (product.id === subProduct.id) {
            if (product.cartQuantity > 0) {
              return {
                ...product,
                cartQuantity: product.cartQuantity - 1,
              };
            }
          }
          return product;
        })
        : [...state.cartProducts, { ...subProduct, cartQuantity: 0 }],
    }));
  }

  removeFromCart(rmvProduct) {
    this.setState((state) => {
      const newCartProducts = [...state.cartProducts];
      const index = newCartProducts.findIndex(
        (product) => product.id === rmvProduct.id,
      );
      newCartProducts.splice(index, 1);
      return { cartProducts: newCartProducts };
    });
  }

  routeMaker(element, path) {
    const ElementName = element;
    const { cartProducts } = this.state;
    return (
      <Route
        path={path}
        render={(props) => (
          <ElementName
            {...props}
            addToCart={this.addToCartHandler}
            subFromCart={this.subFromCartHandler}
            removeFromCart={this.removeFromCart}
            cartProducts={cartProducts}
          />
        )}
      />
    );
  }

  render() {
    const { cartProducts } = this.state;
    return (
      <div className="App">
        <Router>
          <Header cartProducts={cartProducts} />
          <Switch>
            {this.routeMaker(ProductDetails, '/product/:productID')}
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
