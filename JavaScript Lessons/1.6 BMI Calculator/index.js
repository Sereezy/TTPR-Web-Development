function rollDice(num) {
  for (let i = 0; i < num; i++) {
    let roll = Math.floor(Math.random() * 6) + 1;
    console.log("Roll " + (i + 1) + ": " + roll);
  }
}
rollDice(3); 
