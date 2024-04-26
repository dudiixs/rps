const rps = (p1, p2) => {
    if (p1 === p2) return "Empate!";
    var rules = { pedra: "tesoura", papel: "pedra", tesoura: "papel" };
    if (p2 === rules[p1]) {
        return "Player 1 won!";
    } else {
        return "Player 2 won!";
    }
};

const player1Input = document.getElementById('player1Choice');
const player2Input = document.getElementById('player2Choice');
const player2InputGroup = document.getElementById('player2Input');
const playButton = document.getElementById('playButton');
const resultDisplay = document.getElementById('result');

playButton.addEventListener('click', function () {
    if (player2InputGroup.style.display === 'none') {
        player2InputGroup.style.display = 'block';
        player1Input.style.display = 'none';
        playButton.textContent = 'Proximo';
        resultDisplay.textContent = '';
    } else {
        const player1Choice = player1Input.value.toLowerCase();
        const player2Choice = player2Input.value.toLowerCase();

        const result = rps(player1Choice, player2Choice);
        resultDisplay.textContent = result;

        player1Input.value = '';
        player2Input.value = '';
        player1Input.style.display = 'block';
        player2InputGroup.style.display = 'none';
        playButton.textContent = 'Jogar!';
    }
});