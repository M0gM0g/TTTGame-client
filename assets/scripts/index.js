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
  $('#get-games').hide()
  $('.row').hide()
  $('#start-button').hide()
})

let player = 1
let turnsTaken = 0
store.gameOver = false

$('.col-xs-4').on('click', function (event) {
  // turnsTaken = turnsTaken + 1
  // console.log(turnsTaken)
  const boxSelected = $(this)
  const clearMessages = function () {
    $('.messages').empty()
  }
  const checkIfTie = function () {
    if (turnsTaken === 9 && store.gameOver === false) {
      $('.messages').html('This game is a tie!')
      setTimeout(resetBoard, 5000)
      store.gameOver = true
    }
  }

  const resetBoard = function () {
    $('.col-xs-4').removeClass('X O')
    $('.col-xs-4').empty()
    $('.messages').empty()
    $('.container-fluid').hide()
    $('.row').hide()
    $('.messages').html('Click new game to play again!')
    $('#start-button').show()
    turnsTaken = 0
    player = 1
    store.gameOver = false
  }

  if (turnsTaken === 9 && store.gameOver === false) {
    $('.messages').html('This game is a tie!')
    setTimeout(resetBoard, 5000)
  }

  if (boxSelected.hasClass('X') || boxSelected.hasClass('O')) {
    $('.messages').html('This box has already been taken!')
    setTimeout(clearMessages, 5000)
  } else {
    if (player === 1 && store.gameOver === false) {
      boxSelected.addClass('X')
      $(this).html('X')
      // store.game.cells = $(this).val('X')
      const idString = $(this).attr('id')
      const indexNum = idString.substr(idString.length - 1)
      // store.game.cells =
      store.index = Number(indexNum)
      // console.log('cell value is ' + store.game.cells)

      turnsTaken = turnsTaken + 1
      checkIfTie()
      if (checkIfWon('X')) {
        $('.messages').html("You're the winner! Nice job, X!")
        store.gameOver = true
        // store.index = boxSelected.text()
        // store.game.cells = boxSelected.text()
        setTimeout(resetBoard, 5000)
      } else {
        player = 2
      }
    } else {
      if (store.gameOver === false) {
        boxSelected.addClass('O')
        $(this).html('O')
        // store.game.cells = $(this).val()
        const idString = $(this).attr('id')
        const indexNum = idString.substr(idString.length - 1)
        // store.game.cells =
        store.index = Number(indexNum)
        // console.log('cell value is ' + store.game.cells)
        turnsTaken = turnsTaken + 1
        checkIfTie()
        if (checkIfWon('O')) {
          $('.messages').html('You Lost! Destroyed by O!')
          store.gameOver = true
          // store.index = boxSelected.text
          // store.game.cells = boxSelected.text()
          setTimeout(resetBoard, 5000)
        } else {
          player = 1
        }
      }
    }
  }
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

// function checkIfTie () {
//   if (turnsTaken === 9 && store.gameOver === false) {
//     $('.messages').html('This game is a tie!')
//     setTimeout(resetBoard, 5000)
//     store.gameOver = true
//   }
// }

$(() => {
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#sign-out').on('click', authEvents.onSignOut)
  $('#change-password-form').on('submit', authEvents.onChangePassword)
  $('#change-password-button-only').on('click', authEvents.onClickChangePasswordButton)
  $('#start-button').on('click', authEvents.onCreateGame)
  $('#get-games').on('click', authEvents.onGetGames)
  $('.col-xs-4').on('click', authEvents.onUpdateGame)
})
