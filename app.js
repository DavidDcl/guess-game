function guessGame() {
  const rightPrice = Math.ceil(Math.random() * 100);
  let text = "Devinez un nombre entre 1 et 100";
  let guess;
  let playerName = prompt("Inserez votre nom");
  do {
    guess = parseInt(prompt(text));
    if (isNaN(guess) || guess < 1 || guess > 100) {
      text = "Mauvais numero";
    } else {
      if (rightPrice < guess) {
        text = "C'est moins!";
      }
      if (rightPrice > guess) {
        text = "C'est plus!";
      }
    }
  } while (guess !== rightPrice);
  alert(`${playerName} est le gagnnt`);
}
guessGame();
