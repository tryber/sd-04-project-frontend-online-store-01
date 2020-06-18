import React from 'react';

class SearchBar extends React.Component {


  render() {
    return (
      <div>
        <input
        data-testid="query-input"
        type="text"
        onChange={this.handleInputChangeTyped}
        placeholder="Faça sua pesquisa"
        />
        <button
          data-testid="query-button"
          type="submit"
          onClick={this.toSearch}
        >
          Pesquisar
        </button>
      </div>
    );
  }
}

export default SearchBar;
