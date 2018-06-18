'use strict'
const store = require('./store')
const authEvents = require('./events')

$(document).ready(function () {
  $('.messages').html('Welcome, Please Log In or Sign Up!')
  $('#start-button').hide()
  $('#change-password').hide()
  $('#change-password-form').hide()
  $('.change-password-button-only').hide()
  $('#sign-out').hide()
  $('.get-games').hide()
  $('.row').hide()
  $('#start-button').hide()

  let player = 1
  let turnsTaken = 1
  store.gameOver = false

  $('.col-xs-4').on('click', function (event) {
    console.log('this turn worked')
    console.log(turnsTaken)

    const boxSelected = $(this)
    const clearMessages = function () {
      $('.messages').empty()
    }
    const resetBoard = function () {
      $('.col-xs-4').removeClass('X O')
      $('.col-xs-4').empty()
      $('.messages').empty()
      $('.container-fluid').hide()
      $('.row').hide()
      $('.messages').html('Click new game to play again!')
      $('#start-button').show()
      turnsTaken = 1
      player = 1
      store.gameOver = false
    }
    if (turnsTaken === 9 && $(this).has('')) {
      if (player === 1)
        $('.messages').html('This game is a tie!')
      store.gameOver = true
      setTimeout(resetBoard, 5000)
    }

    if (boxSelected.hasClass('X') || boxSelected.hasClass('O')) {
      $('.messages').html('This box has already been taken!')
      setTimeout(clearMessages, 5000)
    } else {
      if (player === 1 && store.gameOver === false) {
        boxSelected.addClass('X')
        $(this).html('X')
        turnsTaken = turnsTaken + 1
        if (checkIfWon('X')) {
          $('.messages').html("You're the winner! Nice job, X!")
          store.gameOver = true
          setTimeout(resetBoard, 5000)
        } else {
          player = 2
        }
      } else {
        if (store.gameOver === false) {
          boxSelected.addClass('O')
          $(this).html('O')
          turnsTaken = turnsTaken + 1
          if (checkIfWon('O')) {
            $('.messages').html('You Lost! Destroyed by O!')
            store.gameOver = true
            setTimeout(resetBoard, 5000)
          } else {
            player = 1
          }
        }
      }
    }
    $('.reset-button').on('click', resetBoard)
  })

  function checkIfWon (XorO) {
    if ($('.box1').hasClass(XorO) && $('.box2').hasClass(XorO) && $('.box3').hasClass(XorO)) {
      return true
    } else if ($('.box4').hasClass(XorO) && $('.box5').hasClass(XorO) && $('.box6').hasClass(XorO)) {
      return true
    } else if ($('.box7').hasClass(XorO) && $('.box8').hasClass(XorO) && $('.box9').hasClass(XorO)) {
      return true
    } else if ($('.box1').hasClass(XorO) && $('.box4').hasClass(XorO) && $('.box7').hasClass(XorO)) {
      return true
    } else if ($('.box2').hasClass(XorO) && $('.box5').hasClass(XorO) && $('.box8').hasClass(XorO)) {
      return true
    } else if ($('.box3').hasClass(XorO) && $('.box6').hasClass(XorO) && $('.box9').hasClass(XorO)) {
      return true
    } else if ($('.box1').hasClass(XorO) && $('.box5').hasClass(XorO) && $('.box9').hasClass(XorO)) {
      return true
    } else if ($('.box3').hasClass(XorO) && $('.box6').hasClass(XorO) && $('.box9').hasClass(XorO)) {
      return true
    } else if ($('.box3').hasClass(XorO) && $('.box5').hasClass(XorO) && $('.box7').hasClass(XorO)) {
      return true
    } else {
      return false
    }
  }
})

$(() => {
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#sign-out').on('click', authEvents.onSignOut)
  $('#change-password-form').on('submit', authEvents.onChangePassword)
  $('#change-password-button-only').on('click', authEvents.onClickChangePasswordButton)
  $('#start-button').on('click', authEvents.onCreateGame)
  $('#get-games').on('submit', authEvents.onGetGame)
})
