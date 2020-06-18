import React from 'react';
import * as api from '../../services/api';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { changeHandle, inputValue, getProducts } = this.props;

    return (
      <div>
        <input value={inputValue} data-testid="query-input" onChange={changeHandle} />
        <button data-testid="query-button" onClick={() => getProducts()}>
          PESQUISAR
        </button>
      </div>
    );
  }
}

export default SearchBar;
