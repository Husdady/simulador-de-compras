const ascendingOrder = products =>{
  products.sort((a, b) => {
    return a.modelo.toLowerCase() > b.modelo.toLowerCase() ? 1 :  -1;
  });
}

const descendingOrder = products =>{
  products.sort((a, b) => {
    return a.modelo.toLowerCase() < b.modelo.toLowerCase() ? 1 :  -1;
  });
}

const ascendingPrizes = products =>{
  products.sort((a, b) => {
    return Number(a.precio) < Number(b.precio) ? 1 :  -1;
  });
}

const descendingPrizes = products =>{
  products.sort((a, b) => {
    return Number(a.precio) > Number(b.precio) ? 1 :  -1;
  });
}

const ascendingStock = products =>{
  products.sort((a, b) => {
    return Number(a.stock) < Number(b.stock) ? 1 :  -1;
  });
}

const descendingStock = products =>{
  products.sort((a, b) => {
    return Number(a.stock) > Number(b.stock) ? 1 :  -1;
  });
}

const order = products =>{
  const options = document.querySelectorAll('option');

     if (options[0].selected){
      ascendingOrder(products);
     } else if (options[1].selected){
      descendingOrder(products);
     } else if (options[2].selected){
      ascendingPrizes(products);
     } else if (options[3].selected){
      descendingPrizes(products);
     } else if (options[4].selected) {
      ascendingStock(products);
     } else {
      descendingStock(products);
     }

  return products;
}

export default order;
