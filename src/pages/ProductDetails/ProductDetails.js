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
    this.setState({ product: data });
  }

  render() {
    const { addToCart } = this.props;
    const {
      product: {
        available_quantity: availableQuantity,
        thumbnail,
        title,
        price,
        data,
      },
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
          <p> Quantidade disponível: {availableQuantity}</p>
          <p> Preço: R${price} </p>
          <button type="button" onClick={() => addToCart(data)}>
            Adicionar ao Carrinho
          </button>
        </div>
      </div>
    );
  }
}

export default ProductDetails;
