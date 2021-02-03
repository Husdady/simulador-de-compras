import React, {Component, Fragment} from 'react';
import Icon from '../assets/Icon';
import './css/information-products.css';
import celulares from '../../json/celulares';

class InformationProduct extends Component{
  render(){
    return(
      <Fragment>
        <Icon iconName="fas fa-window-close" id="close-modal" onClick={() =>{ this.props.showModal(false);
        document.body.removeAttribute('style');
        }} />
        <div className="wrap">
          <div className="information-product">
            <figure>
              <img loading="lazy" src={`${process.env.PUBLIC_URL}/${celulares[this.props.i].imagen}`} alt={'mayita'} title={'mayita'} />
            </figure>
            <h3>Modelo:<span>&nbsp;&nbsp;{celulares[this.props.i].modelo}</span></h3>
            <h3>Marca:<span>&nbsp;&nbsp;{celulares[this.props.i].marca}</span></h3>
            <h3>Memoria RAM:<span>&nbsp;&nbsp;{celulares[this.props.i].ram}</span></h3>
            <h3>Batería:&nbsp;&nbsp;<span>{celulares[this.props.i].bateria}</span>&nbsp;<span>mAh</span></h3>
            <h3>Camara Frontal:&nbsp;&nbsp;<span>{celulares[this.props.i].camara}</span></h3>
            <h3>Resolución:<span>&nbsp;&nbsp;{celulares[this.props.i].resolucion}</span></h3>
            <h3>Precio:&nbsp;&nbsp;<span>$/.</span>&nbsp;<span>{celulares[this.props.i].precio}</span></h3>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default InformationProduct;