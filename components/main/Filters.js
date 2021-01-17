import React, { Component, Fragment } from 'react';
import './css/filters.css';
import OrderAlphabetical from './OrderAlphabetical.js';
import PrizesFilters from './PrizesFilters';
import CheckboxesFilters from './CheckboxesFilters';

class Filters extends Component{

  render(){
    return(
      <Fragment>
        <OrderAlphabetical />
        <PrizesFilters />
        <CheckboxesFilters />
      </Fragment>
    )
  }
}

export default Filters;
