import React, { Component } from 'react';
import Icon from '../assets/Icon';
import './css/product.css';
import celulares from '../../json/celulares';

class Product extends Component{
  constructor(){
    super();
    this.state = {
      celulares
    }
  }
  render(){

    const product = this.state.celulares.map((el) =>{
      return (
        <div className="product" key={el.id}>
          <img src={`${process.env.PUBLIC_URL}/${el.imagen}`} alt={el.modelo} title={el.modelo} />
          <h3>{el.modelo}</h3>
          <h4>$/. {el.precio}</h4>

          <div id="quantity">
            <button>
              <Icon iconName="fas fa-plus" iconStyle={{padding: "0"}}/>
            </button>
            
            <div id="count">{el.stock}</div>
            
            <button>
              <Icon iconName="fas fa-minus" iconStyle={{padding: "0"}}/>
            </button>
          </div>

          <button className="add-to-cart"><Icon iconName="fas fa-cart-plus" iconTitle="Añade un producto al Carrito" iconStyle={{padding: "0"}}/>&nbsp;&nbsp;Añadir al carrito</button>
        </div>
      )
    })

    const {numberView, nullElements, searchedElements} = this.props;
    
    return (
      <React.Fragment>
      {
      numberView === 0 ? product
      : numberView === 1
      ? searchedElements
      : numberView === 2
      ? nullElements
      : null }
      </React.Fragment>
    )
  }
}

export default Product;