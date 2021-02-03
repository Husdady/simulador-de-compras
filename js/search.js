import celulares from '../json/celulares';

const search = () =>{
  const seeker = document.getElementById('seeker').value,
  checkboxes = document.querySelectorAll('input[type="checkbox"]'),
  select = document.getElementsByTagName('select'),
  range = document.getElementById('set-range-prize');
  let searchList = celulares,
  countCategoryCheckbox;
    searchList = searchList.filter(item=> {
      let filter = item.modelo.toLowerCase().indexOf(seeker.toLowerCase()) !== -1;
      if (filter) countCategoryCheckbox += item.modelo;
      return filter;
    });

    range.removeAttribute('disabled');
    select[0].removeAttribute('disabled');

    if (seeker === ""){
        for (let x of checkboxes){
          x.checked = true;
        }
        return celulares;
    } else if (searchList.length === 0){
        for (let x of checkboxes){
          x.checked = false;
        }
        range.setAttribute('disabled', true);
        select[0].setAttribute('disabled', true);
        return [];
    } else {
        if (countCategoryCheckbox.length !== 0){
          for (let x of checkboxes){
            if (countCategoryCheckbox.toLowerCase().indexOf(x.id) !== -1){
              x.checked = true;
            } else {
              x.checked = false;
            }
          }
        }
        return searchList;
    }   
}

export default search;