let userScore
let ratingLocked = false

function hoverStar(event) {
  let classes = event.target.classList
  let rect = event.target.getBoundingClientRect()
  let parent = event.target.parentNode.parentNode.parentNode
  let container = document.getElementById('MyBookingsStars') // this is the mb_rating__stars element
  let value = Number(parent.getAttribute('value'))

  if (!ratingLocked) {
    if (event.type === 'mousemove') {
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
    else if (event.type === 'mouseout') {
      if (classes.contains('star_svg')) {
        if (event.clientX < rect.x + rect.width / 2) {
          classes.remove('half')
          classes.add('none')
          container.setAttribute('value', value)
        } else {
          // console.log('already filled')
        }
      }
    }
  }
  setScore()
}

function setScore() {
  userScore = Number(document.getElementById('MyBookingsStars').getAttribute('value'))
  document.getElementById('MyBookingsScore').innerHTML = document.getElementById('MyBookingsStars').getAttribute('value')
}

function lockRating () {
  ratingLocked = !ratingLocked
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

export { hoverStar, lockRating, submitRating }