import fetch from 'node-fetch'
import { data } from '../../globals'
import { setStars, notify } from './interaction'

function updateRating (json) {
  if (json) {
    data.initialRating = json.aggregateRating.ratingValue / 2
    data.reviewCount = json.aggregateRating.reviewCount
  }
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
      .then(res => res.json())
      .then(json => {
        if (json.error) {
          if (json.status === "duplicate_vote") {
            setStars()
            notify('warning', 'You already voted')
          } else {
            notify('error', 'An error occurred, ', json.error)
          }
        } else {
          updateRating(JSON.parse(json.json))
          notify('success', 'Thanks for voting')
        }
      })
}

function setInitialRating() {
  fetch('https://api.mybookings.com/json/MyBookingsClient-' + data.hotelID + '.json', {
    method: 'GET'
  })
    .catch(err => console.error(err))
    .then(res => res.json())
    .then(json => {
      updateRating(json)
    })
    .then(setStars())
}

export { submitRating, setInitialRating }