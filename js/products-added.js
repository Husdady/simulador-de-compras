import Swal from 'sweetalert2';

export default function productsAdded(stock, functionX){
  if ( stock > 0 ){
    Swal.fire({
      showConfirmButton: false,
      padding: '10px 0',
      background: 'rgba(255,255,255,0.8)',
      html:
      '<span id="check" class="alert">Se añadido el producto correctamente al carrito <i class="fas fa-check-circle"></i></span>'
    })
    
  } else {
    Swal.fire({
      showConfirmButton: false,
      padding: '10px 0',
      background: 'rgba(255,255,255,0.8)',
      html:
      '<span id="danger" class="alert">Se produjo un error al añadir el producto al carrito <i class="fas fa-window-close"></i></span>'
    })
  }
}