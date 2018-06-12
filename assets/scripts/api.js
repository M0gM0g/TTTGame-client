'use strict'

const store = require('/Users/markoleary/wdi/projects/TTTGame-client/assets/scripts/store')

const signUp = function (data) {
  return $.ajax({
    method: 'POST',
    url: 'https://tic-tac-toe-wdi.herokuapp.com/sign-up',
    data: data
  })
}

const signIn = function (data) {
  return $.ajax({
    method: 'POST',
    url: 'https://tic-tac-toe-wdi.herokuapp.com/sign-in',
    data: data
  })
}

const changePassword = function (data) {
  console.log('data is ', data)
  return $.ajax({
    method: 'PATCH',
    url: 'https://tic-tac-toe-wdi.herokuapp.com/change-password',
    data: data,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const signOut = function () {
  return $.ajax({
    method: 'DELETE',
    url: 'https://tic-tac-toe-wdi.herokuapp.com/sign-out',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
module.exports = {
  signUp: signUp,
  signIn: signIn,
  changePassword: changePassword,
  signOut: signOut
}
