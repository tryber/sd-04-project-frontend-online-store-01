import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import { getProductsFromCategoryAndQuery } from '../../services/api';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      price: '',
      availableQuantity: '',
      thumbnail: '',
    };
  }

  async componentDidMount() {
    const {
      match: {
        params: { productID },
      },
    } = this.props;
    const data = await getProductsFromCategoryAndQuery(null, null, productID);
    this.handleProduct(data);
  }

  handleProduct(data) {
    const {
      title,
      price,
      available_quantity: availableQuantity,
      thumbnail,
    } = data;
    this.setState({
      title,
      price,
      availableQuantity,
      thumbnail,
      data,
    });
  }

  render() {
    const { addToCart, location:{state:{propTitle}} } = this.props;
    const { availableQuantity, thumbnail, title, price, data } = this.state;
    return (
      <div>
        <div>
          <Link data-testid="shopping-cart-button" to="/shoppingcart">
            <FontAwesomeIcon icon={faShoppingCart} />
            Carrinho de compras
          </Link>
        </div>
        <div className="product-details-wrapper">
          <h2 data-testid="product-detail-name">{propTitle}</h2>
          <img src={thumbnail} alt="Imagem do produto" />
          <p>
            Quantidade disponível:
            {availableQuantity}
          </p>
          <p>
            Preço: R$:
            {price}
          </p>
          <button type="button" onClick={() => addToCart(data)}>
            Adicionar ao Carrinho
          </button>
        </div>
      </div>
    );
  }
}

export default ProductDetails;
