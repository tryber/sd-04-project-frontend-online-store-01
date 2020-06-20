import React from 'react';

function Product(props) {
  const { title, productQuantity } = props;
  return (
    <div>
      <h2 data-testid="shopping-cart-product-name">{title}</h2>
      <p data-testid="shopping-cart-product-quantity">{productQuantity}</p>
    </div>
  );
}

export default Product;
