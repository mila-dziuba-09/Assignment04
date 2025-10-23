// 1. Получаем выбор пользователя
// 1. Get the user's choice
let userChoice = prompt("Choose rock, paper, or scissors:").toLowerCase();

// Проверяем корректность ввода
while (userChoice !== "rock" && userChoice !== "paper" && userChoice !== "scissors") {
    userChoice = prompt("Invalid choice. Please enter rock, paper, or scissors:").toLowerCase();
}

// 2. Генерируем выбор компьютера (0 = rock, 1 = paper, 2 = scissors)
// 2. Generate the computer's choice (0 = rock, 1 = paper, 2 = scissors)
let computerNum = Math.floor(Math.random() * 3);
let computerChoice;

// Преобразуем число в строку
// Convert the number to a string
if (computerNum === 0) {
    computerChoice = "rock";
} else if (computerNum === 1) {
    computerChoice = "paper";
} else {
    computerChoice = "scissors";
}

// 3. Определяем победителя
// 3. Determine the winner
let result;
if (userChoice === computerChoice) {
    result = "It's a tie!";
} else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "scissors" && computerChoice === "paper") ||
    (userChoice === "paper" && computerChoice === "rock")
) {
    result = "You win!";
} else {
    result = "Computer wins!";
}

// 4. Вывод результата
// 4. Output of the result
alert(`You chose ${userChoice}.\nComputer chose ${computerChoice}.\n${result}`);