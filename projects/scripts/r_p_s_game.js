let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    looses: 0,
    ties: 0
};

const rockEvent = document.querySelector('.js-rock');
const paperEvent = document.querySelector('.js-paper');
const scissorEvent = document.querySelector('.js-scissor');
const footerEvent = document.querySelector('.js-footer-btns');
const autoPlayEvent = document.querySelector('.js-auto-play');

rockEvent.addEventListener('click', () => { playGame('Rock') });
paperEvent.addEventListener('click', () => { playGame('Paper') });
scissorEvent.addEventListener('click', () => { playGame('Scissor') });

footerEvent.addEventListener('click', () => {
    footerResetFunc();
});


function resetExecution() {
    score.wins = 0;
    score.looses = 0;
    score.ties = 0;
    localStorage.removeItem('score');
    updateScore();
    console.log('Reset Successfully');
}



const resetContainerElement = document.querySelector('.js-reset-permission-container');

function footerResetFunc() {
    resetContainerElement.innerHTML = `<span>Are you sure you want to reset the score?</span>
    <button class="js-reset-yes-permission">Yes</button>
    <button class="js-reset-no-permission">No</button>`
    
    const resetYes = document.querySelector('.js-reset-yes-permission');
    const resetNo = document.querySelector('.js-reset-no-permission');

    resetYes.addEventListener('click', () => {
        resetExecution();
        resetContainerElement.innerHTML = '';
    });
    
    resetNo.addEventListener('click', () => {
        resetContainerElement.innerHTML = '';
    });
};


autoPlayEvent.addEventListener('click', autoPlay);

document.body.addEventListener('keydown', (event) => {

    if (event.key === 'r') {
        playGame('Rock');

    } else if (event.key === 'p') {
        playGame('Paper');
    
    } else if (event.key === 's') {
        playGame('Scissor');
        
    } else if (event.key === 'a') {
        autoPlay();

    } else if (event.key === 'Backspace') {
        console.log('Backspace is pressed!! ')
        footerResetFunc();

    } else {
        return;
    }
});

function updateScore() {
    document.querySelector('footer h3').innerHTML = `Wins: ${score.wins}, Looses: ${score.looses}, Ties: ${score.ties}`
}
updateScore();

function MovePicker() {
    let randomNumber = Math.random();
    let compVal = '';

    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        console.log('Computer: rock');
        compVal = 'Rock';
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        console.log('Computer: paper');
        compVal = 'Paper';
    } else {
        console.log('Computer: scissor');
        compVal = 'Scissor';
    }

    return compVal;
};



function playGame(human) {
    let res = '';
    let compVal = MovePicker();
    if ((compVal === 'Rock' && human === 'Scissor') || (compVal === 'Paper' && human === 'Rock') || (compVal === 'Scissor' && human === 'Paper')) {
        console.log('You loose!!');
        res = 'You loose.';
        score.looses++;
        console.log('loose value incremented!!', score.looses);

    } else if ((compVal === 'Rock' && human === 'Paper') || (compVal === 'Paper' && human === 'Scissor') || (compVal === 'Scissor' && human === 'Rock')) {
        console.log('You win!!');
        res = 'You win.';
        score.wins++;
        console.log('Win value incremented!!', score.wins);

    } else {
        console.log('It\'s a tie!!');
        res = 'Tie.';
        score.ties++;
        console.log('tie value incremented', score.ties);
    }
    localStorage.setItem('score', JSON.stringify(score));
    updateScore();
    manualPlay(human, compVal, res);
};


function manualPlay(playerMove, compVal, res) {
    if (playerMove === 'Rock') {
        playerMove = '✊'
    } else if (playerMove === 'Paper') {
        playerMove = '🖐️'
    } else {
        playerMove = '✌'
    }
    displayStats(playerMove, compVal, res);
};

function displayStats(playerMove, compMove, res) {
    if (compMove === 'Rock') {
        compMove = '✊'
    } else if (compMove === 'Paper') {
        compMove = '🖐️'
    } else {
        compMove = '✌'
    }

    document.querySelector('.js-title').innerText = res;
    document.querySelector('.js-picks').innerText = `You ${playerMove} ${compMove} computer`;
};


let isAutoPlaying = false;
let intervalId;
function autoPlay() {
    const AutoPlayPicker = () => {
        let playerMove = MovePicker();
        playGame(playerMove);
        console.log('Auto playing Player move is:', playerMove);

        if (playerMove === 'Rock') {
            playerMove = '✊';
        } else if (playerMove === 'Paper') {
            playerMove = '🖐️';
        } else if (playerMove === 'Scissor') {
            playerMove = '✌';
        }
    };

    if (!isAutoPlaying) {
        intervalId = setInterval(AutoPlayPicker, 1000);
        isAutoPlaying = true;
        autoPlayEvent.textContent = 'Stop playing';
    } else {
        clearInterval(intervalId);
        isAutoPlaying = false;
        autoPlayEvent.textContent = 'Auto Play';
    }
};


