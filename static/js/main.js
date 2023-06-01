 const date = new Date()
 let day = date.getDate()


const cells = document.querySelectorAll('td');
cells.forEach(function(cell) {
  if(cell.innerHTML == day){
      cell.setAttribute('id', 'selectedItem')
  }  
})










if(window.location.pathname.split('/')[2] === 'inbox' || window.location.pathname.split('/')[2] === 'sent' || window.location.pathname.split('/')[2] === 'draft'){
    document.querySelector('.contact-content > h2').textContent=document.querySelector('.contacts ul li:first-of-type').textContent
    document.querySelector('.contact-content > p').textContent=document.querySelector('.contacts ul li:nth-child(2)').textContent
    document.querySelector('.main-content-window > p:nth-child(1)').textContent=document.querySelector('.message-date-visibility').textContent
    document.querySelector('.main-content-window > p:nth-child(2)').textContent=document.querySelector('.message-visibility').textContent

    let contacts = document.querySelectorAll('.contacts')

    for(var i = 0; i < contacts.length; i++){
      contacts[i].addEventListener('click', (e) => {
          document.querySelector('.contact-content > h2').textContent=e.currentTarget.querySelector('.contacts ul li:first-of-type').textContent
          document.querySelector('.contact-content > p').textContent=e.currentTarget.querySelector('.contacts ul li:nth-child(2)').textContent
          document.querySelector('.main-content-window > p:nth-child(1)').textContent=e.currentTarget.querySelector('.message-date-visibility').textContent
          document.querySelector('.main-content-window > p:nth-child(2)').textContent=e.currentTarget.querySelector('.message-visibility').textContent
      })
    }

}

if(window.location.pathname.split('/')[1] === 'contacts'){
    document.querySelector('.contact-details > h2').textContent=document.querySelector('.contacts ul li:first-of-type').textContent
    document.querySelector('.contact-details > p').textContent=document.querySelector('.contacts ul li:nth-child(2)').textContent
    document.querySelector('.contact-details ul li:first-of-type').textContent=document.querySelector('.message-visibility.email').textContent
    document.querySelector('.contact-details ul li:nth-child(2)').textContent=document.querySelector('.message-visibility.telephone').textContent
    document.querySelector('.contact-details ul li:nth-child(3)').textContent=document.querySelector('.message-visibility.website').textContent
    document.querySelector('.note').textContent=document.querySelector('.message-visibility.notes').textContent
    
    let contacts = document.querySelectorAll('.contacts')

    for(var i = 0; i < contacts.length; i++){
      contacts[i].addEventListener('click', (e) => {
          document.querySelector('.contact-details > h2').textContent=e.currentTarget.querySelector('.contacts ul li:first-of-type').textContent
          document.querySelector('.contact-details > p').textContent=e.currentTarget.querySelector('.contacts ul li:nth-child(2)').textContent
          document.querySelector('.contact-details ul li:first-of-type').textContent=e.currentTarget.querySelector('.message-visibility.email').textContent
          document.querySelector('.contact-details ul li:nth-child(2)').textContent=e.currentTarget.querySelector('.message-visibility.telephone').textContent
          document.querySelector('.contact-details ul li:nth-child(3)').textContent=e.currentTarget.querySelector('.message-visibility.website').textContent
          document.querySelector('.note').textContent=e.currentTarget.querySelector('.message-visibility.notes').textContent
      })
    }
}







