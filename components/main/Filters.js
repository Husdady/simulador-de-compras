import React, { Fragment } from 'react';
import './css/filters.css';
import OrderAlphabetical from './OrderAlphabetical.js';
import PrizesFilters from './PrizesFilters';
import CheckboxesFilters from './CheckboxesFilters';

const Filters = props => {
    return(
      <Fragment>
        <OrderAlphabetical
        onSearch={props.onSearch}
        changeOrder={props.changeOrder}
        products={props.products}
        changeTextNotFound={props.changeTextNotFound}
        />
        <PrizesFilters
        searchByPrizes={props.searchByPrizes}
        changeTextNotFound={props.changeTextNotFound}
        />
        <CheckboxesFilters
        changeElements={props.changeElements}
        changeTextNotFound={props.changeTextNotFound}
        />
      </Fragment>
    )
  }

export default Filters;
