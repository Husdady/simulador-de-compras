import Icon from './Icon';
import './css/buscador.css';

const Buscador = props =>{
    return(
      <form onSubmit={props.onSubmit}>
      <input type="text" id="seeker" placeholder="Busca algún producto..." />
      <button type="submit"><Icon iconName="fas fa-search" iconStyle={{padding: "0"}}/></button>
      </form>
    )
}

export default Buscador;