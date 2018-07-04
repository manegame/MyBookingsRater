import fetch from 'node-fetch'
import styleSheet from './assets/style/style.scss'
let template = require("html-loader?interpolate!./assets/template.html")

let form,
    stars,
    userScore

function setScore(e) {
  userScore = e.currentTarget.getAttribute('value')
  
  for (let i = 0; i < stars.length; i++) {
    stars[i].classList.remove('active')
  }

  e.currentTarget.classList.add('active')

  console.log(userScore)
}

function submitRating() {

  // let userRating = document.getElementById('MyBookingsValue').value

  let userFormData = {
    score:    userScore * 2, // make base 10
    hotel_id: 1
  }

  console.dir(userFormData)

  fetch('https://api.mybookings.com/rate.php', { 
      method: 'POST',
      mode: 'cors',
      body:   JSON.stringify(userFormData)
  })
      .catch(err => console.error(err))
      .then(res => res.json())
      .then(json => console.log(json))

}

function rater() {

  console.log("styles ", styleSheet)
  
  let raterElement = document.getElementById('rater')

  if (raterElement === undefined || raterElement === null) {
    return
  } else {
    // give raterElement the template
    raterElement.innerHTML = template
    
    form = document.getElementById('MyBookingsRater')
    
    form.addEventListener('submit', (e) => {
      e.preventDefault()
      submitRating()
    })
    
    stars = document.getElementsByClassName('mb_rating__score')

    for (let i = 0; i< stars.length; i++) {
      stars[i].addEventListener('click', setScore)
    }

    fetch('https://api.mybookings.com/json/rating.json')
      .catch(err => console.error(err))
      .then(res => res.json())
      .then(json => {
        console.log(json)
      })

    return raterElement
  }
}

window.onload = () => {
  if (typeof rater() === 'undefined') {
    console.log('MyBookings error. Please add `<div id="rater"></div>` where you want the template to show up')
  } else {
    document.body.appendChild(rater())
  }
}
