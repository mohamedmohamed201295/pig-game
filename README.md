# pig-game
A simple web-based dice game where two players take turns rolling a dice. The goal is to reach a total score of 100 points first.

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [How to Play](#how-to-play)
- [Game Rules](#game-rules)
- [Technologies Used](#technologies-used)
- [License](#license)

## Introduction
This project is a simple implementation of the Pig Game using HTML, CSS, and JavaScript. It provides a user-friendly interface where two players can compete by rolling a dice and accumulating points. The game includes features such as rolling dice, holding scores, and winning conditions.

## Features
- Responsive design suitable for desktop and mobile devices.
- Players' scores and current points are dynamically updated during gameplay.
- Visual indicators for the active player and winner.
- New game functionality to reset scores and start over.

## Getting Started
To get a local copy up and running follow these simple steps.
### Prerequisites
  - Web browser (Chrome, Firefox, Safari, etc.)
### Installation
  1. Clone the repo.
  2. Open `index.html` in your browser.

## How to Play
- Each turn, a player can roll a dice as many times as they want. Each result gets added to their round score.
- If the player rolls a 1, their current score resets to 0, and it's the next player's turn.
- The player can choose to 'Hold', which means that their round score gets added to their global score, and it's the next player's turn.
- The first player to reach 100 points on the global score wins the game.

## Game Rules
- Rolling a 1 resets the current score to 0 and ends the player's turn.
- Holding adds the current score to the player's global score and ends the player's turn.
- The game can be reset at any time using the "New game" button.

## Technologies Used
- HTML5
- CSS3
- JavaScript (ES6)

## License
Distributed under the MIT License. See `LICENSE` for more information.
