import React, { Component } from 'react';

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

  constructor(props){
    super(props);
    this.checkAll = this.checkAll.bind(this);
  }

  componentDidMount(){
  const inputsCheckbox = document.querySelectorAll("input[type='checkbox']");
    inputsCheckbox.forEach(input => {
      input.checked = true;
    })
  }

  checkAll(){
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
        <Category id="xperia" textLabel="Sony Xperia" numberProducts="6" />
        <Category id="ericsson" textLabel="Sony Ericsson" numberProducts="1" />
        <Category id="xiaomi" textLabel="Xiaomi" numberProducts="6" />
        <Category id="zte" textLabel="ZTE" numberProducts="6" />

        <button onClick={
        () => { this.props.changeElements() }  
       
        }>Aplicar filtros</button>   
      </div>
    )
  }
}

export default CheckboxesFilters;