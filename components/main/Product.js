import React, { Component } from 'react';
import './css/product.css';
import productsAdded from '../../js/products-added';

class Product extends Component{
  state = {
    stock: Number(this.props.stock),
    prices: Number(this.props.stock)
  }

  increase = e =>{
    let value = e.target.parentElement.getElementsByClassName('count')[0].textContent;
    if (Number(value) !== this.state.prices){
        return e.target.parentElement.getElementsByClassName('count')[0].textContent = Number(value) + 1;
    }
  }

  decrease = e =>{
    let value = e.target.parentElement.getElementsByClassName('count')[0].textContent;
    if (value > 0){
    return e.target.parentElement.getElementsByClassName('count')[0].textContent = Number(value) - 1;
    }
  }

  setPosition = e =>{
    let parent = e.target.parentElement;
    return parent.parentElement.getAttribute('data-product') || parent.getAttribute('data-product');
  }

  render(){
    const { id, imagen, modelo, precio, stock } = this.props;
    return (
      <div className="product" key={id} data-product={id}>
        <figure onClick={e => {
          document.body.style.overflow = 'hidden';
          this.props.showModal(true);
          this.props.position(this.setPosition(e));
          this.props.closeInformation(undefined);
        }}>
          <img loading="lazy" src={`${process.env.PUBLIC_URL}/${imagen}`} alt={modelo} title={modelo} />
        </figure>
        <h3>{modelo}</h3>
        <h4>$/. {precio}</h4>

        <div className="quantity">
          <button className="increase" onClick={e => this.increase(e)}></button>
          
          <div className="count">{stock}</div>
          
          <button className="decrease" onClick={e => this.decrease(e)}></button>
        </div>

        <button className="add-to-cart" onClick={e => {

          let count = e.target.parentElement.getElementsByClassName('count')[0].textContent;

          productsAdded(count);

          count > 0 && this.props.addShopCart(this.props.products, e.target.parentElement.getElementsByClassName('count')[0].textContent);
          
          }}>
          &nbsp;&nbsp;Añadir al carrito</button>
      </div>
    )
  }
}

export default Product;