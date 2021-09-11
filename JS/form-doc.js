"use strict";

const formDoc = document.querySelector('.form-doc');
const formName = document.querySelector('#name');
const formLastName = document.querySelector('#last-name');
const formPhone = document.querySelector('#phone');
const formCity = document.querySelector('#city');
const formEducation = document.querySelector('#education');
const formUserText = document.querySelector('#about');
const userFile = document.querySelector('#userFile');

let resultDoc = document.querySelector('#resultDoc');

formDoc.addEventListener('submit', function (e) {
  e.preventDefault();
  if (formName.value) {
    resultDoc.innerHTML = '<h2 class="document__title">' + 'Candidate for the position Frontend Developer' + '</h2>' +
    '<p class="document__text">' + '<b>Name:</b> ' + formName.value +'</p>' + 
    '<p class="document__text">' + '<b>Last name:</b> ' + formLastName.value + '</p>' +
    '<p class="document__text">' + '<b>Phone number:</b> ' + formPhone.value + '</p>' +
    '<p class="document__text">' + '<b>Home address:</b> ' + formCity.value + '</p>' +
    '<p class="document__text">' + '<b>Has an education:</b> ' + formEducation.value + '</p>' +
    '<p class="document__text">' + '<b>About you:</b> ' + formUserText.value + '</p>';
    formDoc.reset();
  }
});