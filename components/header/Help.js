import React, {Component, Fragment} from 'react';
import Icon from '../assets/Icon';

class Help extends Component{
  render(){
    return (
      <Fragment>
      <Icon iconName="fas fa-money-check" iconStyle={{padding: "0"}} /><span> <b>Añadir dinero a tu cartera:</b> Aquí puedes añadir dinero a tu cartera.</span>

      <br/><br/>

      <Icon iconName="fas fa-wallet" iconStyle={{padding: "0"}} /><span> <b>Tu cartera:</b> Aquí puedes ver tu saldo actual.</span>

      <br/><br/>

      <Icon iconName="fas fa-cash-register" iconStyle={{padding: "0"}} /><span> <b>Tus gastos:</b> Aquí puedes ver los últimos gastos que hicistes.</span>

      <br/><br/>

      <Icon iconName="fas fa-cart-arrow-down" iconStyle={{padding: "0"}} /><span> <b>Carrito de compras:</b> Aquí puedes ver los productos que has añadido al carrito.</span>
      </Fragment>
    )
  }
}

export default Help;