import React, { Component } from 'react';
import * as api from '../../services/api';

class Categories extends Component {
  constructor(props) {
    super(props);

    this.state = { categories: [] };
  }

  componentDidMount() {
    api.getCategories().then((categories) => this.setState({ categories }));
  }

  render() {
    const { categories } = this.state;

    return (
      <div className="categories-container">
        <p className="categories-title">Categorias:</p>
        <div className="categories-list">
          {categories.map((category) => (
            <p className="category" data-testid="category">
              {category}
            </p>
          ))}
        </div>
      </div>
    );
  }
}

export default Categories;
