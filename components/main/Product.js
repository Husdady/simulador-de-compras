import React, { Component } from 'react';
import Icon from '../assets/Icon';
import './css/product.css';

class Product extends Component{
  render(){
    const { id, imagen, modelo, precio, stock } = this.props;
    return (
      <div className="product" key={id}>
        <img loading="lazy" src={`${process.env.PUBLIC_URL}/${imagen}`} alt={modelo} title={modelo} />
        <h3>{modelo}</h3>
        <h4>$/. {precio}</h4>

        <div id="quantity">
          <button>
            <Icon iconName="fas fa-plus" iconStyle={{padding: "0"}}/>
          </button>
          
          <div id="count">{stock}</div>
          
          <button>
            <Icon iconName="fas fa-minus" iconStyle={{padding: "0"}}/>
          </button>
        </div>

        <button className="add-to-cart"><Icon iconName="fas fa-cart-plus" iconTitle="Añade un producto al Carrito" iconStyle={{padding: "0"}}/>&nbsp;&nbsp;Añadir al carrito</button>
      </div>
    )
  }
}

export default Product;