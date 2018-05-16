// variables for displaying values to the user
let aggregateRating

// namespace `rater` for all classes
let parent = null

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
  var url = 'http://192.168.1.3:9000/json-example/rating.json';

  var xhr = createCORSRequest('GET', url);
  if (!xhr) {
    alert('CORS not supported');
    return;
  }

  // Response handlers.
  xhr.onload = function() {
    let result = JSON.parse(this.responseText)
    aggregateRating = result.aggregateRating.ratingValue
    addValues('text', aggregateRating)
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
  let text = document.createElement('p')

  rater.classList.add('rater-container')
  rater.style.cssText = ''
    + 'background: ' + bookingStyles.blue + ';'
    + 'width: 100%;'
    + 'height: 100%;'

  text.id = 'text'

  rater.appendChild(text)
  parent.appendChild(rater)
  makeCorsRequest()
}

document.addEventListener('DOMContentLoaded', init)