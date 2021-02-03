import React, { Component, Fragment } from 'react';
import Header from '../header/Header.js';
import Footer from '../footer/Footer.js';
import Product from './Product';
import Filters from './Filters';
import celulares from '../../json/celulares';
import NotFound from '../assets/NotFound';
import InformationProduct from './InformationProduct';

class App extends Component{

  state = {
    allProducts: celulares,
    textNotFound: "",
    showModal: false,
    position: undefined,
    currentWindow: undefined,
    shoppingCart: [],
    expenses: []
  }

  /* Filtro de búsqueda */

  search = x =>{
    this.setState({
      allProducts: x
    })
  }

  /* Filtro de orden */

  orderProducts = x =>{
    this.setState({
      allProducts: x
    })
  }

  /* Filtro de casillas de verificación */

  onFilterChange = x =>{
    this.setState({
      allProducts: x
    })
  }

  /* Filtro por precios */

  onFilterPrizes = x =>{
    this.setState({
      allProducts: x
    })
  }

  /* Cambiar mensaje de No se ha encontrado */

  changeTextNotFound = text => {
    this.setState({
      textNotFound: text
    })
  }

  /* Mostrar información de productos */
  showModal = condition =>{
    this.setState({
      showModal: condition
    })
  }

  /* Information Products */

  setPosition = number =>{
    this.setState({
      position: number
    })
  }

  /* Muestra las ventanas emergentes del header */

  showCurrentWindow = value =>{
    this.setState({
      currentWindow: value
    })
  }

  /* Agrega productos al carrito */
  addShopCart = (item, stock) => {
    const z = this.state.shoppingCart.find((x) => x.model === item.modelo);
    if (!z) {
      const cellphone = {
        image: item.imagen,
        model: item.modelo,
        price: item.precio,
        stock: stock,
        totalPrice: item.precio * stock
    };
      this.setState({
        shoppingCart: [...this.state.shoppingCart, cellphone]
      })
    }
  };

  /* Muestra historial de gastos */
  addExpenses = item => {

    const y = this.state.shoppingCart.find((x) => x.model === item.model);

    if (y) {
      const expenses = {
        model: item.model,
        price: item.price,
        stock: item.stock,
        totalPrice: item.price * item.stock
      };
      this.setState({
        expenses: [...this.state.expenses, expenses]
      })
    }
  };

  /* Muestra todos los productos comprados */
  allProductsPurchased = () => {
    this.setState({
      expenses: [...this.state.shoppingCart]
    })
  }

  /* Cambia el estado de shoppingCart a vacio para mostrar un mensaje de 'No se han agregado productos al carrito' cuando sea vacio */
  hideInformation = () =>{
    if (document.getElementsByClassName('product-added').length === 0){
      this.setState({
        shoppingCart: []
      })
    }
  }

  /* Elimina productos del carrito */

  deleteItem = newState =>{
    this.setState({
      shoppingCart: newState
    })
  }

  deleteExpenses = newState =>{
    this.setState({
      expenses: newState
    })
  }

  render(){
    return(
      <Fragment>
        <Header
        onSearch={this.search}
        changeTextNotFound={this.changeTextNotFound}
        productsAdded={this.state.productsAdded}
        currentWindow={this.state.currentWindow}
        showCurrentWindow={this.showCurrentWindow}
        expenses={this.state.expenses}
        addExpenses={this.addExpenses}
        buyAll={this.allProductsPurchased}
        deleteExpenses={this.deleteExpenses}
        shoppingCart={this.state.shoppingCart}
        deleteItem={this.deleteItem}
        hideInformation={this.hideInformation}
        />
        <div className="container">
          <aside className="edit-products">
            <Filters
            changeElements={this.onFilterChange}
            changeOrder={this.orderProducts}
            onSearch={this.search}
            searchByPrizes={this.onFilterPrizes}
            changeTextNotFound={this.changeTextNotFound}
            products={this.state.allProducts} />
          </aside>
          <section className="products">
          
          {this.state.allProducts.length > 0 ? (this.state.allProducts.map( (x, index) => (
              <Product
              increase={this.increase}
              showModal={this.showModal}
              key={index}
              id={x.id}
              imagen={x.imagen}
              modelo={x.modelo}
              stock={x.stock}
              precio={x.precio}
              position={this.setPosition}
              closeInformation={this.showCurrentWindow}
              products={x}
              addShopCart={this.addShopCart}
              />
              )
            ))
            : <NotFound text={this.state.textNotFound} />
          }
          </section>
        </div>
        {this.state.showModal === true ? <InformationProduct i={this.state.position} showModal={this.showModal} /> : null}
        <Footer />
      </Fragment>
    )
  }
}

export default App;