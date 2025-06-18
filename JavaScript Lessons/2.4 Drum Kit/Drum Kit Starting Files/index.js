function handleClick() {
    alert("I got clicked!");
}

document.querySelector("button").addEventListener("click", handleClick);

document.querySelectorAll("button")[1].addEventListener("click", handleClick);


