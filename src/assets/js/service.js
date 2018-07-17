import fetch from 'node-fetch'
import { data } from '../../globals'
import { setStars } from './interaction'

function updateRating (json) {
  if (json) {
    console.log('update rating', json)
    data.initialRating = json.aggregateRating.ratingValue / 2
    data.reviewCount = json.aggregateRating.reviewCount
  } else {
    console.log('nothing new, use old data')
  }
  // display
  console.log('display rating')
  let initalRatingElement = document.getElementById('MyBookingsAverage')
  let reviewCountElement = document.getElementById('MyBookingsReviewcount')
  initalRatingElement.innerHTML = data.initialRating
  reviewCountElement.innerHTML = data.reviewCount
  setStars()
}

function submitRating() {
  let userFormData = {
    score:    data.userScore * 2, // make base 10
    hotel_id: 1
  }

  fetch('https://api.mybookings.com/rate.php', { 
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify(userFormData)
  })
      .catch(err => console.error(err))
      .then(res => res.json())
      .then(json => updateRating(json))
}

function setInitialRating() {
  fetch('https://api.mybookings.com/json/MyBookingsClient-' + data.hotelID + '.json')
    .catch(err => console.error(err))
    .then(res => res.json())
    .then(json => updateRating(json))
    .then(setStars())
}

export { submitRating, setInitialRating }