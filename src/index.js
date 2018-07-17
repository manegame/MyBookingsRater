import fetch from 'node-fetch'
import { hoverStar, lockRating, submitRating }  from './assets/js/interaction'
import styleSheet from './assets/style/style.scss' // gets added by webpack
import template from "html-loader?interpolate!./assets/template.html"
let raterElement,
    hotelID

function rater() {
  raterElement = document.getElementById('MyBookingsRater')
  hotelID = raterElement.dataset.hotelId

  console.log('initializing rater for hotel ' + hotelID)

  if (raterElement === undefined || raterElement === null) {
    return
  } else {
    raterElement.innerHTML = template
    return raterElement
  }
}

function setStars(rating) {
  // get rating and if it's close to half or full
  let baseFive = rating / 2 // base 10 in DB
  let fullAmount = Math.floor(baseFive)
  let restAmount = baseFive % fullAmount
  console.log('set stars!', rating, baseFive, fullAmount, restAmount)
  let container = document.getElementById('MyBookingsStars')
  console.log(container)
}

function updateRating (json) {
  console.log('update rating ', json)
  const averageRating = document.getElementById('MyBookingsAverage')
  const reviewCount = document.getElementById('MyBookingsReviewcount')
  averageRating.innerHTML = json.aggregateRating.ratingValue
  reviewCount.innerHTML = json.aggregateRating.reviewCount
  setStars(json.aggregateRating.ratingValue)
}

function setInitialRating() {
  fetch('https://api.mybookings.com/json/MyBookingsClient-' + hotelID + '.json')
    .catch(err => console.error(err))
    .then(res => res.json())
    .then(json => updateRating(json))
}

function addEventListeners () {
  const stars = document.querySelectorAll('.mb_rating__stars__star')
  const form = document.getElementById('MyBookingsForm')
  
  stars.forEach(star => { 
    star.addEventListener('mouseover', hoverStar)
    star.addEventListener('mousemove', hoverStar)
    star.addEventListener('mouseout', hoverStar)
    star.addEventListener('click', lockRating)
  })
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
