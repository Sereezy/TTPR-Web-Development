/*
BMI Calculator Advanced (IF/ELSE)
Previously, we've created a function that is able to calculate the BMI. But once we get a result, we will want to tell the user what the number means.

Write a function that outputs (returns) a different message depending on the BMI.

BMI <18.5, the output should be: "Your BMI is <bmi>, so you are underweight."

BMI 18.5-24.9, the output should be "Your BMI is <bmi>, so you have a normal weight."

BMI >24.9, the output should be "Your BMI is <bmi>, so you are overweight."
*/

function bmiCalculator(weight, height) {
  var bmi = Math.round(weight / Math.pow(height, 2));

  if (bmi < 18.5) {
    return `Your bmi is ${bmi} so you are underweight.`;
  }

  if (18.5 <= bmi <= 24.9) {
    return `Your bmi is ${bmi} and you are normal weight.`;
  }

  if (bmi > 24.9) {
    return `Your bmi is ${bmi} and you are overweight.`;
  }

  return bmi;
}

console.log(bmiCalculator(81, 1.85));
