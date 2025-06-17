function rollDie() {
  const dieFaces = [1, 2, 3, 4, 5, 6];
  const randomIndex = Math.floor(Math.random() * dieFaces.length);
  return dieFaces[randomIndex];
}

console.log(rollDie()); // Outputs a random number between 1 and 6