import { data } from '../../globals'
import { submitRating } from './service'

function setStars() {
  if (!data.mouseIsOverStars) {
    // get rating and if it's close to half or full
    let fullAmount = Math.floor(data.initialRating)
    let restAmount = data.initialRating % fullAmount
    let restClass
    
    if (restAmount < 0.24) {
      restClass = 'none'
    } else if (restAmount > 0.25 && restAmount < 0.74) {
      restClass = 'half'
    } else if (restAmount > 0.75) {
      restClass = 'full'
    }
  
    let container = document.getElementById('MyBookingsStars')
    container.querySelectorAll('.star_svg').forEach((star, index) => {
      index += 1 // base 1
      if (index <= fullAmount) {
        star.classList.remove('none', 'half', 'full')
        star.classList.add('full')
      } 
      else if (index === fullAmount + 1) {
        star.classList.remove('none', 'half', 'full')
        star.classList.add(restClass)
      } 
      else {
        star.classList.remove('full', 'half')
        star.classList.add('none')
      }
    })
  }
}

function hoverStar(event) {
  let classes = event.target.classList
  let rect = event.target.getBoundingClientRect()
  let parent = event.target.parentNode.parentNode.parentNode
  let container = document.getElementById('MyBookingsStars') // this is the mb_rating__stars element
  let value = Number(parent.getAttribute('value'))

  if (!data.ratingLocked) {
    if (classes.contains('star_svg')) {
      // hovered star
      if (event.clientX < rect.x + rect.width / 2) {
        classes.remove('none', 'full')
        classes.add('half')
        container.setAttribute('value', value - 0.5)
      } else {
        classes.remove('none', 'half')
        classes.add('full')
        container.setAttribute('value', value)
      }
      // left and right of hovered star
      container.querySelectorAll('.star_svg').forEach(el => {
        let childValue = el.parentNode.parentNode.parentNode.getAttribute('value')
        let childClasses = el.classList
        if (childValue < value) {
          childClasses.remove('none', 'half')
          childClasses.add('full')
        }
        else if (childValue > value) {
          childClasses.remove('full', 'half')
          childClasses.add('none')
        }
      })
    }
  }
  setScore()
}

function setScore() {
  data.userScore = Number(document.getElementById('MyBookingsStars').getAttribute('value'))
}

function lockRating () {
  if (!data.ratingLocked) {
    data.ratingLocked = true
    submitRating()
  }
}

function notify (status, message) {
  let el = document.getElementById('MyBookingsMessage')
  el.classList.remove('warning', 'success', 'error')
  el.classList.add(status, 'active')
  el.innerHTML = message
  window.setTimeout(() => {
    el.classList.remove('active')
  }, 3000)
}

export { hoverStar, lockRating, setStars, notify }