import React, { Component } from 'react';
import Icon from '../assets/Icon';

class PrizesFilters extends Component{
  render(){
    return(
      <div className="prizes">
        <h4>Precio</h4>
        <span>Fijar precio mínimo:  
          <input type="range" id="price-min" min="0" max="3500"/>  
        </span>

        <span>Fijar precio máximo:  
          <input type="range" id="price-max" min="0" max="3500"/>  
        </span>

        <span className="range-prize">
          <input type="number" min="0" value="0" htmlFor="price"/>&nbsp;&nbsp;-&nbsp;&nbsp;
          <input type="number" min="0" value="3500"/>
          <button>
            <Icon iconName="fas fa-chevron-right" iconStyle={{padding: "0"}} />
          </button>
        </span>
      </div>
    )
  }
}

export default PrizesFilters;