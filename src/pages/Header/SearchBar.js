import React from 'react';
import { Link } from 'react-router-dom';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { inputValue: '' };
    this.handleChange = this.handleChange.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  handleChange(e) {
    this.setState({ inputValue: e.target.value });
  }

  submitHandler() {
    this.setState({ inputValue: '' });
  }

  render() {
    const { inputValue } = this.state;
    return (
      <div>
        <form>
          <input
            value={inputValue}
            data-testid="query-input"
            onChange={this.handleChange}
          />
          <Link
            to={{
              pathname: '/',
              state: { inputValue },
            }}
          >
            <button
              onClick={this.submitHandler}
              type="submit"
              data-testid="query-button"
            >
              PESQUISAR
            </button>
          </Link>
        </form>
      </div>
    );
  }
}

export default SearchBar;
