import React, { Component } from 'react';
import Icon from '../assets/Icon';

class PrizesFilters extends Component{
  constructor(props){
    super(props);
    this.state = {
      rangeMinValue: 0,
      rangeMaxValue: 3500
    }
    this.setMinValue = this.setMinValue.bind(this);
    this.setMaxValue = this.setMaxValue.bind(this);
  }

  setMinValue(e){
    this.setState({
      rangeMinValue: e.target.value
    }) 
  }

  setMaxValue(e){
    this.setState({
      rangeMaxValue: e.target.value
    })
  }

  any(array){
    let getArray = document.getElementsByClassName(array),
    toArray = Array.from(getArray);
    toArray.forEach(el => {
      const prize = Number(el.getElementsByTagName('h4')[0].textContent.slice(3).trim());
      console.log(prize)
      if (this.state.rangeMinValue <= prize >= this.state.rangeMaxValue){
        console.log('se encontraron productos con esos precios')
      } else {
        console.log('no se encontraron productos con esos precios')
      }
    })
  }

  render(){
    return(
      <div className="prizes">
        <h4>Precio</h4>
        <span>Fijar precio máximo:  
          <input type="range" id="price-max" min="0" max="3500" value={this.state.rangeMaxValue} onChange={this.setMaxValue}/>  
        </span>

        <span>Fijar precio mínimo:  
          <input type="range" id="price-min" min="0" max="3500" value={this.state.rangeMinValue} onChange={this.setMinValue} />  
        </span>

        <span className="range-prize">
          <input type="number" min="0" value={this.state.rangeMinValue} htmlFor="price" disabled />&nbsp;&nbsp;-&nbsp;&nbsp;
          <input type="number" min="0" value={this.state.rangeMaxValue} disabled />
          <button id="set-range-prize" onClick={() => this.any('product')}>
            <Icon iconName="fas fa-chevron-right" iconStyle={{padding: "0"}} />
          </button>
        </span>
      </div>
    )
  }
}

export default PrizesFilters;