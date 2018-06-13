'use strict'

const getFormFields = require('/Users/markoleary/wdi/projects/TTTGame-client/lib/get-form-fields')
const authApi = require('/Users/markoleary/wdi/projects/TTTGame-client/assets/scripts/api')
const authUi = require('/Users/markoleary/wdi/projects/TTTGame-client/assets/scripts/ui')

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
  console.log('sign out happened')
  authApi.signOut()
    .then(authUi.signOutSuccess)
    .catch(authUi.signOutFailure)
}

const onClickChangePasswordButton = function (event) {
  event.preventDefault()
  authUi.clickPasswordButton()
  console.log('Password change button clicked')
}

const onCreateGame = function (event) {
  event.preventDefault()
  authApi.createGame()
    .then(authUi.createGameSuccess)
    .catch(authUi.createGameFailure)
}

const onGetGames = function (event) {
  event.preventDefault()
  authApi.getGame()
    .then(authUi.getGameSuccess)
    .catch(authUi.getGameFailure)
}

module.exports = {
  onSignUp: onSignUp,
  onSignIn: onSignIn,
  onChangePassword: onChangePassword,
  onSignOut: onSignOut,
  onClickChangePasswordButton: onClickChangePasswordButton,
  onCreateGame: onCreateGame,
  onGetGames: onGetGames
}
