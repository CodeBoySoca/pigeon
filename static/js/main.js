 const date = new Date()
 let day = date.getDate()


const cells = document.querySelectorAll('td');
cells.forEach(function(cell) {
  if(cell.innerHTML == day){
      cell.setAttribute('id', 'selectedItem')
  }  
})