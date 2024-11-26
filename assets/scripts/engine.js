const state = {
    view: {
        squares: document.querySelectorAll('.square'),
        enemy: document.querySelectorAll('.enemy'),
        timeLeft: document.querySelectorAll('#left'),
        score: document.querySelectorAll('#score'),
    },
    values: {
        timerId: null,
        gameVelocity: 1000
    }
};

function randomSquare() {
    state.view.squares.forEach((square) => {
        square.classList.remove('enemy');
    });

    let randomNumber = Math.floor(Math.random() * 9);
    let randomSquare = state.view.squares[randomNumber];
    randomSquare.classList.add('enemy');
}

function moveEnemy() {
    state.values.timerId = setInterval(randomSquare, state.values.gameVelocity); 
}

function addListenerHitBox() {
    state.view.squares.forEach((square) => {});
}

function inicialize() {
    randomSquare();
}

inicialize();