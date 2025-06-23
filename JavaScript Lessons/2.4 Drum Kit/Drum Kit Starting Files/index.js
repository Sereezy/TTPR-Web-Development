var child = document.querySelectorAll('.drum');

for (let i = 0; i < child.length; i++) {
    child[i].addEventListener("click", function() {
    alert("I got clicked!")});
}