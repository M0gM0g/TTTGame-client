'use script'
const store = require('./store')

const clearMessages = function () {
  $('.messages').empty()
}

const clearGetGamesMessage = function () {
  $('.get-games-message').empty()
}

const signUpSuccess = function (data) {
  $('#sign-up-form').hide()
  $('#sign-up').hide()
  $('.messages').html('You have successfully signed up! Please log in!')
  $('#sign-in-form, #sign-in, #sign-up, #sign-up-form, #change-password-form').trigger('reset')
  setTimeout(clearMessages, 4000)
}

const signUpError = function (event) {
  $('.messages').html('There was an error signing up! Please try again.')
  $('#sign-in-form, #sign-in, #sign-up, #sign-up-form, #change-password-form').trigger('reset')
}

const signInSuccess = function (data) {
  store.user = data.user
  $('#sign-in-form, #sign-in, #sign-up, #sign-up-form').hide()
  $('#change-password').show()
  $('.messages').html('Welcome to Tic-Tac-Toe! Click New Game to Play! X goes first!')
  $('#sign-out').show()
  $('#change-password-form').show()
  $('#start-button').show()
  $('#sign-in-form, #sign-in, #sign-up, #sign-up-form, #change-password-form').trigger('reset')
  $('#get-games').show()
}

const signInError = function (response) {
  $('.messages').html('Ooops! There was a problem signing in. Try again')
  $('#sign-in-form, #sign-in, #sign-up, #sign-up-form, #change-password-form').trigger('reset')
  setTimeout(clearMessages, 3000)
}

const changePasswordSuccess = function (data) {
  $('.get-games-message').html('You successfully changed your password!')
  setTimeout(clearGetGamesMessage, 4000)
  // $('.messages').html('Welcome to Tic-Tac-Toe, Player X! Click New Game to Play!')
  // setTimeout(clearMessages, 5000)
  $('#sign-in-form, #sign-in, #sign-up, #sign-up-form, #change-password-form').trigger('reset')
  // $('#change-password').hide()
  // $('#change-password-form').hide()
  // $('#change-password-button-only').show()
}

const changePasswordFailure = function (response) {
  $('.get-games-message').html('Ooops! Something went wrong, please try again')
  setTimeout(clearGetGamesMessage, 4000)
  $('#sign-in-form, #sign-in, #sign-up, #sign-up-form, #change-password-form').trigger('reset')
}

const signOutSuccess = function (response) {
  $('.messages').html('You have successfully signed out! Please sign up or log in to play!')
  $('#start-button').hide()
  $('#change-password').hide()
  $('#change-password-form').hide()
  $('.change-password-button-only').hide()
  $('#sign-out').hide()
  $('.get-games').hide()
  $('.row').hide()
  $('#get-games').hide()
  delete store.user
  $('#sign-in-form, #sign-in, #sign-up, #sign-up-form, #change-password-form').trigger('reset')
  setTimeout(clearMessages, 4000)
  $('#sign-up-form').show()
  $('#sign-in-form').show()
}

// const signOutFailure = function (error) {
// }

const clickPasswordButton = function (event) {
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
  // console.log(data.games.id)
}

const createGameFailure = function (response) {
  $('.messages').html('Oooops, something went wrong! Try again')
  setTimeout(clearMessages, 5000)
}

const getGamesSuccess = function (data) {
  $('.get-games-message').html('You have played ' + data.games.length + ' games!')
  setTimeout(clearGetGamesMessage, 4000)
}
// const getGamesSuccess = function (data) {
//   store.game = data.game
//   store.game.id = data.game.id
//   store.game.cells = data.game.cells
//   store.game.over = data.game.over
//   console.log('get game data is ' + data.game)
// }

const getGamesFailure = function (response) {
  $('.messages').html('Oooops, something went wrong! Try again')
  setTimeout(clearMessages, 4000)
}

const updateGamesSuccess = function (data) {
  store.game = data.game
  store.game.id = data.game.id
  store.game.cells = data.game.cells
  store.game.over = data.game.over
}

// const updateGamesFailure = function (response) {
//   console.log('this didnt work' + error)
// }
module.exports = {
  signUpSuccess: signUpSuccess,
  signUpError: signUpError,
  signInSuccess: signInSuccess,
  signInError: signInError,
  changePasswordSuccess: changePasswordSuccess,
  changePasswordFailure: changePasswordFailure,
  signOutSuccess: signOutSuccess,
  // signOutFailure: signOutFailure,
  clickPasswordButton: clickPasswordButton,
  createGameSuccess: createGameSuccess,
  createGameFailure: createGameFailure,
  getGamesSuccess: getGamesSuccess,
  getGamesFailure: getGamesFailure,
  // updateGamesFailure: updateGamesFailure,
  updateGamesSuccess: updateGamesSuccess
}
