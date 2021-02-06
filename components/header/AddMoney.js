import React, {Component, Fragment} from 'react';
import Icon from '../assets/Icon';
import showMessage from '../../js/message';

class AddMoney extends Component{
  componentDidMount(){
    document.getElementById('add-money').value = 0;
  }
  limitCharacters = e =>{
    let limit = e.target.value;
    if (limit.length > 4) e.target.value = limit.substring(0, 4);
  }
  addMoney = () =>{
    let condition = /^[0]/g,
    value = document.getElementById('add-money').value;

    if (value === '' || condition.test(value)){
      showMessage(
        'danger',
        'Se produjo un error al añadir dinero, Por favor ingrese un valor válido',
        'fa-window-close'
      )
    } else {
      showMessage(
        'check',
        'Se añadido dinero correctamente a tu cartera',
        'fa-check-circle'
      )
      
      return document.getElementById('add-money').value;
    }
  }
  render(){
    return(
      <Fragment>
        <h4>¿Cuánto dinero deseas añadir a tu cartera?</h4>
        <label>
          <span style={{fontWeight: "bold"}} >$/.</span>&nbsp;
          <input
          onChange={e => this.limitCharacters(e)}
          onKeyDown={e=> {
            if( e.key === '.' || e.key === '+' || e.key === '-' ){
              e.preventDefault();
          }}}
          type="number"
          id="add-money"
          />
        </label>
        <button id="button-add-money"
        onClick={() => {
          this.props.setMoney(this.addMoney());
        }}>
          <Icon
          iconName="fas fa-plus"
          iconStyle={{padding: "0", color:"black"}}
          /> &nbsp;Añadir dinero
        </button>
      </Fragment>
    )
  }
}

export default AddMoney;