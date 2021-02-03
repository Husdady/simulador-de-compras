import React, { Component } from 'react';
import categoryFilter from '../../js/category-filter';

class Category extends Component{
  render(){
    const { id, textLabel, numberProducts, onClick } = this.props;   
    return(
      <span>
        <input type="checkbox" id={id} />
        <label onClick={onClick} htmlFor={id}>{textLabel} ({numberProducts})</label>
      </span>
    )
  }
}

class CheckboxesFilters extends Component{
  
  componentDidMount(){
  const inputsCheckbox = document.querySelectorAll("input[type='checkbox']");
    inputsCheckbox.forEach(input => {
      input.checked = true;
    })
  }

  checkAll = () =>{
  const inputsCheckbox = document.querySelectorAll("input[type='checkbox']");

  if (inputsCheckbox[0].checked === true){
    for(let x=1; x<inputsCheckbox.length; x++){
      inputsCheckbox[x].checked = false;
    }
  } else {
    for(let x=1; x<inputsCheckbox.length; x++){
      inputsCheckbox[x].checked = true;
    }
  }  
}

  render(){

    return(
      <div className="filters">
        <h4>Marcas de teléfonos</h4>
        <Category id="todos" textLabel="Todos" numberProducts="60" onClick={this.checkAll} />
        <Category id="blackberry" textLabel="BlackBerry" numberProducts="6" />
        <Category id="huawei" textLabel="Huawei" numberProducts="6" />
        <Category id="lg" textLabel="LG" numberProducts="6" />
        <Category id="motorola" textLabel="Motorola" numberProducts="6" />
        <Category id="nokia" textLabel="Nokia" numberProducts="6" />
        <Category id="samsung" textLabel="Samsung" numberProducts="6" />
        <Category id="iphone" textLabel="Iphone" numberProducts="6" />
        <Category id="xperia" textLabel="Sony Xperia" numberProducts="6" />
        <Category id="ericsson" textLabel="Sony Ericsson" numberProducts="1" />
        <Category id="xiaomi" textLabel="Xiaomi" numberProducts="6" />
        <Category id="zte" textLabel="ZTE" numberProducts="6" />

        <button onClick={ () => {
          document.getElementById('seeker').value = '';
          this.props.changeElements(categoryFilter());
          this.props.changeTextNotFound("Ninguna casilla ha sido marcada...") } }>Aplicar filtros</button>
      </div>
    )
  }
}

export default CheckboxesFilters;