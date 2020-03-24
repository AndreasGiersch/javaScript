"use strict";

// selecting elements to change after clicking the `toggleButton`
var toggleButton = document.querySelector('#toggle');
var title = document.querySelector('#title');
var css = document.querySelector('#css');
var prompt = document.querySelector('#prompt');
var id = document.querySelector('#logo'); // re-assigning values to elements that are changing

var renderToggle = function renderToggle() {
  if (title.innerHTML === 'Word Smith') {
    title.innerHTML = 'byteSize';
    css.href = 'public/byteSizeStyle.css';
    id.src = 'https://s3.amazonaws.com/codecademy-content/courses/intermediate-javascript-requests/bytesize_logo.svg';
    prompt.innerHTML = 'Enter a URL';
    toggle.innerHTML = 'Switch to GET requests!';
  } else {
    title.innerHTML = 'Word Smith';
    css.href = 'public/wordSmithStyle.css';
    id.src = 'https://s3.amazonaws.com/codecademy-content/courses/intermediate-javascript-requests/wordsmith_logo.svg';
    prompt.innerHTML = 'Enter a Word';
    toggle.innerHTML = 'Switch to POST requests!';
  } // clearing previous input


  inputField.value = '';

  while (responseField.firstChild) {
    responseField.removeChild(responseField.firstChild);
  }
}; // adding the event handler to `toggleButton`


toggleButton.addEventListener('click', renderToggle);