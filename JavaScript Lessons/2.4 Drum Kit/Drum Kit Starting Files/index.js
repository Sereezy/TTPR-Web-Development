// function handleClick() {
//     alert("I got clicked!");
// }

// document.querySelector("button").addEventListener("click", handleClick);

// document.querySelectorAll(".drum").addEventListemer("click", handleClick);

for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        alert("I got clicked!");
    });
}