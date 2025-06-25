import inquirer from "inquirer";
var quotes = [
  "Success is not final, failure is not fatal: It is the courage to continue that counts. – Winston Churchill",
  "Don't watch the clock; do what it does. Keep going. – Sam Levenson",
  "Believe you can and you're halfway there. – Theodore Roosevelt",
  "The harder you work for something, the greater you'll feel when you achieve it. – Unknown",
  "Your limitation—it's only your imagination. – Unknown"
];
var random = Math.floor((quotes.length-1)*Math.random())
inquirer.prompt([{ name: "name", message: "enter your name" }])
  .then((ans) => console.log(ans.name+" ,remember "+quotes[random])).catch((err) => { if (err) throw err })
