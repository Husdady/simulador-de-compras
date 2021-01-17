import Icon from './Icon';
import './css/buscador.css';

function Buscador(){
    return(
      <form>
      <input type="text" placeholder="Busca algún producto..." />
      <button type="submit"><Icon iconName="fas fa-search" iconStyle={{padding: "0"}}/></button>
      </form>
    )
}

export default Buscador;