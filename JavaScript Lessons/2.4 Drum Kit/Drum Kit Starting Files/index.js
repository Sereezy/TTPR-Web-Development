function handleClick() {
    alert("I got clicked!");
  }
  document.querySelectorAll(".drum").forEach(function(drumElement) {
    drumElement.addEventListener("click", function() {
      alert("I got clicked!");
    });
  });
  
 