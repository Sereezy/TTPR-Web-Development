/*
Solution below
Solution below
Solution below
Solution below
Solution below
Solution below
Solution below
Solution below
Solution below
Solution below
Solution below
Solution below
Solution below
Solution below
Solution below
Solution below
Solution below
Solution below
Solution below
Solution below
Solution below
Solution below
Solution below
Solution below
Solution below
Solution below
Solution below
Solution below
Solution below
Solution below
Solution below
Solution below
Solution below
*/

function bmiCalculator(weight, height) {
  var bmi = Math.round(weight / Math.pow(height, 2));
  if (bmi < 18.5) {
    return `Your BMI is ${bmi}, so you are underweight.`;
  }
  if (18.5 <= bmi <= 24.9) {
    return `Your BMI is ${bmi}, so you have a normal weight.`;
  }
  if (bmi > 24.9) {
    return `Your BMI is ${bmi}, so you are overweight.`;
  }
  return bmi;
}

console.log(bmiCalculator(60, 1.6));
