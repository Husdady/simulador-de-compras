import celulares from '../json/celulares';

const categoryFilter = () =>{
  const checkboxes = document.querySelectorAll('input[type="checkbox"]'),checkboxesChecked = document.querySelectorAll('input[type="checkbox"]:checked'), select = document.querySelector("select"), range = document.getElementById('set-range-prize');

  select.removeAttribute('disabled');
  range.removeAttribute('disabled');

  if (checkboxes.length === checkboxesChecked.length || checkboxes[0].checked){
    return celulares;
  }

  else if (checkboxesChecked.length !== 0){
    
    return celulares.filter(item=> {
      for (let input of checkboxesChecked){
        if (item.modelo.toLowerCase().indexOf(input.id.toLowerCase()) !== -1){
          return item;
        }
      }
    })

  } else {
    select.setAttribute('disabled', true);
    range.setAttribute('disabled', true);
    return [];
  }
}

export default categoryFilter;