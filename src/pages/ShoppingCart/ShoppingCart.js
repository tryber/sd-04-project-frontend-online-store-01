import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import CartProductsList from './CartProductsList';

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      productQuantity: 1,
      totalToPay: 0,
    };

    this.increaseQuantity = this.increaseQuantity.bind(this);
    this.decreaseQuantity = this.decreaseQuantity.bind(this);
  }

  componentDidMount() {
    const { cartProducts } = this.props;
    console.log(cartProducts);
    const totalsArr = [];
    if (cartProducts.length > 1) {
      cartProducts.map((cartProduct) => totalsArr.push(cartProduct.price));
      totalsArr.reduce((acc, curr) => {
        const total = acc + curr;
        return this.setState({ totalToPay: total });
      });
    }
  }

  increaseQuantity() {
    this.setState((state) => {
      return ({ productQuantity: state.productQuantity + 1 });
    });
  }

  decreaseQuantity() {
    if (this.state.productQuantity > 1) {
      this.setState((state) => {
        return ({ productQuantity: state.productQuantity - 1 });
      });
    }
  }

  render() {
    const { cartProducts } = this.props;
    const { productQuantity, totalToPay } = this.state;
    return (
      <div>
        <div className="shopping-cart-icon ">
          <Link data-testid="shopping-cart-button" to="/shoppingcart">
            <FontAwesomeIcon icon={faShoppingCart} className="faShoppingCart" />
          </Link>
        </div>
        <h1>Carrinho de Compras</h1>
        <CartProductsList
          increaseQuantity={this.increaseQuantity}
          decreaseQuantity={this.decreaseQuantity}
          cartProducts={cartProducts}
          productQuantity={productQuantity}
        />
        <p>Valor Total da Compra: R${totalToPay}</p>
        <Link to="/checkout">
          <button type="button" data-testid="checkout-products">
            Finalizar Compra
          </button>
        </Link>
      </div>
    );
  }
}

export default ShoppingCart;
