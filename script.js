const secret = Math.floor(Math.random() * 100) + 1;

function checkGuess() {
  const guess = Number(document.getElementById("guess").value);
  const message = document.getElementById("message");

  if (guess < 1 || guess > 100 || isNaN(guess)) {
    message.textContent = "Enter a whole number from 1 to 100";
  } else if (guess > secret) {
    message.textContent = "Too high";
  } else if (guess < secret) {
    message.textContent = "Too low";
  } else {
    message.textContent = "Correct!";
  }
}

document.getElementById("btn").addEventListener("click", checkGuess);