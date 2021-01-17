import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import Product from '../components/main/Product';
import NotFound from '../components/assets/NotFound';

function categoryFilter(){
  const checkboxes = document.querySelectorAll('input[type="checkbox"]'),
  checkboxesChecked = document.querySelectorAll('input[type="checkbox"]:checked');

  if (checkboxes.length === checkboxesChecked.length){
    console.log("Xd")
  } else if (checkboxesChecked.length !== 0){
    console.log('lmao')
  } else {
    <Product numberView={2} />
    // ReactDOM.render(<NotFound text="Ninguna casilla ha sido marcada..." />, document.getElementsByClassName('products')[0])
  }
  
}

export default categoryFilter;
