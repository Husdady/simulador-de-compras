import React, { Component } from 'react';
import Buscador from '../assets/Buscador';
import search from '../../js/search';
import order from '../../js/order';

class OrderAlphabetical extends Component{

    state = {
      mq: false
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

  render(){
    return(
      <div className="order-alphabetical">
        <span>Ordenar por:&nbsp;&nbsp;&nbsp;</span>
        <select onChange={ () => {
          this.props.changeOrder(order(this.props.products))
          }
        }>
          <option>Nombre ascendente</option>
          <option>Nombre descendente</option>
          <option>Precio más alto</option>
          <option>Precio más bajo</option>
          <option>Productos con más stock</option>
          <option>Productos con menos stock</option>
        </select>

      {this.state.mq ? <Buscador onSubmit={
            e => {
              e.preventDefault();
              this.props.onSearch(search());
              this.props.changeTextNotFound("No se ha encontrado ningún producto...");
            } } /> : null}

      </div>
    )
  }
}

export default OrderAlphabetical;