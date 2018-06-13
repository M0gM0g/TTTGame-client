#!/bin/bash


curl "https://tic-tac-toe-wdi.herokuapp.com/games/$ID" \
  --include \
  --request POST \
  --header 'Conent-type: application/json' \
  --header "Authorization: Token token=$TOKEN" \
  --data '{
    "game": {
      "id": "'${ID}'",,
      "cells": ["", "", "", "", "", "", "", "", ""],
      "over": "'"${OVER}"'",,
      "player_x": {
        "id": "'${ID}'",
        "email": "'"${EMAIL}"'"
      },
      "player_o": "'"${PLAYER_O}"'"
    }
  }'

echo
