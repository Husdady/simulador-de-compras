import React from 'react';
import Icon from '../assets/Icon';

const Information = props =>{
  return (
    <section id="information">
      <Icon onClick={() => props.close()} iconName="fas fa-times" iconTitle="Cierra la ventana" id="close" />
      <h5>{props.title}</h5>
      {props.innerHTML}
    </section>
  )
}

export default Information;