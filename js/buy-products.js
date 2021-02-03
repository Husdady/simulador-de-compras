import Swal from 'sweetalert2';

const buyProducts = (money, totalPrice, textForBuy, textForNotBuy) =>{
  if (money > totalPrice){
    Swal.fire({
      showConfirmButton: false,
      padding: '10px 0',
      background: 'rgba(255,255,255,0.8)',
      html:
      `<span id="check" class="alert">${textForBuy} <i class="fas fa-check-circle"></i></span>`
    })
  } else {
    Swal.fire({
      showConfirmButton: false,
      padding: '10px 0',
      background: 'rgba(255,255,255,0.8)',
      html:
      `<span id="danger" class="alert">${textForNotBuy} <i class="fas fa-window-close"></i></span>`
    })
  }
}

export default buyProducts;