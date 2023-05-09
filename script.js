function guessGame() {
  const rightPrice = Math.ceil(Math.random() * 100);
  let text = "Devinez un nombre entre 1 et 100";
  let guess;
  let playerName = prompt("Inserez votre nom");
  do {
    guess = parseInt(prompt(text));
    if (rightPrice < guess) {
      text = "C'est moins!";
    } else if (rightPrice > guess) {
      text = "C'est plus!";
    }
  } while (guess !== rightPrice);
  alert(`${playerName} est le gagnnt`);
}
guessGame();
