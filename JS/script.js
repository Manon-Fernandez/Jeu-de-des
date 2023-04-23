/**Déclaration des varibles */

/**Les boutons */
const newGameButton = document.getElementById('newGame');
const rollDice = document.getElementById('throwDice');
const holdScore = document.getElementById('hold');

/**Noms des joueurs */
let playerName1 = document.getElementById('playerName1');
let playerName2 = document.getElementById('playerName2');

/**Scores et tour */
let globalScorePlayer1 = document.getElementById('globalScorePlayer1');
let currentScorePlayer1 = document.getElementById('currentScorePlayer1');
let globalScorePlayer2 = document.getElementById('globalScorePlayer2');
let currentScorePlayer2 = document.getElementById('currentScorePlayer2');

let playerTurn1 = document.getElementById('playerTurn1');
let playerTurn2 = document.getElementById('playerTurn2');
let turnColor = document.getElementById('turnColor');

/**Contrôle face du dé */
let diceFace = document.getElementById('diceFace');

/**HTML pour les faces du dé */
const sixDiceFaces = [
    `<div class="dice first-face"><span class="dot"></span></div>`,
    `<div class="dice second-face"><span class="dot"></span><span class="dot"></span></div>`,
    `<div class="dice third-face"><span class="dot"></span><span class="dot"></span><span class="dot"></span></div>`,
    `<div class="dice fourth-face"><div class="column"><span class="dot"></span><span class="dot"></span></div><div class="column"><span class="dot"></span><span class="dot"></span></div></div>`,
    `<div class="dice fifth-face"><div class="column"><span class="dot"></span><span class="dot"></span></div><div class="column"><span class="dot"></span></div><div class="column"><span class="dot"></span><span class="dot"></span></div></div>`,
    `<div class="dice fourth-face"><div class="column"><span class="dot"></span><span class="dot"></span><span class="dot"></span></div><div class="column"><span class="dot"></span><span class="dot"></span><span class="dot"></span></div></div>`,
  ];