/*
BMI Calculator Advanced (IF/ELSE)
Previously, we've created a function that is able to calculate the BMI. But once we get a result, we will want to tell the user what the number means.

Write a function that outputs (returns) a different message depending on the BMI.

BMI <18.5, the output should be: "Your BMI is <bmi>, so you are underweight."

BMI 18.5-24.9, the output should be "Your BMI is <bmi>, so you have a normal weight."

BMI >24.9, the output should be "Your BMI is <bmi>, so you are overweight."
*/

function bmiCalculator(weight, height){
    var BMI = Math.round((weight / Math.pow(height, 2) *10))/10;
    if (BMI <= 18.5) {
        message = `Your BMI is ${BMI}, so you are underweight.`
    }
    if (18.5 <= BMI <= 24.9) {
        message = `Your BMI is ${BMI}, so you have a normal weight.`
    }
    if (BMI >= 24.9) {
        message = `Your BMI is ${BMI}, so you are overweight.`
    }
    return message;
}

console.log(bmiCalculator(60,1.7))