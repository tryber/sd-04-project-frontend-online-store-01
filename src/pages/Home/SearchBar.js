import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userTyped: null,
      search: false,
    }
    this.handleInputChangeTyped = this.handleInputChangeTyped.bind(this);
    this.toSearch = this.toSearch.bind(this);
  }

  handleInputChangeTyped(event) {
    this.setState({
      userTyped: event.target.value,
    })
  }

  toSearch() {
    this.setState({
      search: true,
    })
  }

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
