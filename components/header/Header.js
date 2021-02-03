import React, { Component } from 'react';
import './css/header.css';
import search from '../../js/search';
import Buscador from '../assets/Buscador';
import Icon from '../assets/Icon';
import Information from './Information';
import AddMoney from './AddMoney';
import Wallet from './Wallet';
import Expenses from './Expenses';
import ShoppingCart from './ShoppingCart';
import Help from './Help';

class Header extends Component{

  state = {
    money: 0,
    mq: false
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

  addMoney = newMoney =>{
    let condition = /^[0]|[+|-|.]|[.]$/g;
    if (document.getElementById('add-money').value === '' || condition.test(document.getElementById('add-money').value)){
      return null;
    } else {
      this.setState({
        money: this.state.money + Number(newMoney)
      })
    }
  }

  spendMoney = value =>{
    this.setState({
      money: this.state.money - value
    })
  }

  deleteItem = (item, x) =>{
    const newState = x.filter(i => i.model !== item)
    this.props.deleteItem(newState);
  }

  deleteExpense = (item, x) =>{
    const newState = x.filter(i => i.totalPrice !== item)
    this.props.deleteExpenses(newState);
  }

  render(){
    return(
      <header>
        <div className="left-side" title="">
          <img src={`${process.env.PUBLIC_URL}/img/box.png`} alt="box"/><span>Shop</span>Lit
        </div>

        <div className="right-side">
          {this.state.mq ? <Buscador onSubmit={
            e => {
              e.preventDefault();
              this.props.onSearch(search());
              this.props.changeTextNotFound("No se ha encontrado ningún producto...");
            }
          } /> : null}

          <span onClick={ () => this.props.showCurrentWindow(1)}>
          <Icon
          iconName="fas fa-money-check"
          iconTitle="Añadir dinero a tu cartera" />
            { this.props.currentWindow === 1
            ? <Icon
            iconName="fas fa-caret-up"
            iconStyle={{padding: "0", border: "none"}}
            id="arrow-top" />
            : null }
          </span>

          <span onClick={ () => this.props.showCurrentWindow(2)}>
          <Icon
          iconName="fas fa-wallet"
          iconTitle="Tu cartera" />
            { this.props.currentWindow === 2
            ? <Icon
            iconName="fas fa-caret-up"
            iconStyle={{padding: "0", border: "none"}}
            id="arrow-top" />
            : null }
          </span>

          <span onClick={ () => this.props.showCurrentWindow(3)}>
            <Icon
            iconName="fas fa-cash-register"
            iconTitle="Tus gastos" />
            { this.props.currentWindow === 3
            ? <Icon
            iconName="fas fa-caret-up"
            iconStyle={{padding: "0", border: "none"}}
            id="arrow-top" />
            : null }
            { this.props.expenses.length > 0
            ? <span id="number-of-expenses">{this.props.expenses.length}</span>
            : null
            }
          </span>

          <span onClick={ () => this.props.showCurrentWindow(4)}>
            <Icon
            iconName="fas fa-cart-arrow-down"
            iconTitle="Carrito de compras" />
            { this.props.currentWindow === 4
            ? <Icon
            iconName="fas fa-caret-up"
            iconStyle={{padding: "0", border: "none"}}
            id="arrow-top" />
            : null }
            { this.props.shoppingCart.length > 0
            ? <span id="number-of-products-added">{this.props.shoppingCart.length}</span>
            : null
            }
          </span>

          <span onClick={ () => this.props.showCurrentWindow(5)}>
          <Icon
          iconName="fas fa-question-circle"
          iconTitle="Ayuda"
          />
          { this.props.currentWindow === 5
          ? <Icon
          iconName="fas fa-caret-up"
          iconStyle={{padding: "0", border: "none"}}
          id="arrow-top" />
          : null }
          </span>

        </div>

        { this.props.currentWindow === 5
        ? <Information
        title="Ayuda"
        close={this.props.showCurrentWindow}
        innerHTML={<Help />}/>
        : this.props.currentWindow === 4
        ? <Information
        title="Carrito de compras"
        close={this.props.showCurrentWindow}
        innerHTML={
        <ShoppingCart
        shoppingCart={this.props.shoppingCart}
        deleteItem={this.deleteItem}
        removeAll={this.props.deleteItem}
        hideInformation={this.props.hideInformation}
        expenses={this.props.expenses}
        addExpenses={this.props.addExpenses}
        buyAll={this.props.buyAll}
        money={this.state.money}
        spendMoney={this.spendMoney}
        /> }
        />
        : this.props.currentWindow === 3
        ? <Information
        title="Tus gastos"
        close={this.props.showCurrentWindow}
        innerHTML={
        <Expenses
        expenses={this.props.expenses}
        deleteExpenses={this.deleteExpense}
        removeAll={this.props.deleteExpenses}
        /> }
        />
        : this.props.currentWindow === 2
        ? <Information
        title="Tu cartera"
        close={this.props.showCurrentWindow}
        innerHTML={
        <Wallet
        money={this.state.money}
        />}
        />
        : this.props.currentWindow === 1
        ? <Information
        title="Añade dinero a tu cartera"
        close={this.props.showCurrentWindow}
        innerHTML={
        <AddMoney 
        setMoney={this.addMoney}
        />}
        />
        : null
        }

      </header>
    )
  }
}

export default Header;