'use script'
const store = require('/Users/markoleary/wdi/projects/TTTGame-client/assets/scripts/store')

const clearMessages = function () {
  $('#messages').empty()
}

const signUpSuccess = function (signUpResponse) {
  console.log('signUpResponse is ', signUpResponse)
  $('#sign-up-form').hide()
  $('#change-password-button-only').hide()
  $('#sign-up').hide()
  $('#messages').html('You have successfully signed up! Please sign in!')
  setTimeout(clearMessages, 5000)
}

const signUpError = function (error) {
  console.log('Error in sign up is ', error)
  $('#messages').html('There was an error signing up! Please try again.')
}

const signInSuccess = function (response) {
  console.log('signInResponse is ', response)
  store.user = response.user

  $('#start-button').show()
  $('#change-password-button-only').show()
  $('#sign-in-form, #sign-in, #sign-up, #sign-up-form').hide()
  $('.get-games').show()
  $('#messages').html("Welcome to Tic-Tac-Toe! Let's Play")
  setTimeout(clearMessages, 5000)
}

const signInError = function (error) {
  console.error('signInError is ', error)
  $('#messages').html('Ooops! There was a problem signing in.')
  setTimeout(clearMessages, 5000)
}

const changePasswordSuccess = function (response) {
  console.log('You successfully changed your password')
  $('#messages').html('You successfully changed your password!')
  setTimeout(clearMessages, 5000)
  $('#change-password-form').trigger('reset')
  $('#change-password').hide()
  $('#change-password-form').hide()
  $('#change-password-button-only').show()
}

const changePasswordFailure = function (error) {
  console.error('Something went wrong. Error :', error)
}

const signOutSuccess = function (response) {
  console.log('You have signed out')
  delete store.user
}

const signOutFailure = function (error) {
  console.error('There was an error signing you out, here it is :', error)
}

const clickPasswordButton = function (event) {
  console.log('This is the event ', event)
  $('#change-password').show()
  $('#change-password-form').show()
  $('#change-password-button-only').hide()
}

const createGameSuccess = function (data) {
  console.log('this worked! ', data)
  store.game = data.game
  store.game.id = data.game.id
  store.game.cells = data.game.cells
  store.game.over = data.game.over
}

const createGameFailure = function (error) {
  console.log('Could not create game : ', error)
}

const getGameSuccess = function (data) {
  store.game = data.game
  store.game.id = data.game.id
  store.game.cells = data.game.cells
  store.game.over = data.game.over
  console.log('get game data is ', data)
}

const getGameFailure = function (error) {
  console.log('error with this ', error)
}

module.exports = {
  signUpSuccess: signUpSuccess,
  signUpError: signUpError,
  signInSuccess: signInSuccess,
  signInError: signInError,
  changePasswordSuccess: changePasswordSuccess,
  changePasswordFailure: changePasswordFailure,
  signOutSuccess: signOutSuccess,
  signOutFailure: signOutFailure,
  clickPasswordButton: clickPasswordButton,
  createGameSuccess: createGameSuccess,
  createGameFailure: createGameFailure,
  getGameSuccess: getGameSuccess,
  getGameFailure: getGameFailure
}
