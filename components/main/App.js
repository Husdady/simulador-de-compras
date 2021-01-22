import React, { Component } from 'react';
import Product from './Product';
import Filters from './Filters';
import celulares from '../../json/celulares';
import NotFound from '../assets/NotFound';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      allProducts: celulares,
      categoryCheckboxes: [
        {
          marca: "Blackberry"
        },
        {
          marca: "Huawei"
        },
        {
          marca: "LG"
        },
        {
          marca: "Motorola"
        },
        {
          marca: "Nokia"
        },
        {
          marca: "Samsung"
        },
        {
          marca: "Sony Xperia"
        },
        {
          marca: "Sony Ericsson"
        },
        {
          marca: "Xiaomi"
        },
        {
          marca: "ZTE"
        }
      ],
      productVisible: true,
      activeFilter: []
    }
    this.onFilterChange = this.onFilterChange.bind(this);
  }

  componentDidMount(){
    this.setState({
      activeFilter: this.state.allProducts
    })
  }

  onFilterChange(){
    const checkboxes = document.querySelectorAll('input[type="checkbox"]'),checkboxesChecked = document.querySelectorAll('input[type="checkbox"]:checked'), select = document.querySelector("select"), range = document.getElementById('set-range-prize');

    this.setState({
      productVisible: true
    })

    select.removeAttribute('disabled');
    range.removeAttribute('disabled');
  
  if (checkboxes.length === checkboxesChecked.length){
    this.setState({
      allProducts: celulares
    })
  }

  else if (checkboxesChecked.length !== 0){
    var updatedList = this.state.allProducts;
    let categorys = this.state.categoryCheckboxes.map(x => x.marca.toLowerCase());

    updatedList = updatedList.filter(item=> {
      
    if (item.modelo.toLowerCase().indexOf(categorys) !== -1){
      return item
    } else {
      console.log("Producto no encontrado")
    }
      
    })

    this.setState({activeFilter: updatedList});

  } else {
    select.setAttribute('disabled', true);
    range.setAttribute('disabled', true);
    this.setState({
      productVisible: false
    })
  }
  }

  render(){
    return(
      <div className="container">
        <aside className="edit-products">
          <Filters changeElements={this.onFilterChange} />
        </aside>
        <section className="products">
        { this.state.productVisible ? this.state.activeFilter.map( x =>{
          return (
            <Product key={x.id}
            imagen={x.imagen} modelo={x.modelo} stock={x.stock} precio={x.precio} />
            )
          })
          : <NotFound text="Ninguna casilla ha sido marcada..." />
        }
        </section>
      </div>
    )
  }
}

export default App;