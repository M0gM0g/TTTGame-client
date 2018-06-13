'use strict'
const store = require('/Users/markoleary/wdi/projects/TTTGame-client/assets/scripts/store')

$(document).ready(function () {
  // default to player one
  $('#start-button').hide()
  $('#change-password').hide()
  $('#change-password-form').hide()
  $('.change-password-button-only').hide()
  $('#sign-out').hide()
  $('.get-games').hide()
  $('.row').hide()

  // const gameOverCheck = function () {
  //   if (checkIfWon === true) {
  //     let gameOver = true
  //   }
  //   }
  //    }
  let player = 1
  let turnsTaken = 1
  // event listener for individual boxes
  $('.col-xs-4').on('click', function (event) {
    console.log('this turn worked')
    console.log(turnsTaken)
    // $(this).html('x') -good idea but dont need to change html for this rn
    // 'this' always becomes the box that you select
    const boxSelected = $(this)
    const clearMessages = function () {
      $('.messages').empty()
    }
    const resetBoard = function () {
      $('.col-xs-4').removeClass('X O')
      $('.col-xs-4').empty()
      $('.messages').empty()
      turnsTaken = 1
      player = 1
    }
    if (turnsTaken === 9) {
      $('.messages').html('This game is a tie!')
      store.gameOver = true
      setTimeout(resetBoard, 5000)
    }
    // to check if a box is free
    if (boxSelected.hasClass('X') || boxSelected.hasClass('O')) {
      $('.messages').html('This box has already been taken!')
      setTimeout(clearMessages, 3000)
    } else {
      // otherwise player 1 can add an x
      if (player === 1) {
        boxSelected.addClass('X')
        $(this).html('X')
        turnsTaken = turnsTaken + 1
        if (checkIfWon('X')) {
          // button to reset or timed?
          setTimeout(resetBoard, 5000)
          $('.messages').html("You're the winner! Nice job, X!")
        } else {
          // check for winner, if no, next player turn
          player = 2
        }
      } else {
        boxSelected.addClass('O')
        $(this).html('O')
        turnsTaken = turnsTaken + 1
        if (checkIfWon('O')) {
          // button to reset or timed?
          setTimeout(resetBoard, 5000)
          $('.messages').html('You Lost! Destroyed by O!')
        } else {
          player = 1
        }
      }
    }
    $('.reset-button').on('click', resetBoard)
  })

  // if ('.row' div).hasClass('X')
  // better way than to check each combination?
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
// const gameTied = function () {
//    if ($('.box1').hasClass(XorO) && $('.box2').hasClass(XorO) && $('.box3').hasClass(XorO) &&
// $('.box4').hasClass(XorO) && $('.box5').hasClass(XorO) && $('.box6').hasClass(XorO) && $('.box7').hasClass(XorO) && $('.box8').hasClass(XorO) && $('.box9').hasClass(XorO)) {
// }

// else if($('.box1').hasClass(XorO) && $('.box2').hasClass(XorO) && $('.box3').hasClass(XorO) &&
// $('.box4').hasClass(XorO) && $('.box5').hasClass(XorO) && $('.box6').hasClass(XorO) && $('.box7').hasClass(XorO)
// && $('.box8').hasClass(XorO) && $('.box9').hasClass(XorO)) {

// FIRST TRY
// const events = require('./events')
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require(/example')

// const moveTurn = 1;

// const makeAnX = function () {
//   $(this).html('X with a function')
// }

// $('#box-1').on('click', makeAnX)
//
// $('#box-2').on('click', function () {
//   $('#box-2').html('X')
// })
//
// $('#box-3').on('click', function () {
//   $('#box-3').html('X')
// })
//
// $('#box-4').on('click', function () {
//   $('#box-4').html('X')
// })
//
// $('#box-5').on('click', function () {
//   $('#box-5').html('X')
// })
//
// $('#box-6').on('click', function () {
//   $('#box-6').html('X')
// })
//
// $('#box-7').on('click', function () {
//   $('#box-7').html('X')
// })
//
// $('#box-8').on('click', function () {
//   $('#box-8').html('X')
// })
//
// $('#box-9').on('click', function () {
//   $('#box-9').html('X')
// })

// $('.col-xs-4').on('click', function () {
//   $(this).html('X with a function & refactored')
// })

const authEvents = require('/Users/markoleary/wdi/projects/TTTGame-client/assets/scripts/events')

$(() => {
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#sign-out').on('click', authEvents.onSignOut)
  $('#change-password-form').on('submit', authEvents.onChangePassword)
  $('#change-password-button-only').on('click', authEvents.onClickChangePasswordButton)
  // $('#start-button').on('click', authEvents.onCreateGame)
  $('#get-game').on('submit', authEvents.onGetGames)
})
