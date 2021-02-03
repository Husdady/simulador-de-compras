import React, { Component } from 'react';
import Icon from '../assets/Icon';
import filterPrizes from '../../js/filter-by-prizes';

class PrizesFilters extends Component{

  state = {
    rangeMinValue: 0,
    rangeMaxValue: 3500
  }

  setMinValue = e=>{
    this.setState({
      rangeMinValue: e.target.value
    }) 
  }

  setMaxValue = e=>{
    this.setState({
      rangeMaxValue: e.target.value
    })
  }

  render(){
    return(
      <div className="prizes">
        <h4>Precio</h4>
        <span>Fijar precio máximo:  
          <input type="range" id="price-max" max={3500} value={this.state.rangeMaxValue} onChange={this.setMaxValue}/>  
        </span>

        <span>Fijar precio mínimo:  
          <input type="range" id="price-min" max={3500} value={this.state.rangeMinValue} onChange={this.setMinValue} />  
        </span>

        <span className="range-prize">
          <input type="number" min="0" value={this.state.rangeMinValue} htmlFor="price" disabled />&nbsp;&nbsp;-&nbsp;&nbsp;
          <input type="number" min="0" value={this.state.rangeMaxValue} disabled />
          <button id="set-range-prize" onClick={ () => {
            this.props.searchByPrizes(filterPrizes());
            this.props.changeTextNotFound("No se han encontrado productos entre esos precios...");
            document.getElementById('seeker').value = ''; 
            }
          }>
            <Icon iconName="fas fa-chevron-right" iconStyle={{padding: "0"}} />
          </button>
        </span>
      </div>
    )
  }
}

export default PrizesFilters;