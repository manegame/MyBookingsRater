// namespace `rater` for all classes
let parent = null

// define global style variables
const bookingStyles = {
  blue: '#2fa2f2'
}

function starInteraction(event) {
  console.log(event.currentTarget)
}

function init() {
  parent = document.getElementById('rater')
  insert()
}

function insert() {
  let rater = document.createElement('div')
  let text = document.createElement('p')

  rater.classList.add('rater-container')
  rater.style.cssText = ''
    + 'background: ' + bookingStyles.blue + ';'
    + 'width: 100%;'
    + 'height: 100%;'

  text.id = 'text'

  rater.appendChild(text)
  parent.appendChild(rater)
  loadDoc()
}

function loadDoc() {
  let xhttp = new XMLHttpRequest()
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      // insert into head
      let script = document.createElement('script')
      script.type = 'application/ld+json'
      script.innerHTML = this.responseText
      document.head.appendChild(script)
      // show die shit!
      let el = document.createElement('p')
      let result = JSON.parse(this.responseText)
      console.log(result)
      el.innerHTML = result.aggregateRating.ratingValue
      document.body.appendChild(el)
    }
  }
  xhttp.open('GET', 'http://192.168.1.3:9000/json-example/rating.json', true)
  xhttp.send()
}

document.addEventListener('DOMContentLoaded', init)