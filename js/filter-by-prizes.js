import celulares from '../json/celulares.json';

const filterPrizes = () =>{
  const minValue = document.querySelectorAll('input[type="number"]')[0].value,
  maxValue = document.querySelectorAll('input[type="number"]')[1].value,
  checkboxes = document.querySelectorAll('input[type="checkbox"]');
  let countCategoryCheckbox, items;
  items = celulares.filter(item => {
    let filter = Number(item.precio) >= Number(minValue) && Number(item.precio) <= Number(maxValue); 
    if (filter){ countCategoryCheckbox += item.modelo } else {
      countCategoryCheckbox += ''
    }
    return filter;
  }
  );

  if (countCategoryCheckbox.length !== 0){
    for (let x of checkboxes){
      if (countCategoryCheckbox.toLowerCase().indexOf(x.id) !== -1){
        x.checked = true;
      } else {
        x.checked = false;
      }
    }
  }

  return items;
}

export default filterPrizes;