import React, {Component, Fragment} from 'react';

class Wallet extends Component{
  render(){
    return(
      <Fragment>
        <h3>Tu saldo:</h3>
        <h2 id="balance">$/. <span id="money">{this.props.money}</span></h2>
      </Fragment>
    )
  }
}

export default Wallet;