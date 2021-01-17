import React, { Component } from 'react';
import Product from './Product';
import Filters from './Filters';

class App extends Component{
  render(){
    return(
      <div className="container">
        <aside className="edit-products">
          <Filters />
        </aside>
        <section className="products">
          <Product />
        </section>
      </div>
    )
  }
}

export default App;