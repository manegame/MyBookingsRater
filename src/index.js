import fetch from 'node-fetch'
import styleSheet from './assets/style/style.scss' // gets added by webpack
let template = require("html-loader?interpolate!./assets/template.html")

let form,
    userScore,
    ratingLocked = false

function hoverStar(event) {
  let classes = event.target.classList
  let rect = event.target.getBoundingClientRect()
  let parent = event.target.parentNode.parentNode.parentNode
  let container = document.getElementById('MyBookingsStars') // this is the mb_rating__stars element

  if (!ratingLocked) {
    if (event.type === 'mousemove') {
      if (classes.contains('star_svg')) {
        if (event.clientX < rect.x + rect.width / 2) {
          classes.remove('none', 'full')
          classes.add('half')
          container.setAttribute('value', Number(parent.getAttribute('value') - 0.5))
        } else {
          classes.remove('none', 'half')
          classes.add('full')
          container.setAttribute('value', Number(parent.getAttribute('value')))
        }
      }
    }
    else if (event.type === 'mouseout') {
      if (classes.contains('star_svg')) {
        if (event.clientX < rect.x + rect.width / 2) {
          classes.remove('half')
          classes.add('none')
          container.setAttribute('value', Number(parent.getAttribute('value')))
        } else {
          // console.log('already filled')
        }
      }
    }
  }
  setScore()
}

function lockRating () {
  ratingLocked = !ratingLocked
}

function setScore() {
  document.getElementById('MyBookingsScore').innerHTML = document.getElementById('MyBookingsStars').getAttribute('value')
}

function submitRating() {
  let userFormData = {
    score:    userScore * 2, // make base 10
    hotel_id: 1
  }

  console.dir(userFormData)

  fetch('https://api.mybookings.com/rate.php', { 
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify(userFormData)
  })
      .catch(err => console.error(err))
      .then(res => res.json())
      .then(json => console.log(json))
}

function rater() {
  const raterElement = document.getElementById('rater')

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

    fetch('https://api.mybookings.com/json/rating.json')
      .catch(err => console.error(err))
      .then(res => res.json())
      .then(json => {
        console.log(json)
      })

    return raterElement
  }
}

function addEventListeners () {
  let stars = document.querySelectorAll('.mb_rating__stars__star')
  stars.forEach(star => { 
    console.log('star ', star)
    star.addEventListener('mouseover', hoverStar)
    star.addEventListener('mousemove', hoverStar)
    star.addEventListener('mouseout', hoverStar)
    star.addEventListener('click', lockRating)
  })
}

window.onload = () => {
  if (typeof rater() === 'undefined') {
    console.log('MyBookings error. Please add `<div id="rater"></div>` where you want the template to show up')
  } else {
    document.body.appendChild(rater())
    addEventListeners()
  }
}
