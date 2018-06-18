'use script'
const store = require('./store')
const authApi = require('./api')

const clearMessages = function () {
  $('.messages').empty()
}

const signUpSuccess = function (signUpResponse) {
  console.log('signUpResponse is ', signUpResponse)
  $('#sign-up-form').hide()
  $('#sign-up').hide()
  $('.messages').html('You have successfully signed up! Please log in!')
  setTimeout(clearMessages, 5000)
}

const signUpError = function (error) {
  console.log('Error in sign up is ', error)
  $('.messages').html('There was an error signing up! Please try again.')
}

const signInSuccess = function (response) {
  store.user = response.user
  $('#sign-in-form, #sign-in, #sign-up, #sign-up-form').hide()
  $('#change-password').show()
  $('.messages').html('Welcome to Tic-Tac-Toe, Player X! Click New Game to Play!')
  $('#sign-out').show()
  $('#change-password-form').show()
  $('#start-button').show()
  $('#sign-in-form, #sign-in, #sign-up, #sign-up-form').trigger('reset')
  // authApi.getGames()
}

const signInError = function (error) {
  console.error('signInError is ', error)
  $('.messages').html('Ooops! There was a problem signing in. Try again')
  setTimeout(clearMessages, 5000)
}

const changePasswordSuccess = function (response) {
  console.log('You successfully changed your password')
  $('.messages').html('You successfully changed your password!')
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
  $('.messages').html('You have successfully signed out!')
  $('#start-button').hide()
  $('#change-password').hide()
  $('#change-password-form').hide()
  $('.change-password-button-only').hide()
  $('#sign-out').hide()
  $('.get-games').hide()
  $('.row').hide()
  delete store.user
  setTimeout(clearMessages, 5000)
  $('#sign-up-form').show()
  $('#sign-in-form').show()
}

const signOutFailure = function (error) {
  console.log(error)
  setTimeout(clearMessages, 5000)
}

const clickPasswordButton = function (event) {
  console.log('This is the event ', event)
  $('#change-password').show()
  $('#change-password-form').show()
  $('#change-password-button-only').hide()
}

const createGameSuccess = function (data) {
  store.game = data.game
  store.game.id = data.game.id
  store.game.cells = data.game.cells
  store.game.over = data.game.over
  $('.container-fluid').show()
  $('.row').show()
  $('#start-button').hide()
  clearMessages()
  console.log('this worked! ', data)
}

const createGameFailure = function (error) {
  $('.messages').html('Oooops, something went wrong! Try again')
  setTimeout(clearMessages, 5000)
  console.log('Could not create game : ', error)
}

const getGamesSuccess = function (data) {
  store.game = data.game
  store.game.id = data.game.id
  store.game.cells = data.game.cells
  store.game.over = data.game.over
  console.log('get game data is ', data.games)
}

const getGamesFailure = function (error) {
  $('.messages').html('Oooops, something went wrong! Try again')
  setTimeout(clearMessages, 5000)
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
  getGamesSuccess: getGamesSuccess,
  getGamesFailure: getGamesFailure
}
