'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')

$(() => {
  setAPIOrigin(location, config)
  $('#aboutTab').on('click', function () {
    $('#about').removeClass(' hidden')
    $('#projects').addClass(' hidden')
    $('#skills').addClass(' hidden')
    $('#contact').addClass(' hidden')
  })
  $('#projectsTab').on('click', function () {
    $('#about').addClass(' hidden')
    $('#projects').removeClass(' hidden')
    $('#skills').addClass(' hidden')
    $('#contact').addClass(' hidden')
  })
  $('#skillsTab').on('click', function () {
    $('#about').addClass(' hidden')
    $('#projects').addClass(' hidden')
    $('#skills').removeClass(' hidden')
    $('#contact').addClass(' hidden')
  })
  $('#contactTab').on('click', function () {
    $('#about').addClass(' hidden')
    $('#projects').addClass(' hidden')
    $('#skills').addClass(' hidden')
    $('#contact').removeClass(' hidden')
  })
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
