import React, { Component, Fragment } from 'react';
import Shortcut from '../assets/Shortcut';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Product from './Product';
import Filters from './Filters';
import celulares from '../../json/celulares';
import NotFound from '../assets/NotFound';
import InformationProduct from './InformationProduct';
import showMessage from '../../js/message';

class App extends Component{

  constructor(props){
    super(props);
    let products = JSON.parse(localStorage.getItem('products'));
    let expenses = JSON.parse(localStorage.getItem('expenses'));
    this.state = {
      allProducts: celulares,
      textNotFound: "",
      showModal: false,
      position: undefined,
      currentWindow: undefined,
      shoppingCart: products === null ? [] : products,
      expenses: expenses === null ? [] : expenses
    }
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
    console.log(this.state.stock);
    const z = this.state.shoppingCart.find((x) => x.model === item.modelo);
    if (!z) {
      let cellphone = {
        image: item.imagen,
        model: item.modelo,
        price: item.precio,
        stock: stock,
        totalPrice: item.precio * stock
    };
    let productsInShoppingCart = [...this.state.shoppingCart, cellphone];
      this.setState({
        shoppingCart: productsInShoppingCart
      })
      localStorage.setItem('products', JSON.stringify(productsInShoppingCart));
      showMessage(
        'check',
        'Se añadido el producto correctamente al carrito',
        'fa-check-circle'
      )
    } else {
      showMessage(
        'danger',
        'El producto ya ha sido añadido al carrito',
        'fa-window-close'
      )
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
      let allExpenses = [...this.state.expenses, expenses];
      this.setState({
        expenses: allExpenses
      })
      localStorage.setItem('expenses', JSON.stringify(allExpenses))
    }
  };

  /* Muestra todos los productos comprados */
  allProductsPurchased = () => {
    let purchased = [...this.state.shoppingCart, ...this.state.expenses]
    this.setState({
      expenses: purchased
    })
    localStorage.setItem('expenses', JSON.stringify(purchased));
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
    let item = newState
    this.setState({
      shoppingCart: item
    })
    localStorage.setItem('products', JSON.stringify(item));
  }

  deleteExpenses = newState =>{
    let item = newState
    this.setState({
      expenses: newState
    })
    localStorage.setItem('expenses', JSON.stringify(item));
  }

  render(){
    return(
      <Fragment>
        <Shortcut />
        <Header
        allProducts={this.state.allProducts}
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