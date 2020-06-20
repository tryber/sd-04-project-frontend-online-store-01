import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import CartProductsList from './CartProductsList';

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);

    this.state = { totalToPay: 0 };
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

  render() {
    const { cartProducts } = this.props;
    const { totalToPay } = this.state;
    return (
      <div>
        <div className="shopping-cart-icon ">
          <Link data-testid="shopping-cart-button" to="/shoppingcart">
            <FontAwesomeIcon icon={faShoppingCart} className="faShoppingCart" />
          </Link>
        </div>
        <h1>Carrinho de Compras</h1>
        <CartProductsList cartProducts={cartProducts} />
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
