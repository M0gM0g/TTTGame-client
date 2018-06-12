'use script'

const store = require('/Users/markoleary/wdi/projects/TTTGame-client/assets/scripts/store')

const signUpSuccess = function (signUpResponse) {
  console.log('signUpResponse is ', signUpResponse)
}

const signUpError = function (error) {
  console.log('Error in sign up is ', error)
}

const signInSuccess = function (response) {
  console.log('signInResponse is ', response)
  store.user = response.user
}

const signInError = function (error) {
  console.error('signInError is ', error)
}

const changePasswordSuccess = function (response) {
  console.log('You successfully changed your password')
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

module.exports = {
  signUpSuccess: signUpSuccess,
  signUpError: signUpError,
  signInSuccess: signInSuccess,
  signInError: signInError,
  changePasswordSuccess: changePasswordSuccess,
  changePasswordFailure: changePasswordFailure,
  signOutSuccess: signOutSuccess,
  signOutFailure: signOutFailure
}
