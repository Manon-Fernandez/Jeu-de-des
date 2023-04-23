/**Variables initiales */
let playerActive;
let inGame = false;
let currentScore = 0;
let globalScore = 0;

let player1 = {
    name: playerName1,
    currentScore: currentScorePlayer1,
    globalScore: globalScorePlayer1,
    winner: false,
};

let player2 = {
    name: playerName2,
    currentScore: currentScorePlayer2,
    globalScore: currentScorePlayer2,
    winner: false,
};

/**Initialisation de la nouvelle partie */
const startNewGame = () => {
    playerName1.innerHTML = prompt('Choisissez le nom du premier joueur (8 caractères maximum)').slice(0, 8);
    playerName2.innerHTML = prompt('Choisissez le nom du second joueur (8 caractères maximum)').slice(0, 8);
    playerActive = player1;
    playerTurn1.classList.add('player-turn');
    turnColor.classList.add('player-1-turn');
    inGame = true;
    currentScorePlayer1.textContent = 0;
    currentScorePlayer2.textContent = 0;
    globalScorePlayer1.textContent = 0;
    globalScorePlayer2.textContent = 0;
    player1.winner = false;
    player2.winner = false;
};

newGameButton.addEventListener('click', startNewGame);

/**Lancé de dé */
const throwTheDice = () => {
    if (inGame) {
        let randomNumber = Math.floor(Math.random() * 6) + 1;
        diceFace.innerHTML = sixDiceFaces[randomNumber -1];
        if (randomNumber !== 1) {
            currentScore += randomNumber;
            playerActive.currentScore.textContent = currentScore;
        } else {
            currentScore = 0;
            playerActive.currentScore.textContent = currentScore;
            nextPlayer();
        }
    }
};

rollDice.addEventListener('click', throwTheDice);

/**Sauvegarde du score */
const holdButton = () => {
    if (inGame) {
        playerActive.globalScore.textContent = currentScore + Number(playerActive.globalScore.textContent);
        if (playerActive.globalScore.textContent >=100) {
            playerActive.winner = true;
            alert (`${playerActive.name.textContent} a gagné !`);
            inGame = false;
        } else {
            currentScore = 0;
            playerActive.currentScore.textContent = currentScore;
            nextPlayer();
        }
    }
};

holdScore.addEventListener('click', holdButton);