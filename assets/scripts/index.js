'use strict'
$(document).ready(function () {
// default to player one
  let player = 1

  // event listener for individual boxes
  $('.col-xs-4').on('click', function (event) {
    console.log('this turn worked')
    // $(this).html('x') -good idea but dont need to change html for this rn
    // 'this' always becomes the box that you select
    const boxSelected = $(this)
    const clearMessages = function () {
      $('#messages').empty()
    }
    const resetBoard = function () {
      $('.col-xs-4').removeClass('X O')
      $('.col-xs-4').empty()
      $('#messages').empty()
    }

    // to check if a box is free
    if (boxSelected.hasClass('X') || boxSelected.hasClass('O')) {
      $('#messages').html('This box has already been taken!')
      setTimeout(clearMessages, 3000)
    } else {
      // otherwise player 1 can add an x
      if (player === 1) {
        boxSelected.addClass('X')
        $(this).html('X')
        if (checkIfWon('X')) {
          // button to reset or timed?
          setTimeout(resetBoard, 5000)
          $('#messages').html('The winner is player ' + player + '!')
        } else {
          // check for winner, if no, next player turn
          player = 2
        }
      } else {
        boxSelected.addClass('O')
        $(this).html('O')
        if (checkIfWon('O')) {
          // button to reset or timed?
          setTimeout(resetBoard, 5000)
          $('#messages').html('The winner is player ' + player + '!')
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

$(() => {
  // events.addHandlers()
})
