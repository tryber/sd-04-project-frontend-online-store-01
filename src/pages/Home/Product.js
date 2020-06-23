import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Product extends Component {
  render() {
    const { product, addToCart } = this.props;
    const { title, price, thumbnail, shipping: { free_shipping: freeShipping } } = product;
    return (
      <div data-testid="product">
        <h4>{title}</h4>
        <img src={thumbnail} alt={title} />
        {freeShipping && <div data-testid="free-shipping">Frete Grátis</div>}
        <p>{`Preço: ${price}`}</p>
        <button data-testid="product-add-to-cart" onClick={() => addToCart(product)} type="button">
          Adicionar ao Carrinho
        </button>
        <Link
          data-testid="product-detail-link"
          to={{
            pathname: `/product/${product.id}`,
            state: { product },
          }}
        >
          Ver Mais
        </Link>
      </div>
    );
  }
}

export default Product;
