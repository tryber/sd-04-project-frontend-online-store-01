import React from 'react';
// import { Link } from 'react-router-dom';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

// import { getProduct } from '../../services/api';
// import { checkPropTypes } from 'prop-types';

class ProductDetails extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     id: '',
  //     title: '',
  //     price: '',
  //     available_quantity: '',
  //     thumbnail: '',
  //   };
  //   this.addToCartHandler = this.addToCartHandler.bind(this);
  // }
  // async componentDidMount() {
  //   const data = await getProduct(this.props.match.params.produtctID);
  //   this.handleProduct(data);
  // }
  // handleProduct(data) {
  //   console.log(data);
  //   const { id, title, price, available_quantity, thumbnail } = data;
  //   this.setState({
  //     id,
  //     title,
  //     price,
  //     available_quantity,
  //     thumbnail,
  //   });
  // }
  // addToCartHandler() {}
  // render() {
  //   return (
  //     <div>
  //       <div>
  //         <Link data-testid="shopping-cart-button" to="/shoppingcart">
  //           <FontAwesomeIcon icon={faShoppingCart} />
  //           Carrinho de compras
  //         </Link>
  //       </div>
  //       <div className="product-details-wrapper">
  //         <h2 data-testid="product-datail-name">{this.state.title}</h2>
  //         <img src={this.state.thumbnail} />
  //         <p>Quantidade disponível: {this.state.available_quantity}</p>
  //         <p>Preço: R$: {this.state.price}</p>
  //         <button onClick={this.addToCartHandler}>Adicionar ao Carrinho</button>
  //       </div>
  //     </div>
  //   );
  // }
}

export default ProductDetails;
