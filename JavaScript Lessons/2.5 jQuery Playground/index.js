// 1. Change the text color of the <h1> to 'teal'.
$("h1").css("color", "teal");

// 2. Create a CSS class named "title-header" with font-size: 35px and add it to the <h1>.
$("<style>.title-header { font-size: 35px; }</style>").appendTo("head");
$("h1").addClass("title-header");

// 3. Change the text of only the second button to say "Second".
$("button").eq(1).text("Second");

// 4. When any button is clicked, make all buttons fade out.
$("button").on("click", function () {
  $("button").fadeOut();
});

// 5. When the page loads, add a <p> that says "Welcome!" before the <h1>.
$("h1").before("<p>Welcome!</p>");

// 6. When the user hovers over the <h1>, change its font size to 50px.
$("h1").on("mouseover", function () {
  $(this).css("font-size", "50px");
});

// 7. Toggle the <h1> visibility when any button is clicked using .slideToggle().
$("button").on("click", function () {
  $("h1").slideToggle();
});

// 8. Change the anchor tag’s href to point to https://www.wikipedia.org/.
$("a").attr("href", "https://www.wikipedia.org/");

// 9. Add a .click() event to each button that adds the class "clicked-btn".
$("<style>.clicked-btn { background-color: yellow; }</style>").appendTo("head");
$("button").on("click", function () {
  $(this).addClass("clicked-btn");
});

// 10. CHALLENGE: Animate the <h1>’s opacity to 0.2 when a button is double-clicked.
$("button").on("dblclick", function () {
  $("h1").animate({ opacity: 0.2 });
});
