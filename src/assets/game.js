let secretCombination = generateCombination();
let attempts = [];

function generateCombination() {
    return Array.from({ length: 4 }, () => Math.floor(Math.random() * 10)).join('');
}

function submitGuess() {
    const userGuess = document.getElementById("userGuess").value;

    if (userGuess.length !== 4 || isNaN(userGuess)) {
        alert("Por favor, insira uma combinação de 4 dígitos.");
        return;
    }

    const { bulls, cows } = calculateBullsAndCows(userGuess);
    const result = `Tentativa: ${userGuess} - ${bulls} Bulls, ${cows} Cows`;

    attempts.unshift(result);
    updateAttemptsList();
    
    document.getElementById("userGuess").value = '';
}

function calculateBullsAndCows(guess) {
    let bulls = 0;
    let cows = 0;

    for (let i = 0; i < 4; i++) {
        if (guess[i] === secretCombination[i]) {
            bulls++;
        } else if (secretCombination.includes(guess[i])) {
            cows++;
        }
    }

    return { bulls, cows };
}

function updateAttemptsList() {
    const attemptsList = document.getElementById("attemptsList");
    attemptsList.innerHTML = ''; 

    attempts.forEach(attempt => {
        const listItem = document.createElement("li");
        listItem.textContent = attempt;
        attemptsList.appendChild(listItem);
    });
}

function showCombination() {
    alert(`A combinação secreta é: ${secretCombination}`);
}
