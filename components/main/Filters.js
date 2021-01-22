import React, { Fragment } from 'react';
import './css/filters.css';
import OrderAlphabetical from './OrderAlphabetical.js';
import PrizesFilters from './PrizesFilters';
import CheckboxesFilters from './CheckboxesFilters';

const Filters = props => {
    return(
      <Fragment>
        <OrderAlphabetical />
        <PrizesFilters />
        <CheckboxesFilters changeElements={props.changeElements}/>
      </Fragment>
    )
  }

export default Filters;
