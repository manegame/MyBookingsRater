import fetch from 'node-fetch'
import star1 from './star.svg'
import widget from './widget.html'

let form,
    submit

function submitRating() {

  let userRating = document.getElementById('MyBookingsValue').value

  let userFormData = {
    score:    userRating * 2, // make base 10
    hotel_id: 1
  }

  console.dir(userFormData)

  fetch('https://api.mybookings.com/rate.php', { 
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      mode: 'cors',
      body:   JSON.stringify(userFormData)
  })
      .catch(err => console.error(err))
      .then(res => res.json())
      .then(json => console.log(json))

}

function rater() {
  
  let raterElement = document.getElementById('rater')

  if (raterElement === undefined || raterElement === null) {
    return
  } else {

    fetch('https://api.mybookings.com/json/rating.json')
      .catch(err => console.error(err))
      .then(res => res.json())
      .then(json => {
        console.log(json)
      })

    raterElement.innerHTML = widget
    form = document.getElementById('MyBookingsRater')
    form.addEventListener('submit', (e) => {
      e.preventDefault()
      submitRating()
    })
    return raterElement
  }
}

window.onload = () => {
  if (typeof rater() === 'undefined') {
    console.log('MyBookings error. Please add `<div id="rater"></div>` where you want the widget to show up')
  } else {
    document.body.appendChild(rater())
  }
}
