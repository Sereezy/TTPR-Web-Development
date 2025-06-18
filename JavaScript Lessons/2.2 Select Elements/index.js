/*
Change the background color of the button to red.
Change the text color of the button to be white.
Change the text of the title to say Goodbye World
Change the text inside the anchor tag to be pink
Change the "Second" list item to be purple
*/
const button = document.getElementsByClassName("btn")[0];

button.style.color = "white";
button.style.background = "red";

const title = document.getElementById("title");

title.textContent = "Goodbye world"

const anchor = document.getElementsByTagName("a")[0];

anchor.textContent = "blue"

const second = document.getElementsByClassName("item")[1];

second.textContent = "purple";
/*
    <h1 id="title">Hello World</h1>
    <input type="checkbox" />
    <button class="btn">Click Me</button>

    <ul id="list">
      <li class="item"><a href="google.com">Google</a></li>
      <li class="item">Second</li>
      <li class="item">Third</li>
    </ul>
*/