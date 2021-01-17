import React, { Component } from 'react';
import Buscador from '../assets/Buscador';

class OrderAlphabetical extends Component{
  constructor(props){
    super(props);
    this.state = {
      mq: false
    }
  }

  componentDidMount() {
    this.setSeeker()
    window.addEventListener('resize', this.setSeeker)
  }

  setSeeker = () => {
   if(window.innerWidth < 1024) {
      this.setState({ mq: true });
     } else {
      this.setState({ mq: false });
     }  
   }

   ascending_order = (a,b)=>{
     console.log(a)
    return a.children('h3').textContent < b.children('h3').textContent ? 1 : -1;
  }

   order(){
    const options = document.querySelectorAll('option'),
    container = document.getElementsByClassName('.products')[0],
    allProducts = document.querySelectorAll('.product');
     if (options[0].selected === true){
      allProducts.forEach(el =>{
        el.sort()
      })
     } else {
      console.log('d')
     }
     
   }

  render(){
    return(
      <div className="order-alphabetical">
        <span>Ordenar por:&nbsp;&nbsp;&nbsp;</span>
        <select onChange={this.order}>
          <option value="asc">Nombre ascendente</option>
          <option>Nombre descendente</option> 
        </select>

      {this.state.mq ? <Buscador /> : null}

      </div>
    )
  }
}

export default OrderAlphabetical;