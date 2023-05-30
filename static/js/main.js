 const date = new Date()
 let day = date.getDate()


const cells = document.querySelectorAll('td');
cells.forEach(function(cell) {
  if(cell.innerHTML == day){
      cell.setAttribute('id', 'selectedItem')
  }  
})


document.querySelector('.contact-content > h2').textContent=document.querySelector('.contacts ul li:first-of-type').textContent
document.querySelector('.contact-content > p').textContent=document.querySelector('.contacts ul li:nth-child(2').textContent
document.querySelector('.main-content-window > p:nth-child(1)').textContent=document.querySelector('.message-date-visibility').textContent
document.querySelector('.main-content-window > p:nth-child(2)').textContent=document.querySelector('.message-visibility').textContent


let contacts = document.querySelectorAll('.contacts')

for(var i = 0; i < contacts.length; i++){
   contacts[i].addEventListener('click', (e) => {
      document.querySelector('.contact-content > h2').textContent=e.currentTarget.querySelector('.contacts ul li:first-of-type').textContent
      document.querySelector('.contact-content > p').textContent=e.currentTarget.querySelector('.contacts ul li:nth-child(2').textContent
      document.querySelector('.main-content-window > p:nth-child(1)').textContent=e.currentTarget.querySelector('.message-date-visibility').textContent
      document.querySelector('.main-content-window > p:nth-child(2)').textContent=e.currentTarget.querySelector('.message-visibility').textContent
    
   })
}