var btns = document.querySelectorAll("button")
console.log(btns)
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener('click', (event) => {
    var text = event.target.innerText
    console.log(text)
    makeSound(text)
  })
}
function makeSound(type) {
  switch (type) {
    case 'w':
      var audio = new Audio("./sounds/tom-1.mp3");
      audio.play();
      break;
    case 'a':
      var audio = new Audio("./sounds/tom-2.mp3");
      audio.play();
      break;

    case 's':
      var audio = new Audio("./sounds/tom-3.mp3");
      audio.play();
      break;

    case 'd':
      var audio = new Audio("./sounds/tom-4.mp3");
      audio.play();
      break;

    case 'j':
      var audio = new Audio("./sounds/snare.mp3");
      audio.play();
      break;

    case 'k':
      var audio = new Audio("./sounds/crash.mp3");
      audio.play();
      break;

    case 'l':
      var audio = new Audio("./sounds/kick-bass.mp3");
      audio.play();
      break;

    default:
      break;
  }
}
