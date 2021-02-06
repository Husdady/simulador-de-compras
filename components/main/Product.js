import React, { Component } from 'react';
import './css/product.css';
import showMessage from '../../js/message';

class Product extends Component{
  state = {
    stockMax: Number(this.props.stock)
  }

  componentDidMount(){
    const select = document.getElementsByTagName('select')[0];
    select.disabled = false;
  }

  increase = (e, stock) =>{
    let value = e.target.parentElement.getElementsByClassName('count')[0].textContent;
    if (Number(value) !== Number(stock)){
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
          <button className="increase" onClick={e => this.increase(e, stock)}></button>
          
          <div className="count">{stock}</div>
          
          <button className="decrease" onClick={e => this.decrease(e)}></button>
        </div>

        <button className="add-to-cart" onClick={e => {

          let count = e.target.parentElement.getElementsByClassName('count')[0].textContent;

          Number(count) === 0 && showMessage(
            'danger',
            'Se produjo un error al añadir el producto al carrito',
            'fa-window-close'
            );

          count > 0 && this.props.addShopCart(this.props.products, count);
          
          }}>
          &nbsp;&nbsp;Añadir al carrito</button>
      </div>
    )
  }
}

export default Product;