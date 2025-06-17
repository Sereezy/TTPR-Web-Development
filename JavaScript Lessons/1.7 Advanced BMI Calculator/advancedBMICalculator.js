/*
BMI Calculator Advanced (IF/ELSE)
Previously, we've created a function that is able to calculate the BMI. But once we get a result, we will want to tell the user what the number means.

Write a function that outputs (returns) a different message depending on the BMI.

BMI <18.5, the output should be: "Your BMI is <bmi>, so you are underweight."

BMI 18.5-24.9, the output should be "Your BMI is <bmi>, so you have a normal weight."

BMI >24.9, the output should be "Your BMI is <bmi>, so you are overweight."
*/



function advancedBMICalculator(weight, height){
    let BMI = (weight/height)^2
    if (BMI < 18.5) {
        return (`Your BMI is ${BMI}, so you are underweight.`)
    } else if (BMI > 18.5 && BMI < 24.9) {
        return (`Your BMI is ${BMI}, so you have normal weight.`)
    } else (BMI > 24.9); {
        return (`Your BMI is ${BMI}, so you are overweight.`)
    }
}

console.log(advancedBMICalculator(60, 1.6))