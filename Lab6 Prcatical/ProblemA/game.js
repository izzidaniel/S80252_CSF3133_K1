// Global variables to track game state, scores, and round history
let gameStarted = false;
let wins = 0;
let losses = 0;
let draws = 0;
let roundCount = 0;
let results = [];

// Function to validate player name and start the game
function startGame() {
    let name = document.getElementById("playerName").value;

    if (name == "") {
        alert("Please enter your name.");
        return;
    }

    document.getElementById("welcomeMsg").innerHTML = "Welcome, " + name + "!";
    document.getElementById("startTime").innerHTML = "Started on: " + new Date();

    gameStarted = true;
}

// Function to randomly select rock, paper, or scissors for the computer
function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    let randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

// Function to play one round, update images, result colour, score, and history table
function playRound(playerChoice) {
    // Check if the game has started
    if (gameStarted === false) {
        alert("Click Start Game first.");
        return;
    }

    let computerChoice = getComputerChoice();
    roundCount++;

    // Update images for player and computer
    document.getElementById("playerImg").src = playerChoice + ".png";
    document.getElementById("computerImg").src = computerChoice + ".png";

    let outcome = "";
    let resultText = document.getElementById("result");

    // Decide the winner using if...else
    if (playerChoice === computerChoice) {
        outcome = "Draw";
        draws++;
        resultText.innerHTML = "It's a Draw!";
        resultText.style.color = "grey";
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "scissors" && computerChoice === "paper") ||
        (playerChoice === "paper" && computerChoice === "rock")
    ) {
        outcome = "Win";
        wins++;
        resultText.innerHTML = "You Win!";
        resultText.style.color = "green";
    } else {
        outcome = "Lose";
        losses++;
        resultText.innerHTML = "You Lose!";
        resultText.style.color = "red";
    }

    // Store result in array and update scoreboard
    results.push(outcome);
    document.getElementById("wins").innerHTML = wins;
    document.getElementById("losses").innerHTML = losses;
    document.getElementById("draws").innerHTML = draws;

    // Add a new row to the history table
    document.getElementById("history").innerHTML +=
        "<tr><td>" + roundCount + "</td><td>" + playerChoice + "</td><td>" + computerChoice + "</td><td>" + outcome + "</td></tr>";
}

// Function to count wins using a for loop and show rounded percentage
function showSummary() {
    if (results.length === 0) {
        document.getElementById("summary").innerHTML = "No rounds played yet.";
        return;
    }

    let winCount = 0;

    // Loop over results array to count wins
    for (let i = 0; i < results.length; i++) {
        if (results[i] === "Win") {
            winCount++;
        }
    }

    let percentage = Math.round((winCount / results.length) * 100);
    document.getElementById("summary").innerHTML =
        "You played " + results.length + " rounds and won " + percentage + "%.";
}

// Function to reset all scores, array, history table, and messages
function resetGame() {
    wins = 0;
    losses = 0;
    draws = 0;
    roundCount = 0;
    results = [];

    document.getElementById("wins").innerHTML = "0";
    document.getElementById("losses").innerHTML = "0";
    document.getElementById("draws").innerHTML = "0";
    document.getElementById("result").innerHTML = "";
    document.getElementById("summary").innerHTML = "";

    // Clear history rows while keeping the header row intact
    document.getElementById("history").innerHTML =
        "<tr><th>Round</th><th>You</th><th>Computer</th><th>Result</th></tr>";
}
