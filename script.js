'use strict'

const playerElements = Array.from(document.getElementsByClassName('player'))
const [player1, player2] = playerElements
const [newGameBtn, rollDiceBtn, holdBtn] =
  document.getElementsByClassName('btn')
const dice = document.querySelector('.dice')
const scoreElements = [
  document.getElementById('score--0'),
  document.getElementById('score--1')
]
const currentElements = [
  document.getElementById('current--0'),
  document.getElementById('current--1')
]

let scores, currentScore, activePlayer, playing

const init = function () {
  scores = [0, 0]
  currentScore = 0
  activePlayer = 0
  playing = true

  scoreElements.forEach(score => (score.textContent = 0))
  currentElements.forEach(current => (current.textContent = 0))
  dice.classList.add('hidden')

  playerElements.forEach(player => {
    player.classList.remove('player--winner', 'player--active')
  })

  player1.classList.add('player--active')
}

const roll = function () {
  return Math.trunc(Math.random() * 6 + 1)
}

const reassignPlayerCurrent = function () {
  currentElements[activePlayer].textContent = currentScore
}

const switchPlayer = function () {
  currentScore = 0
  reassignPlayerCurrent()
  activePlayer = activePlayer === 0 ? 1 : 0
  player1.classList.toggle('player--active')
  player2.classList.toggle('player--active')
}

rollDiceBtn.addEventListener('click', function () {
  if (playing) {
    const rolled = roll()
    dice.src = `dice-${rolled}.png`
    dice.classList.remove('hidden')
    if (rolled === 1) {
      switchPlayer()
    } else {
      currentScore += rolled
      reassignPlayerCurrent()
    }
  }
})

holdBtn.addEventListener('click', function () {
  if (playing) {
    scores[activePlayer] += currentScore
    scoreElements[activePlayer].textContent = scores[activePlayer]
    if (scores[activePlayer] >= 100) {
      playing = false
      dice.classList.add('hidden')
      playerElements[activePlayer].classList.add('player--winner')
      playerElements[activePlayer].classList.remove('player--active')
    } else {
      switchPlayer()
    }
  }
})

newGameBtn.addEventListener('click', init)

// Initialize the game on page load
init()
