import React, { Component } from 'react';
import Buscador from '../assets/Buscador';
import Icon from '../assets/Icon';
import './css/header.css';

class Header extends Component{
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

  setSeeker = () =>{
    if (window.innerWidth >= 1024){
      this.setState({ mq: true })
    } else {
      this.setState({ mq: false })
    }
  }

  render(){
    return(
      <header>

        <div className="left-side" title="">
          <img src={`${process.env.PUBLIC_URL}/img/box.png`} alt="box"/><span>Shop</span>Lit
        </div>

        <div className="right-side">
          {this.state.mq ? <Buscador /> : null}
          <Icon iconName="fas fa-money-check" iconTitle="Añadir dinero a tu cartera" />
          <Icon iconName="fas fa-wallet" iconTitle="Tu cartera" />
          <Icon iconName="fas fa-cash-register" iconTitle="Tus gastos" />

          <span>
            <Icon iconName="fas fa-cart-arrow-down" iconTitle="Carrito de compras" />
          <span id="number-of-products-added">1</span>
          </span>

          <Icon iconName="fas fa-question-circle" iconTitle="Ayuda" />

        </div>
        </header>
    )
  }
}

export default Header;