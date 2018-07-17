import { hoverStar, lockRating, setStars } from './assets/js/interaction'
import { submitRating, setInitialRating } from './assets/js/service'
import styleSheet from './assets/style/style.scss' // gets added by webpack
import template from "html-loader?interpolate!./assets/template.html"
import { data } from './globals'

function rater() {
  data.raterElement = document.getElementById('MyBookingsRater')
  data.hotelID = data.raterElement.dataset.hotelId

  console.log('initializing rater for hotel ' + data.hotelID)

  if (data.raterElement === undefined || data.raterElement === null) {
    return
  } else {
    data.raterElement.innerHTML = template
    return data.raterElement
  }
}

function addEventListeners () {
  const stars = document.querySelectorAll('.mb_rating__stars__star')
  const starContainer = document.getElementById('MyBookingsStars')
  const form = document.getElementById('MyBookingsForm')
  
  stars.forEach(star => { 
    // star.addEventListener('mouseover', hoverStar)
    star.addEventListener('mousemove', hoverStar)
    star.addEventListener('click', lockRating)
  })
  starContainer.addEventListener('mouseout', setStars)
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    submitRating()
  })
}

window.onload = () => {
  if (typeof rater() === 'undefined') {
    console.log('MyBookings error. Please add `<div id="MyBookingsRater" data-hotel-id="YOUR_HOTEL_ID"></div>` where you want the rater to show up and make sure to replace YOUR_HOTEL_ID with the id provided to you by MyBookings')
  } else {
    document.body.appendChild(rater())
    addEventListeners()
    setInitialRating()
  }
}
