import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import { getProductsFromCategoryAndQuery } from '../../services/api';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    const { location: { state: { product } } } = props;
    this.state = { product };
  }

  async componentDidMount() {
    const { product } = this.state;
    if (!product) {
      const { match: { params: { productID } } } = this.props;
      const data = await getProductsFromCategoryAndQuery(null, null, productID);
      this.handleProduct(data);
    }
  }

  handleProduct(data) {
    this.setState({ product: { data } });
  }

  cartQuantityRender() {
    const { cartProducts } = this.props;
    const { product: { id } } = this.state;
    const cartProductCheck = () => cartProducts.find((p) => p.id === id);
    const cartQuantity = cartProductCheck()
      ? cartProductCheck().cartQuantity
      : 0;
    return <p>Quantidade no Carrinho: {cartQuantity}</p>;
  }

  render() {
    const { addToCart, subFromCart, removeFromCart } = this.props;
    const {
      product,
      product: { thumbnail, title, price },
    } = this.state;
    return (
      <div>
        <div>
          <Link data-testid="shopping-cart-button" to="/shoppingcart">
            <FontAwesomeIcon icon={faShoppingCart} />
            Carrinho de compras
          </Link>
        </div>
        <div className="product-details-wrapper">
          <h2 data-testid="product-detail-name">{title}</h2>
          <img src={thumbnail} alt="Imagem do produto" />
          {this.cartQuantityRender()}
          <p> Preço: R${price} </p>
          <button type="button" onClick={() => addToCart(product)}>
            Adicionar ao Carrinho
          </button>
          <button type="button" onClick={() => subFromCart(product)}>
            Diminuir do Carrinho
          </button>
          <button type="button" onClick={() => removeFromCart(product)}>
            Remover do Carrinho
          </button>
        </div>
      </div>
    );
  }
}

export default ProductDetails;
