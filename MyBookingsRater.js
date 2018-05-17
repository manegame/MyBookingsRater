// variables for displaying values to the user
let aggregateRating

// namespace `rater` for all classes
let parent = null

let star = '<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg"><g><title>background</title><rect fill="none" id="canvas_background" height="202" width="202" y="-1" x="-1"/></g><g><path stroke="#000" id="svg_1" d="m2,76.4187l74.70501,0l23.08442,-70.96948l23.08444,70.96948l74.705,0l-60.43751,43.86105l23.08562,70.96948l-60.43754,-43.86224l-60.43753,43.86224l23.08562,-70.96948l-60.43753,-43.86105z" stroke-opacity="null" stroke-width="1.5" fill="none"/></g></svg>'
let allStar = '<?xml version="1.0"?><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="Layer_1" data-name="Layer 1" viewBox="0 0 556.67 100"><defs><style>.cls-1{fill:none;}.cls-2{clip-path:url(#clip-path);}</style><clipPath id="clip-path"><path class="cls-1" d="M52.7.41l16,32.52,35.89,5.21-26,25.32L84.8,99.2,52.7,82.33,20.6,99.2l6.13-35.74L.76,38.14l35.89-5.21Zm96.54,32.52-35.89,5.21,26,25.32L133.19,99.2l32.1-16.87,32.1,16.87-6.13-35.74,26-25.32-35.89-5.21L165.29.41Zm112.59,0-35.89,5.21,26,25.32L245.78,99.2l32.1-16.87L310,99.2l-6.13-35.74,26-25.32-35.89-5.21L277.88.41Zm112.59,0-35.89,5.21,26,25.32L358.37,99.2l32.1-16.87,32.1,16.87-6.13-35.74,26-25.32-35.89-5.21L390.47.41Zm112.59,0-35.89,5.21,26,25.32L471,99.2l32.1-16.87,32.1,16.87L529,63.46l26-25.32-35.89-5.21L503.06.41Z"/></clipPath></defs><title>starzArtboard 1</title><g class="cls-2"><rect id="progress" width="557" height="100"/></g></svg>'


// define global style variables
const bookingStyles = {
  blue: '#2fa2f2'
}

// Create the XHR object.
function createCORSRequest(method, url) {
  var xhr = new XMLHttpRequest();
  if ("withCredentials" in xhr) {
    // XHR for Chrome/Firefox/Opera/Safari.
    xhr.open(method, url, true);
  } else if (typeof XDomainRequest != "undefined") {
    // XDomainRequest for IE.
    xhr = new XDomainRequest();
    xhr.open(method, url);
  } else {
    // CORS not supported.
    xhr = null;
  }
  return xhr;
}

// Make the actual CORS request.
function makeCorsRequest() {
  // This is a sample server that supports CORS.
  var url = '/rating.json';
  // This should support CORS in order to work
  // var url = 'https://www.mybookings.com/test/rating.json';

  var xhr = createCORSRequest('GET', url);
  if (!xhr) {
    alert('CORS not supported');
    return;
  }

  // Response handlers.
  xhr.onload = function() {
    let result = JSON.parse(this.responseText)
    display(result)
  };

  xhr.onerror = function() {
    alert('Woops, there was an error making the request.');
  };

  xhr.send();
}

// Initiate the widget!
function init() {
  parent = document.getElementById('rater')
  insert()
}

function addValues(id, value) {
  document.getElementById(id).innerHTML = value
}

function insert() {
  let rater = document.createElement('div')
  let rating = document.createElement('div')
  let stars = document.createElement('div')
  let average = document.createElement('p')

  rater.classList.add('rater-container')
  rater.style.cssText = ''
    + 'width: 100%;'
    + 'height: 100%;'

  rating.id = 'rating'
  stars.id = 'stars'
  // for (let i = 0; i < 5; i ++) {
  //   let starContainer = document.createElement('div')
  //   starContainer.classList.add('star', 'star--' + (i + 1) + '')
  //   starContainer.innerHTML = star
  //   stars.appendChild(starContainer)
  // }
  let starContainer = document.createElement('div')
  starContainer.innerHTML = allStar
  stars.appendChild(starContainer)

  average.id = 'average'

  rater.appendChild(rating)
  rater.appendChild(stars)
  rater.appendChild(average)
  parent.appendChild(rater)
  makeCorsRequest()
}

function display(result) {
  addValues('average', 'Average score: ' + result.aggregateRating.ratingValue + ' based on: ' + result.aggregateRating.reviewCount + ' reviews')
  let progress = document.getElementById('progress')
  let full = progress.getBoundingClientRect()
  progress.setAttribute("width", (577 / 5) * Number(result.aggregateRating.ratingValue));

}

document.addEventListener('DOMContentLoaded', init)