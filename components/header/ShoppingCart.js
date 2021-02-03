import React, {Component, Fragment} from 'react';
import buyProducts from '../../js/buy-products';
import Icon from '../assets/Icon';
import './css/product-added.css';

class ShoppingCart extends Component{

  render(){

    const products =  this.props.shoppingCart.map( (product, index) => 
          
      ( <div className="product-added" key={index}>
        
        <figure>
          <img loading="lazy" src={`${process.env.PUBLIC_URL}/${product.image}`} alt={product.model} title={product.model} />
        </figure>

        <div className="information-product-added">Se añadió al carrito <span className="stock">{product.stock}</span> {product.model}.

          <span><b>Total a pagar:</b> $/. <span className="total-price">{product.totalPrice}</span></span>

          <button className="buy"
          onClick={ e => {
          
          const totalPrice =  e.target.parentElement.getElementsByClassName('total-price')[0].textContent;
          
          buyProducts(
            this.props.money,
            totalPrice,
            'Producto comprado exitosamente',
            'No tienes suficiente dinero para comprar el producto'
          );

          if (this.props.money > totalPrice){
          this.props.spendMoney(totalPrice);
          this.props.addExpenses(product);
          this.props.deleteItem(
            product.model,
            this.props.shoppingCart
          );
          }
            }
              }
          >
            &nbsp;Comprar
          </button>

          <Icon iconName="fas fa-trash-alt trash" iconTitle="Eliminar" onClick={() => {
          this.props.deleteItem(
            product.model,
            this.props.shoppingCart
          );
          this.props.hideInformation();
          }} />

        </div>
      </div>
    ))

    return(
      <Fragment> 
        { this.props.shoppingCart.length > 0
        ? <div id="wrapper">

        {products}

        <button id="buy-all"
        onClick={ () => {
        let allPrices = 0;
        this.props.shoppingCart.map(x => allPrices = allPrices + Number(x.totalPrice));
          
          buyProducts(
            this.props.money,
            allPrices,
            'Todos los productos han sido comprados exitosamente',
            'No tienes suficiente dinero para comprar todos los productos'
          );

           if (this.props.money > allPrices){
            this.props.buyAll();
            this.props.spendMoney(allPrices);
            this.props.removeAll([]);
           }
          }
        }>
          <Icon iconName="fas fa-shopping-cart" iconStyle={{padding: 0, color:'black'}} />&nbsp;&nbsp;Comprar todo
        </button>

        <button id="delete-all-products"
        onClick={ () => { this.props.removeAll([]) } }>
          <Icon iconName="fas fa-trash-alt trash" iconStyle={{padding: 0, color:'black'}} />&nbsp;&nbsp;Borrar historial
        </button>

      </div>

      : <h4 style={{margin: 0}}>Ningún producto ha sido añadido al carrito...&nbsp;<Icon iconName="fas fa-sad-tear" iconStyle={{padding: 0}} /></h4>
      }
      
      </Fragment>
    )
  }
}

export default ShoppingCart;