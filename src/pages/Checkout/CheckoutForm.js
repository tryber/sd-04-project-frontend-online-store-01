import React from 'react';
import { Link } from 'react-router-dom';


class CheckoutForm extends React.Component {
  render() {
    const { changeInput } = this.props;
    return (
      <form>
        <div>
          <h3>DIGITE SEUS DADOS PARA FINALIZAR A COMPRA</h3>
          <input
          placeholder="Nome Completp"
          data-testid="checkout-fullname"
          type="text"
          onChange={changeInput}
          />
          <input placeholder="Email" data-testid="checkout-email" type="email" />
          <input placeholder="CPF" data-testid="checkout-cpf" type="text" />
          <input placeholder="Tel" data-testid="checkout-phone" type="text" />
          <input placeholder="CEP" data-testid="checkout-address" type="text" />
          <input placeholder="complemento" type="text" />
        </div>
      </form>
    )
  }
}

export default CheckoutForm;
