import fetch from 'node-fetch'
import star1 from './star.svg'

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

    raterElement.innerHTML = star1
  
    console.dir(raterElement)

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
