'use strict'
const getFormFields = require('../../lib/get-form-fields')
const authApi = require('./api')
const authUi = require('./ui')
const store = require('./store')
// const boxSelected = require('./index')

const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)

  authApi.signUp(data)
    .then(authUi.signUpSuccess)

    .catch(authUi.signUpError)
}

const onSignIn = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)

  authApi.signIn(data)
    .then(authUi.signInSuccess)
    .catch(authUi.signInError)
}

const onChangePassword = function (event) {
  event.preventDefault()

  const data = getFormFields(event.target)
  authApi.changePassword(data)
    .then(authUi.changePasswordSuccess)
    .catch(authUi.changePasswordFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  authApi.signOut()
    .then(authUi.signOutSuccess)
    .catch(authUi.signOutFailure)
}

const onClickChangePasswordButton = function (event) {
  event.preventDefault()
  authUi.clickPasswordButton()
}

const onCreateGame = function (event) {
  event.preventDefault()
  authApi.createGame()
    .then(authUi.createGameSuccess)
    .catch(authUi.createGameFailure)
}

const onGetGames = function (event) {
  const data = {
    'game': {
      'id': '',
      'cells': ['', '', '', '', '', '', '', '', ''],
      'over': store.gameOver,
      'player_x': {
        'id': store.user.id,
        'email': store.user.email
      },
      'player_o': {
        'id': '',
        'email': ''
      }
    }
  }
  event.preventDefault()
  authApi.getGames(data)
    .then(authUi.getGamesSuccess)
    .catch(authUi.getGamesFailure)
}

const onUpdateGame = function (event) {
  const data = {
    'game': {
      'cell': {
        'index': store.index,
        'value': store.cells
      },
      'over': store.gameOver
    }
  }
  event.preventDefault()
  authApi.updateGame(data)
    .then(authUi.updateGamesSuccess)
    .catch(authUi.updateGamesFailure)
}

module.exports = {
  onSignUp: onSignUp,
  onSignIn: onSignIn,
  onChangePassword: onChangePassword,
  onSignOut: onSignOut,
  onClickChangePasswordButton: onClickChangePasswordButton,
  onCreateGame: onCreateGame,
  onGetGames: onGetGames,
  onUpdateGame: onUpdateGame
}
