import React from 'react';


class Product extends React.Component {
  render(){
    return (
      <div>
        {LisTproducts.map((products) => (<ProductList  key={products.id} products={products}/>))}
      </div>
    )
  }
}