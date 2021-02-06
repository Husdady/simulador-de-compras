import React, {Component, Fragment} from 'react';
import Icon from '../assets/Icon';
import showMessage from '../../js/message';

class Expenses extends Component{
  render(){
    const expenses = this.props.expenses.map( (expenses, index) =>
    
    ( <span className="expenses" key={index}>
        Gastaste $/. {expenses.totalPrice} en la compra de {expenses.stock} {expenses.model}
        <Icon iconName="fas fa-trash-alt trash" onClick={ () => {
          this.props.deleteExpenses(this.props.expenses, index);
        }} />
      </span>
    ))

    return(
      <Fragment>
      { this.props.expenses.length > 0
      ?
      <div id="expenses">
        { expenses }
        
        <button id="delete-record"
        onClick={ () => {
          this.props.removeAll([])
          showMessage(
            'check',
            'El historial ha sido eliminado correctamente',
            'fa-check-circle'
          )
        }}>
          <Icon iconName="fas fa-trash-alt trash" iconStyle={{padding: 0, color:'black'}} />&nbsp;&nbsp;Borrar historial de gastos
        </button>
        
      </div>

      : <h4 style={{margin: 0}}>No se han registrado gastos...</h4>
      }
      </Fragment>
    )
  }
}

export default Expenses;