import React, { Component } from 'react';
import Buscador from '../assets/Buscador';

let numberToOrder;

class OrderAlphabetical extends Component{
  constructor(props){
    super(props);
    this.state = {
      mq: false
    }
    this.order = this.order.bind(this);
    this.ascendingOrder = this.ascendingOrder.bind(this);
    this.descendingOrder = this.descendingOrder.bind(this);
    this.ascendingPrizes = this.ascendingPrizes.bind(this);
    this.descendingPrizes = this.descendingPrizes.bind(this);
    this.orderProducts = this.orderProducts.bind(this);
  }

  componentDidMount() {
    this.setSeeker();
    window.addEventListener('resize', this.setSeeker);
  }

  setSeeker = () => {
   if(window.innerWidth < 1024) {
      this.setState({ mq: true });
     } else {
      this.setState({ mq: false });
     }  
   }

  ascendingOrder = array =>{
    array.sort((a, b) => {
      return a.getElementsByTagName('h3')[0].textContent.toLowerCase() > b.getElementsByTagName('h3')[0].textContent.toLowerCase() ? 1 :  -1;
    })
  }

  descendingOrder = array =>{
    array.sort((a, b) => {
      return a.getElementsByTagName('h3')[0].textContent.toLowerCase() < b.getElementsByTagName('h3')[0].textContent.toLowerCase() ? 1 :  -1;
    })
  }

  ascendingPrizes = array =>{
    array.sort((a, b) => {
      return Number(a.getElementsByTagName('h4')[0].textContent.slice(3).trim()) < Number(b.getElementsByTagName('h4')[0].textContent.slice(3).trim()) ? 1 :  -1;
    })
  }

  descendingPrizes = array =>{
    array.sort((a, b) => {
      return Number(a.getElementsByTagName('h4')[0].textContent.slice(3).trim()) > Number(b.getElementsByTagName('h4')[0].textContent.slice(3).trim()) ? 1 :  -1;
    })
  }

  orderProducts(child, parent){
  let toArray = Array.from(child);
  
  numberToOrder === 1 ? this.ascendingOrder(toArray)
  : numberToOrder === 2 ? this.descendingOrder(toArray)
  : numberToOrder === 3 ? this.ascendingPrizes(toArray)
  : this.descendingPrizes(toArray);

  let output = '';

  toArray.map(el => {
    output += el.outerHTML;
  })

  parent.innerHTML = output;
  
}

   order(){
    const options = document.querySelectorAll('option'),
    product = document.getElementsByClassName('product'), container = document.getElementsByClassName('products')[0];

    // product.animate({opacity: 0}, 0).delay(2000).animate({opacity: 1}, 2000);

     if (options[0].selected){
      numberToOrder = 1;
     } else if (options[1].selected){
      numberToOrder = 2;
     } else if (options[2].selected){
      numberToOrder = 3;
     } else {
      numberToOrder = 4;
     }
     return this.orderProducts(product, container);
   }

  render(){
    return(
      <div className="order-alphabetical">
        <span>Ordenar por:&nbsp;&nbsp;&nbsp;</span>
        <select onChange={this.order}>
          <option>Nombre ascendente</option>
          <option>Nombre descendente</option>
          <option>Precio más alto</option>
          <option>Precio más bajo</option>
        </select>

      {this.state.mq ? <Buscador /> : null}

      </div>
    )
  }
}

export default OrderAlphabetical;