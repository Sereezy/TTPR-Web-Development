function fizzbuzz() {
  var i = 1;
  while(i<=100){
    if (i % 3 == 0) {
      if (i % 5 == 0) {
        console.log("fizzbuzz")
      }
      else {
        console.log("fizz")
      }
    }
    else {
      if (i % 5 == 0) {
        console.log("buzz")
      }
      else {
        console.log(i)
      }

    }
    i ++;
  }
}
fizzbuzz()
