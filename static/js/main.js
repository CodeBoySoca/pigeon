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

if(window.location.pathname.split('/')[1] === 'calendar'){
  document.querySelector('.calendar > button').addEventListener('click', calendarForm)
  document.querySelector('.overlay a').addEventListener('click', fadeWindow) 

 function fadeWindow(){
    anime({
      targets: '.overlay',
      opacity: [1, 0],
      duration: 3000
    })
 }
}

function calendarForm() {
  document.querySelector('.overlay').style.display='block'
  let calendarDiv = document.createElement('div')
  let h3 = document.createElement('h3')
  let form = document.createElement('form')
  let calendarDate = document.createElement('input')
  let event = document.createElement('input')
  let editButton = document.createElement('input')
  let saveButton = document.createElement('input')

  calendarDiv.setAttribute('id', 'calendar-container')
  form.setAttribute('method', 'post')
  calendarDate.setAttribute('type', 'date')
  calendarDate.setAttribute('placeholder', 'Start date')
  calendarDate.setAttribute('id', 'calendar-date')
  event.setAttribute('type', 'text')
  event.setAttribute('id', 'event')
  editButton.setAttribute('type', 'button')
  saveButton.setAttribute('type', 'button')
  editButton.setAttribute('value', 'Edit')
  editButton.setAttribute('id', 'edit')
  saveButton.setAttribute('value', 'Save')
  saveButton.setAttribute('id', 'save-button')
  event.setAttribute('name', 'event')
  event.setAttribute('placeholder', 'Add event')
  h3.innerHTML='Calendar Event'
  
  document.querySelector('.overlay').appendChild(calendarDiv)
  document.querySelector('#calendar-container').appendChild(h3)
  document.querySelector('#calendar-container').appendChild(form)
  document.querySelector('#calendar-container form').appendChild(calendarDate)
  document.querySelector('#calendar-container form').appendChild(event)
  document.querySelector('#calendar-container form').appendChild(editButton)
  document.querySelector('#calendar-container form').appendChild(saveButton)

  document.querySelector('#save-button').addEventListener('click', addCalendarEvent) 
}

function addCalendarEvent() {
   let calendarDate = new Date(document.querySelector('#calendar-date').value).getDate()
   let calendarEvent = document.querySelector('#event').value
  

   const cells = document.querySelectorAll('td');
   cells.forEach(function(cell) {
      if(cell.innerHTML == calendarDate){
          localStorage.setItem('event', calendarEvent)
          document.querySelector('.overlay').style.opacity='0'
          cell.insertAdjacentHTML('beforeend', `<span>${localStorage.getItem('event')}</span>`)

      }  
    })
}

document.querySelector('.search-contacts input').addEventListener('keyup', (e) => {
   //let contactList = document.querySelector('.contacts ')
   e.preventDefault()
   if(e.key === 'Enter') {
      let contact = e.currentTarget.value
       
   }

})


document.querySelector('.search-inbox input').addEventListener('keyup', (e) => {
  //let contactList = document.querySelector('.contacts ')
  e.preventDefault()
  if(e.key === 'Enter') {
     let inbox = e.currentTarget.value
      
  }

})


// document.querySelectorAll('.contacts').forEach(  el => {

//     document.querySelector('#remove').addEventListener('click', (e) => {
//        //e.preventDefault()
//        let v = document.querySelector('.contacts').getAttribute('data-value')
//         anime({
//           targets: el.classList.remove('contacts'),
//           translateX: -400,
//           easing: 'easeInOutExpo'
//         })
//     })

// })
