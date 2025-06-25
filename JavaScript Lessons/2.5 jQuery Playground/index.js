//Selecting Elements
console.log($("button"));

// Get the current CSS value by passing the property name as a string
console.log($("h1").css("font-size"));

//Manipulating Styles
$("h1").css("color", "darkseagreen");

//Add Class
$("h1").addClass("big-title");

//Remove Class
$("h1").removeClass("big-title");

//Add Multiple Classes
$("h1").addClass("big-title margin-50");

//Remove Multiple Classes
$("h1").removeClass("big-title margin-50");

//.hasClass
console.log($("h1").hasClass());

//Add text with element.text('newText')
$("button").text("Press");

//Add text w/ html tags using element.html('<tag>newText</tag>')
$("button").eq(1).html("<strong>Pressed</strong>");

//Getting attribute from anchor tag
console.log($("a").attr("href"));

//Setting attribute to link to Netflix
console.log($("a").attr("href", "https://www.netflix.com/"));

//Getting classes from h1 tag
console.log($("h1").attr("class"));

//Adding .click() eventListener to h1
$("h1").click(function () {
$("h1").css("color", "purple");
});

//Adding click event listener to multiple elements
$("button").click(function () {
$("button").text("clicked");
});

//Replacing h1 text with the key pressed using keydown
$(document).keypress(function (event) {
$("h1").text(event.key);
});

//Using .on() to detect a mouseover event on the h1 element and change its color to purple
// $("h1").on("mouseover", function () {
//   $("h1").css("color", "pink");
// });

//<buttonTagBefore> <h1>hello</h1>
// $('h1').before('<button>before</button>')

//<h1>hello</h1> <buttonTagAfter>
// $('h1').after('<button>after</button>')

//<h1> <buttonTagPrepend>hello </h1>
// $('h1').prepend('<button>prepend</button>')

//<h1> hello<buttonTagAppend> </h1>
// $('h1').append('<button>append</button>')

//toggle jQuery animations
// $("button").on("click", function () {
//   $("h1").toggle();
// });

//toggle jQuery animations
// $("button").on("click", function () {
//   $("h1").fadeToggle();
// });

//toggle jQuery animations
// $("button").on("click", function () {
//   $("h1").slideToggle();
// });

//toggle jQuery animations (only for numerical values)
// $("button").on("click", function () {
//   $("h1").animate({fontSize: 90});
// });

//chaining jQuery animations together
// $("button").on("click", function () {
//   $("h1").slideUp().slideDown().hide().show().animate({opacity: .5});
// });


// 1. Change the text color of the <h1> to 'teal'.
$("h1").css("color","teal")
// 2. Create a css class named "title-header" with font-size: 35 and add it to the <h1>.
$("h1").addClass("title-header");
// 3. Change the text of only the second button to say "Second".
$("button").eq(1).text("Second")
// 4. When any button is clicked, make all buttons fade out.
$("button").click(function(){
  $("button").fadeToggle()
})
// 5. When the page loads, add a <p> that says "Welcome!" before the <h1>.
$(document).ready(
  $('h1').before('<p>Welcome!</p>')
)
// 6. When the user hovers over the <h1>, change its font size to 50px.
$('h1').on("mouseover",function(){
  $('h1').css("font-size",'50px')
})
// 7. Toggle the <h1> visibility when any button is clicked using .slideToggle().
$('button').click(function(){
$('h1').slideToggle()

})
// 8. Change the anchor tag’s href to point to https://www.wikipedia.org/.
$('a').attr("href","https://www.wikipedia.org/")
// 9. Add a .click() event to each button that adds the class "clicked-btn".
$("button").click(function(){
$("button").addClass("clicked-btn")
})
// 10. CHALLENGE Animate the <h1>’s opacity to 0.2 when a button is double-clicked.
$("h1").dblclick(function(){
   $("h1").css("opacity","0.2")
})
